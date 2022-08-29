import axios from "axios";

//ACTION TYPES
const SET_CAMPUSES = "SET_CAMPUSES";
const CREATE_CAMPUS = "CREATE_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS";
const UPDATE_CAMPUS = "UPDATE_CAMPUS";

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

const _deleteCampus = (campus) => {
  return {
    type: DELETE_CAMPUS,
    campus,
  };
};

const _updateCampus = (campus) => {
  return {
    type: UPDATE_CAMPUS,
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
    const { data: created } = await axios.post("/api/campuses", campus);
    dispatch(_createCampus(created));
  };
};

export const deleteCampus = (campus) => {
  return async (dispatch) => {
    const { data: deleted } = await axios.delete(`/api/campuses/${campus.id}`);
    dispatch(_deleteCampus(deleted));
  };
};

export const updateCampus = (campus) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(
      `/api/campuses/${campus.id}`,
      campus
    );
    dispatch(_updateCampus(updated));
  };
};

const campusReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    case CREATE_CAMPUS:
      return [...state, action.campus];
    case DELETE_CAMPUS:
      return state.filter((campus) => campus.id !== action.campus.id);
    case UPDATE_CAMPUS:
      return state.map((campus) => {
        if (campus.id === action.campus.id) {
          return action.campus;
        } else return campus;
      });
    default:
      return state;
  }
};

export default campusReducer;
