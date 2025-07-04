import { useFetch } from "../hooks/useFetch";
import Product from "../components/Product";
import { Link } from "react-router-dom";

function Home() {
  const { data: product, isPending } = useFetch(
    "https://dummyjson.com/products?limit=192"
  );

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="align-elements"> 
      <img
            src="https://images.uzum.uz/cvcg2f3vgbkm5ehkika0/main_page_banner.jpg"
            alt=""
            class="mb-6 rounded-2xl"
          />
      </div>

      {isPending && <span className="loading  loading-dots loading-xl"></span>}

      <div className="align-elements grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {product?.products?.map((p) => {
         
          return <Link key={p.id} to={`/singleProduct/${p.id}`}>
          <Product  product={p} />;
          </Link>
        })}
      </div>
    </section>
  );
}

export { Home };
