import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import { Store } from "@reduxjs/toolkit";
import { RootState } from "./redux/store";

const renderWithProviders = (ui: React.ReactNode, store: Store) => {
  const theme = createTheme();
  return render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>{ui}</Provider>
    </ThemeProvider>
  );
};

export default renderWithProviders;

export const mockInitialState: RootState = {
  candidateDetails: {
    createdAt: "",
    name: "",
    avatar: "",
    designation: "",
    organization: "",
    skills: "",
    availableFrom: null,
    salaryCurrent: 0,
    notice: "",
    address: "",
    resume: "",
    totalExperience: "",
    summary: "",
    employmentStatus: "",
    dob: null,
    relevantExperience: "",
    salaryExpected: 0,
    status: "",
    salaryType: "",
    language: "",
    id: "",
  },
  modalState: {
    open: false,
  },
};
