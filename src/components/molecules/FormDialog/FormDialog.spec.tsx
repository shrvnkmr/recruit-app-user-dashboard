import { fireEvent, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import FormDialog from "./FormDialog";
import userEvent from "@testing-library/user-event";
import renderWithProviders, { mockInitialState } from "@/test.utils";

describe("FormDialog Component", () => {
  const mockStore = configureStore();
  let store: any;

  beforeEach(() => {
    store = mockStore(mockInitialState);
    store.dispatch = jest.fn();
  });

  it("should dispatch closeModal action when dialog is closed", () => {
    store = mockStore({
      ...mockInitialState,
      modalState: { open: true },
    });

    renderWithProviders(<FormDialog />, store);
    fireEvent.keyDown(screen.getByRole("dialog"), {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });
    const closeButton = screen.getByRole("button", { name: /Save/i });
    userEvent.click(closeButton);
  });
});
