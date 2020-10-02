function isEven(x){
    return(x % 2 === 0);
}


function skipNum(){
    let response = parseFloat(prompt("please enter an odd number below " + " ----ill know if it is odd"));
    if(!(isNaN(response))){
        if(isEven(response)){
            alert("Told You i would know");
        } else {
            for(let i = 1; i <= 50; i++) {
                if (isEven(i)) {
                    continue;
                }
                if (i === response) {
                    console.log("Yikes! Skipping number: " + i);
                    continue;
                }
                console.log("Here is an odd number: " + i);
            }
            }
    }//if not a number do this
    else alert("NOT A NUMBER!!");
}

//skipNum();
// var i = 1;
// while(i < 65535){
//     i*=2;
//     console.log(i);
// }

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

 var allCones = Math.floor(Math.random() * 50) + 50;
do{

    let conesSold = Math.floor(Math.random() * 5) + 1;
    allCones -= conesSold;
    console.log(allCones);
    if(allCones === 0){
        console.log("Yay! I sold them all!");
    } else if(allCones < conesSold){
        console.log("cannot sell you " + conesSold + " I only have " + allCones);
    } else {
        console.log(conesSold + "cones sold...");
    }
}while(allCones >= 0);


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


