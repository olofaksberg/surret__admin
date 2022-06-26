import styled from "styled-components";
import { IPopupProps } from "./popup.types";

const Section = styled.section<IPopupProps>`
  background: rgba(0, 0, 0, 0.65);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  overflow: auto;
  position: fixed;
  text-align: center;
  z-index: 9999;

  .container {
    background: white;
    border-radius: 0.5rem;
    width: 40%;
    margin: 3rem auto;
    padding: 1rem;

    .title {
      .win {
        color: green;
      }

      .fail {
        color: red;
      }
    }

    .text {
      margin-bottom: 1rem;
    }
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Section };
