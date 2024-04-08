const areaOrPerimeter = function(l , w) {
    lengthResult = 2 * l;
    lengthWidth = 2 * w;
    if(l == w) {
        return l*w;
    }
    return lengthResult + lengthWidth;
  };

  console.log(areaOrPerimeter(3, 3));
  console.log(areaOrPerimeter(4, 6));