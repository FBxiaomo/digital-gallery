// 处理器数据库
// 手机通过 processor_id 关联处理器
// 添加新手机时，确保对应的处理器已存在于此文件

var processors =
[
 {
  "id": "sd8g2",
  "name": "骁龙8 Gen 2",
  "brand": "高通 Qualcomm",
  "specs": {
   "制程": "台积电 4nm",
   "CPU架构": "1×Cortex-X3 3.2GHz + 2×A715 2.8GHz + 2×A710 2.8GHz + 3×A510 2.0GHz",
   "GPU": "Adreno 740",
   "内存支持": "LPDDR5X 4200MHz",
   "基带": "骁龙X70 5G",
   "安兔兔 V10": "1,563,190",
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
   "制程": "台积电 4nm",
   "CPU架构": "1×Cortex-X4 3.3GHz + 3×A720 3.15GHz + 2×A720 2.96GHz + 2×A520 2.27GHz",
   "GPU": "Adreno 750",
   "内存支持": "LPDDR5X 4800MHz",
   "基带": "骁龙X75 5G",
   "安兔兔 V10": "~2,050,000",
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
   "制程": "台积电 3nm（N3E）",
   "CPU架构": "2×Oryon 超大核 4.32GHz + 6×Oryon 大核 3.53GHz（全大核）",
   "GPU": "Adreno 830（硬件光追）",
   "NPU": "Hexagon NPU",
   "内存支持": "LPDDR5X",
   "基带": "骁龙X80 5G",
   "安兔兔 V10": "~2,800,000",
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
   "制程": "台积电 3nm（N3E）",
   "CPU架构": "2×Oryon 超大核 4.6GHz + 6×Oryon 大核 3.5GHz（全大核）",
   "GPU": "Adreno 830（硬件光追）",
   "NPU": "Hexagon NPU",
   "内存支持": "LPDDR5X",
   "基带": "骁龙X80 5G",
   "安兔兔 V10": "~3,000,000",
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
   "制程": "台积电 7nm",
   "CPU架构": "1×Cortex-A77 2.84GHz + 3×A77 2.4GHz + 4×A55 1.8GHz",
   "GPU": "Adreno 650",
   "内存支持": "LPDDR5 2750MHz",
   "基带": "骁龙X55 5G（外挂）",
   "安兔兔 V10": "~800,000（V10等效）",
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
   "制程": "台积电 7nm",
   "CPU架构": "1×Cortex-A77 3.2GHz + 3×A77 2.4GHz + 4×A55 1.8GHz",
   "GPU": "Adreno 650",
   "内存支持": "LPDDR5 2750MHz",
   "基带": "骁龙X55 5G（外挂）",
   "安兔兔 V10": "~850,000（V10等效）",
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
   "制程": "三星 7nm",
   "CPU架构": "1×Cortex-A76 2.4GHz + 1×A76 2.2GHz + 6×A55 1.8GHz",
   "GPU": "Adreno 620",
   "内存支持": "LPDDR4X 2133MHz",
   "基带": "骁龙X52 5G（集成）",
   "安兔兔 V10": "~450,000（V10等效）",
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
   "制程": "台积电 4nm",
   "CPU架构": "8×Cortex-A725 全大核 3.25GHz",
   "GPU": "Mali-G720 MC6",
   "NPU": "联发科 NPU 780",
   "内存支持": "LPDDR5X 4266MHz",
   "基带": "联发科 M80 5G",
   "安兔兔 V10": "~1,600,000",
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
   "制程": "台积电 4nm（N4P）",
   "CPU架构": "4×Cortex-X4 3.25GHz + 4×Cortex-A720 2.0GHz（全大核）",
   "GPU": "Immortalis-G720 MC12（硬件光追）",
   "NPU": "联发科 APU 790",
   "内存支持": "LPDDR5T 9600MHz",
   "基带": "联发科 M80 5G",
   "安兔兔 V10": "2,207,222",
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
   "制程": "台积电 3nm（N3P）",
   "CPU架构": "1×C1-Ultra 4.21GHz + 3×C1-Premium 3.50GHz + 4×C1-Pro 2.70GHz（全大核）",
   "GPU": "Mali-G1 Ultra MC12（硬件光追）",
   "NPU": "联发科 NPU 990",
   "内存支持": "LPDDR5X 10667Mbps",
   "基带": "联发科 Release 17 5G",
   "安兔兔 V10": "~3,300,000（V11等效）",
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
   "安兔兔 V10": "~1,100,000（V10等效）",
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
   "安兔兔 V10": "~1,400,000（V10等效）",
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
   "安兔兔 V10": "~970,000",
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
   "安兔兔 V10": "1,280,000 - 1,320,000",
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
   "制程": "台积电 4nm",
   "CPU架构": "1×Cortex-A725 3.4GHz + 3×Cortex-A725 3.2GHz + 4×Cortex-A725 2.2GHz",
   "GPU": "Mali-G720 MC8（支持硬件光追）",
   "NPU": "NPU 880",
   "内存支持": "LPDDR5X 9600Mbps",
   "基带": "5G",
   "安兔兔 V10": "约160万",
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
   "制程": "台积电 3nm（第二代N3E）",
   "CPU架构": "1×Cortex-X925 3.73GHz + 3×Cortex-X4 3.3GHz + 4×Cortex-A720 2.4GHz",
   "GPU": "Immortalis-G925 MC12（12核，支持硬件光追）",
   "NPU": "旗舰级NPU",
   "内存支持": "LPDDR5X 9600Mbps",
   "基带": "5G R17，四载波聚合，下行7Gbps",
   "安兔兔 V10": "约314万",
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
   "制程": "三星 4nm",
   "CPU架构": "4×Cortex-A78 2.4GHz + 4×Cortex-A55 1.8GHz",
   "GPU": "Adreno 710",
   "内存支持": "LPDDR4X",
   "基带": "骁龙X62 5G",
   "安兔兔 V10": "约70万",
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
   "安兔兔 V10": "约89万",
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
   "制程": "台积电 4nm",
   "CPU架构": "4×Cortex-A78 2.6GHz + 4×Cortex-A55 2.0GHz",
   "GPU": "Mali-G615 MC2",
   "内存支持": "LPDDR4X + UFS2.2",
   "基带": "5G",
   "安兔兔 V10": "约69万",
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
   "制程": "台积电 3nm",
   "CPU架构": "Oryon架构 3.8GHz",
   "GPU": "Adreno 829",
   "NPU": "Hexagon",
   "内存支持": "LPDDR5X 4800MHz",
   "基带": "骁龙X80 5G",
   "安兔兔 V10": "—",
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
   "制程": "台积电 4nm",
   "CPU架构": "1×Cortex-X4 3.0GHz + 4×Cortex-A720 2.8GHz + 3×Cortex-A520 2.0GHz",
   "GPU": "Adreno 735",
   "NPU": "Hexagon NPU",
   "内存支持": "LPDDR5X 4800MHz",
   "基带": "骁龙X70 5G",
   "安兔兔 V10": "~167万",
   "GeekBench 6 单核": "2,016",
   "GeekBench 6 多核": "5,408",
   "3DMark WLE": "3,251",
   "发布日期": "2026-03",
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
   "安兔兔 V10": "~110万",
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
   "制程": "三星 10nm",
   "CPU架构": "4×Kryo 280 Gold 2.45GHz（Cortex-A73）+ 4×Kryo 280 Silver 1.9GHz（Cortex-A53）",
   "GPU": "Adreno 540（710MHz）",
   "内存支持": "LPDDR4X 1866MHz",
   "基带": "骁龙X16 LTE（外挂）",
   "安兔兔 V10": "~320,000（V10等效）",
   "GeekBench 6 单核": "427",
   "GeekBench 6 多核": "1,500",
   "3DMark WLE": "368",
   "发布日期": "2017-01",
   "说明": "NanoReview（GB6/3DMark）"
  }
 }
];
