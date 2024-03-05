import React from "react";
import "./App.css";
import Beranda from "./routes/Beranda";
import Destinasi from "./routes/Destinasi";
import Budaya from "./routes/Budaya";
import Kuliner from "./routes/Kuliner";
import Blog from "./routes/Blog";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/destinasi" element={<Destinasi />} />
        <Route path="/budaya" element={<Budaya />} />
        <Route path="/kuliner" element={<Kuliner />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
