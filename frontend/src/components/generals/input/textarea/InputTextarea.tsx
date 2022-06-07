/** @format */

import { Styled } from "./inputTextarea.styled";
import { IInputTextareaProps } from "./inputTextarea.types";

export const InputTextarea = (props: IInputTextareaProps) => {
 const { name, label, value, reference, action } = props;
 return (
  <Styled.Div {...props}>
   <textarea
    cols={30}
    rows={10}
    ref={reference}
    name={name}
    value={value}
    onChange={action}
   ></textarea>
   <label>{label}</label>
  </Styled.Div>
 );
};
