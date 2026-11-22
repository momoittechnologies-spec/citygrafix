const path = require('path');
const sharp = require('sharp');

async function processRemainingSlides() {
  const destDir = path.join(__dirname, '..', 'public', 'images', 'hero-slider');

  // Slide 3: 3D LED Signboards
  console.log('Processing Slide 3 (3D LED Signboards)...');
  const slide3Src = path.join(__dirname, '..', 'public', 'images', '3d-led-signage-storefront.jpg');
  
  const slide3Desktop = await sharp(slide3Src)
    .resize(1920, 1080, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 90, mozjpeg: true })
    .toBuffer();
  await sharp(slide3Desktop).toFile(path.join(destDir, 'slide-3-led-signboards.jpg'));
  await sharp(slide3Desktop).webp({ quality: 88, effort: 6 }).toFile(path.join(destDir, 'slide-3-led-signboards.webp'));

  const slide3Mobile = await sharp(slide3Src)
    .resize(800, 1000, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer();
  await sharp(slide3Mobile).toFile(path.join(destDir, 'slide-3-led-signboards-mobile.jpg'));
  await sharp(slide3Mobile).webp({ quality: 85, effort: 6 }).toFile(path.join(destDir, 'slide-3-led-signboards-mobile.webp'));
  console.log('Slide 3 completed.');

  // Slide 4: CAD & Jumbo Xerox
  console.log('Processing Slide 4 (CAD & Jumbo Xerox)...');
  const slide4Src = path.join(__dirname, '..', 'public', 'images', 'cad-blueprint-plotter.jpg');

  const slide4Desktop = await sharp(slide4Src)
    .resize(1920, 1080, { fit: 'cover', position: 'right' })
    .jpeg({ quality: 90, mozjpeg: true })
    .toBuffer();
  await sharp(slide4Desktop).toFile(path.join(destDir, 'slide-4-cad-plotting.jpg'));
  await sharp(slide4Desktop).webp({ quality: 88, effort: 6 }).toFile(path.join(destDir, 'slide-4-cad-plotting.webp'));

  const slide4Mobile = await sharp(slide4Src)
    .resize(800, 1000, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer();
  await sharp(slide4Mobile).toFile(path.join(destDir, 'slide-4-cad-plotting-mobile.jpg'));
  await sharp(slide4Mobile).webp({ quality: 85, effort: 6 }).toFile(path.join(destDir, 'slide-4-cad-plotting-mobile.webp'));
  console.log('Slide 4 completed.');

  // Slide 5: Personalized Gifts
  console.log('Processing Slide 5 (Personalized Gifts)...');
  const slide5Src = path.join(__dirname, '..', 'public', 'images', 'personalized-gifts-collection.jpg');

  const slide5Desktop = await sharp(slide5Src)
    .resize(1920, 1080, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 90, mozjpeg: true })
    .toBuffer();
  await sharp(slide5Desktop).toFile(path.join(destDir, 'slide-5-personalized-gifts.jpg'));
  await sharp(slide5Desktop).webp({ quality: 88, effort: 6 }).toFile(path.join(destDir, 'slide-5-personalized-gifts.webp'));

  const slide5Mobile = await sharp(slide5Src)
    .resize(800, 1000, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer();
  await sharp(slide5Mobile).toFile(path.join(destDir, 'slide-5-personalized-gifts-mobile.jpg'));
  await sharp(slide5Mobile).webp({ quality: 85, effort: 6 }).toFile(path.join(destDir, 'slide-5-personalized-gifts-mobile.webp'));
  console.log('Slide 5 completed.');
}

processRemainingSlides().catch(err => {
  console.error(err);
  process.exit(1);
});
