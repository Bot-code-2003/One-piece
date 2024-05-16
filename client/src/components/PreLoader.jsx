// PreLoader.jsx

import React, { useState, useEffect } from "react";
import "./preloader.css"; // Import the CSS file

const PreLoader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader-container ${showLoader ? "" : "hidden"}`}>
      <h1 className="tulpen-one-regular">Website by Dharmadeep Madisetty</h1>
    </div>
  );
};

export default PreLoader;
