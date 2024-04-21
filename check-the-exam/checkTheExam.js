function checkExam(array1, array2) {
    let score = 0;
    for (let i = 0; i < array1.length; i++) {
        console.log(array1[i]);
        console.log(array2[i]);
        if (array2[i] != "" && array1[i] == array2[i]){
            score += 4;
        } else if (array2[i] != "" && array1[i] != array2[i]) {
            score -= 1;
        } else {
            score += 0;
        }
    }
    
    if (score < 0) {
        return 0;
    } else {
        return score;
    }
}

   console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
   console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));