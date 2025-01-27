import React, { useState } from "react";
import API from "./config/api.js";
import './index.css';

const Form = () => {
  const [course, setCourse] = useState({
    title: "",
    fee: "",
    duration: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const createCourse = async () => {
    try {
      await API.post("/courses", course);
      setCourse({ title: "", fee: "", duration: "" });
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="title" placeholder="Course Title" value={course.title} onChange={handleInput}/>

      <input type="number" name="fee" placeholder="Fee" value={course.fee} onChange={handleInput} />

      <input type="text" name="duration" placeholder="Duration (months)" value={course.duration} onChange={handleInput}/>
      
      <button type="submit">Add Course</button>
    </form>
  );
};

export default Form;
