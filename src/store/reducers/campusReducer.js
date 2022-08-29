import axios from "axios";

const initState = {
  data: [
    {
      name: "Kale University",
      address: "1234 Vegetable Avenue, Greensborough North Carolina",
      description:
        "This is the description for Kale University. Kale is a fantastic school and you should definitely consider applying for the fall semester!",
    },
  ],
};

//ACTION TYPES
const SET_CAMPUSES = "SET_CAMPUSES";

//ACTION CREATORS
const _setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses,
  };
};

//THUNKS
export const getCampuses = () => {
  return async (dispatch) => {
    const { data: campuses } = await axios.get("/api/campuses");
    dispatch(_setCampuses(campuses));
  };
};

const campusReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
  }
  return state;
};

export default campusReducer;
