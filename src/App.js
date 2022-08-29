import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Campuses from "./components/Campuses";
import { getCampuses } from "./store/reducers/campusReducer";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const campuses = useSelector((state) => state.campuses);

  //Load campuses on app load
  useEffect(() => {
    dispatch(getCampuses());
  }, []);

  return (
    <>
      <div>
        <nav>
          <Link to={"/campuses"}>
            <button>Campuses ({campuses.length})</button>
          </Link>
        </nav>
      </div>
      <Routes>
        <Route index />
        <Route path="campuses" element={<Campuses />} />
      </Routes>
    </>
  );
}

export default App;
