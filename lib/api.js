
const API_URL = "https://api.abcz.workers.dev/api/bazardor";

export async function getProducts(category) {
  const url = category
    ? `${API_URL}/products?category=${encodeURIComponent(category)}`
    : `${API_URL}/products`;

  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Could not load products");
  }

  const result = await response.json();

  // Handle common API response formats.
  const products = result.data ?? result.products ?? result;

  if (!Array.isArray(products)) {
    console.error("Unexpected products API response:", result);
    throw new Error("Unexpected products API format");
  }

  return products;
}

export async function getCategories() {
  const response = await fetch(`${API_URL}/categories`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Could not load categories");
  }

  const result = await response.json();
  const categories = result.data ?? result.categories ?? result;

  if (!Array.isArray(categories)) {
    console.error("Unexpected categories API response:", result);
    throw new Error("Unexpected categories API format");
  }

  return categories;
}

export async function getProduct(id) {
  const response = await fetch(`${API_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Product not found");
  }

  const result = await response.json();

  return result.data ?? result.product ?? result;
}
