import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CampusForm from "./CampusForm";
import { deleteCampus } from "../store/reducers/campusReducer";

const Campuses = () => {
  const campuses = useSelector((state) => state.campuses);
  const dispatch = useDispatch();
  console.dir(campuses);

  return (
    <>
      {campuses.map((campus) => {
        let enrollments = 0;
        if (campus.students) {
          enrollments = campus.students.length;
        }

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
