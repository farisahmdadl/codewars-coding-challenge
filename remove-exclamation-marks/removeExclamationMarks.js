function removeExclamationMarks(s) {
    const sArray = s.split("");
    let resultArray = [];
    console.log(sArray);
    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] != "!"){
            resultArray.push(sArray[i]);
        }
    }
    
    let result = resultArray.join("");
    return result;
  }

  console.log(removeExclamationMarks('Hello World!'));