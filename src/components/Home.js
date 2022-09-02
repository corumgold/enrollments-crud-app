import React from "react";

const Home = () => {
  return (
    <div className="home flex-column center">
      <h1>Junior Phase Final Project</h1>
      <h2>By Cory Gold</h2>
      <h3>August, 2022</h3>
      <p>
        This project is designed to mimic the interface of an application that
        manages different school campuses as well as the students enrolled.
      </p>
      <p>Key Features:</p>
      <ul>
        <li>Create, Read, Update, and Delete campuses/students</li>
        <li>Intuitive, mobile-friendly interface</li>
        <li>Sort students/campuses by enrollment status</li>
        <li>Precise form validation</li>
        <li>Addresses link to Google Maps for driving directions</li>
      </ul>
      <p>
        Fun fact: Each of the campuses listed in the seed file is an actual
        school that I have attended!
      </p>
    </div>
  );
};

export default Home;
