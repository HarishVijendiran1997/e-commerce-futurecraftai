"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  if (isMobile) {
    return (
      <>
        {/* Hamburger Icon Button */}
        <button
          className="md:hidden p-4 fixed top-0 left-0 z-10"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Sidebar when Hamburger is clicked */}
        {sidebarOpen && (
          <aside className="fixed top-0 left-0 w-64 h-full bg-white dark:bg-[#4A102A] p-6 z-20 transition-all transform ease-in-out duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={closeSidebar}
                className="text-2xl text-gray-500 dark:text-gray-300"
              >
                &times;
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              <Link href="/" className="hover:underline" onClick={closeSidebar}>
                Home
              </Link>
              <Link
                href="/products"
                className="hover:underline"
                onClick={closeSidebar}
              >
                Products
              </Link>
              <Link
                href="/settings"
                className="hover:underline"
                onClick={closeSidebar}
              >
                Settings
              </Link>
            </nav>
          </aside>
        )}
      </>
    );
  }

  return (
    // Desktop Sidebar
    <aside className="w-full md:w-64 bg-white dark:bg-[#4A102A] p-4 h-auto md:h-full">
      <h2 className="text-xl font-bold mb-6">Menu</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/products" className="hover:underline">
          Products
        </Link>
        <Link href="/settings" className="hover:underline">
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
