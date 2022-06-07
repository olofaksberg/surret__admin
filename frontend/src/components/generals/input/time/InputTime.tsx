/** @format */

import { Styled } from "./inputTime.styled";
import { IInputTimeProps } from "./inputTime.types";

export const InputTime = (props: IInputTimeProps) => {
 const { name, label, value, reference, action } = props;
 return (
  <Styled.Div {...props}>
   <label>{label}</label>
   <input
    type={"time"}
    name={name}
    ref={reference}
    value={value}
    onChange={action}
   />
   <span>{value}</span>
  </Styled.Div>
 );
};
