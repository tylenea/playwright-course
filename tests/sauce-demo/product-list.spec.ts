import { test, expect, Page } from '@playwright/test';
import { LogInComponent } from '../../components-sauce-demo/LogInComponent';
import { ProductPage } from '../../sauce-demo-pages/ProductsPage';

let page:Page;
let productPage:ProductPage;

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');

const logIn = new LogInComponent(page)
await logIn.LogIn({username:'standard_user', 
  password: 'secret_sauce'});
  productPage  = new ProductPage(page)
});

test('Product list has titles', async ({}) => {  
  await productPage.Products.getTitle(0);
  await productPage.Products.getTitle(1);
  await productPage.Products.getTitle(2);
  await productPage.Products.getTitle(3);
  await productPage.Products.getTitle(4);
  await productPage.Products.getTitle(5);
});

test('Product list has images', async ({}) => {
  await productPage.Products.getImage(0);
  await productPage.Products.getImage(1);
  await productPage.Products.getImage(2);
  await productPage.Products.getImage(3);
  await productPage.Products.getImage(4);
  await productPage.Products.getImage(5);
});

test('Product list has prices', async ({}) => {
  await productPage.Products.getPrice;
});

test('Product list page has add to cart button', async ({}) => {
  await productPage.Products.getAddToCartButton('backpack');
  await productPage.Products.getAddToCartButton('bike-light');
  await productPage.Products.getAddToCartButton("bolt-t-shirt");
  await productPage.Products.getAddToCartButton('fleece-jacket');
  await productPage.Products.getAddToCartButton('onesie');

});

test('Add to cart product and than remove from the cart', async ({}) => {
  await productPage.Products.AddToCartButton('backpack');
  await productPage.Products.AddToCartButton('bike-light');
  await productPage.Products.AddToCartButton("bolt-t-shirt");
  await productPage.Products.AddToCartButton('fleece-jacket');
  await productPage.Products.AddToCartButton('onesie');
  await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
  
  await productPage.Products.getRemoveButton('backpack');
  await productPage.Products.getRemoveButton('bike-light');
  await productPage.Products.getRemoveButton("bolt-t-shirt");
  await productPage.Products.getRemoveButton('fleece-jacket');
  await productPage.Products.getRemoveButton('onesie');
  await expect(page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]')).toBeVisible();

 await productPage.Products.RemoveButton('backpack');
 await productPage.Products.RemoveButton('bike-light');
 await productPage.Products.RemoveButton("bolt-t-shirt");
 await productPage.Products.RemoveButton('fleece-jacket');
 await productPage.Products.RemoveButton('onesie');
 await page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();

  await productPage.Products.getAddToCartButton('backpack');
  await productPage.Products.getAddToCartButton('bike-light');
  await productPage.Products.getAddToCartButton("bolt-t-shirt");
  await productPage.Products.getAddToCartButton('fleece-jacket');
  await productPage.Products.getAddToCartButton('onesie');
});