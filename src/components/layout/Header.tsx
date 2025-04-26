// components/layout/Header.tsx
const Header = () => {
    return (
      <header className="bg-white dark:bg-neutral-800 p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Shop It</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm">Hello, Harish</span>
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Logout
          </button>
        </div>
      </header>
    )
  }
  
  export default Header
  