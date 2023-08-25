const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF`;
const URL_POSTS = `https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/posts`;

// ===============See all posts===========
export async function fetchAllPosts() {
  try {
    const response = await fetch(`${URL_POSTS}`);
    const result = await response.json();
    // console.log("Hey!");
    return result;
  } catch (error) {
    console.error("can't do it!", error);
  }
}

// hard code in the authentication for the update posts
