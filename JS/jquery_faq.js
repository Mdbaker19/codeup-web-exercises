$(document).ready(function(){
    $("#toggleDD").on("click", function (){
        $("dd").toggleClass("invisible");
    });
    $("dt").on("click", function (){
        if($(this).hasClass("highlighted")){
            $(this).removeClass("highlighted");
        } else $(this).addClass("highlighted");
    });
});