import { test, expect } from '@playwright/test';

test('update Contact info', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('Peter1');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('peterpete1');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Update Contact Info' }).click();
  await page.locator('[id="customer\\.firstName"]').click();
  await page.locator('[id="customer\\.firstName"]').fill('');
  await page.locator('[id="customer\\.lastName"]').click();
  await page.locator('[id="customer\\.lastName"]').fill('');
  await page.locator('[id="customer\\.address\\.street"]').click();
  await page.locator('[id="customer\\.address\\.street"]').fill('');
  await page.locator('[id="customer\\.address\\.city"]').click();
  await page.locator('[id="customer\\.address\\.city"]').fill('');
  await page.locator('[id="customer\\.address\\.state"]').click();
  await page.locator('[id="customer\\.address\\.state"]').fill('');
  await page.locator('[id="customer\\.address\\.zipCode"]').click();
  await page.locator('[id="customer\\.address\\.zipCode"]').fill('');
  await page.locator('[id="customer\\.phoneNumber"]').click();
  await page.locator('[id="customer\\.phoneNumber"]').fill('');  
  await page.getByRole('button', { name: 'Update Profile' }).click();
  await page.getByRole('link', { name: 'Open New Account' }).click();
  await page.getByRole('link', { name: 'Accounts Overview' }).click();
});