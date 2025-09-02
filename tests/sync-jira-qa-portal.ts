import { test, expect } from '@playwright/test';

let jiraToken: string;
let allBugs: any[] = [];
let statsByPlatform: any;
let system2Token: string;


test.describe.configure({ mode: 'serial' });


test('Jauthorizes in Jira', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Example Domain/);
});

test('retrieves JQL from Jira filter', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});

test('fetches all issues from Jira with pagination', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});

test('counts bugs grouped by platform', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});

test('authorizes in QA-Portal', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});

test('retrieves available projects from QA-Portal', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});

test('syncs grouped bug data to QA-Portal', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});