let odd = []

for (let i = 1; i < 6; i++) {
    let number = prompt('Number?');
    if (number % 2 !== 0) {
        odd.push(number);
    }
}

console.log(odd);