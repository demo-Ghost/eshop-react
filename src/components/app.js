import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./layout";
import { Category, Home, SearchResults } from "../pages";

import { getProducts, getCategories } from "../services";
import { getProductTags, filterProductsByTag } from "../utils/productUtils";

const App = () => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [filters, setFilters] = useState({
    order: "ASCENDING",
    tags: null,
  });

  useEffect(() => {
    const loadProducts = async () => {
      const productsResponse = await getProducts();
      setProducts(productsResponse);
      // set values inside Map of product tags
      setFilters({
        ...filters,
        tags: getProductTags(productsResponse).tagMap,
      });
    };

    loadProducts();
  }, []);

  useEffect(() => {
    const loadCategories = async () => {
      const categoriesResponse = await getCategories();
      setCategories(categoriesResponse);
    };

    loadCategories();
  }, []);

  const handleTagSelect = (value) => {
    console.log(value);

    const newState = Object.assign({}, filters);
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
