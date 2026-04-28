import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Stumble } from '@/constants/theme';

type IconName = keyof typeof Ionicons.glyphMap;

function TabIcon({ name, focused }: { name: IconName; focused: boolean }) {
  return (
    <Ionicons
      name={name}
      size={22}
      color={focused ? Stumble.accent : Stumble.inactive}
    />
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Stumble.bg,
          borderTopColor: Stumble.navBorder,
          borderTopWidth: 1,
          height: 60,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="home" focused={focused} /> }}
      />
      <Tabs.Screen
        name="explore"
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="compass" focused={focused} /> }}
      />
      <Tabs.Screen
        name="map"
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="map" focused={focused} /> }}
      />
      <Tabs.Screen
        name="saved"
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="bookmark" focused={focused} /> }}
      />
      <Tabs.Screen
        name="profile"
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="person" focused={focused} /> }}
      />
    </Tabs>
  );
}
