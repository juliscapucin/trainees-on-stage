import { useState, useEffect, useRef } from "react";
import { mapPosition } from "../utils/math";

interface HighlightProps {
  top: number;
  bottom: number;
  height: number;
}

interface UseHorizontalScrollProps {
  highlight: HighlightProps | null;
  outerContainerRef: React.RefObject<HTMLElement>;
  innerContainerRef: React.RefObject<HTMLElement>;
  containerRef: React.RefObject<HTMLElement>;
}

function useHorizontalScroll({
  highlight,
  outerContainerRef,
  innerContainerRef,
  containerRef,
}: UseHorizontalScrollProps): { scrollPos: number } {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPos =
        outerContainerRef.current?.parentElement?.parentElement?.getBoundingClientRect()
          .top;

      if (!highlight || !newScrollPos) {
        return;
      }

      setScrollPos(newScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [highlight, outerContainerRef]);

  useEffect(() => {
    if (!highlight || !scrollPos) {
      return;
    }

    const highlightX = mapPosition(
      -scrollPos,
      highlight.top,
      highlight.bottom! - window.innerHeight,
      0,
      -80
    );
    const highlightY = mapPosition(
      -scrollPos,
      highlight.top! - 200,
      highlight.bottom,
      0,
      highlight.height
    );

    if (innerContainerRef.current && containerRef.current) {
      containerRef.current.style.transform = `translateY(${highlightY}px)`;
      innerContainerRef.current.style.transform = `translateX(${highlightX}%)`;
    }

    window.requestAnimationFrame(() =>
      useHorizontalScroll({
        highlight,
        outerContainerRef,
        innerContainerRef,
        containerRef,
      })
    );
  }, [
    highlight,
    outerContainerRef,
    innerContainerRef,
    containerRef,
    scrollPos,
  ]);

  return { scrollPos };
}

export default useHorizontalScroll;
