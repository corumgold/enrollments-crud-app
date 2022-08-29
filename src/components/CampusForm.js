import React, { useState } from "react";
import { createCampus, getCampuses } from "../store/reducers/campusReducer";
import { useDispatch } from "react-redux";

const CampusForm = () => {
  const [newCampus, setNewCampus] = useState({
    name: "",
    address: "",
  });

  const dispatch = useDispatch();

  const handleCampusName = (e) => {
    setNewCampus({ ...newCampus, name: e.target.value });
  };

  const handleCampusAddress = (e) => {
    setNewCampus({ ...newCampus, address: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCampus(newCampus));
    dispatch(getCampuses());
    setNewCampus({
      ...newCampus,
      name: "",
      address: "",
    });
  };

  return (
    <form id="campus-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input name="name" value={newCampus.name} onChange={handleCampusName} />

      <label htmlFor="address">Address:</label>
      <input
        name="address"
        value={newCampus.address}
        onChange={handleCampusAddress}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CampusForm;
