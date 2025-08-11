import React from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./app/HelloWorld";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(<HelloWorld />);
