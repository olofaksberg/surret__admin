/** @format */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IRedirectProps } from "./redirect.types";

export const Redirect = (props: IRedirectProps) => {
 const { to } = props;
 const navigate = useNavigate();
 useEffect(() => {
  navigate(to);
 }, []);

 return null;
};
