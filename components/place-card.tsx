import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import type { Place, Spend } from '@/constants/places';

const SPEND_LABEL: Record<Spend, string> = {
  cheap: '₹',
  mid: '₹₹',
  splurge: '₹₹₹',
};

export function PlaceCard({ place }: { place: Place }) {
  return (
    <ThemedView style={styles.card}>
      <Image source={place.imageUrl} style={styles.image} contentFit="cover" />
      <View style={styles.body}>
        <View style={styles.headerRow}>
          <ThemedText type="defaultSemiBold" style={styles.name}>
            {place.name}
          </ThemedText>
          <ThemedText style={styles.spend}>{SPEND_LABEL[place.spend]}</ThemedText>
        </View>
        <ThemedText style={styles.neighborhood}>{place.neighborhood}</ThemedText>
        <View style={styles.tagRow}>
          {place.vibeTags.map((tag) => (
            <View key={tag} style={styles.tag}>
              <ThemedText style={styles.tagText}>{tag}</ThemedText>
            </View>
          ))}
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 180,
  },
  body: {
    padding: 12,
    gap: 6,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
  },
  spend: {
    opacity: 0.7,
  },
  neighborhood: {
    opacity: 0.7,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: 'rgba(127,127,127,0.2)',
  },
  tagText: {
    fontSize: 12,
  },
});
