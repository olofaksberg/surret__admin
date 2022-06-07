/** @format */

import { Styled } from "./loading.styled";

const bi = require("../../../images/bee.png");
export const Loading = () => {
 return (
  <Styled.Section>
   <div className="container">
    <img className="wiggle" src={bi} alt="bi" />
   </div>
  </Styled.Section>
 );
};
