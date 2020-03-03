$.fn.thisHeight = function() {
    return $(this).height();
}

$.fn.thisWidth = function() {
    return $(this).width();
}

$.fn.thisText = function() {
    return $(this).text();
}

$.fn.thisCSS = function(style) {
    return $(this).css(style);
}

$.fn.thisOuterWidth = function() {
    return $(this).outerWidth();
}

$.fn.thisOuterHeight = function() {
    return $(this).outerHeight();
}

$.fn.thisInnerWidth = function() {
    return $(this).innerWidth();
}

$.fn.thisInnerHeight = function() {
    return $(this).innerHeight();
}

$.fn.thisNthPosition = function() {
    return $(this).index();
}

$.fn.thisXYPos = function() {
    var XYpos = $(this).position();
    return "Top position: " + XYpos.top + " Left position: " + XYpos.left;
}

$.fn.hasNoChildren = function() {
    if($(this).children().length == 0) {
        return true;
    }
    else {
        return false;
    }
}

$.fn.elemPadding = function() {
    return "Padding: " + $(this).css("padding");
}

$.fn.elemMargin = function() {
    return "Margin: " +  $(this).css("margin");
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

$.fn.getImgSrc = function() {
    return $(this).attr("img");
}

$.fn.fadeInOutScroll = function(fadeValue) {
    if ($(window).scrollTop() > fadeValue) {
        $(this).fadeIn();
    }
    else {
        $(this).fadeOut();
    }
}

$.fn.textEmpty = function() {
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

//RGB colors only to check in arguement
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

$.fn.winHREF = function() {
    return window.location.href;
}

$.fn.elemAttr = function(elemAttr) {
    return $(this).attr(elemAttr).split(/\s+/);
}

$.fn.hasAttr = function(elemAttr) {
    if ($(this).attr(elemAttr).split(/\s+/).length > 0) {
         return true;
    }
    else {
        return false;
    }
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

$.fn.slider = function(childElem, slideSpeed) {
    $(this).on("click", function () {
        var prop = $(this).prop("tagName").toLowerCase();
        if ($(this).attr("class") != "" || $(this).attr("id") != "") {
            var className = $(this).attr('class');
            var idName = $(this).attr('class');
        }
        $(this).find(childElem).slideToggle(slideSpeed);
        $(prop).not(this).find(childElem).slideUp(slideSpeed) || $(className).not(this).find(childElem).slideUp(slideSpeed) || $(idName).not(this).find(childElem).slideUp(slideSpeed);
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

$.fn.eachToggleClass = function(eventType, elemClass) {
    $(this).each(function () {
        $(this).on(eventType, function () {
            $(this).toggleClass(elemClass);
        });
    });
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

$.fn.widthSame = function() {
    var initWidth = 0;
    var Temp = 0;
    $(this).each(function () {
        Temp = $(this).width();

        if (Temp > initWidth) {
            initWidth = Temp;
        }
    });

    $(this).css("width", initWidth);
}

$.fn.getHREF = function() {
    return $(this).attr("href");
}

$.fn.hrefMatchURL = function() {
    var hrefURL = window.location.href;

    if($(this).attr("href") == hrefURL) {
        return true;
    }
    else {
        return false;
    }
}

//topVal: 600 recommended
$.fn.inViewport = function(topVal, viewClass) {
    $(this).each(function() {
        var thisPos = $(this).offset().top;
        var winTop = $(window).scrollTop();

        if (thisPos < winTop + topVal) {
            $(this).addClass(viewClass);
        }
    });
}

$.fn.backToTop = function(speed) {
    $(this).click(function () {
        $('html, body').animate({ scrollTop: 0 }, speed);
    });
}

$.fn.imageChange = function(mainElem) {
    $(this).each(function () {
        $(this).click(function () {
            var imgSRC = $(this).attr("src");
            $(mainElem).attr("src", imgSRC);
        });
    });
}
