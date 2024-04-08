function digitalRoot(n) {
  let functionToArray = num => Number(num);
  let arrayValue = Array.from(String(n), functionToArray);
  let sum = 0;
  for (let i = 0; i < arrayValue.length; i++) {
    sum += arrayValue[i];
  }
  let arraySum = Array.from(String(sum), functionToArray);
  let arrayLength = arraySum.length;
  if (arrayLength > 1) {
    return digitalRoot(sum);
  } else{
    return sum;
  }
}

console.log(digitalRoot(456));
console.log(digitalRoot(17));
console.log(digitalRoot(794685));