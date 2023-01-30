export type ContactModel = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type ContactListModel = ContactModel[];

type ApiResultSupport = {
  text: string;
  url: string;
};

export type ApiResult = {
  data: ContactListModel;
  page: number;
  per_page: number;
  support: ApiResultSupport;
  total: number;
  total_pages: number;
};

export type ApiPages = 1 | 2;
