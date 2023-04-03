import Login, { validateEmail } from "../Login";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const onSubmit = jest.fn();

describe("Test the Login component", () => {
  test("Render the Login form submit button on the screen", async () => {
    render(<Login />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength[2];
  });

  test("Should fail on email validation", () => {
    const testEmail = "nawaz.com";
    expect(validateEmail(testEmail)).not.toBe(true)
  })
});
