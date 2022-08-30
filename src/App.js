import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Campuses from "./components/Campuses";
import Students from "./components/Students";
import CampusPage from "./components/CampusPage";
import StudentPage from "./components/StudentPage";
import { getCampuses } from "./store/reducers/campusReducer";
import { getStudents } from "./store/reducers/studentReducer";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();
  const campuses = useSelector((state) => state.campuses);
  const students = useSelector((state) => state.students);
  const state = useSelector((state) => state);

  //Load campuses and students on app load
  useEffect(() => {
    dispatch(getCampuses());
    dispatch(getStudents());
  }, []);

  return (
    <>
      <div>
        <nav id="navigation">
          <Link to={"/students"}>
            <p>STUDENTS ({students.length})</p>
          </Link>
          <Link to={"/"}>
            <p>HOME</p>
          </Link>

          <Link to={"/campuses"}>
            <p>CAMPUSES ({campuses.length})</p>
          </Link>
        </nav>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="campuses" element={<Campuses />} />
        <Route path="students" element={<Students />} />

        <Route path="campuses/:campusId" element={<CampusPage />} />
        <Route path="students/:studentId" element={<StudentPage />} />
      </Routes>
    </>
  );
}

export default App;
