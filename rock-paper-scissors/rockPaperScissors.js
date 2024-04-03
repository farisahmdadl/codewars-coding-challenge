const rps = (p1, p2) => {
    if (p1 == 'rock' & p2 == 'paper'){
        return 'Player 2 won!';
    } else if (p1 == 'paper' & p2 == 'rock') {
        return 'Player 1 won!';
    } else if (p1 == 'paper' & p2 == 'scissors') {
        return 'Player 2 won!';
    } else if (p1 == 'scissors' & p2 == 'paper') {
        return 'Player 1 won!';
    } else if (p1 == 'scissors' & p2 == 'rock') {
        return 'Player 2 won!';
    } else if (p1 == 'rock' & p2 == 'scissors') {
        return 'Player 1 won!';
    } else if (p1 == 'rock' & p2 == 'rock') {
        return 'Draw!';
    } else if (p1 == 'scissors' & p2 == 'scissors') {
        return 'Draw!';
    } else if (p1 == 'paper' & p2 == 'paper') {
        return 'Draw!';
    } else {
        return "Unknown";
    }
};

console.log(rps('paper', 'rock'));
console.log(rps('rock', 'paper'));
console.log(rps('scissors', 'paper'));
console.log(rps('paper', 'scissors'));
console.log(rps('rock', 'scissors'));
console.log(rps('scissors', 'rock'));
console.log(rps('rock', 'rock'));
console.log(rps('paper', 'clip'));