import { StrictMode } from "react";
import { App } from "./App";
import { createRoot } from "react-dom/client";
import "./layout.scss"
import Welcome from "./Welcome";

createRoot(document.getElementById('root')).render(
<StrictMode>
    <App />
    <Welcome />
</StrictMode>
)
