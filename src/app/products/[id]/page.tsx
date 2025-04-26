import fetchProductById from "@/lib/fetchProductDetails"

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product = await fetchProductById(params.id)

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.title} className="w-full h-64 object-contain" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-2">Category: {product.category}</p>
          <p className="text-lg text-blue-500 font-semibold mb-2">${product.price}</p>
          <p className="text-sm text-yellow-500 mb-2">⭐ {product.rating.rate} ({product.rating.count})</p>
          <p className="text-gray-700 dark:text-gray-300">{product.description}</p>
        </div>
      </div>
    </div>
  )
}