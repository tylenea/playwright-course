import { test, expect, Page } from '@playwright/test';
import { CartComponent } from '../../components/CartComponent';
import { PaymentDetailsComponent } from '../../components/PaymentDetailComponent';
import { PaymentPage } from '../../pages/PaymentPage';
import { pathToFileURL } from 'url';
let page: Page;

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
  
  test.setTimeout(60000);
});

test('Create an order should display success page', async ({}) => {
  const cart = new CartComponent(page);
  const paymentPage = new PaymentPage(page);
 
  await cart.addToCart('Bumble the Elephant' );
  await cart.changeCartOptions();
  await cart.checkout();
 
  await paymentPage.billingDetails.fillOutForm();
  
  await page.waitForResponse(
   (response) =>
      response.url().includes("api/localization/addresses") &&
      response.status() === 200 &&
      response.request().method() === "GET"
  );
  
  await paymentPage.billingDetails.fillOutApartment();
  await paymentPage.billingDetails.FillOutCity();
  await paymentPage.billingDetails.fillOutZipCode();
 
  await paymentPage.billingDetails.submit();
 
  await paymentPage.paymentDetails.fillCardDetails();
  await paymentPage.paymentDetails.placeOrder();
 
  await paymentPage.successfulPayment.assertSuccessScreen();
});