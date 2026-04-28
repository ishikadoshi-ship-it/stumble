import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Stumble } from '@/constants/theme';

type Props = {
  options: readonly string[];
  selected: readonly string[];
  onToggle: (option: string) => void;
};

export function FilterChips({ options, selected, onToggle }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}>
      {options.map((option) => {
        const isOn = selected.includes(option);
        return (
          <Pressable
            key={option}
            onPress={() => onToggle(option)}
            style={[styles.chip, isOn && styles.chipOn]}>
            <ThemedText style={[styles.chipText, isOn && styles.chipTextOn]}>
              {option}
            </ThemedText>
          </Pressable>
        );
      })}
      <View style={styles.endSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 6,
    paddingVertical: 2,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: Stumble.surfaceAlt,
    borderWidth: 1,
    borderColor: '#444444',
  },
  chipOn: {
    backgroundColor: Stumble.accentTint,
    borderWidth: 1.5,
    borderColor: Stumble.accent,
  },
  chipText: {
    fontSize: 11,
    color: '#888888',
    fontFamily: 'DMSans_500Medium',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  chipTextOn: {
    color: Stumble.text,
  },
  endSpacer: {
    width: 8,
  },
});
