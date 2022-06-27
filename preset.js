var versionNumber = "1.3.2"

var allPages = [
    ["../", "首页", "fa-solid fa-house-chimney fa-xs fa-fw"],
    ["../document", "文档", "fa-solid fa-book-bookmark fa-fw fa-xs"],
    ["../gallery", "图册", "fas fa-images fa-fw fa-sm"],
    ["../history", "历史", "fa-solid fa-clock-rotate-left fa-fw fa-xs"],
    ["../sponsorlist", "赞助", "fas fa-dollar-sign fa-sm"],
    ["../bannedlist", "封禁", "fa-solid fa-ban fa-xs fa-fw"],
]

function createHeader() {
    $("body").prepend(
        '<header class="unCopy"><div id="getLengthTheTemporaryDiv"style="width: 4em;height: 0;font-size: 20pt;pointer-events: none;opacity: 0;"></div></header>'
    )

    title = document.getElementsByClassName("header_title")
    div_header = document.getElementsByTagName("header")

    $(div_header).prepend(
        '<div class="header_link"><a class="header_logo" href="https://www.genecraft.top/"></a><div class="header_title"' +
            '><i class="' +
            allPages[currentPage][2] +
            '"></i>&thinsp;' +
            allPages[currentPage][1] +
            '</div><div id="header_completeLinks"></div><div class="hamburg"><input type="checkbox" id="hamburg_checkbox" style="display: none" /><label for="hamburg_checkbox" class="hamburg_button"><a href="" title="更多链接"><div></div><div></div><div></div></a></label><div class="hamburg_links"></div></div></div>'
    )
    // href="' +allPages[currentPage][0] +

    getLengthTheTemporaryDiv = document.getElementById(
        "getLengthTheTemporaryDiv"
    )
    allPages_serial_maxNumber = parseInt(
        (document.body.clientWidth - 430) /
            $(getLengthTheTemporaryDiv)[0]
                .getBoundingClientRect()
                .width.toFixed(3)
    )

    if (allPages.length - 1 < allPages_serial_maxNumber) {
        allPages_serial_maxNumber = allPages.length - 1
    }

    var allPages_serial_number = 0

    for (let i = 0; i < allPages_serial_maxNumber; i++) {
        if (i != currentPage) {
            $(document.getElementById("header_completeLinks")).append(
                '<a href="' +
                    allPages[i][0] +
                    '"><i class="' +
                    allPages[i][2] +
                    '"></i>&thinsp;' +
                    allPages[i][1] +
                    "</a>"
            )
        } else {
            allPages_serial_maxNumber++
        }
        allPages_serial_number = i
    }

    var hamburg_maxLinks =
        allPages_serial_number + allPages.length - allPages_serial_maxNumber + 1

    if (hamburg_maxLinks > allPages.length) {
        hamburg_maxLinks = allPages.length
    }

    if (allPages_serial_number != 0) {
        allPages_serial_number++
    }

    if (hamburg_maxLinks > allPages_serial_number) {
        for (let i = allPages_serial_number; i < hamburg_maxLinks; i++) {
            if (i != currentPage) {
                $(document.getElementsByClassName("hamburg_links")[0]).append(
                    '<a href="' +
                        allPages[i][0] +
                        '"><i class="' +
                        allPages[i][2] +
                        '"></i>&thinsp;' +
                        allPages[i][1] +
                        "</a>"
                )
            }
        }
    } else {
        document.querySelectorAll(".hamburg")[0].remove() //移除汉堡图标
    }
}

createHeader()

var refreshWithDetectionWidth = $(window).width()
setInterval(function () {
    if ($(window).width() != refreshWithDetectionWidth) {
        document.querySelectorAll("header")[0].remove()
        createHeader()
        refreshWithDetectionWidth = $(window).width()
    }
}, 2500)

////Footer
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
]

var wallpaper_serial = Math.floor(Math.random() * WallpaperList.length)

$("body").append(
    '<footer style="background-image: url(' +
        WallpaperList[wallpaper_serial][0] +
        "),linear-gradient(var(--black0), rgba(" +
        WallpaperList[wallpaper_serial][4] +
        '))"><div class="info"><div>&copy;&nbsp;' +
        new Date().getFullYear() +
        ' <a href="https://www.genecraft.top">Genesis&nbsp;Craft&nbsp;方块世界</a>&nbsp;保留所有权利</div><a href="https://beian.miit.gov.cn" target="_blank">浙ICP备18045561号-3</a><br/><br/><a href="surprise/#wenw7mv0oyn0" target="_blank" class="version">V' +
        versionNumber +
        '</a><a href="' +
        WallpaperList[wallpaper_serial][2] +
        '" target="_blank" title="' +
        WallpaperList[wallpaper_serial][3] +
        '" class="info_maker"><i class="txtSmall">场景作者: </i>' +
        WallpaperList[wallpaper_serial][1] +
        "</a></div></footer>"
)
