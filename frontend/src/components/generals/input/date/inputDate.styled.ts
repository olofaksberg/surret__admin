/** @format */

import styled from "styled-components";

import { IInputDateProps } from "./inputDate.types";

const Div = styled.div<IInputDateProps>`
  width: 100%;
  margin-bottom: 1rem;

  input[type="date"] {
    background: transparent;
    color: transparent;
    border: none;
    width: 4rem;
    outline: 0;

    &::-webkit-datetime-edit-month-field {
      display: none;
    }
    &::-webkit-datetime-edit-day-field {
      display: none;
    }
    &::-webkit-datetime-edit-year-field {
      display: none;
    }

    &::-webkit-calendar-picker-indicator {
      font-size: 30px;
      transform: translateX(-15px);
      cursor: pointer;

      &:hover {
        transform: scale(1.1) translateX(-14px);
      }
    }
  }
  
  ${(props) => props.customStyle}
`;

export const Styled = { Div };
