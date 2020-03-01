import Cart from "../../components/Cart";
import React from "react";
import { shallow, mount } from "enzyme";
import Movie from "../../components/Movie";

describe("Cart Tests", () => {
  const movies = [{ title: "Avenger", id: 1, poster_path: "test" }];
  const wrapper = shallow(<Cart />);
  it("test cart page shows that there is no movie in the cart", () => {
    const message = wrapper.find("p").text();
    expect(message).toContain("No Items In The Cart");
  });
  it("test cart page shows list of movies available in the cart", () => {
    wrapper.instance().setState({ movies: movies });
    expect(wrapper.instance().state.movies).toHaveLength(1);
  });
  it("test cart page has contents justified to the center at all time", () => {
    const justificationClass = wrapper.find(".justify-content-center");
    expect(justificationClass).toHaveLength(1);
  });
  it("test cart page has Movie component", () => {
    const movieWrapper = wrapper.find(Movie);
    expect(movieWrapper).toHaveLength(1);
  });
});
