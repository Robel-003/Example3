/*
var main = function() {
    "use strict";

    // creating tab functionality 
        // making all the tabs inactive except the first tab
        // emptying the main content so we can recreate it 
        // return false so link is not working 

    // need to pass in argument to refer to the tab number in question 
    var activateTabs = function (tabNumber) {
        // referring to tabs div container, span element in html
            // and removing its active state in the class 
        $(".tabs span").removeClass("active");
        // adding an active class to the first(& subsequent) tab(s) --> (.tab a:nth-child(1)) 
            // tabNumber var will refer to the tab in question 
                // and tabSelector var will activate that tab's class 
        var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
        $(tabSelector).addClass("active");
        // empty tab content so to recreate it 
        $("main .content").empty()
    }

    $(".tabs a:nth-child(1)").on("click", function() {
    activateTabs(1);
    // return statement remains in click handler 
        // because the listener has to return false or browser will try to follow the link 
        return false;
    });

    // adding click events for tabs 2 & 3 
    $(".tabs a:nth-child(2)").on("click", function() {
        activateTabs(2);
        return false;
    });
    
    // adding click events for the following tabs 
    $(".tabs a:nth-child(3)").on("click", function() {
        activateTabs(3);
        return false;
    });
};
*/


/* // refactoring above code to iterate over tab number in question 
var mainRefactored = function() {
    "use strict";
    // iterating over which tab to listen to depending on which tab is clicked 
    for (var tabNumber = 1; tabNumber <= 3; tabNumber++) {
        var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
        // using an event object that is sent into the click handler(similar to keyPress events("enter"))
        // the function performs operations on which tab has been clicked
        $(tabSelector).on("click", function (event) {
            $(".tabs span").removeClass("active");
            // using event object to get the target DOM element that is clicked..
                // $(".tabs a:nth-child(2)").addClass("active"); 
            // ..and adding an "active" class to that element
            $(event.target).addClass("active");
            return false
        });
    }
};
$(document).ready(mainRefactored);
*/



// refactoring above code to iterate through an array for the tab number in question 
var mainRefactored = function() {
    "use strict"; 

    // array elements to be added to the content as strings  
    var toDos = [
        "Finish chapter on directed graphs",
        "Do weekly leetcode problem",
        "Take quiz 6 for database",
        "Read chapter 3 and 4 on Amazon Dynamo and Sharding",
        "Finish MongoDB API clone for web app dev",
        "Practice working with express servers"
    ];


    // selecting a set of "elements"(".tabs span") and iterating over elements as an array (JS for each)
        // iterating over span elements inside the tabs, creating a click handler for each tab
    $(".tabs a span").toArray().forEach(function (element) {
        // since we're using jquery version of element, 
        // we'll create a tenoirary variable 
        // so we don't keep recreating it
        var $element = $(element);

        // creating a click handler for this element(s)
        $element.on("click", function () {
            
            // creating variables to refer to the content div in main container  
            // and variables for input and button listeners
            var $content, $input, $button;


            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();


            // $element.parent() gets the parent of specified jquery object
            // in this case span is the child element & <a>(anchor element) is the parent
            if ($element.parent().is(":nth-child(1)")) {
                // appending list items(from toDos array) to the newest tab, 
                // for loop will show the newest lists at the top, and oldest at the bottom
                $content = $("<ul>");
                for (let index = toDos.length-1; index >= 0; index--) {
                    $content.append($("<li>").text(toDos[index]));
                }

            } else if ($element.parent().is(":nth-child(2)")) {
                // appending list items(from toDos array) to the oldest tab, 
                // for each loop will show the oldest lists at the top, and newest at the bottom
                    // creation of list element("<ul>") 
                    // and appending to content section of main container
                        // (todo) --> following elements to be added will be passed in through function
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });

            } else if ($element.parent().is(":nth-child(3)")) {
                // need an input element and a button element to add on to our array
                // input element adding a new item onto the list and appending to array
                    
                // building DOM subtree(<input> & <"button">) using jquery instead of html
                $input = $("<input>"),
                $button = $("<button>").text("+");

                // listening to button click and handling its events
                $button.on("click", function () {
                    // getting the value from the input and pushing onto array
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });

                // adding the input and button elements onto our div container
                $content = $("<div>").append($input).append($button);
            }

            // appending content to the main container in .content section
            $("main .content").append($content);
            
            return false;
        });
    });

    // triggering a fake click on the first tab 
    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(mainRefactored);