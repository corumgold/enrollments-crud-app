import React from "react";
import { useSelector } from "react-redux";

const Campuses = () => {
  const campuses = useSelector((state) => state.campuses);

  console.log(campuses);

  return <div>Campuses</div>;
};

export default Campuses;
