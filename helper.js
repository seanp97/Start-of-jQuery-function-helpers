function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

$.fn.thisBGColor = function() {
    var BGcolor = $(this).css("background-color");
    return rgb2hex(BGcolor);
}

$.fn.thisColor = function() { 
    var ThisColor = $(this).css("color");
    return rgb2hex(ThisColor);
}

$.fn.thisHeight = function() {
    return $(this).height();
}

$.fn.thisWidth = function() {
    return $(this).width();
}

$.fn.thisText = function() {
    return $(this).text();
}

$.fn.thisLength = function() {
    return $(this).length;
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

$.fn.thisHeightCompare = function(x) {
    if ($(this).height() > x) {
        return "Elements height is bigger than " + x + "px";
    }
    else {
        return "Elements height is smaller than " + x + "px";
    }
}

$.fn.thisWidthCompare = function(x) {
    if ($(this).width() > x) {
        return "Elements width is bigger than " + x + "px";
    }
    else {
        return "Elements width is smaller than " + x + "px";
    }
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
    var thisLower = $(this).text();

    if (thisLower == thisLower.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}

$.fn.isUpperCase = function() {
    var thisUpper = $(this).text();

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

$.fn.heightSameMax = function() {
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


$.fn.heightSameMin = function() {
    var initHeight = 9999999;
    var Temp = 0;
    $(this).each(function () {
        Temp = $(this).height();

        if (Temp < initHeight) {
            initHeight = Temp;
        }
    });

    $(this).css("height", initHeight);
}

$.fn.widthSameMax = function() {
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

$.fn.widthSameMin = function() {
    var initWidth = 9999999;
    var Temp = 0;
    $(this).each(function () {
        Temp = $(this).width();

        if (Temp < initWidth) {
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
//Window scroll function
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

$.fn.paginationStyle = function(pagClass) {
    $(this).each(function () {
        $(this).click(function () {
            var tagProp = $(this).prop("tagName").toLowerCase();
            if ($(this).attr("class") != "" || $(this).attr("id") != "") {
                var className = $(this).attr('class');
                var idName = $(this).attr('class');
            }
            $(this).addClass(pagClass);
            $(tagProp).not(this).removeClass(pagClass) || $(className).not(this).removeClass(pagClass) || $(idName).not(this).removeClass(pagClass);
        });
    });
}

//Next 3 functions. Element must be position: absolute
$.fn.elemCenterVert = function(elem) {
    var elHeight = $(elem).height() / 2;
    var thisHeight = $(this).height();
    $(this).css("top", (elHeight - (thisHeight / 2)));
}

$.fn.elemCenterVertBottom = function(elem) {
    var elVertWid = $(elem).height() / 2;
    var thisHeight = $(this).height();
    $(this).css("bottom", (elVertWid - (thisHeight / 2)));
}

$.fn.elemCenterHori = function(elem) {
    var elWidth = $(elem).width() / 2;
    var thisWidth = $(this).width();
    $(this).css("left", (elWidth - (thisWidth / 2)));
}

$.fn.upperCaseFirstWord = function() {
    var firstLetter = $(this).text().substring(0, 1);
    var textLen = $(this).text().length;
    var restOfString = $(this).text().substring(1, textLen);
    $(this).text(firstLetter.toUpperCase() + restOfString);
}

$.fn.lowerCaseFirstWord = function() {
    var firstLetter = $(this).text().substring(0, 1);
    var textLen = $(this).text().length;
    var restOfString = $(this).text().substring(1, textLen);
    $(this).text(firstLetter.toLowerCase() + restOfString);
}

$.fn.normalizeSentence = function() {
    var firstLetter = $(this).text().substring(0, 1);
    var textLen = $(this).text().length;
    var restOfString = $(this).text().substring(1, textLen);
    $(this).text(firstLetter.toUpperCase() + restOfString.toLowerCase());
}

$.fn.addPunc = function(Punc) {
    var thisSentence = $(this).text();
    $(this).text(thisSentence + Punc);
}
