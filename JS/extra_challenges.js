for(let n = 0; n < 10000000; n++){
    narcissisticNum(n);
}

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
// to 10mil is 25th
//0-9
// 153
// 370
// 371
// 407
// 1,634
// 8,208
// 9,474
// 54,748
// 92,727
// 93,084
// 548,834
// 1,741,725
// 4,210,818
// 9,800,817
// 9,926,315

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
//         j++;
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






maxSubseqSum([-2, -3, 4, -1, -2, 1, 5, -3]);
//expected 7 -- from [4, -1, -2, 1, 5]
//maxSubseqSum([-7, 1, -3, 4, -1, 2, 1, -5, 4]);
//expected 6 --- from [4, -1, 2, 1]

/* So check the numbers and add them up, compare the total to a total of all the numbers
* other than the last added up, if that is higher replace that with the new sum
* loop through again and possibly shift something out if it is a higher max with it shifted
*
*
*
* */
function findMax(array){
    let currentMax = array[0];
    for(let i = 0; i <array.length; i++){
        if(array[i] > currentMax){
            currentMax = array[i];
        }
    }return currentMax;
}


function maxSubseqSum(array){
    console.log("array to check is: " + array);
    let max = findMax(array);
    let maxIndex = array.indexOf(max);
    console.log("index of max num is : " + maxIndex);
    if(max + array[maxIndex - 1] > max){
        max += array[maxIndex - 1];
    }
    console.log("max num in original array is: " + max);
    array.splice(maxIndex, 1);
    console.log("array with max missing is : " + array);
    let secondMax = findMax(array);
    console.log("second highest num is: " + secondMax);

    let secondMaxIndex = array.indexOf(secondMax);


}


// function maxSubseqSum(array){
//     let output = [];
//     let newArray = [];
//     let currentMax = array.reduce((a, b) => a + b);
//     for(let i = 0; i < array.length; i++){
//         let eachNum = array[i];
//         newArray.push(eachNum);
//         output = newArray;
//         let compareMax = newArray.reduce((a, b) => a + b);
//         console.log(compareMax);
//         if(compareMax > currentMax){
//             currentMax = compareMax;
//         }
//     }
//     console.log(currentMax);
//     return currentMax;
// }
//
// function maxSubseqSum(array){
//     let output = array;
//     let currentMax = array.reduce((a, b) => a + b);
//     for(let i = 0; i <= array.length; i++){
//         output.shift();
//         console.log(output);
//     }
// }









function password(specialNum, numberNum, passwordLength, upperCaseInclude, lowerCaseInclude){
    const randomIndex = Math.floor(Math.random()*9)+1;
    let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", ".", ","];
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    var outputPassword = "";
    outputPassword.length = passwordLength;
    specialNum = specialChar[specialNum];
    numberNum = numbers[numberNum];
    if(upperCaseInclude === true){
        outputPassword += upperChar[randomIndex];
    }
    if(lowerCaseInclude === true){
        outputPassword += lowerChar[randomIndex];
    }
    if(specialNum === true){
        outputPassword += specialChar[randomIndex];
    }
    if(numberNum === true){
        outputPassword += numbers[randomIndex];
    }

    console.log(outputPassword);
}

//password(true, true, 50, true, true);
//does not work, how to get the length to the length and does not add special char or nums



























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




















