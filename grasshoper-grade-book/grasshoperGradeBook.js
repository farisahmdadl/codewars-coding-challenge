function getGrade (s1, s2, s3) {
    score = (s1 + s2 + s3) / 3;
    if (score < 60) return 'F';
    if (score < 70) return 'D';
    if (score < 80) return 'C';
    if (score < 90) return 'B';
    return 'A';
  }

console.log(getGrade(96,90,92));
console.log(getGrade(70,70,100));
console.log(getGrade(64,60,78));