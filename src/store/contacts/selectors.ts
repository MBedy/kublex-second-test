import { RootState } from '../types';

export const pageSelector = (state: RootState) => {
  const { page } = state?.contacts;

  return { page };
};

export const homeScreenSelector = (state: RootState) => {
  const { contacts, page } = state?.contacts;

  return { contacts, page };
};
