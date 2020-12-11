const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
var n = 1;
  const page = await browser.newPage();
    await page.goto('https://native-land.ca/');
    await page.screenshot({ path: 'C:\\Users\\Vreal-QA\\node_modules\\playwright\\test results\\' + n.toString() + 'example.png' });
    });

  await browser.close();
})();