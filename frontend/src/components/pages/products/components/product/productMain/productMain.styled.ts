/** @format */

import styled from "styled-components";

import { colors } from "../../../../../../style";
import { IproductMainProps } from "./productMain.types";

const Section = styled.section<IproductMainProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  padding-bottom: 1rem;
  box-shadow: 0px 0px 20px -10px rgb(59, 59, 59);
  height: -moz-fit-content;
  height: fit-content;
  min-height: 25rem;
  max-width: 20rem;
  width: 20rem;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;

  .img {
    height: calc(25 * 0.6rem);
    border-radius: 10px 10px 0 0;
  }

  h1 {
    padding: 0.4rem 0.5rem;
    margin-top: 0.5rem;
    color: ${colors.fontGreyMD};
  }

  ul {
    padding: 0 1.2rem;
    padding-top: 0.5rem;
    font-size: 0.9rem;
    list-style: none;
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Section };
