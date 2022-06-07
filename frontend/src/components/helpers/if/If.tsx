import { IIfProps } from "./if.types"

export const If = (props: IIfProps) => {
  const { condition, children } = props;
    return <>{condition && children}</>;
  };
  