import axios from "./axios";

async function getCategories() {
  const categoriesResponse = await axios.get("/categories");
  return categoriesResponse.data;
}

export { getCategories };
