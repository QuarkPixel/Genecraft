var prIndex = document.querySelector(".pr .wrap");
reverseOrder = false;
createBox();
if (window.name == "") {
    $(prIndex).fadeIn("200");
    window.name = "isReload";
} else {
    $(prIndex).show();
}

function createBox() {
    for (i = 0; i < historyList.length; i++) {
        var listOne = historyList[order(i)].split("$");
        var date = listOne[0].split(".");

        $(prIndex).append(
            '<div class="event"><div class="time"><span><i class="year">' +
                date[0] +
                '.</i><i class="month">' +
                date[1] +
                "</i>." +
                date[2] +
                '</span></div><div class="affair"><div><p>' +
                listOne[1] +
                "</p><p>" +
                listOne[2] +
                "</p></div></div></div>"
        );
    }
}

function order(i) {
    if (reverseOrder) {
        listOrder = i;
    } else {
        listOrder = historyList.length - i - 1;
    }
    return listOrder;
}

var orderButton = document.getElementById("orderButton");

orderButton.onclick = function () {
    $(".order label").removeClass("playAnimation");
    var checked = document.getElementById("orderButton");
    $(".event").fadeOut("180");

    function reloadList() {
        $(prIndex).html("");
        if (checked.checked) {
            reverseOrder = true;
        } else {
            reverseOrder = false;
        }
        createBox();
    }
    setTimeout(reloadList, 280);

    function displayList() {
        $(".event").fadeIn("200");
    }
    setTimeout(displayList, 100);

    $(".order label").addClass("playAnimation");
};
