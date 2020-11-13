$(document).ready(function(){

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

    $("h3").on("click", function () {
        $(this).next().css("fontWeight", "bold");
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
        firstArea.html(secondImage).show(1000);//the .show() does not work like i thought it would
        secondArea.html(firstImage);
        firstImage = $(".firstArea").html();
        secondImage = $(".secondArea").html();
    });

    $("#secondImg").on("click", function (){
        $("#second")
    });

    $("#thirdImg").on("click", function (){

    });



});