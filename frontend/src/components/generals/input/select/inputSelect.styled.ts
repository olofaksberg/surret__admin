/** @format */

import styled from "styled-components";

import { colors } from "../../../../style";
import { IInputSelectProps } from "./inputSelect.types";

const Div = styled.div<IInputSelectProps>`
  .select-custom {
    position: relative;
    width: 15rem;
    height: 1.5rem;

    input[type="checkbox"] {
      display: none;
      z-index: 4;
      & ~ .select-custom__dropdownMenu {
        display: none;
      }
      &:checked {
        & ~ .select-custom__label:after {
          transform: rotate(180deg);
        }
        & ~ .select-custom__dropdownMenu {
          display: block;
        }
      }
    }
    &__label {
      z-index: 1;
      height: 1.5rem;
      cursor: pointer;
      outline: none;
      text-transform: uppercase;
      color: ${colors.fontGreyD};
      width: 100%;
      &:after {
        content: "";
        display: block;
        border-left: 0.3em solid transparent;
        border-right: 0.3em solid transparent;
        border-top: 0.3em solid ${colors.fontGreyD};
        display: inline-block;
        position: absolute;
        right: 0;
        top: 30%;
        transition: all 0.3s;
      }
      &.valid + .input-custom__border:after {
        transform: scaleX(1);
      }
    }
    &__dropdownMenu {
      display: none;
      position: absolute;
      background: white;
      top: 1.8rem;
      right: 0;
      left: 0;
      border: 1px solid ${colors.fontGreyL};
      list-style: none;
      padding: 0.2rem;
      max-height: 12rem;
      overflow: hidden;
      border-top: none;

      & > li {
        padding: 0 0.2rem;
        &:hover {
          background: ${colors.mainBlue_sharp};
          color: white;
          cursor: pointer;
        }

        &.picked {
          background: ${colors.mainBlue_sharp};
          color: white;
          cursor: pointer;
        }
      }
    }

    &__border {
      &:before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        height: 2px;
        width: 100%;
        background: ${colors.fontGreyD};
        z-index: 0;
        transition: all 0.15s ease;
      }

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background: linear-gradient(
          to right bottom,
          rgba(126, 213, 111, 0.7),
          rgba(40, 180, 131, 0.7)
        );
        transform: scaleX(0);
        z-index: 1;
        transition: all 0.15s ease;
      }
    }
  }

  ${(props) => props.customStyle}
`;

export const Styled = { Div };
