import { test, expect } from '@playwright/test';
import { LogInComponent } from '../../components-sauce-demo/LogInComponent';
import { PaymentPage } from '../../sauce-demo-pages/Payment-page';
import { CartComponent} from '../../components-sauce-demo/cart-component';
import { ProductDetails } from '../../components-sauce-demo/product-details';
let page;

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');

  const logIn = new LogInComponent(page)
await logIn.LogIn({username:'standard_user', 
  password: 'secret_sauce'
})
});

test('place an order with successful result', async ({}) => {
  const paymentPage = new PaymentPage(page);

  await paymentPage.CartComponent.addToCart('backpack');
  await paymentPage.CartComponent.checkout();
 
  await paymentPage.ProductDetails.FillForm();
  await expect(page.locator('[data-test="continue"]')).toBeVisible();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  
  await paymentPage.ProductDetails.Continue();

  await expect(page.locator('[data-test="total-info-label"]')).toBeVisible();
  await expect(page.locator('[data-test="total-label"]')).toBeVisible();
  await expect(page.locator('[data-test="finish"]')).toBeVisible();

  await paymentPage.finishOrder();

  await paymentPage.SuccessfullPaymentAssetion;
  
 await paymentPage.navigaToProducts();
});