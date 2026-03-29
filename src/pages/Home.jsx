import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import products from "../Api/product";
import Loader from "../Components/Loader";

function Home() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500); // simulate loading
  }, []);

  if (Loading) return <Loader />;
  return (
    <div className="container">
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
