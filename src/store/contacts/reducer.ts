import { createSlice } from '@reduxjs/toolkit';

import { ContactsState } from './types';
import { apiEndpoints } from '../api-reqres';

const initialState: ContactsState = {
  contacts: [],
  page: 1,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    refreshContacts: (state) => {
      state.page = state.page === 1 ? 2 : 1;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(apiEndpoints.getContacts.matchFulfilled, (state, action) => {
      return {
        ...state,
        contacts: action?.payload?.data,
      };
    });
    builder.addMatcher(apiEndpoints.refreshContacts.matchFulfilled, (state, action) => {
      return {
        ...state,
        contacts: action?.payload?.data,
      };
    });
  },
});

export const contactsActions = contactsSlice.actions;
