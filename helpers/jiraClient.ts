import { APIRequestContext } from '@playwright/test';

export class JiraClient {
  private request: APIRequestContext;
  private baseUrl: string;
  private authHeader: { Authorization: string };

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = process.env.JIRA_BASE_URL!;
    const token = Buffer.from(`${process.env.JIRA_EMAIL}:${process.env.JIRA_API_TOKEN}`).toString('base64');
    this.authHeader = { Authorization: `Basic ${token}` };
  }

  async getMyself() {
    const response = await this.request.get(`${this.baseUrl}/rest/api/3/myself`, {
      headers: {
        ...this.authHeader,
        Accept: 'application/json',
      },
    });
    return response;
  }

  async getFilter(filterId: string) {
    return this.request.get(`${this.baseUrl}/rest/api/3/filter/${filterId}`, {
      headers: { ...this.authHeader, Accept: 'application/json' },
    });
  }

  async searchJQL(jql: string, startAt = 0, maxResults = 50) {
    return this.request.post(`${this.baseUrl}/rest/api/3/search`, {
      headers: {
        ...this.authHeader,
        'Content-Type': 'application/json',
      },
      data: { jql, startAt, maxResults },
    });
  }
}
