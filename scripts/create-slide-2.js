const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createSlide2Composite() {
  const sliderDir = path.join(__dirname, '..', 'public', 'images', 'hero-slider');
  if (!fs.existsSync(sliderDir)) fs.mkdirSync(sliderDir, { recursive: true });

  const hoardingPath = path.join(__dirname, '..', 'public', 'images', 'roadside-jewellery-hoarding-proddatur.jpg');
  const polePath = path.join(__dirname, '..', 'public', 'images', 'pole-kiosk-median-advertising-night.jpg');

  console.log('Creating Slide 2 composite...');

  // 1. Process pole kiosk background (right side of canvas)
  // Crop to right 1200px and height 1080, adjust brightness and dark edge
  const poleBg = await sharp(polePath)
    .resize(1920, 1080, { fit: 'cover', position: 'right' })
    .modulate({ brightness: 0.9, saturation: 1.1 })
    .toBuffer();

  // Create an SVG gradient mask for the pole background so it fades smoothly into dark navy on the left
  const fadeGradientSvg = Buffer.from(`
    <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#101B38" stop-opacity="1" />
          <stop offset="42%" stop-color="#101B38" stop-opacity="0.95" />
          <stop offset="65%" stop-color="#101B38" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#101B38" stop-opacity="0.1" />
        </linearGradient>
        <linearGradient id="bottomFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#101B38" stop-opacity="0.3" />
          <stop offset="70%" stop-color="#101B38" stop-opacity="0" />
          <stop offset="100%" stop-color="#101B38" stop-opacity="0.7" />
        </linearGradient>
      </defs>
      <rect width="1920" height="1080" fill="url(#fade)" />
      <rect width="1920" height="1080" fill="url(#bottomFade)" />
    </svg>
  `);

  // 2. Process roadside hoarding photo (Busetty Jewellery)
  // Scale height to 960px with subtle drop shadow and border frame
  const hoardingImg = await sharp(hoardingPath)
    .resize(650, 920, { fit: 'inside' })
    .toBuffer({ resolveWithObject: true });

  const hWidth = hoardingImg.info.width;
  const hHeight = hoardingImg.info.height;

  // Frame with realistic subtle steel border and drop shadow badge
  const framedHoardingSvg = Buffer.from(`
    <svg width="${hWidth + 40}" height="${hHeight + 50}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.75" />
        </filter>
      </defs>
      <rect x="20" y="20" width="${hWidth}" height="${hHeight}" rx="12" fill="#1E293B" filter="url(#shadow)" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
    </svg>
  `);

  const framedHoarding = await sharp({
    create: {
      width: hWidth + 40,
      height: hHeight + 50,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([
      { input: framedHoardingSvg },
      { input: hoardingImg.data, left: 20, top: 20 }
    ])
    .png()
    .toBuffer();

  // 3. Editorial Badge: "Authentic Project • Busetty Jewellery Roadside Display"
  const badgeSvg = Buffer.from(`
    <svg width="420" height="60" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="420" height="60" rx="16" fill="#101B38" fill-opacity="0.9" stroke="rgba(255,200,61,0.4)" stroke-width="1.5"/>
      <circle cx="28" cy="30" r="6" fill="#10B981" />
      <text x="46" y="26" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="11" fill="#FFC83D" letter-spacing="0.08em">AUTHENTIC INSTALLATION IN KADAPA REGION</text>
      <text x="46" y="44" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="12" fill="#F8FAFC">Busetty Silver Jewellery Roadside Display</text>
    </svg>
  `);

  // 4. Base canvas 1920x1080 in Royal Navy (#101B38)
  const compositeDesktop = await sharp({
    create: {
      width: 1920,
      height: 1080,
      channels: 4,
      background: { r: 16, g: 27, b: 56, alpha: 1 } // #101B38
    }
  })
    .composite([
      { input: poleBg, left: 0, top: 0 },
      { input: fadeGradientSvg, left: 0, top: 0 },
      { input: framedHoarding, left: 1140, top: 70 },
      { input: badgeSvg, left: 1160, top: 960 }
    ])
    .jpeg({ quality: 90, mozjpeg: true })
    .toBuffer();

  const outJpg = path.join(sliderDir, 'slide-2-outdoor-hoardings.jpg');
  const outWebp = path.join(sliderDir, 'slide-2-outdoor-hoardings.webp');

  await sharp(compositeDesktop).toFile(outJpg);
  await sharp(compositeDesktop).webp({ quality: 88, effort: 6 }).toFile(outWebp);

  console.log('Slide 2 desktop generated successfully!');

  // 5. Mobile portrait version (800x1000)
  const mobileCanvas = await sharp({
    create: {
      width: 800,
      height: 1000,
      channels: 4,
      background: { r: 16, g: 27, b: 56, alpha: 1 }
    }
  })
    .composite([
      {
        input: await sharp(hoardingPath).resize(600, 750, { fit: 'inside' }).toBuffer(),
        left: 100,
        top: 180
      },
      {
        input: Buffer.from(`
          <svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="mobileGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#101B38" stop-opacity="0.95" />
                <stop offset="35%" stop-color="#101B38" stop-opacity="0.4" />
                <stop offset="70%" stop-color="#101B38" stop-opacity="0.75" />
                <stop offset="100%" stop-color="#101B38" stop-opacity="0.98" />
              </linearGradient>
            </defs>
            <rect width="800" height="1000" fill="url(#mobileGrad)" />
          </svg>
        `),
        left: 0,
        top: 0
      }
    ])
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();

  const outMobileJpg = path.join(sliderDir, 'slide-2-outdoor-hoardings-mobile.jpg');
  const outMobileWebp = path.join(sliderDir, 'slide-2-outdoor-hoardings-mobile.webp');

  await sharp(mobileCanvas).toFile(outMobileJpg);
  await sharp(mobileCanvas).webp({ quality: 85, effort: 6 }).toFile(outMobileWebp);

  console.log('Slide 2 mobile generated successfully!');
}

createSlide2Composite().catch(err => {
  console.error(err);
  process.exit(1);
});
