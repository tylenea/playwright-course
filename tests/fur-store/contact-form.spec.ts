import { test, expect } from '@playwright/test';

let page;

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact/');
});


test('check Contact page has header, form title, map, button "Send a message" ', async ({ }) => {
  await expect(page.getByRole('heading', { name: 'Get in touch' })).toBeVisible();
  await expect.soft(page.locator('#map')).toBeVisible();
  await expect.soft(page.getByText('Send us a message Full Name')).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Send Message' })).toBeVisible();
});

test('submit Contact form navigates to succes page', async ({  }) => {
  
 //await page.getByPlaceholder('Enter your name...').click();
  await page.getByPlaceholder('Enter your name...').fill('Tylenea');
 // await page.getByPlaceholder('Enter your email...').click();
  await page.getByPlaceholder('Enter your email...').fill('tylenea@gmail.com');
 // await page.getByPlaceholder('Enter your message...').click();
  await page.getByPlaceholder('Enter your message...').fill('i have a problem');
  await page.getByRole('button', { name: 'Send Message' }).click();

  await expect(page).toHaveURL('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact-success/');
});