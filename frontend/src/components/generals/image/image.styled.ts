import styled from "styled-components";
import { IImageProps } from "./image.types";

const Section = styled.section<IImageProps>`

.data-img {
    width: 100%;
}
    ${(props) => props.customStyle}
`;

export const Styled = { Section };


// align-self: ${(props) => props.align};