import React from "react";

import ProductCard from "../components/ui/productCard";

const Category = ({ match, products }) => {
  const categoryId = match.params.categoryId;
  const matchingProducts = products.filter(
    (product) => product.categoryId === categoryId
  );

  return (
    <>
      {matchingProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default Category;
