import { Page, expect } from "@playwright/test";
import { ProductDetails } from "../components-sauce-demo/product-details";
import { CartComponent } from "../components-sauce-demo/cart-component";
import { SuccessfullPaymentAssertion } from "../components-sauce-demo/Successful-payment-component";

class PaymentPage {
    CartComponent = new CartComponent(this.page);
    ProductDetails = new ProductDetails(this.page);
    SuccessfullPaymentAssetion = new SuccessfullPaymentAssertion(this.page);
      constructor(private page: Page) {
      this.page = page;
    }
async getHeading(){
    await expect(this.page.getByText('Swag Labs')).toBeVisible();
    
}
async getFooter(){
    await expect(this.page.locator('[data-test="footer-copy"]')).toBeVisible();
}
async finishOrder(){
    await this.page.locator('[data-test="finish"]').click();
}
async navigaToProducts(){
    await this.page.locator('[data-test="back-to-products"]').click();
}
}
export {PaymentPage}