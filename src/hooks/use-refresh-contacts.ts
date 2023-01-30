import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../store';
import { useLazyRefreshContactsQuery } from '../store/api-reqres';
import { contactsActions, pageSelector } from '../store/contacts';

export function useRefreshContacts() {
  const dispatch = useAppDispatch();
  const [refreshContacts, refreshContactsRes] = useLazyRefreshContactsQuery();
  const { page } = useAppSelector(pageSelector);

  const onRefreshContacts = useCallback(() => {
    if (page === 1) {
      refreshContacts({ pageNumber: 2 });
    } else {
      refreshContacts({ pageNumber: 1 });
    }
    dispatch(contactsActions.refreshContacts());
  }, [page]);

  return {
    onRefreshContacts,
    isRefreshing: refreshContactsRes?.isLoading,
  };
}
