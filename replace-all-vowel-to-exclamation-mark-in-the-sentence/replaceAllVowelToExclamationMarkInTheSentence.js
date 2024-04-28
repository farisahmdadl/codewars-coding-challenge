function replace(s){
    let Vowels = "aAeEiIoOuU";
    let sArray = s.split("");
    console.log(sArray);
    let resultArray = [];
    for (let i = 0; i < sArray.length; i++) {
        if (Vowels.indexOf(sArray[i]) !== -1){
            resultArray.push("!");
        } else {
            resultArray.push(sArray[i]);
        }
    }
    return resultArray.join("");
  }

  console.log(replace("Hi!"));