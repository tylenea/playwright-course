import { test, expect, Page } from '@playwright/test';
import {ContactUsComponent} from '../../components/ContactFormComponents'
import { ContactUsPage } from '../../pages/ContactUsPage';

let page: Page;

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  const contactUsPage = new ContactUsPage(page)
  await contactUsPage.open();
});


test('contact page has a header', async ({ }) => {
  const contactUsPage= new ContactUsPage (page);
  await expect(contactUsPage.getHeading()).toBeVisible();
});

test('contact page has a form title', async ({ }) => {
  const contactUsPage= new ContactUsPage (page);
  await expect(contactUsPage.ContactUsComponent.getFormTitle()).toBeVisible();
});

test('contact page has a map', async ({ }) => {
  const contactUsPage= new ContactUsPage (page);
  await expect( contactUsPage.ContactUsComponent.getMap()).toBeVisible();
});

test('submit Contact form navigates to succes page', async ({  }) => {
  const contactUsPage= new ContactUsPage (page);

  await contactUsPage.ContactUsComponent.fillContactForm ({
    name: 'tylenea',
    email: 'tylenea@testmail.com',
    message:'I have a problem'
});
expect(page.url()).toContain("contact-success");

});