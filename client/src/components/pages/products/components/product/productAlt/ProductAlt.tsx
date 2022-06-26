/** @format */

// imports
// - general
import { useState } from "react";
// - components
import { ButtonToggle, Image } from "../../../../../generals";
import { If } from "../../../../../helpers";
// - style
import { Styled } from "./productAlt.styled";
import { IproductAltProps } from "./productAlt.types";
// ---

export const ProductAlt = (props: IproductAltProps) => {
  const { product } = props;
  const [showFullInfo, setShowFullInfo] = useState<boolean>(false);

  return (
    <Styled.Section {...props}>
     <Image obj={product} customStyle="align-self: center;" />

      <div>
        <h1>{product.name}</h1>

        <ButtonToggle
          text={showFullInfo ? "MINDRE INFO -" : "MER INFO +"}
          action={() => setShowFullInfo(!showFullInfo)}
        />

        <If condition={showFullInfo}>
          <ul className="flex FD-C TA-L show-ani">
            <li>
              <label>Kategori: </label>
              <span>{product.category}</span>
            </li>
            <li>
              <label>Pris: </label>
              <span>{product.price}kr</span>
            </li>
            <li>
              <label>Lagersaldo: </label>
              <span>{product.balance}</span>
            </li>
            <li>
              <label>Antal sålda: </label>
              <span>{product.orderAmount}</span>
            </li>
            <li>
              <label>Innehållsförteckning: </label>
              <div>{product.content}</div>
            </li>
          </ul>
        </If>
      </div>
    </Styled.Section>
  );
};
