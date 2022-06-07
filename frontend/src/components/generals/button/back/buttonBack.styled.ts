import styled from "styled-components";

import { colors } from "@/style"

import { IButtonBackProps } from "./buttonBack.types";

const Button = styled.button<IButtonBackProps>`
  width: fit-content;
  padding: 1rem;
  font-size: 1rem;
  position: absolute;
  top: 1rem;
  left: calc(200px + 1.5rem);
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.05);
    span {
      color: ${colors.fontGreyMD};
    }
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Button };
