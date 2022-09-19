import { createSlice } from '@reduxjs/toolkit';

export enum ApplicationModal {
  CREATE_POST_MODAL,
  DETAIL_POST_MODAL,
}

export interface ApplicationState {
  readonly openModal: ApplicationModal | null;
}

const initialState: ApplicationState = {
  openModal: null,
};
const mainSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setOpenModal(state, action) {
      state.openModal = action.payload;
    },
  },
});

export const { setOpenModal } = mainSlice.actions;
export default mainSlice.reducer;
