import puppeteer from 'puppeteer';

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new', // headless:true may cause errors on GitHub runners
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  console.log('Opening Google...');
  await page.goto('https://www.google.com');

  console.log('Waiting 60 seconds...');
  await new Promise(resolve => setTimeout(resolve, 60000));

  console.log('Closing browser...');
  await browser.close();
})();
