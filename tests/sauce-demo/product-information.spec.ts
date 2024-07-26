import { test, expect, Page } from '@playwright/test';
import { LogInComponent } from '../../components-sauce-demo/LogInComponent';
import { ProductInfoComponent } from '../../components-sauce-demo/ProductInformationComponent';
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
test('Sauce Labs Backpack product info check', async ({}) => {
  const {NavigaToProduct} = new ProductInfoComponent(page);
  const {ProductInfoAssertion} = new ProductInfoComponent(page);
  const {AddToCartButton} = new ProductInfoComponent(page);
  const {BackToProducts} = new ProductInfoComponent(page);
  
  await NavigaToProduct(4);
  await ProductInfoAssertion('sauce-labs-backpack');
  await AddToCartButton();
  await BackToProducts();

});
test('Sauce Labs Bike Light product info check', async ({}) => {
  
  const {NavigaToProduct} = new ProductInfoComponent(page);
  const {ProductInfoAssertion} = new ProductInfoComponent(page);
  const {AddToCartButton} = new ProductInfoComponent(page);
  const {BackToProducts} = new ProductInfoComponent(page);
  
  await NavigaToProduct(0);
  await ProductInfoAssertion('sauce-labs-bike-light');
  await AddToCartButton();
  await BackToProducts();
});

test('Sauce Labs Bolt T-Shirt product info check', async ({}) => {
  const {NavigaToProduct} = new ProductInfoComponent(page);
  const {ProductInfoAssertion} = new ProductInfoComponent(page);
  const {AddToCartButton} = new ProductInfoComponent(page);
  const {BackToProducts} = new ProductInfoComponent(page);
  
  await NavigaToProduct(1);  
  await ProductInfoAssertion('sauce-labs-bolt-t-shirt');
  await AddToCartButton();
  await BackToProducts();
});

test('Sauce Labs Fleece Jacket product info check', async ({}) => {
  const {NavigaToProduct} = new ProductInfoComponent(page);
  const {ProductInfoAssertion} = new ProductInfoComponent(page);
  const {AddToCartButton} = new ProductInfoComponent(page);
  const {BackToProducts} = new ProductInfoComponent(page);
  
  await NavigaToProduct(5);
  await ProductInfoAssertion('sauce-labs-fleece-jacket');
  await AddToCartButton();
  await BackToProducts();
});

test('Sauce Labs Onesie product info check', async ({}) => {  
  const {NavigaToProduct} = new ProductInfoComponent(page);
  const {ProductInfoAssertion} = new ProductInfoComponent(page);
  const {AddToCartButton} = new ProductInfoComponent(page);
  const {BackToProducts} = new ProductInfoComponent(page);
  
  await NavigaToProduct(2);
  await ProductInfoAssertion('sauce-labs-onesie');
    await AddToCartButton();
    await BackToProducts();
});

test('Test.allTheThings() T-Shirt (Red) product info check', async ({}) => { 
  const {NavigaToProduct} = new ProductInfoComponent(page);
  const {ProductInfoAssertion} = new ProductInfoComponent(page);
  const {AddToCartButton} = new ProductInfoComponent(page);
  const {BackToProducts} = new ProductInfoComponent(page);
  
  await NavigaToProduct(3);
  await ProductInfoAssertion('test\\.allthethings\\(\\)-t-shirt-\\(red\\)');
  await AddToCartButton();
  await BackToProducts();
});
  