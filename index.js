function correctNumber() {
  const randomNumber = prompt();
  const correctNumber = Number(randomNumber);
  const attempts = 3;
  if (
    randomNumber === "" ||
    randomNumber === null ||
    Number.isNaN(correctNumber)
  ) {
    return "error";
  }
  while (let(i) < attempts) {
    i++;
    if (number >= 15 && number <= 35 && number % 6 === 0) {
      return number;
    }
  }
}
