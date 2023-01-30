import React from 'react';

import { ContactList } from '../components/contact-list';
import { useFavoriteContacts } from '../hooks/use-favorite-contacts';
import { ContactListModel } from '../store/api-reqres';

type TabLayoutContactsProps = {
  contacts: ContactListModel;
  onRefreshContacts?: () => void;
  refreshing?: boolean;
};

export function TabLayoutContacts({
  contacts,
  onRefreshContacts,
  refreshing,
}: TabLayoutContactsProps) {
  const { onToggleContactFavorite, getIsInFavorite } = useFavoriteContacts();

  return (
    <ContactList
      onRefreshContacts={onRefreshContacts}
      onToggleContactFavorite={onToggleContactFavorite}
      getIsInFavorite={getIsInFavorite}
      contacts={contacts}
      refreshing={refreshing}
    />
  );
}
