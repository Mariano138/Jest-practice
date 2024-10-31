import { render, fireEvent } from "@testing-library/react-native";

import App from "../App.js";

describe("App component", () => {
  it("changes theme from light to dark", async () => {
    const { getByText, findByText } = render(<App />);

    expect(getByText("Tema actual: light")).toBeTruthy();

    fireEvent.press(getByText("Change theme"));

    expect(await findByText("Tema actual: dark")).toBeTruthy();
  });
});
