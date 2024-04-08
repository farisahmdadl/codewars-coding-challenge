function cookPancakes(n, m) {
    return n < m ? 2 : Math.ceil(2 * n / m);
  }

    console.log(cookPancakes(1,2));
    console.log(cookPancakes(5,10));
    console.log(cookPancakes(2,2));
    console.log(cookPancakes(5,5));
    console.log(cookPancakes(4,2));
    console.log(cookPancakes(10,5));
    console.log(cookPancakes(27,3));
    console.log(cookPancakes(10,3));
    