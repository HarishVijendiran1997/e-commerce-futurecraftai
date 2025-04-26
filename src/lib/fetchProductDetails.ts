import { Product } from "@/types/product";

export default async function fetchProductById(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  // Single product: https://fakestoreapi.com/products/{id} - api requirement 4
  if (!res.ok) throw new Error("Failed to fetch product");

  // Type assertion to ensure the response matches the Product type
  const product: Product = await res.json();
  return product;
}
