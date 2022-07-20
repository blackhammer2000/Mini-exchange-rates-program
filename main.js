let studentsScores = [];

for (let i = 1; i <= 3; i++) {
  const studentIndex = parseInt(prompt("Enter Your Index Number:"));

  if (studentIndex) {
    const studentScore = parseInt(
      prompt(`Student ${studentIndex} Enter Your Score:`)
    );
    if (studentScore >= 0 && studentScore <= 100) {
      const student = {
        index: studentIndex,
        score: studentScore,
      };
      studentsScores.push(student);
    } else {
      alert("Invalid Score.");
      break;
    }
  } else {
    alert("Please provide an index number.");
    break;
  }
}

const sortedStudentsScores = [...studentsScores].sort((a, b) => {
  if (a.score > b.score) return 1;
  if (a.score === b.score) return 0;
  if (a.score < b.score) return -1;
});

const highestStudent = sortedStudentsScores[sortedStudentsScores.length - 1];

const highestStudents = sortedStudentsScores.filter((student) => {
  if (student.score === highestStudent.score) return student;
});

const lowestStudent = sortedStudentsScores[0];

const lowestStudents = sortedStudentsScores.filter((student) => {
  if (student.score === lowestStudent.score) return student;
});

if (studentsScores.length === 3) {
  alert(
    `The following are the highest scoring students: \n ${highestStudents.map(
      (student, index) => {
        return `\n ${index + 1}: Student ${student.index} scored ${
          student.score
        }`;
      }
    )}`
  );

  alert(
    `The following are the lowest scoring students: \n ${lowestStudents.map(
      (student, index) => {
        return `\n ${index + 1}: Student ${student.index} scored ${
          student.score
        }`;
      }
    )}`
  );
}
