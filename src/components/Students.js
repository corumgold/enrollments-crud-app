import React from "react";
import { useSelector } from "react-redux";

const Students = () => {
  const students = useSelector((state) => state.students);
  console.dir(students);

  return (
    <>
      {students.map((student) => {
        return (
          <div key={student.id}>
            <h2>
              {student.lastName}, {student.firstName} - attends{" "}
              {student.campus.name}
            </h2>
            <p>{student.email}</p>
          </div>
        );
      })}
    </>
  );
};

export default Students;
