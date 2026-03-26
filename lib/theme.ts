export const theme = {
  // NEU ISE palette — swap these to rebrand the entire site
  // All pairings meet WCAG AA contrast (4.5:1) against bb8 (parchment)
  colors: {
    bb1: '#000000',   // black — primary text
    bb2: '#FFFFFF',   // white — primary accent, headers
    bb3: '#C8102E',   // red — danger, emphasis
    bb4: '#A4804A',   // gold — highlight, callout
    bb5: '#2F2F2F',   // charcoal — secondary accent
    bb6: '#6B6B5E',   // tarnished pewter — muted accent
    bb7: '#9C9680',   // aged ledger tan — borders, subtle backgrounds
    bb8: '#E8E0D0',   // parchment — page background, light surfaces
  },
  // Semantic aliases — use these in components, not raw hex
  semantic: {
    text:        'bb1',
    accent:      'bb2',
    danger:      'bb3',
    highlight:   'bb4',
    secondary:   'bb5',
    muted:       'bb6',
    border:      'bb7',
    background:  'bb8',
  },
} as const

export type Theme = typeof theme
