import { StyleSheet, Text, type TextProps } from 'react-native';

import { Stumble } from '@/constants/theme';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | 'default'
    | 'title'
    | 'wordmark'
    | 'serifLarge'
    | 'sectionHeader'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'tagline'
    | 'muted'
    | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        styles.base,
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'wordmark' ? styles.wordmark : undefined,
        type === 'serifLarge' ? styles.serifLarge : undefined,
        type === 'sectionHeader' ? styles.sectionHeader : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'tagline' ? styles.tagline : undefined,
        type === 'muted' ? styles.muted : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    color: Stumble.text,
    fontFamily: 'DMSans_400Regular',
  },
  default: {
    fontSize: 14,
    lineHeight: 20,
  },
  defaultSemiBold: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'DMSans_700Bold',
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: 'PlayfairDisplay_700Bold',
  },
  wordmark: {
    fontSize: 32,
    lineHeight: 36,
    fontFamily: 'PlayfairDisplay_700Bold',
    letterSpacing: 4.8,
    color: Stumble.text,
  },
  serifLarge: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 26,
    lineHeight: 30,
    color: Stumble.text,
  },
  sectionHeader: {
    fontSize: 10,
    fontFamily: 'DMSans_500Medium',
    letterSpacing: 2.4,
    textTransform: 'uppercase',
    color: Stumble.textDim,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'DMSans_400Regular',
    fontStyle: 'italic',
    color: Stumble.textMuted,
  },
  tagline: {
    fontSize: 13,
    fontFamily: 'DMSans_400Regular',
    fontStyle: 'italic',
    color: Stumble.textMuted,
  },
  muted: {
    fontSize: 12,
    color: Stumble.textMuted,
    fontFamily: 'DMSans_400Regular',
  },
  link: {
    fontSize: 14,
    color: Stumble.accent,
    fontFamily: 'DMSans_500Medium',
  },
});
