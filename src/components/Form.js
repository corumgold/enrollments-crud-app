import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCampus } from "../store/reducers/campusReducer";

const Form = ({ campusProp }) => {
  const dispatch = useDispatch();

  const [campus, setCampus] = useState(campusProp);

  const handleCampusName = (e) => {
    setCampus({ ...campus, name: e.target.value });
  };

  const handleCampusAddress = (e) => {
    setCampus({ ...campus, address: e.target.value });
  };

  const handleCampusDescription = (e) => {
    setCampus({ ...campus, description: e.target.value });
  };

  const handleCampusImage = (e) => {
    setCampus({ ...campus, imageUrl: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCampus(campus));
  };

  console.log(campus);

  return (
    <div>
      <form id="campus-form">
        <label htmlFor="name">Name:</label>
        <input name="name" value={campus.name} onChange={handleCampusName} />

        <label htmlFor="address">Address:</label>
        <input
          name="address"
          value={campus.address}
          onChange={handleCampusAddress}
        />

        <label htmlFor="description">Description:</label>
        <input
          name="description"
          value={campus.description}
          onChange={handleCampusDescription}
        />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          name="imageUrl"
          value={campus.imageUrl}
          onChange={handleCampusImage}
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
