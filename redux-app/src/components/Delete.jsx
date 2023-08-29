import React from "react";
import { deletePost } from "../API/Index";

export default function deleteButton({ post_id }) {
  async function handleDelete() {
    try {
      const result = await deletePost(post_id);
    } catch (error) {
      console.error(error);
    }
  }
  return <button onClick={handleDelete}>Delete Post</button>;
}
