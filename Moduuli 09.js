
let number = prompt("Give me an integer");
let isPrime = true;
for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
    
}

if (isPrime) {
    document.body.textContent = `${number} is prime`;
}   else {
    document.body.textContent = `${number} isnt prime `
}       







