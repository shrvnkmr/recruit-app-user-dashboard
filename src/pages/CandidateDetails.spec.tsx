import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import axios from "axios";
import { RootState } from "@/redux/store";
import { mockInitialState } from "@/test.utils";
import CandidateDetails from "./CandidateDetails";
import { CandidateInfo } from "@/redux/candidateSlice";

const mockStore = configureStore<RootState>();
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("CandidateDetails", () => {
  let store: MockStoreEnhanced<RootState>;

  beforeEach(() => {
    store = mockStore(mockInitialState);
  });

  it("should render CandidateDetails page successfully", async () => {
    const mockResponse: CandidateInfo = {
      id: "1",
      name: "John Doe",
      createdAt: "",
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
    };

    mockedAxios.get.mockResolvedValueOnce({ data: mockResponse });

    render(
      <Provider store={store}>
        <CandidateDetails />
      </Provider>
    );

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalled());
  });

  it("should handle fetch error", async () => {
    mockedAxios.get.mockRejectedValueOnce(
      new Error("Failed to fetch candidate details")
    );

    render(
      <Provider store={store}>
        <CandidateDetails />
      </Provider>
    );

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalled());
  });
});
