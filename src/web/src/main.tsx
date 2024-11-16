import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";
import "./index.css";

import { Toaster } from "./components/ui/toaster.tsx";
import { NavBar } from "./components/navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="grid grid-rows-[auto_1fr] h-screen">
      <NavBar />
      <App />
      <Toaster />
    </div>
  </StrictMode>
);
