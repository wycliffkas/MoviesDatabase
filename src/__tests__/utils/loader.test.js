import Loader from "../../utils/Loader";
import { shallow } from "enzyme";
import React from "react";

describe("Loader Test", () => {
  const wrapper = shallow(<Loader />);
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
