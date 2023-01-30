import { PayloadAction } from '@reduxjs/toolkit';

import { ContactModel } from '../api-reqres';

export type ToggleContactPayload = PayloadAction<{
  contact: ContactModel;
}>;
