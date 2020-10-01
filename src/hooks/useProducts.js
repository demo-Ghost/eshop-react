import React, { useEffect, useState } from "react";

import { getProducts } from "../services";

const useProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const loadProducts = async () => {
      const productsResponse = await getProducts();
      setProducts(productsResponse);
    };

    loadProducts();
  }, []);

  return products;
};

export default useProducts;
