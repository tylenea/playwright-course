import { test, expect } from '@playwright/test';
let page;
let now = new Date();
let currentYear = now.getFullYear();

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

test('Sidebar Navigation', async ({}) => {
  await page.getByRole('button', { name: 'Open Menu' }).click();
  
  await expect(page.locator('[data-test="inventory-sidebar-link"]')).toBeVisible();
  await expect(page.locator('[data-test="about-sidebar-link"]')).toBeVisible();
  await expect(page.locator('[data-test="logout-sidebar-link"]')).toBeVisible();
  await expect(page.locator('[data-test="reset-sidebar-link"]')).toBeVisible();
  await expect(page.locator('[data-test="reset-sidebar-link"]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close Menu' })).toBeVisible();

  await page.getByRole('button', { name: 'Close Menu' }).click();
});

test('Top Navigation assertion', async ({}) => {

  await expect(page.getByText('Swag Labs')).toBeVisible();
  await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
});

test('Shoppping cart check', async ({}) => {
await page.locator('[data-test="shopping-cart-link"]').click();  

await expect(page.locator('[data-test="checkout"]')).toBeVisible();
await expect(page.locator('[data-test="continue-shopping"]')).toBeVisible();
await expect(page.locator('[data-test="title"]')).toBeVisible();
await expect(page.locator('[data-test="cart-desc-label"]')).toBeVisible();
await expect(page.locator('[data-test="cart-quantity-label"]')).toBeVisible();
await page.locator('[data-test="continue-shopping"]').click();

});

test('Product filter check', async ({}) => {
  await page.locator('[data-test="secondary-header"]').click();
  await page.getByText('Name (A to Z)Name (A to Z)').click();
  await page.locator('[data-test="secondary-header"]').click();
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
  await page.locator('[data-test="product-sort-container"]').selectOption('az');
  await page.locator('[data-test="product-sort-container"]').selectOption('za');
  

});

test('Footer navigation', async ({}) => {
  const page1Promise = page.waitForEvent('popup');
  await page.locator('[data-test="social-twitter"]').click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.locator('[data-test="social-facebook"]').click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent('popup');
  await page.locator('[data-test="social-linkedin"]').click();
  const page3 = await page3Promise;

  await expect(page.locator('[data-test="social-twitter"]')).toBeVisible();
  await expect(page.locator('[data-test="social-facebook"]')).toBeVisible();
  await expect(page.locator('[data-test="social-linkedin"]')).toBeVisible();
  await expect(page.locator('[data-test="footer-copy"]')).toBeVisible();
  await expect(page.getByText('© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy'))
  .toContainText(`© ${currentYear} Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy`);
});