
// // TechStackItem.js
// import React from "react";

// const TechStackItem = ({ title, onSelect }) => {
//   return (
//     <div className="tech-stack-item" onClick={() => onSelect(title)}>
//       <h3>{title}</h3>
//     </div>
//   );
// };

// export default TechStackItem;


// TechStackItem.js
import React, { useState } from "react";
import "./techStack_container.css";

const TechStackItem = ({ title, onSelect, isActive }) => {
  return (
    <div
      className={`tech-stack-item ${isActive ? "active" : ""}`}
      onClick={() => onSelect(title)}
    >
      <h3>{title}</h3>
    </div>
  );
};

export default TechStackItem;
