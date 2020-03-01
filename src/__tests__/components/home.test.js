import Cart from "../../components/Cart";
import React from "react";
import { shallow, mount } from "enzyme";
import { Home } from "../../components/Home";

describe("Home Tests", () => {
  const props = {
    getGenres: jest.fn(),
    categoryChangedHandler: jest.fn(),
    loadMoreData: jest.fn(),
    getMovies: jest.fn(),
    genresReducer: {
      genres: [
        { id: 1, name: "Action" },
        { id: 2, name: "Horror" }
      ]
    },
    movieReducer: {
      loading: true,
      movies: []
    }
  };
  const wrapper = mount(<Home {...props} />);
  it("test home page", () => {
    const justificationClass = wrapper.find(".justify-content-center");
    expect(justificationClass).toHaveLength(1);
  });

  it("test that onChangeHandler is called", () => {
    const spy = jest.spyOn(wrapper.instance(), "categoryChangedHandler");
    const event = { target: { name: "category", value: "spam" } };
    const theDropDown = wrapper.find(".select-category");
    theDropDown.simulate("change", "", event);
    wrapper.instance().categoryChangedHandler(event);
    expect(spy).toHaveBeenCalled();
  });
});
