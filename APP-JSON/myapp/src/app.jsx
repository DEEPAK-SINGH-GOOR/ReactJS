import React from "react";
import Form from "./Form.jsx";
import Courses from "./Courses.jsx";

const App = () => {
  return (
    <div className="app">
      <h1>Course Management</h1>
      <Form />
      <Courses />
    </div>
  );
};

export default App;
