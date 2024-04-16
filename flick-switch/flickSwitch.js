function flickSwitch(arr){
    let result = [];
    let valueBoolean = true;
    console.log(valueBoolean);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] == 'flick') {
            valueBoolean = !valueBoolean;
            console.log(valueBoolean);
        }
        result [i] = valueBoolean;
    }
    return result;
  }

  console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
  console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"]));