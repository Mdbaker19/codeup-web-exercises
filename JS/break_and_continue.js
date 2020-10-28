// function isEven(x){
//     return(x % 2 === 0);
// }

//this one works
do{

    //asking for number
    var response = parseFloat(prompt("enter an odd number 1-50"));
    // this is the number to skip
    console.log("number to skip is " + response);
    //count to 50
    if(!isEven(response)){
        for (let i = 0; i <= 50; i++) {
            //check for even again
            if(isEven(i)){
                continue;
            }
            //check for even
            if (response === i) {
                console.log("Yikes skipping " + i);
            } else {
                //log it if it is odd
                console.log("here is a lovely odd number : " + i);
            }
        }
    }
}while(isEven(response) || isNaN(response) || response >= 50 || response <= 0);


/*Sophie's code for this
* do{
* var userNumber = Number(prompt("pick an odd number between 1 - 50")
*
* if(userNumber < 1 || userNumber > 50){
* alert("invalid number");
* } else if (){
* } else {
* alert("thank you, number is valid");
* // I would tie in a logging function logOddNums();
* break;
* }
* } while(true) break used because this will always run
*
* for(var i = 1; i <= 50; i++){
* if(i % 2 === 0){
* continue;
* }
* if(i === userNumber){
* console.log("Yikes, Skipping number: " + i);
* }
* else {
* console.log("Here is an odd number: " + i);
* }*/


//
//
// function skipNum(){
//     do{
//         let response = parseFloat(prompt("please enter an odd number below " + " ----ill know if it is odd"));
//         if (!(isNaN(response))) {
//             if (isEven(response)) {
//                 alert("Told You i would know");
//             } else {
//                 for (let i = 1; i <= 50; i++) {
//                     if (isEven(i)) {
//                         continue;
//                     }
//                     if (i === response) {
//                         console.log("Yikes! Skipping number: " + i);
//                         continue;
//                     }
//                     console.log("Here is an odd number: " + i);
//                 }
//             }
//         }//if not a number do this
//         else alert("NOT A NUMBER!!");
//     }while(isEven(response))
// }
// //
// skipNum();


//const allCones = Math.floor(Math.random() * 50) + 50;

// var allCones = Math.floor(Math.random() * 50) + 50;
// do{
//
//     var conesSold = Math.floor(Math.random() * 5) + 1;
//     allCones -= conesSold;
//     console.log(allCones);
//     if(allCones === 0){
//         console.log("Yay! I sold them all!")
//     } else if(allCones >= 0){
//         console.log("cannot sell you " + conesSold + " I only have " + allCones);
//     } else {
//         console.log(allCones + "cones sold...")
//     }
// }while(allCones >= 0);


// do{
//
//     let conesSold = Math.floor(Math.random() * 5) + 1;
//     console.log(allCones);
//     allCones -= conesSold;
//     if(allCones === 0){
//         console.log("Yay! I sold them all!");
//     } else if(allCones < conesSold){
//         console.log("cannot sell you " + conesSold + " I only have " + allCones);
//     } else {
//         console.log(conesSold + " cones sold..." + allCones + " remains");
//     }
// }while(allCones > 0);



/* assign a max number of cones, decrement it by the random amount sold repeat the selling until you are
out of cones
 */

// var allCones = Math.floor(Math.random() * 50) + 50;
//
// function sellingCones(amountOfCones){
//     var conesSold = Math.floor(Math.random() * 5) + 1;
//     //let remainingCones = allCones - conesSold;
//     for(var i = amountOfCones; i > 0; (i-conesSold)){
//         console.log(i);
//     }
// }
//
//
// sellingCones(allCones);


// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do{
//
//     var conesSold = Math.floor(Math.random() * 5) + 1;
//     allCones -= conesSold;
//     console.log(conesSold);
//
//
// }while(allCones >= 0);




var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have " + allCones + " to sell");
do{//this one is right
 let conesSold = Math.floor(Math.random() * 5) + 1;
 console.log(allCones);
 if(allCones === 0){
  console.log("Yay! I sold them all!");
 } else if(allCones < conesSold){
  console.log("cannot sell you " + conesSold + " I only have " + allCones);
 } else {
  allCones -= conesSold;
  console.log(conesSold + " cones sold... " + allCones + " remains");
 }
}while(allCones > 0);









// do{
// var userNum = parseFloat(prompt("enter an odd number between 1-50 please"));
// for(let i = 1; i < 50; i++){
//  if(userNum === i){
//   console.log("Yikes, skipping number: " + i);
//  } else if(isEven(i)){
//   continue;
//  } else {
//   console.log("here is an odd number: " + i);
//  }
// }
//
//
// }while(isEven(userNum) || isNaN(userNum));