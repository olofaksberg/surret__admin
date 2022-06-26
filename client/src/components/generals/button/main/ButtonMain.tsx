/** @format */

import { Styled } from "./buttonMain.styled";

import { IButtonMainProps } from "./buttonMain.types";

export const ButtonMain = (props: IButtonMainProps) => {
 const { buttonType, text, action } = props;

 return (
  <Styled.Button {...props} onClick={action}>
   {text}{" "}
   <span className="icon">
    <i className={`${buttonType.iconClass} FC-white`}></i>
   </span>
  </Styled.Button>
 );
};
