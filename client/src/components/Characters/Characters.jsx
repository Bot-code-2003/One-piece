import React, { useState } from "react";
import { Row, Col, Typography, Input, Card } from "antd";
import data from "../../data/characters_data.json";
import "./Characters.css";
import { SearchOutlined } from "@ant-design/icons";

const Characters = () => {
  const { Title } = Typography;
  const [searchTerm, setSearchTerm] = useState("");

  // Filter character data based on search term
  const filteredCharacters =
    searchTerm.trim() === ""
      ? data.sections.filter(
          (section) => section.crew_name === "Straw Hat Pirates"
        )
      : data.sections.filter(
          (section) =>
            section.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            section.crew_name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  //Convert to Title Cased
  function toTitleCase(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return (
    <>
      <div className="character-page">
        {/* Search Bar */}
        <div className="character-page-search">
          <Input
            style={{
              border: "2px solid black",
              padding: "10px 40px",
              backgroundColor: "rgb(255, 255, 255)",
              color: "black",
              marginBottom: "20px",
              width: "350px",
            }}
            placeholder="Search by Character or Crew Name"
            prefix={<SearchOutlined />}
            // Handle input change
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <div className="character-page-data">
          <Row gutter={[20, 20]}>
            {/* Render filtered character cards */}
            {filteredCharacters.map((selectedCharacterData, index) => (
              <Col key={index} sm={24} xs={24}>
                <Card
                  className="card-body"
                  style={{
                    width: "100%",
                    minHeight: "600px",
                    backgroundColor: "rgb(0, 0, 0, 0)",
                    color: "white",
                    textShadow: "2px 2px 4px black",
                  }}
                >
                  <Row>
                    <Col span={24}>
                      <img
                        className="card-img"
                        src={selectedCharacterData.image}
                      />
                      {/* Render character details */}
                      <div
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        {selectedCharacterData && (
                          <Card className="card detail-card">
                            {/* Name */}
                            <h1>{selectedCharacterData.name}</h1>
                            {/* Crew Name */}
                            <strong>Crew Name:</strong>{" "}
                            {selectedCharacterData.crew_name} <br />
                            {/* Bounty */}
                            <strong>Bounty:</strong>{" "}
                            {selectedCharacterData.bounty} <br />
                            {/* Dob */}
                            <strong>Date of Birth:</strong>{" "}
                            {selectedCharacterData.dob} <br />
                            {/* Age */}
                            <strong>Age:</strong> {selectedCharacterData.age}{" "}
                            <br />
                            {/* Fruit */}
                            <strong>Devil Fruit User:</strong>{" "}
                            {selectedCharacterData.devil_fruit_user} <br />
                            <strong>Fruit:</strong>{" "}
                            {selectedCharacterData.fruit} <br />
                          </Card>
                        )}

                        {selectedCharacterData && (
                          <Card className="detail-card card">
                            {/* Powers */}
                            <h1>
                              {selectedCharacterData.powers && (
                                <strong>Powers:</strong>
                              )}
                            </h1>
                            {selectedCharacterData.powers.map(
                              (power, index) => (
                                <span key={index}>
                                  {power.value}
                                  <br />
                                </span>
                              )
                            )}
                            <br />
                          </Card>
                        )}
                      </div>
                    </Col>
                    <Col></Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Characters;
