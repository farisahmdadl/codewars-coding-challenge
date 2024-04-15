function decode  (code, n) {
    let myFunc = num => Number(num);
    let nArray = Array.from(String(n), myFunc);
    let k = 0;
    let resultArray = [];
    for (let i = 0; i < code.length; i++) {
        console.log(code[i]);
        console.log(nArray[k]);
        let loopResult = code[i] - nArray[k];
        console.log(loopResult);
        k = k + 1;
        if (k == nArray.length) {
            k = 0;
        }
        resultArray[i] = loopResult + 96;
    }
    console.log(resultArray);
    let finalResult = [];
    for (let m = 0; m < resultArray.length; m++) {
        finalResult[m] = String.fromCharCode(resultArray[m]);
    }
    console.log(finalResult);
    let arrayCombine = finalResult.join('');
    let returnResult = arrayCombine.toString();
    console.log(returnResult);
    return returnResult;
}

console.log(decode([ 20, 12, 18, 30, 21], 1939));
console.log(decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939));