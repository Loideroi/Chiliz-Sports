#!/usr/bin/env python3
"""
Convert TTF fonts to WOFF2 format for better web performance.
"""

import os
import sys
from pathlib import Path

# Add fonttools to path
sys.path.insert(0, '/Users/markverdegaal/Library/Python/3.9/lib/python/site-packages')

from fontTools.ttLib import TTFont

def convert_ttf_to_woff2(ttf_path, woff2_path):
    """Convert a TTF font to WOFF2 format."""
    try:
        font = TTFont(ttf_path)
        font.flavor = 'woff2'
        font.save(woff2_path)

        # Get file sizes for comparison
        ttf_size = os.path.getsize(ttf_path)
        woff2_size = os.path.getsize(woff2_path)
        reduction = ((ttf_size - woff2_size) / ttf_size) * 100

        print(f"✓ {os.path.basename(ttf_path)}")
        print(f"  {ttf_size:,} bytes → {woff2_size:,} bytes ({reduction:.1f}% reduction)")
        return True
    except Exception as e:
        print(f"✗ Error converting {ttf_path}: {e}")
        return False

def main():
    # Path to atyp-text fonts
    font_dir = Path(__file__).parent.parent / 'public' / 'fonts' / 'atyp-text'

    if not font_dir.exists():
        print(f"Error: Font directory not found: {font_dir}")
        return 1

    # Find all TTF files
    ttf_files = list(font_dir.glob('*.ttf'))

    if not ttf_files:
        print(f"No TTF files found in {font_dir}")
        return 1

    print(f"Converting {len(ttf_files)} TTF fonts to WOFF2...\n")

    success_count = 0
    for ttf_path in ttf_files:
        woff2_path = ttf_path.with_suffix('.woff2')
        if convert_ttf_to_woff2(str(ttf_path), str(woff2_path)):
            success_count += 1
        print()

    print(f"\nConversion complete: {success_count}/{len(ttf_files)} fonts converted successfully")
    return 0 if success_count == len(ttf_files) else 1

if __name__ == '__main__':
    sys.exit(main())
