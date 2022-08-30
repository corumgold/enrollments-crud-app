import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudent } from "../store/reducers/studentReducer";
import StudentForm from "./StudentForm";

const Students = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  //NEED TO FIX WEIRD ISSUE WHEN LINKING BACK HERE FROM UPDATED CAMPUSES


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
            <p>
              {student.email}{" "}
              <button onClick={() => dispatch(deleteStudent(student))}>
                X
              </button>
            </p>
          </div>
        );
      })}
      <StudentForm />
    </>
  );
};

export default Students;
