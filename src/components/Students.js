import React from "react";
import { useSelector } from "react-redux";

const Students = () => {
  const students = useSelector((state) => state.students);

  return (
    <>
      {students.map((student) => {
        return (
          <div key={student.id}>
            <h2>
              {student.lastName}, {student.firstName}
            </h2>
            <p>{student.email}</p>
          </div>
        );
      })}
    </>
  );
};

export default Students;
