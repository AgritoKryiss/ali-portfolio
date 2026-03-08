import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; width: 1200px; height: 630px; }
    .container {
      width: 1200px;
      height: 630px;
      background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: white;
      text-align: center;
    }
    h1 { font-size: 72px; margin: 0; font-weight: 800; letter-spacing: -2px; }
    h2 { font-size: 36px; margin: 20px 0 0 0; font-weight: 400; opacity: 0.9; }
    .stats { 
      display: flex; 
      gap: 40px; 
      margin-top: 40px;
      font-size: 24px;
      opacity: 0.8;
    }
    .tech-stack {
      position: absolute;
      bottom: 40px;
      font-size: 20px;
      opacity: 0.6;
      letter-spacing: 2px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Ali Haider</h1>
    <h2>Senior WordPress Developer</h2>
    <div class="stats">
      <span>7+ Years</span>
      <span>•</span>
      <span>30+ Projects</span>
      <span>•</span>
      <span>Global Clients</span>
    </div>
    <div class="tech-stack">WORDPRESS • WOOCCOMMERCE • PHP • REACT • TYPESCRIPT</div>
  </div>
</body>
</html>
`;

async function generateOGImage() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.setContent(htmlContent);
  
  const screenshot = await page.screenshot({ type: 'jpeg', quality: 90 });
  
  const outputPath = path.join(__dirname, '..', 'public', 'og-image.jpg');
  fs.writeFileSync(outputPath, screenshot);
  
  console.log('✅ OG Image generated at public/og-image.jpg');
  await browser.close();
}

generateOGImage().catch(console.error);