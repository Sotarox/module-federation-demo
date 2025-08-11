import { useEffect, useRef, useState } from "react";
import { lazy } from "react";

export default function useInViewLazy(factory, threshold = 0.25) {
  const ref = useRef(null);
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setComponent(lazy(factory)); // dynamically import the module
          observer.disconnect();       // only trigger once
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, Component];
}