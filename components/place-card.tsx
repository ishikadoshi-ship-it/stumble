import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { SPEND_SYMBOL, type Place } from '@/constants/places';
import { Stumble } from '@/constants/theme';

export function PlaceCard({ place }: { place: Place }) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push(`/place/${place.id}`)}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
      <Image source={place.imageUrl} style={styles.image} contentFit="cover" />
      <LinearGradient
        colors={['transparent', 'rgba(10,10,10,0.55)', 'rgba(10,10,10,0.95)']}
        locations={[0, 0.5, 1]}
        style={styles.gradient}
      />

      <ThemedText style={styles.spend}>{SPEND_SYMBOL[place.spend]}</ThemedText>

      <View style={styles.bottom}>
        <View style={styles.tagRow}>
          {place.vibeTags.map((tag) => (
            <View key={tag} style={styles.tag}>
              <ThemedText style={styles.tagText}>{tag}</ThemedText>
            </View>
          ))}
        </View>
        <ThemedText style={styles.name}>{place.name}</ThemedText>
        <ThemedText style={styles.neighborhood}>{place.neighborhood}</ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    aspectRatio: 4 / 5,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: Stumble.surface,
  },
  cardPressed: {
    opacity: 0.85,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  spend: {
    position: 'absolute',
    top: 14,
    right: 16,
    color: Stumble.accent,
    fontFamily: 'DMSans_700Bold',
    fontSize: 14,
    letterSpacing: 0.5,
  },
  bottom: {
    position: 'absolute',
    left: 18,
    right: 18,
    bottom: 18,
    gap: 8,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 4,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  tagText: {
    fontSize: 10,
    color: Stumble.text,
    fontFamily: 'DMSans_500Medium',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  name: {
    color: Stumble.text,
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 28,
    lineHeight: 32,
  },
  neighborhood: {
    color: Stumble.textMuted,
    fontFamily: 'DMSans_400Regular',
    fontSize: 12,
    letterSpacing: 0.4,
  },
});
