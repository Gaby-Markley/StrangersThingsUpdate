const COHORT_NAME = "22306-GHP-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

// ===============See all posts===========
export async function fetchPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
// ================See Single Post ========
// in puppy bowl the id is coming from the front end, what does that mean???
export async function fetchSinglePost(id) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

// =============Update Post ===============
// this requires a token but I don't know how to do token. Ask someone else to explain or rewatch the video

const updatePost = async (title, description, price, location, willDeliver) => {
  try {
    // You will need to insert a variable into the fetch template literal
    // in order to make the POST_ID dynamic.
    // 5e8d1bd48829fb0017d2233b is just for demonstration.
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: willDeliver,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
