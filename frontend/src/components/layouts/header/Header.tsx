/** @format */

import { useNavigate } from "react-router-dom";

import { ButtonMain } from "@/components/generals";
import { If } from "@/components/helpers";

import { buttonMainTypes } from "@/constants";

import { Styled } from "./header.styled";
import { IHeaderProps } from "./header.types";
// ---

export const Header = (props: IHeaderProps) => {
 const navigate = useNavigate();
 const { title, buttonRoute } = props;

 return (
  <Styled.Header {...props}>
   <h1 className="TT-UC FC-G-M">{title}</h1>

   <If condition={!!buttonRoute}>
    <ButtonMain
     buttonType={buttonMainTypes.ADD}
     text={`lägg till ${title}`}
     action={() => navigate(buttonRoute)}
    />
   </If>
  </Styled.Header>
 );
};
