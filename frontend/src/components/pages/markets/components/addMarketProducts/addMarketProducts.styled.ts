/** @format */

import styled from "styled-components";

import { IAddMarketProductsProps } from "./addMarketProducts.types";

const Section = styled.section<IAddMarketProductsProps>`
  width: 100%;

  ${(props) => props.customStyle}
`;

export const Styled = { Section };
