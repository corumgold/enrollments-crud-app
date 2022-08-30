import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CampusForm from "./CampusForm";

const CampusPage = () => {
  const params = useParams();

  const [campus, setCampus] = useState({
    name: "",
    address: "",
    imageUrl: "",
    description: "",
    students: [],
  });

  useEffect(() => {
    const getData = async () => {
      const campusData = await axios.get(`/api/campuses/${params.campusId}`);
      setCampus(campusData.data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <img src={campus.imageUrl} alt="campus photo" />
      <p>{campus.description}</p>

      <CampusForm />

      <h2>Enrollees</h2>
      <ul>
        {campus.students.length
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
