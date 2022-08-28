import React from "react";
import { useSelector } from "react-redux";

const Students = () => {
    const state = useSelector((state) => state);
    
    console.log(state)

  return <div>Students</div>;
};

export default Students;
