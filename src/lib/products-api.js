export async function getProducts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_RESOURCES_ADDRESS}/products?limit=7`
  );
  const products = await response.json();
  return products;
}

export async function getCategories() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_RESOURCES_ADDRESS}/products/categories`
  );
  const categories = await response.json();
  return categories;
}

export async function getProductsByCategory(category) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_RESOURCES_ADDRESS}/products/category/${category}`
  );
  const products = await response.json();
  return products;
}
