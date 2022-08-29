import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { updateCampus, getCampuses } from "../store/reducers/campusReducer";


const CampusPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const campuses = useSelector((state) => state.campuses);

  const [campus, setCampus] = useState({});

  const handleCampusName = (e) => {
    setCampus({ ...campus, name: e.target.value });
  };

  const handleCampusAddress = (e) => {
    setCampus({ ...campus, address: e.target.value });
  };

  const handleCampusDescription = (e) => {
    setCampus({ ...campus, description: e.target.value });
  };

  const handleCampusImage = (e) => {
    setCampus({ ...campus, imageUrl: e.target.value });
  };

  useEffect(() => {
    setCampus(campuses.find((campus) => campus.id === +params.campusId));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCampus(campus));
  };

  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <img src={campus.imageUrl} alt="campus photo" />
      <p>{campus.description}</p>

      <form id="campus-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name" value={campus.name} onChange={handleCampusName} />

        <label htmlFor="address">Address:</label>
        <input
          name="address"
          value={campus.address}
          onChange={handleCampusAddress}
        />

        <label htmlFor="description">Description:</label>
        <input
          name="description"
          value={campus.description}
          onChange={handleCampusDescription}
        />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          name="imageUrl"
          value={campus.imageUrl}
          onChange={handleCampusImage}
        />

        <button type="submit">Submit</button>
      </form>

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
