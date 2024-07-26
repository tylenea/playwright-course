import { expect, Page} from "@playwright/test";

class SuccessfullPaymentAssertion{
constructor( private page: Page) {}
    async SuccessfullPage(){
        await expect(this.page.locator('[data-test="total-info-label"]')).toBeVisible();
  await expect(this.page.locator('[data-test="total-label"]')).toBeVisible();
  await expect(this.page.locator('[data-test="finish"]')).toBeVisible();
    }

}
export {SuccessfullPaymentAssertion}