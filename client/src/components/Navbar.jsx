import React, { useState } from "react";
import { Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const { Title } = Typography;

  // Get selected page from local storage, defaulting to "Home" if not present
  const [selectedPage, setSelectedPage] = useState(
    localStorage.getItem("selectedPage") || "Home"
  );

  // Update selected page in local storage and state
  function handleClick(link) {
    setSelectedPage(link);
    localStorage.setItem("selectedPage", link); //key: selectedPage, value: 'link'
  }

  return (
    <div className="navbar">
      <Row>
        <Col span={8}>
          <Title className="item1" level={4}>
            OnePiece
          </Title>
        </Col>
        <Col className="navbar-items" span={16}>
          <Title
            className={selectedPage === "Home" ? "item current-page" : "item"}
            onClick={() => handleClick("Home")}
            level={4}
          >
            <Link className="link" to="/">
              Home
            </Link>
          </Title>
          <Title
            className={
              selectedPage === "Characters" ? "item current-page" : "item"
            }
            onClick={() => handleClick("Characters")}
            level={4}
          >
            <Link className="link" to="/charecters">
              Characters
            </Link>
          </Title>
          <Title
            className={
              selectedPage === "Community" ? "item current-page" : "item"
            }
            onClick={() => handleClick("Community")}
            level={4}
          >
            <Link to="/community" className="link">
              Community
            </Link>
          </Title>
          <Title
            className={selectedPage === "Login" ? "item current-page" : "item"}
            onClick={() => handleClick("Login")}
            level={4}
          >
            <Link to="/login" className="link">
              Login
            </Link>
          </Title>
          <Title
            className={
              selectedPage === "Register" ? "item current-page" : "item"
            }
            onClick={() => handleClick("Register")}
            level={4}
          >
            <Link to="/register" className="link">
              Register
            </Link>
          </Title>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
