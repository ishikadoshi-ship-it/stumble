import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FilterChips } from '@/components/filter-chips';
import { PlaceCard } from '@/components/place-card';
import { ThemedText } from '@/components/themed-text';
import { PLACES } from '@/constants/places';
import { Stumble } from '@/constants/theme';

const VIBE_OPTIONS = [
  'aesthetic',
  'indie',
  'study-friendly',
  'late-night',
  'brunch',
  'pet-friendly',
] as const;

const SPEND_OPTIONS = ['cheap', 'mid', 'splurge'] as const;

export default function HomeScreen() {
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
  const [selectedSpends, setSelectedSpends] = useState<string[]>([]);

  const toggle = (list: string[], setList: (next: string[]) => void) => (option: string) => {
    setList(list.includes(option) ? list.filter((x) => x !== option) : [...list, option]);
  };

  const filteredPlaces = useMemo(() => {
    return PLACES.filter((place) => {
      const vibeOk =
        selectedVibes.length === 0 ||
        place.vibeTags.some((tag) => selectedVibes.includes(tag));
      const spendOk =
        selectedSpends.length === 0 || selectedSpends.includes(place.spend);
      return vibeOk && spendOk;
    });
  }, [selectedVibes, selectedSpends]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <ThemedText type="wordmark">STUMBLE</ThemedText>
        <ThemedText type="tagline">find your kind of place.</ThemedText>
      </View>

      <View style={styles.filterSection}>
        <ThemedText type="sectionHeader" style={styles.label}>Vibe</ThemedText>
        <FilterChips
          options={VIBE_OPTIONS}
          selected={selectedVibes}
          onToggle={toggle(selectedVibes, setSelectedVibes)}
        />
        <ThemedText type="sectionHeader" style={styles.label}>Spend</ThemedText>
        <FilterChips
          options={SPEND_OPTIONS}
          selected={selectedSpends}
          onToggle={toggle(selectedSpends, setSelectedSpends)}
        />
      </View>

      {filteredPlaces.length === 0 ? (
        <View style={styles.emptyWrap}>
          <ThemedText type="sectionHeader">No matches</ThemedText>
          <ThemedText type="muted" style={styles.emptyText}>
            try fewer filters
          </ThemedText>
        </View>
      ) : (
        <FlatList
          data={filteredPlaces}
          keyExtractor={(place) => place.id}
          renderItem={({ item }) => <PlaceCard place={item} />}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        />
      )}
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
  filterSection: {
    gap: 6,
    marginBottom: 18,
  },
  label: {
    marginTop: 4,
  },
  list: {
    paddingBottom: 32,
  },
  emptyWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  emptyText: {
    marginTop: 4,
  },
});
