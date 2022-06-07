/** @format */

import styled from "styled-components";

import { colors } from "../../../../style";
import { IPageMainMarketsProps } from "./pageMainMarkets.types";

const Section = styled.section<IPageMainMarketsProps>`
  background: ${colors.mainBlue};
  padding: 7rem 1rem 4rem calc(200px + 1rem);
  min-height: 100vh;
  width: 100%;
  
  ${(props) => props.customStyle}
`;

export const Styled = { Section };
