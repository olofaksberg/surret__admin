/** @format */

/** @format */

import styled from "styled-components";

import { colors } from "../../../../style";
import { IPageEditProductProps } from "./pageEditProduct.types";

const Section = styled.section<IPageEditProductProps>`
  // comp page
  padding-top: 3rem;
  background: white;

  // main page
  padding: 7rem 1rem 4rem calc(200px + 1rem);
  min-height: 100vh;
  width: 100%;
  //   ---

  .form {
    background: ${colors.mainBlue};
    gap: 2rem;
    width: 80%;
    margin: auto;
    margin-top: 4rem;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 0 40px ${colors.form_shadow};

    .input-img {
      width: 100%;

      .data-img {
        max-width: 50%;
        max-height: 25rem;
      }
    }

    h1 {
      color: ${colors.fontGreyD};
    }

    .field-missing {
      i {
        color: red;
        margin-right: 0.4rem;
        font-size: 1.2rem;
      }
    }
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Section };
