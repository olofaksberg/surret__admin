
import styled from "styled-components";

import { colors } from "@/style";
import { IButtonToggleProps } from "./buttonToggle.types";

const Button = styled.button<IButtonToggleProps>`
  font-size: 0.75rem;
  border: none;
  background: none;
  color: ${colors.fontGreyMD};
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;

  ${(props) => props.customStyle}
`;

export const Styled = { Button };
