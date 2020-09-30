import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./layout";
import { Category, Home, SearchResults } from "../pages";

import { getProducts, getCategories } from "../services";

const App = () => {
  const [product, setProducts] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    const loadProducts = async () => {
      const productsResponse = await getProducts();
      setProducts(productsResponse);
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

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/category">
          <Category />
        </Route>

        <Route path="/search-results">
          <SearchResults />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
