import { useAppDispatch, useAppSelector } from '../store';
import { ContactModel } from '../store/api-reqres';
import { favoriteActions, isContactInFavoriteSelector } from '../store/favorite';

export function useFavoriteContacts() {
  const dispatch = useAppDispatch();
  const getIsInFavorite = useAppSelector(isContactInFavoriteSelector);

  const onToggleContactFavorite = (contact: ContactModel) => {
    dispatch(favoriteActions.toggleContact({ contact }));
  };

  return {
    getIsInFavorite,
    onToggleContactFavorite,
  };
}
