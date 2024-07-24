import {expect, Page} from "@playwright/test"

class PaymentDetailsComponent {
    constructor(private page:Page){
        this.page= page;
    }
    async fillOutForm(){
        await this.page.getByLabel('Full name').click();
        await this.page.getByLabel('Full name').fill('Tylenea');
        await this.page.getByLabel('Email').click();
        await this.page.getByLabel('Email').fill('tylenea@mail.com');
        await this.page.locator('.snipcart-textbox').first().click();
        await this.page.getByLabel('Street address').fill('free');
        await this.page.getByText('Freedom Trail').first().click();
    }
    async fillOutZipCode(){
        await this.page.getByLabel('Postal/ZIP code').click();
        await this.page.getByLabel('Postal/ZIP code').fill('555');
    }
    async fillOutApartment(){
        await this.page.getByLabel('Apt/Suite').click();
        await this.page.getByLabel('Apt/Suite').fill('123');
    }
    async FillOutCity(){
        await this.page.getByLabel('City').click();
        await this.page.getByLabel('City').fill('Boston');
    }
    async submit(){
        await this.page.getByRole('button', { name: 'Continue to payment' }).click();
    }
    async fillCardDetails(){
        await this.page.frameLocator('iframe')
        .getByPlaceholder('Card number')
        .click();
        await this.page.frameLocator('iframe')
        .getByPlaceholder('Card number')
        .fill('4242 4242 4242 4242');
        await this.page.frameLocator('iframe')
        .getByPlaceholder('MM/YY')
        .click();
        await this.page.frameLocator('iframe')
        .getByPlaceholder('MM/YY')
        .fill('12/26');
        await this.page.frameLocator('iframe')
        .getByPlaceholder('CVV')
        .click();
        await this.page.frameLocator('iframe')
        .getByPlaceholder('CVV')
        .fill('123');
    }
    async placeOrder(){
        await this.page.getByRole('button', { name: 'Place order' }).click();
    }
    async assertSuccessScreen(){
        await expect(this.page.getByRole('heading', { name: 'Thank you for your order' })).toBeVisible();
  await expect(this.page.getByRole('heading', { name: 'Cart summary' })).toBeVisible();
  await expect(this.page.locator('.snipcart-billing-completed__header')).toBeVisible();
  await expect(this.page.locator('div').filter({ hasText: /^Payment$/ })).toBeVisible();
  await expect(this.page.getByText('Total', { exact: true })).toBeVisible();
  await expect(this.page.getByText('$').nth(2)).toBeVisible();
  await expect(this.page.getByText('$').nth(1)).toBeVisible();
    }
}
export{PaymentDetailsComponent};