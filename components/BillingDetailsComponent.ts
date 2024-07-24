import {Page, expect} from "@playwright/test";

class BillingDetailsComponent {
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
}}
export {BillingDetailsComponent}