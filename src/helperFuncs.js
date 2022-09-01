
// CAMPUSES

const checkHasStudents = (campus, students) => {
    return students.find((student) => student.campusId === campus.id);
};

  
module.exports = {
    checkHasStudents
}