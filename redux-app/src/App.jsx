import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AllPosts from "./components/AllPosts"; // Corrected component name
import Home from "./components/home"; // Corrected component name
import "./App.css";

export default function App() {
  return (
    <>
      <header>
        <p>
          <Link to="/AllPosts" className="posts">
            {" "}
            Posts{" "}
          </Link>
          <Link to="/Home" className="home">
            {" "}
            Home{" "}
          </Link>
          <h1> Stranger's Things</h1>
        </p>
      </header>

      <div>
        <Routes>
          <Route path="/AllPosts" element={<AllPosts />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}
