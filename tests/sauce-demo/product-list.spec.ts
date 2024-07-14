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

test('Product list has titles', async ({}) => {
//  await page.goto('https://www.saucedemo.com/');
//  await expect(page.locator('[data-test="username"]')).toBeVisible();
//  await expect(page.locator('[data-test="password"]')).toBeVisible();
//  await expect(page.locator('[data-test="login-button"]')).toBeVisible();

//    await page.getByRole('button', { name: 'Open Menu' }).click();
//  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
//  await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
//  await page.locator('[data-test="product-sort-container"]').selectOption('az');
//  await page.getByRole('button', { name: 'Close Menu' }).click();
  
  
  await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-5-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-2-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-3-title-link"]')).toBeVisible();
});

test('Product list has images', async ({}) => {
  await expect(page.locator('[data-test="item-4-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-0-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-1-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-5-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-2-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-3-img-link"]')).toBeVisible();
});

test('Product list has prices', async ({}) => { 
  await expect(page.getByText('$29.99')).toBeVisible();
  await expect(page.getByText('$9.99')).toBeVisible();
  await expect(page.getByText('$15.99').first()).toBeVisible();
  await expect(page.getByText('$49.99')).toBeVisible();
  await expect(page.getByText('$7.99')).toBeVisible();
  await expect(page.getByText('$15.99').nth(1)).toBeVisible();
});

test('Product list page has add to cart button', async ({}) => {
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-onesie"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]')).toBeVisible();

});

test('Add to cart product and than remove from the cart', async ({}) => {
  //add products to cart
  
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
  
  //check if remove button is displayed
  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
  await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toBeVisible();
  await expect(page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')).toBeVisible();
  await expect(page.locator('[data-test="remove-sauce-labs-fleece-jacket"]')).toBeVisible();
  await expect(page.locator('[data-test="remove-sauce-labs-onesie"]')).toBeVisible();
  await expect(page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]')).toBeVisible();

 //remove products from the cart
  
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="remove-sauce-labs-onesie"]').click();
  await page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();

  //check if add to cart button is displayed

  await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-onesie"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]')).toBeVisible();
});