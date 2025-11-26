/**
 * Design System Tokens
 * 
 * All design system values in one place for easy customization.
 * These tokens define the visual language of the portfolio.
 */

export const designTokens = {
  colors: {
    // Core palette - Deep Space Black theme
    background: "220 20% 6%",
    foreground: "200 20% 98%",
    
    // Primary - Cyber Cyan
    primary: "190 95% 55%",
    primaryForeground: "220 20% 6%",
    primaryGlow: "190 95% 65%",
    
    // Secondary - Electric Purple
    secondary: "280 85% 65%",
    secondaryForeground: "220 20% 6%",
    secondaryGlow: "280 85% 75%",
    
    // Accent - Neon Magenta
    accent: "320 100% 65%",
    accentForeground: "220 20% 6%",
    
    // UI elements
    card: "220 18% 9%",
    cardHover: "220 18% 12%",
    muted: "220 15% 15%",
    mutedForeground: "200 10% 60%",
    border: "220 15% 20%",
  },

  typography: {
    // Font families
    fontSans: "Inter, sans-serif",
    fontMono: "JetBrains Mono, monospace",
    fontDisplay: "Inter, sans-serif",
    
    // Font sizes (in rem)
    textXs: "0.75rem",    // 12px
    textSm: "0.875rem",   // 14px
    textBase: "1rem",     // 16px
    textLg: "1.125rem",   // 18px
    textXl: "1.25rem",    // 20px
    text2xl: "1.5rem",    // 24px
    text3xl: "1.875rem",  // 30px
    text4xl: "2.25rem",   // 36px
    text5xl: "3rem",      // 48px
    text6xl: "3.75rem",   // 60px
    text7xl: "4.5rem",    // 72px
    text8xl: "6rem",      // 96px
  },

  spacing: {
    // Spacing scale (in rem)
    px: "1px",
    0: "0",
    1: "0.25rem",   // 4px
    2: "0.5rem",    // 8px
    3: "0.75rem",   // 12px
    4: "1rem",      // 16px
    6: "1.5rem",    // 24px
    8: "2rem",      // 32px
    12: "3rem",     // 48px
    16: "4rem",     // 64px
    24: "6rem",     // 96px
  },

  borderRadius: {
    sm: "calc(0.75rem - 4px)",
    md: "calc(0.75rem - 2px)",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    full: "9999px",
  },

  shadows: {
    primary: "0 0 40px hsl(190 95% 55% / 0.3)",
    secondary: "0 0 40px hsl(280 85% 65% / 0.3)",
    card: "0 10px 30px hsl(220 20% 3% / 0.5)",
  },

  gradients: {
    primary: "linear-gradient(135deg, hsl(190 95% 55%), hsl(280 85% 65%))",
    hero: "linear-gradient(135deg, hsl(190 95% 55%) 0%, hsl(280 85% 65%) 50%, hsl(320 100% 65%) 100%)",
    card: "linear-gradient(180deg, hsl(220 18% 9%) 0%, hsl(220 18% 7%) 100%)",
  },

  motion: {
    // Timing functions
    easeSmooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeBounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    easeElastic: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    
    // Durations (in ms)
    durationFast: 200,
    durationNormal: 300,
    durationSlow: 500,
    
    // Delays (in ms)
    delayShort: 100,
    delayMedium: 300,
    delayLong: 500,
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1400px",
  },
} as const;

export type DesignTokens = typeof designTokens;
