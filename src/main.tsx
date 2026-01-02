import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Hide SSR content once React loads
const ssrContent = document.getElementById("ssr-content");
if (ssrContent) {
  ssrContent.classList.add("ssr-hidden");
}

createRoot(document.getElementById("root")!).render(<App />);
