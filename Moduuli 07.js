let dice = parseInt(prompt("anna numero ")) 
let dicesumma = 0;
for (let i = 1; i <= dice; i++ );{
    let diceroll = Math.ceil(Math.random() * 6 );
    dicesumma += diceroll;
}
document.write(dicesumma)