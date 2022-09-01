import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudent } from "../store/reducers/studentReducer";
import StudentForm from "./StudentForm";

const Students = () => {
  const students = useSelector((state) => state.students);
  const campuses = useSelector((state) => state.campuses);
  const dispatch = useDispatch();

  const [shownStudents, setShownStudents] = useState(students);
  const [checked, setChecked] = useState(false);

  const handleFilter = () => {
    setChecked(!checked);
    checked
      ? setShownStudents(students)
      : setShownStudents(students.filter((student) => !student.campusId));
  };

  return (
    <>
      <main>
        <div className="list flex-column">
          <h2 className="filter">
          Show Only Unenrolled Students (
            {students.filter((student) => !student.campusId).length}){" "}
            <input
              className="checkbox"
              type="checkbox"
              onChange={handleFilter}
            ></input>
          </h2>
          {shownStudents.map((student) => {
            const studentCampus = campuses.find(
              (campus) => campus.id === student.campusId
            );

            return (
              <div className="list-item" key={student.id}>
                <h2>
                  <Link to={`/students/${student.id}`}>
                    {student.lastName}, {student.firstName}
                  </Link>{" "}
                </h2>
                <h3>{student.email}</h3>
                <p>
                  Attends:{" "}
                  {studentCampus
                    ? studentCampus.name
                    : "(student is not enrolled)"}
                </p>
                <button onClick={() => dispatch(deleteStudent(student))}>
                  Delete Student
                </button>
              </div>
            );
          })}
        </div>
        <StudentForm />
      </main>
    </>
  );
};

export default Students;
