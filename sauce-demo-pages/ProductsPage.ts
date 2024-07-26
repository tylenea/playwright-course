import{Page, expect} from '@playwright/test';
import { ProductListComponent } from '../components-sauce-demo/Products-list';
import { NavigationComponent } from '../components-sauce-demo/NavigationComponent';
class ProductPage {
    Products = new ProductListComponent(this.page);
    Navigation = new NavigationComponent(this.page)
      constructor(private page: Page) {
      this.page = page;
    }

}
export {ProductPage}