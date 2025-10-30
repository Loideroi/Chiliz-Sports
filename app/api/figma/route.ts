/**
 * Figma API Endpoint
 * Provides access to Figma design data with caching
 */

import { NextRequest, NextResponse } from 'next/server'
import { getFigmaNodes, getFigmaFileMetadata } from '@/lib/figma'
import { parseNodeForTokens } from '@/lib/figma-tokens'

// Cache duration: 1 hour
const CACHE_DURATION = 60 * 60

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action') || 'nodes'
    const nodeIds = searchParams.get('nodeIds')?.split(',')

    let data: any

    switch (action) {
      case 'metadata':
        data = await getFigmaFileMetadata()
        break

      case 'nodes':
        const nodes = await getFigmaNodes(nodeIds)
        // Parse nodes to extract design tokens
        data = {
          nodes,
          tokens: Object.keys(nodes.nodes).reduce((acc: any, key: string) => {
            const node = nodes.nodes[key]
            if (node && node.document) {
              acc[key] = parseNodeForTokens(node.document)
            }
            return acc
          }, {}),
        }
        break

      case 'tokens':
        const rawNodes = await getFigmaNodes(nodeIds)
        // Only return parsed tokens
        data = Object.keys(rawNodes.nodes).reduce((acc: any, key: string) => {
          const node = rawNodes.nodes[key]
          if (node && node.document) {
            acc[key] = parseNodeForTokens(node.document)
          }
          return acc
        }, {})
        break

      default:
        return NextResponse.json(
          { error: 'Invalid action. Use: metadata, nodes, or tokens' },
          { status: 400 }
        )
    }

    return NextResponse.json(
      { success: true, data },
      {
        status: 200,
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=${CACHE_DURATION * 2}`,
        },
      }
    )
  } catch (error: any) {
    console.error('Figma API Error:', error)

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch Figma data',
      },
      { status: 500 }
    )
  }
}
