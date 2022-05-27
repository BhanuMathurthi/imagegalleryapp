import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Search from "./components/search";
import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:imgname" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}
