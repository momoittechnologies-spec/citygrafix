const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processOriginalLogo() {
  const inputPath = 'C:/Users/Mohan/.gemini/antigravity/brain/ea80c82a-5fcb-4223-965f-bf435aab31f7/.user_uploaded/media_1795320815863_a6b7a2b7.png';
  
  const brandDir = path.join(__dirname, '..', 'public', 'images', 'brand');
  const publicBrandDir = path.join(__dirname, '..', 'public', 'brand');
  const iconsDir = path.join(__dirname, '..', 'public', 'icons');
  
  [brandDir, publicBrandDir, iconsDir].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  console.log('1. Trimming official full logo...');
  const trimmed = await sharp(inputPath).trim().toBuffer({ resolveWithObject: true });
  console.log(`Trimmed size: ${trimmed.info.width}x${trimmed.info.height}`);

  // Save official full horizontal logo in PNG and WebP
  const fullLogoPng = path.join(publicBrandDir, 'city-grafix-official-logo.png');
  const fullLogoWebp = path.join(publicBrandDir, 'city-grafix-official-logo.webp');
  const fullLogoImagesPng = path.join(brandDir, 'city-grafix-official-logo.png');
  const legacyLogoPng = path.join(__dirname, '..', 'public', 'logo.png');

  await sharp(trimmed.data)
    .png({ compressionLevel: 9, quality: 100 })
    .toFile(fullLogoPng);
  
  await sharp(trimmed.data)
    .webp({ quality: 95, effort: 6 })
    .toFile(fullLogoWebp);

  fs.copyFileSync(fullLogoPng, fullLogoImagesPng);
  // Also update public/logo.png with this official logo
  fs.copyFileSync(fullLogoPng, legacyLogoPng);
  console.log('Saved full official logo in public/brand/ and public/logo.png');

  // 2. Extract circular CG emblem
  console.log('2. Extracting circular CG emblem...');
  // The emblem ends around x=245 in the 940x255 trimmed image
  const emblemBuffer = await sharp(trimmed.data)
    .extract({ left: 0, top: 0, width: 245, height: trimmed.info.height })
    .trim()
    .toBuffer({ resolveWithObject: true });
  console.log(`Emblem size: ${emblemBuffer.info.width}x${emblemBuffer.info.height}`);

  const emblemPng = path.join(publicBrandDir, 'city-grafix-emblem.png');
  const emblemWebp = path.join(publicBrandDir, 'city-grafix-emblem.webp');
  const emblemSquarePng = path.join(publicBrandDir, 'city-grafix-emblem-square.png');

  // Create square padded emblem (with ~5% transparent padding for icons)
  const maxDim = Math.max(emblemBuffer.info.width, emblemBuffer.info.height);
  const squareSize = Math.round(maxDim * 1.08); // square canvas

  const squareEmblemBuffer = await sharp({
    create: {
      width: squareSize,
      height: squareSize,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{
      input: emblemBuffer.data,
      gravity: 'centre'
    }])
    .png()
    .toBuffer();

  await sharp(emblemBuffer.data).png().toFile(emblemPng);
  await sharp(emblemBuffer.data).webp({ quality: 95 }).toFile(emblemWebp);
  await sharp(squareEmblemBuffer).png().toFile(emblemSquarePng);
  console.log('Saved emblem in public/brand/');

  // 3. Generate Favicons and PWA icons from square emblem
  console.log('3. Generating Favicons & PWA Icons from official emblem...');
  const iconTargets = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'icon-192x192.png', size: 192 },
    { name: 'icon-512x512.png', size: 512 },
  ];

  for (const target of iconTargets) {
    const outPath = path.join(iconsDir, target.name);
    await sharp(squareEmblemBuffer)
      .resize(target.size, target.size)
      .png({ compressionLevel: 9, quality: 100 })
      .toFile(outPath);
    console.log(`Generated ${target.name} (${target.size}x${target.size})`);
  }

  // Maskable icons (requires background color #101B38 with safe margin)
  const maskableTargets = [
    { name: 'icon-maskable-192x192.png', size: 192, innerSize: 150 },
    { name: 'icon-maskable-512x512.png', size: 512, innerSize: 400 },
  ];

  for (const target of maskableTargets) {
    const outPath = path.join(iconsDir, target.name);
    const inner = await sharp(squareEmblemBuffer)
      .resize(target.innerSize, target.innerSize)
      .png()
      .toBuffer();

    await sharp({
      create: {
        width: target.size,
        height: target.size,
        channels: 4,
        background: { r: 16, g: 27, b: 56, alpha: 1 }, // #101B38
      }
    })
      .composite([{
        input: inner,
        gravity: 'centre'
      }])
      .png({ compressionLevel: 9, quality: 100 })
      .toFile(outPath);
    console.log(`Generated maskable ${target.name} (${target.size}x${target.size})`);
  }

  // Generate favicon.ico
  const fav32 = await sharp(squareEmblemBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'favicon.ico'), fav32);
  fs.writeFileSync(path.join(__dirname, '..', 'app', 'favicon.ico'), fav32);
  console.log('Saved favicon.ico in public/ and app/');

  console.log('All official logo assets generated successfully!');
}

processOriginalLogo().catch(err => {
  console.error(err);
  process.exit(1);
});
