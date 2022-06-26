/** @format */

// imports
// - general
import { useState } from "react";
// - components
import { ProductAlt } from "../productAlt";
import { ButtonToggle } from "../../../../../generals";
import { If } from "../../../../../helpers";
// - style
import { Styled } from "./productListed.styled";
import { IproductListedProps } from "./productListed.types";
// ---

export const ProductListed = (props: IproductListedProps) => {
  const { product, last, amount } = props;
  const [showProductCard, setShowProductCard] = useState(false);

  if (!product) {
    return <ProductNotFound props={props} />;
  }

  return (
    <Styled.Section {...props}>
      <div className="product-data">
        <div>
          <label>Produkt:</label>
          <span> {product.name}</span>
        </div>
        <If condition={!!amount}>
          <div>
            <label>Antal:</label>
            <span> {amount}</span>
          </div>
        </If>

        {/* show toggler */}
        <ButtonToggle
          text={showProductCard ? "Dölj produktkort -" : "Visa produktkort +"}
          action={() => setShowProductCard(!showProductCard)}
        />

        {/* product card */}
        <If condition={showProductCard}>
          <div className="p-left-1 p-top-1 show-ani">
            <ProductAlt product={product} />
          </div>
        </If>
      </div>

      <If condition={!!last}>
        <hr />
      </If>
    </Styled.Section>
  );
};

const ProductNotFound = (props: any) => {
  return (
    <Styled.Section {...props}>
      <div className="product-data">Produkt ej hittad</div>
      <If condition={props.last}>
        <hr />
      </If>
    </Styled.Section>
  );
};
