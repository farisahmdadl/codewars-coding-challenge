function multiply(number){
    let absoluteNumber = Math.abs(number);
    let numberToArray = Array.from(String(absoluteNumber), Number);
    let arrayLength = numberToArray.length;
    let five = 1;
    for (i = 1; i <= arrayLength; i++) {
        five = five * 5;
    }
    result = number * five;
    return result;
  }

  console.log(multiply(200));
  console.log(multiply(-2));