/** @format */

import { Styled } from "./inputNumber.styled";
import { IInputNumberProps } from "./inputNumber.types";

export const InputNumber = (props: IInputNumberProps) => {
    const { name, label, value, reference, action } = props;
  return (
    <Styled.Div {...props}>
      <input
        className="input__field"
        type={"number"}
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
