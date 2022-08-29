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
      <p>
        {campus.students.length
          ? campus.students.map((student) => {
              return (
                <>
                  {student.lastName}, {student.firstName}
                </>
              );
            })
          : "There are no enrollees!"}
      </p>
    </div>
  );
};

export default CampusPage;
