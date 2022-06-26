/** @format */

import { Styled } from "./image.styled";

import { If } from "@/components/helpers";

import { imageSource } from "@/utils";

import { IImageProps } from "./image.types";

export const Image = (props: IImageProps) => {
 const { obj } = props;
 return (
  <Styled.Section {...props}>
   <If condition={!!imageSource(obj)}>
    <img className="data-img" src={imageSource(obj)}></img>
   </If>
   <If condition={!imageSource(obj)}>
    <i>Ingen bild :(</i>
   </If>
  </Styled.Section>
 );
};
