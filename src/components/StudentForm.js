import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { createStudent, updateStudent } from "../store/reducers/studentReducer";

const StudentForm = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const campuses = useSelector((state) => state.campuses);

  //Check if form is for a new student or updating an existing
  let newStudent = true;
  if (params.studentId) newStudent = false;

  const [student, setStudent] = useState({});

  const handleStudentFirstName = (e) => {
    setStudent({ ...student, firstName: e.target.value });
  };

  const handleStudentLastName = (e) => {
    setStudent({ ...student, lastName: e.target.value });
  };

  const handleStudentEmail = (e) => {
    setStudent({ ...student, email: e.target.value });
  };

  const handleStudentGpa = (e) => {
    setStudent({ ...student, gpa: e.target.value });
  };

  const handleStudentImage = (e) => {
    setStudent({ ...student, imageUrl: e.target.value });
  };

  const handleStudentCampus = (e) => {
    let campusNum = Number(e.target.value)
    setStudent({ ...student, campusId: campusNum });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newStudent) {
      dispatch(createStudent({ ...student }));
    } else dispatch(updateStudent({ ...student }));
    setStudent({
      ...student,
      firstName: "",
      lastName: "",
      email: "",
      gpa: "",
      imageUrl: "",
    });
    navigate("/students");
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

  return (
    <form className="form flex-column">
      <h2>{newStudent ? "Create New Student" : "Update Student"}</h2>
      <label htmlFor="firstName">First Name:</label>
      <input
        name="first Name"
        value={student.firstName || ""}
        onChange={handleStudentFirstName}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        name="last Name"
        value={student.lastName || ""}
        onChange={handleStudentLastName}
      />

      <label htmlFor="email">Email:</label>
      <input
        name="email"
        value={student.email || ""}
        onChange={handleStudentEmail}
      />

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

      <button onClick={handleSubmit}>{newStudent ? "Create" : "Update"}</button>
    </form>
  );
};

export default StudentForm;
