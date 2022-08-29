import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Campuses from "./components/Campuses";
import Students from "./components/Students";
import { getCampuses } from "./store/reducers/campusReducer";
import { getStudents } from "./store/reducers/studentReducer";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const campuses = useSelector((state) => state.campuses);
  const students = useSelector((state) => state.students);

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
      </Routes>
    </>
  );
}

export default App;
