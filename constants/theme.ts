import { Platform } from 'react-native';

export const Stumble = {
  bg: '#0A0A0A',
  surface: '#111111',
  surfaceAlt: '#1A1A1A',
  accent: '#FF2D78',
  accentTint: '#FF2D781A',
  text: '#F5F5F5',
  textMuted: '#666666',
  textDim: '#444444',
  border: '#222222',
  navBorder: '#1E1E1E',
  inactive: '#3A3A3A',
};

const sharedDark = {
  text: Stumble.text,
  background: Stumble.bg,
  tint: Stumble.accent,
  icon: Stumble.textMuted,
  tabIconDefault: Stumble.inactive,
  tabIconSelected: Stumble.accent,
};

export const Colors = {
  light: sharedDark,
  dark: sharedDark,
};

export const Fonts = Platform.select({
  ios: {
    sans: 'DMSans_400Regular',
    serif: 'PlayfairDisplay_700Bold',
    rounded: 'DMSans_400Regular',
    mono: 'ui-monospace',
    display: 'PlayfairDisplay_700Bold',
  },
  default: {
    sans: 'DMSans_400Regular',
    serif: 'PlayfairDisplay_700Bold',
    rounded: 'DMSans_400Regular',
    mono: 'monospace',
    display: 'PlayfairDisplay_700Bold',
  },
  web: {
    sans: "'DM Sans', system-ui, sans-serif",
    serif: "'Playfair Display', Georgia, serif",
    rounded: "'DM Sans', system-ui, sans-serif",
    mono: "SFMono-Regular, Menlo, monospace",
    display: "'Playfair Display', Georgia, serif",
  },
});
