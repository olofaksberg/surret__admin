import styled from "styled-components";

import { INotificationProps } from "./notification.types";

const Span = styled.span<INotificationProps>`
  color: white;
  background: #ff4343;
  border-radius: 1111px;
  position: absolute;
  width: 1.8rem;
  height: 1.8rem;
  text-align: center;
  line-height: 1.9rem;
  bottom: 0;
  top: 0;
  left: calc(100% - 3rem);
  margin: auto 0;
  //   transition: width 0.2s linear 0s;

  &:hover {
    &::after {
      content: "${(props) => props.noti.onHover}";
    }
    width: fit-content;
    padding: 0 0.6rem;
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Span };
