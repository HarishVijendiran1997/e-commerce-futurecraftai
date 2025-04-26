export async function fetchProducts(category?: string) {
  let url = "https://fakestoreapi.com/products";


  // category is optional, if it is not provided, we will fetch all products
  if (category && category !== "All") {
    url = `https://fakestoreapi.com/products/category/${category}`;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
