import { Routes, Route } from "react-router";
import "./App.css";
import AllPosts from "./components/AllPosts";
// import SinglePost from "./components/singlePost";
// import Nav from "./components/Nav";

function App() {
  console.log("app.jsx is loading!!!!");
  return (
    <div className="App">
      <h1> Stranger's Things</h1>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<AllPosts />} />
        {/* <Route path="/id" element={<SinglePost />} /> */}
      </Routes>
    </div>
  );
}

export default App;
