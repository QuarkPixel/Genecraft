var sLIndex = document.querySelector("#sLIndex");

$(sLIndex).append(
    '<tr><td class="instructions" colspan="2" class="end">充电：</td></tr>'
);
createFramework_sponsorList(sponsorListII);
$(sLIndex).append(
    '<tr><td class="instructions" colspan="2" class="end">机器赞助：</td></tr>'
);
createFramework_sponsorList(sponsorListI);

function createFramework_sponsorList(array) {
    for (i = 0; i < array.length; i++) {
        var listOne = array[i].split("$");
        $("#sLIndex").append(
            '<tr><td class="playerID" lang="en">' +
                listOne[0] +
                "</td><td>￥" +
                listOne[1] +
                "</td></tr>"
        );
    }
}

$(sLIndex).append(
    '<tr><td colspan="2" lang="en" class="end">Looking forward to your sponsor.</td></tr>'
);
