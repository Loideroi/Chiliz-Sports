import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdir } from 'fs/promises';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const images = [
  {
    name: 'case-study-psg-cityam',
    url: 'https://www.cityam.com/wp-content/uploads/2019/05/paris-saint-germain-v-rsc-anderlecht-uefa-champions-league-868738656-5b991c6a75c3f.jpg'
  },
  {
    name: 'case-study-psg-sportspro',
    url: 'https://www.sportspro.com/wp-content/uploads/2021/06/psg_blockchain.jpg'
  },
  {
    name: 'case-study-mancity',
    url: 'https://www.mancity.com/-/media/images/shared/news/2020/march/socios-launch-manchester-city-fan-token.ashx'
  },
  {
    name: 'case-study-arsenal',
    url: 'https://assets.goal.com/images/v3/bltb2fe8c6eb3bff946/b399a1f58d71b9586b52f1ca960027ee60c6be6f.jpg'
  },
  {
    name: 'case-study-messi',
    url: 'https://a.espncdn.com/photo/2018/0915/r431380_1296x729_16-9.jpg'
  },
  {
    name: 'case-study-napoli',
    url: 'https://cdn.sscnapoli.it/wp-content/uploads/2024/12/WebDesktopSociosPARTNE-1.jpg'
  },
  {
    name: 'case-study-barcelona',
    url: 'https://imageio.forbes.com/specials-images/imageserve/5e450dd0e961e10007f1ee64/0x0.jpg'
  },
  {
    name: 'case-study-benfica',
    url: 'https://www.reuters.com/resizer/v2/7VD43UMPDZO3LKLBOJDNRMN3HM.jpg'
  },
  {
    name: 'case-study-atletico',
    url: 'https://img-estaticos.atleticodemadrid.com//system/file5s/57927/medium2/DxywTCwy52_foto_1.jpg'
  },
  {
    name: 'case-study-inter-forbes',
    url: 'https://imageio.forbes.com/specials-images/imageserve/60f80c0d3f4e2ef5d82f8c5e/0x0.jpg'
  },
  {
    name: 'case-study-inter-sportspro',
    url: 'https://www.sportspro.com/wp-content/uploads/2021/05/inter-milan-socios.jpg'
  },
  {
    name: 'case-study-acmilan',
    url: 'https://assets-eu-01.kc-usercontent.com:443/1293c890-579f-01b7-8480-902cca7de55e/cd5a6d0e-a8b8-412b-a686-d622303282fc/2021.01.18-Comunicato-Socios-WebHP.png'
  },
  {
    name: 'case-study-juventus',
    url: 'https://cdn.sportbusiness.com/2021/09/juventus-socios.jpg'
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
      .resize(1200, null, { // Max width 1200px, maintain aspect ratio
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
  console.log('Starting image download and optimization...\n');

  for (const image of images) {
    await downloadImage(image.url, image.name);
    // Add a small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log('\nDone!');
}

downloadAll();
