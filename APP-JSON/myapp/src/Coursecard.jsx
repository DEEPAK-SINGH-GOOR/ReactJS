import React from "react";
import './index.css';

const CourseCard = ({ title, fee, duration, onDelete, id }) => {
  return (
    <div className="course-card">
      <h2>{title}</h2>
      <p>Fee: ${fee}</p>
      <p>Duration: {duration}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default CourseCard;
