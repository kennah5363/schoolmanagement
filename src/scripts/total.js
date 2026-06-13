var students = JSON.parse(localStorage.getItem("students")) || [];
let teachers = JSON.parse(localStorage.getItem("teachers")) || [];
var totalStudents = students.length;
var totalTeachers = teachers.length;
document.getElementById("totalStudents").textContent = totalStudents;
document.getElementById("totalTeachers").textContent = totalTeachers;