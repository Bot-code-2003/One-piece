import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Card } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function updatePost(e) {
    e.preventDefault();
  }
  useEffect(() => {
    const fetchData = async () => {
      // console.log("Params: ", id);
      try {
        const response = await axios.get(`http://localhost:4000/post/${id}`);
        console.log("Response data: ", response.data);
        setPostInfo(response.data);

        console.log("postInfo:", postInfo);
      } catch (e) {
        console.log("Error postPage client side");
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Card className="posts-container">
        <form
          onSubmit={updatePost}
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Post Title"
            value={postInfo.title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              minWidth: "90%",
              backgroundColor: "rgb(0, 0,0,0.5 )",
              color: "white",
            }}
          />
          <ReactQuill
            theme="snow"
            value={postInfo.content}
            onChange={(newValue) => setContent(newValue)}
            style={{
              width: "100%",
              color: "white",
              backgroundColor: "black",
              fontWeight: "normal",
            }}
          />

          <button style={{ minWidth: "50%" }}>Publish</button>
        </form>
      </Card>
    </div>
  );
};

export default EditPost;
