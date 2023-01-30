import React, { useEffect } from 'react';

import { useInitContacts } from '../hooks/use-init-contacts';
import { useRefreshContacts } from '../hooks/use-refresh-contacts';
import { TabLayout } from '../layout/tab-layout';
import { useAppSelector } from '../store';
import { homeScreenSelector } from '../store/contacts';

export function HomeScreen() {
  const { page, contacts } = useAppSelector(homeScreenSelector);
  const { onInitContacts, isInitializing } = useInitContacts();
  const { onRefreshContacts, isRefreshing } = useRefreshContacts();

  useEffect(() => {
    onInitContacts(page);
  }, []);

  return (
    <TabLayout
      isInitializing={isInitializing}
      contacts={contacts}
      onRefreshContacts={onRefreshContacts}
      refreshing={isRefreshing}
    />
  );
}
