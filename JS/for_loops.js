// function showMultiplicationTable(x){
//     for(let i = 1; i <= 10; i++){
//
//         console.log(x * i);
//     }
// }
// showMultiplicationTable(7);
//

function isEvenOrOdd(x){
    if(x%2===0){
        return x + " is even";
    }
    return x + " is odd"
}

for(let i = 0; i <= 10; i++){
    let randomNum = Math.floor(Math.random() * 180) + 20;
    console.log(isEvenOrOdd(randomNum));
}

for(let i = 0; i < 10; i++){
    let input = i.toString();
    console.log(input.repeat(i));
}

for(var outer = 1; outer <= 9; outer++){
    var output = "";
    for(var inner = 1; inner <= outer; inner++){
        output += outer;
    }
    //console.log(output);
}

for(let i = 100; i > 0; i--){
    if(i % 5 === 0){
        console.log(i);
    }
}








function isEven(x){
    return (x % 2 ===0);
}
//
// let number = prompt("enter an odd number 1-50");
//
// while(isEven(number)){
//     prompt("enter an odd number")
// }
//
// for(let i = 0; i < 50; i++){
//     if(!(isEven(i))){
//         if(number === i){
//             console.log("Yikes skipping " + i);
//         }
//     }
// }




//console.log("Here is an odd number " + i);












// function skipNum(){
//     let response = parseFloat(prompt("please enter an odd number below " + " ----ill know if it is odd"));
//     if(isEven(response)){
//             alert("Told You i would know");
//         } else {
//             for(let i = 1; i <= 50; i++) {
//                 if (isEven(i)) {
//                     continue;
//                 }
//                 if (i === response) {
//                     console.log("Yikes! Skipping number: " + i);
//                     continue;
//                 }
//                 console.log("Here is an odd number: " + i);
//             }
//         }
//
// }
//
// skipNum()











// function caseCheck(string){
//     let upper = string.toUpperCase();
//     let lower = string.toLowerCase();
//     if(upper === string){
//         return true;
//     } else if(lower === string){
//         return true;
//     }
//     return false;
// }

















function multTable(x){
    for(let i = 1; i <= 10; i++){
        console.log(x + " X " + i + " = " + (x * i));
    }
}


multTable(7)




