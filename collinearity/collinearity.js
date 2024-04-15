function collinearity( x1,y1,x2,y2 ) {
    let resultA = x1*y2;
    let resultB = y1*x2;
    return resultA===resultB;
  }

  console.log(collinearity(1,1,1,1));
  console.log(collinearity(1,1,0,0));
  console.log(collinearity(1,1,6,1));
