const puppeteer = require('puppeteer');
const path = require('path');

async function captureScreenshots() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport size to match our interface container
  await page.setViewport({ width: 600, height: 400 });
  
  // Load the HTML file
  await page.goto(`file://${path.join(__dirname, '../public/integrations/mock-interfaces.html')}`, {
    waitUntil: 'networkidle0'
  });
  
  // List of integrations to capture
  const integrations = ['dropbox', 'sharepoint', 'googledocs', 'whatsapp', 'slack', 'discord', 'telegram'];
  
  // Capture each interface
  for (const integration of integrations) {
    const element = await page.$(`#${integration}`);
    if (element) {
      await element.screenshot({
        path: path.join(__dirname, `../public/integrations/${integration}.png`),
      });
      console.log(`Captured ${integration} interface`);
    }
  }
  
  await browser.close();
  console.log('All screenshots captured successfully!');
}

captureScreenshots().catch(console.error);
