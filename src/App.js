import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Campuses from "./components/Campuses";
import { getCampuses } from "./store/reducers/campusReducer";

function App() {
  const dispatch = useDispatch();
  const campuses = useSelector((state) => state.campuses);

  useEffect(() => {
    dispatch(getCampuses());
  }, []);

  console.log(campuses);

  return (
    <>
      <div>Test Your App</div>
      <Campuses />
    </>
  );
}

export default App;
