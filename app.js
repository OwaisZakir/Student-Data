let addBtn = document.querySelector("#saveChangesBtn");
let table = document.querySelector("#table");

function addStudents() {
  
  let studentID = document.querySelector("#studentID").value;
  let studentName = document.querySelector("#studentName").value;
  let studentSemester = document.querySelector("#studentSemester").value;
  let studentFName = document.querySelector("#studentFName").value;
  let studentFee = document.querySelector("#studentFee").value;
  let studentCourses = document.querySelector("#studentCourses").value;

  
  if (
    !studentID ||
    !studentName ||
    !studentSemester ||
    !studentFName ||
    !studentFee ||
    !studentCourses
  ) {
    alert("Please fill all fields");
    return; 
  }

  
  let newStudent = {
    ID: studentID,
    name: studentName,
    semester: studentSemester,
    father_name: studentFName,
    isFeePaid: studentFee,
    courses: studentCourses.split(", "), 
  };

  
  console.log(newStudent);

  
  table.innerHTML += `
    <tr>
      <td>${newStudent.ID}</td>
      <td>${newStudent.name}</td>
      <td>${newStudent.father_name}</td>
      <td>${newStudent.semester}</td>
      <td>${newStudent.isFeePaid}</td>
      <td>${newStudent.courses.join(", ")}</td>
    </tr>
  `;

  
  document.querySelector("#studentID").value = "";
  document.querySelector("#studentName").value = "";
  document.querySelector("#studentSemester").value = "";
  document.querySelector("#studentFName").value = "";
  document.querySelector("#studentFee").value = "";
  document.querySelector("#studentCourses").value = "";
}

addBtn.addEventListener("click", () => {
  addStudents(); 
});
