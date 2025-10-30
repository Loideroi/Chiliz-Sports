import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chiliz Sports',
    short_name: 'Chiliz Sports',
    description: 'Sports partnership and sponsorship agency - When access matters, we\'re already inside.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0518',
    theme_color: '#FF0052',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
