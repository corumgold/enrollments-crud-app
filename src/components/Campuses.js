import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CampusForm from "./CampusForm";
import { deleteCampus } from "../store/reducers/campusReducer";

const Campuses = () => {
  const campuses = useSelector((state) => state.campuses);
  const dispatch = useDispatch();

  return (
    <>
      {campuses.map((campus) => {
        const enrollments = campus.students?.length;

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
            <p>{campus.description}</p>
            <button onClick={() => dispatch(deleteCampus(campus))}>
              Delete Campus
            </button>
          </div>
        );
      })}

      <h2>New Campus Form</h2>
      <CampusForm />
    </>
  );
};

export default Campuses;
