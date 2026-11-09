// 充电宝数据库

var powerbanks = [
  {
    "id": "cuktech-10-pb100p",
    "category": "充电宝",
    "name": "酷态科10号超级电能棒",
    "brand": "酷态科 CUKTECH",
    "tags": [
      "10000mAh",
      "150W",
      "1C1A",
      "小米快充",
      "TFT数显"
    ],
    "specs": {
      "电池容量": "10000mAh（额定5500mAh / 36Wh）",
      "最大功率": "150W MAX（C+A同时输出）",
      "接口配置": "1C1A",
      "C口输出": "5V/3A、9V/3A、12V/3A、15V/3A、20V/5A、20V/6A",
      "C口输入": "5V/3A、9V/3A、12V/3A、15V/3A、20V/4.5A（90W）",
      "C口PPS": "5-11V/5A",
      "C口最大输出": "120W",
      "A口输出": "5V/3A、9V/3A、5-11V/3A（UFCS 33W）",
      "多口同时输出": "5V/4A、9V/6A",
      "私有协议": "小米：120W（向下兼容）",
      "尺寸": "143.16 x 44.42 x 33.27 mm",
      "重量": "约 285 g",
      "快充协议": "PD 3.0（PPS）、UFCS、QC3.0、FCP、AFC",
      "特色功能": "TFT数显彩屏（电量/功率/电压/电流）、功能键自定义亮屏",
      "电池类型": "4串锂离子电池（亿纬锂能 INR18650/25P）",
      "附赠线材": "0.5m 6A C to C（支持240W EPR）",
      "配色": "金属灰"
    },
    "valueInputs": {
      "ratedEnergyWh": 36,
      "energyBasis": "电芯标称能量（典型值）",
      "singlePortPowerW": 120,
      "powerConditions": "USB-C 单口最大输出",
      "sourceUrl": "https://www.chongdiantou.com/archives/278994.html"
    },
    "reviews": [
      {
        "title": "CUKTECH 10 PB100P Power Bank Review",
        "url": "https://www.bilibili.com/video/BV18KYTzMEfa/",
        "cover": "https://i0.hdslb.com/bfs/archive/a7ecc6e4f9a533c4e38a8f70fdb892ef173bd1c7.jpg",
        "platform": "哔哩哔哩",
        "author": "TimMcMahon",
        "publishedAt": "2025-09-06",
        "scope": "PB100P，英文测评"
      },
      {
        "title": "100W性能小钢炮！酷态科10号充电宝首发详细评测",
        "url": "https://www.bilibili.com/video/BV1rC4y1d7pX/",
        "platform": "哔哩哔哩",
        "author": "阿甘体验",
        "cover": "http://i1.hdslb.com/bfs/archive/9247a3d81e6ae778459ec9e3014a9323ca497cb1.jpg",
        "publishedAt": "2023-10-13",
        "scope": "详细评测"
      }
    ],
    "model": "PB100P",
    "price": "参考价 160 元",
    "release_date": "2023-11",
    "notes": "柱状造型，支持笔记本+手机同时快充，36Wh可上飞机"
  },
  {
    "id": "cuktech-10-mini-pb1055",
    "reviews": [
      {
        "title": "评测拆解酷态科10号Mini，159元是不是你的菜？",
        "url": "https://www.bilibili.com/video/BV1ZSo2Y5EEs/",
        "cover": "https://i0.hdslb.com/bfs/archive/ec9106f4f0889c13491dddd550a9b1ee19f99e17.jpg",
        "platform": "哔哩哔哩",
        "author": "阿甘体验",
        "publishedAt": "2025-03-25"
      }
    ],
    "category": "充电宝",
    "name": "酷态科10号超级电能棒Mini",
    "brand": "酷态科 CUKTECH",
    "model": "PB1055",
    "tags": [
      "10000mAh",
      "55W",
      "2C1A",
      "小米快充",
      "LED数显"
    ],
    "specs": {
      "电池容量": "10000mAh（额定5600mAh / 35.28Wh）",
      "最大功率": "55W MAX（C口输出）",
      "接口配置": "2C1A",
      "C1/C2输出": "5V/3A、9V/3A、12V/3A、15V/3A、20V/2A（55W MAX）",
      "C口输入": "5V/3A、9V/3A、12V/3A、15V/3A、5-11V/5A（55W）",
      "C1/C2 PPS": "5-11V/5A",
      "A口输出": "5V/3A、9V/3A、12V/1.5A、5-11V/3A（UFCS 33W）",
      "私有协议": "小米：55W",
      "多口功率分配": "双口: 5V4A / 三口: 5V4A",
      "尺寸": "90.3 × 50.46 × 33 mm",
      "重量": "约 217.5 g",
      "快充协议": "PD 3.0（PPS）、UFCS、QC3+、FCP、SCP、AFC",
      "特色功能": "LED数显、附赠提绳、边充边放、Y字激光纹理",
      "电池类型": "锂离子电池（长虹三杰50SE）",
      "附赠线材": "16.5cm C to C（支持240W EPR）",
      "配色": "钛灰"
    },
    "price": "参考价 118 元",
    "release_date": "2025-03",
    "notes": "10号电能棒迷你版，体积约为标准版一半；35.28Wh可上飞机"
  },
  {
    "id": "cuktech-6-pb060",
    "category": "充电宝",
    "name": "酷态科6号超级电能块",
    "brand": "酷态科 CUKTECH",
    "tags": [
      "6000mAh",
      "55W",
      "2C",
      "小米快充",
      "TFT数显"
    ],
    "specs": {
      "电池容量": "6000mAh（额定3300mAh / 21.5Wh）",
      "最大功率": "55W MAX（C口输出）",
      "接口配置": "2C",
      "C1/C2输出": "5V/3A、9V/3A、12V/2.5A、15V/2.6A、5-11V/5A、5-20V/2.5A（55W MAX）",
      "C1/C2 PPS": "5-11V/5A、5-20V/2.5A",
      "C口输入": "5V/3A、9V/3A、12V/3A、15V/3A（45W）",
      "多口功率分配": "双口: 5V3A",
      "私有协议": "小米：55W（C1）",
      "尺寸": "81.5 × 45.01 × 29.18 mm",
      "重量": "约 150.8 g",
      "快充协议": "PD 3.0（PPS）、QC4、QC3+、DCP、Apple 2.4A",
      "特色功能": "TFT数显屏、黑金拼色设计、三菱凹槽防滑",
      "电池类型": "锂离子电池（2串18650，长虹三杰INR18650-3000）",
      "附赠线材": "17.5cm C to C（6A，支持240W EPR）",
      "配色": "黑金"
    },
    "reviews": [
      {
        "title": "129元迷你小钢炮！首发评测酷态科6号充电宝",
        "url": "https://www.bilibili.com/video/BV1qm421T75Y/",
        "platform": "哔哩哔哩",
        "author": "阿甘体验",
        "cover": "https://i0.hdslb.com/bfs/archive/735ee4c9e3c5478687e446117813bfd4f85462c6.jpg",
        "publishedAt": "2024-05-13"
      },
      {
        "title": "酷态科6号超级电能块终于回来了？新酷态科6号评测！",
        "url": "https://www.bilibili.com/video/BV1G119BHER8/",
        "platform": "哔哩哔哩",
        "author": "北昇充电站",
        "cover": "https://i0.hdslb.com/bfs/archive/8db8f405329e6f06abaca617a62f39943c17cb9d.jpg",
        "publishedAt": "2025-11-08"
      },
      {
        "title": "酷态科6号超级电能块拆解：具备双USB-C接口，最大输出功率为55W",
        "url": "https://www.bilibili.com/video/BV1WJyUY8EHv/",
        "platform": "哔哩哔哩",
        "author": "充电头网",
        "cover": "https://i2.hdslb.com/bfs/archive/84dc4eb3410b59558a0b995f1f9ce0fcc18cb26d.jpg",
        "publishedAt": "2024-10-27"
      }
    ],
    "model": "PB060",
    "price": "参考价 91 元",
    "release_date": "2024-05",
    "notes": "耳机盒大小超便携；21.5Wh可上飞机"
  },
  {
    "id": "cuktech-10-fusion-ba652u",
    "reviews": [
      {
        "title": "Turbo模式是亮点！首发评测酷态科10号Fusion二合一电能充",
        "url": "https://www.bilibili.com/video/BV1disHzeE34/",
        "cover": "https://i0.hdslb.com/bfs/archive/3447c34c2620be2bfd9edd2c988530f9a44cacc5.jpg",
        "platform": "哔哩哔哩",
        "author": "阿甘体验",
        "publishedAt": "2025-10-24"
      }
    ],
    "category": "充电宝",
    "name": "酷态科10号超级电能充Fusion",
    "brand": "酷态科 CUKTECH",
    "model": "BA652U",
    "tags": [
      "9000mAh",
      "120W",
      "2C",
      "小米快充",
      "AC输入",
      "TFT万象屏",
      "GaN"
    ],
    "specs": {
      "电池容量": "9000mAh（额定5150mAh / 32.2Wh）",
      "最大功率": "120W MAX（Turbo模式单口输出）",
      "接口配置": "2C（AC插头输入）",
      "C1/C2输出（移动电源模式）": "5V/3A、9V/3A、12V/3A、15V/3A、20V/3.25A（65W MAX）",
      "C1/C2输出（充电器Turbo模式）": "5V/3A、9V/3A、12V/3A、15V/3A、20V/5A（120W MAX）",
      "C口输入": "5V/3A、9V/3A、12V/3A、15V/3A（45W MAX）",
      "C口PPS": "5-11V/6.1A（Turbo模式5-11V/6A）",
      "C口 UFCS": "5-11V/4A",
      "多口输出（移动电源模式）": "45W+22W MAX",
      "多口输出（Turbo模式）": "65W+67W MAX 或 67W+67W MAX",
      "AC输入": "110-240V~50/60Hz 1.8A",
      "私有协议": "小米：移动电源90W / 充电器67W / Turbo 120W",
      "尺寸": "116.47 × 45.29 × 46.05 mm",
      "重量": "约 334 g",
      "快充协议": "PD 3.0（PPS）、UFCS、FCP、SCP、AFC",
      "特色功能": "充电器+移动电源二合一、TFT万象屏（功率/电量/时长）、Turbo一键切换、脉冲星轨灯带、旁路充电模式、端口协议开关",
      "电池类型": "3串18650锂离子电池（长虹三杰 INR18650-3000，CCC认证）",
      "附赠线材": "102cm 6A C to C 编织线（支持240W EPR）",
      "配色": "银灰"
    },
    "price": "参考价 219 元",
    "release_date": "2025-10",
    "notes": "充电器+充电宝二合一设计；Turbo模式下小米120W秒充+100W PD；32.2Wh可上飞机；旁路充电可长期作为充电器使用"
  },
  {
    "id": "cuktech-25-se-lpb252n",
    "reviews": [
      {
        "title": "179元真香！首发评测酷态科25号SE 25000mAh",
        "url": "https://www.bilibili.com/video/BV1KiUrBSES9/",
        "cover": "https://i0.hdslb.com/bfs/archive/8bfa8e25cc59e1d271cf280fb2580528fe36baee.jpg",
        "platform": "哔哩哔哩",
        "author": "阿甘体验",
        "publishedAt": "2025-11-25"
      },
      {
        "title": "这可能是200以内最好的充电搭子！旅差大容量充电宝推荐",
        "url": "https://www.bilibili.com/video/BV1yF9bBWEUT/",
        "platform": "哔哩哔哩",
        "author": "北昇充电站",
        "cover": "https://i0.hdslb.com/bfs/archive/0f2959beb5eb9c9a1bccad3dbc224d8758564aa9.jpg",
        "publishedAt": "2026-04-30"
      }
    ],
    "category": "充电宝",
    "name": "酷态科25号超级电能块SE",
    "brand": "酷态科 CUKTECH",
    "tags": [
      "25000mAh",
      "120W",
      "1C",
      "小米快充",
      "自带线",
      "LED数显"
    ],
    "specs": {
      "电池容量": "25000mAh（额定容量15866mAh 5V / 79.33Wh）",
      "最大功率": "120W MAX（单口输出）",
      "接口配置": "1C（自带线）",
      "C口输出": "5V/3A、9V/3A、12V/3A、15V/3A、20V/5A、20V/6A（120W MAX）",
      "C口输入": "5V/3A、9V/3A、12V/3A、15V/3A、20V/5A（100W）",
      "C口PPS": "5-11V/5A",
      "私有协议": "小米：120W（向下兼容）",
      "尺寸": "159.9 × 80.8 × 27.3 mm",
      "重量": "约 540 g",
      "快充协议": "PD 3.0（PPS）、UFCS、QC3+、FCP、AFC",
      "特色功能": "LED数显屏、自带Type-C线",
      "电池类型": "锂离子电池",
      "附赠线材": "自带Type-C线",
      "配色": "黑色、珠白"
    },
    "model": "LPB252N",
    "price": "参考价 179 元",
    "release_date": "2025-11",
    "notes": "大容量性价比之选；25000mAh+120W澎湃秒充+100W PD自充；自带Type-C线；79.33Wh可上飞机"
  },
  {
    "id": "cuktech-15-pb200ps",
    "category": "充电宝",
    "name": "酷态科15号电能柱（力神）",
    "brand": "酷态科 CUKTECH",
    "model": "PB200PS",
    "tags": [
      "20000mAh",
      "150W",
      "2C1A",
      "小米快充",
      "LED数显"
    ],
    "specs": {
      "电池容量": "20000mAh（额定11000mAh / 约74Wh）",
      "最大功率": "150W MAX（C+A同时输出）",
      "接口配置": "2C1A",
      "C1输出": "5V/3A、9V/3A、12V/3A、15V/3A、20V/5A、20V/6A（120W MAX）",
      "C2输出": "5V/3A、9V/3A、12V/2.5A、15V/2A（30W MAX）",
      "C1输入": "5V/3A、9V/3A、12V/3A、15V/3A、20V/4.5A（90W）",
      "C1 PPS": "5-11V/5A",
      "A口输出": "5V/3A、9V/3A、12V/1.5A、5-11V/3A（UFCS 33W）",
      "多口同时输出": "C1+C2: 45W+22W / C1+A: 45W+18W / 三口: 45W+22W+18W",
      "私有协议": "小米：120W（C1，向下兼容）",
      "尺寸": "163 × 57 × 40 mm",
      "重量": "约 458.3 g",
      "快充协议": "PD 3.0（PPS）、UFCS、QC3.0、FCP、AFC",
      "特色功能": "LED数显屏、柱状造型",
      "电池类型": "锂离子电池（力神）",
      "配色": "黑色"
    },
    "price": "参考价 249 元",
    "release_date": "2025-06",
    "notes": "力神电芯版15号电能柱；2C1A三口输出最大150W；C1支持120W澎湃秒充；74Wh可上飞机",
    "reviews": [
      {
        "title": "换芯后有变化吗？酷态科15号电能柱力神版体验评测，2026年了还值得买吗？",
        "url": "https://www.bilibili.com/video/BV1W5w3z8Eyb/",
        "cover": "https://i2.hdslb.com/bfs/archive/4b4cc0e698322275c7148bd73344ca91e7c7afd8.jpg",
        "platform": "哔哩哔哩",
        "author": "充电行者",
        "publishedAt": "2026-03-15",
        "checkedAt": "2026-11-07"
      }
    ]
  },
  {
    "id": "cuktech-cp12-wpb100l",
    "category": "充电宝",
    "name": "酷态科CP12磁吸电能块",
    "brand": "酷态科 CUKTECH",
    "model": "WPB100L",
    "tags": [
      "10000mAh",
      "22.5W",
      "1C",
      "磁吸",
      "Qi无线充"
    ],
    "specs": {
      "电池容量": "10000mAh（额定5800mAh / 36.5Wh）",
      "最大功率": "22.5W MAX（有线输出）",
      "接口配置": "1C（自带线）",
      "C口输出": "5V/3A、9V/2.22A、10V/2.25A（22.5W MAX）",
      "C口输入": "5V/3A、9V/2.22A（20W）",
      "磁吸无线充": "7.5W MAX",
      "多口同时输出": "15W MAX（有线+无线）",
      "尺寸": "108.7 × 67.9 × 19.4 mm",
      "重量": "约 211.5 g",
      "快充协议": "PD 2.0、QC2.0/3.0、Apple 2.4A",
      "特色功能": "MagSafe磁吸、自带Type-C线、LED指示灯",
      "电池类型": "锂聚合物电池",
      "配色": "沙漠金、云水蓝"
    },
    "price": "参考价 99 元",
    "release_date": "2024-12",
    "notes": "CP系列磁吸款；适配iPhone 12-16全系列磁吸；36.5Wh可上飞机"
  },
  {
    "id": "cuktech-cp13-lpb100",
    "category": "充电宝",
    "name": "酷态科CP13电能块自带线",
    "brand": "酷态科 CUKTECH",
    "model": "LPB100",
    "tags": [
      "10000mAh",
      "33W",
      "2C1A",
      "小米快充",
      "自带线"
    ],
    "specs": {
      "电池容量": "10000mAh（额定5700mAh / 35.28Wh）",
      "最大功率": "33W MAX（单口输出）",
      "接口配置": "2C1A（自带线）",
      "C1/C2输出": "5V/3A、9V/3A、12V/2.5A、5-11V/3A（33W MAX）",
      "C口输入": "5V/3A、9V/3A（27W）",
      "C口PPS": "5-11V/3A",
      "A口输出": "5V/2A、9V/3A、12V/2.5A、5-11V/3A（33W MAX）",
      "多口同时输出": "5V/4A（C1: 5V/1.5A + C2: 5V/1.5A + A: 5V/1A）",
      "私有协议": "小米：33W",
      "尺寸": "90 × 58.5 × 29 mm",
      "重量": "约 214.8 g",
      "快充协议": "PD 3.0（PPS）、UFCS、QC3+、FCP、AFC",
      "特色功能": "自带Type-C线、LED数显",
      "电池类型": "锂离子电池",
      "配色": "星云灰、亚钛灰"
    },
    "price": "参考价 89 元",
    "release_date": "2024-10",
    "notes": "CP系列自带线款；2C1A三口输出；支持小米33W秒充；35.28Wh可上飞机"
  },
  {
    "id": "cuktech-cp25-pb200n",
    "category": "充电宝",
    "name": "酷态科CP25电能块自带线",
    "brand": "酷态科 CUKTECH",
    "tags": [
      "20000mAh",
      "55W",
      "2C1A",
      "小米快充",
      "自带线"
    ],
    "specs": {
      "电池容量": "20000mAh（额定11000mAh / 74Wh）",
      "最大功率": "55W MAX（单口输出）",
      "接口配置": "2C1A（自带线）",
      "C1/C2输出": "5V/3A、9V/3A、12V/3A、15V/3A、20V/2.25A、5-11V/5A（55W MAX）",
      "C口输入": "5V/3A、9V/3A、12V/3A、15V/2.6A、20V/2A（40W）",
      "C口PPS": "5-11V/5A",
      "A口输出": "5V/3A、9V/3A、12V/2.5A、5-11V/3A（UFCS 33W）",
      "多口同时输出": "5V/3A（C1: 5V/1A + C2: 5V/1A + A: 5V/1A）",
      "私有协议": "小米：55W（向下兼容）",
      "尺寸": "162 × 72 × 29.6 mm",
      "重量": "约 493 g",
      "快充协议": "PD 3.0（PPS）、UFCS、QC3.0/4+、FCP、AFC",
      "特色功能": "自带Type-C线（17cm）、LED数显、双击小电流模式",
      "电池类型": "锂离子聚合物电池",
      "附赠线材": "自带Type-C线",
      "配色": "黑色、蓝色、白色、橙色"
    },
    "reviews": [
      {
        "title": "129元全体起立？首发评测酷态科55W自带线充电宝",
        "url": "https://www.bilibili.com/video/BV17s421G7pJ/",
        "platform": "哔哩哔哩",
        "author": "阿甘体验",
        "cover": "https://i2.hdslb.com/bfs/archive/418fb00be0236a7838fc5ea1f43f5827f9544219.jpg",
        "publishedAt": "2024-05-25"
      },
      {
        "title": "【全网首拆】酷态科55W自带线充电，看看129元值不值？",
        "url": "https://www.bilibili.com/video/BV1Uz421a7Tm/",
        "platform": "哔哩哔哩",
        "author": "阿甘体验",
        "cover": "https://i2.hdslb.com/bfs/archive/eb911beb7032ad1e3af4d9eb5d19865576ccf72b.jpg",
        "publishedAt": "2024-05-25"
      },
      {
        "title": "CUKTECH酷态科能量块评测：20000mAh容量，支持小米55W快充",
        "url": "https://www.bilibili.com/video/BV1HcpueCEsf/",
        "platform": "哔哩哔哩",
        "author": "充电头网评测室",
        "cover": "https://i0.hdslb.com/bfs/archive/32aaed293f406eaffbf97eb3066d2004117d26b0.jpg",
        "publishedAt": "2024-09-06"
      },
      {
        "title": "当年容量神机，如今回归主流水平，酷态科CP25单线",
        "url": "https://www.bilibili.com/video/BV13nuM6PEzu/",
        "platform": "哔哩哔哩",
        "author": "并夕规格书",
        "cover": "https://i1.hdslb.com/bfs/archive/898eee52a73111cb7ef169b0f65fedf1ade3bc2a.jpg",
        "publishedAt": "2026-08-08"
      }
    ],
    "model": "PB200N",
    "price": "参考价 99 元",
    "release_date": "2024-05",
    "notes": "CP系列大容量款；自带线+2C1A三口输出最大55W；74Wh可上飞机"
  },
  {
    "id": "anker-prime-a110a",
    "category": "充电宝",
    "name": "Anker Prime 充电宝 26250mAh 300W",
    "brand": "安克 Anker",
    "tags": [
      "26250mAh",
      "300W",
      "2C1A",
      "PD3.1",
      "小米快充",
      "华为快充",
      "彩屏",
      "APP"
    ],
    "specs": {
      "电池容量": "26250mAh（额定15200mAh / 99.75Wh）",
      "最大功率": "300W MAX（总输出）",
      "接口配置": "2C1A",
      "C口输出": "5V/3A、9V/3A、12V/3A、15V/3A、20V/5A、28V/5A（140W Max）",
      "C口最大输出": "140W",
      "C口输入": "5V/3A、9V/3A、12V/3A、15V/3A、20V/5A、28V/5A（140W Max）；28V/5.36A（150W Max，安克协议）",
      "C口PPS": "5-11V/5A、4.5-21V/5A",
      "C口 UFCS": "3.4-5.5V/5A、5.5-10V/6.6A、10-11V/6A、11-20V/3.3A、20-21V/3.1A",
      "A口输出": "5V/3A、9V/2A、10V/2.25A、12V/1.5A（22.5W Max）",
      "多口同时输出": "300W Max",
      "私有协议": "小米：120W澎湃秒充（Mi PPS 3.6-11V/6.1A、3.6-20V/6A）；华为：66W超级快充",
      "尺寸": "160.14 × 62.82 × 37.81 mm",
      "重量": "约 587 g",
      "快充协议": "PD 3.1（PPS）、UFCS 2.0、QC3/5、FCP、SCP、AFC",
      "特色功能": "彩屏显示（电量/功率/温度/健康度）、APP互联、Pogo Pin充电底座（150W）、边充边放、双口自充250W",
      "电池类型": "4串锂离子电池",
      "附赠线材": "240W C to C 编织线",
      "配色": "黑色"
    },
    "reviews": [
      {
        "title": "软包电芯的“荣光”！安克Prime A110A移动电源评测",
        "url": "https://www.bilibili.com/video/BV1kvXUBMEAd/",
        "platform": "哔哩哔哩",
        "author": "北昇充电站",
        "cover": "https://i0.hdslb.com/bfs/archive/d9722a796c7adb4ceaa86f52a873b34196858166.jpg",
        "publishedAt": "2026-03-29"
      },
      {
        "title": "1099元值不值？评测拆解安克A110A充电宝",
        "url": "https://www.bilibili.com/video/BV1f8XYBxEQp/",
        "platform": "哔哩哔哩",
        "author": "阿甘体验",
        "cover": "https://i0.hdslb.com/bfs/archive/6dea97e1734ea56439ed1e12cfa011d033f92aa5.jpg",
        "publishedAt": "2026-04-01"
      }
    ],
    "model": "A110A",
    "price": "1099 元（京东百亿补贴 859 元）",
    "release_date": "2026-03",
    "notes": "中国大陆金标定制版；支持小米120W+华为66W私有协议；双口自充250W；可上飞机"
  },
  {
    "id": "anker-a1259",
    "category": "充电宝",
    "name": "安克自带线充电宝 10000mAh 30W",
    "brand": "安克 Anker",
    "model": "A1259",
    "tags": [
      "10000mAh",
      "30W",
      "1C1A",
      "自带线",
      "LCD屏"
    ],
    "specs": {
      "电池容量": "10000mAh（2×5000mAh / 36Wh）",
      "最大功率": "30W MAX",
      "接口配置": "1C1A + 自带C线",
      "C口输出": "5V/3A、9V/3A、10V/2.25A、12V/2.5A、15V/2A、20V/1.5A（30W Max）",
      "C口输入": "5V/3A、9V/3A、15V/2A、20V/1.5A（30W Max）",
      "C口PPS": "3.3-11V/2.75A",
      "自带线输出": "5V/3A、9V/3A、10V/2.25A、12V/2.5A、15V/2A、20V/1.5A（30W Max）",
      "A口输出": "5V/3A、9V/2A、10V/2.25A、12V/1.5A（22.5W Max）",
      "多口同时输出": "5V/4.8A",
      "尺寸": "104.29 × 52.47 × 26.01 mm",
      "重量": "约 212 g",
      "快充协议": "PD 3.0（PPS）、QC3.0/4+、FCP、SCP、AFC",
      "特色功能": "LCD智能屏（电量/充放电剩余时间）、自带C线（可当提绳）、小电流模式",
      "电池类型": "2串锂离子电池（长虹三杰 INR21700-5000）",
      "配色": "黑色、蓝色、白色、粉色"
    },
    "price": "参考价 228 元",
    "release_date": "2024-03",
    "notes": "自带C线可收纳当提绳；36Wh可上飞机",
    "reviews": [
      {
        "title": "129元值不值得买？评测拆解安克30W自带线充电宝",
        "url": "https://www.bilibili.com/video/BV1Q142117hC/",
        "cover": "https://i0.hdslb.com/bfs/archive/fdb59b0dddad0093d49fa879e4e50c5198b093e1.jpg",
        "platform": "哔哩哔哩",
        "author": "阿甘体验",
        "publishedAt": "2024-05-28",
        "checkedAt": "2026-11-07"
      }
    ]
  },
  {
    "id": "anker-a1289",
    "category": "充电宝",
    "name": "安克737移动电源 140W 24000mAh",
    "brand": "安克 Anker",
    "model": "A1289",
    "tags": [
      "24000mAh",
      "140W",
      "2C1A",
      "PD3.1",
      "LCD屏"
    ],
    "specs": {
      "电池容量": "24000mAh（6×4000mAh / 86.4Wh）",
      "最大功率": "140W MAX",
      "接口配置": "2C1A",
      "C1/C2输出": "5V/3A、9V/3A、12V/3A、15V/3A、20V/5A、28V/5A（140W Max）",
      "C1/C2输入": "5V/3A、9V/3A、12V/3A、15V/3A、20V/5A、28V/5A（140W Max）",
      "C口PPS": "4.5-21V/5A",
      "A口输出": "5V/3A、9V/2A、12V/1.5A（22.5W Max）",
      "多口同时输出": "140W Max",
      "尺寸": "156 × 54.8 × 49.7 mm",
      "重量": "约 639 g",
      "快充协议": "PD 3.1（PPS）、QC2/5、FCP、SCP、AFC",
      "特色功能": "LCD彩屏（电量/功率/温度/循环次数）、小电流模式",
      "电池类型": "6串21700锂离子电池（力神 LR2170LA）",
      "配色": "黑灰色"
    },
    "price": "参考价 549 元",
    "release_date": "2023-09",
    "notes": "PD3.1 140W双向快充；86.4Wh可上飞机",
    "reviews": [
      {
        "title": "支持PD3.1 140W双向快充，ANKER 24000mAh移动电源兼容性测试",
        "url": "https://www.bilibili.com/video/BV15g411C7Y2/",
        "cover": "https://i2.hdslb.com/bfs/archive/461ebceaf8632a2f24392be5dcd57ec9530cc959.jpg",
        "platform": "哔哩哔哩",
        "author": "充电头网",
        "publishedAt": "2022-08-15",
        "checkedAt": "2026-11-07"
      }
    ]
  },
  {
    "id": "anker-a1335",
    "category": "充电宝",
    "name": "Anker Prime 充电宝 12000mAh 130W",
    "brand": "安克 Anker",
    "model": "A1335",
    "tags": [
      "12000mAh",
      "130W",
      "2C",
      "OPPO快充",
      "TFT数显"
    ],
    "specs": {
      "电池容量": "12000mAh（额定6600mAh / 43.2Wh）",
      "最大功率": "130W MAX（双C口同时输出）",
      "接口配置": "2C",
      "C1/C2输出": "5V/3A、9V/3A、10V/2.25A、15V/3A、20V/3.25A（65W Max）",
      "C1/C2输入": "5V/3A、9V/3A、15V/3A、20V/3.25A（65W Max）",
      "C口PPS": "5-11V/2.25A",
      "多口同时输出": "65W + 65W（130W Max）",
      "私有协议": "OPPO：22.5W",
      "尺寸": "134.4 × 55 × 34.53 mm",
      "重量": "约 360 g",
      "快充协议": "PD 3.0（PPS）、QC、FCP、SCP、AFC",
      "特色功能": "TFT数显屏、磁吸底座（65W，另购）、玻璃质感亚克力面板",
      "电池类型": "锂离子电池",
      "配色": "黑色"
    },
    "price": "参考价 549 元",
    "release_date": "2024-06",
    "notes": "Prime系列；2C双口各65W，合计130W；支持OPPO私有协议；可搭配磁吸底座（另购）；43.2Wh可上飞机"
  },
  {
    "id": "anker-a1339",
    "category": "充电宝",
    "name": "Anker Prime 二合一充电宝 9600mAh 65W",
    "brand": "安克 Anker",
    "model": "A1339",
    "tags": [
      "9600mAh",
      "65W",
      "1C",
      "二合一",
      "氮化镓",
      "AC插头"
    ],
    "specs": {
      "电池容量": "9600mAh（额定5900mAh / 34.56Wh）",
      "最大功率": "65W MAX",
      "接口配置": "2C + AC插头",
      "C口输出": "5V/3A、9V/3A、12V/3A、15V/3A、20V/3.25A（65W Max）",
      "C口输入": "5V/3A、9V/3A、12V/2.5A、15V/2A、20V/1.5A（30W Max）",
      "AC输入": "100-240V~ 50/60Hz 2.0A",
      "尺寸": "114.6 × 42 × 43 mm",
      "重量": "约 308 g",
      "快充协议": "PD 3.0（PPS）、QC、FCP、SCP、AFC",
      "特色功能": "充电器+充电宝二合一、氮化镓、AC插头直充",
      "电池类型": "锂离子电池",
      "附赠线材": "100W编织C to C线（1m）",
      "配色": "黑色"
    },
    "price": "参考价 269 元",
    "release_date": "2024-08",
    "notes": "充电器+充电宝二合一；氮化镓AC插头；34.56Wh可上飞机",
    "reviews": [
      {
        "title": "ANKER Prime安克二合一9600mAh移动电源拆解：搭载国标双脚插头，支持65W PD快充",
        "url": "https://www.bilibili.com/video/BV1KeyiYaELq/",
        "cover": "https://i1.hdslb.com/bfs/archive/760ac3f87225b2fac6c47fd797d51f84689f6721.jpg",
        "platform": "哔哩哔哩",
        "author": "充电头网",
        "publishedAt": "2024-10-21",
        "checkedAt": "2026-11-07"
      }
    ]
  },
  {
    "id": "cuktech-pb150p",
    "purchaseLinks": [
      {
        "platform": "京东",
        "url": "https://item.jd.com/100133267851.html",
        "variant": "PB150P 15000mAh"
      }
    ],
    "reviews": [
      {
        "title": "229元又有惊喜？评测拆解酷态科10号Plus充电宝",
        "url": "https://www.bilibili.com/video/BV1o2k9YbEwL/",
        "cover": "https://i0.hdslb.com/bfs/archive/e5a1841b424f92f4cce459c5306287bd7b076ab1.jpg",
        "platform": "哔哩哔哩",
        "author": "阿甘体验",
        "publishedAt": "2024-12-24"
      }
    ],
    "category": "充电宝",
    "name": "酷态科10号超级电能棒Plus",
    "brand": "酷态科 CUKTECH",
    "model": "PB150P",
    "tags": [
      "15000mAh",
      "120W",
      "2C1A",
      "小米快充"
    ],
    "specs": {
      "电池容量": "15000mAh（额定8300mAh / 54Wh）",
      "最大功率": "120W MAX",
      "接口配置": "2C1A",
      "C1口输出": "5V/3A、9V/3A、12V/3A、15V/3A、20V/3.5A、5-20V/6A（120W Max）",
      "C1口输入": "5V/3A、9V/3A、12V/3A、15V/3A、20V/5A（100W Max）",
      "C1口PPS": "5-20V/6A",
      "C2口输出": "5V/3A、9V/3A、5-11V/3A（33W Max）",
      "A口输出": "5V/3A、9V/3A、5-11V/3A（33W Max）",
      "尺寸": "153.7 × 34.8 × 51 mm",
      "重量": "约 345.5 g",
      "快充协议": "PD 3.0（PPS）、QC、FCP、SCP、AFC",
      "私有协议": "小米：120W澎湃秒充",
      "特色功能": "柱状造型",
      "电池类型": "锂离子电池",
      "配色": "金属灰"
    },
    "price": "参考价 229 元",
    "release_date": "2024-08",
    "notes": "10号电能棒升级版；54Wh可上飞机"
  },
  {
    "id": "cuktech-pb150s",
    "category": "充电宝",
    "name": "酷态科15号超级电能卡Air",
    "brand": "酷态科 CUKTECH",
    "model": "PB150S",
    "tags": [
      "15000mAh",
      "100W",
      "2C1A",
      "小米快充",
      "碳硅负极",
      "TFT屏"
    ],
    "specs": {
      "电池容量": "15000mAh（额定8800mAh / 57.75Wh）",
      "最大功率": "100W MAX",
      "接口配置": "2C1A",
      "C1口输出": "5V/3A、9V/3A、12V/3A、15V/3A、20V/3.25A、5-11V/6.1A、5-20V/4.5A（90W Max）",
      "C1口输入": "5V/3A、9V/3A、12V/3A、15V/3A、20V/5A、5-11V/5A（100W Max）",
      "C口PPS": "5-11V/6.1A（Mi PPS）、5-20V/4.5A",
      "C2口输出": "5V/3A、9V/3A、5-11V/3A（33W Max）",
      "A口输出": "5V/3A、9V/3A、5-11V/3A（33W Max）；UFCS 5-11V/3A",
      "多口同时输出": "5V/6A、9V/9A、11V/9.1A",
      "私有协议": "小米：90W澎湃秒充",
      "尺寸": "132.1 × 72 × 21 mm",
      "重量": "约 305.4 g",
      "快充协议": "PD 3.0（PPS）、UFCS、QC3.0、FCP、SCP、AFC",
      "特色功能": "TFT高清万象屏、碳硅负极电池、GaN氮化镓、屏幕180°翻转、小电流模式",
      "电池类型": "锂聚合物电池（力神碳硅负极）",
      "附赠线材": "240W C to C 充电线",
      "配色": "钛灰色"
    },
    "price": "参考价 269 元",
    "release_date": "2025-07",
    "notes": "碳硅负极电池仅21mm厚；支持小米90W澎湃快充；57.75Wh可上飞机"
  },
  {
    "id": "cuktech-pb200p",
    "category": "充电宝",
    "name": "酷态科15号电能柱",
    "brand": "酷态科 CUKTECH",
    "model": "PB200P",
    "tags": [
      "20000mAh",
      "150W",
      "2C1A",
      "小米快充"
    ],
    "specs": {
      "电池容量": "20000mAh（额定11000mAh / 71.5Wh）",
      "最大功率": "150W MAX",
      "接口配置": "2C1A",
      "C1口输出": "5V/3A、9V/3A、12V/3A、15V/3A、20V/6A（120W Max）",
      "C1口输入": "5V/3A、9V/3A、12V/3A、15V/3A、20V/4.5A（90W Max）",
      "C口PPS": "5-11V/5A",
      "C2口输出": "5V/3A、9V/3A、12V/2.5A、5-11V/3A（33W Max）",
      "A口输出": "5V/3A、9V/2.23A、12V/1.67A、5-11V/3A（33W Max）",
      "私有协议": "小米：120W澎湃秒充",
      "尺寸": "163 × 57 × 39.9 mm",
      "重量": "约 450 g",
      "快充协议": "PD 3.0（PPS）、QC、FCP、SCP、AFC",
      "电池类型": "锂离子电池（4串21700）",
      "配色": "银色"
    },
    "price": "参考价 229 元",
    "release_date": "2023-09",
    "notes": "15号电能柱经典款；71.5Wh可上飞机",
    "reviews": [
      {
        "title": "酷态科15号电能柱评测：内置4颗21700车规级动力电芯，最高150W输出",
        "url": "https://www.bilibili.com/video/BV1hF411D72Z/",
        "platform": "B站",
        "author": "充电头网",
        "publishedAt": "2023-09-25",
        "cover": "https://i1.hdslb.com/bfs/archive/53ea130713792e9c49573b2daaf20de9d3a4251a.jpg",
        "checkedAt": "2026-11-06"
      }
    ]
  },
  {
    "id": "cuktech-pb200",
    "category": "充电宝",
    "name": "酷态科15号电能柱SE",
    "brand": "酷态科 CUKTECH",
    "model": "PB200",
    "tags": [
      "20000mAh",
      "100W",
      "2C1A"
    ],
    "specs": {
      "电池容量": "20000mAh（额定11000mAh / 72Wh）",
      "最大功率": "100W MAX",
      "接口配置": "2C1A",
      "C1口输出": "5V/3A、9V/3A、12V/3A、15V/3A、20V/3.25A、5-11V/6.1A（67W Max）",
      "C1口输入": "5V/3A、9V/3A、12V/3A、15V/3A、20V/4.5A（90W Max）",
      "C口PPS": "5-11V/6.1A",
      "C2口输出": "5V/3A、9V/3A、5-11V/3A（33W Max）",
      "A口输出": "5V/3A、9V/3A、5-11V/3A（33W Max）",
      "尺寸": "152 × 52 × 44.4 mm",
      "重量": "约 504 g",
      "快充协议": "PD 3.0（PPS）、QC、FCP、SCP、AFC",
      "电池类型": "锂离子电池",
      "配色": "银色"
    },
    "price": "参考价 179 元",
    "release_date": "2024-05",
    "notes": "15号电能柱性价比款；72Wh可上飞机",
    "reviews": [
      {
        "title": "双口100W Max，支持小米67W协议，酷态科15号电能柱SE米系手机快充兼容性测试",
        "url": "https://www.bilibili.com/video/BV1fr421j7zu/",
        "platform": "B站",
        "author": "充电头网评测室",
        "publishedAt": "2024-05-21",
        "cover": "https://i0.hdslb.com/bfs/archive/d7298cc7b7529619d67781953456fa89ca3d18ae.jpg",
        "checkedAt": "2026-11-06",
        "scope": "米系手机快充兼容性测试"
      }
    ]
  },
  {
    "id": "cuktech-pb200u",
    "reviews": [
      {
        "title": "再一次越级！酷态科15号Ultra充电宝首发详细评测",
        "url": "https://www.bilibili.com/video/BV1Fw4m1C7Zt/",
        "cover": "https://i1.hdslb.com/bfs/archive/8bbe966e5b1887ffd23772e848107627502db7ca.jpg",
        "platform": "哔哩哔哩",
        "author": "阿甘体验",
        "publishedAt": "2024-08-20"
      },
      {
        "title": "全网首拆酷态科15号Ultra，看它是如何实现210W狂暴性能的？",
        "url": "https://www.bilibili.com/video/BV1vH4y1c7aJ/",
        "cover": "https://i2.hdslb.com/bfs/archive/836b30ac601e0daa039a4a205c544ebf9e2e5826.jpg",
        "platform": "哔哩哔哩",
        "author": "阿甘体验",
        "publishedAt": "2024-08-20"
      }
    ],
    "category": "充电宝",
    "name": "酷态科15号超级电能柱Ultra",
    "brand": "酷态科 CUKTECH",
    "model": "PB200U",
    "tags": [
      "20000mAh",
      "210W",
      "2C1A",
      "PD3.1",
      "小米快充"
    ],
    "specs": {
      "电池容量": "20000mAh（额定11000mAh）",
      "最大功率": "210W MAX",
      "接口配置": "2C1A",
      "C1口输出": "5V/3A、9V/3A、12V/3A、15V/3A、20V/5A、28V/5A（140W Max，PD3.1）",
      "C1口输入": "140W Max（PD3.1）",
      "C口PPS": "5-11V/5A、5-21V/5A",
      "C2口输出": "5V/3A、9V/3A、12V/3A、15V/3A、20V/3.25A（65W Max）",
      "A口输出": "5V/3A、9V/3A、5-11V/3A（33W Max）",
      "私有协议": "小米：120W澎湃秒充",
      "尺寸": "约 163 × 57 × 40 mm",
      "重量": "约 450 g",
      "快充协议": "PD 3.1（PPS）、QC、FCP、SCP、AFC",
      "电池类型": "锂离子电池（8串18650，4串2并）",
      "配色": "银灰色"
    },
    "price": "参考价 399 元",
    "release_date": "2024-08",
    "notes": "PD3.1 140W双向快充；210W总输出；72Wh可上飞机"
  },
  {
    "id": "cuktech-cp13-power-pin",
    "category": "充电宝",
    "name": "酷态科CP13电能块（Power Pin磁吸款）",
    "brand": "酷态科 CUKTECH",
    "model": "BP01",
    "tags": [
      "10000mAh",
      "33W",
      "Power Pin",
      "磁吸",
      "单C口",
      "小米快充"
    ],
    "specs": {
      "电池容量": "10000mAh（额定6300mAh / 36Wh）",
      "最大功率": "33W MAX（单口输出）",
      "接口配置": "1C + Power Pin磁吸接口",
      "C口输出": "5V/3A、9V/3A、12V/2.5A、5-11V/3A（33W MAX）",
      "C口输入": "5V/3A、9V/3A（27W MAX）",
      "C口PPS": "5-11V/3A",
      "Power Pin接口": "输入输出上限25W，支持9V3A，可磁吸连接酷态科CP模块风扇",
      "私有协议": "小米：33W",
      "尺寸": "52.6 × 27.8 × 104.9 mm",
      "重量": "约 224.5 g",
      "快充协议": "PD 3.0（PPS）、UFCS、QC3+、FCP、AFC",
      "特色功能": "Power Pin磁吸快拆接口、单C口半双工充放、多色电量指示灯、21700车规级电芯",
      "电池类型": "锂离子电池（2×21700车规级电芯）",
      "附赠线材": "0.3m C to C",
      "配色": "白色、紫色"
    },
    "price": "参考价 179 元",
    "release_date": "2026-05",
    "notes": "带Power Pin磁吸接口的CP13电能块，可搭配酷态科CP模块风扇实现二合一使用，单C口33W快充，36Wh可上飞机"
  },
  {
    "id": "anker-prime-a110g",
    "category": "充电宝",
    "name": "安克Prime如意棒充电宝 20100mAh 220W",
    "brand": "安克 Anker",
    "tags": [
      "20100mAh",
      "220W",
      "2C1A",
      "PD3.1",
      "彩屏",
      "APP",
      "黑神话悟空"
    ],
    "specs": {
      "电池容量": "20100mAh（72.36Wh）",
      "最大功率": "220W MAX（总输出）",
      "接口配置": "2C1A",
      "C1/C2输出": "5V/3A、9V/3A、10V/2.25A、12V/3A、15V/3A、20V/5A、28V/5A（单口140W Max）",
      "C口最大输出": "140W",
      "C口输入": "5V/3A、9V/3A、12V/3A、15V/3A、20V/5A（100W Max）",
      "A口输出": "5V/3A、9V/2A、10V/2.25A、12V/1.5A（22.5W Max）",
      "多口同时输出": "双口/三口总输出最高220W，PowerIQ 4.0智能动态分配",
      "尺寸": "约44 × 50 × 147 mm",
      "重量": "约510g",
      "快充协议": "USB PD3.1（28V EPR）、三星Super Fast Charging 2.0；完整PPS档位待核",
      "特色功能": "AnkerSense彩屏、蓝牙APP互联、自定义功率分配、ActiveShield 4.0温控、小电流模式、边充边放",
      "电池类型": "海外说明书为6枚3350mAh电芯串联（21.6V）",
      "附赠线材": "1m USB-C to USB-C（240W，官方海外套装）",
      "配色": "黑金（黑神话悟空联名）",
      "底座输入": "Pogo Pin：15-25.2V/5A（100W Max，底座另购）"
    },
    "reviews": [
      {
        "url": "https://www.bilibili.com/video/BV1kyyZBCEnY/",
        "title": "安克黑神话联名充电宝Prime 220W充电宝",
        "platform": "哔哩哔哩",
        "author": "新手玩数码",
        "cover": "https://i1.hdslb.com/bfs/archive/745d6f5e5061c3b04f77c969a9d1bb74b102d81b.jpg",
        "publishedAt": "2025-11-02"
      },
      {
        "url": "https://www.bilibili.com/video/BV1PFpgzCEUq/",
        "title": "当国产3A天花板遇上硬核充电科技，安克×黑神话悟空联名充电装备体验",
        "platform": "哔哩哔哩",
        "author": "轻电科技",
        "cover": "https://i0.hdslb.com/bfs/archive/f157f76c5576f423b1e2942e05e4839b8d8e2afa.jpg",
        "publishedAt": "2025-09-16"
      }
    ],
    "model": "A110G",
    "price": "参考价 469元",
    "release_date": "2025-10",
    "notes": "220W为整机总输出，USB-C单口最高140W，自充最高100W。容量及电池能量按安克A110G官方联名款规格记录为20100mAh/72.36Wh；海外说明书的电池组为21.6V/3350mAh（6枚3350mAh电芯串联）。尺寸、重量、电芯信息及套装线材注明海外资料来源，国行对应值仍待铭牌核实。通过A1902底座自充时不支持边充边放，A1903底座支持。国行参考价、准确上市年月及完整PPS/UFCS档位暂留空。"
  }
];
