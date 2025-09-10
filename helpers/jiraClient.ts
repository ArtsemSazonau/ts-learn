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

 async searchJQL(jql: string, fields: string[], nextPageToken?: string, maxResults = 100) {
  const body: any = { jql, fields, maxResults };
  if (nextPageToken) {
    body.nextPageToken = nextPageToken;
  }

  const response = await this.request.post(`${this.baseUrl}/rest/api/3/search`, {
    headers: {
      ...this.authHeader,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: body,
  });

  return response;
}

async getAllIssues(jql: string, fields: string[]) {
  let issues: any[] = [];
  let nextPageToken: string | undefined;

  do {
    const response = await this.searchJQL(jql, fields, nextPageToken);
    if (!response.ok()) {
      throw new Error(`Failed to fetch issues: ${response.status()} ${response.statusText()}`);
    }

    const data = await response.json();
    issues = issues.concat(data.issues);
    nextPageToken = data.nextPageToken;
  } while (nextPageToken);

  return issues;
}


}