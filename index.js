//载入动画
const boxList = document.querySelectorAll(".box")

var triggerBottom = window.innerHeight * 0.8 // 触发的条件 , 整体高度的 80%

scrollLoad() // 初始进入执行一次

window.addEventListener("scroll", scrollLoad) // 滚动执行

function scrollLoad() {
    boxList.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top // 当前盒子距离顶部的Top

        if (boxTop <= triggerBottom) {
            box.classList.add("box_show")
        }
    })
}

//canny
// !(function (w, d, i, s) {
//     function l() {
//         if (!d.getElementById(i)) {
//             var f = d.getElementsByTagName(s)[0],
//                 e = d.createElement(s)
//             ;(e.type = "text/javascript"),
//                 (e.async = !0),
//                 (e.src = "https://canny.io/sdk.js"),
//                 f.parentNode.insertBefore(e, f)
//         }
//     }
//     if ("function" != typeof w.Canny) {
//         var c = function () {
//             c.q.push(arguments)
//         }
//         ;(c.q = []),
//             (w.Canny = c),
//             "complete" === d.readyState
//                 ? l()
//                 : w.attachEvent
//                 ? w.attachEvent("onload", l)
//                 : w.addEventListener("load", l, !1)
//     }
// })(window, document, "canny-jssdk", "script")

//Cover;
if (window.name == "") {
    $(".blackCloth").css("background-color", "var(--black10)")
    $(".page_welcome").addClass("page_welcome_animation")
    setTimeout(function () {
        $(".blackCloth").css({
            "background-color": "var(--black0)",
            transition: "ease-in 2.5s",
        })
    }, 100)
    window.name = "isReload"
}

//Create many dividers
const numOfDividers = Math.ceil(window.innerWidth / 480)
for (let i = 0; i < numOfDividers; i++) {
    $(".welPage_divider_father > div").append(
        '<img src="https://imgtu.ly2018.top/img/2022/06/220620_fAgJfuvd_divider.png">'
    )
}
document.querySelector(".welPage_divider_father > div").style.width =
    numOfDividers * 480 + 1 + "px"

//time_establishment
document.getElementById("time_establishment").innerHTML = parseInt(
    (new Date().getTime() - new Date("2019-01-04").getTime()) / 86400000
)

//Announcement
dateNow = parseInt(
    new Date().getYear().toString().substr(1) +
        PrefixZero((new Date().getMonth() + 1).toString()) +
        PrefixZero(new Date().getDate().toString())
)

for (let i = 0; i < announcementText.length; i++) {
    var announcementInfo = announcementText[i].split("$")
    var displayTimeEnd = announcementInfo[2].split("-")

    if (
        dateNow < parseInt(displayTimeEnd[0]) ||
        dateNow > parseInt(displayTimeEnd[1])
    ) {
        if (i == announcementText.length - 1) {
            $(".announcement").remove()
        }
    } else {
        $(".announcementBody").append(
            '<p id="announcement-title">' + announcementInfo[0] + "</p>"
        )
        $(".announcementBody").append(
            '<p id="announcement-body">' + announcementInfo[1] + "</p>"
        )
        break
    }
}

function PrefixZero(num) {
    return (Array(2).join(0) + num).slice(-2)
}

//Bullet
createBullet_MaxTime = historyList.length - 1
createBullet_Times = createBullet_MaxTime
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
        var listOne = historyList[createBullet_Times].split("$")
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
        if (createBullet_Times <= 0) {
            createBullet_Times = createBullet_MaxTime
        } else {
            createBullet_Times -= 1
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
var sponsorListLoadingTimes = 0
createFramework_sponsorList(sponsorListII)
createFramework_sponsorList(sponsorListI)

function createFramework_sponsorList(array) {
    for (
        sponsorListLoadingTimes;
        sponsorListLoadingTimes < array.length && sponsorListLoadingTimes < 9;
        sponsorListLoadingTimes++
    ) {
        var listOne = array[sponsorListLoadingTimes].split("$")
        $(".sLIndex").append(
            '<tr><td class="playerID" lang="en">' +
                listOne[0] +
                "</td><td>￥" +
                listOne[1] +
                "</td></tr>"
        )
    }
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
function hidden_entrance() {
    $("#entrance_member").fadeOut()
}

//Loadover
//member_number

$.ajax({
    type: "get",
    url: "https://eu.mc-api.net/v3/server/ping/game.genecraft.top:21945",
    dataType: "json",
    success: function (entrance_member_number) {
        entrance_member_number.players.now != 0
            ? $("#entrance_member_number").after(
                  entrance_member_number.players.now
              )
            : hidden_entrance()
    },
    error: function () {
        $.ajax({
            type: "get",
            url: "http://mcapi.us/server/status?ip=game.genecraft.top&port=21945",
            dataType: "json",
            success: function (entrance_member_number) {
                entrance_member_number.players.now != 0
                    ? $("#entrance_member_number").after(
                          entrance_member_number.players.now
                      )
                    : hidden_entrance()
            },
            error: function () {
                hidden_entrance()
                console.log("2")
            },
        })
    },
})

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
})

var refreshWithDetectionWidth = $(window).width()
setInterval(function () {
    if ($(window).width() != refreshWithDetectionWidth) {
        location.reload()
    }
}, 5000)
