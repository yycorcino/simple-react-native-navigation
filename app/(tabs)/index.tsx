import { Image, StyleSheet, Platform, View } from 'react-native';
import { useState, useEffect } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { supabase } from '../../lib/supabase'
import { Session } from '@supabase/supabase-js'

export default function HomeScreen() {
  const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })
    
        supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
        })
    }, []);

  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    headerImage={
        <Image
        source={require('@/assets/images/partial-react-logo.png')}
        style={styles.reactLogo}
        />
    }>
    <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome {session?.user.email}!</ThemedText>
        <HelloWave />
    </ThemedView>
    <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
        Try <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
        Press{' '}
        <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
        </ThemedText>{' '}
        to open developer tools.
        </ThemedText>
    </ThemedView>
    <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Add more tabs</ThemedText>
        <ThemedText>
        To add more tabs, edit <ThemedText type="defaultSemiBold">_layout.tsx</ThemedText> and 
        create Tabs.Screen component. The value at name, create a file named {"{"}name{"}"}.tsx at 
        <ThemedText type="defaultSemiBold"> app/(tabs)</ThemedText>.
        </ThemedText>
    </ThemedView>
    </ParallaxScrollView>
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
