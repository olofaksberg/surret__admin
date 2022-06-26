/** @format */

import styled from "styled-components";

import { colors } from "../../../../../../style";
import { IproductListedProps } from "./productListed.types";

const Section = styled.section<IproductListedProps>`
  .product-data {
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-left: 4px solid ${colors.mainBlue_sharp};
  }

  hr {
    margin-top: 1rem !important;
    border: none !important;
    height: 2px !important;
    transform: translateX(-1rem) !important;
    width: 4rem !important;
    background-color: ${colors.fontGreyM} !important;
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Section };
