import React from "react";

import ProductCard from "../components/ui/productCard";
import {
  searchByCategoryName,
  searchByProductId,
  searchByProductName,
} from "../utils/productUtils";

const SearchResults = ({ categories, match, products }) => {
  const searchTerm = match.params.searchTerm;

  const matchingByProductName = products.filter((product) =>
    searchByProductName(product, searchTerm)
  );

  const matchingByCategoryName = products.filter((product) =>
    searchByCategoryName(categories, product, searchTerm)
  );

  const matchingByProductId = products.filter((product) =>
    searchByProductId(product, searchTerm)
  );

  // merge all three arrays
  const mergedArrays = matchingByProductName.concat(
    matchingByCategoryName,
    matchingByProductId
  );

  // remove duplicates
  const matchingProducts = [...new Set(mergedArrays)];

  return (
    <>
      {matchingProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default SearchResults;
