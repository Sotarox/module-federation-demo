import React, { Suspense } from "react";
import useInViewLazy from "./hooks/useInViewLazy.js";
import HeroCard from "./HeroCard.jsx";

const Wrapper = ({ title, refProp, Component }) => (
  <div
    ref={refProp}
    className="min-h-screen bg-gray-100 border-2 border-dashed border-gray-300 rounded-md my-10 p-6 flex items-start justify-center"
  >
    <Suspense fallback={<Skeleton title={title} />}>
      {Component ? (
        <Component />
      ) : (
        <p className="text-gray-600">
          Scroll to load <b>{title}</b> 👇
        </p>
      )}
    </Suspense>
  </div>
);

const Skeleton = ({ title }) => (
  <div className="w-full max-w-md animate-pulse">
    <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
    {[...Array(5)].map((_, i) => (
      <div key={i} className="h-4 bg-gray-200 rounded mb-2"></div>
    ))}
    <p className="text-sm text-gray-400 mt-2">Loading {title}...</p>
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
    <div className="px-6 py-8 max-w-4xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center"> Shell App</h1>
      <HeroCard />
      <Wrapper title="HelloWorld" refProp={refHello} Component={HelloWorld} />
      <Wrapper title="UserList" refProp={refUsers} Component={UserList} />
      <Wrapper title="ProductList" refProp={refProducts} Component={ProductList} />
    </div>
  );
}