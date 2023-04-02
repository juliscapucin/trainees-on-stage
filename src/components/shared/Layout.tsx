import React, {
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

import Scrolling from "./../Scrolling";

import Header from "./Header";

//==========================//
//========= TYPES =========//
//========================//
interface ScrollingType {
  wrapper: HTMLHtmlElement | null;
  element: HTMLHtmlElement | null;
  trigger: HTMLHtmlElement | null;
  current: number;
  onResize: () => void;
  loop: () => void;
}

//==============================//
//========= COMPONENT =========//
//============================//

export default function Layout({ children }: { children: React.ReactNode }) {
  // const elementRef = useRef<HTMLDivElement | null>(null);
  // const wrapperRef = useRef<HTMLDivElement | null>(null);

  // let currentScroll = 0;

  // let scrollHandler: ScrollingType;

  // function onResize() {
  //   if (scrollHandler) scrollHandler.onResize();

  //   document.body.style.setProperty("--100vh", `${window.innerHeight}px`);
  // }

  // function update() {
  //   if (scrollHandler) {
  //     scrollHandler!.loop();
  //     currentScroll = scrollHandler!.current;
  //   }

  //   window.requestAnimationFrame(update);
  // }

  // useEffect(() => {
  //   scrollHandler = new Scrolling({
  //     element: elementRef.current,
  //     wrapper: wrapperRef.current,
  //     trigger: window,
  //   });

  //   onResize();
  //   update();
  //   window.addEventListener("resize", onResize);

  //   return () => {
  //     window.removeEventListener("resize", onResize);
  //   };
  // }, []);

  return (
    <>
      {/* <Header /> */}
      {children}
    </>
  );
}
