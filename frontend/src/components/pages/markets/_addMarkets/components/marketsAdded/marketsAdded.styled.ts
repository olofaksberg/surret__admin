/** @format */

import styled from "styled-components";

import { colors } from "@/style";

import { IMarketsAddedProps } from "./marketsAdded.types";

const Section = styled.section<IMarketsAddedProps>`
  display: flex;
  flex-direction: column;

  .confirm-header {
    font-size: 1.3rem;
    color: ${colors.fontGreyM};
    margin-bottom: 0.5rem;

    .FC-G-MD {
      color: ${colors.fontGreyMD};
    }
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Section };
