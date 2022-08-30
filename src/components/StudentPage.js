import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import StudentForm from "./StudentForm";

const StudentPage = () => {
  const params = useParams();

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gpa: "",
    imageUrl: "",
  });

  const schoolLink = (student) => {
    if (student.campusId) {
      return (
        <Link to={`/campuses/${student.campusId}`}>{student.campus.name}</Link>
      );
    } else return "This student is not registered in school";
  };

  useEffect(() => {
    const getData = async () => {
      const studentData = await axios.get(`/api/students/${params.studentId}`);
      setStudent({ ...studentData.data });
    };
    getData();
  }, []);

  return (
    <div>
      <h1>
        {student.lastName}, {student.firstName}
      </h1>
      <p>{student.email ? student.email : "No email on file"}</p>
      <p>GPA: {student.gpa ? student.gpa : "No GPA on file"}</p>
      <h2>Attends: {schoolLink(student)}</h2>
      <img src={student.imageUrl} alt="student photo" />

      <StudentForm />
    </div>
  );
};

export default StudentPage;
