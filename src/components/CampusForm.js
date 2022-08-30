import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { createCampus, updateCampus } from "../store/reducers/campusReducer";

const CampusForm = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  //Check if form is for a new campus or updating an existing
  let newCampus = true;
  if (params.campusId) newCampus = false;

  const [campus, setCampus] = useState({});

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
    if (newCampus) {
      dispatch(createCampus({ ...campus }));
    } else dispatch(updateCampus({ ...campus }));
    setCampus({
      ...campus,
      name: "",
      address: "",
      description: "",
      imageUrl: "",
    });
    navigate("/campuses");
  };

  useEffect(() => {
    if (!newCampus) {
      const getData = async () => {
        const campusData = await axios.get(`/api/campuses/${params.campusId}`);
        setCampus(campusData.data);
      };
      getData();
    }
  }, []);

  return (
    <form className="form flex-column">
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        value={campus.name || ""}
        onChange={handleCampusName}
      />

      <label htmlFor="address">Address:</label>
      <input
        name="address"
        value={campus.address || ""}
        onChange={handleCampusAddress}
      />

      <label htmlFor="description">Description:</label>
      <textarea
        name="description"
        value={campus.description || ""}
        onChange={handleCampusDescription}
      />

      <label htmlFor="imageUrl">Image URL:</label>
      <input
        name="imageUrl"
        value={campus.imageUrl || ""}
        onChange={handleCampusImage}
      />

      <button onClick={handleSubmit}>{newCampus ? "Create" : "Update"}</button>
    </form>
  );
};

export default CampusForm;
