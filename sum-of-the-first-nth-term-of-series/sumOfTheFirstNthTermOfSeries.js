function SeriesSum(n) {
    let result = '0.00';
    let nSum = 0;
    for (i = 0; i < n; i++) {
        result = parseInt(result);
        nSum = nSum + (1/(1+(3*i)));
        result = nSum.toFixed(2);        
    }
    return result;
  }

  console.log(SeriesSum(0));
  console.log(SeriesSum(1));
  console.log(SeriesSum(5));
  console.log(SeriesSum(9));