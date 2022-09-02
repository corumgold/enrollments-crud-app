import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Campuses from "./components/Campuses";
import Students from "./components/Students";
import CampusPage from "./components/CampusPage";
import StudentPage from "./components/StudentPage";
import { getCampuses } from "./store/reducers/campusReducer";
import { getStudents } from "./store/reducers/studentReducer";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  const dispatch = useDispatch();

  //Load campuses and students on app load
  useEffect(() => {
    dispatch(getCampuses());
    dispatch(getStudents());
  }, []);

  return (
    <>
      <Nav />
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
