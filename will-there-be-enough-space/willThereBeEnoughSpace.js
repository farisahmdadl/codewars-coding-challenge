function enough(cap, on, wait){
    if (cap >= on + wait) {
        return 0;
    } else {
        return Math.abs(cap - (on + wait));
    }
}

console.log (enough(100, 40, 50))
console.log (enough(100, 10, 100))
console.log (enough(100, 50, 50))