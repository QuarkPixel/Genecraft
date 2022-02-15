# GenesisCraft

### 数据修改都在 data 文件夹内，其中：

#### ·图库 文件名为 galleryHref.js

 示例 "<href>",

**“&r;”可以被自定义为规则部分，要替换的部分在变量“abbreviations”中更改。**

例：

原链接为：`https://www.???.com/img/114514.png`

修改后：

`var abbreviations = "https://www.???.com/img/";`

`"<&r;114514.png>",`



#### ·封神榜 文件名为 listBannedList.js
 示例 "<ID>$<主要原因>$<次要原因>$<备注>",

**“$”为分隔符，有指定个数的要求。留空的直接跳过，但规定多少个分隔符就写多少个，否则会报错。**



#### ·历史 文件名为 listHistory.js
 示例 "<yyyy>.<m>.<d>$<事件第一行>$<事件第二行>",


**“$”为分隔符，有指定个数的要求。留空的直接跳过，但规定多少个分隔符就写多少个，否则会报错。**



------

THE WEB MADE BY QUARKPIXEL