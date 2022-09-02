import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Home,
  Nav,
  Campuses,
  Students,
  CampusPage,
  StudentPage,
} from "./components";
import { getCampuses } from "./store/reducers/campusReducer";
import { getStudents } from "./store/reducers/studentReducer";
import { Routes, Route, Link } from "react-router-dom";

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
