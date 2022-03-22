//Cover
if (window.name == "") {
    $(".blackCloth").css("background-color", "var(--black10)")
    setTimeout(function () {
        $(".blackCloth").css({
            "background-color": "var(--black0)",
            transition: "ease-in 2.5s",
        })
    }, 100)
    window.name = "isReload"
}

//Bullet
creatBullet_MaxTime = historyList.length - 1
creatBullet_Times = creatBullet_MaxTime
var boxH = $(".bulletBox").height()
var numberRows = parseInt(boxH / 64)

function randomArrayFunction() {
    randomArray = rowPosition.sort(function () {
        return 0.5 - Math.random()
    })
}

if (numberRows != 0) {
    var interval = Math.round(20000 / (numberRows + 0.6))
    var rowClearance = (boxH - 50 * numberRows) / (2 * numberRows)
    var rowPosition = new Array()
    for (i = 0; i < numberRows; i++) {
        rowPosition.push(
            (2 * i * rowClearance + rowClearance + 50 * i).toFixed()
        )
    }
    randomArray_Times = 0
    randomArrayFunction()

    setInterval(function () {
        var pageW = $(".bulletBox").width() + "px"
        var listOne = historyList[creatBullet_Times].split("$")
        var date = listOne[0].split(".")
        if (Math.random() * 10 < 0.05) {
            var newText = $(
                '<a href="/surprise/index.html#hgg1mlsdlpiy" target="_blank">真的有人会看这个嘛 awa</a>'
            )
        } else {
            var newText = $(
                '<a href="history" ><i class="time"><i class="year">' +
                    date[0] +
                    '.</i><i class="month">' +
                    date[1] +
                    "</i>." +
                    date[2] +
                    " </i>&emsp;" +
                    listOne[1] +
                    " " +
                    listOne[2] +
                    "</a>"
            )
        }
        newText.css({
            left: pageW,
            top: randomArray[randomArray_Times] + "px",
        })
        newText.animate(
            {
                left: -$(this).width(),
            },
            15000,
            "linear",
            function () {
                $(this).remove()
            }
        )
        newText.appendTo(".bulletText")
        if (creatBullet_Times <= 0) {
            creatBullet_Times = creatBullet_MaxTime
        } else {
            creatBullet_Times -= 1
        }
        if (randomArray_Times >= numberRows - 1) {
            randomArray_Times = 0
            randomArrayLastTime = randomArray[numberRows - 1]
            do {
                randomArrayFunction()
            } while (randomArrayLastTime == randomArray[0])
        } else {
            randomArray_Times++
        }
    }, interval)
} else {
    $(".bulletBox").css("display", "none")
}

//List
for (i = 0; i < sponsorListII.length; i++) {
    var listOne = sponsorListII[i].split("$")
    $(".sLIndex").append(
        '<tr><td class="playerID" lang="en">' +
            listOne[0] +
            "</td><td>￥" +
            listOne[1] +
            "</td></tr>"
    )
}
for (i = 0; i < sponsorListI.length; i++) {
    var listOne = sponsorListI[i].split("$")
    $(".sLIndex").append(
        '<tr><td class="playerID" lang="en">' +
            listOne[0] +
            "</td><td>￥" +
            listOne[1] +
            "</td></tr>"
    )
}

//Create Framework
var previewPicture = document.querySelector(".previewPicture")
var previewParent = document.querySelector(".item")

var randomArrayImages = [0, 1, 2, 3, 4, 5, 6].sort(function () {
    return Math.random() > 0.5 ? -1 : 1
})

for (let i = 0; i < 7; i++) {
    $(".item").append(
        '<div><a href="gallery" class="imgA"><img src="' +
            imgHref[randomArrayImages[i]].replace("&r;", abbreviations) +
            '"></a></div>'
    )
}

// Zoom
previewA = document.querySelector(".imgA")
imgBorderHeight = previewA.offsetHeight + 1 + "px"
imgBorderWidth = previewA.offsetWidth + 1 + "px"
window.onload = function () {
    var item = document.querySelectorAll(".imgA img")
    for (let i = 0; i < item.length; i++) {
        if (0.6 > item[i].height / item[i].width) {
            item[i].style.height = imgBorderHeight
        } else {
            item[i].style.width = imgBorderWidth
        }
    }
}

//Loadover
$(document).ready(function () {
    $(".iframeVideo").slick({
        accessibility: false,
        appendArrows: $(".arrowsDiv"),
        prevArrow:
            '<svg class="flipArrow" width="25px" height="25px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#1d1d1f" d="M388.266667 512l149.333333 149.333333 59.733333-59.733333-89.6-89.6L597.333333 422.4l-59.733333-59.733333L388.266667 512zM853.333333 512c0-187.733333-153.6-341.333333-341.333333-341.333333s-341.333333 153.6-341.333333 341.333333 153.6 341.333333 341.333333 341.333333 341.333333-153.6 341.333333-341.333333z m-85.333333 0c0 140.8-115.2 256-256 256s-256-115.2-256-256 115.2-256 256-256 256 115.2 256 256z"  /></svg>',
        nextArrow:
            '<svg class="flipArrow" width="25px" height="25px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#1d1d1f" d="M635.733333 512l-149.333333-149.333333L426.666667 422.4l89.6 89.6-89.6 89.6 59.733333 59.733333 149.333333-149.333333zM170.666667 512c0 187.733333 153.6 341.333333 341.333333 341.333333s341.333333-153.6 341.333333-341.333333-153.6-341.333333-341.333333-341.333333-341.333333 153.6-341.333333 341.333333z m85.333333 0c0-140.8 115.2-256 256-256s256 115.2 256 256-115.2 256-256 256-256-115.2-256-256z"  /></svg>',
        dots: true,
        appendDots: $(".dotsDiv"),
    })

    $(".item").slick({
        accessibility: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerPadding: "0px",
        draggable: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        pauseOnHover: false,
    })

    if (window.screen.availWidth >= 682) {
        $(".firstPartRight").css(
            "height",
            $(".firstPartLeft").innerHeight() + "px"
        )
    }
})

var refreshWithDetectionWidth = $(window).width()
setInterval(function () {
    if ($(window).width() != refreshWithDetectionWidth) {
        location.reload()
    }
}, 5000)
