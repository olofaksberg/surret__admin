import styled from "styled-components";

import { IButtonMainProps } from "./buttonMain.types";

import { colors } from "@/style"
import { buttonMainTypes } from "@/constants";

const Button = styled.button<IButtonMainProps>`
  width: fit-content;
  height: fit-content;
  text-align: center;
  display: inline-block;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  font-weight: 800;
  border-radius: 50rem;
  transition: all 0.2s linear 0s;
  overflow: hidden;
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: white;

  .icon {
    width: 1.5rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 0;
    opacity: 0;
    height: 100%;
    transition: all 0.2s linear 0s;
  }

  &:hover {
    padding-right: 1.8rem;

    .icon {
      opacity: 1;
      right: 0.2rem;
    }
  }

  background: ${(props) => {
    switch (props.buttonType) {
      case (buttonMainTypes.DELETE):
        return `${buttonMainTypes.DELETE.color};`;
      case (buttonMainTypes.REMOVE):
        return `${buttonMainTypes.REMOVE.color};`;
      case (buttonMainTypes.ADD):
        return `${buttonMainTypes.ADD.color};`;
      case (buttonMainTypes.EDIT):
        return `${buttonMainTypes.EDIT.color};`;
      case (buttonMainTypes.CONFIRM):
        return `${buttonMainTypes.CONFIRM.color};`;
      default:
        return `${colors.mainBlue_sharp};`;
    }
  }};

  ${(props) => props.customStyle}
`;

export const Styled = { Button };