import React, { useEffect, useRef, useState, useContext } from "react";
import useUpdateVertical from "../hooks/useUpdateVertical";

interface HighlightInterface {
  top: number | undefined;
  left: number | undefined;
  right: number | undefined;
  bottom: number | undefined;
  width: number | undefined;
  height: number | undefined;
}

function VerticalScroll() {
  const verticalOuterContainerRef = useRef<HTMLDivElement | null>(null);
  const verticalContainerRef = useRef<HTMLDivElement | null>(null);
  const verticalInnerContainerRef = useRef<HTMLDivElement | null>(null);

  const [highlight, setHighlight] = useState<HighlightInterface | null>(null);

  useEffect(() => {
    const container =
      verticalOuterContainerRef.current?.getBoundingClientRect();
    // resize();

    setHighlight({
      top: container?.top,
      right: container?.right,
      bottom: container?.bottom,
      left: container?.left,
      width: container?.width,
      height: container?.height,
    });
  }, [verticalOuterContainerRef]);

  useEffect(() => {
    useUpdateVertical(
      verticalOuterContainerRef.current,
      verticalContainerRef.current,
      verticalInnerContainerRef.current,
      highlight
    );
  }, [highlight]);

  return (
    <div
      className="vertical-scroll__outer-container"
      ref={verticalOuterContainerRef}
    >
      <div className="vertical-scroll__container" ref={verticalContainerRef}>
        <div
          className="vertical-scroll__inner-container"
          ref={verticalInnerContainerRef}
        >
          <div className="date__day">Sep 02 – Oct 31</div>
        </div>
      </div>
    </div>
  );
}

export default VerticalScroll;
