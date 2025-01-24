import React, { useState } from "react";
import API from "./config/api.js";
import './index.css';

const Form = ({ initialData = {} }) => {

  const [course, setCourse] = useState({
    title: initialData.title ? initialData.title : "",
    fee: initialData.fee ? initialData.fee : "",
    duration: initialData.duration ? initialData.duration : "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const createCourse = async (course) => {
    try {
      if (initialData.id) {
        await API.patch(`/courses/${initialData.id}`, course);
      } else {
        await API.post("/courses", course);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse(course);
    setCourse({ title: "", fee: "", duration: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="title" placeholder="Course Title" value={course.title} onChange={handleInput} />

      <input type="number" name="fee" placeholder="Fee" value={course.fee} onChange={handleInput} />

      <input type="text" name="duration" placeholder="Duration (months)" value={course.duration} onChange={handleInput} />

      <button type="submit">Add</button>
    </form>
  );
};
export default Form;
