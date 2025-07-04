import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-200 text-center px-4">
      <h1 className="text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 animate-pulse">
        404
      </h1>
      <p className="text-2xl md:text-3xl text-gray-700 font-semibold mb-4">
        Sahifa topilmadi
      </p>
      <p className="text-md text-gray-500 mb-8">
        Siz izlagan sahifa mavjud emas yoki o‘chirilgan.
      </p>
      <Link
        to="/"
        className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium px-6 py-3 rounded-xl shadow-md transition-all duration-300"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}

export default NotFound;
