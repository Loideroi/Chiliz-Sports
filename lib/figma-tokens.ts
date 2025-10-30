/**
 * Figma Design Token Parser
 * Converts Figma design properties into usable CSS variables and TypeScript types
 */

/**
 * Convert Figma RGBA color to CSS rgba string
 */
export function figmaColorToCSS(color: any): string {
  if (!color) return 'transparent'

  const r = Math.round(color.r * 255)
  const g = Math.round(color.g * 255)
  const b = Math.round(color.b * 255)
  const a = color.a !== undefined ? color.a : 1

  if (a === 1) {
    return `rgb(${r}, ${g}, ${b})`
  }

  return `rgba(${r}, ${g}, ${b}, ${a})`
}

/**
 * Convert Figma RGBA color to hex
 */
export function figmaColorToHex(color: any): string {
  if (!color) return '#000000'

  const r = Math.round(color.r * 255)
  const g = Math.round(color.g * 255)
  const b = Math.round(color.b * 255)

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

/**
 * Extract typography tokens from text node
 */
export function extractTypographyTokens(textNode: any) {
  const style = textNode.style || {}

  return {
    fontFamily: style.fontFamily || 'inherit',
    fontSize: style.fontSize ? `${style.fontSize}px` : 'inherit',
    fontWeight: style.fontWeight || 400,
    lineHeight: style.lineHeightPx ? `${style.lineHeightPx}px` : style.lineHeightPercentFontSize ? `${style.lineHeightPercentFontSize}%` : 'normal',
    letterSpacing: style.letterSpacing ? `${style.letterSpacing}px` : 'normal',
    textTransform: style.textCase === 'UPPER' ? 'uppercase' : style.textCase === 'LOWER' ? 'lowercase' : 'none',
    textDecoration: style.textDecoration === 'UNDERLINE' ? 'underline' : 'none',
  }
}

/**
 * Extract spacing values from layout properties
 */
export function extractSpacingTokens(node: any) {
  return {
    paddingTop: node.paddingTop ? `${node.paddingTop}px` : '0',
    paddingRight: node.paddingRight ? `${node.paddingRight}px` : '0',
    paddingBottom: node.paddingBottom ? `${node.paddingBottom}px` : '0',
    paddingLeft: node.paddingLeft ? `${node.paddingLeft}px` : '0',
    itemSpacing: node.itemSpacing ? `${node.itemSpacing}px` : '0',
    gap: node.itemSpacing ? `${node.itemSpacing}px` : '0',
  }
}

/**
 * Extract border radius
 */
export function extractBorderRadius(node: any): string {
  if (node.cornerRadius) {
    return `${node.cornerRadius}px`
  }

  if (node.rectangleCornerRadii) {
    const [tl, tr, br, bl] = node.rectangleCornerRadii
    return `${tl}px ${tr}px ${br}px ${bl}px`
  }

  return '0'
}

/**
 * Extract colors from fills
 */
export function extractColors(fills: any[]): string[] {
  if (!fills || fills.length === 0) return []

  return fills
    .filter((fill: any) => fill.type === 'SOLID' && fill.visible !== false)
    .map((fill: any) => figmaColorToCSS(fill.color))
}

/**
 * Extract gradient from fills
 */
export function extractGradient(fills: any[]): string | null {
  if (!fills || fills.length === 0) return null

  const gradientFill = fills.find(
    (fill: any) => (fill.type === 'GRADIENT_LINEAR' || fill.type === 'GRADIENT_RADIAL') && fill.visible !== false
  )

  if (!gradientFill) return null

  const stops = gradientFill.gradientStops
    .map((stop: any) => {
      const color = figmaColorToCSS(stop.color)
      const position = Math.round(stop.position * 100)
      return `${color} ${position}%`
    })
    .join(', ')

  if (gradientFill.type === 'GRADIENT_LINEAR') {
    return `linear-gradient(180deg, ${stops})`
  }

  return `radial-gradient(circle, ${stops})`
}

/**
 * Extract box shadow from effects
 */
export function extractBoxShadow(effects: any[]): string {
  if (!effects || effects.length === 0) return 'none'

  const shadows = effects
    .filter((effect: any) =>
      (effect.type === 'DROP_SHADOW' || effect.type === 'INNER_SHADOW') &&
      effect.visible !== false
    )
    .map((effect: any) => {
      const x = effect.offset?.x || 0
      const y = effect.offset?.y || 0
      const blur = effect.radius || 0
      const spread = effect.spread || 0
      const color = figmaColorToCSS(effect.color)
      const inset = effect.type === 'INNER_SHADOW' ? 'inset ' : ''

      return `${inset}${x}px ${y}px ${blur}px ${spread}px ${color}`
    })

  return shadows.length > 0 ? shadows.join(', ') : 'none'
}

/**
 * Parse a Figma node tree and extract design tokens
 */
export function parseNodeForTokens(node: any): any {
  const tokens: any = {
    id: node.id,
    name: node.name,
    type: node.type,
  }

  // Extract based on node type
  if (node.type === 'TEXT') {
    tokens.typography = extractTypographyTokens(node)
    tokens.color = extractColors(node.fills)[0] || null
  }

  if (node.type === 'FRAME' || node.type === 'GROUP' || node.type === 'COMPONENT') {
    tokens.layout = {
      width: node.absoluteBoundingBox?.width || node.size?.x,
      height: node.absoluteBoundingBox?.height || node.size?.y,
      layoutMode: node.layoutMode,
    }

    tokens.spacing = extractSpacingTokens(node)
    tokens.borderRadius = extractBorderRadius(node)
  }

  // Common properties
  if (node.fills) {
    const colors = extractColors(node.fills)
    if (colors.length > 0) {
      tokens.backgroundColor = colors[0]
    }

    const gradient = extractGradient(node.fills)
    if (gradient) {
      tokens.backgroundImage = gradient
    }
  }

  if (node.effects) {
    tokens.boxShadow = extractBoxShadow(node.effects)
  }

  // Recurse through children
  if (node.children && node.children.length > 0) {
    tokens.children = node.children.map((child: any) => parseNodeForTokens(child))
  }

  return tokens
}

/**
 * Generate CSS variables from design tokens
 */
export function generateCSSVariables(tokens: any, prefix: string = '--figma'): string {
  const cssVars: string[] = []

  function flatten(obj: any, path: string = '') {
    for (const key in obj) {
      const value = obj[key]
      const newPath = path ? `${path}-${key}` : key

      if (typeof value === 'string' || typeof value === 'number') {
        cssVars.push(`  ${prefix}-${newPath}: ${value};`)
      } else if (typeof value === 'object' && !Array.isArray(value)) {
        flatten(value, newPath)
      }
    }
  }

  flatten(tokens)

  return `:root {\n${cssVars.join('\n')}\n}`
}

/**
 * Convert design tokens to TypeScript type definitions
 */
export function generateTypeScript(tokens: any): string {
  return `export interface DesignTokens ${JSON.stringify(tokens, null, 2)}`
}

export default {
  figmaColorToCSS,
  figmaColorToHex,
  extractTypographyTokens,
  extractSpacingTokens,
  extractBorderRadius,
  extractColors,
  extractGradient,
  extractBoxShadow,
  parseNodeForTokens,
  generateCSSVariables,
  generateTypeScript,
}
