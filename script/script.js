const numbersArray = [21, 45, 39, 60, 44, 92]

const arrayFunction = (count) => {
  if (count == numbersArray.length) {
    return;
  } else {
    console.log(numbersArray[count]);
    arrayFunction(count + 1)
  }
}

arrayFunction(0)
