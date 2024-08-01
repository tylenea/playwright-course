import{ Page, expect } from "@playwright/test";

class ProductListComponent {
    constructor (private page: Page) {
     this.page = page;
}

getTitle = (title: string) => {
    return this.page.getByRole("link", {name: title});
};

getPrice = (title: string) => {
    return this.page
    .locator("li")
    .filter({ hasText: title})
    .getByRole("paragraph")
    .nth(1);
};
getImage = (n: number) => {
    return this.page.locator("li:nth-child(" + n +")> .styles");
};}

 class ColorPicker { 
    constructor (private page: Page,) {
     this.page = page;
}
 colorClick= async(n: number) =>{
    await this.page.locator(`.style-picker > div:nth-child(${n})`).first().click();
  }
colorAssert = async(n:number)=> {
    await expect(this.page.locator(`.style-picker > div:nth-child(${n})`).first()).toBeVisible();
};
  
HeadingLink = async(title:string)=>{
   await expect(this.page.locator('li')
    .filter({ hasText: title })
    .getByRole('link').first()).toBeVisible();
  }
}


export {ProductListComponent, ColorPicker};