// imports
// - utils
import { useHandlePageError } from "./utils";
// - style
import { Styled } from "./pageError.styled";
import { IPageErrorProps } from "./pageError.types";
// ---

export const PageError = (props: IPageErrorProps) => {
    const {status} = props;
  const { getContent } = useHandlePageError();
  return (
    <Styled.Section {...props}>
      <div className="TA-C">{getContent(status)}</div>
    </Styled.Section>
  );
};
