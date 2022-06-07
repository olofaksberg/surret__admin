/** @format */

import styled from "styled-components";

import { colors } from "@/style";

import { ImarketProps } from "./market.types";

const Section = styled.section<ImarketProps>`
  display: flex;
  justify-content: space-between;
  background: ${(props) => (props.editable ? "white" : colors.mainBlue)};
  padding: 2rem;
  border-left: 6px solid ${colors.mainBlue_sharp};
  min-height: 20rem;

  .market-h1 {
    color: ${colors.fontGreyMD};
  }

  label {
    font-weight: 600;
  }

  .market-info {
    list-style: none;
    gap: 0.6rem;

    li {
      color: ${colors.fontGreyDD};
    }
  }

  &.preview {
    background-color: ${colors.mainBlue};
  }

  .data-img {
    max-height: calc(20rem - 4rem);
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Section };
