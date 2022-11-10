const yearStr = parseInt(prompt("Enter star year"))
const yearEnd = parseInt(prompt("enter end year"))



for (let i = yearStr; i < yearEnd; i++) {
    if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
        let ele = document.createElement("li")
        ele.textContent = i
        document.querySelector("#velo").append(ele)
       
    }
}   
document.body.textContent = `${i} `



// if ((0 == yearStr % 4) && (0 != yearEnd % 100) || (0 == yearStr % 400)){
//     listYear.push(listYear)
// }else{

// }
// const item = document.querySelector("#velo")
// const 
