import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CampusForm from "./CampusForm";
import { updateStudent } from "../store/reducers/studentReducer";
import { useDispatch, useSelector } from "react-redux";

const CampusPage = () => {
  const campuses = useSelector((state) => state.campuses);
  const students = useSelector((state) => state.students);
  const params = useParams();
  const dispatch = useDispatch();

  const [campus, setCampus] = useState({
    name: "",
    address: "",
    imageUrl: "",
    description: "",
    students: [],
  });
  const [loading, setLoading] = useState(false);

  const handleUnenroll = (student) => {
    dispatch(updateStudent({ ...student, campusId: null }));
  };

  const handleLinkToAddress = (address) => {
    return "https://maps.google.com/?q=" + address;
  };

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const campusData = await axios.get(`/api/campuses/${params.campusId}`);
      setCampus({ ...campusData.data });
      setLoading(false);
    };
    getData();
  }, [campuses, students]);

  return (
    <div className="single-page flex-column center">
      {loading ? (
        <h1>Loading Campus...</h1>
      ) : (
        <>
          <section className="single-header">
            <div className="info flex-column center">
              <h1>{campus.name}</h1>
              <a href={handleLinkToAddress(campus.address)} target="blank_">
                {campus.address}
              </a>
              <p>{campus.description}</p>
            </div>
            <img src={campus.imageUrl} alt="campus photo" />
          </section>

          <div className="enrollees flex-column">
            <h2>Enrollees</h2>
            <div className="enrollee-list flex-row center">
              {campus.students.length
                ? campus.students.map((student) => {
                    return (
                      <h3 key={student.id}>
                        <Link to={`/students/${student.id}`}>
                          {student.lastName}, {student.firstName}
                        </Link>
                        <button onClick={() => handleUnenroll(student)}>
                          Unenroll
                        </button>
                      </h3>
                    );
                  })
                : "There are no enrollees!"}
            </div>
          </div>
          <CampusForm />
        </>
      )}
    </div>
  );
};

export default CampusPage;
