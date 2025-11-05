import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdir } from 'fs/promises';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Alternative image URLs for the ones that failed
const images = [
  {
    name: 'case-study-mancity',
    url: 'https://www.mancity.com/-/media/images/shared/news/2020/march/socios/1_socios_mcfc.ashx?w=1200'
  },
  {
    name: 'case-study-barcelona',
    url: 'https://www.fcbarcelona.com/photo-resources/2020/02/13/23bc2dfe-67fe-4b5c-9e5a-1b0e6f0a9a02/mini_Announcement_Socis_Blockchain.jpg'
  },
  {
    name: 'case-study-benfica',
    url: 'https://www.slbenfica.pt/-/media/slb/imagens/noticias/2022/06/07/parceria-socios/parceria_socios.jpg'
  },
  {
    name: 'case-study-inter-forbes',
    url: 'https://www.inter.it/assets/images/photo/2021-22/news/inter-socios-jersey-sponsor.jpg'
  },
  {
    name: 'case-study-inter-sportspro',
    url: 'https://www.inter.it/assets/images/photo/2021-22/news/inter-socios-sponsor.jpg'
  },
  {
    name: 'case-study-juventus',
    url: 'https://www.juventus.com/images/image/private/t_editorial_landscape_8_desktop/dev/vdoydgvqsqkfyusnz8rq.jpg'
  }
];

async function downloadImage(url, filename) {
  try {
    console.log(`Downloading ${filename} from ${url}...`);
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Optimize and convert to WebP
    const publicDir = resolve(__dirname, '../public');
    await mkdir(publicDir, { recursive: true });

    await sharp(buffer)
      .resize(1200, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 85 })
      .toFile(resolve(publicDir, `${filename}.webp`));

    console.log(`✓ Successfully downloaded and optimized ${filename}.webp`);
    return true;
  } catch (error) {
    console.error(`✗ Error downloading ${filename}: ${error.message}`);
    return false;
  }
}

async function downloadAll() {
  console.log('Downloading remaining images...\n');

  for (const image of images) {
    await downloadImage(image.url, image.name);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log('\nDone!');
}

downloadAll();
