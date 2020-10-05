// for(let n = 0; n < 5000000; n++){
//     narcissisticNum(n);
// }

function narcissisticNum(j) {
        let output = [];
        //exponent is determined by the length of the number 3 for 153
        let findExponent = j.toString().length;
        //convert to string to pull each char out individually
        let numAsString = j.toString();
        for (let i = 0; i < findExponent; i++) {
            //use this to pull the 1, 5, and 3 separately from an input of 153
            let input = numAsString.charAt(i);
            //push each 1, 5, and 3 individually to the output array
            output.push(input);
        }
        let numsExponentApplied = output.map((element) => element ** findExponent);
        let sum = numsExponentApplied.reduce((a, b) => a + b);
        if (sum === j) {
            console.log(j);
            return true;
        }
}

// to 800k is 21 numbers
// to 3mil is 22 numbers
// to 5mil is 23 numbers (takes like 4 seconds ha)
//0-9
// 153
// 370
// 371
// 407
// 1634
// 8208
// 9474
// 54748
// 92727
// 93084
// 548834
// 1741725
// 4210818

//how to do this without a for loop where the condition number is just adjusted to a theoretically infinite number ???



























//doesnt work either
// for(let n = 0; n < 150000; n++) {
//     let count = 0;
//     if(narcissisticNum(n)){
//         count++;
//     } while(count >= 25){
//         console.log("that was the " + count + " time");
//     }
// }



// do{
//     var call = 0;
//     call++;
//     narcissisticNum();//do not know how to do what i was thinking here
// }while(call <= 1);
//
// function narcissisticNum(j) {
//     let count = 0;
//     if(count >= 25) {
//         return ("done");
//     }else{
//         let output = [];
//         let exponent = j.toString().length;
//         let value = j.toString();
//         for (let i = 0; i < exponent; i++) {
//             let input = value.charAt(i);
//             output.push(input);
//         }
//         let each = output.map((element) => element ** exponent);
//         let sum = each.reduce((a, b) => a + b);
//         if (sum === j) {
//             console.log(j);
//             count++;
//         }
//     }
// }








//only runs n amount of times.......
// for(let n = 0; n <= 10; n++){
//     narcissisticNum(n);
// }
//
// function narcissisticNum(j) {
//     let count = 0;
//    if(count >= 25) {
//        return ("done");
//    }else{
//         let output = [];
//         let exponent = j.toString().length;
//         let value = j.toString();
//         for (let i = 0; i < exponent; i++) {
//             let input = value.charAt(i);
//             output.push(input);
//         }
//         let each = output.map((element) => element ** exponent);
//         let sum = each.reduce((a, b) => a + b);
//         if (sum === j) {
//             console.log(j);
//             count++;
//         }
//     }
// }











//infinite loop
// for (let j = 0; j <= 25;) {
//         narcissisticNum(j)
//     }
//
// //something about incrementing a count but then how do i call the function after???
// function narcissisticNum(j) {
//     let output = [];
//     let exponent = j.toString().length;
//     let value = j.toString();
//     for (let i = 0; i < exponent; i++) {
//         let input = value.charAt(i);
//         output.push(input);
//     }
//     let each = output.map((element) => element ** exponent);
//     let sum = each.reduce((a, b) => a + b);
//     if (sum === j) {
//         console.log(j);
//         return j++;
//     }
// }





//infinite loop
// for(let n = 0; n <= 1; n++){
//     narcissisticNum(n);
// }
// function narcissisticNum(j){
//     do{
//         var count = 0;
//         let output = [];
//         let exponent = j.toString().length;
//         let value = j.toString();
//         for (let i = 0; i < exponent; i++) {
//             let input = value.charAt(i);
//             output.push(input);
//         }
//         let each = output.map((element) => element ** exponent);
//         let sum = each.reduce((a, b) => a + b);
//         if (sum === j) {
//             count++;
//             console.log(j);
//         }
//     }while(count <= 25);
// }








//sumDigits(12345);
//expected 15
//Done

function sumDigits(x){
    let output = [];
    let numString = x.toString();
    for(let i = 0; i <= numString.length; i++){
        output.push(i);
    }
    let total = output.reduce((a, b) => a + b);
    console.log(total);
}




















