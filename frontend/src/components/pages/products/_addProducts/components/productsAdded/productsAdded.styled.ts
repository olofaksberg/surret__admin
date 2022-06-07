/** @format */

import styled from "styled-components";

import { colors } from "../../../../../../style";
import { IproductsAddedProps } from "./productsAdded.types";

const Section = styled.section<IproductsAddedProps>`
  display: flex;
  flex-direction: column;
  text-align: center;

  .confirm-header {
    font-size: 1.3rem;
    color: ${colors.fontGreyM};
    margin-bottom: 0.5rem;

    span {
      color: ${colors.fontGreyMD};
    }
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Section };
