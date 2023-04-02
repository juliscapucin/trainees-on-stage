import React, { useState, useEffect, ReactNode, useRef } from "react";
import VerticalPositionContext from "./VerticalPositionContext";
import Scrolling from "./../components/Scrolling";

//========================//
//========= TYPES ========//
//========================//

type VerticalPositionProviderProps = {
  children: ReactNode;
};

interface ScrollingType {
  wrapper: HTMLHtmlElement | null;
  element: HTMLHtmlElement | null;
  trigger: HTMLHtmlElement | null;
  current: number;
  onResize: () => void;
  loop: () => void;
}

const VerticalPositionProvider = ({
  children,
}: VerticalPositionProviderProps) => {
  // const [verticalPosition, setVerticalPosition] = useState<number>(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const element = document.getElementById("your-element-id");
  //     if (element) {
  //       const position = element.getBoundingClientRect().top;
  //       setVerticalPosition(position);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [verticalPosition, setVerticalPosition] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  let currentScroll = 0;

  let scrollHandler: ScrollingType;

  function onResize() {
    if (scrollHandler) scrollHandler.onResize();

    document.body.style.setProperty("--100vh", `${window.innerHeight}px`);
  }

  function update() {
    if (scrollHandler) {
      scrollHandler!.loop();
      currentScroll = scrollHandler!.current;
    }

    window.requestAnimationFrame(update);
  }

  useEffect(() => {
    scrollHandler = new Scrolling({
      element: elementRef.current,
      wrapper: wrapperRef.current,
      trigger: window,
    });

    onResize();
    update();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <VerticalPositionContext.Provider value={verticalPosition}>
      <div className="demo" ref={elementRef}>
        <div className="scroll__wrapper" ref={wrapperRef}>
          {children}
        </div>
      </div>
    </VerticalPositionContext.Provider>
  );
};

export default VerticalPositionProvider;
