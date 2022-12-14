import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCampus } from "../store/reducers/campusReducer";
import CampusForm from "./CampusForm";
import { checkHasStudents } from "../helperFuncs";

const Campuses = () => {
  const campuses = useSelector((state) => state.campuses);
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const [shownCampuses, setShownCampuses] = useState(campuses);
  const [checked, setChecked] = useState(false);

  const handleCampusFilter = () => {
    setChecked(!checked);
  };

  //Check which campuses to show based on campus filter
  useEffect(() => {
    if (!checked) {
      setShownCampuses(campuses);
    } else
      setShownCampuses(
        campuses.filter((campus) => !checkHasStudents(campus, students))
      );
  }, [checked, campuses, students]);

  return (
    <main>
      <div className="list flex-column">
        <h2 className="filter">
          No Enrollments Only (
          {
            campuses.filter((campus) => !checkHasStudents(campus, students))
              .length
          }
          ){" "}
          <input
            className="checkbox"
            type="checkbox"
            onChange={handleCampusFilter}
          ></input>
        </h2>
        {shownCampuses.map((campus) => {
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
