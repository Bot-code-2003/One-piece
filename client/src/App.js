import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import PreLoader from "./components/PreLoader";
import HomePage from "./components/Homepage/HomePage";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters/Characters";
import Register from "./components/Authentication/Register";
import Community from "./components/Community/Community";
import Login from "./components/Authentication/Login";
import { useMediaQuery } from "react-responsive";
import Burger from "./components/Burger";
import CreatePost from "./components/Community/CreatePost";
import Message from "./components/Community/Message";
import { UserContext } from "./UserContext";
import PostPage from "./components/Community/PostPage";
import EditPost from "./components/Community/EditPost";
import "./App.css";

const App = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 767.98 });
  const { userInfo } = useContext(UserContext);

  //Log the userInfo
  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div className="App">
      <PreLoader />
      {isSmallDevice ? <Burger /> : <Navbar />}
      <div className="pages">
        <Routes>
          <Route path="/Characters" element={<Characters />} />
          <Route path="/community" element={<Community />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route
            path="/create"
            // Conditional rendering (Only logged in users can access)
            element={userInfo?.username ? <CreatePost /> : <Message />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
