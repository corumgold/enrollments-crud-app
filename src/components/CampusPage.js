import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CampusPage = () => {
  const params = useParams();
  const campuses = useSelector((state) => state.campuses);
  const campus = campuses.find((campus) => campus.id === +params.id);
  console.dir(campus);

  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <img src={campus.imageUrl} alt="campus photo" />
      <p>{campus.description}</p>

      <h2>Enrollees</h2>
      {campus.students.map((student) => {
        return (
          <p>
            {student.lastName}, {student.firstName}
          </p>
        );
      })}
    </div>
  );
};

export default CampusPage;
