const puppeteer = require("puppeteer");

const options = { 
  format: "A4",
  orientation: "portrait",
  path: "./cv.pdf",
  printBackground: true,
  margin: {
    top: "1.5cm",
    right: "1.5cm",
    bottom: "1.5cm",
    left: "1.5cm"
  }
};

async function generatePDF() {
  const browser = await puppeteer.launch({
    headless: true
  });
  
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:5500", { waitUntil: 'networkidle0' });
  const pdf = await page.pdf(options);
  await browser.close();
}

generatePDF();