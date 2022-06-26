/** @format */

// imports
// - general
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// - contants
import { clientEndpoints, IproductModel } from "../../../../../constants";
// - utils
import { useArrayRef } from "../../../../../utils";
// - store
import {
  productsActions,
  productsData,
  productsFetches,
} from "@/store/products";

export const useHandleProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { addNewProduct } = useSelector(productsActions);
  const { newProduct, allProducts } = useSelector(productsData);
  const { fetchDeleteProduct,
    fetchUpdateProduct } = productsFetches;
  const [failMessage, setFailMessage] = useState<boolean>(false);
  const [showNewProducts, setShowNewProducts] = useState<boolean>(false);
  const [products, setProducts] = useState<IproductModel[]>(allProducts);
  const [productsFilter, setProductsFilter] = useState<string>("All");

  const [inputs, ref] = useArrayRef();

  const filter = (filterState: string) => {
    return filterState === "All"
      ? setProducts(allProducts)
      : setProducts(allProducts.filter((d: any, i: number) => d.category === filterState));
  };

  const add = () => {
    const addable = !inputs
      .filter((d) => d.name !== "image")
      .some((i) => !i.value);
    if (addable) {
      dispatch(addNewProduct(null));
      inputs.forEach((input) => (input.value = ""));
      if (failMessage) {
        setFailMessage(false);
      }
    } else {
      setFailMessage(true);
    }
  };

  const update = () => {
    const addable = !inputs
      .filter((d) => d.name !== "image")
      .some((i) => !i.value);

    if (addable) {
      const { imgURI, img, ...rest } = newProduct;
      const productSendData = rest;
      try {
        dispatch(fetchUpdateProduct({ data: productSendData, image: img }));
      } catch (err) {
        throw err;
      } finally {
        navigate(clientEndpoints().PRODUCTS.MAIN);
      }
    }
  };

  const remove = () => {
    try {
      dispatch(fetchDeleteProduct(newProduct._id));
    } catch (err) {
      throw err;
    } finally {
      navigate(clientEndpoints().PRODUCTS.MAIN);
    }
  };

  useEffect(() => {
    filter(productsFilter);
  }, [productsFilter]);

  return {
    products,
    failMessage,

    ref,

    add,
    update,
    remove,

    showNewProductsState: {
      showNewProducts,
      setShowNewProducts,
    },

    productsFilterState: {
      productsFilter,
      setProductsFilter,
    },
  };
};
