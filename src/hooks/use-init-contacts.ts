import { ApiPages, useLazyGetContactsQuery } from '../store/api-reqres';

export function useInitContacts() {
  const [getContacts, getContactsRes] = useLazyGetContactsQuery();

  const onInitContacts = (pageNumber: ApiPages) => {
    getContacts({ pageNumber });
  };

  return {
    onInitContacts,
    isInitializing: getContactsRes?.isLoading,
  };
}
