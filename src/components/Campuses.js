import React from "react";
import { useSelector } from "react-redux";

const Campuses = () => {
  const campuses = useSelector((state) => state.campuses);

  return (
    <>
      {campuses.map((campus) => {
        const enrollments = campus.students.length;

        return (
          <div key={campus.id}>
            <h2>
              {campus.name} ({enrollments}
              {!enrollments || enrollments > 1 ? " Enrollments" : " Enrollment"})
            </h2>
            <p>{campus.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Campuses;
