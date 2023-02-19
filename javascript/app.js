

var main = function() {
    "use strict";

    var $headerFirstChild = $("<p>").text("first child of header");
    $("header").prepend($headerFirstChild);

    var $footerFirstChild = $("<p>").text("first child of footer");
    $("footer").prepend($footerFirstChild);

    var addCommentFromInputBox = function() {
        var $newComment = $("<p>");
        if ($(".comment-input input").val() !== "") {
            $newComment = $("<p>").text($(".comment-input input").val());
            // hides the comment after it's inpoutted 
            $newComment.hide();
            $(".comments").append($newComment);
            /* after appending comment onto comment list, 
               clear textbox for next entry by supplying the box's value with empty string */
            // fades in the comment after its appended onto comment list
            $newComment.fadeIn();
            $(".comment-input input").val("")
        }
    }

    // attaching an event listenerto the DOM element referenced in the call to the $ function 

    /* upon pressing enter, comment will be added to comment list */    
    $(".comment-input input").on("keypress", function (event) {
        /* instead of listening to button being clicked, we can listen to the enter key 
        * $(".comment-input button").on("click", function (event) --> listens to the click of our button
            * $(".comment-input button").on("keypress", function (event)
            * console.log("this is the keyCode" + event.keyCode); --> this body listens to textbox value's after button is clicked
        * $(".comment-input button").on("keypress", function (event) --> this with subsequent code below(with console.log(..)), listens to every character typed 
        * console.log("this is the keyCode" + event.keyCode);
            * the console.log tells us each character code when it's typed, the enter key has a code of 13
            * so we can set the stage when event.keyCode === 13, we can append the textbox's value onto comment list
            * if (event.keyCode === 13) {execute body of code to add comments onto comment list}
        */
       

        /* click of the + button adds this comment to the console log
        console.log("Hello World!");
        * appending a DOM element to comments section using JQuery
        * JQuery code $ selects the comments section and appends HTML code to it
        $(".comments").append("<p>this is a new comment</p>");
        */

        /* variable to hold DOM element(a comment) which we're going to append
        * creating a new paragraph element as a jquery object($newComment) 
        * and changing text of new paragraph element
        var $newComment = $("<p>");
        $newComment.text("this is a new comment");
        $(".comments").append($newComment);
        */


        /* targeting the input element contained in .comment-input section --> $(".comment-input input")
            * target element with ".comment-input class", then drilling down to get functions of that element
                * using jquery($) we have access to our html, 
                * and we can refer to section(<section class = "comment-input">)  
                * and grab an input from that section.. --> $(".comment-input input")
                * we can also grab the value from that input with dot notation  --> $(".comment-input input").val()
            * getting value from the input box from our html section --> ($(".comment-input input").val()) 
            * and storing in variable 
        */
       
        
        /*
        // storing comment added from webpage to variable, 
        // then appending variable(comment value from input) to list of comments
        commentText = $(".comment-input input").val();
        $newComment.text(commentText);
        $(".comments").append($newComment);
        */

        
        // if statement handles the case if there's an empty entry in box 
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
        
    });


    /* upon button being clicked, comment will be added to comment list */
    $(".comment-input button").on("click", function (event) {
        "use strict";

        addCommentFromInputBox();

    });

}
$(document).ready(main);