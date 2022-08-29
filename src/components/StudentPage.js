import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const StudentPage = () => {
  const params = useParams();
  const students = useSelector((state) => state.students);
  const student = students.find((student) => student.id === +params.studentId);
  console.dir(student);

  return (
    <div>
      <h1>
        {student.lastName}, {student.firstName}
      </h1>
      <p>{student.email}</p>
      <h2>
        Attends <Link to={`/campuses/${student.campusId}`}>{student.campus.name}</Link>
      </h2>
      <img src={student.imageUrl} alt="student photo" />
    </div>
  );
};

export default StudentPage;
