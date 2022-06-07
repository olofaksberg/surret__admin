
import styled from "styled-components";

import { colors } from "../../../style";
import { IHeaderProps } from "./header.types";

const Header = styled.header<IHeaderProps>`
  display: flex;
  justify-content: space-between;
  text-align: center;
  letter-spacing: 0.5rem;
  padding: 1.5rem 2rem;
  width: calc(100% - 200px);
  transform: translateX(-1rem);
  top: 0;
  background: white;
  position: fixed;
  z-index: 9;
  box-shadow: 0 10px 30px ${colors.header_shadow};

  ${(props) => props.customStyle}
`;

export const Styled = { Header };
