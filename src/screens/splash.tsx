import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { SafeAreaView } from '../components/safe-area-view';
import { Spinner } from '../components/spinner';
import { useSplashScreen } from '../hooks/use-splash-screen';

export function SplashScreen() {
  useSplashScreen();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <Spinner />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 30, color: 'black', marginBottom: 16 },
});
