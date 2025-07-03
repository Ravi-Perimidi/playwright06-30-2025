import {test as base,Page} from "@playwright/test"
import * as dotenv from 'dotenv';

dotenv.config({ path: './env/test.env' });

type fixture={
    loggedInPage :Page
}

export const test = base.extend<fixture>({
loggedInPage: async({browser},use)=>{
const context = await browser.newContext();
const page = await context.newPage();
if (!process.env.URL) {
    throw new Error('Environment variable URL is not defined');
}
await page.goto(process.env.URL);
await use(page)
}
})
