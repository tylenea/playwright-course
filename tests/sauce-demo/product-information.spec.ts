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
test('Sauce Labs Backpack product info check', async ({}) => {
  await page.locator('[data-test="item-4-title-link"]').click();

  await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-price"]')).toBeVisible();
  await expect(page.locator('[data-test="item-sauce-labs-backpack-img"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
  await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
  //check add to cart button

  await page.locator('[data-test="add-to-cart"]').click();
  await expect(page.locator('[data-test="remove"]')).toBeVisible();
  await page.locator('[data-test="remove"]').click();
  await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
  // back to products
  await page.locator('[data-test="back-to-products"]').click();

});
test('Sauce Labs Bike Light product info check', async ({}) => {
  await page.locator('[data-test="item-0-title-link"]').click();

  await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-price"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
  await expect(page.locator('[data-test="item-sauce-labs-bike-light-img"]')).toBeVisible();
  await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
//check add to cart button
  await page.locator('[data-test="add-to-cart"]').click();
  await expect(page.locator('[data-test="remove"]')).toBeVisible();
  await page.locator('[data-test="remove"]').click();
  await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
// back to products
await page.locator('[data-test="back-to-products"]').click();
});

test('Sauce Labs Bolt T-Shirt product info check', async ({}) => {
  await page.locator('[data-test="item-1-title-link"]').click();

  await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-price"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
  await expect(page.locator('[data-test="item-sauce-labs-bolt-t-shirt-img"]')).toBeVisible();
  await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
//check add to cart button
  await page.locator('[data-test="add-to-cart"]').click();
  await expect(page.locator('[data-test="remove"]')).toBeVisible();
  await page.locator('[data-test="remove"]').click();
  await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
// back to products
await page.locator('[data-test="back-to-products"]').click();
});

test('Sauce Labs Fleece Jacket product info check', async ({}) => {
  await page.locator('[data-test="item-5-title-link"]').click();

  await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
  await expect(page.locator('[data-test="item-sauce-labs-fleece-jacket-img"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-price"]')).toBeVisible();
  await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
//check add to cart button
  await page.locator('[data-test="add-to-cart"]').click();
  await expect(page.locator('[data-test="remove"]')).toBeVisible();
  await page.locator('[data-test="remove"]').click();
  await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
  // back to products
await page.locator('[data-test="back-to-products"]').click();
});

test('Sauce Labs Onesie product info check', async ({}) => {  
  await page.locator('[data-test="item-2-title-link"]').click();

  await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
  await expect(page.locator('[data-test="item-sauce-labs-onesie-img"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-price"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();  
  await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
  //check add to cart button
await page.locator('[data-test="add-to-cart"]').click();
await expect(page.locator('[data-test="remove"]')).toBeVisible();
await page.locator('[data-test="remove"]').click();
await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
// back to products
await page.locator('[data-test="back-to-products"]').click();
});

test('Test.allTheThings() T-Shirt (Red) product info check', async ({}) => { 
  await page.locator('[data-test="item-3-title-link"]').click();

  await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-price"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-price"]')).toBeVisible();
  await expect(page.locator('[data-test="item-test\\.allthethings\\(\\)-t-shirt-\\(red\\)-img"]')).toBeVisible();
  await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
  //check add to cart button
  await page.locator('[data-test="add-to-cart"]').click();
  await expect(page.locator('[data-test="remove"]')).toBeVisible();
  await page.locator('[data-test="remove"]').click();
  await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
  // back to products
  await page.locator('[data-test="back-to-products"]').click();
});
  