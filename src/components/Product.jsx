import { useState } from "react";
import { TbShoppingBagPlus } from "react-icons/tb"; // agar hali import qilinmagan bo‘lsa
import formatNumber from "../utils/FormatNumber";

function Product({product}) {
    const [liked, setLiked] = useState(false);
const [count, setCount] = useState(0);

  return (
<li
      key={product.id}
      className=" group rounded-2xl overflow-hidden max-w-full w-full sm:w-[320px] md:w-[360px] mx-auto bg-[#444444] flex flex-col shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:scale-[1.02] transition-all duration-300"
    >
      <div
        className="relative h-[300px] overflow-hidden bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${product.thumbnail})` }}
      >
        <div className="absolute inset-0 backdrop-blur-md bg-black/30"></div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="relative z-10 max-w-full max-h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 z-20 text-white text-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={liked ? "red" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-7 h-7 transition-colors duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-2xl text-white mb-1">{product.title}</h3>
        <h4 className="text-gray-300 mb-3">
          Brand: <span className="italic">{product.brand}</span>
        </h4>

        <div className="flex text-gray-400 mb-3">
          <p className="border border-gray-500 text-white px-3 py-1 rounded">
            Category: {product.category}
          </p>
          <p className="ml-auto">{product.rating} ⭐</p>
        </div>

        <p className="text-gray-200 mb-5 mt-2 line-clamp-2">{product.description}</p>


        <div className="flex items-center justify-between mb-3.5">
          <p className="text-gray-300">
            Price:{" "}
            <span className="line-through text-red-500 mr-2">
              {formatNumber(product.price)}
            </span>
            <span>{formatNumber(product.price, product.discountPercentage)}</span>
          </p>

          {count === 0 && (
            <button
              onClick={() => setCount(count + 1)}
              className="btn btn-secondary"
              aria-label="Add to cart"
            >
              <TbShoppingBagPlus />
            </button>
          )}

          {count > 0 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCount(count - 1)}
                className="btn"
                disabled={count === 0}
                aria-label="Decrease count"
              >
                &#45;
              </button>
              <span className="text-white font-bold">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="btn"
                aria-label="Increase count"
              >
                &#43;
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

export default Product
