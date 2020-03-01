import React, { Fragment, useEffect, useRef } from "react";
import Loader from "../utils/Loader";
import Movie from "./Movie";

const MovieList = ({ loading, movies, callback }) => {
  if (loading) {
    return <Loader />;
  }

  const loaderRef = useRef();
  const observerRef = useRef();

  const handleIntersection = ([entry]) => {
    if (entry.isIntersecting) {
      if (callback) {
        callback();
      }
    }
  };

  useEffect(() => {
    const loader = loaderRef.current;
    if ("IntersectionObserver" in window) {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        threshold: 0.5
      });
      observerRef.current.observe(loader);
    }

    return () => {
      observerRef.current.unobserve(loader);
    };
  }, [movies]);

  return (
    <Fragment>
      <div className="row no-gutters justify-content-center">
        {movies.map((movie, i) => (
          <div key={i}>
            <Movie {...movie} />
          </div>
        ))}
      </div>
      <div ref={loaderRef}>
        <Loader />
      </div>
    </Fragment>
  );
};

export default MovieList;
