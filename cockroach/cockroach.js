function cockroachSpeed(s) {
    let speed = s*100000/3600;
    return Math.floor(speed);
  }

  console.log(cockroachSpeed(1.08));
  console.log(cockroachSpeed(1.09));
  console.log(cockroachSpeed(0.5361451712541576));