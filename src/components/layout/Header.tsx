// components/layout/Header.tsx
const Header = () => {
    return (
      <header className="bg-white dark:bg-[#C5172E] p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold ml-10">Shop It</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm">Hello, Harish Vijendiran</span>
          <button className="bg-red-500 text-white px-3 py-1 rounded drop-shadow-2xl hover:bg-red-600">
            Logout
          </button>
        </div>
      </header>
    )
  }
  
  export default Header
  