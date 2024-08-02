import { test, expect, Page } from '@playwright/test';
import { LogInComponent } from '../../components-sauce-demo/LogInComponent';
import { ProductInfoComponent } from '../../components-sauce-demo/ProductInformationComponent';
let page: Page;
let productComponent: ProductInfoComponent;


test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  const logIn = new LogInComponent(page)
  await logIn.LogIn({username:'standard_user', 
    password: 'secret_sauce'
  });
  productComponent = new ProductInfoComponent(page);
});
test('Sauce Labs Backpack product info check', async ({}) => {
  
  await productComponent.NavigateToProduct(4);
  await productComponent.ProductInfoAssertion('sauce-labs-backpack');
  await productComponent.AddToCartButton();
  await productComponent.BackToProducts();

});
test('Sauce Labs Bike Light product info check', async ({}) => {
  
  await productComponent.NavigateToProduct(0);
  await productComponent.ProductInfoAssertion('sauce-labs-bike-light');
  await productComponent.AddToCartButton();
  await productComponent.BackToProducts();
});

test('Sauce Labs Bolt T-Shirt product info check', async ({}) => {
  
  await productComponent.NavigateToProduct(1);  
  await productComponent.ProductInfoAssertion('sauce-labs-bolt-t-shirt');
  await productComponent.AddToCartButton();
  await productComponent. BackToProducts();
});

test('Sauce Labs Fleece Jacket product info check', async ({}) => {
  
  await productComponent.NavigateToProduct(5);
  await productComponent.ProductInfoAssertion('sauce-labs-fleece-jacket');
  await productComponent.AddToCartButton();
  await productComponent.BackToProducts();
});

test('Sauce Labs Onesie product info check', async ({}) => {  
  
  await productComponent.NavigateToProduct(2);
  await productComponent.ProductInfoAssertion('sauce-labs-onesie');
    await productComponent.AddToCartButton();
    await productComponent.BackToProducts();
});

test('Test.allTheThings() T-Shirt (Red) product info check', async ({}) => { 
  
  await productComponent.NavigateToProduct(3);
  await productComponent.ProductInfoAssertion('test\\.allthethings\\(\\)-t-shirt-\\(red\\)');
  await productComponent.AddToCartButton();
  await productComponent.BackToProducts();
});
  