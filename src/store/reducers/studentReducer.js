import axios from "axios";

//ACTION TYPES
const SET_STUDENTS = "SET_STUDENTS";
const CREATE_STUDENT = "CREATE_CAMPUS";

//ACTION CREATORS
const _setStudents = (students) => {
  return {
    type: SET_STUDENTS,
    students,
  };
};

const _createStudent = (student) => {
  return {
    type: CREATE_STUDENT,
    student,
  };
};

//THUNKS
export const getStudents = () => {
  return async (dispatch) => {
    const { data: students } = await axios.get("/api/students");
    dispatch(_setStudents(students));
  };
};

export const createStudent = (student) => {
  return async (dispatch) => {
    const { data: created } = await axios.post("/api/students", student);
    dispatch(_createStudent(created));
  };
};

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    case CREATE_STUDENT:
      return [...state, action.student];
    default:
      return state;
  }
};

export default studentReducer;
