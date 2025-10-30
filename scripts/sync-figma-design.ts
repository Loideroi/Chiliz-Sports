/**
 * Sync Figma Design Script
 * Fetches design tokens from Figma and updates globals.css
 * Run with: npx tsx scripts/sync-figma-design.ts
 */

import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs/promises'

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

import { getFigmaNodes } from '../lib/figma'
import { parseNodeForTokens, figmaColorToHex, figmaColorToCSS } from '../lib/figma-tokens'

async function syncDesignTokens() {
  console.log('🎨 Starting Figma Design Sync...\n')

  try {
    // Fetch design nodes from Figma
    console.log('📥 Fetching design data from Figma...')
    const nodes = await getFigmaNodes()

    console.log('✅ Design data fetched successfully\n')

    // Parse nodes to extract tokens
    console.log('🔍 Parsing design tokens...')
    const tokens: any = {}

    Object.keys(nodes.nodes).forEach((key: string) => {
      const node = nodes.nodes[key]
      if (node && node.document) {
        tokens[key] = parseNodeForTokens(node.document)
      }
    })

    console.log('✅ Design tokens parsed\n')

    // Extract specific design values
    console.log('🎯 Extracting typography, colors, and spacing...')
    const designSystem = extractDesignSystem(tokens)

    console.log('✅ Design system extracted:\n')
    console.log('   Typography styles:', Object.keys(designSystem.typography).length)
    console.log('   Colors:', Object.keys(designSystem.colors).length)
    console.log('   Spacing values:', Object.keys(designSystem.spacing).length)
    console.log('')

    // Generate CSS variables
    console.log('📝 Generating CSS variables...')
    const cssVariables = generateCSSFromDesignSystem(designSystem)

    // Read current globals.css
    const globalsPath = path.resolve(__dirname, '../app/globals.css')
    const currentGlobalscss = await fs.readFile(globalsPath, 'utf-8')

    // Update globals.css with new design tokens
    const updatedCSS = updateGlobalsCSSWithTokens(currentGlobalscss, cssVariables)

    // Write back to file
    await fs.writeFile(globalsPath, updatedCSS, 'utf-8')
    console.log('✅ globals.css updated with Figma design tokens\n')

    // Save raw tokens for reference
    const tokensPath = path.resolve(__dirname, '../.figma-tokens.json')
    await fs.writeFile(tokensPath, JSON.stringify({ tokens, designSystem }, null, 2), 'utf-8')
    console.log(`✅ Raw tokens saved to .figma-tokens.json\n`)

    console.log('✨ Design sync complete!')

  } catch (error: any) {
    console.error('❌ Error syncing design:', error.message)
    console.error('\nFull error:', error)
    process.exit(1)
  }
}

/**
 * Extract design system values from parsed tokens
 */
function extractDesignSystem(tokens: any) {
  const designSystem: any = {
    typography: {},
    colors: {},
    spacing: {},
    layout: {},
  }

  // Recursively traverse tokens to find design values
  function traverse(node: any, path: string = '') {
    if (!node || typeof node !== 'object') return

    // Extract typography
    if (node.typography) {
      const name = node.name || path
      designSystem.typography[name] = node.typography
    }

    // Extract colors
    if (node.backgroundColor) {
      const name = node.name || path
      designSystem.colors[`${name}-bg`] = node.backgroundColor
    }

    if (node.color) {
      const name = node.name || path
      designSystem.colors[`${name}-text`] = node.color
    }

    // Extract spacing
    if (node.spacing) {
      const name = node.name || path
      designSystem.spacing[name] = node.spacing
    }

    // Extract layout
    if (node.layout) {
      const name = node.name || path
      designSystem.layout[name] = node.layout
    }

    // Recurse through children
    if (node.children && Array.isArray(node.children)) {
      node.children.forEach((child: any, index: number) => {
        traverse(child, `${path}${path ? '-' : ''}${child.name || index}`)
      })
    }
  }

  Object.keys(tokens).forEach((key) => {
    traverse(tokens[key], '')
  })

  return designSystem
}

/**
 * Generate CSS from design system
 */
function generateCSSFromDesignSystem(designSystem: any): string {
  const lines: string[] = []

  lines.push('  /* Figma Design Tokens - Auto-generated */')
  lines.push('')

  // Typography
  if (Object.keys(designSystem.typography).length > 0) {
    lines.push('  /* Typography from Figma */')
    Object.entries(designSystem.typography).forEach(([name, value]: [string, any]) => {
      const safeName = name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      if (value.fontSize) lines.push(`  --figma-${safeName}-font-size: ${value.fontSize};`)
      if (value.fontWeight) lines.push(`  --figma-${safeName}-font-weight: ${value.fontWeight};`)
      if (value.lineHeight) lines.push(`  --figma-${safeName}-line-height: ${value.lineHeight};`)
      if (value.letterSpacing) lines.push(`  --figma-${safeName}-letter-spacing: ${value.letterSpacing};`)
      if (value.fontFamily) lines.push(`  --figma-${safeName}-font-family: ${value.fontFamily};`)
    })
    lines.push('')
  }

  // Colors
  if (Object.keys(designSystem.colors).length > 0) {
    lines.push('  /* Colors from Figma */')
    Object.entries(designSystem.colors).forEach(([name, value]: [string, any]) => {
      const safeName = name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      lines.push(`  --figma-${safeName}: ${value};`)
    })
    lines.push('')
  }

  // Spacing
  if (Object.keys(designSystem.spacing).length > 0) {
    lines.push('  /* Spacing from Figma */')
    Object.entries(designSystem.spacing).forEach(([name, value]: [string, any]) => {
      const safeName = name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      if (value.paddingTop) lines.push(`  --figma-${safeName}-padding-top: ${value.paddingTop};`)
      if (value.paddingRight) lines.push(`  --figma-${safeName}-padding-right: ${value.paddingRight};`)
      if (value.paddingBottom) lines.push(`  --figma-${safeName}-padding-bottom: ${value.paddingBottom};`)
      if (value.paddingLeft) lines.push(`  --figma-${safeName}-padding-left: ${value.paddingLeft};`)
      if (value.gap) lines.push(`  --figma-${safeName}-gap: ${value.gap};`)
    })
    lines.push('')
  }

  return lines.join('\n')
}

/**
 * Update globals.css with new tokens
 */
function updateGlobalsCSSWithTokens(currentCSS: string, newTokens: string): string {
  // Find the :root block (using [\s\S] instead of . with s flag)
  const rootRegex = /(:root\s*{[\s\S]*?})/
  const match = currentCSS.match(rootRegex)

  if (!match) {
    // No :root block found, add one at the top
    return `:root {\n${newTokens}\n}\n\n${currentCSS}`
  }

  // Check if Figma tokens already exist
  const figmaTokensRegex = /\/\*\s*Figma Design Tokens - Auto-generated\s*\*\/[\s\S]*?(?=\/\*[^*]*\*\/|$)/

  let rootBlock = match[0]

  if (figmaTokensRegex.test(rootBlock)) {
    // Replace existing Figma tokens
    rootBlock = rootBlock.replace(figmaTokensRegex, newTokens)
  } else {
    // Add Figma tokens to end of :root block (before closing brace)
    rootBlock = rootBlock.replace(/}$/, `\n${newTokens}\n}`)
  }

  return currentCSS.replace(rootRegex, rootBlock)
}

syncDesignTokens()
