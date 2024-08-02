import { expect, Page} from "@playwright/test";

class SuccessfullPaymentAssertion{
    #totalInfoHeading = this.page.locator('[data-test="total-info-label"]');
    #totalLabelHeading = this.page.locator('[data-test="total-label"]');
    #finishButton = this.page.locator('[data-test="finish"]');
    #finishlogo = this.page.locator('[data-test="pony-express"]');
    #completeHeader = this.page.locator('[data-test="complete-header"]');
    #completeText = this.page.locator('[data-test="complete-text"]');
constructor( private page: Page) {}
    async ContinueCheck(){
    await expect(this.#totalInfoHeading).toBeVisible();
    await expect(this.#totalLabelHeading).toBeVisible();
    await expect(this.#finishButton).toBeVisible();
    }
    async FinishPaymentAssertion(){
        await expect(this.#finishlogo).toBeVisible();
        await expect(this.#completeHeader).toBeVisible();
        await expect(this.#completeText).toBeVisible();
    }
    
    
    
}
export {SuccessfullPaymentAssertion}