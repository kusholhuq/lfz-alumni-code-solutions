/* exported getStudentNames */
function getStudentNames(students){
  const studentNames =[];
  for(student in students){
    studentNames.push(students[student].name)
  }
  return studentNames;
}
