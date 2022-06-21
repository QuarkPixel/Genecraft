var allPages = [
    ["../", "首页", "fa-solid fa-house-chimney fa-xs fa-fw"],
    ["../document", "文档", "fas fa-bookmark fa-fw fa-xs"],
    ["../gallery", "图册", "fas fa-images fa-fw fa-sm"],
    ["../history", "历史", "fa-solid fa-clock-rotate-left fa-fw fa-sm"],
    ["../sponsorlist", "赞助", "fas fa-dollar-sign fa-xs"],
    ["../bannedlist", "封禁", "fas fa-book-dead fa-xs fa-fw"],
];

completeLinks = document.getElementById("header_completeLinks");
title = document.getElementsByClassName("header_title");

$(".header_link").prepend(
    '<a class="header_logo" href="' +
        allPages[currentPage][0] +
        '">' +
        allPages[currentPage][1] +
        "</a>"
);

$(title).append('<i class="' + allPages[currentPage][2] + '"></i>');

for (
    let allPages_serial_number = 0;
    allPages_serial_number < allPages.length;
    allPages_serial_number++
) {
    if (allPages_serial_number != currentPage) {
        $(completeLinks).append(
            '<a href="' +
                allPages[allPages_serial_number][0] +
                '"><i class="' +
                allPages[allPages_serial_number][2] +
                '"></i>' +
                allPages[allPages_serial_number][1] +
                "</a>"
        );
    }
}

$(".header_logo").mouseenter(function () {
    header_logo_mouseenter();
});
$(".header_logo").mouseleave(function () {
    header_logo_mouseleave();
});

function header_logo_mouseenter() {
    $("header").addClass("header_hover");
}

function header_logo_mouseleave() {
    $("header").removeClass("header_hover");
}
