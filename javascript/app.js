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
}
*/



/* refactoring above code to iterate over tab number in question */
var mainRefactored = function() {
    "use strict";
    /* iterating over which tab to listen to depending on which tab is clicked */
    var tabNumber;
    for (tabNumber = 1; tabNumber <= 3; tabNumber++) {
        var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
        /*  */
        $(tabSelector).on("click", function (event) {
            /* */
            $(".tabs span").removeClass("active");
            /* */
            $(event.target).addClass("active");
            return false
        });
    }
};
$(document).ready(mainRefactored);