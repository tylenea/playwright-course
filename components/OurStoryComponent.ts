import {expect, Page} from "@playwright/test"

class OurStoryComponent {
    constructor(private page: Page) {
    this.page = page;
    }
    
    async getHeading (){
        await expect(this.page.getByRole('heading', { name: 'Our story' })).toBeVisible();
    };

   async getAvatar (){
        await expect(this.page.locator('li')
        .filter({ hasText: 'Ava Sandler' })
        .locator('div').first())
        .toBeVisible();
  
        await expect(this.page.locator('li')
        .filter({ hasText: 'Steph Poco' })
        .locator('div').first())
        .toBeVisible();
    };

    async getParagraph (){
        await expect(this.page.getByText('What more could you want from')).toBeVisible();
        await expect(this.page.getByText('It\'s easy to forget that we\'')).toBeVisible();
        await expect(this.page.getByText('We like to keep things plain')).toBeVisible();
    }
    async getParagraphHeading(){
        await expect(this.page.getByRole('heading', { name: 'Passion' })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Animal' })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Style' })).toBeVisible();
   
    }
}
export {OurStoryComponent}