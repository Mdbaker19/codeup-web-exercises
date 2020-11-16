$(document).ready(function(){

    $("span").on("click", function (){
        $(".wouldYouLikeToSignUp").hide();
    })





    $("ul").hide();
    $(".planetName").on("click", function (){
        $(this).next().slideToggle(2000);
    });






    let fadeIn = $(".fadingSignUp");
    fadeIn.hide();
    fadeIn.fadeIn(8000).css("color", "yellow");



    $("h3").on("click", function () {
        $(this).next().css("fontWeight", "bold");
    });

    $("#toggleDD").on("click", function (){
        $("dd").toggleClass("invisible");
    });

    $("dt").on("click", function (){
        if($(this).hasClass("highlighted")){
            $(this).removeClass("highlighted");
        } else $(this).addClass("highlighted");
    });

    $("#lastToYellow").on("click", function (){
        $("ul").each(function (i, e){
            $(e).children().last().css("backgroundColor", "yellow");
        });
    });


    $("li").on("click", function (){
        $(this).parent().children().first().css("color", "blue");
    });
    // $(".swap").on("click", function (){
    //     console.log($(this).html());
    // });

    let firstImage = $("#first");
    let secondImage = $("#second");
    let thirdImage = $("#third");
    let firstArea = $(".firstArea");
    let secondArea = $(".secondArea");
    let thirdArea = $(".thirdArea");
    $("#firstImg").on("click", () => {
        firstArea.html(secondImage);
        secondArea.html(firstImage);
        firstImage = $(".firstArea").html();
        secondImage = $(".secondArea").html();
    });

    $("#secondImg").on("click", function (){
        let ran = Math.floor(Math.random()*2);
        if(ran === 0){
            firstArea.html(secondImage);
            secondArea.html(firstImage);
            firstImage = $(".firstArea").html();
            secondImage = $(".secondArea").html();
        }else {
            secondArea.html(thirdImage);
            thirdArea.html(secondImage);
            secondImage = $(".secondArea").html();
            thirdImage = $(".thirdArea").html();
        }
    });

    $("#thirdImg").on("click", function (){
        secondArea.html(thirdImage);
        thirdArea.html(secondImage);
        secondImage = $(".secondArea").html();
        thirdImage = $(".thirdArea").html();
    });



});