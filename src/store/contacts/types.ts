import { ApiPages, ContactListModel } from '../api-reqres';

export type ContactsState = {
  contacts: ContactListModel;
  page: ApiPages;
};
