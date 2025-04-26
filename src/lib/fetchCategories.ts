export async function fetchCategories() {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    //Categories: https://fakestoreapi.com/products/categories - api requirement 3
    if (!res.ok) throw new Error('Failed to fetch categories')
    return res.json()
  }
  