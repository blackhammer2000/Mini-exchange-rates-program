// let studentsScores = [];

// for (let i = 1; i <= 3; i++) {
//   const studentIndex = parseInt(prompt("Enter Your Index Number:"));

//   if (studentIndex) {
//     const studentScore = parseInt(
//       prompt(`Student ${studentIndex} Enter Your Score:`)
//     );
//     if (studentScore >= 0 && studentScore <= 100) {
//       const student = {
//         index: studentIndex,
//         score: studentScore,
//       };
//       studentsScores.push(student);
//     } else {
//       alert("Invalid Score.");
//       break;
//     }
//   } else {
//     alert("Please provide an index number.");
//     break;
//   }
// }

// const sortedStudentsScores = [...studentsScores].sort((a, b) => {
//   if (a.score > b.score) return 1;
//   if (a.score === b.score) return 0;
//   if (a.score < b.score) return -1;
// });

// const highestStudent = sortedStudentsScores[sortedStudentsScores.length - 1];

// const highestStudents = sortedStudentsScores.filter((student) => {
//   if (student.score === highestStudent.score) return student;
// });

// const lowestStudent = sortedStudentsScores[0];

// const lowestStudents = sortedStudentsScores.filter((student) => {
//   if (student.score === lowestStudent.score) return student;
// });

// if (studentsScores.length === 3) {
//   alert(
//     `The following are the highest scoring students: \n ${highestStudents.map(
//       (student, index) => {
//         return `\n ${index + 1}: Student ${student.index} scored ${
//           student.score
//         }`;
//       }
//     )}`
//   );

//   alert(
//     `The following are the lowest scoring students: \n ${lowestStudents.map(
//       (student, index) => {
//         return `\n ${index + 1}: Student ${student.index} scored ${
//           student.score
//         }`;
//       }
//     )}`
//   );
// }

/////////////////////////////////////////////MINI EXCHANGE RATES PROGRAM////////////////////////////////////////

const currencies = ["USD", "KES", "EUR"];
const exchangeMap = {
  USD: {
    KES: 118.6,
    EUR: 0.98,
  },
  KES: {
    USD: 0.0084,
    EUR: 0.0082,
  },
  EUR: {
    KES: 121.53,
    USD: 1.02,
  },
};

let dataProcessed = {};

const fromCurrency = prompt("Enter currency to convert FROM:").toUpperCase();
if (currencies.includes(fromCurrency)) {
  const amount = parseInt(prompt("Enter the Amount to convert:")).toFixed(2);
  if (amount > 0) {
    const toCurrency = prompt("Enter currency to convert TO:").toUpperCase();
    if (currencies.includes(toCurrency)) {
      dataProcessed = {
        fromCurrency,
        toCurrency,
        amount,
      };
    } else {
      alert("Enter a valid (TO) currency.");
      return;
    }
  } else {
    alert("Enter a valid amount");
    return;
  }
} else {
  alert("Enter a valid (FROM) currency.");
  return;
}

if (Object.keys(dataProcessed).length === 3) {
  const baseCurrency = dataProcessed.fromCurrency;
  const quoteCurrency = dataProcessed.toCurrency;
  const amount = dataProcessed.amount;

  const convertedAmount = exchangeMap[baseCurrency][quoteCurrency] * amount;
  const longTransactionID = crypto.randomUUID();
  const lastIndex = longTransactionID.indexOf("-");
  const transactionID = longTransactionID.slice(0, lastIndex);

  alert(
    `${transactionID.toUpperCase()} confirmed. \n${amount}${baseCurrency} is equal to ${convertedAmount}${quoteCurrency}`
  );
} else {
  alert("Please provide all the required information.");
}
