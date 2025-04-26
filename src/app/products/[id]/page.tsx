import fetchProductById from "@/lib/fetchProductDetails";
import Image from "next/image";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const product = await fetchProductById(params.id);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="w-full h-64 object-contain md:h-auto md:w-full"
        />

        {/* Product Details Section */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Category: {product.category}
          </p>
          <p className="text-lg text-blue-500 font-semibold mb-2">
            ${product.price}
          </p>
          <p className="text-sm text-yellow-500 mb-2">
            ⭐ {product.rating.rate} ({product.rating.count})
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
            <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
              Add Product
            </button>
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Edit Product
            </button>
            <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
              Delete Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
