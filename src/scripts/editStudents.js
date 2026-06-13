 let students = JSON.parse(localStorage.getItem('students')) || [];
            const studentsTable = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];

            function deleteStudent(admNo) {
                students = students.filter(student => student.admNo !== admNo);
                localStorage.setItem('students', JSON.stringify(students));
                renderStudents();
            }

            function renderStudents() {
                studentsTable.innerHTML = '';
                students.forEach(student => {
                    const row = studentsTable.insertRow();
                    row.insertCell(0).textContent = student.admNo;
                    row.insertCell(1).textContent = student.name;
                    row.insertCell(2).textContent = student.phone;
                    row.insertCell(3).textContent = student.course;
                    row.insertCell(4).textContent = student.age;
                    row.insertCell(5).textContent = student.address;
                    row.insertCell(6).textContent = student.guardianName;
                    row.insertCell(7).textContent = student.guardianPhone;
                    row.insertCell(8).textContent = student.guardianRelationship;
                    const actionsCell = row.insertCell(9);
                    actionsCell.innerHTML = `
    <button 
        class="btn btn-sm btn-outline-primary"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#editStudentModal"
        onclick="editStudent('${student.admNo}')">
        Edit
    </button>

    <button 
        class="btn btn-sm btn-outline-danger"
        onclick="deleteStudent('${student.admNo}')">
        Delete
    </button>
`;
                });
            }
            renderStudents();


window.editStudent = function (admNo) {
    const formData = new FormData(editStudentForm);
    const student = students.find(
        s => String(s.admNo) === String(admNo)
    );

    if (!student) {
        alert('Student not found!');
        return;
    }

    editStudentForm.admNo.value = student.admNo;
    editStudentForm.name.value = student.name;
    editStudentForm.phone.value = student.phone;
    editStudentForm.course.value = student.course;
    editStudentForm.age.value = student.age;
    editStudentForm.address.value = student.address;
    editStudentForm.guardianName.value = student.guardianName;
    editStudentForm.guardianPhone.value = student.guardianPhone;
    editStudentForm.guardianRelationship.value = student.guardianRelationship;
}


editStudentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(editStudentForm);

    const originalAdmNo = formData.get('admNo');

    const studentIndex = students.findIndex( s => s.admNo === originalAdmNo);

    if (studentIndex !== -1) {
        students[studentIndex] = {
            admNo: formData.get('admNo'),
            name: formData.get('name'),
            phone: formData.get('phone'),
            age: formData.get('age'),
            address: formData.get('address'),
            course: formData.get('course'),
            guardianName: formData.get('guardianName'),
            guardianPhone: formData.get('guardianPhone'),
            guardianRelationship: formData.get('guardianRelationship'),
            password: formData.get('admNo')
        };

        localStorage.setItem('students', JSON.stringify(students));
        window.location.reload();
        renderStudents();
console.log(students);
        alert('Student updated successfully!');
    }
    else {
        alert('Student not found!');
    }
});