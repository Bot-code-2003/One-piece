import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://one-piece-api-ten.vercel.app/post");
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.length > 0 &&
        posts.map((post) => (
          <Post
            key={post._id}
            title={post.title}
            content={post.content}
            username={post.username}
            time={post.createdAt}
            id={post._id}
            likes = {post.likes}
          />
        ))}
    </div>
  );
};

export default Posts;
