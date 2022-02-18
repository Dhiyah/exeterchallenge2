var students = require('../../../Students1')


const addStudent = (request, response) => {
    // add a new student record
    const { studentID, studentName, subject1, subject2, subject3, subject4, subject5 } = request.body;
    const student = {
        someuniqueID,
        nameofthestudent,
        mark1,
        mark2,
        mark3,
        mark4,
        mark5
    };
    students = [...students, student];
    response.code(201).send(student);
}

const updateStudentMark = (request, response) => {
    const { studentID, ...rest } = request.body; // mark = 'subject1' 100,80
    var student = students.find(o => o.studentID === studentID);
    for (var x in rest) {
        student[x] = rest[x];
    }
    response.send(student);
}

const deleteStudentRec = (request, response) => {
    const { studentID } = request.body;
    student = students.find(o => o.studentID === studentID)
    var studentIDx = students.indexOf(student);
    if (studentIDx > -1) {
        students.splice(studentIDx, 1);
    }
    response.send(student);
    // console.log(students)
}
const getStudents = (_, response) => {
    {
        // GET all students
        const myJSON = '{"Studentname":"Student1","StudentID":"S1","Subject1":100}';
        const myObj = JSON.parse(myJSON);
        x = myObj.name;
        response.send(students);
    }
}

module.exports = {
    addStudent,
    updateStudentMark,
    deleteStudentRec,
    getStudents,
}

