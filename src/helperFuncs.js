import React from "react";
import { Link } from "react-router-dom";

// CAMPUSES

export const checkHasStudents = (campus, students) => {
  return students.find((student) => student.campusId === campus.id);
};

//STUDENT PAGE

export const schoolLink = (student) => {
  if (student.campusId) {
    return (
      <Link to={`/campuses/${student.campusId}`}>{student.campus.name}</Link>
    );
  } else return "This student is not registered in school";
};

//FORMS

export const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};
