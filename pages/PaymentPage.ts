import { Page } from '@playwright/test';
import { BillingDetailsComponent } from '../components/BillingDetailsComponent';
import { PaymentDetailsComponent} from '../components/PaymentDetailsComponents';
import { SuccessfulPaymentComponent } from '../components/SuccessfulPaymentComponent';

class PaymentPage {
  billingDetails = new BillingDetailsComponent(this.page);
 paymentDetails = new PaymentDetailsComponent(this.page);
  successfulPayment = new SuccessfulPaymentComponent(this.page);

  constructor(private page: Page) {
    this.page = page;
  }

  async getHeading(){
    return this.page.locator("h1")
  }
  async getFooter(){
    return this.page.getByRole("contentinfo")
  }
}

export { PaymentPage };