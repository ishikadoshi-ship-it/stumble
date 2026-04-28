import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { PLACES, SPEND_SYMBOL } from '@/constants/places';
import { Stumble } from '@/constants/theme';

export default function PlaceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(false);

  const place = PLACES.find((p) => p.id === id);

  if (!place) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.notFound}>
          <ThemedText type="serifLarge">Not found</ThemedText>
          <Pressable onPress={() => router.back()} style={styles.backLink}>
            <ThemedText type="muted">go back</ThemedText>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.heroWrap}>
          <Image source={place.imageUrl} style={styles.hero} contentFit="cover" />
          <LinearGradient
            colors={['rgba(10,10,10,0.6)', 'transparent', 'rgba(10,10,10,0.95)']}
            locations={[0, 0.4, 1]}
            style={StyleSheet.absoluteFillObject}
          />
          <SafeAreaView edges={['top']} style={styles.heroOverlay}>
            <Pressable onPress={() => router.back()} style={styles.backButton} hitSlop={12}>
              <Ionicons name="arrow-back" size={22} color={Stumble.text} />
            </Pressable>
          </SafeAreaView>
        </View>

        <View style={styles.body}>
          <View style={styles.tagRow}>
            {place.vibeTags.map((tag) => (
              <View key={tag} style={styles.tag}>
                <ThemedText style={styles.tagText}>{tag}</ThemedText>
              </View>
            ))}
          </View>

          <ThemedText style={styles.name}>{place.name}</ThemedText>

          <View style={styles.metaRow}>
            <ThemedText style={styles.neighborhood}>{place.neighborhood}</ThemedText>
            <ThemedText style={styles.dot}>·</ThemedText>
            <ThemedText style={styles.spend}>{SPEND_SYMBOL[place.spend]}</ThemedText>
          </View>

          <ThemedText style={styles.description}>{place.description}</ThemedText>

          <Pressable
            onPress={() => setIsSaved((v) => !v)}
            style={[styles.saveButton, isSaved && styles.saveButtonOn]}>
            <Ionicons
              name={isSaved ? 'bookmark' : 'bookmark-outline'}
              size={16}
              color={isSaved ? Stumble.bg : Stumble.accent}
            />
            <ThemedText style={[styles.saveText, isSaved && styles.saveTextOn]}>
              {isSaved ? 'Saved' : 'Save'}
            </ThemedText>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Stumble.bg,
  },
  scroll: {
    paddingBottom: 48,
  },
  heroWrap: {
    width: '100%',
    aspectRatio: 4 / 5,
    backgroundColor: Stumble.surface,
  },
  hero: {
    ...StyleSheet.absoluteFillObject,
  },
  heroOverlay: {
    paddingHorizontal: 16,
    paddingTop: 4,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(10,10,10,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 14,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: Stumble.surfaceAlt,
    borderWidth: 1,
    borderColor: Stumble.border,
  },
  tagText: {
    fontSize: 10,
    color: Stumble.text,
    fontFamily: 'DMSans_500Medium',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  name: {
    color: Stumble.text,
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 36,
    lineHeight: 40,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  neighborhood: {
    color: Stumble.textMuted,
    fontFamily: 'DMSans_400Regular',
    fontSize: 13,
    letterSpacing: 0.4,
  },
  dot: {
    color: Stumble.textDim,
    fontSize: 13,
  },
  spend: {
    color: Stumble.accent,
    fontFamily: 'DMSans_700Bold',
    fontSize: 13,
    letterSpacing: 0.5,
  },
  description: {
    color: Stumble.text,
    fontFamily: 'DMSans_400Regular',
    fontSize: 15,
    lineHeight: 24,
    marginTop: 4,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 16,
    paddingVertical: 14,
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: Stumble.accent,
    backgroundColor: 'transparent',
  },
  saveButtonOn: {
    backgroundColor: Stumble.accent,
  },
  saveText: {
    color: Stumble.accent,
    fontFamily: 'DMSans_500Medium',
    fontSize: 13,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  saveTextOn: {
    color: Stumble.bg,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  backLink: {
    paddingVertical: 8,
  },
});
