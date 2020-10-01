import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./layout";
import { Category, Home, SearchResults } from "../pages";

import { useCategories, useProducts } from "../hooks";
import { getProductTags, filterProductsByTag } from "../utils/productUtils";

const App = () => {
  const categories = useCategories();
  const products = useProducts();
  const [filters, setFilters] = useState({
    order: "ASCENDING",
    tags: null,
  });

  useEffect(() => {
    if (products) {
      // set values inside Map of product tags
      setFilters({
        ...filters,
        tags: getProductTags(products).tagMap,
      });
    }
  }, [products, setFilters]);

  const handleTagSelect = (value) => {
    const newState = Object.assign({}, filters);
    // toggle previous value, for provided key
    newState.tags[value] = !filters.tags[value];

    setFilters(newState);
  };

  const handleSearch = (value) => {
    console.log("handleSearch in App", value);
  };

  if (categories && products) {
    return (
      <Layout
        categories={categories}
        filters={filters}
        handleTagSelect={handleTagSelect}
        productTags={getProductTags(products).tagLabels}
        handleSearch={handleSearch}
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route
            path="/category/:categoryId"
            render={(props) => (
              <Category
                {...props}
                products={filterProductsByTag(products, filters.tags)}
              />
            )}
          />

          <Route
            path="/search/:searchTerm"
            render={(props) => (
              <SearchResults
                {...props}
                categories={categories}
                products={products}
              />
            )}
          />

          {/* render something for wrong routes */}
        </Switch>
      </Layout>
    );
  } else {
    return null;
  }
};

export default App;
