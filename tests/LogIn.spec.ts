import { test, expect } from '@playwright/test';

test('log in/open account', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('Peter1');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('peterpeter1');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Open New Account' }).click();
  await page.getByRole('button', { name: 'Open New Account' }).click();
  await page.getByRole('link', { name: '22002' }).click();
  await page.pause();
  await page.getByRole('button', { name: 'Go' }).click();
});