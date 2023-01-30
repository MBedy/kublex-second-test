import { favoriteAdapter } from './reducer';
import { ContactModel } from '../api-reqres';
import { RootState } from '../types';

export const favoriteListSelector = (state: RootState) => {
  const { selectAll } = favoriteAdapter?.getSelectors();

  return { favorites: selectAll(state?.favorite) };
};

export const isContactInFavoriteSelector = (state: RootState) => (contact: ContactModel) => {
  const { selectById } = favoriteAdapter?.getSelectors();

  return Boolean(selectById(state?.favorite, contact?.id));
};
