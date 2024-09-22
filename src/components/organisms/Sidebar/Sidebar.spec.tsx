import { fireEvent, screen } from "@testing-library/react";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import renderWithProviders, { mockInitialState } from "@/test.utils";
import Sidebar from "./Sidebar";
import { RootState } from "@/redux/store";

describe("Sidebar Component", () => {
  const mockStore = configureStore<RootState>();
  let store: MockStoreEnhanced<RootState>;

  beforeEach(() => {
    store = mockStore(mockInitialState);
    store.dispatch = jest.fn();
  });

  it("should render tab component and allow tab switching", () => {
    store = mockStore({
      ...mockInitialState,
    });

    renderWithProviders(<Sidebar />, store);
    const tabList = screen.getAllByRole("tab");
    fireEvent.click(tabList[1]);
    expect(screen.findByText(/Nothing to show here/i)).toBeDefined();
  });
});
