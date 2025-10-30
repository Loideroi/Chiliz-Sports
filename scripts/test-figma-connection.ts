/**
 * Test Figma API Connection
 * Run with: npx tsx scripts/test-figma-connection.ts
 */

import dotenv from 'dotenv'
import path from 'path'

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

import { getFigmaFileMetadata, getFigmaNodes } from '../lib/figma'

async function testConnection() {
  console.log('🔍 Testing Figma API Connection...\n')

  try {
    // Test 1: Get file metadata
    console.log('📄 Fetching Figma file metadata...')
    const metadata = await getFigmaFileMetadata()
    console.log('✅ File Metadata:')
    console.log(`   Name: ${metadata.name}`)
    console.log(`   Version: ${metadata.version}`)
    console.log(`   Last Modified: ${metadata.lastModified}`)
    console.log(`   Thumbnail: ${metadata.thumbnailUrl}\n`)

    // Test 2: Get specific node
    console.log('🎨 Fetching specific node from FIGMA_NODE_ID...')
    const nodes = await getFigmaNodes()
    console.log('✅ Node Data:')
    console.log(JSON.stringify(nodes, null, 2))

    console.log('\n✨ All tests passed! Figma API is connected and working.')
  } catch (error: any) {
    console.error('❌ Error testing Figma connection:', error.message)
    console.error('\nFull error:', error)
    process.exit(1)
  }
}

testConnection()
