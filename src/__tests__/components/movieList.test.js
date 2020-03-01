import React from "react";
import { mount } from "enzyme";
import MovieList from "../../components/MovieList";
import { BrowserRouter } from "react-router-dom";
import Loader from "../../utils/Loader";

describe("Home Tests", () => {
  const props = {
    movies: [
      {
        id: 1,
        title: "Avengers",
        poster_path: "https://movie.com"
      }
    ]
  };
  const wrapper = mount(
    <BrowserRouter>
      <MovieList {...props} />
    </BrowserRouter>
  );
  it("test MovieList page", () => {
    const justificationClass = wrapper.find(".justify-content-center");
    expect(justificationClass).toHaveLength(1);
  });
  it("test MovieList page has the Loader component", () => {
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
});
