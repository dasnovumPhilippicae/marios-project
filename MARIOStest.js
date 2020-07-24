const puppeteer = require('puppeteer');

async function scrapeproduct(url) {
    const browser = await puppeteer.launch();
    const page = await puppeteer.newPage();
    await page.goto(url);
    const [element] = await page.$x('/html/body/section[4]/div[3]/div[2]/form/table[1]/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[3]/td[1]/table/tbody/tr[1]/td[2]')
}