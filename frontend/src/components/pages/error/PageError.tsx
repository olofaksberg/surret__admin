/** @format */

import { getContent } from "./utils";

import { Styled } from "./pageError.styled";
import { IPageErrorProps } from "./pageError.types";

export const PageError = (props: IPageErrorProps) => {
 const { status } = props;
 return (
  <Styled.Section {...props}>
   <div className="TA-C">{getContent(status)}</div>
  </Styled.Section>
 );
};
