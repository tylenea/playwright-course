import { test, expect, } from '@playwright/test';
let page;

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
  
  test.setTimeout(60000);
});

test('Create an order should display success page', async ({}) => {
  //add to cart
  await page.getByRole('link', { name: 'Bumble the Elephant' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  //change cart options
  await page.getByLabel('Size').selectOption('Small');
  await page.getByLabel('Color').selectOption('Green');
  await page.getByLabel('Increment quantity').click({
    clickCount: 3
  });
  //assert and click checkout
  await expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible();
  await page.getByRole('button', { name: 'Checkout' }).click();

  //fill out payment details  
  await page.getByLabel('Full name').fill('Tylenea');
  await page.getByLabel('Email').fill('tylenea@mail.com');
  await page.locator('.snipcart-textbox').first().click();
  await page.getByLabel('Street address').fill('free');
  await page.getByText('Freedom Trail').first().click();
  //DIRTY_FIX wait for 5 sec 
  await page.waitForTimeout(5000);
 //PROPER_FIX wait for response  
 //await page.waitForResponse(
   //(response) =>
  //    response.url().includes("api/localization/adresses") &&
   //   response.status() === 200 &&
  //    response.request().method() === "GET"
 // );
  await page.getByLabel('Apt/Suite').click();
  await page.getByLabel('Apt/Suite').fill('123');
  //await page.getByLabel('City').click();
  //await page.getByLabel('City').fill('Boston');
  

  
  
  //await page.getByText('Country').click();
  //await page.getByLabel('Country').click();
 // await page.getByLabel('Country').fill('United States');
 // await page.getByText('United States').click();
 // await page.locator('.snipcart-form__row > div > .snipcart-typeahead > .snipcart-typeahead__content > .snipcart-typeahead__select > .snipcart-typeahead__input > .snipcart-form__select-wrapper > .snipcart-textbox').click();
 // await page.getByLabel('Province/State').click();
 // await page.getByLabel('Province/State').fill('Massachusetts');
  await page.getByLabel('Postal/ZIP code').fill('555');

  //assert and submit payment
  await expect(page.getByRole('button', { name: 'Continue to payment' })).toBeVisible();
  await page.getByRole('button', { name: 'Continue to payment' }).click();
  
  //fill cart details
  await page.frameLocator('iframe').getByPlaceholder('Card number').click();
  await page.frameLocator('iframe').getByPlaceholder('Card number').fill('4242 4242 4242 4242');
  await page.frameLocator('iframe').getByPlaceholder('MM/YY').click();
  await page.frameLocator('iframe').getByPlaceholder('MM/YY').fill('12/26');
  await page.frameLocator('iframe').getByPlaceholder('CVV').click();
  await page.frameLocator('iframe').getByPlaceholder('CVV').fill('123');
  //place order
  await page.getByRole('button', { name: 'Place order' }).click();

  // success screen - acces order details
  await expect(page.getByRole('heading', { name: 'Thank you for your order' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Cart summary' })).toBeVisible();
  await expect(page.locator('.snipcart-billing-completed__header')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Payment$/ })).toBeVisible();
  await expect(page.getByText('Total', { exact: true })).toBeVisible();
  await expect(page.getByText('$').nth(2)).toBeVisible();
  await page.pause();
  await expect(page.getByText('$').nth(1)).toBeVisible();
});