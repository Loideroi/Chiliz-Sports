/**
 * Image Optimization Script
 * Converts PNG images to optimized WebP format for massive file size savings
 * Run with: node scripts/optimize-images.mjs
 */

import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const publicDir = path.resolve(__dirname, '../public')

// WebP optimization settings
const WEBP_QUALITY = 85 // High quality, still 90%+ smaller than PNG
const WEBP_EFFORT = 6   // Max compression effort (0-6)

async function getAllPngFiles(dir) {
  const files = []

  async function traverse(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name)

      if (entry.isDirectory()) {
        await traverse(fullPath)
      } else if (entry.name.toLowerCase().endsWith('.png')) {
        files.push(fullPath)
      }
    }
  }

  await traverse(dir)
  return files
}

async function getFileSize(filePath) {
  const stats = await fs.stat(filePath)
  return stats.size
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

async function optimizeImage(pngPath) {
  const webpPath = pngPath.replace(/\.png$/i, '.webp')
  const relativePath = path.relative(publicDir, pngPath)

  try {
    // Get original size
    const originalSize = await getFileSize(pngPath)

    // Convert to WebP
    await sharp(pngPath)
      .webp({ quality: WEBP_QUALITY, effort: WEBP_EFFORT })
      .toFile(webpPath)

    // Get new size
    const newSize = await getFileSize(webpPath)
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1)

    console.log(`✅ ${relativePath}`)
    console.log(`   ${formatBytes(originalSize)} → ${formatBytes(newSize)} (${savings}% smaller)`)

    return {
      original: originalSize,
      optimized: newSize,
      savings: originalSize - newSize
    }
  } catch (error) {
    console.error(`❌ Error optimizing ${relativePath}:`, error.message)
    return null
  }
}

async function main() {
  console.log('🎨 Starting Image Optimization...\n')
  console.log(`📁 Scanning ${publicDir}\n`)

  // Find all PNG files
  const pngFiles = await getAllPngFiles(publicDir)
  console.log(`Found ${pngFiles.length} PNG images\n`)
  console.log('🔄 Converting to optimized WebP format...\n')

  // Optimize all images
  let totalOriginal = 0
  let totalOptimized = 0
  let successCount = 0

  for (const pngPath of pngFiles) {
    const result = await optimizeImage(pngPath)
    if (result) {
      totalOriginal += result.original
      totalOptimized += result.optimized
      successCount++
    }
    console.log('')
  }

  // Summary
  const totalSavings = totalOriginal - totalOptimized
  const percentSavings = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1)

  console.log('=' .repeat(60))
  console.log('📊 OPTIMIZATION SUMMARY')
  console.log('=' .repeat(60))
  console.log(`✅ Successfully optimized: ${successCount}/${pngFiles.length} images`)
  console.log(`📦 Total original size: ${formatBytes(totalOriginal)}`)
  console.log(`📦 Total optimized size: ${formatBytes(totalOptimized)}`)
  console.log(`💾 Total savings: ${formatBytes(totalSavings)} (${percentSavings}% smaller)`)
  console.log('=' .repeat(60))
  console.log('\n✨ Optimization complete!')
  console.log('\n⚠️  Note: Original PNG files are preserved.')
  console.log('   Update Image components to use .webp extensions.')
}

main().catch(console.error)
