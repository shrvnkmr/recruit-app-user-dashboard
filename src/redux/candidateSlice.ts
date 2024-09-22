import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CandidateInfo {
  createdAt: string;
  name: string;
  avatar: string;
  designation: string;
  organization: string;
  skills: string;
  availableFrom: string | null;
  salaryCurrent: number;
  notice: string;
  address: string;
  resume: string;
  totalExperience: string;
  summary: string;
  employmentStatus: string;
  dob: string | null;
  relevantExperience: string;
  salaryExpected: number;
  status: string;
  salaryType: string;
  language: string;
  id: string;
}

const initialState: CandidateInfo = {
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
};

const candidateSlice = createSlice({
  name: "candidateDetails",
  initialState: initialState,
  reducers: {
    setCandidateDetails: (state, action: PayloadAction<CandidateInfo>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setCandidateDetails } = candidateSlice.actions;

export default candidateSlice.reducer;
