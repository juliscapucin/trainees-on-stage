import React, { useRef } from "react";

import HorizontalScroll from "./HorizontalScroll";
import VerticalScroll from "./VerticalScroll";

function TraineeshipContent() {
  const parallaxContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="text">
        Are you ready to kickstart your <b>frontend engineering</b> career with
        a <b>traineeship</b>?
      </div>
      <HorizontalScroll />
      <div className="date__container">
        <VerticalScroll />
        <div className="date__year-container">
          <span className="date__year">20</span>
          <span className="date__year">22</span>
        </div>
      </div>
      <div className="workshop__container">
        <h2 className="section__title">Workshops</h2>
        <button className="workshop__link">
          Responsabilities as a Front-End Developer
        </button>
        <button className="workshop__link">Front-End Way of Work @ Dept</button>
        <button className="workshop__link">Front-End Setup</button>
        <button className="workshop__link">Git Flow</button>
        <button className="workshop__link">Web Vitals</button>
        <button className="workshop__link">Animations on the Web</button>
        <button className="workshop__link">Accessibility</button>
        <button className="workshop__link">Typescript</button>
        <button className="workshop__link">React</button>
        <button className="workshop__link">Scrum</button>
      </div>
      <div className="date__container" ref={parallaxContainerRef}>
        <VerticalScroll />
        <div className="date__year-container">
          <span className="date__year">20</span>
          <span className="date__year">22</span>
        </div>
      </div>
      <div className="masterclass__container">
        <h2 className="section__title">Masterclasses</h2>
        <button className="masterclass__link">Presenting Yourself</button>
        <button className="masterclass__link">Impact and Sustainability</button>
        <button className="masterclass__link">My Growth @ Dept</button>
        <button className="masterclass__link">
          Feedback / Working Together
        </button>
        <button className="masterclass__link">Productivity</button>
        <button className="masterclass__link">Business Engligh</button>
      </div>
      <div className="masterclass__container">
        <h2 className="section__title">Projects</h2>
        <button className="masterclass__link">Hortus</button>
        <button className="masterclass__link">Star Wars API</button>
        <button className="masterclass__link">Avans</button>
        <button className="masterclass__link">Costes</button>
        <button className="masterclass__link">Noah</button>
        <button className="masterclass__link">Nataliia</button>
      </div>
      <HorizontalScroll />
      <section className="parallax__section">
        <div
          className="parallax__image-container"
          data-animation="translate"
          data-animation-speed="-1"
        >
          <figure className="parallax__image-inner-container">
            <img
              className="parallax__image"
              src="https://garoaskincare.com/home/seasons-1.webp"
            />
          </figure>
        </div>
        <div
          className="parallax__image-container"
          data-animation="translate"
          data-animation-speed="-2"
        >
          <figure className="parallax__image-inner-container">
            <img
              className="parallax__image"
              src="https://garoaskincare.com/home/seasons-2.webp"
            />
          </figure>
        </div>
        <div
          className="parallax__image-container"
          data-animation="translate"
          data-animation-speed="-3"
        >
          <figure className="parallax__image-inner-container">
            <img
              className="parallax__image"
              src="https://garoaskincare.com/home/seasons-3.webp"
            />
          </figure>
        </div>
        <div
          className="parallax__image-container"
          data-animation="translate"
          data-animation-speed="0"
        >
          <figure className="parallax__image-inner-container">
            <img
              className="parallax__image"
              src="https://garoaskincare.com/home/seasons-4.webp"
            />
          </figure>
        </div>
      </section>
      <HorizontalScroll />
    </>
  );
}

export default TraineeshipContent;
