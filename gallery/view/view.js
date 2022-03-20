let arrNumber = (imgHref.length);
var displayImg = document.getElementById('displayImage');
var displayShade = document.getElementById('displayShadow');
var displayDiv = document.querySelector('.picture');
var backBottle = document.querySelector('.back');

//start
if (window.name == "") {
    $(".picture,#error").css({
        "animation-name": "start",
        "animation-duration": "1s",
        "animation-timing-function": "cubic-bezier(0, .76, 0, 1)"
    });
    $("#displayShadow").css({
        "animation-name": "blur",
        "animation-duration": "1s",
        "animation-timing-function": "cubic-bezier(0, .76, 0, 1)"
    });
    window.name = "isReload";
}

// Decoding
var poundSign = window.atob(window.location.hash.replace("#", ""));
href = imgHref[arrNumber - poundSign].replace("&r;", abbreviations);
if (href) {
    $(".loading img").hide();
    displayImg.src = href;
    displayShade.src = href;
    $(".picture").show();
    $(".picture").css('pointer-events', "none")
    // Size
    var windowW = $(window).width();
    var windowH = $(window).height();
    windowProportion = windowW / windowH;
    displayImg.onload = function () {
        $("#loading").fadeOut("fast");
        $(".picture").css('pointer-events', "auto")
        var pictureW = displayImg.width;
        var pictureH = displayImg.height;
        pictureProportion = pictureW / pictureH;
        if (windowProportion < pictureProportion) {
            aspectRatio = true;
            displayImg.width = windowW * .9;
            displayShade.width = displayImg.width;
            displayShade.height = displayImg.height;
        } else {
            aspectRatio = false;
            displayImg.height = windowH * .9;
            displayShade.width = displayImg.width;
            displayShade.height = displayImg.height;
        };
    }
} else {
    errorDisplay();
}

//Eggs
if (arrNumber * .02 > poundSign && poundSign != 0) {
    if (window.localStorage.getItem("egg")) {
        times = window.sessionStorage.getItem("times");
        times = parseInt(times);
        if (times) {
            times += 1;
            window.sessionStorage.setItem('times', times);
            if (times >= 3 && times < 6) {
                $('body').append('<div id="iqrs">别再刷新了，彩蛋就只触发一次(*￣0￣)</div>');
            } else if (times >= 6 && times < 10) {
                $('body').append('<div id="iqrs">行啦，就给你<a class="href" href="javascript:window.localStorage.clear();window.sessionStorage.clear();console.log(' + "'clear'" + ');location.reload();">再来一次</a>吧</div>');
            };
            $('#iqrs').css({
                "display": "inline",
                "position": "absolute",
                "bottom": "5px",
                "right": "5px",
                "z-index": "6",
                "background-color": "rgba(255, 255, 255, .5)",
                "color": "var(--mainColor7)",
                "border-radius": "5px",
                "padding": "2px 5px",
                "box-shadow": "0 0 6px var(--black1)"
            });
        } else {
            window.sessionStorage.setItem('times', 1);
        }
    } else {
        $('body').append('<a href="/surprise/index.html#7a1t2dxh4h0u" target="_blank" id="iqrs">彦祖&emsp;你来考古辣~</a>');
        $('#iqrs').css({
            "display": "inline",
            "position": "absolute",
            "bottom": "5px",
            "right": "5px",
            "z-index": "6",
            "background-color": "rgba(255, 255, 255, .5)",
            "color": "var(--mainColor7)",
            "border-radius": "5px",
            "padding": "2px 5px",
            "box-shadow": "0 0 6px var(--black1)"
        });
        window.localStorage.setItem("egg", true);
    }
}

// 放大
var zoom = false;
displayImg.addEventListener('click', function () {
    if (zoom) {
        zoom = false;
        $('.picture').removeClass("zoom");
        $('#displayShadow').css(
            'transform', 'scale(1)'
        );
        $('body').css(
            'background-color', '#ccc'
        );
    } else {
        zoom = true;
        $('.picture').addClass("zoom");
        $('body').css(
            'background-color', '#111'
        );
        if (aspectRatio) {
            //width
            zoomRatio = windowH / displayShade.height;
        } else {
            zoomRatio = windowW / displayShade.width;
        };
        zoomRatio *= 1.2;
        $('#displayShadow').css(
            'transform', 'scale(' + zoomRatio + ')'
        );
    };
});

// 错误显示
function errorDisplay() {
    $("#loading img").hide();
    window.clearInterval(loading)
    $("#error").fadeIn("fast");
    var countdown = 5;
    var countdownInterval = window.setInterval(function () {
        countdown--;
        if (countdown <= 0) {
            window.location.replace("..");
            window.clearInterval(countdownInterval);
        };
        $("#time").text(countdown);
    }, 1000)
}

// BACK Button
var back = true
backBottle.onclick = function () {
    if (back) {
        window.opener = null;
        window.open('', '_self');
        window.close();
    } else {
        window.location.href = "../";
    }
    setTimeout(function () {
        back = false
    }, 600);
}

var refreshWithDetectionWidth = $(window).width();
setInterval(function () {
    if ($(window).width() != refreshWithDetectionWidth) {
        location.reload();
    };
}, 5000);