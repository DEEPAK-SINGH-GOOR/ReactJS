import React, { useEffect, useState } from "react";
import API from "./config/api.js";
import CourseCard from "./Coursecard.jsx";

const Courses = () => {
  const [data, setData] = useState([]);

  const getCourses = async () => {
    try {
      let res = await API.get("/courses");
      setData(res.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/courses/${id}`);
    } catch (error) {
      console.log("not delete", error);
    }
  };
  

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div>
      {data.map((ele) => (
        <CourseCard key={ele.id} {...ele} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Courses;
