import React from "react";
import { Routes, Route } from "react-router-dom";
import PreLoader from "./components/PreLoader";
import HomePage from "./components/Homepage/HomePage";
import Navbar from "./components/Navbar";
import Charecters from "./components/Charecters/Charecters";
import Register from "./components/Authentication/Register";
import Community from "./components/Community/Community";
import Login from "./components/Authentication/Login";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import Burger from "./components/Burger";

const App = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 767.98 });
  return (
    <div className="App">
      <PreLoader />
      {isSmallDevice ? <Burger /> : <Navbar />}
      <div className="pages">
        <Routes>
          <Route path="/charecters" exact element={<Charecters />} />
          <Route path="/community" exact element={<Community />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
