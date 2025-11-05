import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fallbackImages = [
  {
    name: 'case-study-mancity',
    url: 'https://www.socios.com/wp-content/uploads/2020/03/Manchester-City-FC-01-1.jpg'
  },
  {
    name: 'case-study-barcelona',
    url: 'https://www.socios.com/wp-content/uploads/2020/02/FC-Barcelona-01.jpg'
  },
  {
    name: 'case-study-benfica',
    url: 'https://www.socios.com/wp-content/uploads/2022/06/Benfica-1.jpg'
  },
  {
    name: 'case-study-inter-forbes',
    url: 'https://www.socios.com/wp-content/uploads/2021/05/INTER-SOCIOS-22-scaled.jpg'
  },
  {
    name: 'case-study-inter-sportspro',
    url: 'https://www.socios.com/wp-content/uploads/2021/05/INTER-SOCIOS-22-scaled.jpg'
  },
  {
    name: 'case-study-juventus',
    url: 'https://www.socios.com/wp-content/uploads/2021/09/Juventus-1.jpg'
  }
];

async function downloadAndOptimize(url, filename) {
  try {
    console.log(`Downloading ${filename}...`);

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    const publicDir = resolve(__dirname, '../public');

    await sharp(buffer)
      .resize(1200, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 85 })
      .toFile(resolve(publicDir, `${filename}.webp`));

    console.log(`✓ ${filename}.webp`);
    return true;
  } catch (error) {
    console.error(`✗ ${filename}: ${error.message}`);
    return false;
  }
}

async function processExisting(filename) {
  try {
    const publicDir = resolve(__dirname, '../public');
    const tempFile = resolve(publicDir, `${filename}-temp.jpg`);

    if (existsSync(tempFile)) {
      console.log(`Processing existing ${filename}...`);
      await sharp(tempFile)
        .resize(1200, null, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: 85 })
        .toFile(resolve(publicDir, `${filename}.webp`));

      console.log(`✓ ${filename}.webp`);
      return true;
    }
  } catch (error) {
    console.error(`✗ ${filename}: ${error.message}`);
  }
  return false;
}

async function main() {
  console.log('Processing fallback images...\n');

  // Process existing temp file
  await processExisting('case-study-inter');

  // Rename for both Inter articles
  const publicDir = resolve(__dirname, '../public');
  const interSource = resolve(publicDir, 'case-study-inter.webp');
  if (existsSync(interSource)) {
    const fs = await import('fs/promises');
    await fs.copyFile(interSource, resolve(publicDir, 'case-study-inter-forbes.webp'));
    await fs.copyFile(interSource, resolve(publicDir, 'case-study-inter-sportspro.webp'));
    console.log('✓ Copied Inter image for both articles');
  }

  // Download fallback images
  for (const image of fallbackImages) {
    // Check if not already downloaded
    const targetPath = resolve(publicDir, `${image.name}.webp`);
    if (!existsSync(targetPath)) {
      await downloadAndOptimize(image.url, image.name);
      await new Promise(resolve => setTimeout(resolve, 1000));
    } else {
      console.log(`⊙ ${image.name}.webp already exists`);
    }
  }

  console.log('\nDone!');
}

main();
