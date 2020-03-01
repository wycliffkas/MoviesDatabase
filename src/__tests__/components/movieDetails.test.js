import React from "react";
import { shallow, mount } from "enzyme";
import { MovieDetails } from "../../components/MovieDetails";
import { JestEnvironment } from "@jest/environment";

describe("Home Tests", () => {
  const props = {
    getMovie: jest.fn(),
    match: {
      params: {
        id: 1
      }
    },
    movie: {
      id: 1,
      title: "Avengers",
      poster_path: "https://movie.com"
    }
  };
  const wrapper = mount(<MovieDetails {...props} />);
  it("test MovieDetails page", () => {
    const justificationClass = wrapper.find(".justify-content-center");
    expect(justificationClass).toHaveLength(1);
  });
  it("test MovieDetails page has the AddToCart button", () => {
    const theButton = wrapper.find(".btn-primary");
    theButton.simulate("click");
    expect(theButton).toHaveLength(1);
  });
});
