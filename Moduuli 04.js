const classList = ["Daredevil", "Slytherin", "Hufflepuff", "Ravenclaw"];
let r = Math.random()
let nimi = prompt("anna nimi ")

if (r < 0.25){

    document.body.textContent = "Darefevil" + nimi

}
else if (r > 0.25 && r < 0.5){

    document.body.textContent = "slytherin " + nimi
}
else if((r > 0.5 && r < 0.75)){
    document.body.textContent = "Hufflepuff " + nimi
}
else {
    document.body.textContent = "Ravenclaw " + nimi
}

