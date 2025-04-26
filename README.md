# 🛒 E-commerce Admin Dashboard

A fully responsive e-commerce admin dashboard built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **TanStack Query**.  
This project fetches real product data from the Fake Store API and allows managing products with filtering, and pagination

---

## 🚀 Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tanstack Query](https://tanstack.com/query/latest)
- [Fake Store API](https://fakestoreapi.com/)

---

## 📦 Features

### Dashboard Layout
- Sidebar navigation
- Header with user profile and logout button
- Main content area (responsive)

### Products Management
- Fetch and display products in a grid layout
- Show product image, title, price, category, rating, and stock status (simulated)

### Filtering System
- Price range slider
- Category filter (dropdown)
- Rating filter (select rating)
- Search by product name

### Additional Features
- Product detail view when clicking a product
- Pagination (8 products per page)
- Basic analytics/statistics (total products, average price)
- Mock Add/Edit/Delete product buttons (not persisted)

### Upcoming Features
-DarkMode/ LightMode
---

## 📡 API Endpoints Used

- Product list: `https://fakestoreapi.com/products`
- Single product: `https://fakestoreapi.com/products/{id}`
- Categories: `https://fakestoreapi.com/products/categories`
- Filter by category: `https://fakestoreapi.com/products/category/{category_name}`

---

## 🛠 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/HarishVijendiran1997/e-commerce-futurecraftai
cd e-commerce-futurecraftai
npm install
npm run dev

Visit http://localhost:3000 in your browser