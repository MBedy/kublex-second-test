import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { ToggleContactPayload } from './types';
import { ContactModel } from '../api-reqres';

export const favoriteAdapter = createEntityAdapter<ContactModel>({
  selectId: (contact) => contact.id,
});

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: favoriteAdapter.getInitialState(),
  reducers: {
    toggleContact: (state, { payload }: ToggleContactPayload) => {
      const contact = payload?.contact;
      const { selectById } = favoriteAdapter?.getSelectors();
      if (selectById(state, contact?.id)) {
        favoriteAdapter.removeOne(state, contact?.id);
      } else {
        favoriteAdapter.addOne(state, contact);
      }
    },
  },
});

export const favoriteActions = favoriteSlice.actions;
