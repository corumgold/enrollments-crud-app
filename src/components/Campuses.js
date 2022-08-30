import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCampus } from "../store/reducers/campusReducer";
import CampusForm from "./CampusForm";

const Campuses = () => {
  const campuses = useSelector((state) => state.campuses);
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();




  return (
    <>
      {campuses.map((campus) => {
        let enrollments = students.filter(
          (student) => student?.campusId === campus.id
        ).length;

        return (
          <div key={campus.id}>
            <h2>
              <Link to={`/campuses/${campus.id}`}>
                {campus.name} ({enrollments}
                {!enrollments || enrollments > 1
                  ? " Enrollments"
                  : " Enrollment"}
                )
              </Link>
            </h2>
            <img src={campus.imageUrl} alt="campus photo" />
            <p>
              {campus.description}{" "}
              <button onClick={() => dispatch(deleteCampus(campus))}>X</button>
            </p>
          </div>
        );
      })}

      <h2>New Campus Form</h2>
      <CampusForm />
    </>
  );
};

export default Campuses;
