import { test, expect, Page } from '@playwright/test';
import {ContactUsComponent} from '../../components/ContactFormComponents'

let page: Page;

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact/');
});


test('contact page has a header', async ({ }) => {
  const { getHeading} = new ContactUsComponent (page);
  await expect( getHeading()).toBeVisible();
});

test('contact page has a form title', async ({ }) => {
  const { getFormTitle} = new ContactUsComponent (page);
  await expect( getFormTitle()).toBeVisible();
});

test('contact page has a map', async ({ }) => {
  const { getMap} = new ContactUsComponent (page);
  await expect( getMap()).toBeVisible();
});

test('submit Contact form navigates to succes page', async ({  }) => {
  const { fillContactForm } = new ContactUsComponent(page);

  await fillContactForm ({
    name: 'tylenea',
    email: 'tylenea@testmail.com',
    message:'I have a problem'
});
expect(page.url()).toContain("contact-success");

 // await expect(page).toHaveURL('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact-success/');
});