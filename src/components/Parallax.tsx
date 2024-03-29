import React, { useEffect, useRef } from "react";
import useParallax from "../hooks/useParallax";

function Parallax() {
  const parallaxContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    useParallax(parallaxContainerRef.current);
  }, [parallaxContainerRef]);

  return (
    <section className="parallax__section" ref={parallaxContainerRef}>
      <div
        className="parallax__image-container"
        data-animation="translate"
        data-animation-speed="-1"
      >
        <figure className="parallax__image-inner-container">
          <img className="parallax__image" src="./image.jpeg" />
        </figure>
      </div>
      <div
        className="parallax__image-container"
        data-animation="translate"
        data-animation-speed="-2"
      >
        <figure className="parallax__image-inner-container">
          <img className="parallax__image" src="./image.jpeg" />
        </figure>
      </div>
      <div
        className="parallax__image-container"
        data-animation="translate"
        data-animation-speed="-3"
      >
        <figure className="parallax__image-inner-container">
          <img className="parallax__image" src="./image.jpeg" />
        </figure>
      </div>
      <div
        className="parallax__image-container"
        data-animation="translate"
        data-animation-speed="0"
      >
        <figure className="parallax__image-inner-container">
          <img className="parallax__image" src="./image.jpeg" />
        </figure>
      </div>
    </section>
  );
}

export default Parallax;
