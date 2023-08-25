import { Routes, Route, Link } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import "./App.css";
// import Home from "./components/home.jsx";
// import SinglePost from "./components/singlePost";

export default function App() {
  // console.log("app.jsx is loading!!!!");
  return (
    <>
      <header>
        {/* <h1> Stranger's Things</h1> */}
        <Link to="/AllPosts"> Posts </Link>
      </header>

      <div>
        <Routes>
          <Route path="/AllPosts" element={<AllPosts />} />
        </Routes>
      </div>
    </>
  );
}
