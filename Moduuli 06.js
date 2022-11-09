const answer = confirm('Should I calculate the square root?');
let luku = 0;
if (answer == true) {
 const luku = parseInt(prompt("Choose number"))
 if (luku < 0){
    document.writeln("luku on negatiivinen")

 }
 else{
    document.write(Math.sqrt(luku))
 }
}

else{
    document.write("The square root is not calculated.")
}


