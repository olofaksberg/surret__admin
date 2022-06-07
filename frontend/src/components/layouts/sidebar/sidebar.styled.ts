/** @format */

import styled from "styled-components";

import { colors } from "../../../style";
import { ISidebarProps } from "./sidebar.types";

const Nav = styled.nav<ISidebarProps>`
  background: #2c2c2c;
  height: 100vh;
  width: 200px;
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  .logo {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
    gap: 0.5rem;
    padding-top: 2rem;

    h1 {
      color: ${colors.fontGreyMD};
      writing-mode: vertical-lr;
      text-orientation: upright;
    }

    img {
      width: 5rem;
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-transform: capitalize;

    a {
      padding: 1.5rem;
      margin: 0 -2rem 0 -1rem;
      display: block;
      text-decoration: none;
      color: white;
      font-weight: 500;

      &.active {
        background: ${colors.fontGreyDD};
        color: ${colors.fontGreyL};
        border-left: 4px solid ${colors.mainBlue_sharp};
      }
    }
  }

  .logout {
    a {
      color: ${colors.fontGreyD};
      display: inline-block;
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
      margin-bottom: 4rem;
      transition: all 0.2s;

      &:hover {
        color: ${colors.fontGreyM};

        i {
          margin-right: 1rem;
        }
      }

      i {
        margin-right: 0.75rem;
        color: ${colors.fontGreyM};
        transition: all 0.2s;
      }
    }
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Nav };
