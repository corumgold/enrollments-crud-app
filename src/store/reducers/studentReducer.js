import axios from "axios";

//ACTION TYPES
const SET_STUDENTS = "SET_STUDENTS";
const CREATE_STUDENT = "CREATE_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";
const UPDATE_STUDENT = "UPDATE_STUDENT";

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

const _updateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
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

export const updateStudent = (student) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(
      `/api/students/${student.id}`,
      student
    );
    dispatch(_updateStudent(updated));
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
    case UPDATE_STUDENT:
      return state.map((student) => {
        if (student.id === action.student.id) {
          return action.student;
        } else return student;
      });
    default:
      return state;
  }
};

export default studentReducer;
