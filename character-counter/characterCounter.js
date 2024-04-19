function validateWord(s) {
    let text = s.toUpperCase();
    let textArray = text.split("");
    let counter = 0;
    let counts = {};
    textArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    console.log(counts);
    let arrayResultValues = Object.values(counts);
    let arrayResultKeys = Object.keys(counts);
    console.log(arrayResultValues)
    console.log(arrayResultValues.length)
    console.log(arrayResultKeys.length)
    for (let i = 0; i < arrayResultValues.length; i++) {
        if (arrayResultValues[i]%2 == 0) {
            counter += 1;
        }
    }
    console.log(counter);
    if (arrayResultKeys.length == counter || counter == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(validateWord("GGGGGG!!TT1111"));