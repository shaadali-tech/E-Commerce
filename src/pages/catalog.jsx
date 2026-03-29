import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import products from "../Api/product";
import Loader from "../Components/Loader";
function Catalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (Loading) return <Loader />;

  // Get unique categories
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="container">
      <h1 className="mb-4">Product Catalog</h1>
      <div className="row mb-3 g-2 align-items-end">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="title-asc">Title: A-Z</option>
            <option value="title-desc">Title: Z-A</option>
          </select>
        </div>
      </div>
      <div className="row g-4">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase()),
          )
          .filter((product) =>
            category ? product.category === category : true,
          )
          .sort((a, b) => {
            if (sort === "price-asc") return a.price - b.price;
            if (sort === "price-desc") return b.price - a.price;
            if (sort === "title-asc") return a.title.localeCompare(b.title);
            if (sort === "title-desc") return b.title.localeCompare(a.title);
            return 0;
          })
          .map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Catalog;
