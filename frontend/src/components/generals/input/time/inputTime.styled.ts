/** @format */

import styled from "styled-components";

import { IInputTimeProps } from "./inputTime.types";

const Div = styled.div<IInputTimeProps>`
  width: 100%;
  margin-bottom: 1rem;

  input[type="time"] {
    background: transparent;
    color: transparent;
    border: none;
    width: 4rem;
    outline: 0;

    &::-webkit-datetime-edit-minute-field {
      display: none;
    }
    &::-webkit-datetime-edit-hour-field {
      display: none;
    }
    &::-webkit-datetime-edit-ampm-field {
      display: none;
    }
    &::-webkit-calendar-picker-indicator {
      font-size: 2rem;
      transform: translateX(-0.9rem);
      cursor: pointer;

      &:hover {
        transform: scale(1.1) translateX(-0.85rem);
      }
    }
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Div };
