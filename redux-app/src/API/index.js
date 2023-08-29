const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF`;
const URL_POSTS = `https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/posts`;
import { getToken } from "../components/Authenticate";

// ===============See all posts===========
export async function fetchAllPosts() {
  try {
    const response = await fetch(`${URL_POSTS}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("can't do it!", error);
  }
}

// hard code in the authentication for the update posts

export async function deletePost(post_id) {
  const authToken = getToken();

  try {
    const response = await fetch(`${BASE_URL}/posts/${post_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
