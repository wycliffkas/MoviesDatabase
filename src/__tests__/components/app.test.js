import App from "../../App";
import React from "react";
import { shallow } from "enzyme";

describe("App Tests", () => {
  const wrapper = shallow(<App />);
  it("test app main page", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
