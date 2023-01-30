import React from 'react';

import { TabLayout } from '../layout/tab-layout';
import { useAppSelector } from '../store';
import { favoriteListSelector } from '../store/favorite';

export function FavoritesScreen() {
  const { favorites } = useAppSelector(favoriteListSelector);

  return (
    <TabLayout
      contacts={favorites}
      isInitializing={false}
      refreshing={false}
      total={favorites?.length}
    />
  );
}
