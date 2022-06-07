/** @format */

import styled from "styled-components";

import { colors } from "../../../../../../style";
import { IOrdersNavProps } from "./ordersNav.types";

const Nav = styled.nav<IOrdersNavProps>`
  display: flex;
  justify-content: center;
  gap: 2rem;

  .orders-nav-item {
    padding: 1rem;
    color: ${colors.fontGreyMD};
    background-color: ${colors.mainBlue};

    &.active {
      color: ${colors.fontGreyD};
      border-top: 4px solid ${colors.mainBlue_sharp};
    }
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Nav };
