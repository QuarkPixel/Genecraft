var sLIndex = document.querySelector("#sLIndex")
var idName = []
var allMoney = 0

createFramework_sponsorList(sponsorListII)
createFramework_sponsorList(sponsorListI)

function createFramework_sponsorList(array) {
    for (i = 0; i < array.length; i++) {
        var listOne = array[i].split("$")
        $("#sLIndex").append(
            '<tr><td class="playerID" lang="en">' +
                listOne[0] +
                "</td><td>￥" +
                listOne[1] +
                "</td></tr>"
        )
        idName.push(listOne[0])
        allMoney += parseFloat(listOne[1])
    }
}

var memberArray = []
for (var i in idName) {
    if (memberArray.indexOf(idName[i]) < 0) {
        memberArray.push(idName[i])
    }
}
appendRow(
    "目前共获得捐赠￥" +
        allMoney.toFixed(2) +
        "<br />感谢为本服做贡献的 " +
        memberArray.length +
        " 位老板~"
)

appendRow(
    'Looking forward to your <a class="href" href="https://afdian.net/@genesis_craft" target="_blank" title="使用「爱发电」给我们赞助"lang="en">sponsor</a> .'
)

function appendRow(text) {
    $(sLIndex).append('<tr><td colspan="2" class="end">' + text + "</td></tr>")
}
