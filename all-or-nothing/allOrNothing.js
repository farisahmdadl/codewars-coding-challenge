function possiblyPerfect(key,answers) {
    let counterBlank = 0;
    let counterAnswers = 0;
    for (let i = 0; i < key.length; i++) {
        console.log(key[i]);
        if (key[i] != "_" && key[i] == answers[i]) {
            counterAnswers += 1;
        } if (key[i] != "_") {
            counterBlank += 1;
        }
    }
    console.log(counterBlank);
    console.log(counterAnswers);

    if (counterAnswers == 0 || counterAnswers == counterBlank) {
        return true;
    } else {
        return false;
    }
    
  }

  console.log(possiblyPerfect([ 'A', '_', 'C', '_', 'B' ], [ 'A', 'D', 'C', 'E', 'B' ]))