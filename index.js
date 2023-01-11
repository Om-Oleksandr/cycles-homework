function isNumberCorrectWhile() {
  const attempts = 3;
  let iterator = 0;
  while (iterator < attempts) {
    iterator++;
    const randomNumber = prompt("Enter number");
    const correctNumber = Number(randomNumber);
    if (correctNumber >= 15 && correctNumber <= 35 && correctNumber % 6 === 0) {
      return true;
    }
    if (
      randomNumber === "" ||
      randomNumber === null ||
      Number.isNaN(correctNumber)
    ) {
      return false;
    }
    if (iterator === attempts) {
      return false;
    }
  }
}

function isNumberCorrectFor() {
  const attempts = 3;
  for (let i = 0; i < attempts; i++) {
    const randomNumber = prompt("Enter number");
    const correctNumber = Number(randomNumber);
    if (correctNumber >= 15 && correctNumber <= 35 && correctNumber % 6 === 0) {
        return true;
      }
      if (
        randomNumber === "" ||
        randomNumber === null ||
        Number.isNaN(correctNumber)
      ) {
        return false;
      }
      if (i === attempts - 1) {
        return false;
      }
  }
}


// debugger;
console.log(isNumberCorrectWhile());
console.log(isNumberCorrectFor());