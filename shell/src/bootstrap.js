import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client';
import "./index.css";
// import styles from remote app. Otherwise tailwind styles are not applied to remote contents.
import "remote/styles";

const root = createRoot(document.getElementById('root'));
root.render(<App />);