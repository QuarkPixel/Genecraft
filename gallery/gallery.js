let arrNumber = imgHref.length
var imgNumber = 0
var removeTimes = 0

function createImgBox() {
    codImgID = (Array(5).join(0) + (arrNumber - imgNumber)).slice(-5)
    codImg = window.btoa(codImgID)
    $(".container").append(
        '<div class="item"><div class="picture" style="--j: ' +
            Math.round((Math.random() * 4 - 2) * 10) / 10 +
            'deg"><a href="view/#' +
            codImg +
            '" target="_blank"><img src="' +
            imgHref[imgNumber].replace("&r;", abbreviations) +
            '" class="clickImg"></a></div></div>'
    )
    imgNumber++
}

for (let i = 0; i < 4; i++) {
    createImgBox()
}

window.onload = function () {
    waterFall()

    setInterval(
        throttle(function () {
            let item = document.getElementsByClassName("item")
            if (
                item[item.length - 1].getBoundingClientRect().top <
                window.innerHeight
            ) {
                if (imgNumber < arrNumber) {
                    createImgBox()
                } else {
                    $(".over div img").fadeOut("fast")
                    $(".over p").fadeIn("fast")
                }
                waterFall()
            }
        }),
        200
    )

    window.onresize = throttle(function () {
        waterFall()
    }, 2000)
}

function throttle(callback) {
    let flag = true
    return function () {
        if (flag) {
            flag = false
            setTimeout(() => {
                callback.bind(this)()
                flag = true
            }, 500)
        }
    }
}

function waterFall() {
    let container = document.getElementById("con")
    let item = document.getElementsByClassName("item")
    let clientWidth = document.documentElement.clientWidth
    let columnCount = Math.floor(clientWidth / item[0].offsetWidth)
    container.style.width = columnCount * item[0].offsetWidth + "px"

    let hrr = []
    for (let i = 0; i < item.length; i++) {
        if (i < columnCount) {
            item[i].style.top = "0px"
            item[i].style.left = i * item[0].offsetWidth + "px"
            hrr.push(item[i].offsetHeight)
        } else {
            let min = Math.min(...hrr)
            let index = hrr.indexOf(min)
            item[i].style.top = min + "px"
            item[i].style.left = index * item[0].offsetWidth + "px"
            hrr[index] += item[i].offsetHeight
            container.style.height = min + "px"
        }
    }
}
