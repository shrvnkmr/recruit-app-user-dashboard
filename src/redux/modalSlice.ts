import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  open: boolean;
}

const initialState = {
  open: false,
} as ModalState;

const modalSlice = createSlice({
  name: "modalState",
  initialState: initialState,
  reducers: {
    closeModal: (state) => ({
      ...state,
      open: false,
    }),
    openModal: (state) => ({
      ...state,
      open: true,
    }),
  },
});

export const { closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
