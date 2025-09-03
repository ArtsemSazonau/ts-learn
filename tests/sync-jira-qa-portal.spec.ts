import { test, expect } from '@playwright/test';
import { JiraClient } from '../helpers/jiraClient';


let jiraUser: any;
let filterJQL: string;




test.describe.configure({ mode: 'serial' });


test('Jauthorizes in Jira', async ({ request }) => {

    const jiraClient = new JiraClient(request);
    const jiraEmail: string = process.env.JIRA_EMAIL!;

    const response = await jiraClient.getMyself();
    expect(response.ok()).toBeTruthy();

    jiraUser = await response.json();
    console.log('✅ Jira user:', jiraUser.emailAddress);
    expect(jiraUser.emailAddress).toEqual(jiraEmail);
  
});

test('retrieves JQL from Jira filter', async ({ request }) => {
    const jiraClient = new JiraClient(request);
    const filterId = process.env.JIRA_FILTER_ID!;
    const response = await jiraClient.getFilter(filterId);

    expect(response.ok()).toBeTruthy();

    const filter = await response.json();
    filterJQL = filter.searchUrl;

    console.log('✅ JQL retrieved:', filterJQL);
    expect(filterJQL).toBeTruthy();

});

test.skip('fetches all issues from Jira with pagination', async ({ request }) => {
    await request.goto('/');
    await expect(request).toHaveURL('https://playwright.dev/docs/intro');
});

test.skip('counts bugs grouped by platform', async ({ request }) => {
    await request.goto('/');
    await expect(request).toHaveURL('https://playwright.dev/docs/intro');
});

test.skip('authorizes in QA-Portal', async ({ request }) => {
    await request.goto('/');
    await expect(request).toHaveURL('https://playwright.dev/docs/intro');
});

test.skip('retrieves available projects from QA-Portal', async ({ request }) => {
    await request.goto('/');
    await expect(request).toHaveURL('https://playwright.dev/docs/intro');
});

test.skip('syncs grouped bug data to QA-Portal', async ({ request }) => {
    await request.goto('/');
    await expect(request).toHaveURL('https://playwright.dev/docs/intro');
});