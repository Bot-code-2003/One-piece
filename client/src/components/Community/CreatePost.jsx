import React from "react";
import { Card } from "antd";

const CreatePost = () => {
  return (
    <div>
      <Card className="posts-container">
        <form
          action=""
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
            style={{
              minWidth: "90%",
              backgroundColor: "rgb(0, 0,0,0.5 )",
              color: "white",
            }}
          />
          <textarea
            type="text"
            placeholder="Post Content"
            rows={25}
            cols={52}
            style={{
              backgroundColor: "rgb(0, 0,0,0.5 )",
              color: "white",
              minWidth: "90%",
              borderRadius: "10px",
              padding: "10px",
            }}
          />
          <button style={{ minWidth: "50%" }}>Publish</button>
        </form>
      </Card>
    </div>
  );
};

export default CreatePost;
