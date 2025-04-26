import { Product } from "@/types/product";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-4"
      />
      <h3 className="font-semibold text-sm mb-1">{product.title}</h3>
      <p className="text-sm text-gray-500 mb-2">${product.price}</p>
      <p className="text-xs text-yellow-500">
        ⭐{product.rating.rate}({product.rating.count})
      </p>
    </div>
  );
};

export default ProductCard;
