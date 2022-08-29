import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CampusPage = () => {
  const params = useParams();
  const campuses = useSelector((state) => state.campuses);
  const campus = campuses.find((campus) => campus.id === +params.campusId);

  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <img src={campus.imageUrl} alt="campus photo" />
      <p>{campus.description}</p>

      <h2>Enrollees</h2>
      <ul>
        {campus.students?.length
          ? campus.students.map((student) => {
              return (
                <li key={student.id}>
                  <Link to={`/students/${student.id}`}>
                    {student.lastName}, {student.firstName}
                  </Link>
                </li>
              );
            })
          : "There are no enrollees!"}
      </ul>
    </div>
  );
};

export default CampusPage;
