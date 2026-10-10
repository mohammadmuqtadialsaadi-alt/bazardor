
const API_URL = "https://openapi.programming-hero.com/api/bazardor";

export async function getProducts(category) {
  const url = category
    ? `${API_URL}/products?category=${encodeURIComponent(category)}`
    : `${API_URL}/products`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = await response.json();

  // We'll verify the API response shape before finalizing this.
  return result.data ?? result.products ?? result;
}

export async function getCategories() {
  const response = await fetch(`${API_URL}/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const result = await response.json();

  return result.data ?? result.categories ?? result;
}

export async function getProduct(id) {
  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Product not found");
  }

  const result = await response.json();

  return result.data ?? result.product ?? result;
}
