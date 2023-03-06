import React, { useEffect, useRef } from "react";

import HorizontalScroll from "./HorizontalScroll";
import Parallax from "./Parallax";
import VerticalScroll from "./VerticalScroll";

function TraineeshipContent() {
  return (
    <>
      <div className="text">
        Are you ready to kickstart your <b>frontend engineering</b> career with
        a <b>traineeship</b>?
      </div>
      <HorizontalScroll text="We focus on creating the best experiences in the world" />
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
      <Parallax />
      <div className="date__container">
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
      <HorizontalScroll text="Thank you all! See you around in 2023" />
      <Parallax />
    </>
  );
}

export default TraineeshipContent;
