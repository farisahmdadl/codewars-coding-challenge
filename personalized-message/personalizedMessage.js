function greet (name, owner) {
    if (name == owner) {
        return 	'Hello boss';
    } else {
        return 'Hello guest';
    }
}

console.log(greet('Faris', 'Jon'));
console.log(greet('Jon', 'Jon'));
console.log(greet('Adi', 'Jon'));