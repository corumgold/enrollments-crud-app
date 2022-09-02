import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const campuses = useSelector((state) => state.campuses);
  const students = useSelector((state) => state.students);

  return (
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
  );
};

export default Nav;
