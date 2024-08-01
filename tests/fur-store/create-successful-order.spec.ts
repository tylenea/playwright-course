import { test, expect, Page } from '@playwright/test';
import { CartComponent } from '../../components/CartComponent';
import { PaymentPage } from '../../pages/PaymentPage';
let page: Page;
let cart: CartComponent;
let paymentPage: PaymentPage;

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
  cart = new CartComponent(page);
  paymentPage = new PaymentPage(page);
});

test('Create an order should display success page', async ({}) => {
  await cart.addToCart('Bumble the Elephant');
  await cart.incrementQuantity();
  await cart.checkout();

  await paymentPage.billingDetails.fillOutForm({
    name: 'tylenea',
    email: 'tylenea@gmail.com',
    streetAddress: 'Washington',
    zipCode: '51200',
    apartment: '123',
    city: 'Washington',
  });
  await paymentPage.billingDetails.submit();
  await paymentPage.paymentDetails.fillCardDetails({
    cardNumber: '4242424242424242',
    month: 12,
    year: new Date().getFullYear() + 1,
    cvv: '123',
  });
  await paymentPage.paymentDetails.placeOrder();
 
  await paymentPage.successfulPayment.assertSuccessScreen();
});