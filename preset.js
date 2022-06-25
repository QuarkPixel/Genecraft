var allPages = [
    ["../", "首页", "fa-solid fa-house-chimney fa-xs fa-fw"],
    ["../document", "文档", "fas fa-bookmark fa-fw fa-xs"],
    ["../gallery", "图册", "fas fa-images fa-fw fa-sm"],
    ["../history", "历史", "fa-solid fa-clock-rotate-left fa-fw fa-sm"],
    ["../sponsorlist", "赞助", "fas fa-dollar-sign fa-xs"],
    ["../bannedlist", "封禁", "fas fa-book-dead fa-xs fa-fw"],
];

title = document.getElementsByClassName("header_title");
div_header = document.getElementsByTagName("header");

// $(".header_link").prepend(
//     '<a class="header_logo" href="https://www.genecraft.top/">' +
//         allPages[currentPage][1] +
//         "</a>"
// );

$(div_header).prepend(
    '<div class="header_link"><a class="header_logo" href="https://www.genecraft.top/"></a><a class="header_title" href="' +
        allPages[currentPage][0] +
        '"><i class="' +
        allPages[currentPage][2] +
        '"></i>' +
        allPages[currentPage][1] +
        '</a><div id="header_completeLinks"></div></div>'
);

getLengthTheTemporaryDiv = document.getElementById("getLengthTheTemporaryDiv");
allPages_serial_maxNumber = parseInt(
    (document.body.clientWidth - 430) /
        $(getLengthTheTemporaryDiv)[0].getBoundingClientRect().width.toFixed(3)
);

if (allPages.length - 1 < allPages_serial_maxNumber) {
    allPages_serial_maxNumber = allPages.length - 1;
}

// console.log(allPages_serial_maxNumber);
// console.log(document.body.clientWidth);

for (
    let i = 0;
    i < allPages_serial_maxNumber;
    // allPages_serial_number < allPages.length;
    i++
) {
    if (i != currentPage) {
        $(document.getElementById("header_completeLinks")).append(
            '<a href="' +
                allPages[i][0] +
                '"><i class="' +
                allPages[i][2] +
                '"></i>' +
                allPages[i][1] +
                "</a>"
        );
    } else {
        i++;
    }
    allPages_serial_number = i;
}

console.log(allPages.length - allPages_serial_maxNumber - 1);
// console.log();
// console.log(allPages_serial_maxNumber);
for (
    let i = allPages_serial_number;
    i < allPages_serial_maxNumber;
    // allPages_serial_number < allPages.length;
    i++
) {
    console.log(111);
    // if (allPages_serial_number != currentPage) {
    //     $(document.getElementById("header_completeLinks")).append(
    //         '<a href="' +
    //             allPages[allPages_serial_number][0] +
    //             '"><i class="' +
    //             allPages[allPages_serial_number][2] +
    //             '"></i>' +
    //             allPages[allPages_serial_number][1] +
    //             "</a>"
    //     );
    // } else {
    //     allPages_serial_maxNumber++;
    // }
}

////Footer Wallpaper
var WallpaperList = [
    [
        "https://imgtu.ly2018.top/img/2022/03/220327_WjKvNOLi_C-211127_pPiNooVM.webp",
        "荒芜星谷",
        "https://b23.tv/WCcx9FZ$",
        "",
        "52, 54, 56, 0.2",
    ],
    [
        "https://imgtu.ly2018.top/img/2022/06/220623_j0D1FtY0_wallpaper_footer_1.webp",
        "白鲨摄影机",
        "https://b23.tv/D8MfxRW",
        "可接单 QQ:3277644139",
        "117, 150, 34, 0.3",
    ],
    [
        "https://imgtu.ly2018.top/img/2022/06/220623_6q2Agf2D_wallpaper_footer_2.webp",
        "白鲨摄影机",
        "https://b23.tv/D8MfxRW",
        "可接单 QQ:3277644139",
        "115, 119, 179, 0.5",
    ],
    [
        "https://imgtu.ly2018.top/img/2022/06/220623_SqMY1sRk_wallpaper_footer_3.webp",
        "白鲨摄影机",
        "https://b23.tv/D8MfxRW",
        "可接单 QQ:3277644139",
        "131, 184, 36, 0.8",
    ],
    [
        "https://imgtu.ly2018.top/img/2022/06/220623_fOuOTrYn_wallpaper_footer_4.webp",
        "白鲨摄影机",
        "https://b23.tv/D8MfxRW",
        "可接单 QQ:3277644139",
        "255, 255, 220, 0.8",
    ],
    [
        "https://imgtu.ly2018.top/img/2022/06/220623_qxpkzAXw_wallpaper_footer_5.webp",
        "白鲨摄影机",
        "https://b23.tv/D8MfxRW",
        "可接单 QQ:3277644139",
        "187, 76, 27, 0.3",
    ],
];

var wallpaper_serial = Math.floor(Math.random() * WallpaperList.length);
$("footer").css(
    "background-image",
    "url(" +
        WallpaperList[wallpaper_serial][0] +
        "),linear-gradient(var(--black0), rgba(" +
        WallpaperList[wallpaper_serial][4] +
        "))"
);
$(".info").append(
    '<a href="' +
        WallpaperList[wallpaper_serial][2] +
        '" target="_blank" title="' +
        WallpaperList[wallpaper_serial][3] +
        '" class="info_maker"><i class="txtSmall">地图作者: </i>' +
        WallpaperList[wallpaper_serial][1] +
        "</a>"
);
