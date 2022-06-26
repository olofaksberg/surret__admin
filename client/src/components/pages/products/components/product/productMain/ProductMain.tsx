/** @format */

// imports
// - general
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// - components
import { ButtonMain, ButtonToggle, Image } from "../../../../../generals";
import { If } from "../../../../../helpers";
// - constants
import { buttonMainTypes, clientEndpoints } from "../../../../../../constants";
// - style
import { Styled } from "./productMain.styled";
import { IproductMainProps } from "./productMain.types";
// ---

export const ProductMain = (props: IproductMainProps) => {
 const { product } = props;
 const navigate = useNavigate();
 const [showFullInfo, setShowFullInfo] = useState<boolean>(false);

 return (
  <Styled.Section {...props}>
   <Image
    obj={product}
    customStyle="align-self: center; max-height: calc(25 * 0.6rem);
    border-radius: 10px 10px 0 0; img {max-height: inherit;}"
   />

   <div className="flex FD-C">
    <h1>{product.name}</h1>

    {/* show toggler */}
    <ButtonToggle
     text={!showFullInfo ? "Visa mer +" : "Visa mindre -"}
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
    <ButtonMain
     buttonType={buttonMainTypes.EDIT}
     text={"redigera"}
     action={() => navigate(clientEndpoints(product._id).PRODUCTS.EDIT)}
     customStyle="align-self: center; margin-top: 1rem;"
    />
   </div>
  </Styled.Section>
 );
};
