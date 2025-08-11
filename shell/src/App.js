import React, { Suspense } from "react";
import useInViewLazy from "./hooks/useInViewLazy";
import HeroCard from "./HeroCard";

const Wrapper = ({ title, refProp, Component }) => (
  <div
    ref={refProp}
    style={{
      minHeight: "100vh",
      backgroundColor: "#f3f4f6", // bg-gray-100
      border: "2px dashed #d1d5db", // border-gray-300 border-2 border-dashed
      borderRadius: "0.375rem", // rounded-md
      marginTop: "2.5rem", // my-10 (top + bottom)
      marginBottom: "2.5rem",
      padding: "1.5rem", // p-6
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
    }}
  >
    <Suspense fallback={<Skeleton title={title} />}>
      {Component ? (
        <Component />
      ) : (
        <p style={{ color: "#4b5563" /* text-gray-600 */ }}>
          Scroll to load <b>{title}</b> 👇
        </p>
      )}
    </Suspense>
  </div>
);

const Skeleton = ({ title }) => (
  <div
    style={{
      width: "100%",
      maxWidth: "28rem", // max-w-md
      animation: "pulse 2s infinite",
    }}
  >
    <div
      style={{
        height: "1.5rem", // h-6
        backgroundColor: "#d1d5db", // bg-gray-300
        borderRadius: "0.375rem",
        width: "50%", // w-1/2
        marginBottom: "1rem",
      }}
    />
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        style={{
          height: "1rem", // h-4
          backgroundColor: "#e5e7eb", // bg-gray-200
          borderRadius: "0.375rem",
          marginBottom: "0.5rem",
        }}
      />
    ))}
    <p
      style={{
        fontSize: "0.875rem", // text-sm
        color: "#9ca3af", // text-gray-400
        marginTop: "0.5rem",
      }}
    >
      Loading {title}...
    </p>

    {/* Keyframes für pulse Animation inline leider nicht möglich.
        Du kannst das global in CSS hinzufügen: */}
    <style>{`
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
      }
      div[style*="animation: pulse"] {
        animation-name: pulse;
      }
    `}</style>
  </div>
);

export default function App() {
  const [refHello, HelloWorld] = useInViewLazy(() =>
    import("remote/HelloWorld")
  );
  const [refUsers, UserList] = useInViewLazy(() =>
    import("remote/UserCardList")
  );
  const [refProducts, ProductList] = useInViewLazy(() =>
    import("remote/ProductCardList")
  );

  return (
    <div
      style={{
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        maxWidth: "64rem", // max-w-4xl
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: "'Helvetica Neue', Arial, sans-serif", // font-sans
        color: "#1f2937", // text-gray-800
      }}
    >
      <h1
        style={{
          fontSize: "1.875rem", // text-3xl
          fontWeight: "bold",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        Shell App
      </h1>
      <HeroCard />
      <Wrapper title="HelloWorld" refProp={refHello} Component={HelloWorld} />
      <Wrapper title="UserList" refProp={refUsers} Component={UserList} />
      <Wrapper title="ProductList" refProp={refProducts} Component={ProductList} />
    </div>
  );
}