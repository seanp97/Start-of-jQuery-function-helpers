
$.fn.thisHeight = function() {
    thisHeight = $(this).height();
    return thisHeight;
}

$.fn.thisWidth = function() {
    thisWid = $(this).width();
    return thisWid;
}

$.fn.thisText = function() {
    thisT = $(this).text();
    return thisT;
}

$.fn.thisCSS = function(style) {
    thisCSS = $(this).css(style);
    return thisCSS;
}

$.fn.isUpperCase = function() {
    thisUpper = $(this).text();

    if (thisUpper == thisUpper.toUpperCase()) {
        return "Is uppercase";
    }
    else {
        return "Not uppercase";
    }
}

$.fn.isCapitals = function() {
    thisCaps = $(this).text();
    firstLetter = $(this).text().substring(0, 1);
    textLen = $(this).text().length;
    restOfString = $(this).text().substring(1, textLen);
    capsFullWord = firstLetter == firstLetter.toUpperCase() && restOfString == restOfString.toLowerCase();

    if (firstLetter == firstLetter.toUpperCase() && restOfString == restOfString.toLowerCase()) {
        return "Capitals";
    }
    else {
        return "Not capitals";
    }
}




