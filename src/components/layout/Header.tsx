// components/layout/Header.tsx
const Header = () => {
    return (
      <header className="bg-white dark:bg-pink-800 p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold ml-10">Shop <span className="text-xl font-extrabold text-violet-600">It</span></h1>
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
  