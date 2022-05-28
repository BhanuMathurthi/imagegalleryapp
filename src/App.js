import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Search from "./components/search";
import "./App.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:imgname" element={<Search />} />
      </Routes>
    </div>
  );
}
