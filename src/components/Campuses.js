import React from "react";
import { useSelector } from "react-redux";

const Campuses = () => {
  const campuses = useSelector((state) => state.campuses);

  return (
    <>
      {campuses.map((campus) => {
        return (
          <div key={campus.id}>
            <h2>{campus.name}</h2>
            <p>{campus.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Campuses;
