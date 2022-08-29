import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CampusForm from "./CampusForm";

const Campuses = () => {
  const campuses = useSelector((state) => state.campuses);

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
          </div>
        );
      })}

      <h2>New Campus Form</h2>
      <CampusForm />
    </>
  );
};

export default Campuses;
