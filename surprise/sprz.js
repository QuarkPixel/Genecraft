var link =
    "../resources/surpriseSvg/" + window.location.hash.replace("#", "") + ".svg"
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("GET", link, false)
xmlhttp.send()
if (xmlhttp.status == 200) {
    link = '<img src="' + link + '">'
    $(".message").prepend(
        "<div>恭喜你 发现了我服编号为" + link + "的彩蛋</div>"
    )
    $(".backGroundUP").append(link)
    $(".backGroundDown").append(link)
} else {
    window.location.href = "../404"
}

function time() {
    var date = new Date()
    document.getElementById("time").innerHTML =
        date.getFullYear().toString() +
        "." +
        PrefixZero((date.getMonth() + 1).toString(), 2) +
        "." +
        PrefixZero(date.getDate().toString(), 2) +
        " " +
        PrefixZero(date.getHours().toString(), 2) +
        ":" +
        PrefixZero(date.getMinutes().toString(), 2) +
        ":" +
        PrefixZero(date.getSeconds().toString(), 2)
}
function PrefixZero(num, n) {
    return (Array(n).join(0) + num).slice(-n)
}
setInterval("time()", 1000)
