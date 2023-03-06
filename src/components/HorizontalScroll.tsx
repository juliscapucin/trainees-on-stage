import React, { useEffect, useRef, useState } from "react";
import useUpdateHorizontal from "../hooks/useUpdateHorizontal";

interface HighlightInterface {
  top: number | undefined;
  left: number | undefined;
  right: number | undefined;
  bottom: number | undefined;
  width: number | undefined;
  height: number | undefined;
}

function HorizontalScroll() {
  const horizontalOuterContainerRef = useRef<HTMLDivElement | null>(null);
  const horizontalContainerRef = useRef<HTMLDivElement | null>(null);
  const horizontalInnerContainerRef = useRef<HTMLDivElement | null>(null);

  const [highlight, setHighlight] = useState<HighlightInterface | null>(null);

  useEffect(() => {
    const container =
      horizontalOuterContainerRef.current?.getBoundingClientRect();
    // resize();

    setHighlight({
      top: container?.top,
      right: container?.right,
      bottom: container?.bottom,
      left: container?.left,
      width: container?.width,
      height: container?.height,
    });
  }, [horizontalOuterContainerRef]);

  useEffect(() => {
    useUpdateHorizontal(
      horizontalOuterContainerRef.current,
      horizontalContainerRef.current,
      horizontalInnerContainerRef.current,
      highlight
    );
  }, [highlight]);

  return (
    <div
      className="horizontal-scroll__outer-container"
      ref={horizontalOuterContainerRef}
    >
      <div
        className="horizontal-scroll__container"
        ref={horizontalContainerRef}
      >
        <div
          className="horizontal-scroll__inner-container"
          ref={horizontalInnerContainerRef}
        >
          <h4 className="horizontal-scroll__text">
            We focus on creating the<strong> best experiences </strong>in the
            world
          </h4>
        </div>
      </div>
    </div>
  );
}

export default HorizontalScroll;
