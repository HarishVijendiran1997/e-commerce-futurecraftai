"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/fetchProducts";
import { fetchCategories } from "@/lib/fetchCategories";
import ProductCard from "@/components/ui/ProductCard";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  //category filter
  const [category, setCategory] = useState("All");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Fetch products from the API
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["products", category],
    queryFn: () => fetchProducts(category),
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
      //   if (category !== "All") {
      //     result = result.filter((p) => p.category === category);
      //   }

      // Sort by price
      result = result.filter((p) => p.price >= price[0] && p.price <= price[1]);

      // Sort by rating
      result = result.filter((p) => p.rating.rate >= rating);

      // Set filtered products
      if (JSON.stringify(result) !== JSON.stringify(filteredProducts)) {
        setFilteredProducts(result);
      }
    }
  }, [products, searchTerm, price, rating]);

  //Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  //Pagination total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle page change increment
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  // Handle page change decrement
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle loading and error states
  if (isLoading|| catLoading) {
    return <div className="text-2xl flex justify-center">Loading...</div>;
  }
  if (isError || catError) {
    return (
      <div className="text-4xl flex justify-center items-center text-red-600 min-h-screen">
        Error fetching products
      </div>
    );
  }

  return (
    <div>
        <div className="flex justify-between items-center px-5 bg-neutral-100 dark:bg-neutral-900 p-2 rounded shadow mb-5">
        <h2 className="text-xl font-bold">Products</h2>
      <div className="flex gap-4 my-2">
        <div className="p-4 bg-white dark:bg-neutral-800 rounded shadow text-center">
          <p className="text-sm text-gray-500">Total Products</p>
          <p className="text-xl font-bold">{products.length}</p>
        </div>
        <div className="p-4 bg-white dark:bg-neutral-800 rounded shadow text-center">
          <p className="text-sm text-gray-500">Average Price</p>
          <p className="text-xl font-bold">
            $
            {products.length > 0
              ? (
                  products.reduce((sum, p) => sum + p.price, 0) /
                  products.length
                ).toFixed(2)
              : "0.00"}
          </p>
        </div>
      </div>
        </div>
      

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
          className="p-2 rounded border dark:bg-neutral-700 mb-4 md:mb-0"
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
          className="p-2 rounded border w-full md:w-1/2 dark:bg-neutral-700"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value={0}>All Ratings</option>
          <option value={1}>1⭐ & up</option>
          <option value={2}>2⭐ & up</option>
          <option value={3}>3⭐ & up</option>
          <option value={4}>4⭐ & up</option>
        </select>
      </div>

      {/* Products List */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {currentProducts.length === 0 ? (
          <p className="text-center col-span-full text-neutral-500 flex justify-center items-center h-64">
            No products found.
          </p>
        ) : (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </main>

      {/* Pagination */}
      <div className="pagination flex justify-center items-center space-x-4 mt-4">
        <button
          className={`${
            currentPage === totalPages ? "bg-neutral-500" : ""
          } border px-4 py-2 rounded`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <span className="text-lg">{currentPage}</span>
        <button
          className={`${
            currentPage === totalPages ? "bg-neutral-500" : ""
          } border px-4 py-2 rounded`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
