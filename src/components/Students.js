import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StudentForm from "./StudentForm";

const Students = () => {
  const students = useSelector((state) => state.students);

  return (
    <>
      {students.map((student) => {
        return (
          <div key={student.id}>
            <h2>
              <Link to={`/students/${student.id}`}>
                {student.lastName}, {student.firstName}
              </Link>{" "}
              - attends{" "}
              {student.campus
                ? student.campus.name
                : "(student is not enrolled)"}
            </h2>
            <p>{student.email}</p>
          </div>
        );
      })}
      <StudentForm />
    </>
  );
};

export default Students;
