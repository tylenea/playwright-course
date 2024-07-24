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
    return this.page.locator("li:nth-child(" + n +">) .styles");
};}

 class ColorPicker { private stylePickerLocator: string
    constructor (private page: Page,) {
     this.page = page;
     this.stylePickerLocator = '.style-picker > div:nth-child(';
}
async colorClick(n: number) {
    await this.page.locator(`.style-picker > div:nth-child(${n})`).first().click();
  }

  async HeadingLink(title:string){
   return (this.page.locator('li')
    .filter({ hasText: title })
    .getByRole('link').first())
  }
}


export {ProductListComponent, ColorPicker};