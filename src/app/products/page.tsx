"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/fetchProducts";
import ProductCard from "@/components/ui/ProductCard";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  // Fetch products from the API
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Filtered products state
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Search input state
  const [searchTerm, setSearchTerm] = useState("");

  //category filter
  const [category, setCategory] = useState("All");

  // Filter products based on search term
  useEffect(() => {
    if (products) {
      let result = [...products];

      // Filter by search term
      if (searchTerm.trim()) {
        result = result.filter((p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Filter by category
      if (category !== "All") {
        result = result.filter((p) => p.category === category);
      }

      setFilteredProducts(result);
    }
  }, [products, searchTerm, category]);

  // Handle loading and error states
  if (isLoading) {
    return <div className="text-4xl flex justify-center">Loading...</div>;
  }
  if (isError) {
    return (
      <div className="text-4xl flex justify-center items-center text-red-600 min-h-screen">
        Error fetching products
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <div className="flex flex-col md:flex-row gap-4 bg-white dark:bg-gray-800 p-4 rounded shadow">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded mb-4 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category Filter */}
        <select
          className="p-2 rounded border w-full md:w-1/2 dark:bg-gray-700"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="jewelery">Jewelry</option> {/*jewelery api spelling mistake*/}
          <option value="electronics">Electronics</option>
        </select>
      </div>

      {/* Products List */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
};

export default ProductsPage;
