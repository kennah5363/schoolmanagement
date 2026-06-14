 let teachers = JSON.parse(localStorage.getItem('teachers')) || [];
            const teachersTable = document.getElementById('teachersTable').getElementsByTagName('tbody')[0];

            function deleteTeacher(admNo) {
                teachers = teachers.filter(teacher => teacher.admNo !== admNo);
                localStorage.setItem('teachers', JSON.stringify(teachers));
                renderTeachers();
            }

            function renderTeachers() {
                teachersTable.innerHTML = '';
                teachers.forEach(teacher => {
                    const row = teachersTable.insertRow();
                    row.insertCell(0).textContent = teacher.admNo;
                    row.insertCell(1).textContent = teacher.name;
                    row.insertCell(2).textContent = teacher.phone;
                    row.insertCell(3).textContent = teacher.course;
                    row.insertCell(4).textContent = teacher.email;
                    row.insertCell(5).textContent = teacher.address;
                    const actionsCell = row.insertCell(6);
                    actionsCell.innerHTML = `
    <button 
        class="btn btn-sm btn-outline-primary"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#editTeacherModal"
        onclick="editTeacher('${teacher.admNo}')">
        Edit
    </button>

    <button 
        class="btn btn-sm btn-outline-danger"
        onclick="deleteTeacher('${teacher.admNo}')">
        Delete
    </button>
`;
                });
            }
            renderTeachers();


window.editTeacher = function (admNo) {
    const formData = new FormData(editTeacherForm);
    const teacher = teachers.find(
        s => String(s.admNo) === String(admNo)
    );

    if (!teacher) {
        alert('teacher not found!');
        return;
    }

    editTeacherForm.admNo.value = teacher.admNo;
    editTeacherForm.name.value = teacher.name;
    editTeacherForm.phone.value = teacher.phone;
    editTeacherForm.course.value = teacher.course;
    editTeacherForm.age.value = teacher.age;
    editTeacherForm.address.value = teacher.address;
}


editTeacherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(editTeacherForm);

    const originalAdmNo = formData.get('admNo');

    const teacherIndex = teachers.findIndex( s => s.admNo === originalAdmNo);

    if (teacherIndex !== -1) {
        teachers[teacherIndex] = {
            admNo: formData.get('admNo'),
            name: formData.get('name'),
            phone: formData.get('phone'),
            age: formData.get('age'),
            address: formData.get('address'),
            course: formData.get('course'),
            password: formData.get('nationalId') // Assuming you want to update the password with the national ID
        };

        localStorage.setItem('teachers', JSON.stringify(teachers));
        window.location.reload();
        renderTeachers();
console.log(teachers);
        alert('teacher updated successfully!');
    }
    else {
        alert('teacher not found!');
    }
});