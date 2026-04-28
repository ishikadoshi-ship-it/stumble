import { DMSans_400Regular, DMSans_500Medium, DMSans_700Bold, useFonts } from '@expo-google-fonts/dm-sans';
import { PlayfairDisplay_600SemiBold, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import 'react-native-reanimated';

import { Stumble } from '@/constants/theme';

export const unstable_settings = {
  anchor: '(tabs)',
};

const StumbleNavTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: Stumble.bg,
    card: Stumble.bg,
    text: Stumble.text,
    border: Stumble.border,
    primary: Stumble.accent,
    notification: Stumble.accent,
  },
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: Stumble.bg }} />;
  }

  return (
    <ThemeProvider value={StumbleNavTheme}>
      <Stack screenOptions={{ contentStyle: { backgroundColor: Stumble.bg } }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="place/[id]" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: 'modal', title: 'Modal', contentStyle: { backgroundColor: Stumble.surface } }}
        />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
