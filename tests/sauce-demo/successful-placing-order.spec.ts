import { test, expect, Page } from '@playwright/test';
import { LogInComponent } from '../../components-sauce-demo/LogInComponent';
import { PaymentPage } from '../../sauce-demo-pages/Payment-page';
let page: Page;
let paymentPage: PaymentPage;

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');

  const logIn = new LogInComponent(page)
await logIn.LogIn({username:'standard_user', 
  password: 'secret_sauce'
});
paymentPage = new PaymentPage(page);
});

test('place an order with successful result', async ({}) => {

  await paymentPage.CartComponent.addToCart('backpack');
  await paymentPage.CartComponent.checkout();
 
  await paymentPage.ProductDetails.fillOutForm(
    {
      firstName: "tylenea",
  lastName: "anime",
  postalCode: "555",
}
  );  
  await paymentPage.ProductDetails.Continue();

  await paymentPage.SuccessfullPaymentAssetion.ContinueCheck();

  await paymentPage.finishOrder();

  await paymentPage.SuccessfullPaymentAssetion.FinishPaymentAssertion();
  
 await paymentPage.navigaToProducts();
});