import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const StudentPage = () => {
  const params = useParams();
  const students = useSelector((state) => state.students);
  const student = students.find((student) => student.id === +params.studentId);

  const schoolLink = (student) => {
    if (student.campusId) {
      return (
        <Link to={`/campuses/${student.campusId}`}>{student.campus.name}</Link>
      );
    } else return "This student is not registered in school";
  };

  return (
    <div>
      <h1>
        {student.lastName}, {student.firstName}
      </h1>
      <p>{student.email ? student.email : "No email on file"}</p>
      <p>GPA: {student.gpa ? student.gpa : "No GPA on file"}</p>
      <h2>Attends: {schoolLink(student)}</h2>
      <img src={student.imageUrl} alt="student photo" />
    </div>
  );
};

export default StudentPage;
