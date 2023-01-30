import React from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';

import { ContactListItem } from './contact-list-item';
import { ContactModel, ContactListModel } from '../store/api-reqres';

type ContactListProps = {
  contacts: ContactListModel;
  onRefreshContacts?: () => void;
  onToggleContactFavorite: (contact: ContactModel) => void;
  getIsInFavorite: (contact: ContactModel) => boolean;
  refreshing?: boolean;
};

export function ContactList({
  contacts,
  refreshing,
  onRefreshContacts,
  onToggleContactFavorite,
  getIsInFavorite,
}: ContactListProps) {
  return (
    <FlatList
      refreshControl={
        onRefreshContacts ? (
          <RefreshControl refreshing={refreshing} onRefresh={onRefreshContacts} />
        ) : null
      }
      data={contacts}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews
      keyExtractor={(item) => item?.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => (
        <ContactListItem
          contact={item}
          onToggleFavorite={() => {
            onToggleContactFavorite(item);
          }}
          isFavorite={getIsInFavorite(item)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  separator: { height: 16 },
  contentContainer: { flexGrow: 1, paddingBottom: 16 },
});
