import {expect, Page} from "@playwright/test"

class PaymentDetailsComponent {
    constructor(private page:Page){
        this.page= page;
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
    
}
export{PaymentDetailsComponent};