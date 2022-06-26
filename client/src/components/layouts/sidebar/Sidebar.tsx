/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Noti } from "./components";
import { If } from "@/components/helpers";

import { navActions, navData } from "@/store/nav";
import { ordersData } from "@/store/orders";

import { Styled } from "./sidebar.styled";
import { ISidebarProps } from "./sidebar.types";

import { getNotifications } from "./utils";

const bi = require("@/images/bee.png");

export const Sidebar = (props: ISidebarProps) => {
 const dispatch = useDispatch();
 const { navLinks, active } = useSelector(navData);
 const { setNotifications } = useSelector(navActions);
 const { orders } = useSelector(ordersData);

 useEffect(() => {
  dispatch(setNotifications(getNotifications({ orders: orders })));
 }, []);

 return (
  <Styled.Nav {...props}>
   <div className="logo flex FD-C pos-A">
    <img src={bi} alt="bi" />
   </div>

   <div className="nav-links">
    {navLinks.map((l: any, i: number) => (
     <>
      <Link
       className={`${active === l.endpoint ? "active" : ""}`}
       key={i}
       to={l.endpoint}
      >
       {l.text}
       <If condition={!!l.notification}>
        <Noti noti={l.notification} />
       </If>
      </Link>
     </>
    ))}
   </div>
  </Styled.Nav>
 );
};
