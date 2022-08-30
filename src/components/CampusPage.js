import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CampusForm from "./CampusForm";
import { updateStudent } from "../store/reducers/studentReducer";
import { useDispatch } from "react-redux";

const CampusPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [campus, setCampus] = useState({
    name: "",
    address: "",
    imageUrl: "",
    description: "",
    students: [],
  });

  const handleUnenroll = (student) => {
    dispatch(updateStudent({ ...student, campusId: null }));
    setCampus({ ...campus });
  };

  useEffect(() => {
    const getData = async () => {
      const campusData = await axios.get(`/api/campuses/${params.campusId}`);
      setCampus({ ...campusData.data });
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
                  <button onClick={() => handleUnenroll(student)}>
                    Unenroll
                  </button>
                </li>
              );
            })
          : "There are no enrollees!"}
      </ul>
    </div>
  );
};

export default CampusPage;
