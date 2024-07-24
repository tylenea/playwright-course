import { test, expect } from '@playwright/test';
import { FooterNavigationComponents } from '../../components/FooterNavigationComponents';
let page;

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
});
test('Footer Navigation to General', async ({}) => {
  const FooterNavigation= new FooterNavigationComponents(page);
  await FooterNavigation.General("Contact");
  await FooterNavigation.General("Products");
  await FooterNavigation.General("Our Story");

  await expect(page.getByRole('heading', { name: 'General' })).toBeVisible();
});

test('Footer Navigation to Help ', async ({}) => {
  const FooterNavigation= new FooterNavigationComponents(page);
  await FooterNavigation.Help("Returns");
  await FooterNavigation.Help("Shipping");

  await expect(page.getByRole('heading', { name: 'Help' })).toBeVisible();
});

test('Footer Navigation to Contact us ', async ({}) => {
  const FooterNavigation= new FooterNavigationComponents(page);
  await FooterNavigation.ContactUs("Get in touch");
  await page.goBack();
  await FooterNavigation.ContactUs("fur@example.com");
  await page.getByRole('contentinfo').click();
  await FooterNavigation.ContactUs("+1");
  await page.getByRole('contentinfo').click();
  
  const Assertion = new FooterNavigationComponents(page);
  await Assertion.ContactUsAssertion();
 //clicking on social media icons
 // await page.locator('li').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').first().click();
// await page.locator('body > footer > div > ul > li:nth-child(4) > div > a.youtube > svg').click();
//await page.goBack();
 // await page.locator('li').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').nth(1).click();
 // await page.goBack();
 // await page.locator('li').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').nth(2).click();
 // await page.goBack();
});

test('Footer info Navigation', async ({}) => {
  const FooterNavigation = new FooterNavigationComponents(page);
  await FooterNavigation.FooterInfo;
  await page.goBack();
  
  await FooterNavigation.FooterInfoAssertion;
});
