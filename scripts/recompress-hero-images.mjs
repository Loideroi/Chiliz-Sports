#!/usr/bin/env node

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');

// Images to recompress with higher compression
const imagesToCompress = [
  {
    name: 'hero-image-1.webp',
    quality: 60, // Lower quality for hero backgrounds
  },
  {
    name: 'abstract-gradient-bg.webp',
    quality: 65, // Gradients can handle more compression
  },
  {
    name: 'about-page-hero.webp',
    quality: 60,
  },
  {
    name: 'about-hero.webp',
    quality: 60,
  },
];

async function recompressImage(filename, quality) {
  const inputPath = path.join(publicDir, filename);
  const tempPath = path.join(publicDir, `${filename}.tmp`);

  try {
    const stats = await fs.stat(inputPath);
    const originalSize = stats.size;

    // Recompress with higher compression
    await sharp(inputPath)
      .webp({ quality, effort: 6 })
      .toFile(tempPath);

    const newStats = await fs.stat(tempPath);
    const newSize = newStats.size;
    const savings = originalSize - newSize;
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);

    // Replace original with compressed version
    await fs.rename(tempPath, inputPath);

    console.log(`✓ ${filename}`);
    console.log(`  ${(originalSize / 1024).toFixed(1)} KB → ${(newSize / 1024).toFixed(1)} KB (${savingsPercent}% reduction)`);

    return { success: true, savings };
  } catch (error) {
    console.log(`✗ ${filename}: ${error.message}`);
    // Clean up temp file if it exists
    try {
      await fs.unlink(tempPath);
    } catch {}
    return { success: false, savings: 0 };
  }
}

async function main() {
  console.log('Recompressing hero and background images for better performance...\n');

  let totalSavings = 0;
  let successCount = 0;

  for (const image of imagesToCompress) {
    const result = await recompressImage(image.name, image.quality);
    if (result.success) {
      successCount++;
      totalSavings += result.savings;
    }
    console.log();
  }

  console.log(`\nComplete: ${successCount}/${imagesToCompress.length} images recompressed`);
  console.log(`Total savings: ${(totalSavings / 1024).toFixed(1)} KB`);
}

main().catch(console.error);
