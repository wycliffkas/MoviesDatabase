import NotFound from "../../commons/NotFound";
import { shallow } from "enzyme";
import React from "react";

describe("Not Found Tests", () => {
  const wrapper = shallow(<NotFound />);
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
