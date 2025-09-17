
const students = [
    { name: "ดรีม", grade: "A" },
    { name: "มี่", grade: "B" },
    { name: "บู", grade: "C" }
];

students.forEach(function(student) {
    console.log(`${student.name}: ${student.grade}`);
});


function showStudentCount() {
    console.log(`Total students: ${students.length}`);
}

showStudentCount();