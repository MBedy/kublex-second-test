import React, { PropsWithChildren } from 'react';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

export function SafeAreaView({ children }: PropsWithChildren<object>) {
  return <RNSafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>{children}</RNSafeAreaView>;
}
