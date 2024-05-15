import axios from "axios";
import React, { useState, useEffect } from "react";

const LikeButton = ({ Post_likes, Post_id, UserInfo, Post_alreadyLiked }) => {
  const [likes, setLikes] = useState(Post_likes);
  const [isClicked, setIsClicked] = useState(false);
  const [alreadyLiked, setAlreadyLiked] = useState(Post_alreadyLiked)

  useEffect(() => {
    const fetchInitialLikeState = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/post/${Post_id}/like-state`,
          {
            params: { userId: UserInfo },
          }
        );
        if (response.status === 200) {
          setIsClicked(response.data.isLiked);
        }
      } catch (e) {
        console.log("Error fetching initial like state", e);
      }
    };

    fetchInitialLikeState();
  }, [Post_id, UserInfo]);

  const handleClick = async () => {
    if (!alreadyLiked){
    try {
      const response = await axios.patch(
        `http://localhost:4000/post/${Post_id}/like`,
        {
          increment: !isClicked,
          userId: UserInfo,
        }
      );
      if (response.status === 200) {
        setLikes(response.data.likes);
        setIsClicked(!isClicked);
      }
    } catch (e) {
      console.log("Error client side like button", e);
    }
  }else{
    alert("Already Liked")
  }
  };

  const handleNotLoggedinClick = () => {
    alert("Login to like!!");
  };

  return (
    <button
      className={`like-button like-btn ${isClicked && "liked"}`}
      onClick={UserInfo ? handleClick : handleNotLoggedinClick}
    >
      <span className="likes-counter">{`Like | ${likes}`}</span>
    </button>
  );
};

export default LikeButton;
