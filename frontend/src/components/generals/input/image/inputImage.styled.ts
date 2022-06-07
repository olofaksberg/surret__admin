/** @format */

import styled from "styled-components";

import { colors } from "@/style";

import { IInputImageProps } from "./inputImage.types";

const Div = styled.div<IInputImageProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  width: 100%;

  .data-img {
    max-width: 50%;
    max-height: 25rem;
  }

  .file-upload {
    &::-webkit-file-upload-button {
      visibility: hidden;
    }

    &::before {
      content: "${(props) => props.text}";
      margin-left: 0.5rem;
      color: ${colors.mainBlue_sharp};
      text-decoration: underline;
      display: inline-block;
      background: ${colors.mainBlue};
      border: none;
      outline: none;
      white-space: nowrap;
      user-select: none;
      cursor: pointer;
    }
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Div };
