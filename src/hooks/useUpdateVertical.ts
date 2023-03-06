import Translate from "./../utils/Translate";

import { mapPosition } from "./../utils/math";

import { HighlightInterface } from "./../../typings";

export default function useUpdateVertical(
  outerContainerRef: HTMLElement | null,
  containerRef: HTMLElement | null,
  innerContainerRef: HTMLElement | null,
  highlight: HighlightInterface | null
) {
  const scrollWrapper = document.querySelector(".scroll__wrapper");

  //==============
  //   Resize
  //==============
  function onResize() {
    document.documentElement.style.setProperty(
      "--100vh",
      `${window.innerHeight}px`
    );

    const height = window.innerHeight;
    const width2 = window.innerWidth;

    // scrolling.onResize();

    // const width = this.elements.highlightWrapper.clientWidth + this.width;

    //sets highlights height as it's width
    // this.elements.highlight.style.height = `${width}px`;

    // this.highlight = getBoundingClientRect(this.elements.highlight);
  }

  //==============
  //    Update
  //==============
  function update() {
    const scrollPos = scrollWrapper?.getBoundingClientRect().top;

    if (!highlight) return;

    if (scrollPos == undefined) return;

    const highlightY = mapPosition(
      -scrollPos,
      highlight.top,
      highlight.bottom,
      0,
      highlight.height
    );

    //apply animation to Horizontal panel styles
    if (innerContainerRef && containerRef) {
      containerRef.style.transform = `translateY(${highlightY}px)`;
    }

    window.requestAnimationFrame(update);
  }

  onResize();
  update();
}
