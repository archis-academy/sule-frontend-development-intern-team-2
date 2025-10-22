// src/main.tsx
import React, { Suspense } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "@pages/home/home";
import "@src/main.scss";
import About from "@/sections/About/About";

const Listings = React.lazy(() => import("@/sections/Listings/Listings"));

function HashScrollManager() {
  const { hash, pathname } = useLocation();
  React.useEffect(() => {
    if (hash) {
      const doScroll = () => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      requestAnimationFrame(doScroll);
    } else if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);
  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HashScrollManager />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/listings" element={<Listings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
