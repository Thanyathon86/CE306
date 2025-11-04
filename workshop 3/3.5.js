<<<<<<< HEAD
const students = [
    { name: "ดรีม", score: 85 },
    { name: "มี่", score: 68 },
    { name: "บู", score: 72 },
    { name: "คัม", score: 90 },
    { name: "น่า", score: 55 },
    { name: "ซีเมน", score: 70 }
];

function filterPassedStudents(students) {
    const passed = [];

    students.forEach(student => {
        if (student.score >= 70) {
            passed.push(student);
        }
    });

    return passed;
}
const passedStudents = filterPassedStudents(students);

passedStudents.forEach(student => {
    console.log(`Student ${student.name} passed with score ${student.score}.`);
=======
const students = [
    { name: "ดรีม", score: 85 },
    { name: "มี่", score: 68 },
    { name: "บู", score: 72 },
    { name: "คัม", score: 90 },
    { name: "น่า", score: 55 },
    { name: "ซีเมน", score: 70 }
];

function filterPassedStudents(students) {
    const passed = [];

    students.forEach(student => {
        if (student.score >= 70) {
            passed.push(student);
        }
    });

    return passed;
}
const passedStudents = filterPassedStudents(students);

passedStudents.forEach(student => {
    console.log(`Student ${student.name} passed with score ${student.score}.`);
>>>>>>> 7725b81bf25abc7b1a80fd30f69b7d4949da009f
});