/** @format */

import { Styled } from "./buttonBack.styled";

import { buttonBack } from "@/constants";

import { IButtonBackProps } from "./buttonBack.types";

export const ButtonBack = (props: IButtonBackProps) => {
 const { text, action } = props;
 return (
  <Styled.Button {...props} onClick={action}>
   <i className={`${buttonBack.iconClass} FC-G-D m-top-1 m-right-1`}></i>
   <span className="TT-UC FC-G-M">{text}</span>
  </Styled.Button>
 );
};
