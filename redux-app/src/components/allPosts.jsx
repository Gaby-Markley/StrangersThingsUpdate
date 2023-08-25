import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API/Index";

export default function allPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function getAllPosts() {
      const APIResponse = await fetchAllPosts();
      if (APIResponse.success) {
        setPosts(APIResponse.data.posts);
      } else {
        setError(APIResponse.error.message);
      }
    }

    getAllPosts();
  }, []);
  // SEARCH BAR COMPONENT
  const postsToDisplay = searchParam
    ? posts.filter((post) => post.title.toLowerCase().includes(searchParam))
    : posts;

  return (
    <div>
      {/* move to search bar component */}
      <div>
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
      </div>
      {error && <p>{error}</p>}
      {postsToDisplay.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.location}</p>
          <p>{post.price}</p>
          <p>{post.active}</p>
          <p>{post.createdAt}</p>
          <p>{post.updatedAt}</p>
        </div>
      ))}
    </div>
  );
}
