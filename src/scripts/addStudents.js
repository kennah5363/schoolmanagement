console.log("addStudents.js loaded");
const addStudentBtn = document.getElementById('addStudent');
const addStudentForm = document.getElementById('addStudentForm');
let students = JSON.parse(localStorage.getItem('students')) || [];
// const studentsTable = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
const editStudentForm = document.getElementById('editStudentForm');
let currentYear = new Date().getFullYear();






addStudentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addStudentForm);
    let currentAge = currentYear - parseInt(formData.get('birthYear'));
    const student = {
        admNo: formData.get('admNo'),
        name: formData.get('name'),
        phone: formData.get('phone'),
        birthYear: formData.get('birthYear'),
        age: currentAge,
        address: formData.get('address'),
        course: formData.get('course'),
        guardianName: formData.get('guardianName'),
        guardianPhone: formData.get('guardianPhone'),
        guardianRelationship: formData.get('guardianRelationship'),
        role: "student",
        password: formData.get('admNo') // Set password to admission number for simplicity
    };
    let isDuplicate = students.some(s => s.admNo === student.admNo);
    if (isDuplicate) {
        alert('A student with this admission number already exists!');
    } else {
        confirm('Student added successfully!');
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));
        addStudentForm.reset();
        window.location.reload(); // Refresh the page to update the total students count
    }

});



