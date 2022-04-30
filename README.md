# GenesisCraft Web

### I. 瞎寄吧聊！

这里是 QuarkPixel ，这个网站可以算是我的处女作，希望你可以好好对待它～  
下面我会写一些基本的修改数据的方法，功能都很银杏的啦

### II. 数据修改

#### 事前声明

我们要修改的数据都在 `/data` 文件夹内. 

**添加数据均从最上面开始添加，不用划到数组的底部. **

**下文中可能会见到我所定义的分隔符 `$` ，分隔符有指定个数的要求，若有为空数据则直接跳过，但必须留下指定的分隔符，否则会报错. ￼**其中，被 `$` 分开的前后两个数据分别称为 `Data I` 和 `Data II` ，后面的数据以此类推，为 `Data [number]` .

---

#### ·图库｜ GalleryHref

_数据存储于 `data / galleryHref.js` 内的 `imgHref` 中_

##### 示例

```
var imgHref = [
    ‘<full_link>’
    ‘&r;<abb_link>’,
  ];
  //<full_link>完整的链接
  //<abb_link>缩写的链接
```

##### 用法

链接缩写格式中，`&r;` 被定义为缩写部分，可以将要被替换的缩写用`&r;` 替代. 其位置不一定要固定在开头，可以调换. 

自定义要替换的部分可在变量 `abbreviations` 中更改. 

**例：**

原本有以下链接：

`https://www.genecraft.top/img/114514-1.png`

`https://www.genecraft.top/img/114514-2.png`

`https://www.genecraft.top/img/114514-3.png`

缩写后：

```
var abbreviations = ”https://www.genecraft.top/img/“
var imgHref = [
    ”&r;114514-1.png“,
    ”&r;114514-2.png“,
    ”&r;114514-3.png“,
    ];
```

---

#### · 公告｜ AnnouncementText

_数据存储于 `data / main.js` 内的 `announcementText` 中_

##### 示例

```
var announcementText = [
    ‘<title>$<text>$<start_time>-<end_time>‘,//规定时间段显示
    ‘<title>$<text>$-<end_time>‘,//时间在<end_time>之前时，会显示
    ‘<title>$<text>$<start_time>-‘,//时间在<start_time>之后时，会显示
    ‘<title>$<text>$-‘,//无论何时都显示
];
//<title>标题
//<text>内容
//<start_time>起始时间
//<start_time>结束时间
```

##### 用法

小窗模式下，每次只会现实一条公告. 显示的权重为又上到下依次匹配，若上一条公告中 Data III 中的数据不符合，将跳过此条，对下一条进行显示. 

**下面为将对 _Data III_ 中的数据进行解释：**

若数据为空则计算时不考虑该情况，实际应用请查看上方的示例. 

所用的时间格式为 `yyMMdd` _( `yy` 只取两位数，如 2021 不取 121 而只取 21)_

**例：**`210509` => 2021 年 5 月 9 日

---

#### · 赞助｜ SponsorList

_数据存储于 `data / main.js` 内的 `sponsorListI` 和 `sponsorListII` 中_

##### 示例

```
var sponsorListII = [
    ‘<id>$<money>’,
];
var sponsorListI = [
    ‘<id>$<money>’,
];
//<id>赞助者名称
//<money>赞助金额
```

##### 说明

在 _Data II_ 中，需要在其后面手动补齐至小数点第二位，保持格式整齐. 

---

#### · 封禁｜ BannedList

_数据存储于 `data / main.js` 内的 `bannedList` 中_

##### 示例

```
var bannedList = [
    ”<id>$<primary_reason>$<secondary_reason>$<time>$<remark>“,
];
//<id>被封禁者名称
//<primary_reason>主要原因
//<secondary_reason>次要原因
//<time>封禁时间
//<remark>备注
```

##### 说明

在 _Data IV_ 中，所用的时间格式为 `yyyy.MM.dd` .

**例：**`2021.5.9` => 2021 年 5 月 9 日

---

#### · 历史｜ HistoryEvent

_数据存储于 `data / main.js` 内的 `historyList` 中_

##### 示例

```
var historyList = [
    ”<time>$<first_text>$<second_text>“,
];
//<time>发生时间
//<first_text>上半句话
//<second_text>下半句话
```

##### 说明

在 _Data I_ 中，所用的时间格式为 `yyyy.MM.dd` .

**例：**`2021.5.9` => 2021 年 5 月 9 日

---

THE WEB MADE BY [QUARKPIXEL](https://b23.tv/xsD2dMP)
