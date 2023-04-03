import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test the App component", () => {
  test("Header renders with react testing tutorial in the document", () => {
    const component = render(<App />);
    const textElement = component.getByText(/This is react testing example/);
    expect(textElement).toBeInTheDocument();
  });

  test("It renders login component in document", () => {
    const { getByLabelText } = render(<App />);
    const childElement = getByLabelText("Email");
    expect(childElement).toBeTruthy();
  });
  
});
