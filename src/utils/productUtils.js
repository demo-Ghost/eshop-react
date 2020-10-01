const getProductTags = (products) => {
  let tagMap = {};

  products.forEach((prod) => {
    prod.tags.forEach((tag) => {
      if (!tagMap[tag]) {
        // we set to false, so checkboxes are not checked by default
        tagMap[tag] = false;
      }
    });
  });

  // convert map to array for rendering
  const tagLabels = Object.keys(tagMap).map((key, i) => ({
    id: i,
    label: key,
  }));

  return {
    tagMap,
    tagLabels,
  };
};

const filterProductsByTag = (products, tags) => {
  const selectedTags = Object.keys(tags).filter((tag) => tags[tag]);
  console.log("selectedTags", selectedTags);

  const filteredProducts = products.filter((product) => {
    let tagsIncluded = [];

    product.tags.forEach((tag) => {
      if (selectedTags.includes(tag)) {
        tagsIncluded.push(tag);
      }
    });

    if (tagsIncluded.length === selectedTags.length) return true;
    else return false;
  });
  // console.log("filteredProducts", filteredProducts);
  return filteredProducts;
};

const searchByProductName = (product, searchTerm) => {
  if (!searchTerm) return true;

  if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

const searchByCategoryName = (categories, product, searchTerm) => {
  if (!searchTerm) return true;

  const categoryName = categories.find(
    (category) => category.id === product.categoryId
  ).name;

  if (categoryName.toLowerCase().includes(searchTerm.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

const searchByProductId = (product, searchTerm) => {
  if (!searchTerm) return true;

  if (product.id.toLowerCase().includes(searchTerm.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

export {
  filterProductsByTag,
  getProductTags,
  searchByCategoryName,
  searchByProductName,
  searchByProductId,
};
