/**
 * Update Image References Script
 * Replaces all .png references with .webp in component files
 * Run with: node scripts/update-image-refs.mjs
 */

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const files = [
  path.resolve(__dirname, '../app/about-us/page.tsx'),
  path.resolve(__dirname, '../app/page.tsx'),
  path.resolve(__dirname, '../components/CoreServices.tsx'),
  path.resolve(__dirname, '../components/EmblemCarousel.tsx'),
]

async function updateFile(filePath) {
  const relativePath = path.relative(process.cwd(), filePath)
  console.log(`\n📝 Processing: ${relativePath}`)

  const content = await fs.readFile(filePath, 'utf-8')

  // Replace .png with .webp in src attributes
  const updated = content.replace(/\.png"/g, '.webp"')

  // Count replacements
  const originalPngCount = (content.match(/\.png"/g) || []).length
  const newWebpCount = (updated.match(/\.webp"/g) || []).length
  const replacements = originalPngCount

  if (replacements > 0) {
    await fs.writeFile(filePath, updated, 'utf-8')
    console.log(`✅ Updated ${replacements} image references`)
  } else {
    console.log(`ℹ️  No changes needed`)
  }

  return replacements
}

async function main() {
  console.log('🔄 Updating Image References from PNG to WebP...')

  let totalReplacements = 0

  for (const file of files) {
    const count = await updateFile(file)
    totalReplacements += count
  }

  console.log('\n' + '='.repeat(60))
  console.log('📊 UPDATE SUMMARY')
  console.log('='.repeat(60))
  console.log(`✅ Updated ${totalReplacements} image references across ${files.length} files`)
  console.log('='.repeat(60))
  console.log('\n✨ All image references updated to WebP!')
}

main().catch(console.error)
