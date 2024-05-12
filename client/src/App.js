import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PreLoader from "./components/PreLoader";
import HomePage from "./components/Homepage/HomePage";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters/Characters";
import Register from "./components/Authentication/Register";
import Community from "./components/Community/Community";
import Login from "./components/Authentication/Login";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import Burger from "./components/Burger";
import CreatePost from "./components/Community/CreatePost";
import { UserContextProvider } from "./UserContext";

const App = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 767.98 });
  return (
    <UserContextProvider>
      <div className="App">
        <PreLoader />
        {isSmallDevice ? <Burger /> : <Navbar />}
        <div className="pages">
          <Routes>
            <Route path="/Characters" exact element={<Characters />} />
            <Route path="/community" exact element={<Community />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/" exact element={<HomePage />} />
            <Route path="/create" exact element={<CreatePost />} />
          </Routes>
        </div>
      </div>
    </UserContextProvider>
  );
};

export default App;
