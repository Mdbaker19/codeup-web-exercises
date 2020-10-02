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
