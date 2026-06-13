let teacherForm = document.getElementById('addTeacherForm');
let teachers = JSON.parse(localStorage.getItem('teachers')) || [];

teacherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(teacherForm);

    const teacher = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        admNo: "TR" + formData.get('admNo'),
        email: formData.get('email'),
        course: formData.get('course'),
        address: formData.get('address'),
        nationalId: formData.get('nationalId'),
        role: "teacher",
        password:formData.get('nationalId') // Set password to national ID for simplicity
    };
let isDuplicate = teachers.some(t => t.nationalId === teacher.nationalId);
    if (isDuplicate) {
        alert('A teacher with this national ID already exists!');
        return;
    }

    teachers.push(teacher);
    localStorage.setItem('teachers', JSON.stringify(teachers));
    alert('Teacher added successfully!');
    window.location.reload();
});