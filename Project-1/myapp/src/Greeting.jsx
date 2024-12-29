import React from "react";

const Greeting = ({ name }) => {
  return (
    <div>
      <h1>{name ? `Welcome, ${name}!` : "Hello, Guest!"}</h1>
    </div>
  );
};

export default Greeting;
