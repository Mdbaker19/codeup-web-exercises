$(document).ready(function (){
    const wait = (sec) => {
        return new Promise((resolve, reject) => {
            setTimeout(function (){
                if(!isNaN(sec)){
                    resolve(`You'll see this after ${sec/1000} second(s)`);
                } else {
                    reject(`${sec} is not a valid Number`);
                }
            }, sec);
        })
    }




    wait("ww").then((data) => console.log(data)).catch((err) => console.error(err));
    wait(1000).then((data) => console.log(data)).catch((err) => console.error(err));
    wait(3000).then((data) => console.log(data)).catch((err) => console.error(err));
    wait(6000).then((data) => console.log(data)).catch((err) => console.error(err));
    wait(8000).then((data) => console.log(data)).catch((err) => console.error(err));
    wait(9500).then((data) => console.log(data)).catch((err) => console.error(err));
});