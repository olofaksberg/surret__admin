/** @format */

import { Styled } from "./inputText.styled";
import { IInputTextProps } from "./inputText.types";

export const InputText = (props: IInputTextProps) => {
    const { name, label, value, reference, action } = props;
  return (
    <Styled.Div {...props}>
      <input
        className="input__field"
        type={"text"}
        name={name}
        placeholder={label}
        ref={reference}
        value={value}
        onChange={action}
      />
      <label className="input__label">{label}</label>
    </Styled.Div>
  );
};
