import React from "react";

type VerticalPositionContextType = number;

const VerticalPositionContext =
  React.createContext<VerticalPositionContextType>(0);

export default VerticalPositionContext;
