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
    <main>
      <div className="list flex-column">
        {campuses.map((campus) => {
          let enrollments = students.filter(
            (student) => student?.campusId === campus.id
          ).length;

          return (
            <div className="list-item" key={campus.id}>
              <h2>
                <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
              </h2>
              <h3>
                {enrollments}
                {!enrollments || enrollments > 1
                  ? " Enrollments"
                  : " Enrollment"}
              </h3>
              <p>{campus.description} </p>
              <button onClick={() => dispatch(deleteCampus(campus))}>
                Delete School
              </button>
            </div>
          );
        })}
      </div>
      <CampusForm />
    </main>
  );
};

export default Campuses;
