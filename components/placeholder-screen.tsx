import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Stumble } from '@/constants/theme';

export function PlaceholderScreen({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <ThemedText type="serifLarge">{title}</ThemedText>
        <ThemedText type="tagline">{subtitle}</ThemedText>
      </View>
      <View style={styles.body}>
        <ThemedText type="sectionHeader">Coming soon</ThemedText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Stumble.bg,
    paddingHorizontal: 16,
  },
  header: {
    paddingTop: 8,
    paddingBottom: 20,
    gap: 6,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
