import React, { useEffect, useState } from "react";

import { getCategories } from "../services";

const useCategories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const loadCategories = async () => {
      const categoriesResponse = await getCategories();
      setCategories(categoriesResponse);
    };

    loadCategories();
  }, []);

  return categories;
};

export default useCategories;
