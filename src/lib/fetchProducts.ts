export async function fetchProducts(category?: string) {
  let url = "https://fakestoreapi.com/products";
  //Product list: https://fakestoreapi.com/products - api requirement 1

  // category is optional, if it is not provided, we will fetch all products
  if (category && category !== "All") {
    url = `https://fakestoreapi.com/products/category/${category}`;
    //Filter by category: https://fakestoreapi.com/products/category/{category_name} - api requirement 2
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
