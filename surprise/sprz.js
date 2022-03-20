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
