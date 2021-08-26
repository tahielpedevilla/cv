import React from "react";
import {Element} from "react-scroll";

import Uno from "../sections/Uno";
import Dos from "../sections/Dos";
import Tres from "../sections/Tres";
import Cuatro from "../sections/Cuatro";
import Cinco from "../sections/Cinco";

const LandingLayout = () => {
  return (
    <>
      <Element name="uno">
        <Uno />
      </Element>
      <Element name="dos">
        <Dos />
      </Element>
      <Element name="tres">
        <Tres />
      </Element>
      <Element name="cuatro">
        <Cuatro />
      </Element>
      <Element name="cinco">
        <Cinco />
      </Element>
    </>
  );
};

export default LandingLayout;
