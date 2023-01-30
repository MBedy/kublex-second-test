import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { TabStackParamList } from '../helpers/navigation';
import { FavoritesScreen } from '../screens/favorites';
import { HomeScreen } from '../screens/home';

const Tab = createBottomTabNavigator<TabStackParamList>();

export function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="All"
      screenOptions={({ route }) => ({
        headerTitleStyle: {
          textAlign: 'center',
        },
        headerTitle: route?.name === 'All' ? 'My Contacts' : 'My Favorites',
        tabBarIcon: null,
        tabBarLabelStyle: {
          color: 'black',
          fontSize: 16,
          padding: 4,
        },
        tabBarActiveBackgroundColor: 'lightblue',
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: route?.name === 'All' ? 'flex-end' : 'flex-start',
        },
        tabBarIconStyle: {
          display: 'none',
          padding: 0,
          margin: 0,
        },
      })}>
      <Tab.Screen name="All" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}
