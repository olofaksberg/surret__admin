/** @format */

import { ButtonMain } from "@/components/generals";

import { buttonMainTypes } from "@/constants";

import { Styled } from "./popup.styled";
import { IPopupProps } from "./popup.types";

export const Popup = (props: IPopupProps) => {
 const { message, action } = props;

 const getIconClass = (type: number) => {
  switch (type) {
   case 1:
    return "win fa-check";
   default:
    return "fail fa-circle-xmark";
  }
 };

 return (
  <Styled.Section {...props}>
   <div className="container">
    <h2 className="title">
     {message.title}
     <span>
      <i className={`fa-solid ${getIconClass(message.type)}`}></i>
     </span>
    </h2>
    <p className="text">{message.text}</p>
    <ButtonMain
     buttonType={buttonMainTypes.CONFIRM}
     text={`ok`}
     action={action}
    />
   </div>
  </Styled.Section>
 );
};
