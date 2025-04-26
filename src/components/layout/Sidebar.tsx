// components/layout/Sidebar.tsx
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-neutral-800 border-r h-full p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
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
