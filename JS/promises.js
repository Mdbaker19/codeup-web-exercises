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




    // wait("ww").then((data) => console.log(data)).catch((err) => console.error(err));
    // wait("'''==;;").then((data) => console.log(data)).catch((err) => console.error(err));
    // wait("   -jj ").then((data) => console.log(data)).catch((err) => console.error(err));
    // wait(1000).then((data) => console.log(data)).catch((err) => console.error(err));
    // wait(3000).then((data) => console.log(data)).catch((err) => console.error(err));
    // wait(6000).then((data) => console.log(data)).catch((err) => console.error(err));
    // wait(8000).then((data) => console.log(data)).catch((err) => console.error(err));
    // wait(9500).then((data) => console.log(data)).catch((err) => console.error(err));



    let spot = $(".person");

    const baseUrl = "https://api.github.com";

    const checkRateLimit = ()=>{
        $.get(`${baseUrl}/rate_limit`, () => {
        }).done((data) => {
            console.log(data.rate);
        });
    }
    checkRateLimit();

    const findEvent = function (un) {
        fetch(`${baseUrl}/users/${un}/events/public`, {headers: {'Authorization': gitHubToken}}).then((response) => {
            return response.json();
        }).then(data => {
            console.log(data);
            spot[0].innerHTML += render(data, un);
        }).catch(error => {
            console.error(error);
        });
    }

    function render(data, name){
        let html = `<div>`;
        html+= `<h1>${name} made a ${data[0].type} to : </h1>`;
        html+=`<h3>${data[0].repo.name} at : </h3>`;
        html+=`<h3>${date(data[0].created_at)}</h3>`;
        html+=`<h3>${getTime(data[0].created_at)}</h3>`;
        html+=`</div>`;
        return html;
    }

    function date(input){
        return input.substring(0, 10);
    }

    function getTime(input){
        let formatted =  input.split("T").join("").substring(10, input.length-2).split(":");
        let hours = formatted.shift();
        let myTime = parseFloat(hours) - 6;
        formatted.unshift(myTime);
        return formatted.join(":");
    }

    findEvent("Mdbaker19");



});