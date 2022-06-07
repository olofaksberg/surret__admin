/** @format */

import styled from "styled-components";

import { colors } from "../../../../../style";
import { IOrderProps } from "./order.types";

const Section = styled.section<IOrderProps>`
  text-aling: left;
  margin: 0 1rem;
  background: white;
  padding: 2rem;
  border-left: 6px solid ${colors.mainBlue_sharp};

  h1 {
    color: ${colors.fontGreyMD};
    padding-bottom: 0.5rem;
  }

  label {
    font-weight: 600;
    color: ${colors.fontGreyDD};
  }

  .btn-toggle {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  h4 {
    color: ${colors.mainRed};
  }

  .customer-info {
    gap: 0.6rem;

    .address {
      gap: 0.3rem;
    }
  }

  .products-info {
    .btn-toggle {
      margin: 0;
    }
  }

  .comment {
    gap: 0.6rem;
    color: ${colors.fontGreyDD};

    i {
      font-size: 160%;
      color: ${colors.mainRed};
      left: -2.2rem;
    }
  }

  .btn-main {
    margin-top: 2rem;
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Section };
