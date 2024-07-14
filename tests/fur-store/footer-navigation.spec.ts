import { test, expect } from '@playwright/test';
let page;
let now = new Date();
let currentYear = now.getFullYear();

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
});

test('Footer Navigation to General', async ({}) => {
  await page.getByRole('contentinfo').getByRole('link', { name: 'Products' }).click();
  await page.getByRole('contentinfo').getByRole('link', { name: 'Our Story' }).click();
  await page.getByRole('contentinfo').getByRole('link', { name: 'Contact' }).click();

  await expect(page.getByRole('heading', { name: 'General' })).toBeVisible();
});

test('Footer Navigation to Help ', async ({}) => {
  await page.getByRole('link', { name: 'Shipping' }).click();
  await page.getByRole('link', { name: 'Returns' }).click();

  await expect(page.getByRole('heading', { name: 'Help' })).toBeVisible();
});

test('Footer Navigation to Contact us ', async ({}) => {
  await page.getByRole('link', { name: 'Get in touch' }).click();
  await page.goBack();
  await page.locator('p').filter({ hasText: 'fur@example.com' }).click();
  await page.goBack();
  await page.getByRole('link', { name: '+1' }).click();
  await page.goBack();
  //clicking on social media icons
 // await page.locator('li').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').first().click();
 //await page.locator('body > footer > div > ul > li:nth-child(4) > div > a.youtube > svg').click();
  //await page.goBack();
 // await page.locator('li').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').nth(1).click();
 // await page.goBack();
 // await page.locator('li').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').nth(2).click();
 // await page.goBack();

  await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Get in touch' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'fur@example.com' })).toBeVisible();
  await expect(page.getByRole('link', { name: '+1' })).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').first()).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').nth(1)).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').nth(2)).toBeVisible();


});

test('Footer info Navigation', async ({}) => {
  await page.getByRole('link', { name: 'CloudCannon' }).click();
  await page.goBack();

  await expect(page.getByRole('contentinfo').locator('#Capa_1')).toBeVisible();
  await page.getByRole('contentinfo').getByText('Fur', { exact: true }).click();
  await expect(page.getByRole('contentinfo').getByText('Fur', { exact: true })).toBeVisible();
  await expect(page.getByText('Many people have the notion')).toBeVisible();


  await expect(page.getByText('All Rights Reserved © 2023')).toBeVisible();
  //await expect(page.getByText('2023')).toEqual(now);
  //await expect(page.getByRole('contentinfo')).toContainText('All Rights Reserved © 2023 Fur, Inc. Template by CloudCannon');
  
  await expect(page.getByText('All Rights Reserved © 2023')).toContainText('All Rights Reserved © ${currentYear}');
await page.locator('li').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').first().click();
});