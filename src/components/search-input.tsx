import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

type SearchInputProps = {
  value: string;
  setValue: (newValue: string) => void;
};

export function SearchInput({ setValue, value }: SearchInputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={(newValue) => {
        setValue(newValue);
      }}
      style={styles.input}
      placeholder="Search"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 4,
    borderWidth: 1,
    borderColor: 'lightblue',
  },
});
