function isValid(formula){
    if ((formula.includes(1) && formula.includes(2)) || (formula.includes(3) && formula.includes(4)) || (formula.includes(5) == !formula.includes(6)) || (!formula.includes(7) && !formula.includes(8))){
        return false;
    } else {
        return true;
    }
}


  console.log(isValid([1,2,3,4,5,6,7,8]));
  console.log(isValid([8,2]));