import { fireEvent, screen } from "@testing-library/react";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import renderWithProviders, { mockInitialState } from "@/test.utils";
import UserCard from "./UserCard";
import { RootState } from "@/redux/store";

describe("UserCard Component", () => {
  const mockStore = configureStore<RootState>();
  let store: MockStoreEnhanced<RootState>;

  beforeEach(() => {
    store = mockStore(mockInitialState);
    store.dispatch = jest.fn();
  });

  it("should render UserCard component", () => {
    store = mockStore({
      ...mockInitialState,
    });

    const { baseElement } = renderWithProviders(<UserCard />, store);
    expect(baseElement).toBeTruthy();
  });
  it("should open the edit details dialog on edit icon click", async () => {
    store = mockStore({
      ...mockInitialState,
    });

    renderWithProviders(<UserCard />, store);
    const editBtn = screen.getByTestId("editBtn");
    fireEvent.click(editBtn);
  });
});
