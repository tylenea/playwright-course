import { test, expect } from '@playwright/test';
let page;

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
test('place an order with successful result', async ({}) => {
  //add to cart product
  await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  //make check out
  await page.locator('[data-test="checkout"]').click();
  //fill in all information
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('tylenea');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('test');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('555');
// check title and continue button
  await expect(page.locator('[data-test="continue"]')).toBeVisible();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
//clicking continue
  await page.locator('[data-test="continue"]').click();
//checking headers
  await expect(page.locator('[data-test="total-info-label"]')).toBeVisible();
  await expect(page.locator('[data-test="total-label"]')).toBeVisible();
  await expect(page.locator('[data-test="finish"]')).toBeVisible();
//finishing placing an order
  await page.locator('[data-test="finish"]').click();
//check of succesfull result
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
  await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();

  await page.locator('[data-test="back-to-products"]').click();
});