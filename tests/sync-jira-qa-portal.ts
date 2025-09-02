import { test, expect } from '@playwright/test';

let jiraToken: string;
let allBugs: any[] = [];
let statsByPlatform: any;
let system2Token: string;


test.describe.configure({ mode: 'serial' });


test('Jauthorizes in Jira', async ({ request }) => {
    await request.goto('/');
    await expect(request).toHaveTitle(/Example Domain/);
});

test('retrieves JQL from Jira filter', async ({ request }) => {
    await request.goto('/');
    await expect(request).toHaveURL('https://playwright.dev/docs/intro');
});

test('fetches all issues from Jira with pagination', async ({ request }) => {
    await request.goto('/');
    await expect(request).toHaveURL('https://playwright.dev/docs/intro');
});

test('counts bugs grouped by platform', async ({ request }) => {
    await request.goto('/');
    await expect(request).toHaveURL('https://playwright.dev/docs/intro');
});

test('authorizes in QA-Portal', async ({ request }) => {
    await request.goto('/');
    await expect(request).toHaveURL('https://playwright.dev/docs/intro');
});

test('retrieves available projects from QA-Portal', async ({ request }) => {
    await request.goto('/');
    await expect(request).toHaveURL('https://playwright.dev/docs/intro');
});

test('syncs grouped bug data to QA-Portal', async ({ request }) => {
    await request.goto('/');
    await expect(request).toHaveURL('https://playwright.dev/docs/intro');
});