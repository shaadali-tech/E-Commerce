import products from "../api/products";
import ProductCard from "../Components/ProductCard";

function Catalog() {
  return (
    <div className="catalog">
      <h1>Product Catalog</h1>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
