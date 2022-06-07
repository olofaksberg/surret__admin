/** @format */

import styled from "styled-components";

import { colors } from "../../../../../style";
import { IproductsNavProps } from "./productsNav.types";

export const Section = styled.section<IproductsNavProps>`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 0.5rem 2rem 1rem 2rem;

  .products-nav-item {
    padding: 0.5rem;
    color: ${colors.fontGreyMD};

    &.active {
      color: ${colors.fontGreyD};
      border-top: 4px solid ${colors.mainBlue_sharp};
    }
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Section };
