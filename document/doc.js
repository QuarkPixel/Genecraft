var category = document.querySelector("aside")
var content = document.querySelector(".content")
var lis = category.querySelectorAll("li")
var items = document.querySelectorAll(".item")

var poundSign = window.location.hash
if (poundSign) {
    poundSign = poundSign.replace("#", "")
    var initialDisplay = document.querySelector("." + poundSign)
    var liInitialDisplay = document.querySelector(".li" + poundSign)
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none"
    }
    initialDisplay.style.display = "block"
    liInitialDisplay.className = "selected"
}

for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute("index", i + 1)
    lis[i].onclick = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = ""
        }
        this.className = "selected"
        var index = this.getAttribute("index")
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = "none"
        }
        items[index].style.display = "block"
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }
}

var backBottle = document.getElementById("categoryHref")

backBottle.onclick = function () {
    var checked = document.getElementById("categoryHref")
    if (checked.checked) {
        category.className = "category hidden"
        content.className = "content center"
    } else {
        category.className = "category"
        content.className = "content"
    }
}

function aa() {
    console.log("aaaa")
}
