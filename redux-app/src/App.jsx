import { Routes, Route, Link } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import "./App.css";
import { useState } from "react";
// import Authenticate from "./components/Authentification";
// import Home from "./components/home.jsx";
// import SinglePost from "./components/singlePost";

export default function App() {
  // const [token, setToken] = useState(null);
  return (
    <>
      <header>
        <h1> Stranger's Things</h1>
        <Link to="/AllPosts"> Posts </Link>
        {/* <Link to="/Home"> Home </Link> */}
      </header>

      <div>
        <Routes>
          <Route path="/AllPosts" element={<AllPosts />} />
        </Routes>
      </div>
    </>
  );
}

// token={token} setToken={setToken}
