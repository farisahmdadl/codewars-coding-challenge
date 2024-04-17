function pairs(ar){
    let count = 0;
    for (let i=0; i < ar.length; i+=2) {
        if (ar[i] + 1 == ar[i+1] || ar[i] - 1 == ar[i+1]) {
            count += 1;
        }
    }
    return count;
   };

   console.log(pairs([1,2,5,8,-4,-3,7,6,5]));
   console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]));
   console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]));
   console.log(pairs([73, 72, 8, 9, 73, 72]));