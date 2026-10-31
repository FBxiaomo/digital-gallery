// 处理器数据库
// 手机通过 processor_id 关联处理器
// 添加新手机时，确保对应的处理器已存在于此文件
// 安兔兔 SoC CPU、GPU 均分来源：https://www.antutu.com/ranking/soc?level=1（采集：2026-10-29）

var processors =
[
 {
  "id": "dimensity-9600-pro",
  "name": "天玑9600 Pro",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "1,162,281",
   "安兔兔 SoC GPU": "1,639,084",
   "制程": "台积电 2nm",
   "CPU架构": "2×C2-Ultra 4.55GHz + 3×C2-Pro 4.35GHz + 3×C2-Pro 3.10GHz（全大核）",
   "GPU": "Arm Mali-G2 Ultra NX",
   "NPU": "联发科 NPU 1090 + 超能效 NPU 2.0",
   "内存支持": "LPDDR6 / LPDDR5X 10667Mbps",
   "基带": "3GPP Release 17 5G",
   "GeekBench 6 单核": "4,216",
   "GeekBench 6 多核": "12,765",
   "3DMark WLE": "9,245",
   "3DMark SNL": "~4,453（拟合）",
   "发布日期": "2026-09",
   "说明": "小白测评参考机（Notebookcheck转引）；非量产。"
  }
 },
 {
  "id": "sd8-elite-extreme-gen6",
  "name": "骁龙8 Elite Extreme Gen 6",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "1,161,762",
   "安兔兔 SoC GPU": "1,750,402",
   "制程": "台积电 2nm",
   "CPU架构": "2×Oryon Prime 最高5.0GHz + 6×Oryon Performance 最高4.0GHz",
   "GPU": "Qualcomm Adreno GPU（支持硬件光追、Adreno Neural Fusion）",
   "NPU": "Qualcomm Hexagon NPU",
   "GeekBench 6 单核": "4,193",
   "GeekBench 6 多核": "12,706",
   "3DMark WLE": "~9,900（据Unlimited实测估算）",
   "3DMark SNL": "~4,220（拟合）",
   "发布日期": "2026-09",
   "说明": "骁龙8超级至尊版；ComputerBase参考机，WLE估算。"
  }
 },
 {
  "id": "a20-pro",
  "name": "A20 Pro",
  "brand": "苹果 Apple",
  "specs": {
   "制程": "2nm",
   "CPU架构": "6核 Apple CPU（集成神经网络加速器）",
   "GPU": "7核 Apple GPU",
   "NPU": "双16核神经网络引擎（共32核）",
   "GeekBench 6 单核": "4,733",
   "GeekBench 6 多核": "12,854",
   "3DMark WLE": "9,096",
   "3DMark SNL": "4,198",
   "发布日期": "2026-09",
   "说明": "Notebookcheck（iPhone 18 Pro实测）。"
  }
 },
 {
  "id": "xring-o3",
  "name": "玄戒 O3",
  "brand": "小米 Xiaomi",
  "specs": {
   "安兔兔 SoC CPU": "1,178,051",
   "安兔兔 SoC GPU": "1,832,719",
   "制程": "台积电 3nm（N3P）",
   "CPU架构": "2×C1-Ultra 4.35GHz + 4×C1-Premium 3.68GHz + 4×C1-Pro 3.15GHz（10核全大核）",
   "GPU": "Arm Mali-G2 Ultra NX MC16（16核）",
   "内存支持": "LPDDR6 / LPDDR5X（跑分采用LPDDR6版本）",
   "GeekBench 6 单核": "3,699",
   "GeekBench 6 多核": "14,350",
   "3DMark WLE": "11,378",
   "3DMark SNL": "4,658",
   "发布日期": "2026-08",
   "说明": "小白测评（小米平板9 Pro Max量产机）。"
  }
 },
 {
  "id": "xring-o1",
  "name": "玄戒 O1",
  "brand": "小米 Xiaomi",
  "specs": {
   "安兔兔 SoC CPU": "1,002,180",
   "安兔兔 SoC GPU": "955,041",
   "制程": "台积电 3nm（N3E）",
   "CPU架构": "2×Cortex-X925 3.90GHz + 4×Cortex-A725 3.40GHz + 2×Cortex-A725 1.90GHz + 2×Cortex-A520 1.80GHz",
   "GPU": "Immortalis-G925 MC16（1392MHz）",
   "内存支持": "LPDDR5X 9600MT/s，16bit×4",
   "基带": "联发科 T800（外挂）",
   "GeekBench 5 单核": "2,140",
   "GeekBench 5 多核": "7,773",
   "GeekBench 6 单核": "3,125",
   "GeekBench 6 多核": "9,671",
   "3DMark WLE": "6,604",
   "GFXBench 5 1080p": "201 fps",
   "GFXBench 5 1440p": "85.5 fps",
   "发布日期": "2025-05",
   "说明": "极客湾 SOCPK（2026-10-29核验）。"
  }
 },
 {
  "id": "sd8g2",
  "name": "骁龙8 Gen 2",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "610,530",
   "安兔兔 SoC GPU": "424,415",
   "制程": "台积电 4nm",
   "CPU架构": "1×Cortex-X3 3.2GHz + 2×A715 2.8GHz + 2×A710 2.8GHz + 3×A510 2.0GHz",
   "GPU": "Adreno 740",
   "内存支持": "LPDDR5X 4200MHz",
   "基带": "骁龙X70 5G",

   "GeekBench 5 单核": "1,485",
   "GeekBench 5 多核": "5,195",
   "GeekBench 6 单核": "2,036",
   "GeekBench 6 多核": "5,697",
   "3DMark WLE": "3,782",
   "GFXBench Manhattan 3.0": "332 fps",
   "GFXBench Manhattan 3.1": "226 fps",
   "发布日期": "2022-11",
   "说明": "极客湾"
  }
 },
 {
  "id": "sd8g3",
  "name": "骁龙8 Gen 3",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "708,427",
   "安兔兔 SoC GPU": "764,701",
   "制程": "台积电 4nm",
   "CPU架构": "1×Cortex-X4 3.3GHz + 3×A720 3.15GHz + 2×A720 2.96GHz + 2×A520 2.27GHz",
   "GPU": "Adreno 750",
   "内存支持": "LPDDR5X 4800MHz",
   "基带": "骁龙X75 5G",

   "GeekBench 6 单核": "2,213",
   "GeekBench 6 多核": "7,466",
   "3DMark WLE": "5,170",
   "发布日期": "2023-10",
   "说明": "极客湾"
  }
 },
 {
  "id": "sd8elite",
  "name": "骁龙8至尊版",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "967,722",
   "安兔兔 SoC GPU": "1,118,850",
   "制程": "台积电 3nm（N3E）",
   "CPU架构": "2×Oryon 超大核 4.32GHz + 6×Oryon 大核 3.53GHz（全大核）",
   "GPU": "Adreno 830（硬件光追）",
   "NPU": "Hexagon NPU",
   "内存支持": "LPDDR5X",
   "基带": "骁龙X80 5G",

   "GeekBench 6 单核": "3,237",
   "GeekBench 6 多核": "10,244",
   "3DMark WLE": "6,949",
   "发布日期": "2024-10",
   "说明": "极客湾（跑分数据来自极客湾跑分Excel）"
  }
 },
 {
  "id": "sd8elite5",
  "name": "第五代骁龙8至尊版",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "1,137,283",
   "安兔兔 SoC GPU": "1,367,745",
   "制程": "台积电 3nm（N3E）",
   "CPU架构": "2×Oryon 超大核 4.6GHz + 6×Oryon 大核 3.5GHz（全大核）",
   "GPU": "Adreno 830（硬件光追）",
   "NPU": "Hexagon NPU",
   "内存支持": "LPDDR5X",
   "基带": "骁龙X80 5G",

   "GeekBench 6 单核": "3,836",
   "GeekBench 6 多核": "12,352",
   "3DMark WLE": "7,640",
   "发布日期": "2025-09",
   "说明": "极客湾（GB6），IT之家实测（WLE）"
  }
 },
 {
  "id": "sd865",
  "name": "骁龙865",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "445,934",
   "安兔兔 SoC GPU": "132,294",
   "制程": "台积电 7nm",
   "CPU架构": "1×Cortex-A77 2.84GHz + 3×A77 2.4GHz + 4×A55 1.8GHz",
   "GPU": "Adreno 650",
   "内存支持": "LPDDR5 2750MHz",
   "基带": "骁龙X55 5G（外挂）",

   "GeekBench 6 单核": "1,150",
   "GeekBench 6 多核": "3,352",
   "3DMark WLE": "1,124",
   "发布日期": "2019-12",
   "说明": "极客湾"
  }
 },
 {
  "id": "sd870",
  "name": "骁龙870",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "425,093",
   "安兔兔 SoC GPU": "167,800",
   "制程": "台积电 7nm",
   "CPU架构": "1×Cortex-A77 3.2GHz + 3×A77 2.4GHz + 4×A55 1.8GHz",
   "GPU": "Adreno 650",
   "内存支持": "LPDDR5 2750MHz",
   "基带": "骁龙X55 5G（外挂）",

   "GeekBench 6 单核": "1,282",
   "GeekBench 6 多核": "3,437",
   "3DMark WLE": "1,248",
   "发布日期": "2021-01",
   "说明": "极客湾"
  }
 },
 {
  "id": "sd765g",
  "name": "骁龙765G",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "271,057",
   "安兔兔 SoC GPU": "62,028",
   "制程": "三星 7nm",
   "CPU架构": "1×Cortex-A76 2.4GHz + 1×A76 2.2GHz + 6×A55 1.8GHz",
   "GPU": "Adreno 620",
   "内存支持": "LPDDR4X 2133MHz",
   "基带": "骁龙X52 5G（集成）",

   "GeekBench 5 单核": "615",
   "GeekBench 5 多核": "1,848",
   "3DMark WLE": "~650",
   "发布日期": "2019-12",
   "说明": "IT之家实测（GB5），极客湾（WLE）"
  }
 },
 {
  "id": "dimensity-8400-ultra",
  "name": "天玑8400-Ultra",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "665,278",
   "安兔兔 SoC GPU": "562,016",
   "制程": "台积电 4nm",
   "CPU架构": "8×Cortex-A725 全大核 3.25GHz",
   "GPU": "Mali-G720 MC6",
   "NPU": "联发科 NPU 780",
   "内存支持": "LPDDR5X 4266MHz",
   "基带": "联发科 M80 5G",

   "GeekBench 6 单核": "1,722",
   "GeekBench 6 多核": "6,906",
   "3DMark WLE": "4,128",
   "发布日期": "2024-12",
   "说明": "极客湾"
  }
 },
 {
  "id": "dimensity-9300",
  "name": "天玑9300",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "733,400",
   "安兔兔 SoC GPU": "680,780",
   "制程": "台积电 4nm（N4P）",
   "CPU架构": "4×Cortex-X4 3.25GHz + 4×Cortex-A720 2.0GHz（全大核）",
   "GPU": "Immortalis-G720 MC12（硬件光追）",
   "NPU": "联发科 APU 790",
   "内存支持": "LPDDR5T 9600MHz",
   "基带": "联发科 M80 5G",

   "GeekBench 6 单核": "2,264",
   "GeekBench 6 多核": "7,857",
   "3DMark WLE": "5,822",
   "发布日期": "2023-11",
   "说明": "极客湾"
  }
 },
 {
  "id": "dimensity-9500",
  "name": "天玑9500",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "1,038,120",
   "安兔兔 SoC GPU": "1,261,743",
   "制程": "台积电 3nm（N3P）",
   "CPU架构": "1×C1-Ultra 4.21GHz + 3×C1-Premium 3.50GHz + 4×C1-Pro 2.70GHz（全大核）",
   "GPU": "Mali-G1 Ultra MC12（硬件光追）",
   "NPU": "联发科 NPU 990",
   "内存支持": "LPDDR5X 10667Mbps",
   "基带": "联发科 Release 17 5G",

   "GeekBench 6 单核": "3,709",
   "GeekBench 6 多核": "10,716",
   "3DMark WLE": "8,251",
   "发布日期": "2025-09",
   "说明": "极客湾（GB6），NotebookCheck（WLE）"
  }
 },
 {
  "id": "a15-bionic",
  "name": "A15 仿生",
  "brand": "苹果 Apple",
  "specs": {
   "制程": "台积电 5nm（N5P）",
   "CPU架构": "2×Avalanche 3.2GHz + 4×Blizzard 2.0GHz（6核）",
   "GPU": "5核 GPU",
   "NPU": "16核神经网络引擎",
   "内存支持": "LPDDR4X",

   "GeekBench 6 单核": "2,442",
   "GeekBench 6 多核": "6,454",
   "3DMark WLE": "3,056",
   "发布日期": "2021-09",
   "说明": "极客湾"
  }
 },
 {
  "id": "a16-bionic",
  "name": "A16 仿生",
  "brand": "苹果 Apple",
  "specs": {
   "制程": "台积电 4nm（N4P）",
   "CPU架构": "2×Everest 3.46GHz + 4×Sawtooth 2.02GHz（6核）",
   "GPU": "5核 GPU",
   "NPU": "16核神经网络引擎",
   "内存支持": "LPDDR5",

   "GeekBench 6 单核": "2,671",
   "GeekBench 6 多核": "7,271",
   "3DMark WLE": "3,383",
   "发布日期": "2022-09",
   "说明": "极客湾"
  }
 },
 {
  "id": "a19-bionic",
  "name": "A19 仿生",
  "brand": "苹果 Apple",
  "specs": {
   "制程": "台积电 3nm（N3P）",
   "CPU架构": "2性能核 + 4能效核（6核）",
   "GPU": "5核 GPU",
   "NPU": "16核神经网络引擎",
   "内存支持": "LPDDR5X",
   "GeekBench 6 单核": "3,849",
   "GeekBench 6 多核": "10,307",
   "3DMark WLE": "~5,000（估算）",
   "发布日期": "2025-09",
   "说明": "极客湾"
  }
 },
 {
  "id": "a19-pro-bionic",
  "name": "A19 Pro 仿生",
  "brand": "苹果 Apple",
  "specs": {
   "制程": "台积电 3nm（N3P）",
   "CPU架构": "2性能核 + 4能效核（6核）",
   "GPU": "6核 GPU（硬件光追）",
   "NPU": "16核神经网络引擎",
   "内存支持": "LPDDR5X",
   "GeekBench 6 单核": "4,019",
   "GeekBench 6 多核": "11,094",
   "3DMark WLE": "6,557",
   "发布日期": "2025-09",
   "说明": "极客湾"
  }
 },
 {
  "id": "a18-bionic",
  "name": "A18",
  "brand": "苹果 Apple",
  "specs": {
   "制程": "台积电 第二代3nm（N3E）",
   "CPU架构": "2×性能核 4.0GHz + 4×能效核 2.4GHz（6核）",
   "GPU": "4核 GPU",
   "NPU": "16核神经网络引擎",
   "内存支持": "LPDDR5",
   "GeekBench 6 单核": "3,509",
   "GeekBench 6 多核": "9,018",
   "发布日期": "2024-09",
   "说明": "极客湾",
   "3DMark WLE": "4,588"
  }
 },
 {
  "id": "a18-pro-bionic",
  "name": "A18 Pro",
  "brand": "苹果 Apple",
  "specs": {
   "制程": "台积电 第二代3nm（N3E）",
   "CPU架构": "2×性能核 4.05GHz + 4×能效核 2.2GHz（6核）",
   "GPU": "6核 GPU（硬件光追）",
   "NPU": "16核神经网络引擎",
   "内存支持": "LPDDR5X",
   "GeekBench 6 单核": "3,605",
   "GeekBench 6 多核": "9,376",
   "3DMark WLE": "5,148",
   "发布日期": "2024-09",
   "说明": "极客湾"
  }
 },
 {
  "id": "sd7gen4",
  "name": "骁龙7 Gen 4",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "474,107",
   "安兔兔 SoC GPU": "324,490",
   "制程": "台积电 4nm",
   "CPU架构": "1×Cortex-A720 2.8GHz + 4×A720 2.4GHz + 3×A520 1.84GHz",
   "GPU": "Adreno 722",
   "NPU": "Hexagon NPU",
   "内存支持": "LPDDR5",
   "基带": "骁龙X63 5G",
   "GeekBench 6 单核": "1,252",
   "GeekBench 6 多核": "3,620",
   "GFXBench Manhattan 3.1": "130 fps",
   "发布日期": "2025-05",
   "说明": "CNMO实测"
  }
 },
 {
  "id": "dimensity-9400-plus",
  "name": "天玑9400+",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "887,236",
   "安兔兔 SoC GPU": "947,791",
   "制程": "台积电 3nm（N3E）",
   "CPU架构": "1×3.626GHz X925 + 3×3.3GHz X4 + 4×2.4GHz A720（全大核）",
   "GPU": "Immortalis-G925 MC12（12核）",
   "NPU": "联发科 APU 890",
   "内存支持": "LPDDR5X 10.7Gbps",
   "基带": "联发科 M80 5G",
   "GeekBench 6 单核": "3,010",
   "GeekBench 6 多核": "9,317",
   "3DMark WLE": "7,130",
   "发布日期": "2025-05",
   "说明": "REDMI K80 至尊版首发；性能数据参照天玑9400（极客湾实测）"
  }
 },
 {
  "id": "dimensity-9300-plus",
  "name": "天玑9300+",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "740,355",
   "安兔兔 SoC GPU": "712,257",
   "制程": "台积电 4nm（N4P）",
   "CPU架构": "1×Cortex-X4 3.4GHz + 3×Cortex-X4 2.85GHz + 4×Cortex-A720 2.0GHz（全大核）",
   "GPU": "Immortalis-G720 MC12（硬件光追）",
   "NPU": "联发科 APU 790",
   "内存支持": "LPDDR5T 9600MHz",
   "基带": "联发科 M80 5G",
   "GeekBench 6 单核": "~2,280",
   "GeekBench 6 多核": "~7,600",
   "3DMark WLE": "~6,000",
   "发布日期": "2024-05",
   "说明": "天玑9300超频版，搜狐/极客湾"
  }
 },
 {
  "id": "kirin-9010s",
  "name": "麒麟9010S",
  "brand": "华为 Huawei",
  "specs": {
   "制程": "中芯国际 N+2（等效7nm）",
   "CPU架构": "1×泰山超大核 2.3GHz + 2×泰山中核 2.18GHz + 4×泰山小核 1.55GHz（7核）",
   "GPU": "Maleoon 910",
   "NPU": "达芬奇NPU",
   "内存支持": "LPDDR5",
   "基带": "巴龙5G",

   "GeekBench 6 单核": "1,442",
   "GeekBench 6 多核": "4,471",
   "3DMark WLE": "~1,600",
   "发布日期": "2024-04",
   "说明": "网易/极客湾（GB6），安兔兔97万，性能介于骁龙765G与865之间"
  }
 },
 {
  "id": "kirin-9030s",
  "name": "麒麟9030S",
  "brand": "华为 Huawei",
  "specs": {
   "制程": "中芯国际 N+2（等效7nm）",
   "CPU架构": "1×泰山超大核 2.75GHz + 4×泰山中核 2.15GHz + 4×泰山小核 1.62GHz（9核）",
   "GPU": "Maleoon 935（硬件光追）",
   "NPU": "达芬奇NPU（40TOPS+）",
   "AI ISP": "NPU图像理解能力↑200%，AI色彩引擎↑43%",
   "内存支持": "LPDDR5X",
   "基带": "巴龙5G",

   "GeekBench 6 单核": "~1,533",
   "GeekBench 6 多核": "~4,714",
   "3DMark WLE": "~3,500",
   "发布日期": "2026-04",
   "说明": "网易（安兔兔128-132万），性能略逊于骁龙8 Gen2，影像专用芯"
  }
 },
 // ========== 新增处理器 ==========
 {
  "id": "dimensity-8500-ultra",
  "name": "天玑8500-Ultra",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "672,403",
   "安兔兔 SoC GPU": "628,394",
   "制程": "台积电 4nm",
   "CPU架构": "1×Cortex-A725 3.4GHz + 3×Cortex-A725 3.2GHz + 4×Cortex-A725 2.2GHz",
   "GPU": "Mali-G720 MC8（支持硬件光追）",
   "NPU": "NPU 880",
   "内存支持": "LPDDR5X 9600Mbps",
   "基带": "5G",

   "GeekBench 6 单核": "1732",
   "GeekBench 6 多核": "6967",
   "3DMark WLE": "5160",
   "发布日期": "2026-01-15",
   "说明": "全大核A725架构；GPU性能接近骁龙8 Gen 3；首发于REDMI Turbo 5"
  }
 },
 {
  "id": "dimensity-9500s",
  "name": "天玑9500s",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "901,907",
   "安兔兔 SoC GPU": "940,585",
   "制程": "台积电 3nm（第二代N3E）",
   "CPU架构": "1×Cortex-X925 3.73GHz + 3×Cortex-X4 3.3GHz + 4×Cortex-A720 2.4GHz",
   "GPU": "Immortalis-G925 MC12（12核，支持硬件光追）",
   "NPU": "旗舰级NPU",
   "内存支持": "LPDDR5X 9600Mbps",
   "基带": "5G R17，四载波聚合，下行7Gbps",

   "GeekBench 6 单核": "3040",
   "GeekBench 6 多核": "9600",
   "3DMark WLE": "7500",
   "发布日期": "2026-01-15",
   "说明": "天玑9500降频版；全大核架构；性能接近骁龙8至尊版；首发于REDMI Turbo 5 Max"
  }
 },
 {
  "id": "sd6g3",
  "name": "第三代骁龙6",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "299,077",
   "安兔兔 SoC GPU": "90,319",
   "制程": "三星 4nm",
   "CPU架构": "4×Cortex-A78 2.4GHz + 4×Cortex-A55 1.8GHz",
   "GPU": "Adreno 710",
   "内存支持": "LPDDR4X",
   "基带": "骁龙X62 5G",

   "GeekBench 6 单核": "920",
   "GeekBench 6 多核": "2800",
   "3DMark WLE": "1500",
   "发布日期": "2024-09",
   "说明": "入门级5G芯片，能效比优秀；首发于三星Galaxy A56"
  }
 },
 {
  "id": "sd7sg4",
  "name": "第四代骁龙7s",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "台积电 4nm",
   "CPU架构": "1×2.7GHz + 3×2.4GHz + 4×1.8GHz",
   "GPU": "Adreno 810",
   "NPU": "第六代AI引擎",
   "内存支持": "LPDDR4X + UFS2.2",
   "基带": "5G",

   "GeekBench 6 单核": "1228",
   "GeekBench 6 多核": "3230",
   "GFXBench Manhattan 3.1": "66 fps",
   "发布日期": "2025-08",
   "说明": "首发于REDMI Note 15 Pro+；GB6数据来自IT之家，GFXBench数据来自360doc"
  }
 },
 {
  "id": "dimensity-7400-ultra",
  "name": "天玑7400-Ultra",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "345,311",
   "安兔兔 SoC GPU": "97,052",
   "制程": "台积电 4nm",
   "CPU架构": "4×Cortex-A78 2.6GHz + 4×Cortex-A55 2.0GHz",
   "GPU": "Mali-G615 MC2",
   "内存支持": "LPDDR4X + UFS2.2",
   "基带": "5G",

   "GeekBench 6 单核": "1050",
   "GeekBench 6 多核": "2939",
   "3DMark WLE": "1010",
   "GFXBench Manhattan 3.0": "88 fps",
   "GFXBench Manhattan 3.1": "62 fps",
   "发布日期": "2025-08",
   "说明": "首发于REDMI Note 15 Pro；数据来自Notebookcheck实测"
  }
 },
 {
  "id": "sd8g5",
  "name": "骁龙8 Gen 5",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "958,707",
   "安兔兔 SoC GPU": "969,946",
   "制程": "台积电 3nm",
   "CPU架构": "Oryon架构 3.8GHz",
   "GPU": "Adreno 829",
   "NPU": "Hexagon",
   "内存支持": "LPDDR5X 4800MHz",
   "基带": "骁龙X80 5G",

   "GeekBench 6 单核": "2,969",
   "GeekBench 6 多核": "10,037",
   "3DMark WLE": "5,683",
   "发布日期": "2025-12",
   "说明": "极客湾"
  }
 },
 {
  "id": "sd8sgen3",
  "name": "骁龙8s Gen 3",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "576,655",
   "安兔兔 SoC GPU": "484,551",
   "制程": "台积电 4nm",
   "CPU架构": "1×Cortex-X4 3.0GHz + 4×Cortex-A720 2.8GHz + 3×Cortex-A520 2.0GHz",
   "GPU": "Adreno 735",
   "NPU": "Hexagon NPU",
   "内存支持": "LPDDR5X 4800MHz",
   "基带": "骁龙X70 5G",

   "GeekBench 6 单核": "2,016",
   "GeekBench 6 多核": "5,408",
   "3DMark WLE": "3,251",
   "发布日期": "2024-03",
   "说明": "极客湾"
  }
 },
 {
  "id": "dimensity-7500",
  "name": "天玑7500",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 4nm",
   "CPU架构": "4×Arm C1 Pro 2.6GHz + 4×Arm C1 Nano 2.0GHz",
   "GPU": "Mali-G625 MC2",
   "NPU": "联发科 NPU 850",
   "内存支持": "LPDDR5 6400Mbps",
   "基带": "联发科 5G 下行5.2Gbps",

   "GeekBench 6 单核": "1,120",
   "GeekBench 6 多核": "3,480",
   "3DMark WLE": "2,050",
   "发布日期": "2026-05",
   "说明": "vivo S60元气版实测"
  }
 },
 {
  "id": "sd835",
  "name": "骁龙835",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "208,071",
   "安兔兔 SoC GPU": "66,764",
   "制程": "三星 10nm",
   "CPU架构": "4×Kryo 280 Gold 2.45GHz（Cortex-A73）+ 4×Kryo 280 Silver 1.9GHz（Cortex-A53）",
   "GPU": "Adreno 540（710MHz）",
   "内存支持": "LPDDR4X 1866MHz",
   "基带": "骁龙X16 LTE（外挂）",

   "GeekBench 6 单核": "427",
   "GeekBench 6 多核": "1,500",
   "3DMark WLE": "368",
   "发布日期": "2017-01",
   "说明": "NanoReview（GB6/3DMark）"
  }
 },
 // ========== 2021年以来主流移动SoC补录 第1批（旗舰） ==========
 {
  "id": "sd888plus",
  "name": "骁龙888+",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "455,978",
   "安兔兔 SoC GPU": "205,998",
   "制程": "三星 5nm（5LPE）",
   "CPU架构": "1×Cortex-X1 3.0GHz + 3×Cortex-A78 2.42GHz + 4×Cortex-A55 1.8GHz",
   "GPU": "Adreno 660（840MHz）",
   "内存支持": "LPDDR5 6400MT/s",
   "基带": "骁龙X60 5G",
   "发布日期": "2021-06",
   "说明": "2021-06-28发布；SOCPK未收录芯片级实测，仅安兔兔SoC均分（2026-10-30）参与方案C"
  }
 },
 {
  "id": "sd8g1",
  "name": "骁龙8 Gen 1",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "488,811",
   "安兔兔 SoC GPU": "231,428",
   "制程": "三星 4nm（4LPX）",
   "CPU架构": "1×Cortex-X2 3.0GHz + 3×Cortex-A710 2.5GHz + 4×Cortex-A510 1.8GHz",
   "GPU": "Adreno 730（818MHz）",
   "内存支持": "LPDDR5 6400MT/s",
   "基带": "骁龙X65 5G",
   "GeekBench 5 单核": "1,255",
   "GeekBench 5 多核": "3,830",
   "GeekBench 6 单核": "1,706",
   "GeekBench 6 多核": "4,061",
   "3DMark WLE": "2,613",
   "发布日期": "2021-11",
   "说明": "2021-11-30发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "sd8plusg1",
  "name": "骁龙8+ Gen 1",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "564,964",
   "安兔兔 SoC GPU": "266,287",
   "制程": "台积电 4nm（N4）",
   "CPU架构": "1×Cortex-X2 3.2GHz + 3×Cortex-A710 2.75GHz + 4×Cortex-A510 1.8GHz",
   "GPU": "Adreno 730（900MHz）",
   "内存支持": "LPDDR5 6400MT/s",
   "基带": "骁龙X65 5G",
   "GeekBench 5 单核": "1,343",
   "GeekBench 5 多核": "4,211",
   "GeekBench 6 单核": "1,852",
   "GeekBench 6 多核": "4,710",
   "3DMark WLE": "2,815",
   "发布日期": "2022-05",
   "说明": "2022-05-20发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "sd8sgen4",
  "name": "骁龙8s Gen 4",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "729,993",
   "安兔兔 SoC GPU": "793,467",
   "制程": "台积电 4nm",
   "CPU架构": "1×Cortex-X4 3.2GHz + 3×Cortex-A720 3.0GHz + 2×Cortex-A720 2.8GHz + 2×Cortex-A720 2.0GHz",
   "GPU": "Adreno 825",
   "NPU": "Hexagon NPU",
   "内存支持": "LPDDR5X 4800MHz（最高24GB）",
   "基带": "骁龙5G Modem-RF（下行4.2Gbps）",
   "发布日期": "2025-04",
   "说明": "SM8735，2025-04-02发布；无GB6/WLE芯片级实测，仅安兔兔SoC均分（2026-10-30）参与方案C"
  }
 },
 {
  "id": "sd8-elite-gen6",
  "name": "骁龙8 Elite Gen 6",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "1,067,700",
   "安兔兔 SoC GPU": "1,590,180",
   "制程": "台积电 2nm",
   "CPU架构": "2×Oryon Prime 最高5.01GHz + 3×Oryon Performance 4.03GHz + 3×Oryon Performance 3.74GHz",
   "GPU": "Adreno GPU（Adreno Neural Fusion，硬件光追）",
   "NPU": "Hexagon NPU",
   "内存支持": "LPDDR5X",
   "基带": "骁龙X105 5G",
   "发布日期": "2026-09",
   "说明": "2026-09-23与8 Elite Extreme Gen 6同场发布；官方未公布GB6/WLE芯片级成绩，仅安兔兔SoC均分（2026-10-30）参与方案C"
  }
 },
 {
  "id": "dimensity-9000",
  "name": "天玑9000",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "559,180",
   "安兔兔 SoC GPU": "200,724",
   "制程": "台积电 4nm（N4）",
   "CPU架构": "1×Cortex-X2 3.05GHz + 3×Cortex-A710 2.85GHz + 4×Cortex-A510 1.8GHz",
   "GPU": "Mali-G710 MC10（848MHz）",
   "NPU": "联发科 NPU 590",
   "内存支持": "LPDDR5X 7500MT/s",
   "基带": "联发科 M80 5G",
   "GeekBench 5 单核": "1,311",
   "GeekBench 5 多核": "4,509",
   "GeekBench 6 单核": "1,732",
   "GeekBench 6 多核": "4,657",
   "3DMark WLE": "2,360",
   "发布日期": "2021-12",
   "说明": "MT6983，2021-12-16发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "dimensity-9000-plus",
  "name": "天玑9000+",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "596,694",
   "安兔兔 SoC GPU": "197,233",
   "制程": "台积电 4nm（N4）",
   "CPU架构": "1×Cortex-X2 3.2GHz + 3×Cortex-A710 2.85GHz + 4×Cortex-A510 1.8GHz",
   "GPU": "Mali-G710 MC10",
   "NPU": "联发科 NPU 590",
   "内存支持": "LPDDR5X 7500MT/s",
   "基带": "联发科 M80 5G",
   "GeekBench 6 单核": "1,788",
   "GeekBench 6 多核": "4,825",
   "发布日期": "2022-06",
   "说明": "2022-06-22发布；SOCPK仅有GB6两项，缺GPU与GB5，故仅方案C可计分（安兔兔SoC均分，2026-10-30）"
  }
 },
 {
  "id": "dimensity-9200",
  "name": "天玑9200",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "594,463",
   "安兔兔 SoC GPU": "472,386",
   "制程": "台积电 4nm（N4P）",
   "CPU架构": "1×Cortex-X3 3.05GHz + 3×Cortex-A715 2.85GHz + 4×Cortex-A510 1.8GHz",
   "GPU": "Immortalis-G715 MC11（981MHz）",
   "NPU": "联发科 NPU 690",
   "内存支持": "LPDDR5X 8533MT/s",
   "基带": "联发科 5G Release-16",
   "GeekBench 5 单核": "1,420",
   "GeekBench 5 多核": "4,496",
   "GeekBench 6 单核": "1,905",
   "GeekBench 6 多核": "5,119",
   "3DMark WLE": "3,776",
   "发布日期": "2022-11",
   "说明": "MT6985，2022-11-08发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "dimensity-9200-plus",
  "name": "天玑9200+",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "619,264",
   "安兔兔 SoC GPU": "471,140",
   "制程": "台积电 4nm（N4P）",
   "CPU架构": "1×Cortex-X3 3.35GHz + 3×Cortex-A715 3.0GHz + 4×Cortex-A510 2.0GHz",
   "GPU": "Immortalis-G715 MC11",
   "NPU": "联发科 NPU 690",
   "内存支持": "LPDDR5X 8533MT/s",
   "基带": "联发科 5G Release-16（4CC-CA）",
   "GeekBench 5 单核": "1,439",
   "GeekBench 5 多核": "4,800",
   "GeekBench 6 单核": "1,889",
   "GeekBench 6 多核": "5,079",
   "3DMark WLE": "3,900",
   "发布日期": "2023-05",
   "说明": "2023-05-10发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "dimensity-9400",
  "name": "天玑9400",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "881,088",
   "安兔兔 SoC GPU": "914,166",
   "制程": "台积电 3nm（N3E）",
   "CPU架构": "1×Cortex-X925 3.62GHz + 3×Cortex-X4 3.3GHz + 4×Cortex-A720 2.4GHz（全大核）",
   "GPU": "Immortalis-G925 MC12（1612MHz）",
   "NPU": "联发科 NPU 890",
   "内存支持": "LPDDR5X 10667MT/s",
   "基带": "联发科 5G",
   "GeekBench 5 单核": "2,091",
   "GeekBench 5 多核": "8,503",
   "GeekBench 6 单核": "3,010",
   "GeekBench 6 多核": "9,317",
   "3DMark WLE": "7,130",
   "发布日期": "2024-10",
   "说明": "MT6991，2024-10-09发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 // ========== 2021年以来主流移动SoC补录 第2批（天玑中高端与中端、Exynos） ==========
 {
  "id": "dimensity-1100",
  "name": "天玑1100",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "378,961",
   "安兔兔 SoC GPU": "137,870",
   "制程": "台积电 6nm（N6）",
   "CPU架构": "4×Cortex-A78 2.6GHz + 4×Cortex-A55 2.0GHz",
   "GPU": "Mali-G77 MC9（836MHz）",
   "NPU": "联发科 APU 3.0",
   "内存支持": "LPDDR4X 4266MT/s",
   "基带": "联发科 5G",
   "GeekBench 5 单核": "863",
   "GeekBench 5 多核": "2,929",
   "发布日期": "2021-01",
   "说明": "MT6891，2021-01-20与天玑1200同场发布；SOCPK无GB6与WLE可核实数值，仅方案C可计分（安兔兔SoC均分，2026-10-30）"
  }
 },
 {
  "id": "dimensity-1200",
  "name": "天玑1200",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "394,300",
   "安兔兔 SoC GPU": "134,794",
   "制程": "台积电 6nm（N6）",
   "CPU架构": "1×Cortex-A78 3.0GHz + 3×Cortex-A78 2.6GHz + 4×Cortex-A55 2.0GHz",
   "GPU": "Mali-G77 MC9（886MHz）",
   "NPU": "联发科 APU 3.0",
   "内存支持": "LPDDR4X 4266MT/s",
   "基带": "联发科 5G",
   "GeekBench 5 单核": "847",
   "GeekBench 5 多核": "3,305",
   "GeekBench 6 单核": "1,105",
   "GeekBench 6 多核": "3,252",
   "3DMark WLE": "1,325",
   "发布日期": "2021-01",
   "说明": "MT6893，2021-01-20发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "dimensity-8000",
  "name": "天玑8000",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "304,126",
   "安兔兔 SoC GPU": "182,325",
   "制程": "台积电 5nm（N5）",
   "CPU架构": "4×Cortex-A78 2.75GHz + 4×Cortex-A55 2.0GHz",
   "GPU": "Mali-G610 MC6",
   "NPU": "联发科 APU 580",
   "内存支持": "LPDDR5 6400MT/s",
   "基带": "联发科 5G",
   "发布日期": "2022-03",
   "说明": "2022-03-01与天玑8100同场发布；SOCPK未收录该芯片级GB6/WLE，仅方案C可计分（安兔兔SoC均分，2026-10-30）"
  }
 },
 {
  "id": "dimensity-8100",
  "name": "天玑8100",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "413,235",
   "安兔兔 SoC GPU": "185,896",
   "制程": "台积电 5nm（N5）",
   "CPU架构": "4×Cortex-A78 2.85GHz + 4×Cortex-A55 2.0GHz",
   "GPU": "Mali-G610 MC6（860MHz）",
   "NPU": "联发科 APU 580",
   "内存支持": "LPDDR5 6400MT/s",
   "基带": "联发科 5G",
   "GeekBench 5 单核": "907",
   "GeekBench 5 多核": "3,820",
   "GeekBench 6 单核": "1,149",
   "GeekBench 6 多核": "3,721",
   "3DMark WLE": "1,587",
   "发布日期": "2022-03",
   "说明": "MT6895，2022-03-01发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "dimensity-8200",
  "name": "天玑8200",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "491,273",
   "安兔兔 SoC GPU": "157,385",
   "制程": "台积电 4nm（N4）",
   "CPU架构": "1×Cortex-A78 3.1GHz + 3×Cortex-A78 3.0GHz + 4×Cortex-A55 2.0GHz",
   "GPU": "Mali-G610 MC6（950MHz）",
   "NPU": "联发科 APU 580",
   "内存支持": "LPDDR5 6400MT/s",
   "基带": "联发科 5G",
   "GeekBench 5 单核": "1,055",
   "GeekBench 5 多核": "3,947",
   "GeekBench 6 单核": "1,248",
   "GeekBench 6 多核": "3,809",
   "3DMark WLE": "1,505",
   "发布日期": "2022-12",
   "说明": "MT6896，2022-12-08发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "dimensity-8300",
  "name": "天玑8300",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 4nm（N4P）",
   "CPU架构": "1×Cortex-A715 3.35GHz + 3×Cortex-A715 3.2GHz + 4×Cortex-A510 2.2GHz",
   "GPU": "Mali-G615 MC6（1400MHz）",
   "NPU": "联发科 APU 780",
   "内存支持": "LPDDR5X 8533MT/s",
   "基带": "联发科 5G",
   "GeekBench 5 单核": "1,189",
   "GeekBench 5 多核": "4,747",
   "GeekBench 6 单核": "1,587",
   "GeekBench 6 多核": "5,084",
   "3DMark WLE": "3,230",
   "发布日期": "2023-11",
   "说明": "MT6897，2023-11-21发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30）。安兔兔仅有8300-Ultra，未沿用其成绩。"
  }
 },
 {
  "id": "dimensity-8450",
  "name": "天玑8450",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "679,062",
   "安兔兔 SoC GPU": "642,877",
   "制程": "台积电 4nm",
   "CPU架构": "8×Cortex-A725（全大核）",
   "GPU": "Mali-G720 MC7",
   "发布日期": "",
   "说明": "联发科官网产品页：4nm、8×A725 全大核、Mali-G720 MC7；官网未标注发布年月，发布日期暂留空。SOCPK 未收录芯片级 GB6/GB5/WLE，仅方案C计分（安兔兔SoC均分，2026-10-30）"
  }
 },
 {
  "id": "dimensity-8550",
  "name": "天玑8550",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 4nm",
   "CPU架构": "1×Cortex-A725 3.4GHz + 3×Cortex-A725 3.2GHz + 4×Cortex-A725 2.2GHz（全大核）",
   "GPU": "Mali-G720 MC8",
   "内存支持": "LPDDR5X 9600Mbps + UFS 4.0",
   "发布日期": "2026-05",
   "说明": "联发科官网规格表及2026-05-15新品说明；SOCPK未收录芯片级GB6/WLE，安兔兔仅有8550 Super，未沿用其成绩，暂无可用评分方案。"
  }
 },
 {
  "id": "dimensity-810",
  "name": "天玑810",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 6nm（N6）",
   "CPU架构": "2×Cortex-A76 2.4GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G57 MC2（1068MHz）",
   "内存支持": "LPDDR4X 4266MT/s",
   "基带": "联发科 5G",
   "GeekBench 5 单核": "599",
   "GeekBench 5 多核": "1,801",
   "GeekBench 6 单核": "759",
   "GeekBench 6 多核": "1,943",
   "3DMark WLE": "369",
   "发布日期": "2021-08",
   "说明": "MT6833P，2021-08-11与天玑920同场发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30）；安兔兔榜未单列该型号，故无方案C"
  }
 },
 {
  "id": "dimensity-920",
  "name": "天玑920",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 6nm（N6）",
   "CPU架构": "2×Cortex-A78 2.5GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G68 MC4",
   "内存支持": "LPDDR5 6400MT/s",
   "基带": "联发科 5G",
   "GeekBench 5 单核": "742",
   "GeekBench 5 多核": "2,266",
   "GeekBench 6 单核": "911",
   "GeekBench 6 多核": "2,304",
   "3DMark WLE": "635",
   "发布日期": "2021-08",
   "说明": "MT6877T，2021-08-11发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30）；安兔兔榜未单列，无方案C"
  }
 },
 {
  "id": "dimensity-1080",
  "name": "天玑1080",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 6nm（N6）",
   "CPU架构": "2×Cortex-A78 2.6GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G68 MC4",
   "内存支持": "LPDDR5 6400MT/s",
   "基带": "联发科 5G",
   "GeekBench 5 单核": "840",
   "GeekBench 5 多核": "2,390",
   "GeekBench 6 单核": "967",
   "GeekBench 6 多核": "2,271",
   "3DMark WLE": "636",
   "发布日期": "2022-10",
   "说明": "MT6885，2022-10-11发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30）；安兔兔榜未单列，无方案C"
  }
 },
 {
  "id": "exynos-2100",
  "name": "Exynos 2100",
  "brand": "三星 Samsung",
  "specs": {
   "安兔兔 SoC CPU": "296,974",
   "安兔兔 SoC GPU": "188,341",
   "制程": "三星 5nm（5LPE）",
   "CPU架构": "1×Cortex-X1 2.9GHz + 3×Cortex-A78 2.8GHz + 4×Cortex-A55 2.2GHz",
   "GPU": "Mali-G78 MP14",
   "NPU": "三星 NPU（三核）",
   "内存支持": "LPDDR5",
   "基带": "三星 5G（集成）",
   "GeekBench 5 单核": "1,110",
   "GeekBench 5 多核": "3,714",
   "3DMark WLE": "1,770",
   "发布日期": "2021-01",
   "说明": "2021-01-Exynos 2100随Galaxy S21发布；极客湾SOCPK（GB5/WLE），安兔兔SoC均分（2026-10-30）；SOCPK无GB6，故方案A不可用"
  }
 },
 {
  "id": "exynos-2200",
  "name": "Exynos 2200",
  "brand": "三星 Samsung",
  "specs": {
   "安兔兔 SoC CPU": "420,123",
   "安兔兔 SoC GPU": "352,928",
   "制程": "三星 4nm（4LPE）",
   "CPU架构": "1×Cortex-X2 2.8GHz + 3×Cortex-A710 2.50GHz + 4×Cortex-A510 1.8GHz",
   "GPU": "Xclipse 920（AMD RDNA 2）",
   "NPU": "三星 NPU",
   "内存支持": "LPDDR5",
   "基带": "三星 5G（集成）",
   "GeekBench 5 单核": "1,177",
   "GeekBench 5 多核": "3,816",
   "3DMark WLE": "2,134",
   "发布日期": "2022-01",
   "说明": "2022-01-Exynos 2200发布；极客湾SOCPK（GB5/WLE），安兔兔SoC均分（2026-10-30）；SOCPK无GB6，方案A不可用"
  }
 },
 {
  "id": "exynos-2400",
  "name": "Exynos 2400",
  "brand": "三星 Samsung",
  "specs": {
   "安兔兔 SoC CPU": "559,029",
   "安兔兔 SoC GPU": "376,809",
   "制程": "三星 4nm（4LPP+，第三代4nm）",
   "CPU架构": "1×Cortex-X4 3.21GHz + 2×Cortex-A720 2.90GHz + 3×Cortex-A720 2.60GHz + 4×Cortex-A520 1.95GHz（十核）",
   "GPU": "Xclipse 940（AMD RDNA 3，硬件光追）",
   "NPU": "三星 NPU",
   "内存支持": "LPDDR5X",
   "基带": "三星 5G（集成）",
   "GeekBench 5 单核": "1,634",
   "GeekBench 5 多核": "6,417",
   "GeekBench 6 单核": "2,230",
   "GeekBench 6 多核": "7,170",
   "3DMark WLE": "4,384",
   "发布日期": "2023-10",
   "说明": "2023-10-06 正式发布（早于 Galaxy S24 上市）；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "exynos-2500",
  "name": "Exynos 2500",
  "brand": "三星 Samsung",
  "specs": {
   "安兔兔 SoC CPU": "687,559",
   "安兔兔 SoC GPU": "600,850",
   "制程": "三星 3nm（GAA）",
   "CPU架构": "1×Cortex-X925 3.3GHz + 2×Cortex-A725 2.74GHz + 5×Cortex-A725 2.36GHz + 2×Cortex-A520 1.8GHz（十核）",
   "GPU": "Xclipse 950（AMD RDNA 3，硬件光追）",
   "NPU": "三星 NPU（24K MAC，2-GNPU + 2-SNPU）+ DSP",
   "内存支持": "LPDDR5X + UFS 4.0",
   "发布日期": "2025-07",
   "说明": "官网规格：3nm GAA、1+7+2 十核、Xclipse 950；2025-07 随 Galaxy Z Flip7 发布。SOCPK 未收录芯片级 GB6/GB5/WLE，仅方案C计分（安兔兔SoC均分，2026-10-30）"
  }
 },
 {
  "id": "exynos-1480",
  "name": "Exynos 1480",
  "brand": "三星 Samsung",
  "specs": {
   "安兔兔 SoC CPU": "361,997",
   "安兔兔 SoC GPU": "221,241",
   "制程": "三星 4nm（4LPP+）",
   "CPU架构": "4×Cortex-A78 2.75GHz + 4×Cortex-A55 2.0GHz",
   "GPU": "Xclipse 530（AMD RDNA）",
   "NPU": "三星 NPU",
   "内存支持": "LPDDR4X / LPDDR5",
   "发布日期": "2024-03",
   "说明": "2024-03-28 高通正式公布，随 Galaxy A55 上市；SOCPK未收录芯片级GB6/GB5/WLE，仅方案C计分（安兔兔SoC均分，2026-10-30）"
  }
 },
 // ========== 2021年以来主流移动SoC补录 第3批（高通 7系/6系/4系） ==========
 {
  "id": "sd778g",
  "name": "骁龙778G",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "台积电 6nm（N6）",
   "CPU架构": "1×Cortex-A78 2.4GHz + 3×Cortex-A78 2.2GHz + 4×Cortex-A55 1.9GHz",
   "GPU": "Adreno 642L（550MHz）",
   "内存支持": "LPDDR5 / LPDDR4X",
   "基带": "骁龙X53 5G",
   "GeekBench 5 单核": "787",
   "GeekBench 5 多核": "2,976",
   "GeekBench 6 单核": "1,000",
   "GeekBench 6 多核": "2,897",
   "3DMark WLE": "692",
   "发布日期": "2021-05",
   "说明": "2021-05-19发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30）；安兔兔榜未单列该型号，无方案C"
  }
 },
 {
  "id": "sd778gplus",
  "name": "骁龙778G+",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "346,400",
   "安兔兔 SoC GPU": "105,023",
   "制程": "台积电 6nm（N6）",
   "CPU架构": "1×Cortex-A78 2.5GHz + 3×Cortex-A78 2.2GHz + 4×Cortex-A55 1.9GHz",
   "GPU": "Adreno 642L",
   "内存支持": "LPDDR5 / LPDDR4X",
   "发布日期": "2021-11",
   "说明": "778G 提频版；SOCPK 未收录该型号芯片级 GB5/GB6/WLE，仅方案C计分（安兔兔SoC均分，2026-10-30）"
  }
 },
 {
  "id": "sd780g",
  "name": "骁龙780G",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "359,944",
   "安兔兔 SoC GPU": "103,874",
   "制程": "三星 5nm（5LPE）",
   "CPU架构": "1×Cortex-A78 2.4GHz + 3×Cortex-A78 2.2GHz + 4×Cortex-A55 1.9GHz",
   "GPU": "Adreno 642（490MHz）",
   "内存支持": "LPDDR4X",
   "基带": "骁龙X53 5G",
   "GeekBench 5 单核": "819",
   "GeekBench 5 多核": "2,923",
   "GeekBench 6 单核": "1,058",
   "GeekBench 6 多核": "2,938",
   "3DMark WLE": "842",
   "发布日期": "2021-03",
   "说明": "2021-03-25发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "sd782g",
  "name": "骁龙782G",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "337,605",
   "安兔兔 SoC GPU": "111,471",
   "制程": "台积电 6nm（N6）",
   "CPU架构": "1×Cortex-A78 2.7GHz + 3×Cortex-A78 2.4GHz + 4×Cortex-A55 1.8GHz",
   "GPU": "Adreno 642L（719MHz）",
   "内存支持": "LPDDR5 / LPDDR4X",
   "GeekBench 5 单核": "872",
   "GeekBench 5 多核": "2,824",
   "GeekBench 6 单核": "1,118",
   "GeekBench 6 多核": "2,906",
   "3DMark WLE": "806",
   "发布日期": "2022-11",
   "说明": "778G+ 再提频版，2022-11-23 发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "sd7g1",
  "name": "骁龙7 Gen 1",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "354,429",
   "安兔兔 SoC GPU": "107,997",
   "制程": "三星 4nm（4LPX）",
   "CPU架构": "1×Cortex-A710 2.52GHz + 3×Cortex-A710 2.36GHz + 4×Cortex-A510 1.8GHz",
   "GPU": "Adreno 644（442MHz）",
   "内存支持": "LPDDR5",
   "基带": "骁龙X62 5G",
   "GeekBench 5 单核": "798",
   "GeekBench 5 多核": "2,709",
   "GeekBench 6 单核": "946",
   "GeekBench 6 多核": "2,744",
   "3DMark WLE": "829",
   "发布日期": "2022-05",
   "说明": "2022-05-20 与骁龙8+ Gen 1 同场发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "sd7plusg2",
  "name": "骁龙7+ Gen 2",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "549,589",
   "安兔兔 SoC GPU": "233,264",
   "制程": "台积电 4nm（N4）",
   "CPU架构": "1×Cortex-X2 2.91GHz + 3×Cortex-A710 2.49GHz + 4×Cortex-A510 1.8GHz",
   "GPU": "Adreno 725（580MHz）",
   "NPU": "Hexagon NPU",
   "内存支持": "LPDDR5",
   "基带": "骁龙X62 5G",
   "GeekBench 5 单核": "1,231",
   "GeekBench 5 多核": "4,082",
   "GeekBench 6 单核": "1,672",
   "GeekBench 6 多核": "4,476",
   "3DMark WLE": "1,977",
   "发布日期": "2023-03",
   "说明": "2023-03-17发布，7系首次用 X2 超大核；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "sd7sgen2",
  "name": "骁龙7s Gen 2",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "三星 4nm（4LPX）",
   "CPU架构": "4×Cortex-A78 2.4GHz + 4×Cortex-A55 1.95GHz",
   "GPU": "Adreno 710（940MHz）",
   "内存支持": "LPDDR5 / LPDDR4X",
   "GeekBench 6 单核": "1,039",
   "GeekBench 6 多核": "2,916",
   "3DMark WLE": "798",
   "发布日期": "2023-09",
   "说明": "2023-09 发布；极客湾SOCPK（GB6/WLE，采集2026-10-30），SOCPK 无 GB5 故方案B不可用；安兔兔榜未单列，无方案C"
  }
 },
 {
  "id": "sd7g3",
  "name": "骁龙7 Gen 3",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "408,149",
   "安兔兔 SoC GPU": "151,288",
   "制程": "台积电 4nm",
   "CPU架构": "1×Cortex-A715 2.63GHz + 3×Cortex-A715 2.4GHz + 4×Cortex-A510 1.8GHz",
   "GPU": "Adreno 720",
   "内存支持": "LPDDR5 / LPDDR4X",
   "发布日期": "2023-11",
   "说明": "2023-11-17发布；SOCPK 未收录该型号芯片级 GB5/GB6/WLE，仅方案C计分（安兔兔SoC均分，2026-10-30）"
  }
 },
 {
  "id": "sd7plusg3",
  "name": "骁龙7+ Gen 3",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "568,831",
   "安兔兔 SoC GPU": "425,728",
   "制程": "台积电 4nm（N4P）",
   "CPU架构": "1×Cortex-X4 2.8GHz + 4×Cortex-A720 2.6GHz + 3×Cortex-A520 1.9GHz",
   "GPU": "Adreno 732（950MHz）",
   "NPU": "Hexagon NPU",
   "内存支持": "LPDDR5X",
   "基带": "骁龙X70 5G",
   "GeekBench 5 单核": "1,409",
   "GeekBench 5 多核": "4,821",
   "GeekBench 6 单核": "1,906",
   "GeekBench 6 多核": "5,330",
   "3DMark WLE": "3,091",
   "发布日期": "2024-03",
   "说明": "2024-03-21发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "sd7sgen3",
  "name": "骁龙7s Gen 3",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "431,422",
   "安兔兔 SoC GPU": "101,769",
   "制程": "台积电 4nm",
   "CPU架构": "1×Cortex-A720 2.5GHz + 3×Cortex-A720 2.4GHz + 4×Cortex-A520 1.8GHz",
   "GPU": "Adreno 810",
   "内存支持": "LPDDR5 / LPDDR4X",
   "发布日期": "2024-08",
   "说明": "2024-08-20发布；SOCPK 未收录芯片级 GB6/WLE，仅方案C计分（安兔兔SoC均分，2026-10-30）"
  }
 },
 {
  "id": "sd680",
  "name": "骁龙680",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "台积电 6nm（N6）",
   "CPU架构": "4×Kryo 265（Cortex-A73）2.4GHz + 4×Kryo 265（Cortex-A53）1.9GHz",
   "GPU": "Adreno 610（1114MHz）",
   "内存支持": "LPDDR4X",
   "基带": "骁龙X11 LTE",
   "GeekBench 5 单核": "382",
   "GeekBench 5 多核": "1,654",
   "GeekBench 6 单核": "417",
   "GeekBench 6 多核": "1,454",
   "3DMark WLE": "122",
   "发布日期": "2021-10",
   "说明": "2021-10 发布，4G 入门平台；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30）；安兔兔榜未单列，无方案C"
  }
 },
 {
  "id": "sd695",
  "name": "骁龙695",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "台积电 6nm（N6）",
   "CPU架构": "2×Cortex-A78 2.2GHz + 6×Cortex-A55 1.8GHz",
   "GPU": "Adreno 619（840MHz）",
   "内存支持": "LPDDR4X",
   "基带": "骁龙X51 5G",
   "GeekBench 5 单核": "694",
   "GeekBench 5 多核": "2,104",
   "GeekBench 6 单核": "910",
   "GeekBench 6 多核": "2,149",
   "3DMark WLE": "361",
   "发布日期": "2021-10",
   "说明": "2021-10 发布，荣耀X30 首发；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30）"
  }
 },
 {
  "id": "sd6g1",
  "name": "骁龙6 Gen 1",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "三星 4nm（4LPX）",
   "CPU架构": "4×Cortex-A78 2.2GHz + 4×Cortex-A55 1.8GHz",
   "GPU": "Adreno 710（676MHz）",
   "内存支持": "LPDDR5",
   "基带": "骁龙X62 5G",
   "GeekBench 5 单核": "719",
   "GeekBench 5 多核": "2,782",
   "GeekBench 6 单核": "930",
   "GeekBench 6 多核": "2,751",
   "3DMark WLE": "613",
   "发布日期": "2022-09",
   "说明": "2022-09 发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30）；安兔兔榜未单列，无方案C"
  }
 },
 {
  "id": "sd6g4",
  "name": "骁龙6 Gen 4",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "台积电 4nm",
   "CPU架构": "1×Cortex-A720 2.3GHz + 3×Cortex-A720 2.2GHz + 4×Cortex-A520 1.8GHz",
   "GPU": "Adreno 810",
   "内存支持": "LPDDR5 / LPDDR4X",
   "发布日期": "2025-02",
   "说明": "2025-02 发布（真我Neo7x 首发）；SOCPK 未收录芯片级跑分，安兔兔榜未单列该型号，暂无可用评分方案"
  }
 },
 {
  "id": "sd6g5",
  "name": "骁龙6 Gen 5",
  "brand": "高通 Qualcomm",
  "specs": {
   "安兔兔 SoC CPU": "373,770",
   "安兔兔 SoC GPU": "119,105",
   "制程": "台积电 4nm",
   "CPU架构": "1×Cortex-A720 + 3×Cortex-A720 + 4×Cortex-A520（八核）",
   "GPU": "Adreno 810",
   "内存支持": "LPDDR5X",
   "发布日期": "2026-05",
   "说明": "SM6850，2026-05-07 与骁龙4 Gen 5 同场发布；SOCPK未收录芯片级跑分，暂以安兔兔榜同条目均分参与方案C（2026-10-30）"
  }
 },
 {
  "id": "sd6sgen3",
  "name": "骁龙6s Gen 3",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "台积电 6nm",
   "CPU架构": "Kryo CPU，最高 2.3GHz（八核）",
   "GPU": "Adreno GPU",
   "内存支持": "LPDDR4X",
   "发布日期": "2024-06",
   "说明": "2024-06-07 高通公布；SOCPK 无芯片级 GB5/GB6/WLE，安兔兔榜未单列，暂无任何可用评分方案"
  }
 },
 {
  "id": "sd6sgen4",
  "name": "骁龙6s Gen 4",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "台积电 4nm",
   "CPU架构": "Kryo CPU（八核）",
   "GPU": "Adreno GPU",
   "内存支持": "LPDDR4X / LPDDR5",
   "发布日期": "2025-10",
   "说明": "2025-10-24 发布，支持 FHD+ 144Hz；SOCPK 无芯片级跑分，安兔兔榜未单列，暂无可用评分方案"
  }
 },
 {
  "id": "sd480",
  "name": "骁龙480",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "三星 8nm（8LPP）",
   "CPU架构": "2×Cortex-A76 2.0GHz + 6×Cortex-A55 1.8GHz",
   "GPU": "Adreno 619（650MHz）",
   "内存支持": "LPDDR4X",
   "基带": "骁龙X51 5G",
   "GeekBench 5 单核": "523",
   "GeekBench 5 多核": "1,690",
   "发布日期": "2021-01",
   "说明": "2021-01 发布；SOCPK 仅有 GB5 两项，缺 GB6 与 WLE，故任何 A/B/C 方案均不可计分，评分显示不可用"
  }
 },
 {
  "id": "sd480plus",
  "name": "骁龙480+",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "三星 8nm（8LPP）",
   "CPU架构": "2×Cortex-A76 2.2GHz + 6×Cortex-A55 1.8GHz",
   "GPU": "Adreno 619",
   "内存支持": "LPDDR4X",
   "发布日期": "2021-10",
   "说明": "480 提频版；SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 {
  "id": "sd4g1",
  "name": "骁龙4 Gen 1",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "台积电 6nm（N6）",
   "CPU架构": "2×Cortex-A78 2.0GHz + 6×Cortex-A55 1.8GHz",
   "GPU": "Adreno 619（700MHz）",
   "内存支持": "LPDDR4X",
   "基带": "骁龙X51 5G",
   "GeekBench 5 单核": "648",
   "GeekBench 5 多核": "2,043",
   "GeekBench 6 单核": "844",
   "GeekBench 6 多核": "2,087",
   "3DMark WLE": "311",
   "发布日期": "2022-09",
   "说明": "2022-09 发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30）；安兔兔榜未单列，无方案C"
  }
 },
 {
  "id": "sd4g2",
  "name": "骁龙4 Gen 2",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "三星 4nm（4LPX）",
   "CPU架构": "2×Cortex-A78 2.2GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Adreno 613（955MHz）",
   "内存支持": "LPDDR5X / LPDDR4X",
   "基带": "骁龙X61 5G",
   "GeekBench 5 单核": "719",
   "GeekBench 5 多核": "2,209",
   "GeekBench 6 单核": "927",
   "GeekBench 6 多核": "2,244",
   "3DMark WLE": "157",
   "发布日期": "2023-06",
   "说明": "2023-06 发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30）；安兔兔榜未单列，无方案C"
  }
 },
 {
  "id": "sd4sgen2",
  "name": "骁龙4s Gen 2",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "台积电 4nm",
   "CPU架构": "Kryo CPU，最高 2.0GHz（八核）",
   "GPU": "Adreno GPU",
   "内存支持": "LPDDR4X",
   "基带": "骁龙5G Modem-RF（下行最高1Gbps）",
   "发布日期": "2024-07",
   "说明": "2024-07-30 发布，面向入门 5G；SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 {
  "id": "sd4g4",
  "name": "骁龙4 Gen 4",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "台积电 4nm",
   "CPU架构": "Kryo CPU（八核）",
   "GPU": "Adreno GPU",
   "内存支持": "LPDDR4X / LPDDR5",
   "发布日期": "2025-12",
   "说明": "2025-12 发布（与骁龙6s 4G Gen 2 同场）；SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 {
  "id": "sd4g5",
  "name": "骁龙4 Gen 5",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "台积电 4nm",
   "CPU架构": "Kryo CPU，最高 2.4GHz（八核）",
   "GPU": "Adreno GPU",
   "内存支持": "LPDDR5X",
   "基带": "骁龙5G Modem-RF（下行2.8Gbps）",
   "发布日期": "2026-05",
   "说明": "SM4850，2026-05-07 与骁龙6 Gen 5 同场发布；SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 // ========== 2021年以来主流移动SoC补录 第4批（华为麒麟、Google Tensor、紫光展锐、A17 Pro） ==========
 {
  "id": "kirin-9000s",
  "name": "麒麟9000S",
  "brand": "华为 Huawei",
  "specs": {
   "安兔兔 SoC CPU": "385,167",
   "安兔兔 SoC GPU": "157,654",
   "制程": "中芯国际 N+2（等效7nm）",
   "CPU架构": "1×泰山大核 2.62GHz + 3×泰山中核 2.15GHz + 4×Cortex-A510 1.53GHz（8核12线程）",
   "GPU": "Maleoon 910",
   "NPU": "达芬奇 NPU",
   "内存支持": "LPDDR5",
   "基带": "巴龙 5G",
   "GeekBench 5 单核": "1,005",
   "GeekBench 5 多核": "4,019",
   "GeekBench 6 单核": "1,299",
   "GeekBench 6 多核": "4,121",
   "3DMark WLE": "1,539",
   "发布日期": "2023-08",
   "说明": "2023-08 随 Mate 60 系列面世；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "kirin-9010",
  "name": "麒麟9010",
  "brand": "华为 Huawei",
  "specs": {
   "安兔兔 SoC CPU": "419,285",
   "安兔兔 SoC GPU": "154,292",
   "制程": "中芯国际 N+2（等效7nm）",
   "CPU架构": "1×泰山大核 2.30GHz + 3×泰山中核 2.18GHz + 4×Cortex-A510 1.55GHz",
   "GPU": "Maleoon 910",
   "NPU": "达芬奇 NPU",
   "内存支持": "LPDDR5",
   "基带": "巴龙 5G",
   "GeekBench 5 单核": "1,097",
   "GeekBench 5 多核": "4,370",
   "GeekBench 6 单核": "1,458",
   "GeekBench 6 多核": "4,699",
   "3DMark WLE": "1,578",
   "发布日期": "2024-04",
   "说明": "2024-04 随 Pura 70 系列面世；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分。已收录的9010S为该平台衍生型号，本记录为基础版"
  }
 },
 {
  "id": "kirin-9020",
  "name": "麒麟9020",
  "brand": "华为 Huawei",
  "specs": {
   "安兔兔 SoC CPU": "455,084",
   "安兔兔 SoC GPU": "225,334",
   "制程": "中芯国际 N+2（等效7nm）",
   "CPU架构": "1×泰山大核 2.50GHz + 3×泰山中核 2.15GHz + 4×自研小核 1.60GHz",
   "GPU": "Maleoon 920",
   "NPU": "达芬奇 NPU",
   "内存支持": "LPDDR5X",
   "基带": "巴龙 5G",
   "GeekBench 5 单核": "1,217",
   "GeekBench 5 多核": "4,926",
   "GeekBench 6 单核": "1,616",
   "GeekBench 6 多核": "5,314",
   "3DMark WLE": "1,894",
   "发布日期": "2024-11",
   "说明": "2024-11 随 Mate 70 系列面世；华为官网明确 Pura 80 Pro/Pro+/Ultra 与 Mate XTs 使用麒麟9020；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "kirin-9030",
  "name": "麒麟9030",
  "brand": "华为 Huawei",
  "specs": {
   "制程": "中芯国际 N+2（等效7nm）",
   "CPU架构": "尚未公开披露",
   "GPU": "Maleoon 系列（尚未公开具体型号）",
   "NPU": "达芬奇 NPU",
   "发布日期": "2026-08",
   "说明": "华为 Mate 80 Pro 参数页标注 12GB RAM 版本搭载麒麟9030；官方未公开频率/GPU 型号，SOCPK 与安兔兔榜均未收录，暂无可用评分方案"
  }
 },
 {
  "id": "kirin-9030-pro",
  "name": "麒麟9030 Pro",
  "brand": "华为 Huawei",
  "specs": {
   "制程": "中芯国际 N+2（等效7nm）",
   "CPU架构": "尚未公开披露",
   "GPU": "Maleoon 系列（尚未公开具体型号）",
   "NPU": "达芬奇 NPU",
   "发布日期": "2026-08",
   "说明": "华为 Mate 80 Pro 参数页标注 16GB RAM 版本搭载麒麟9030 Pro；官方未公开频率/GPU 型号，暂无可用评分方案"
  }
 },
 {
  "id": "kirin-9050",
  "name": "麒麟9050",
  "brand": "华为 Huawei",
  "specs": {
   "制程": "尚未公开披露",
   "CPU架构": "尚未公开披露",
   "GPU": "尚未公开披露",
   "NPU": "达芬奇 NPU",
   "发布日期": "2026-09",
   "说明": "华为 Mate 90 Pro Max 参数页标注 麒麟9050 Pro / 麒麟9050 两档；官方未公开制程与频率，SOCPK 与安兔兔榜均未收录，暂无可用评分方案"
  }
 },
 {
  "id": "kirin-9050-pro",
  "name": "麒麟9050 Pro",
  "brand": "华为 Huawei",
  "specs": {
   "制程": "尚未公开披露",
   "CPU架构": "尚未公开披露",
   "GPU": "尚未公开披露",
   "NPU": "达芬奇 NPU",
   "发布日期": "2026-09",
   "说明": "华为 Mate 90 Pro Max 参数页标注 Mate 90 Pro Max 与典藏版搭载麒麟9050 Pro；官方未公开制程与频率，暂无可用评分方案"
  }
 },
 {
  "id": "kirin-8000",
  "name": "麒麟8000",
  "brand": "华为 Huawei",
  "specs": {
   "安兔兔 SoC CPU": "270,123",
   "安兔兔 SoC GPU": "110,583",
   "制程": "中芯国际 N+2（等效7nm）",
   "CPU架构": "8核（官方未细分大小核频率）",
   "GPU": "Maleoon 系列",
   "NPU": "达芬奇 NPU",
   "内存支持": "LPDDR4X / LPDDR5",
   "GeekBench 5 单核": "746",
   "GeekBench 5 多核": "2,676",
   "GeekBench 6 单核": "984",
   "GeekBench 6 多核": "2,882",
   "3DMark WLE": "1,025",
   "发布日期": "2023-12",
   "说明": "2023-12 随 nova 12 系列面世；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分。CPU 具体频率官方未公开，未虚构"
  }
 },
 {
  "id": "kirin-8020",
  "name": "麒麟8020",
  "brand": "华为 Huawei",
  "specs": {
   "制程": "尚未公开披露",
   "CPU架构": "尚未公开披露",
   "GPU": "尚未公开披露",
   "NPU": "达芬奇 NPU",
   "发布日期": "2026-09",
   "说明": "华为畅享 100 Pro Max 产品页写明「麒麟8020 系列芯片」；官方未公开频率与制程，SOCPK 与安兔兔榜均未收录，暂无可用评分方案"
  }
 },
 {
  "id": "tensor",
  "name": "Google Tensor",
  "brand": "谷歌 Google",
  "specs": {
   "安兔兔 SoC CPU": "371,525",
   "安兔兔 SoC GPU": "140,340",
   "制程": "三星 5nm（5LPE）",
   "CPU架构": "2×Cortex-X1 2.80GHz + 2×Cortex-A76 2.25GHz + 4×Cortex-A55 1.80GHz",
   "GPU": "Mali-G78 MP20",
   "NPU": "Google Tensor 处理单元（TPU）",
   "内存支持": "LPDDR5",
   "基带": "Exynos 5123（外挂）",
   "GeekBench 5 单核": "1,053",
   "GeekBench 5 多核": "2,902",
   "GeekBench 6 单核": "1,425",
   "GeekBench 6 多核": "3,167",
   "3DMark WLE": "2,088",
   "发布日期": "2021-10",
   "说明": "第一代 Tensor，2021-10 随 Pixel 6 面世；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分（榜上名「Tensor」）"
  }
 },
 {
  "id": "tensor-g2",
  "name": "Tensor G2",
  "brand": "谷歌 Google",
  "specs": {
   "安兔兔 SoC CPU": "380,887",
   "安兔兔 SoC GPU": "263,843",
   "制程": "三星 5nm（5LPE）",
   "CPU架构": "2×Cortex-X1 2.86GHz + 2×Cortex-A78 2.35GHz + 4×Cortex-A55 1.80GHz",
   "GPU": "Mali-G710 MP7",
   "NPU": "Google Tensor 处理单元（TPU）",
   "内存支持": "LPDDR5",
   "发布日期": "2022-10",
   "说明": "2022-10 随 Pixel 7 面世；SOCPK 未收录该型号芯片级 GB5/GB6/WLE，仅方案C计分（安兔兔SoC均分，2026-10-30）"
  }
 },
 {
  "id": "tensor-g3",
  "name": "Tensor G3",
  "brand": "谷歌 Google",
  "specs": {
   "安兔兔 SoC CPU": "441,836",
   "安兔兔 SoC GPU": "358,996",
   "制程": "三星 4nm（4LPP）",
   "CPU架构": "1×Cortex-X3 2.91GHz + 4×Cortex-A715 2.37GHz + 4×Cortex-A510 1.70GHz（9核）",
   "GPU": "Mali-G715 MP7",
   "NPU": "Google Tensor 处理单元（TPU）",
   "内存支持": "LPDDR5X",
   "GeekBench 5 单核": "1,283",
   "GeekBench 5 多核": "3,748",
   "GeekBench 6 单核": "1,767",
   "GeekBench 6 多核": "4,668",
   "3DMark WLE": "2,455",
   "发布日期": "2023-10",
   "说明": "2023-10 随 Pixel 8 面世；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "tensor-g4",
  "name": "Tensor G4",
  "brand": "谷歌 Google",
  "specs": {
   "安兔兔 SoC CPU": "521,122",
   "安兔兔 SoC GPU": "404,393",
   "制程": "三星 4nm（4LPP+）",
   "CPU架构": "1×Cortex-X4 3.1GHz + 3×Cortex-A720 2.6GHz + 4×Cortex-A510 1.92GHz",
   "GPU": "Mali-G715 MP7",
   "NPU": "Google Tensor 处理单元（TPU）",
   "内存支持": "LPDDR5X",
   "GeekBench 5 单核": "1,370",
   "GeekBench 5 多核": "3,762",
   "GeekBench 6 单核": "1,958",
   "GeekBench 6 多核": "4,638",
   "3DMark WLE": "2,576",
   "发布日期": "2024-08",
   "说明": "2024-08 随 Pixel 9 面世；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30），安兔兔SoC均分"
  }
 },
 {
  "id": "tensor-g5",
  "name": "Tensor G5",
  "brand": "谷歌 Google",
  "specs": {
   "制程": "台积电 3nm（N3E）",
   "CPU架构": "1×Cortex-X4 3.78GHz + 5×Cortex-A725 3.05GHz + 2×Cortex-A520 2.25GHz",
   "GPU": "PowerVR DXT-48-1536",
   "NPU": "Google Tensor 处理单元（TPU）",
   "内存支持": "LPDDR5X",
   "发布日期": "2025-08",
   "说明": "2025-08 随 Pixel 10 面世，首款由台积电代工的 Tensor；SOCPK 与安兔兔榜均未收录芯片级分数，暂无可用评分方案"
  }
 },
 {
  "id": "tensor-g6",
  "name": "Tensor G6",
  "brand": "谷歌 Google",
  "specs": {
   "制程": "台积电 3nm（N3P）",
   "CPU架构": "1×Arm C1-Ultra 4.11GHz + 4×Arm C1-Pro 3.38GHz + 2×Arm C1-Pro 2.65GHz",
   "GPU": "PowerVR CXTP-48-1536",
   "NPU": "Google Tensor 处理单元（TPU）",
   "内存支持": "LPDDR5X",
   "发布日期": "2026-08",
   "说明": "2026-08 随 Pixel 11 系列面世；SOCPK 与安兔兔榜均未收录芯片级分数，暂无可用评分方案"
  }
 },
 {
  "id": "unisoc-t606",
  "name": "紫光展锐 T606",
  "brand": "紫光展锐 UNISOC",
  "specs": {
   "制程": "台积电 12nm（N12）",
   "CPU架构": "2×Cortex-A75 1.60GHz + 6×Cortex-A55 1.60GHz",
   "GPU": "Mali-G57 MC1",
   "内存支持": "LPDDR4X",
   "GeekBench 5 单核": "315",
   "GeekBench 5 多核": "1,220",
   "发布日期": "2021-05",
   "说明": "2021-05 发布，4G 入门平台；SOCPK 仅有 GB5 两项且缺 WLE，故 A/B/C 均不可计分，评分显示不可用"
  }
 },
 {
  "id": "unisoc-t616",
  "name": "紫光展锐 T616",
  "brand": "紫光展锐 UNISOC",
  "specs": {
   "制程": "台积电 12nm（N12）",
   "CPU架构": "2×Cortex-A75 2.00GHz + 6×Cortex-A55 1.80GHz",
   "GPU": "Mali-G57 MC1",
   "内存支持": "LPDDR4X",
   "GeekBench 5 单核": "374",
   "GeekBench 5 多核": "1,391",
   "发布日期": "2021-09",
   "说明": "2021-09 发布；SOCPK 仅有 GB5 两项且缺 WLE，评分显示不可用"
  }
 },
 {
  "id": "unisoc-t760",
  "name": "紫光展锐 T760",
  "brand": "紫光展锐 UNISOC",
  "specs": {
   "制程": "台积电 6nm（N6）",
   "CPU架构": "4×Cortex-A76 2.20GHz + 4×Cortex-A55 2.00GHz",
   "GPU": "Mali-G57 MP4",
   "内存支持": "LPDDR4X",
   "GeekBench 5 单核": "552",
   "GeekBench 5 多核": "2,168",
   "3DMark WLE": "448",
   "发布日期": "2021-12",
   "说明": "2021-12 发布；极客湾SOCPK（GB5/WLE，采集2026-10-30），无 GB6 故方案A不可用"
  }
 },
 {
  "id": "unisoc-t765",
  "name": "紫光展锐 T765",
  "brand": "紫光展锐 UNISOC",
  "specs": {
   "制程": "台积电 6nm（N6）",
   "CPU架构": "2×Cortex-A76 2.30GHz + 6×Cortex-A55 2.10GHz",
   "GPU": "Mali-G57 MC2",
   "内存支持": "LPDDR4X",
   "GeekBench 5 单核": "545",
   "GeekBench 5 多核": "1,763",
   "GeekBench 6 单核": "741",
   "GeekBench 6 多核": "1,973",
   "3DMark WLE": "307",
   "发布日期": "2024-01",
   "说明": "2024-01 发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30）"
  }
 },
 {
  "id": "unisoc-t820",
  "name": "紫光展锐 T820",
  "brand": "紫光展锐 UNISOC",
  "specs": {
   "制程": "台积电 6nm（N6）",
   "CPU架构": "1×Cortex-A76 2.70GHz + 3×Cortex-A76 2.30GHz + 4×Cortex-A55 2.10GHz",
   "GPU": "Mali-G57 MC4",
   "内存支持": "LPDDR4X",
   "GeekBench 5 单核": "656",
   "GeekBench 5 多核": "2,366",
   "3DMark WLE": "574",
   "发布日期": "2022-06",
   "说明": "2022-06 发布，展锐当时最高端 5G 平台；极客湾SOCPK（GB5/WLE，采集2026-10-30），无 GB6 故方案A不可用"
  }
 },
 {
  "id": "unisoc-t7300",
  "name": "紫光展锐 T7300",
  "brand": "紫光展锐 UNISOC",
  "specs": {
   "制程": "6nm",
   "CPU架构": "2×Cortex-A78 2.2GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G57 MC2 950MHz",
   "发布日期": "2025-07",
   "说明": "展锐官网产品页及2025-07-21发布稿；SOCPK与安兔兔SoC榜均未收录独立分项，暂无可用评分方案。"
  }
 },
 {
  "id": "unisoc-t8300",
  "name": "紫光展锐 T8300",
  "brand": "紫光展锐 UNISOC",
  "specs": {
   "制程": "6nm",
   "CPU架构": "2×Cortex-A78 2.2GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G57 MC2 950MHz",
   "发布日期": "2025-03",
   "说明": "展锐官网T8300产品页及2025-03-13发布资料；SOCPK与安兔兔SoC榜均未收录独立分项，暂无可用评分方案。"
  }
 },
 {
  "id": "unisoc-t9300",
  "name": "紫光展锐 T9300",
  "brand": "紫光展锐 UNISOC",
  "specs": {
   "制程": "6nm",
   "CPU架构": "2×Cortex-A78 2.4GHz + 6×Cortex-A55 2.2GHz",
   "GPU": "Mali-G57 MC2 1.1GHz",
   "发布日期": "",
   "说明": "展锐官网T9300产品页列出制程及CPU/GPU规格；首次发布年月未确认，暂留空；暂无可用评分方案。"
  }
 },
 {
  "id": "a17-pro",
  "name": "A17 Pro",
  "brand": "苹果 Apple",
  "specs": {
   "制程": "台积电 3nm（N3B）",
   "CPU架构": "2×性能核 3.78GHz + 4×能效核 2.11GHz（6核）",
   "GPU": "6核 GPU（硬件光追）",
   "NPU": "16核神经网络引擎",
   "内存支持": "LPDDR5",
   "GeekBench 5 单核": "2,162",
   "GeekBench 5 多核": "6,342",
   "GeekBench 6 单核": "2,999",
   "GeekBench 6 多核": "7,903",
   "3DMark WLE": "4,345",
   "发布日期": "2023-09",
   "说明": "2023-09 随 iPhone 15 Pro 系列发布；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30）；安兔兔榜未收录 Apple 芯片，无方案C"
  }
 },
 // ========== 2021年以来主流移动SoC补录 第5批（天玑中端与入门、Helio、Exynos 中端、展锐补录） ==========
 {
  "id": "dimensity-1300",
  "name": "天玑1300",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "366,328",
   "安兔兔 SoC GPU": "139,148",
   "制程": "台积电 6nm（N6）",
   "CPU架构": "1×Cortex-A78 3.0GHz + 3×Cortex-A78 2.6GHz + 4×Cortex-A55 2.0GHz",
   "GPU": "Mali-G77 MC9",
   "NPU": "联发科 APU 3.0",
   "内存支持": "LPDDR4X",
   "发布日期": "2022-03",
   "说明": "2022-03 发布，天玑1200 的影像/显示强化版；SOCPK 未收录芯片级 GB5/GB6/WLE，仅方案C计分（安兔兔SoC均分，2026-10-30）"
  }
 },
 {
  "id": "dimensity-900",
  "name": "天玑900",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 6nm（N6）",
   "CPU架构": "2×Cortex-A78 2.4GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G68 MC4",
   "内存支持": "LPDDR4X / LPDDR5",
   "发布日期": "2021-05",
   "说明": "2021-05 发布；SOCPK 与安兔兔榜均未单列该型号，暂无可用评分方案"
  }
 },
 {
  "id": "dimensity-930",
  "name": "天玑930",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 6nm（N6）",
   "CPU架构": "2×Cortex-A78 2.4GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G68 MC4",
   "内存支持": "LPDDR5",
   "发布日期": "2022-05",
   "说明": "2022-05 发布，天玑920 的存储规格升级版；SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 {
  "id": "dimensity-1050",
  "name": "天玑1050",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 6nm（N6）",
   "CPU架构": "2×Cortex-A78 2.5GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G77 MC9",
   "内存支持": "LPDDR4X / LPDDR5",
   "发布日期": "2022-05",
   "说明": "2022-05 发布，首款支持毫米波的联发科中端平台；SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 {
  "id": "dimensity-7025",
  "name": "天玑7025",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 6nm",
   "CPU架构": "2×Cortex-A78 2.5GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "IMG BXM-8-256",
   "内存支持": "LPDDR5 / LPDDR4X + UFS 3.1",
   "发布日期": "2024-09",
   "说明": "官网规格：Cortex-A78 2.5GHz + A55 2.0GHz、IMG BXM-8-256；SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 {
  "id": "dimensity-7100",
  "name": "天玑7100",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 6nm",
   "CPU架构": "4×Cortex-A78 2.4GHz + 4×Cortex-A55 2.0GHz",
   "GPU": "Mali-G610 MC2",
   "内存支持": "LPDDR5 5500Mbps / LPDDR4X 4266Mbps + UFS 3.1",
   "发布日期": "",
   "说明": "官网规格表：4×A78 2.4GHz + 4×A55、Mali-G610 MC2；原2023-10缺少发布依据，待核实；暂无可用评分方案。"
  }
 },
 {
  "id": "dimensity-7200",
  "name": "天玑7200",
  "brand": "联发科 MediaTek",
  "specs": {
   "安兔兔 SoC CPU": "389,401",
   "安兔兔 SoC GPU": "109,868",
   "制程": "台积电 4nm（N4）",
   "CPU架构": "2×Cortex-A715 2.8GHz + 6×Cortex-A510 2.0GHz",
   "GPU": "Mali-G610 MC4",
   "内存支持": "LPDDR5 6400Mbps / LPDDR4X + UFS 3.1",
   "发布日期": "2023-02",
   "说明": "2023-02 发布；极客湾SOCPK 仅有 GB5/GB6（无 WLE），安兔兔SoC均分（2026-10-30）；因缺 GPU 项，A/B 不可用，仅方案C计分"
  }
 },
 {
  "id": "dimensity-7300",
  "name": "天玑7300",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 4nm",
   "CPU架构": "4×Cortex-A78 2.5GHz + 4×Cortex-A55 2.0GHz",
   "GPU": "Mali-G615 MC2",
   "内存支持": "LPDDR5 6400Mbps / LPDDR4X + UFS 3.1",
   "发布日期": "2024-06",
   "说明": "官网规格表：4×A78 2.5GHz + 4×A55、Mali-G615 MC2；SOCPK 与安兔兔榜均未单列（安兔兔仅有「天玑7300 Energy」变体，未混用），暂无可用评分方案"
  }
 },
 {
  "id": "dimensity-7350",
  "name": "天玑7350",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 4nm",
   "CPU架构": "2×Cortex-A715 3.0GHz + 6×Cortex-A510",
   "GPU": "Mali-G610 MC4",
   "内存支持": "LPDDR5 6400Mbps / LPDDR4X + UFS 3.1",
   "发布日期": "2024-07",
   "说明": "官网规格表：2×A715 3.0GHz + 6×A510、Mali-G610 MC4；SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 {
  "id": "dimensity-7450",
  "name": "天玑7450",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 4nm",
   "CPU架构": "4×Cortex-A78 2.6GHz + 4×Cortex-A55",
   "GPU": "Mali-G615 MC2",
   "内存支持": "LPDDR5 6400Mbps / LPDDR4X + UFS 2.2 / 3.1",
   "发布日期": "2026-05",
   "说明": "联发科2026-05-15新品说明及官网规格表；SOCPK与安兔兔榜均未单列，暂无可用评分方案。"
  }
 },
 {
  "id": "dimensity-6100-plus",
  "name": "天玑6100+",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 6nm",
   "CPU架构": "2×Cortex-A76 2.2GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G57 MC2",
   "内存支持": "LPDDR4X 2133MHz + UFS 2.2",
   "发布日期": "2023-09",
   "说明": "官网规格表：2×A76 2.2GHz + 6×A55、Mali-G57 MC2、LPDDR4X；SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 {
  "id": "dimensity-6300",
  "name": "天玑6300",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 6nm",
   "CPU架构": "2×Cortex-A76 2.4GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G57 MC2",
   "内存支持": "LPDDR4X 2133MHz + UFS 2.2",
   "发布日期": "2024-04",
   "说明": "官网规格表：2×A76 2.4GHz + 6×A55、Mali-G57 MC2；SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 {
  "id": "dimensity-6360",
  "name": "天玑6360",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 6nm",
   "CPU架构": "2×Cortex-A76 2.4GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G57 MC2",
   "内存支持": "LPDDR4X 2133MHz + UFS 2.2",
   "发布日期": "2026-05",
   "说明": "联发科2026-05-15新品说明；与天玑6300规格接近，未直接沿用其跑分，暂无可用评分方案。"
  }
 },
 {
  "id": "dimensity-6400",
  "name": "天玑6400",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 6nm",
   "CPU架构": "2×Cortex-A76 2.5GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G57 MC2",
   "内存支持": "LPDDR4X 2133MHz + UFS 2.2",
   "发布日期": "2025-02",
   "说明": "联发科2025-02-25发布稿及官网规格表；SOCPK与安兔兔榜均未单列，暂无可用评分方案。"
  }
 },
 {
  "id": "dimensity-6500",
  "name": "天玑6500",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 6nm",
   "CPU架构": "2×Cortex-A76 2.6GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G57 MC2（最高1.1GHz）",
   "内存支持": "LPDDR4X 2133MHz + UFS 2.2",
   "发布日期": "2026-05",
   "说明": "联发科2026-05-15新品说明及官网规格表；SOCPK与安兔兔榜均未单列，暂无可用评分方案。"
  }
 },
 {
  "id": "helio-g88",
  "name": "Helio G88",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 12nm",
   "CPU架构": "2×Cortex-A75 2.0GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G52 MC2",
   "内存支持": "LPDDR4X 1800MHz（最大8GB）",
   "发布日期": "2021-06",
   "说明": "官网规格：A75 + A55 八核、最高2GHz、LPDDR4X；4G 平台。SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 {
  "id": "helio-g91",
  "name": "Helio G91",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 12nm",
   "CPU架构": "2×Cortex-A75 2.0GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G52 MC2",
   "内存支持": "LPDDR4X 1800MHz（最大8GB）",
   "发布日期": "2024-06",
   "说明": "官网规格：A75 + A55 八核、最高2GHz；4G 平台。SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 {
  "id": "helio-g92",
  "name": "Helio G92",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 12nm",
   "CPU架构": "2×Cortex-A75 2.0GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G52 MC2",
   "内存支持": "LPDDR4X 1800MHz（最大8GB）",
   "发布日期": "2024-12",
   "说明": "联发科2024-12-30官方介绍：A75 2.0GHz + A55八核；4G平台，暂无可用评分方案。"
  }
 },
 {
  "id": "helio-g96",
  "name": "Helio G96",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 12nm",
   "CPU架构": "2×Cortex-A76 2.05GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G57 MC2",
   "内存支持": "LPDDR4X",
   "发布日期": "2021-07",
   "说明": "官网规格：A76 + A55 八核、最高2.05GHz、Mali-G57 MC2；4G 平台。SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 {
  "id": "helio-g99",
  "name": "Helio G99",
  "brand": "联发科 MediaTek",
  "specs": {
   "制程": "台积电 6nm（N6）",
   "CPU架构": "2×Cortex-A76 2.2GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G57 MC2",
   "内存支持": "LPDDR4X 4266Mbps + UFS 2.2",
   "GeekBench 5 单核": "553",
   "GeekBench 5 多核": "1,906",
   "GeekBench 6 单核": "732",
   "GeekBench 6 多核": "1,984",
   "3DMark WLE": "347",
   "发布日期": "2022-05",
   "说明": "官网规格：2×A76 2.2GHz + 6×A55、Mali-G57 MC2；极客湾SOCPK（GB5/GB6/WLE，采集2026-10-30）；安兔兔榜未单列，无方案C"
  }
 },
 {
  "id": "exynos-1280",
  "name": "Exynos 1280",
  "brand": "三星 Samsung",
  "specs": {
   "制程": "三星 5nm（5LPE）",
   "CPU架构": "2×Cortex-A78 2.4GHz + 6×Cortex-A55 2.0GHz",
   "GPU": "Mali-G68（Valhall）",
   "内存支持": "LPDDR4X",
   "发布日期": "2022-03",
   "说明": "官网规格：2×A78 2.4GHz + 6×A55 2.0GHz、Mali-G68（Valhall）；SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 {
  "id": "exynos-1330",
  "name": "Exynos 1330",
  "brand": "三星 Samsung",
  "specs": {
   "制程": "三星 5nm",
   "CPU架构": "2×Cortex-A78 + 6×Cortex-A55",
   "GPU": "Mali-G68",
   "内存支持": "LPDDR4X / LPDDR5",
   "发布日期": "2023-02",
   "说明": "三星官网产品页已有该型号条目，但正文未给出可核实的频率与 GPU 规格细节；SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 {
  "id": "exynos-1380",
  "name": "Exynos 1380",
  "brand": "三星 Samsung",
  "specs": {
   "制程": "三星 5nm",
   "CPU架构": "4×Cortex-A78 2.4GHz + 4×Cortex-A55 2.0GHz",
   "GPU": "Mali-G68（5核 950MHz）",
   "内存支持": "LPDDR4X / LPDDR5",
   "发布日期": "2023-02",
   "说明": "官网规格：4×A78 + 4×A55、Mali-G68 五核 950MHz；SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 {
  "id": "exynos-1580",
  "name": "Exynos 1580",
  "brand": "三星 Samsung",
  "specs": {
   "制程": "三星 4nm",
   "CPU架构": "八核（三星官网未公开细分频率）",
   "GPU": "Xclipse 540（第三代自研 GPU）",
   "内存支持": "LPDDR5",
   "发布日期": "2024-10",
   "说明": "官网规格：Xclipse 540 第三世代自研 GPU；CPU 频率未公开，未虚构。SOCPK 与安兔兔榜均未单列，暂无可用评分方案"
  }
 },
 {
  "id": "exynos-1680",
  "name": "Exynos 1680",
  "brand": "三星 Samsung",
  "specs": {
   "制程": "三星 4nm",
   "CPU架构": "1×Cortex-A720 2.9GHz + 4×Cortex-A720 2.6GHz + 3×Cortex-A520 1.95GHz",
   "GPU": "Samsung Xclipse 550",
   "发布日期": "2026-02",
   "说明": "三星半导体官网移动处理器目录已公开制程、CPU与GPU规格；SOCPK与安兔兔榜未收录，暂无可用评分方案。"
  }
 },
 {
  "id": "exynos-2400e",
  "name": "Exynos 2400e",
  "brand": "三星 Samsung",
  "specs": {
   "制程": "三星 4nm（4LPP+）",
   "CPU架构": "1×Cortex-X4 + 2×Cortex-A720 + 3×Cortex-A720 + 4×Cortex-A520（十核，2400 降频版）",
   "GPU": "Xclipse 940（AMD RDNA 3，硬件光追）",
   "内存支持": "LPDDR5X",
   "发布日期": "2024-09",
   "说明": "Exynos 2400 的降频衍生版，首用于 Galaxy S24 FE；三星 S24 FE 参数。SOCPK 未单列 2400e、安兔兔榜仅收录「Exynos 2400」，**未把 2400 的数值当作 2400e 实测**，故不录跑分、评分不可用"
  }
 },
 {
  "id": "exynos-2600",
  "name": "Exynos 2600",
  "brand": "三星 Samsung",
  "specs": {
   "制程": "三星 2nm GAA",
   "CPU架构": "1×Arm C1-Ultra 3.8GHz + 3×Arm C1-Pro 3.25GHz + 6×Arm C1-Pro 2.75GHz",
   "GPU": "Samsung Xclipse 960",
   "发布日期": "2026-01",
   "说明": "三星半导体官网移动处理器目录已公开制程、CPU与GPU规格；SOCPK与安兔兔榜未收录，暂无可用评分方案。"
  }
 },
 {
  "id": "unisoc-t612",
  "name": "紫光展锐 T612",
  "brand": "紫光展锐 UNISOC",
  "specs": {
   "制程": "台积电 12nm",
   "CPU架构": "8核（展锐官网未公开细分频率）",
   "GPU": "Mali-G57 系列",
   "发布日期": "2021-12",
   "说明": "展锐官网 T612 产品页未给出可核实的频率与 GPU 型号；SOCPK 与安兔兔榜均未收录，暂无可用评分方案"
  }
 },
 {
  "id": "unisoc-t620",
  "name": "紫光展锐 T620",
  "brand": "紫光展锐 UNISOC",
  "specs": {
   "制程": "台积电 12nm",
   "CPU架构": "8核（展锐官网未公开细分频率）",
   "GPU": "Mali-G57 系列",
   "发布日期": "",
   "说明": "展锐官网T620产品页未给出可核实的首发年月；原年份区间不符合发布日期字段格式，暂留空；暂无可用评分方案。"
  }
 },
 {
  "id": "sd685",
  "name": "骁龙685",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "台积电 6nm",
   "CPU架构": "8×Kryo 265（4×Cortex-A73 + 4×Cortex-A53），最高 2.8GHz",
   "GPU": "Adreno 610",
   "NPU": "Hexagon 686",
   "内存支持": "LPDDR4X",
   "基带": "骁龙X11 LTE（4G 平台）",
   "发布日期": "2021-10",
   "说明": "高通官网规格：Kryo 265 最高2.8GHz、Adreno 610、Hexagon 686、X11 LTE；SOCPK 与安兔兔榜均未单列该型号，暂无可用评分方案"
  }
 }
];
