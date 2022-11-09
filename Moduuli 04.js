const classList = ["Daredevil", "Slytherin", "Hufflepuff", "Ravenclaw"];
let r = Math.random()
let nimi = prompt("anna nimi ")

if (r < 0.25){
    
    document.write("" + "daredevil " + nimi )
}
else if (r > 0.25 && r < 0.5){
    
    document.write("" + "Slytherin " + nimi )
}
else if((r > 0.5 && r < 0.75)){
    
    document.write("" + "Huffel epuff " + nimi )
}
else {

    document.write("" + "Ravenclaw " + nimi )
}


