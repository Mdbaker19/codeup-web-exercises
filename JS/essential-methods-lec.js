"use strict";

$(document).ready(function() {

    //Name input goes through random sorting here. No need to change this code.
    $('#sort-wizard').click(function(e){
        let house = Math.floor(Math.random() * 4);
        let newWizard = $('#new-wizard');
        let newMember = $('<li></li>').text(newWizard.val());
        switch(house){
            case 0:
                $('#gryffindor').append(newMember);
                break;
            case 1:
                $('#slytherin').append(newMember);
                break;
            case 2:
                $('#ravenclaw').append(newMember);
                break;
            default:
                $('#hufflepuff').append(newMember);
                break;
        }
        newWizard.val('');
    });

    /**********************************************
     * 			Attributes and CSS
     *********************************************/

    /************
     *   HTML
     *************/

    var gryffindor = $('#gryffindor').html();
    // console.log(gryffindor);

    // TODO TOGETHER: store the html of #main-heading in a variable named mainHeading
    // var mainHeading = $("#main-heading").html();
    // TODO: uncomment the line below
    // alert(mainHeading);
    // alert(mainHeading);
    // $("#main-heading").on("click", function (){
    //     $(this).html("Hogwarts");
    // });

    // TODO TOGETHER: using the css method, grab the current width of the sorting hat img. Console log your results
    console.log($("img").css("width"));
    /************
     *   CSS
     ************/

    // TODO TOGETHER:  Using an event listener and css method, increase the font-size of 'Sorting Hat' when clicked.
    //    How can font size be changed using .html()? => make it to an h1 or h6 if it were to be an h3 or something
    $("#main-heading").on("click", function (){
       $(this).css("fontSize", "75px");
    });

    // TODO: Using a css method, change the banner background-color to black
    //  Hint: make sure you use the right selector
    $(".banner").css("backgroundColor", "black");

    /**********************
     *  Class Manipulation
     **********************/

    // TODO TOGETHER: When the 'Houses' button is clicked, add the class 'house' to anything with a class of 'house-name'
    // $("#highlight-houses").on("click", function (){
    //    $(".house-name").addClass("house");
    // });
    // TODO TOGETHER: Comment out the code above. Add the class of 'house' to all the 'house-names'
    //class added in the HTML first to then remove it this time
    // TODO: Write the event listener to remove the class instead
    // $("#highlight-houses").on("click", function (){
    //     $(".house-name").removeClass("house");
    // });
    // TODO TOGETHER: Refactor your addClass and removeClass methods to toggle the 'house' class instead
    $("#highlight-houses").on("click", function (){
       $(".house-name").toggleClass("house");
    });

    // This provides the 'Lock In' functionality. Selected my button -> add an event listener
    $('#lock-g').click(function(e){
        //select heading to toggle background-color assigned in CSS
        $('#gryffindor-house').toggleClass('gryffindor');
        //conditional that changes the message in button depending on class property
        if($('#gryffindor-house').hasClass('gryffindor')){
            $(this).text('Unlock');
            // $('#gryffindor').css('background-color','red');
        }else {
            $(this).text('Lock In');
            // $('#gryffindor').css('background-color','');
        }
    });

    //TODO TOGETHER: complete the Lock In functionality for Slytherin
    $('#lock-s').click(function(e) {
        $('#slytherin-house').toggleClass('slytherin');
        if($('#slytherin-house').hasClass('slytherin')){
            $(this).text('Unlock');
        }else {
            $(this).text('Lock In');
        }
    });

    //TODO: Add the Lock In functionality for Ravenclaw and Hufflepuff

    $("#lock-h").on("click", function (){
        $("#hufflepuff-house").toggleClass("hufflepuff");
        if($("#hufflepuff-house").hasClass("hufflepuff")){
            $(this).text("Unlock");
        } else{
            $(this).text("Lock In");
        }
    });

    $("#lock-r").on("click", function (){
        $("#ravenclaw-house").toggleClass("ravenclaw");
        if($("#ravenclaw-house").hasClass("ravenclaw")){
            $(this).text("Unlock");
        } else {
            $(this).text("Lock In");
        }
    });






    /**********************************************
     * 			       Traversing
     *********************************************/

    //TODO TOGETHER: Using the each method, highlight every other list item in the Ravenclaw house => .children selector
    $("#ravenclaw").children().each(function (item, element){
        // console.log($(this).html());
        //same thing^^^^^ as below
        console.log(element.innerHTML);
        if(item % 2 !== 0){
            $(this).css("backgroundColor", "#3396ff");
        }
    });


    //TODO TOGETHER: Change the font color of the first list element in Hufflepuff
    $("#hufflepuff").children().first().css("color", "yellow");

    //TODO TOGETHER: Change the font color of the last list element in Slytherin
    $("#slytherin").children().last().css("color", "green");



    //TODO TOGETHER: When the 'Witches' button is clicked, highlight all names that have been assigned the class of 'witches'
    $('#highlight-witches').click(function(e){
        $('li').each(function(){
            if($(this).hasClass('witches')){
                $(this).toggleClass(('witch'))
            }
        });
    });

    $('#highlight-wizards').click(function(e){
        $('li').each(function(){
            if($(this).hasClass('wizards')){
                $(this).toggleClass(('wizard'));
                $(this)/*.next()*/.css('color', 'orange');
            }
        });
    });

    console.log($("#terrell").parent());
    console.log($("#terrell").parents());


    let parentsArr = $("#terrell").parents();

    parentsArr[parentsArr.length-2].css("color", "blue");//DOES NOT WORK. WILL COME BACK LATER I'M SURE AND SEE WHAT I DID WRONG

    //BONUS: .prev() method

    // $('ul').click(function(e){
    //     $(this).prev().addClass('gryffindor');
    // });

});