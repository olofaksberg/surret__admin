/** @format */

import styled from "styled-components";

import { colors } from "../../../../style";
import { IInputNumberProps } from "./inputNumber.types";

const Div = styled.div<IInputNumberProps>`
  position: relative;
  height: 2.8rem;
  width: 100%;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  .input__field {
    position: absolute;
    z-index: 2;
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid ${colors.fontGreyMD};
    outline: 0;
    font-size: 1.3rem;
    color: ${colors.fontGreyD};
    padding: 7px 0 4px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:not(:placeholder-shown) + .input__label {
      font-size: 1rem;
      cursor: text;
      top: -0.9rem;
      opacity: 0.7;
    }
  }

  .input__label {
    position: absolute;
    top: 0.6rem;
    display: block;
    transition: 0.2s;
    font-size: 1.3rem;
    color: ${colors.fontGreyD};
  }

  .input__field:focus {
    ~ .input__label {
      position: absolute;
      top: -1rem;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${colors.fontGreyM};
      font-weight: 700;
      opacity: 0.9;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Div };
