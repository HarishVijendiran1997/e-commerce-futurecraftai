"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/fetchProducts";
import { fetchCategories } from "@/lib/fetchCategories";
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

  // Fetch categories from the API
  const {
    data: categories = [],
    isLoading: catLoading,
    error: catError,
  } = useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  // Filtered products state
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Search input state
  const [searchTerm, setSearchTerm] = useState("");

  //category filter
  const [category, setCategory] = useState("All");

  // Price range filter
  const [price, setPrice] = useState([0, 1000]);

  //Rating filter
  const [rating, setRating] = useState(0);

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

      // Sort by price
      result = result.filter((p) => p.price >= price[0] && p.price <= price[1]);

      // Sort by rating
      result = result.filter((p) => p.rating.rate >= rating);

      // Set filtered products
      setFilteredProducts(result);
    }
  }, [products, searchTerm, category, price, rating]);

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

      <div className="flex flex-col md:flex-row gap-4 mb-5 bg-white dark:bg-neutral-800 p-4 rounded shadow">
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
          className="p-2 rounded border dark:bg-gray-700"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        {/* Price Range Filter */}
        <div className="flex flex-col w-full md:w-1/2">
          <label className="text-sm mb-1">
            Price: ${price[0]} - ${price[1]}
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={price[1]}
            onChange={(e) => setPrice([0, parseInt(e.target.value)])}
            className="w-full"
          />
        </div>
        {/* Rating Filter */}
        <select
          className="p-2 rounded border w-full md:w-1/2 dark:bg-gray-700"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value={0}>All Ratings</option>
          <option value={1}>1★ & up</option>
          <option value={2}>2★ & up</option>
          <option value={3}>3★ & up</option>
          <option value={4}>4★ & up</option>
        </select>
      </div>

      {/* Products List */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center col-span-full text-neutral-500 flex justify-center items-center h-64">
            No products found.
          </p>
        ) : (
          filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </main>
    </div>
  );
};

export default ProductsPage;
