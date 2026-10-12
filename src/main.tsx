import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";

// create root
const domRoot = document.getElementById("root");
if (!domRoot) {
    throw new Error("Failed to find the root element");
}

const root = createRoot(domRoot);
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
