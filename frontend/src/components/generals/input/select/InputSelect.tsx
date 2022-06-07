/** @format */

import { useState } from "react";

import { If } from "@/components/helpers";

import { Styled } from "./inputSelect.styled";
import { IInputSelectProps } from "./inputSelect.types";

export const InputSelect = (props: IInputSelectProps) => {
 const { label, items, value, reference, action } = props;
 const [showSelectDropdown, setShowSelectDropdown] = useState<boolean>(false);

 const picked = (e: any) => {
  action(e);
  setShowSelectDropdown(false);
 };

 return (
  <Styled.Div {...props}>
   <input
    type="text"
    className="text"
    ref={reference}
    value={value}
    readOnly
    hidden
   />
   <div className="select-custom pointer">
    <If condition={showSelectDropdown}>
     <input
      id="dropdownMenu"
      className="pos-A"
      type="checkbox"
      checked
      onClick={() => setShowSelectDropdown(!showSelectDropdown)}
     />
    </If>
    <If condition={!showSelectDropdown}>
     <input
      id="dropdownMenu"
      className="pos-A"
      type="checkbox"
      onClick={() => setShowSelectDropdown(!showSelectDropdown)}
     />
    </If>
    <label htmlFor="dropdownMenu" className="select-custom__label pos-A">
     {value ? value : label}
    </label>
    <span className="select-custom__border"></span>
    <ul
     className={`select-custom__dropdownMenu ${
      showSelectDropdown ? "" : "noshowdrop"
     }`}
    >
     {items.map((d, i) => {
      return (
       <li
        onClick={(e) => picked(e)}
        className={`select-custom__option ${value === d ? "picked" : ""}`}
        key={i}
       >
        {d}
       </li>
      );
     })}
    </ul>
   </div>
  </Styled.Div>
 );
};
