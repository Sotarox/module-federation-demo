import React, { useEffect, useState } from "react";

const ProductCardList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white shadow">
      {products.map(product => (
        <div key={product.id} className="rounded-lg border p-4 bg-yellow-50">
          <h3 className="text-lg font-bold">{product.title}</h3>
          <p className="text-sm text-gray-700">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCardList;