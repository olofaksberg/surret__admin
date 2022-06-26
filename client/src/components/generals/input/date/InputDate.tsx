/** @format */

import { Styled } from "./inputDate.styled";

import { IInputDateProps } from "./inputDate.types";

export const InputDate = (props: IInputDateProps) => {
 const { name, label, value, reference, action } = props;
 return (
  <Styled.Div {...props}>
   <label>{label}</label>
   <input
    type={"date"}
    name={name}
    ref={reference}
    value={value}
    onChange={action}
   />
   <span>{value}</span>
  </Styled.Div>
 );
};
