import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import { TabLayoutContacts } from './contacts';
import { TabLayoutSearchContact } from './search-contacts';
import { SafeAreaView } from '../components/safe-area-view';
import { Spinner } from '../components/spinner';
import { ContactListModel } from '../store/api-reqres';

type TabLayoutProps = {
  isInitializing?: boolean;
  total?: number;
  contacts: ContactListModel;
  onRefreshContacts?: () => void;
  refreshing?: boolean;
};

export function TabLayout({
  isInitializing,
  total = 6,
  contacts,
  onRefreshContacts,
  refreshing,
}: TabLayoutProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView>
        <TabLayoutSearchContact total={total} />
        {isInitializing ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Spinner />
          </View>
        ) : (
          <TabLayoutContacts
            onRefreshContacts={onRefreshContacts}
            contacts={contacts}
            refreshing={refreshing}
          />
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
