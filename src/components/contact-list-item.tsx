import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { FavoriteButton, FavoriteButtonProps } from './favorite-button';
import { ContactModel } from '../store/api-reqres';

function getFullName(contact: ContactModel) {
  return `${contact?.first_name} ${contact?.last_name}`;
}

type ContactListItemProps = {
  contact: ContactModel;
} & FavoriteButtonProps;

export function ContactListItem({ contact, ...favoriteProps }: ContactListItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftWrapper}>
        <Image source={{ uri: contact?.avatar }} style={styles.picture} />
        <View>
          <Text style={styles.text}>{getFullName(contact)}</Text>
          <Text style={styles.text}>{contact?.email}</Text>
        </View>
      </View>
      <View>
        <FavoriteButton {...favoriteProps} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftWrapper: {
    flex: 2 / 3,
    flexDirection: 'row',
  },
  picture: {
    height: 65,
    width: 65,
    marginRight: 8,
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
});
