import { expect, Page} from "@playwright/test";

class ProductDetails{
    #lastNameInput= this.page.locator('[data-test="firstName"]');
    #firstNameInput = this.page.locator('[data-test="lastName"]');
    #postalCodeInput = this.page.locator('[data-test="postalCode"]')
    #continueButton = this.page.locator('[data-test="continue"]');
    #totalInfoHeading = this.page.locator('[data-test="total-info-label"]');
    #totalLabelHeading = this.page.locator('[data-test="total-label"]');
    #finishButton = this.page.locator('[data-test="finish"]');
constructor( private page: Page) {}

    async fillOutForm (data:{
        firstName: string,
    lastName: string,
    postalCode: string,
  }) {
    const {firstName, lastName, postalCode } = data;
    await this.#fillOutFirstName(firstName)
    await this.#fillOutLastName(lastName);
    await this.#fillOutPostalCode(postalCode);
    };
    async #fillOutFirstName(firstName: string) {
        await this.#firstNameInput.click();
        await this.#firstNameInput.fill(firstName);
      }
      async #fillOutLastName(lastName: string) {
        await this.#lastNameInput.click();
        await this.#lastNameInput.fill(lastName);
      }
      async #fillOutPostalCode(postalCode:string){
        await this.#postalCodeInput.click();
        await this.#postalCodeInput.fill(postalCode);
      }
    
      async Continue() {
        await this.#continueButton.click();
      }
    
      async ContinueCheck(){
      await expect(this.#totalInfoHeading).toBeVisible();
      await expect(this.#totalLabelHeading).toBeVisible();
      await expect(this.#finishButton).toBeVisible();
    
    }
}
export {ProductDetails}