import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createCampus, updateCampus } from "../store/reducers/campusReducer";

const CampusForm = () => {
  const dispatch = useDispatch();
  const params = useParams();

  //Check if form is for a new campus or updating an existing
  let newCampus = true;
  if (params.campusId) newCampus = false;

  const [campus, setCampus] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleCampusName = (e) => {
    setCampus({ ...campus, name: e.target.value });
    setSubmitted(false);
    setValid(false);
  };

  const handleCampusAddress = (e) => {
    setCampus({ ...campus, address: e.target.value });
    setSubmitted(false);
    setValid(false);
  };

  const handleCampusDescription = (e) => {
    setCampus({ ...campus, description: e.target.value });
    setSubmitted(false);
    setValid(false);
  };

  const handleCampusImage = (e) => {
    setCampus({ ...campus, imageUrl: e.target.value });
    setSubmitted(false);
    setValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (campus.name && campus.address) {
      setValid(true);
    }
    if (newCampus) {
      dispatch(createCampus({ ...campus }));
    } else dispatch(updateCampus({ ...campus }));
  };

  const handleClear = (e) => {
    e.preventDefault();
    setSubmitted(false);
    setValid(false);
    setCampus({
      ...campus,
      name: null,
      address: null,
      description: null,
      imageUrl: null,
    });
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
      <h2>{newCampus ? "Create New Campus" : "Update Campus"}</h2>
      {submitted && valid ? (
        <div className="submit-message">
          Campus {newCampus ? "Created!" : "Updated!"}
        </div>
      ) : null}
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        value={campus.name || ""}
        onChange={handleCampusName}
      />
      {!campus.name && submitted ? <span>Name is Required</span> : null}

      <label htmlFor="address">Address:</label>
      <input
        name="address"
        value={campus.address || ""}
        onChange={handleCampusAddress}
      />
      {submitted && !campus.address ? <span>Address is Required</span> : null}

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

      {submitted && valid && newCampus ? (
        <button onClick={handleClear}>Clear</button>
      ) : (
        <button onClick={handleSubmit}>
          {newCampus ? "Create" : "Update"}
        </button>
      )}
    </form>
  );
};

export default CampusForm;
