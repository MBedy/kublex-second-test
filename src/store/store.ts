import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { reqresApi } from './api-reqres';
import { contactsSlice } from './contacts';
import { favoriteSlice } from './favorite';

const persistConfig = {
  key: 'kublex-test',
  version: 1,
  storage: AsyncStorage,
  blacklist: [reqresApi.reducerPath, contactsSlice.name],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [contactsSlice.name]: contactsSlice.reducer,
    [favoriteSlice.name]: favoriteSlice.reducer,
    [reqresApi.reducerPath]: reqresApi.reducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(reqresApi.middleware),
});

export const persitedStore = persistStore(store);

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
