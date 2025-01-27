import React, { useEffect, useState } from "react";
import API from "./config/api.js";
import CourseCard from "./CourseCard.jsx";

const Courses = () => {
  const [data, setData] = useState([]);

  const getCourses = async () => {
    try {
      const res = await API.get("/courses");
      setData(res.data);
      getCourses()

    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/courses/${id}`);
      setData(data.filter((course) => course.id !== id));
      getCourses()

    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div>
      {data.map((course) => (
        <CourseCard key={course.id} {...course} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Courses;
