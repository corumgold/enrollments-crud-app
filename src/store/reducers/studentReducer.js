import axios from "axios";

//ACTION TYPES
const SET_STUDENTS = "SET_STUDENTS";
const CREATE_STUDENT = "CREATE_CAMPUS";
const DELETE_STUDENT = "DELETE_STUDENT";

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

const _deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
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

export const deleteStudent = (student) => {
  return async (dispatch) => {
    const { data: deleted } = await axios.delete(`/api/students/${student.id}`);
    dispatch(_deleteStudent(deleted));
  };
};

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    case CREATE_STUDENT:
      return [...state, action.student];
    case DELETE_STUDENT:
      return state.filter((student) => student.id !== action.student.id);
    default:
      return state;
  }
};

export default studentReducer;
