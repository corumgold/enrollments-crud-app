import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createStudent, updateStudent } from "../store/reducers/studentReducer";

const StudentForm = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const campuses = useSelector((state) => state.campuses);

  //Check if form is for a new student or updating an existing
  let newStudent = true;
  if (params.studentId) newStudent = false;

  const [student, setStudent] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleStudentFirstName = (e) => {
    setStudent({ ...student, firstName: e.target.value });
    setSubmitted(false);
    setValid(false);
  };

  const handleStudentLastName = (e) => {
    setStudent({ ...student, lastName: e.target.value });
    setSubmitted(false);
    setValid(false);
  };

  const handleStudentEmail = (e) => {
    setStudent({ ...student, email: e.target.value });
    setSubmitted(false);
    setValid(false);
  };

  const handleStudentGpa = (e) => {
    setStudent({ ...student, gpa: e.target.value });
    setSubmitted(false);
    setValid(false);
  };

  const handleStudentImage = (e) => {
    setStudent({ ...student, imageUrl: e.target.value });
    setSubmitted(false);
    setValid(false);
  };

  const handleStudentCampus = (e) => {
    let campusNum = Number(e.target.value);
    setStudent({ ...student, campusId: campusNum });
    setSubmitted(false);
    setValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (student.firstName && student.lastName && student.email) {
      setValid(true);
    }
    if (newStudent) {
      dispatch(createStudent({ ...student }));
    } else dispatch(updateStudent({ ...student }));
  };

  const handleClear = (e) => {
    e.preventDefault();
    setSubmitted(false);
    setValid(false);
    setStudent({
      ...student,
      firstName: null,
      lastName: null,
      email: null,
      gpa: null,
      imageUrl: null,
    });
  };

  useEffect(() => {
    if (!newStudent) {
      const getData = async () => {
        const studentData = await axios.get(
          `/api/students/${params.studentId}`
        );
        setStudent(studentData.data);
      };
      getData();
    }
  }, []);

  console.log(valid, submitted)

  return (
    <form className="form flex-column">
      <h2>{newStudent ? "Create New Student" : "Update Student"}</h2>
      {submitted && valid ? (
        <div className="submit-message">
          Student {newStudent ? "Created!" : "Updated!"}
        </div>
      ) : null}
      <label htmlFor="firstName">First Name:</label>
      <input
        name="first Name"
        value={student.firstName || ""}
        onChange={handleStudentFirstName}
      />
      {!student.firstName && submitted ? (
        <span>First Name is Required</span>
      ) : null}

      <label htmlFor="lastName">Last Name:</label>
      <input
        name="last Name"
        value={student.lastName || ""}
        onChange={handleStudentLastName}
      />
      {!student.lastName && submitted ? (
        <span>Last Name is Required</span>
      ) : null}

      <label htmlFor="email">Email:</label>
      <input
        name="email"
        value={student.email || ""}
        onChange={handleStudentEmail}
      />
      {!student.email && submitted ? <span>Email is Required</span> : null}

      <label htmlFor="gpa">GPA:</label>
      <input name="gpa" value={student.gpa || ""} onChange={handleStudentGpa} />

      <label htmlFor="imageUrl">Image URL:</label>
      <input
        name="imageUrl"
        value={student.imageUrl || ""}
        onChange={handleStudentImage}
      />

      <label htmlFor="campuses">Choose Campus:</label>
      <select onChange={handleStudentCampus}>
        <option value={null}>Please Select a Campus</option>
        {campuses.map((campus) => {
          return (
            <option key={campus.id} value={campus.id || ""}>
              {campus.name}
            </option>
          );
        })}
      </select>

      {submitted && valid && newStudent ? (
        <button onClick={handleClear}>Clear</button>
      ) : (
        <button onClick={handleSubmit}>
          {newStudent ? "Create" : "Update"}
        </button>
      )}
    </form>
  );
};

export default StudentForm;
