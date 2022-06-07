/** @format */

import styled from "styled-components";

import { colors } from "../../../../style";
import { IInputTextareaProps } from "./inputTextarea.types";

const Div = styled.div<IInputTextareaProps>`
  position: relative;
  width: 100%;

  textarea {
    width: 100%;
    border: 3px solid ${colors.fontGreyL};
    border-radius: 10px;
    padding: 0.3rem;
    &:focus {
      & + label {
        transform: translateY(-150%);
        left: 0;
        top: 0;
      }
    }
  }

  label {
    position: absolute;
    left: 7px;
    top: 7px;
    transition: all 0.1s ease-in;
    color: $label;
    ${(props) => {
        if (props.value !== "") {
            return "transform: translateY(-150%); left: 0; top: 0;";
        }
    }}
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Div };
