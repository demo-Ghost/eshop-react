import axios from "./axios";

async function getCategories() {
  try {
    const categoriesResponse = await axios.get("/categories");
    return categoriesResponse.data;
  } catch (error) {
    return Error;
  }
}

export { getCategories };
