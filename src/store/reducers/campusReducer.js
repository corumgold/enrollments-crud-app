import axios from "axios";

//ACTION TYPES
const SET_CAMPUSES = "SET_CAMPUSES";
const CREATE_CAMPUS = "CREATE_CAMPUS";

//ACTION CREATORS
const _setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses,
  };
};

const _createCampus = (campus) => {
  return {
    type: CREATE_CAMPUS,
    campus,
  };
};

//THUNKS
export const getCampuses = () => {
  return async (dispatch) => {
    const { data: campuses } = await axios.get("/api/campuses");
    dispatch(_setCampuses(campuses));
  };
};

export const createCampus = (campus) => {
  return async (dispatch) => {
    const { data: created } = await axios.post("/api/campuses", campus)
    dispatch(_createCampus(created));
  };
};

const campusReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    case CREATE_CAMPUS:
      return [...state, action.campus];
    default:
      return state;
  }
};

export default campusReducer;
