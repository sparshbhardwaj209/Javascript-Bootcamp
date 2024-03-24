// Ques:- Check which numbers are odd and which are even between 1 - 50

function isEvenOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

for (let i = 1; i <= 50; i++) {
  console.log(i, "is", isEvenOdd(i));
}
