import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { SearchInput } from '../components/search-input';

type SearchContactProps = {
  total?: number;
};

export function TabLayoutSearchContact({ total = 0 }: SearchContactProps) {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <SearchInput value={value} setValue={setValue} />
      </View>
      <Text style={styles.text}>Total: {total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', paddingBottom: 24, alignItems: 'center' },
  inputWrapper: { flex: 3 / 4 },
  text: { marginLeft: 8 },
});
