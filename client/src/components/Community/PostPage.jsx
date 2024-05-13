import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Card } from "antd";
import Loading from "../Loading";
import LikeButton from "./LikeButton";
import { UserContext } from "../../UserContext";
import "./Post.css";

const PostPage = () => {
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      // console.log("Params: ", id);
      try {
        const response = await axios.get(`http://localhost:4000/post/${id}`);
        setPostInfo(response.data);
        // console.log(response.data);
      } catch (e) {
        console.log("Error postPage client side");
      }
    };
    fetchData();
  }, []);
  if (!postInfo)
    return (
      <>
        <Loading />
      </>
    );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {userInfo.username === postInfo.username && (
        <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
          Edit Post
        </Link>
      )}
      <Card className="post Post">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <h1 style={{ color: "white" }}>{postInfo.title}</h1>
          <div>
            <p style={{ fontStyle: "italic", color: "white" }}>
              Author: {postInfo.username}
            </p>
            <p style={{ fontStyle: "italic", color: "white" }}>
              Posted at {postInfo.createdAt}
            </p>
          </div>
          <LikeButton />
        </div>
        <div
          className="html-div"
          dangerouslySetInnerHTML={{ __html: postInfo.content }}
        />
      </Card>
    </div>
  );
};

export default PostPage;
