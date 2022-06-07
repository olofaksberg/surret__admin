/** @format */

import { Styled } from "./notification.styled";
import { INotificationProps } from "./notification.types";

export const Noti = (props: INotificationProps) => {
 const { noti } = props;
 return <Styled.Span {...props}>{noti.main}</Styled.Span>;
};
