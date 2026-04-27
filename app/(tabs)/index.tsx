import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PlaceCard } from '@/components/place-card';
import { ThemedText } from '@/components/themed-text';
import { PLACES } from '@/constants/places';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ThemedText type="title" style={styles.heading}>
        Stumble
      </ThemedText>
      <FlatList
        data={PLACES}
        keyExtractor={(place) => place.id}
        renderItem={({ item }) => <PlaceCard place={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  heading: {
    marginVertical: 12,
  },
  list: {
    paddingBottom: 24,
  },
});
