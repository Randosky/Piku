import React from "react";
import type { TCreatorContainerProps } from "./Creator.types";
import CreatorView from "./Creator.view";

const CreatorContainer: React.FC<TCreatorContainerProps> = props => {
  return <CreatorView />;
};

export default CreatorContainer;
