const API_URL = "https://fakestoreapi.com";

export async function getProducts() {
  const response = await fetch(`${API_URL}/products?limit=7`);
  const products = await response.json();
  return products;
}

export async function getCategories() {
  const response = await fetch(`${API_URL}/products/categories`);
  const categories = await response.json();
  return categories;
}

export async function getProductsByCategory(category) {
  const response = await fetch(`${API_URL}/products/category/${category}`);
  const products = await response.json();
  return products;
}
