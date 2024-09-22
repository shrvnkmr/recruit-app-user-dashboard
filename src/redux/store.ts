import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "./candidateSlice";
import modalReducer from "./modalSlice";

const store = configureStore({
  reducer: {
    candidateDetails: candidateReducer,
    modalState: modalReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
