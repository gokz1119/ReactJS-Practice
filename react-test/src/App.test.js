import { render, screen } from "@testing-library/react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });

describe("Test case for app", () => {
  it("Should render button", () => {
    const wrapper = shallow(<App />);
    const buttonElement = wrapper.find("#clickme");
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual("Click Me");
  });

  it("should increment counts bt 1 when clicked", () => {
    const wrapper = shallow(<App />);
    const buttonElement = wrapper.find("#clickme");
    buttonElement.simulate("click");
    // const text=wrapper
  });
});
