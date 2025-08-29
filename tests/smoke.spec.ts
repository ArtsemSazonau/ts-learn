import { test, expect } from '@playwright/test';

test('opens homepage and checks title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Example Domain/);
});

test('failed test, check URL', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});

test('jira credentials check', async () => {
    console.log('Token: ', process.env.JIRA_API_TOKEN);
    console.log('Email: ', process.env.JIRA_EMAIL);
    console.log('URL: ', process.env.JIRA_BASE_URL);
})