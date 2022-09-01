import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import StudentForm from "./StudentForm";
import { useSelector } from "react-redux";
import { schoolLink } from "../helperFuncs";

const StudentPage = () => {
  const students = useSelector((state) => state.students);
  const params = useParams();

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gpa: null,
    imageUrl: null
  });
  

  useEffect(() => {
    const getData = async () => {
      const studentData = await axios.get(`/api/students/${params.studentId}`);
      setStudent({ ...studentData.data });
    };
    getData();
  }, [students]);

  return (
    <div className="single-page flex-column center">
      <section className="single-header">
        <div className="info flex-column center">
          <h1>
            {student.lastName}, {student.firstName}
          </h1>
          <p>{student.email ? student.email : "No email on file"}</p>
          <p>GPA: {student.gpa ? student.gpa : "No GPA on file"}</p>
          <h2>{schoolLink(student)}</h2>
        </div>
        <img src={student.imageUrl} alt="student photo" />
      </section>
      <StudentForm />
    </div>
  );
};

export default StudentPage;
