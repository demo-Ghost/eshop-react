import axios from "./axios";

async function getProducts() {
  const productsResponse = await axios.get("/products");
  return productsResponse.data;
}

export { getProducts };
