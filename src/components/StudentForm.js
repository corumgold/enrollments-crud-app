import React, { useState } from "react";
import { createStudent, getStudents } from "../store/reducers/studentReducer";
import { useDispatch, useSelector } from "react-redux";

const StudentForm = () => {
  // const campuses = useSelector((state) => state.campuses);

  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    campusId: null,
  });

  const dispatch = useDispatch();

  const handleFirstName = (e) => {
    setNewStudent({ ...newStudent, firstName: e.target.value });
  };

  const handleLastName = (e) => {
    setNewStudent({ ...newStudent, lastName: e.target.value });
  };

  const handleEmail = (e) => {
    setNewStudent({ ...newStudent, email: e.target.value });
  };

  // const handleCampus = (e) => {
  //   setNewStudent({ ...newStudent, campusId: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createStudent(newStudent));
    setNewStudent({
      ...newStudent,
      firstName: "",
      lastName: "",
      email: "",
    });
    dispatch(getStudents());
  };

  return (
    <form id="student-form" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        name="first Name"
        value={newStudent.firstName}
        onChange={handleFirstName}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        name="last Name"
        value={newStudent.lastName}
        onChange={handleLastName}
      />

      <label htmlFor="email">Email:</label>
      <input name="email" value={newStudent.email} onChange={handleEmail} />

      {/* <label htmlFor="campuses">Choose Campus:</label>
      <select onChange={handleCampus}>
        <option value={null}>Please Select a Campus</option>
        {campuses.map((campus) => {
          return (
            <option key={campus.id} value={campus.id}>
              {campus.name}
            </option>
          );
        })}
      </select> */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
