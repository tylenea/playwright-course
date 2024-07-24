import { test, expect,Page } from '@playwright/test';
import{OurStoryComponent} from "../../components/OurStoryComponent"
let page:Page;

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/about/');
});

test('Check that our story has heading', async ({}) => {
  const OurStory = new OurStoryComponent(page);
  await OurStory.getHeading;
});

test('Our story page has avatars of founders', async ({}) => {
  const OurStory = new OurStoryComponent(page);
  await OurStory.getAvatar;
});

test('Our story page has motivation paraghaps', async ({}) => {
  const OurStory = new OurStoryComponent(page);
  await OurStory.getParagraphHeading;
  await OurStory.getParagraph;
});

