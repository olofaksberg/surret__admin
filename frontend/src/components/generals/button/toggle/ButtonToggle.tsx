/** @format */

import { Styled } from "./buttonToggle.styled";

import { IButtonToggleProps } from "./buttonToggle.types";

export const ButtonToggle = (props: IButtonToggleProps) => {
 const { text, action } = props;
 return (
  <Styled.Button {...props} onClick={action}>
   {text}
  </Styled.Button>
 );
};
