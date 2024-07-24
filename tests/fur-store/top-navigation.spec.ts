import { test, expect, Page } from '@playwright/test';
import { topNavigationComponent } from '../../components/TopNavigationComponent';
let page: Page;

test.beforeEach(async ({browser}) => {
const context = await browser.newContext();
page = await context.newPage();
await page.goto("https://ilarionhalushka.github.io/jekyll-ecommerce-demo/");
});
//page component pattern



test('top navigation to the Our story', async ({}) => {  
 const topNavigation = new topNavigationComponent (page);
  await topNavigation.navigateTo("Our Story");
  
  await expect(page.getByRole('heading', { name: 'Our story' })).toBeVisible();
});


test('top navigation to Contact', async ({}) => {
  const topNavigation = new topNavigationComponent (page);
  await topNavigation.navigateTo("Contact");
  
  await expect(page.getByRole('heading', { name: 'Get in touch' })).toBeVisible();
  
});

test('top navigation to Products', async ({}) => {
  const topNavigation = new topNavigationComponent (page);
  await topNavigation.navigateTo("Our Story");
  await  topNavigation.navigateTo("Products");
  
  await expect(page.getByRole('heading', { name: 'Find your spirit animal' })).toBeVisible();
  await expect(page.getByText('The animal friendly clothing')).toBeVisible();
  
});

test('top navigation to Products when click on logo', async ({}) => {
  const topNavigation = new topNavigationComponent (page);
  await  topNavigation.navigateTo("Contact");
  await topNavigation.clickOnLogo();
  
  await expect(page.getByRole('heading', { name: 'Find your spirit animal' })).toBeVisible();
});