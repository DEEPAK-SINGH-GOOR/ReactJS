import React, { useState } from "react";
import {Modal } from "@mui/material";
import Form from "./Form.jsx";
import './index.css';

const CourseCard = ({ title, fee, duration, onDelete, id }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="course-card">
      <h2>{title}</h2>
      <p>Fee: ${fee}</p>
      <p>Duration: {duration} months</p>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => setOpen(true)}>Edit</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="modal-content">
          <Form initialData={{ title, fee, duration, id }} />
        </div>
      </Modal>
    </div>
  );
};

export default CourseCard;
