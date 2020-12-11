const playwright = require('playwright');
const path = require('path')
//const fs = require('fs');

(async () => {
    const browser = await playwright.firefox.launch({ headless: false, slowMo: 400 });
    const page = await browser.newPage();
    await page.goto('https://native-land.ca/');
    await page.click('[aria-label="Close"]');
    //await page.click('"go to map"');
    await page.click('//*[@id="menu-item-13677"]');
    await page.click('//*[@id="menu-item-13677"]/div/a[3]');
    await new Promise(resolve => setTimeout(resolve, 5000));
    let timeInMs = Date.now();
    let d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    let screen_name = timeInMs + 'TimeInMs,' + 'M=' + month + 'Y=' + year + '.png';
    await page.screenshot({ path: path.join(__dirname, 'test_results', screen_name)});

await browser.close();
})();