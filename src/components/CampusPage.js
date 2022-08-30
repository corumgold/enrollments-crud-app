import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from "./Form";

const CampusPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  //Bring in campuses and students
  const campuses = useSelector((state) => state.campuses);
  const students = useSelector((state) => state.students);
  const campus = campuses.find((campus) => campus.id === +params.campusId);

  const campusStudents = students.filter(
    (student) => student.campusId === campus.id
  );

  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <img src={campus.imageUrl} alt="campus photo" />
      <p>{campus.description}</p>

      <Form campusProp={campus} />

      <h2>Enrollees</h2>
      <ul>
        {campusStudents.length
          ? campusStudents.map((student) => {
              return (
                <li key={student.id}>
                  <Link to={`/students/${student.id}`}>
                    {student.lastName}, {student.firstName}
                  </Link>
                </li>
              );
            })
          : "There are no enrollees!"}
      </ul>
    </div>
  );
};

export default CampusPage;
