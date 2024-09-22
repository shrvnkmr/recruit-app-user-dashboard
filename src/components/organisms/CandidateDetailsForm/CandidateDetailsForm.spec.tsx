import { fireEvent, screen, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import CandidateDetailsForm from "./CandidateDetailsForm";
import { RootState } from "@/redux/store";
import { mockInitialState } from "@/test.utils";
import userEvent from "@testing-library/user-event";

const mockStore = configureStore<RootState>();

describe("CandidateDetailsForm", () => {
  let store: MockStoreEnhanced<RootState>;
  beforeEach(() => {
    store = mockStore(mockInitialState);
  });

  it("should render form with initial state from Redux", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <CandidateDetailsForm />
      </Provider>
    );

    expect(getByLabelText("Current Organization")).toBeDefined();
  });

  it("should allow user to edit form and submit", () => {
    const store = mockStore({
      ...mockInitialState,
      candidateDetails: {
        ...mockInitialState.candidateDetails,
        dob: "1969-12-20T15:22:02.251Z",
        availableFrom: "1969-12-20T15:22:02.251Z",
      },
    });
    const { getByTestId, getByLabelText } = render(
      <Provider store={store}>
        <CandidateDetailsForm />
      </Provider>
    );

    const organization = document.getElementById("organization");
    if (organization) {
      fireEvent.change(organization, { target: { value: "Updated Org" } });
    }

    const submitBtn = getByTestId("submitBtn");
    fireEvent.click(submitBtn);

    expect(getByLabelText("Current Organization")).toBeDefined();
  });

  it("should allow user to select date from date picker and submit form", async () => {
    render(
      <Provider store={store}>
        <CandidateDetailsForm />
      </Provider>
    );
    const datePicker = screen.getByLabelText(/Date of Birth/i) as HTMLInputElement;
    expect(datePicker).toBeDefined();

    const datePickerContainer = datePicker.closest("div");
    expect(datePickerContainer).not.toBeNull();

    if (datePickerContainer !== null) {
      const datePickerIcon = datePickerContainer.querySelector("svg");
      expect(datePickerIcon).not.toBeNull();

      if (datePickerIcon !== null) {
        userEvent.click(datePickerIcon);

        const dateSelector = await screen.findByRole("dialog");
        expect(dateSelector).toBeDefined();

        const randomDay = screen.getByRole("gridcell", { name: /15/i });
        userEvent.click(randomDay);
        await waitFor(() => {
          expect(datePicker.value).toContain("15");
        });
      }
    }
  });
  it("should allow user to select available from date from date picker and submit form", async () => {
    render(
      <Provider store={store}>
        <CandidateDetailsForm />
      </Provider>
    );
    const datePicker = screen.getByLabelText(/Available From/i) as HTMLInputElement;
    expect(datePicker).toBeDefined();

    const datePickerContainer = datePicker.closest("div");
    expect(datePickerContainer).not.toBeNull();

    if (datePickerContainer !== null) {
      const datePickerIcon = datePickerContainer.querySelector("svg");
      expect(datePickerIcon).not.toBeNull();

      if (datePickerIcon !== null) {
        userEvent.click(datePickerIcon);

        const dateSelector = await screen.findByRole("dialog");
        expect(dateSelector).toBeDefined();

        const randomDay = screen.getByRole("gridcell", { name: /15/i });
        userEvent.click(randomDay);
        await waitFor(() => {
          expect(datePicker.value).toContain("15");
        });
      }
    }
  });
});
