import { ProductComponentsProp } from "../APIResponseTypes/Product";

export default function ProductDetails({ product }: ProductComponentsProp) {
  return (
    <div className="min-h-screen bg-white shadow-md w-1/4">
      <div className="text-center justify-content-center">
        <div className="p-4">
          <img
            src={product?.image}
            alt={product?.title}
            className="rounded-lg mb-4 w-full"
          />
          <h1 className="font-bold text-xl text-gray-800">{product?.title}</h1>
          <p className="text-gray-600 font-secondary font-extralight text-sm">
            {product?.subtitle}
          </p>
        </div>

        <div className="border border-gray-100" />
        <div className="p-4">
          <div className="flex gap-2 flex-wrap">
            {product?.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border text-sm px-3 py-1 border-gray-300 text-gray-500 font-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border border-gray-100" />
    </div>
  );
}
