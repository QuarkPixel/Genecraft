var sLIndex = document.querySelector("#sLIndex");

// $(sLIndex).append(
//     '<tr><td class="instructions" colspan="2" class="end"></td></tr>'
// );
// appendRow(" ");
createFramework_sponsorList(sponsorListII);
// $(sLIndex).append(
//     '<tr><td class="instructions" colspan="2" class="end"></td></tr>'
// );
appendRow(" ");
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

appendRow(
    'Looking forward to your <a class="href" href="https://afdian.net/@genesis_craft" target="_blank" title="使用「爱发电」给我们赞助"lang="en">sponsor</a> .'
);

function appendRow(text) {
    $(sLIndex).append(
        '<tr><td colspan="2" lang="en" class="end">' + text + "</td></tr>"
    );
}
