import Header from "../../commons/Header";
import { shallow } from "enzyme";
import React from "react";

describe("Header Tests", () => {
  const wrapper = shallow(<Header />);
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
