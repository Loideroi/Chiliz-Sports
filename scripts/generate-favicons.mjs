import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = join(__dirname, '..');
const inputImage = join(projectRoot, 'public', 'chiliz-sports-logo.svg');
const outputDir = join(projectRoot, 'public');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function generateFavicons() {
  console.log('Generating favicons from Chiliz logo...');

  try {
    // Read the original image
    const image = sharp(inputImage);
    const metadata = await image.metadata();
    console.log(`Original image: ${metadata.width}x${metadata.height}`);

    // Generate each size
    for (const { name, size } of sizes) {
      const outputPath = join(outputDir, name);
      await sharp(inputImage)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(outputPath);

      console.log(`✓ Generated ${name} (${size}x${size})`);
    }

    // Generate favicon.ico (32x32 is standard)
    await sharp(inputImage)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(join(outputDir, 'favicon.ico'));

    console.log('✓ Generated favicon.ico (32x32)');

    console.log('\n✅ All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
