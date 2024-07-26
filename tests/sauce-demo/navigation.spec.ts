import { test, expect, Page } from '@playwright/test';
import { LogInComponent } from '../../components-sauce-demo/LogInComponent';
import { NavigationComponent } from '../../components-sauce-demo/navigationComponent';
let page: Page;

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  const logIn = new LogInComponent(page)
await logIn.LogIn({username:'standard_user', 
  password: 'secret_sauce'
})

  
});

test('Sidebar Navigation', async ({}) => {
  const Navigation = new NavigationComponent(page);
  await Navigation.Menubutton("Open Menu");
  await Navigation.SideBarAssertion;
});

test('Top Navigation assertion', async ({}) => {
  const Navigation = new NavigationComponent(page);
  await Navigation.TopNavigationAssertion;
});

test('Shoppping cart check', async ({}) => {
await page.locator('[data-test="shopping-cart-link"]').click();  

await expect(page.locator('[data-test="checkout"]')).toBeVisible();
await expect(page.locator('[data-test="continue-shopping"]')).toBeVisible();
await expect(page.locator('[data-test="title"]')).toBeVisible();
await expect(page.locator('[data-test="cart-desc-label"]')).toBeVisible();
await expect(page.locator('[data-test="cart-quantity-label"]')).toBeVisible();
await page.locator('[data-test="continue-shopping"]').click();

});

test('Product filter check', async ({}) => {
  const  {ProductFilter} = new NavigationComponent(page)
  await ProductFilter();

});

test('Footer navigation', async ({}) => {
  const {FooterNavigation} = new NavigationComponent(page);
  const {FooterAssertion} = new NavigationComponent(page);
  await FooterNavigation;
  await FooterAssertion;
});