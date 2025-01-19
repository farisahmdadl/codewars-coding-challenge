function century(year) {
    return Math.floor((year-1)/100) + 1;
  }

  console.log(century(2000))
  console.log(century(1990))
  console.log(century(1333))
  console.log(century(78))