import useMediaQuery from "@mui/material/useMediaQuery";

import store from "./redux/store";
import App from "./App";
import renderWithProviders from "./test.utils";

jest.mock("@mui/material/useMediaQuery");

describe("App Component", () => {
  it("should render app component successfully for desktop screens", () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    const { baseElement } = renderWithProviders(<App />, store);
    expect(baseElement).toBeTruthy();
  });

  it("should render app component successfully for mobile screens", () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);

    const { baseElement } = renderWithProviders(<App />, store);
    expect(baseElement).toBeTruthy();
  });
});
