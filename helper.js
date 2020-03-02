

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

$.fn.isLowerCase = function() {
    thisUpper = $(this).text();

    if (thisUpper == thisUpper.toUpperCase()) {
        return true;
    }
    else {
        return false;
    }
}

$.fn.isUpperCase = function() {
    thisUpper = $(this).text();

    if (thisUpper == thisUpper.toUpperCase()) {
        return true;
    }
    else {
        return false;
    }
}

$.fn.isCapitals = function() {
    thisCaps = $(this).text();
    firstLetter = $(this).text().substring(0, 1);
    textLen = $(this).text().length;
    restOfString = $(this).text().substring(1, textLen);
    capsFullWord = firstLetter == firstLetter.toUpperCase() && restOfString == restOfString.toLowerCase();

    if (firstLetter == firstLetter.toUpperCase() && restOfString == restOfString.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}

$.fn.stringEmpty = function() {
    if (this.text() == "") {
        return true;
    }
    else {
        return false;
    }
}

//RGB colors only to check in arguement
$.fn.isColor = function(elemColor) {
    if ($(this).css("color") == elemColor) {
        return true;
    }
    else {
        return false;
    }
}

$.fn.isBackgroundColor = function(elemBGColor) {
    if ($(this).css("background-color") == elemBGColor) {
        return true;
    }
    else {
        return false;
    }
}

$.fn.elemExists = function() {
    if ($(this).length > 0) {
        return true;
    }
    else {
        return false;
    }
}

$.fn.inputVal = function() {
    return $(this).val();
}

$.fn.elemAttr = function(elemAttr) {
    return $(this).attr(elemAttr).split(/\s+/);
}

$.fn.keyCodePress = function(keyNumber) {
    $(document).keyup(function (e){
        if (e.keyCode == keyNumber) {
            return true;
        }
        else {
            return false;
        }
    });
}

$.fn.hasAttr = function(elemAttr) {
   if ($(this).attr(elemAttr).split(/\s+/).length > 0) {
        return true;
   }
   else {
       return false;
   }
}


$.fn.slider = function(childElem, slideSpeed) {
    $(this).on("click", function () {
        $(this).find(childElem).slideToggle(slideSpeed);
    });
}

$.fn.elemVisible = function() {
    if ($(this).is(":hidden") || $(this).css("visibility") == "hidden") {
        return false;
    }
    else {
        return true;
    }
}

$.fn.heightSame = function() {
    var initHeight = 0;
    var Temp = 0;
    $(this).each(function () {
        Temp = $(this).height();

        if (Temp > initHeight) {
            initHeight = Temp;
        }
    });

    $(this).css("height", initHeight);
}
