/** @format */

// imports
// - components
import { ButtonMain } from "@/components/generals";
// - utils
// - style
import { Styled } from "./popup.styled";
import { IPopupProps } from "./popup.types";
import { buttonMainTypes } from "@/constants";

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
 console.log(message);

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
