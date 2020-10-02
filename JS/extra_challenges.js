// function narcissisticNum(x){
//     let output = [];
//     let exponent = x.toString().length;
//     let value = x.toString();
//     for(let i = 0; i < exponent; i++){
//         let input = value.charAt(i);
//         output.push(input);
//     } let each = output.map((element) => element ** exponent);
//     let sum = each.reduce((a, b) => a + b);
//     if(sum === x){
//         console.log(true);
//     } else
//     console.log(false);
// }


    for (let j = 0; j < 300; j++) {
        narcissisticNum(j);
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
        //         console.log(j + true);
        //     } else
        //         console.log(j + false);
        // }
    }


function narcissisticNum(j) {
    let output = [];
    let exponent = j.toString().length;
    let value = j.toString();
    for (let i = 0; i < exponent; i++) {
        let input = value.charAt(i);
        output.push(input);
    }
    let each = output.map((element) => element ** exponent);
    let sum = each.reduce((a, b) => a + b);
    if (sum === j) {
        console.log(j + "true");
    } else
        console.log(j + "false");
}