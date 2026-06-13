const loginForm = document.getElementById("loginForm");
const admin = [
  {
  name: "Keneth maina",
  admNo: "AD13490",
  password: "AD13490",
  role: "admin"
},
 {
  name: "Mary Nyambura",
  admNo: "AD12445",
  password: "AD12445",
  role: "admin"
}
  ];
const students = JSON.parse(localStorage.getItem("students")) || [];
const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
let users = [...admin, ...students, ...teachers];
localStorage.setItem("users", JSON.stringify(users));
console.log(users);

// localStorage.setItem("users", JSON.stringify(users));
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let username = loginForm['username'].value;
  let password = loginForm['password'].value;
  
  let userExist = users.find(user => user.admNo === username);
  
  if(userExist) {
    if(password === userExist.password) {
      if(userExist.role === "admin") {
        window.location.href= "pages/admin.html";
      }else if (userExist.role === "student") {
        window.location.href = "pages/student.html";
      }else if(userExist.role === "teacher") {
        window.location.href = "pages/teacher.html";
      } else {
        alert("User role not recognized!!");
      }
      sessionStorage.setItem("currentUser", JSON.stringify(userExist));
    } else {
      alert("User Credentials not valid!!")
    }
  } else {
    alert("Registration no. not found!!");
  }
  
});
