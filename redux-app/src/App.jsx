import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import Home from "./components/Home";
import "./App.css";

export default function App() {
  return (
    <>
      <header>
        <Link to="/AllPosts" className="posts">
          {" "}
          Posts{" "}
        </Link>
        <Link to="/Home" className="home">
          {" "}
          Home{" "}
        </Link>
        <h1> Stranger's Things</h1>
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
