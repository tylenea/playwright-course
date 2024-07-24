import { test, expect, Page } from '@playwright/test';
import { CartComponent } from '../../components/CartComponent';
import { PaymentDetailsComponent } from '../../components/PaymentDetailComponent';
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
  const paymentDetails = new PaymentDetailsComponent(page);
 
  await cart.addToCart('Bumble the Elephant' );
  await cart.changeCartOptions();
  await cart.checkout();
 
  await paymentDetails.fillOutForm();
  
  await page.waitForResponse(
   (response) =>
      response.url().includes("api/localization/addresses") &&
      response.status() === 200 &&
      response.request().method() === "GET"
  );
  
  await paymentDetails.fillOutApartment();
  await paymentDetails.FillOutCity();
  await paymentDetails.fillOutZipCode();
 
  await paymentDetails.submit();
 
  await paymentDetails.fillCardDetails();
 
  await paymentDetails.placeOrder();
 
  await paymentDetails.assertSuccessScreen();
  //DIRTY_FIX wait for 5 sec 
 // await page.waitForTimeout(5000);
 //PROPER_FIX wait for response  

});