import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import formatNumber from "../utils/FormatNumber";
import { TbShoppingBagPlus } from "react-icons/tb";

function SingleProduct() {
  const { id } = useParams();
  const { data: product, isPending } = useFetch(`https://dummyjson.com/product/${id}`);
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  if (isPending || !product) {
    return <span className="loading loading-dots loading-xl"></span>;
  }

  return (
   <div className="bg-[#3e3e3e]">
     <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="relative">
        <div className="overflow-hidden rounded-xl bg-[#4b4b4b] shadow-lg">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-auto object-contain rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 z-10 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={liked ? "red" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-8 h-8 transition-colors duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* RIGHT - Product Details */}
      <div className="flex flex-col justify-center text-white space-y-5">
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <h2 className="text-xl text-gray-400">Brand: <span className="italic">{product.brand}</span></h2>
        <p className="text-gray-300 text-lg">Category: {product.category}</p>
        <p className="text-yellow-400 text-lg">⭐ {product.rating} / 5</p>
        <p className="text-gray-200 text-base">{product.description}</p>

        <div className="flex items-center text-2xl font-semibold mt-4">
          <span className="line-through text-red-400 mr-4">
            {formatNumber(product.price)}
          </span>
          <span className="text-green-400">
            {formatNumber(product.price, product.discountPercentage)}
          </span>
        </div>
        <div className="mt-6 flex items-center gap-4">
          {count === 0 ? (
            <button
              onClick={() => setCount(count + 1)}
              className="btn btn-secondary"
            >
              <TbShoppingBagPlus className="mr-2" />
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCount(count - 1)}
                className="btn btn-sm"
                disabled={count === 0}
              >
                –
              </button>
              <span className="text-white text-lg">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="btn btn-sm"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
   </div>
  );
}

export default SingleProduct;
