/** @format */

// imports
// - general
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// - components
// import { Notification } from "./components";
import { If } from "../../helpers";
// - store
import { navActions, navData } from "../../../store/nav/navSlice";
import { ordersData } from "../../../store/orders/ordersSlice";
// - style
import { Styled } from "./sidebar.styled";
import { ISidebarProps } from "./sidebar.types";
import { Noti } from "./components";

const bi = require('../../../images/bee.png')
// ---

export const Sidebar = (props: ISidebarProps) => {
  const dispatch = useDispatch();
  const { navLinks, active } = useSelector(navData);
  const { setNotifications } = useSelector(navActions);
  const { orders } = useSelector(ordersData);

  const notis = () => {
    const newOrdersAmount = orders.filter(
      (d:any, i:number) => !d.status.seen
    ).length;

    return {
      ordersNoti:
        newOrdersAmount > 0
          ? {
              main: newOrdersAmount,
              onHover: newOrdersAmount > 1 ? " NYA ORDRAR" : " NY ORDER",
            }
          : null,
      productsNoti: null,
      marketsNoti: null,
    };
  };

  useEffect(() => {
    dispatch(setNotifications(notis()));
  }, []);

  return (
    <Styled.Nav {...props}>
      <div className="logo flex FD-C pos-A">
        <img src={bi} alt="bi" />
      </div>

      <div className="nav-links">
        {navLinks.map((l:any, i:number) => (
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
