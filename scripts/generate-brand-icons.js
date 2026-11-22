const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateIcons() {
  const monogramPath = path.join(__dirname, '..', 'public', 'brand', 'monogram-cg.svg');
  const iconsDir = path.join(__dirname, '..', 'public', 'icons');
  
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  const svgBuffer = fs.readFileSync(monogramPath);

  console.log('Generating crisp raster icons from SVG monogram...');

  // Standard icons
  const standardTargets = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'icon-192x192.png', size: 192 },
    { name: 'icon-512x512.png', size: 512 },
  ];

  for (const target of standardTargets) {
    const outPath = path.join(iconsDir, target.name);
    await sharp(svgBuffer)
      .resize(target.size, target.size)
      .png({ compressionLevel: 9, quality: 100 })
      .toFile(outPath);
    console.log(`Generated ${target.name} (${target.size}x${target.size})`);
  }

  // Maskable icons (requires ~75% content with background padding for safe area)
  const maskableTargets = [
    { name: 'icon-maskable-192x192.png', size: 192, innerSize: 144 },
    { name: 'icon-maskable-512x512.png', size: 512, innerSize: 384 },
  ];

  for (const target of maskableTargets) {
    const outPath = path.join(iconsDir, target.name);
    const innerBuffer = await sharp(svgBuffer)
      .resize(target.innerSize, target.innerSize)
      .png()
      .toBuffer();

    await sharp({
      create: {
        width: target.size,
        height: target.size,
        channels: 4,
        background: { r: 16, g: 27, b: 56, alpha: 1 }, // #101B38 Royal Navy
      },
    })
      .composite([
        {
          input: innerBuffer,
          gravity: 'centre',
        },
      ])
      .png({ compressionLevel: 9, quality: 100 })
      .toFile(outPath);
    console.log(`Generated ${target.name} (${target.size}x${target.size})`);
  }

  // Copy 32x32 as favicon.ico or generate a basic favicon.ico
  // Also place favicon.ico in public/ and app/
  const fav32Buffer = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'favicon.ico'), fav32Buffer);
  fs.writeFileSync(path.join(__dirname, '..', 'app', 'favicon.ico'), fav32Buffer);
  console.log('Generated favicon.ico in public/ and app/');

  console.log('All brand icons generated successfully!');
}

generateIcons().catch((err) => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
