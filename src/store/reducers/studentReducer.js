import axios from "axios";

const initState = {
  data: [
    {
      firstName: "Cory",
      lastName: "Gold",
      email: "goldcorum@gmail.com",
      gpa: 3.7,
    },
  ],
};

//ACTION TYPES
const SET_STUDENTS = "SET_STUDENTS";

//ACTION CREATORS
const _setStudents = (students) => {
  return {
    type: SET_STUDENTS,
    students,
  };
};

//THUNKS
export const getStudents = () => {
  return async (dispatch) => {
    const { data: students } = await axios.get("/api/students");
    dispatch(_setStudents(students));
  };
};

const studentReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    default:
      return state;
  }
};

export default studentReducer;
