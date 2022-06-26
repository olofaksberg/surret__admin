/** @format */

// imports
// - config
import { productCategories } from "../../../../../constants";
// - style
import { Styled } from "./productsNav.styled";
import { IproductsNavProps } from "./productsNav.types";
// ---

export const ProductsNav = (props: IproductsNavProps) => {
  const { productsFilterState } = props;
  return (
    <Styled.Section {...props}>
      <h4
        className={`products-nav-item pointer ${
          productsFilterState.productsFilter === "All" ? "active" : ""
        }`}
        onClick={() => productsFilterState.setProductsFilter("All")}
      >
        Alla
      </h4>
      <div className="flex FG-2">
        {productCategories.map((d, i) => {
          return (
            <h4
              className={`products-nav-item pointer ${
                productsFilterState.productsFilter === d ? "active" : ""
              }`}
              onClick={() => productsFilterState.setProductsFilter(d)}
            >
              {d}
            </h4>
          );
        })}
      </div>
    </Styled.Section>
  );
};
