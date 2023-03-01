import React, { useEffect, useRef, useState } from "react";
import { mapPosition } from "../utils/math";

interface HighlightInterface {
  top: number | undefined;
  left: number | undefined;
  right: number | undefined;
  bottom: number | undefined;
  width: number | undefined;
  height: number | undefined;
}

function TraineeshipContent() {
  const outerContainerRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerContainerRef = useRef<HTMLDivElement | null>(null);

  const [highlight, setHighlight] = useState<HighlightInterface | null>(null);

  useEffect(() => {
    const container = outerContainerRef.current?.getBoundingClientRect();
    // resize();

    setHighlight({
      top: container?.top,
      right: container?.right,
      bottom: container?.bottom,
      left: container?.left,
      width: container?.width,
      height: container?.height,
    });
  }, [outerContainerRef]);

  function horizontalScroll() {
    const scrollPos =
      outerContainerRef.current?.parentElement?.parentElement?.getBoundingClientRect()
        .top;

    if (!highlight) return;

    if (scrollPos == undefined) return;

    //Horizontal panel animations settings
    const highlightX = mapPosition(
      -scrollPos,
      highlight.top,
      highlight.bottom! - window.innerHeight,
      0,
      -82
    );
    const highlightY = mapPosition(
      -scrollPos,
      highlight.top,
      highlight.bottom,
      0,
      highlight.height
    );

    if (innerContainerRef.current && containerRef.current) {
      containerRef.current.style.transform = `translateY(${highlightY}px)`;
      innerContainerRef.current.style.transform = `translateX(${highlightX}%)`;
    }

    window.requestAnimationFrame(horizontalScroll);
  }

  useEffect(() => {
    horizontalScroll();

    return () => {
      window.requestAnimationFrame(horizontalScroll);
    };
  }, [highlight]);

  return (
    <>
      <div className="text">
        Are you ready to kickstart your <b>frontend engineering</b> career with
        a <b>traineeship</b>?
      </div>
      <div
        className="horizontal-scroll__outer-container"
        ref={outerContainerRef}
      >
        <div className="horizontal-scroll__container" ref={containerRef}>
          <div
            className="horizontal-scroll__inner-container"
            ref={innerContainerRef}
          >
            <h4 className="horizontal-scroll__text">
              We focus on creating the<strong> best experiences </strong>in the
              world
            </h4>
          </div>
        </div>
      </div>
      <div className="date__container">
        <div className="date__day">Sep 02 – Oct 31</div>
        <h1 className="date__year">2022</h1>
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
      <div className="date__container">
        <p className="date__day">Nov 01 – Dec 31</p>
        <h1 className="date__year">2022</h1>
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
    </>
  );
}

export default TraineeshipContent;
