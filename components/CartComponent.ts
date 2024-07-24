import { expect, Page} from "@playwright/test";

class CartComponent{
constructor( private page: Page) {}
 async addToCart(productName: string){    
    await this.page.getByRole("link", { name: productName}).click();
    await this.page.getByRole("button", { name: "Add to cart"}).click();
}

async changeCartOptions(){
    await this.page.getByLabel('Size').selectOption('Small');
  await this.page.getByLabel('Color').selectOption('Green');
  await this.page.getByLabel('Increment quantity').click({
    clickCount: 2
  });
}

async checkout (){
    await this.page.getByRole('button', { name: 'Checkout' }).click();
}
}

export{CartComponent};