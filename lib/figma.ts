/**
 * Figma API Client
 * Handles all interactions with the Figma REST API
 */

import * as Figma from 'figma-js'

// Lazy-load environment variables and client
function getEnvVars() {
  const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN
  const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY
  const FIGMA_NODE_ID = process.env.FIGMA_NODE_ID

  if (!FIGMA_ACCESS_TOKEN) {
    throw new Error('FIGMA_ACCESS_TOKEN is not defined in environment variables')
  }

  if (!FIGMA_FILE_KEY) {
    throw new Error('FIGMA_FILE_KEY is not defined in environment variables')
  }

  return { FIGMA_ACCESS_TOKEN, FIGMA_FILE_KEY, FIGMA_NODE_ID }
}

// Initialize Figma client lazily
function getClient() {
  const { FIGMA_ACCESS_TOKEN } = getEnvVars()
  return Figma.Client({ personalAccessToken: FIGMA_ACCESS_TOKEN })
}

/**
 * Fetch the entire Figma file
 */
export async function getFigmaFile() {
  try {
    const client = getClient()
    const { FIGMA_FILE_KEY } = getEnvVars()
    const file = await client.file(FIGMA_FILE_KEY)
    return file.data
  } catch (error) {
    console.error('Error fetching Figma file:', error)
    throw error
  }
}

/**
 * Fetch specific nodes from the Figma file
 * @param nodeIds Array of node IDs to fetch (optional, defaults to env FIGMA_NODE_ID)
 */
export async function getFigmaNodes(nodeIds?: string[]) {
  try {
    const client = getClient()
    const { FIGMA_FILE_KEY, FIGMA_NODE_ID } = getEnvVars()
    const ids = nodeIds || [FIGMA_NODE_ID || '']
    const nodes = await client.fileNodes(FIGMA_FILE_KEY, { ids })
    return nodes.data
  } catch (error) {
    console.error('Error fetching Figma nodes:', error)
    throw error
  }
}

/**
 * Fetch image URLs for specific nodes
 * @param nodeIds Array of node IDs to get images for
 * @param options Image options (format, scale, etc.)
 */
export async function getFigmaImages(
  nodeIds: string[],
  options: {
    format?: 'jpg' | 'png' | 'svg' | 'pdf'
    scale?: number
  } = {}
) {
  try {
    const client = getClient()
    const { FIGMA_FILE_KEY } = getEnvVars()
    const { format = 'png', scale = 2 } = options

    const images = await client.fileImages(FIGMA_FILE_KEY, {
      ids: nodeIds,
      format,
      scale,
    })

    return images.data
  } catch (error) {
    console.error('Error fetching Figma images:', error)
    throw error
  }
}

/**
 * Fetch all text styles from the Figma file
 */
export async function getFigmaTextStyles() {
  try {
    const client = getClient()
    const { FIGMA_FILE_KEY } = getEnvVars()
    const file = await client.file(FIGMA_FILE_KEY)
    return file.data.styles || {}
  } catch (error) {
    console.error('Error fetching Figma text styles:', error)
    throw error
  }
}

/**
 * Fetch all color styles from the Figma file
 */
export async function getFigmaColorStyles() {
  try {
    const client = getClient()
    const { FIGMA_FILE_KEY } = getEnvVars()
    const file = await client.file(FIGMA_FILE_KEY)
    return file.data.styles || {}
  } catch (error) {
    console.error('Error fetching Figma color styles:', error)
    throw error
  }
}

/**
 * Get file metadata
 */
export async function getFigmaFileMetadata() {
  try {
    const client = getClient()
    const { FIGMA_FILE_KEY } = getEnvVars()
    const file = await client.file(FIGMA_FILE_KEY)
    return {
      name: file.data.name,
      version: file.data.version,
      lastModified: file.data.lastModified,
      thumbnailUrl: file.data.thumbnailUrl,
    }
  } catch (error) {
    console.error('Error fetching Figma file metadata:', error)
    throw error
  }
}

/**
 * Helper to extract styles from a node
 */
export function extractStylesFromNode(node: any) {
  return {
    fills: node.fills || [],
    strokes: node.strokes || [],
    effects: node.effects || [],
    layoutMode: node.layoutMode,
    primaryAxisSizingMode: node.primaryAxisSizingMode,
    counterAxisSizingMode: node.counterAxisSizingMode,
    paddingLeft: node.paddingLeft,
    paddingRight: node.paddingRight,
    paddingTop: node.paddingTop,
    paddingBottom: node.paddingBottom,
    itemSpacing: node.itemSpacing,
    cornerRadius: node.cornerRadius,
  }
}

/**
 * Helper to extract text properties from a text node
 */
export function extractTextProperties(node: any) {
  if (node.type !== 'TEXT') return null

  return {
    characters: node.characters,
    style: node.style || {},
    characterStyleOverrides: node.characterStyleOverrides || [],
    styleOverrideTable: node.styleOverrideTable || {},
  }
}

export default {
  getFigmaFile,
  getFigmaNodes,
  getFigmaImages,
  getFigmaTextStyles,
  getFigmaColorStyles,
  getFigmaFileMetadata,
  extractStylesFromNode,
  extractTextProperties,
}
