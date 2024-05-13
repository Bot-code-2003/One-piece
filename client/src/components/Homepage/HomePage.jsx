import React, { useState } from "react";
import { Row, Col, Typography } from "antd";
import { Card } from "antd";
import data from "../../data/homepage_data.json";
import "./HomaPage.css";

const HomePage = () => {
  const { Title } = Typography;
  const [selectedButton, setSelectedButton] = useState("onepiece");
  function handleClick(slug) {
    setSelectedButton(slug);
  }
  const selectedButtonData = data.sections.find(
    (section) => selectedButton === section.slug
  );

  return (
    <>
      <div className="homepage-container">
        <div className="homepage-container-buttons">
          <button
            className={selectedButton === "onepiece" ? "active" : ""}
            onClick={() => handleClick("onepiece")}
          >
            Onepiece
          </button>
          <button
            className={selectedButton === "worldbuilding" ? "active" : ""}
            onClick={() => handleClick("worldbuilding")}
          >
            World Building
          </button>
          <button
            className={selectedButton === "powersystem" ? "active" : ""}
            onClick={() => handleClick("powersystem")}
          >
            Power System
          </button>
          <button
            className={selectedButton === "powerhirarchy" ? "active" : ""}
            onClick={() => handleClick("powerhirarchy")}
          >
            Power Hirarchy
          </button>
          <button
            className={selectedButton === "arcs" ? "active" : ""}
            onClick={() => handleClick("arcs")}
          >
            Arcs
          </button>
          <button
            className={selectedButton === "filler" ? "active" : ""}
            onClick={() => handleClick("filler")}
          >
            Fillers
          </button>
        </div>
        <div className="homepage-container-data">
          <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Col sm={24} xs={24} lg={24}>
              <Card className="heading-card card">
                <h1>{selectedButtonData.title}</h1>
                <h2>{selectedButtonData.description}</h2>
              </Card>
            </Col>
          </Row>
          <Row gutter={[20, 20]}>
            {selectedButtonData.info.map((detail) => (
              <Col
                sm={24}
                xs={24}
                style={{ display: "flex", justifyContent: "center" }}
                className="card-container"
              >
                <Card
                  key={detail.subtitle}
                  className="home-card-body card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    textShadow: "2px 2px 4px black",
                  }}
                >
                  <h1>{detail.subtitle}</h1>
                  <p>{detail.content}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default HomePage;
