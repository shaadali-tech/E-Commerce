import React from "react";
import ProductCard from "../Components/ProductCard";
import products from "../Api/product";

function Catalog() {
  return (
    <div className="container">
      <h1 className="mb-4">Product Catalog</h1>
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

export default Catalog;
