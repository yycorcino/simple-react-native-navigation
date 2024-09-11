import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Meals() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="fast-food-outline" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore Meals</ThemedText>
      </ThemedView>
      <ThemedText>This app includes all the saved meals along with ingredients and instructions.</ThemedText>
      <Collapsible title="Beautiful UI">
        <ThemedText>
          Having a mock design lead to more styling then creating while coding.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Built Using Expo">
        <ThemedText>
          Expo is a framework that runs natively on all your users' devices. Expo is 
          created on top of React Native.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
