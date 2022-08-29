import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Campuses from "./components/Campuses";
import Students from "./components/Students";
import CampusPage from "./components/CampusPage";
import StudentPage from "./components/StudentPage";
import { getCampuses } from "./store/reducers/campusReducer";
import { getStudents } from "./store/reducers/studentReducer";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const campuses = useSelector((state) => state.campuses);
    const students = useSelector((state) => state.students);
    console.log(campuses)

  //Load campuses and students on app load
  useEffect(() => {
    dispatch(getCampuses());
    dispatch(getStudents());
  }, []);

  return (
    <>
      <div>
        <nav>
          <Link to={"/students"}>
            <button>Students ({students.length})</button>
          </Link>
          <Link to={"/campuses"}>
            <button>Campuses ({campuses.length})</button>
          </Link>
        </nav>
      </div>
      <Routes>
        <Route index />
        <Route path="campuses" element={<Campuses />} />
        <Route path="students" element={<Students />} />

        <Route path="campuses/:campusId" element={<CampusPage />} />
        <Route path="students/:studentId" element={<StudentPage />} />
      </Routes>
    </>
  );
}

export default App;
