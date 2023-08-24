import { useState, useEffect } from "react";
import { fetchPosts } from "../API";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function getAllPosts() {
      const APIResponse = await fetchAllPosts();
      if (APIResponse.success) {
        setPlayers(APIResponse.data.posts);
      } else {
        setError(APIResponse.error.message);
      }
    }
    getAllPosts();
  }, []);

  const postsToDisplay = searchParam
    ? posts.filter(
        (post) => post.name.toLowerCase().includes(searchParam)
        // ^does this make sense? I don't want to search by name of the posts, do we?
      )
    : posts;
  return (
    <div>
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
      {postsToDisplay.map((post) => {
        return <PlayerListName key={player.id} player={player} />;
      })}
    </div>
  );
}
