import { test, expect, Page } from '@playwright/test';
import { LogInComponent } from '../../components-sauce-demo/LogInComponent';
import { NavigationComponent } from '../../components-sauce-demo/navigationComponent';
let page: Page;
let Navigation: NavigationComponent;

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  const logIn = new LogInComponent(page)
await logIn.LogIn({username:'standard_user', 
  password: 'secret_sauce'
});
Navigation = new NavigationComponent(page);  
});

test('Sidebar Navigation', async ({}) => {
  await Navigation.Menubutton("Open Menu");
  await Navigation.SideBarAssertion();
});

test('Top Navigation assertion', async ({}) => {
  await Navigation.TopNavigationAssertion();
});

test('Shoppping cart check', async ({}) => {
await Navigation.ShoppingCartAssertion();

});

test('Product filter check', async ({}) => {
  await Navigation.ProductFilter();
});

test('Footer navigation', async ({}) => {
  await Navigation.FooterNavigation();
  await Navigation.FooterAssertion();
});