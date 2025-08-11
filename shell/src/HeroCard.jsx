import React from "react";

const HeroCard = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to bottom right, #e0e7ff, white)",
    }}
  >
    <h1
      style={{
        fontSize: "3rem", // ca. text-5xl
        fontWeight: "bold",
        color: "#4338ca", // Indigo-700
        maxWidth: "42rem", // ca. max-w-2xl
        textAlign: "center",
      }}
    >
      Build Modular Frontends That Load When They're Needed
    </h1>
  </div>
);

export default HeroCard;