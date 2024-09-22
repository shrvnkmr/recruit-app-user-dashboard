import { fireEvent, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import renderWithProviders, { mockInitialState } from "@/test.utils";
import UserInfo from "./UserInfo";

describe("UserInfo Component", () => {
  const mockStore = configureStore();
  let store: any;

  beforeEach(() => {
    store = mockStore(mockInitialState);
    store.dispatch = jest.fn();
  });

  it("should render tab component and allow tab switching", () => {
    store = mockStore({
      ...mockInitialState,
    });

    renderWithProviders(<UserInfo />, store);
    const tabList = screen.getAllByRole("tab");
    fireEvent.click(tabList[1]);
    expect(screen.findByText(/Nothing to show here/i)).toBeDefined();
  });
});
