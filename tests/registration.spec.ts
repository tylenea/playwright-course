import { test, expect } from '@playwright/test';

test('registration', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.getByText('Solutions About Us Services Products Locations Admin Page home about contact').click();
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('table').click();
  await page.locator('[id="customer\\.phoneNumber"]').fill('');
  await page.locator('[id="customer\\.firstName"]').click();
  await page.locator('[id="customer\\.firstName"]').fill('PETER');
  await page.locator('[id="customer\\.lastName"]').click();
  await page.locator('[id="customer\\.lastName"]').fill('PETERR');
  await page.locator('[id="customer\\.address\\.street"]').click();
  await page.locator('[id="customer\\.address\\.street"]').fill('freedom street');
  await page.locator('[id="customer\\.address\\.city"]').click();
  await page.locator('[id="customer\\.address\\.city"]').fill('NEW YORK');
  await page.locator('[id="customer\\.address\\.state"]').click();
  await page.locator('[id="customer\\.address\\.state"]').fill('Washington');
  await page.locator('[id="customer\\.address\\.zipCode"]').click();
  await page.locator('[id="customer\\.address\\.zipCode"]').fill('555');
  await page.locator('[id="customer\\.phoneNumber"]').click();
  await page.locator('[id="customer\\.phoneNumber"]').fill('66666666');
  await page.locator('[id="customer\\.ssn"]').click();
  await page.locator('[id="customer\\.ssn"]').fill('5555');
  await page.locator('[id="customer\\.username"]').click();
  await page.locator('[id="customer\\.username"]').fill('Peter2');
  await page.locator('[id="customer\\.password"]').click();
  await page.locator('[id="customer\\.password"]').fill('peterpeter1');
  await page.locator('#repeatedPassword').click();
  await page.locator('#repeatedPassword').fill('peterpeter');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.pause();
  await page.getByRole('link', { name: 'Home', exact: true }).click();
});