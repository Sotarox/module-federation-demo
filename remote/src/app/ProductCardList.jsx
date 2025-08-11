import React, { useEffect, useState } from "react";

const ProductCardList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1rem",
        padding: "1.5rem",
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            borderRadius: "0.5rem",
            border: "1px solid #e5e7eb",
            padding: "1rem",
            backgroundColor: "#fef9c3", // Tailwind bg-yellow-50
          }}
        >
          <h3 style={{ fontSize: "1.125rem", fontWeight: "bold" }}>
            {product.title}
          </h3>
          <p style={{ fontSize: "0.875rem", color: "#374151" }}>
            {product.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductCardList;