// 韓國旅遊行程數據 (由 010101.xlsx 自動解析並整合)
const itineraryData = [
  {
    "dayIndex": 1,
    "dateInfo": "6/21 日",
    "title": "啟程！抵達釜山與大邱",
    "items": [
      {
        "time": "02:40",
        "expense": "",
        "activity": "02:40 TPE >>> 06:10 PUS (桃園機場 ✈ 釜山金海機場)",
        "content": "搭乘紅眼航班出發",
        "notes": ""
      },
      {
        "time": "07:00",
        "expense": "",
        "activity": "金海機場 > centum city站 (地鐵1hr)",
        "content": "08:30集合",
        "notes": ""
      },
      {
        "time": "08:00",
        "expense": "",
        "activity": "24小時嫩豆腐鍋완뚝순두부 (早餐)",
        "content": "https://map.naver.com/p/entry/place/2014924086",
        "notes": ""
      },
      {
        "time": "09:00",
        "expense": "",
        "activity": "SPALAND 汗蒸幕 (3-4HR)",
        "content": "https://naver.me/5Q372Aqt\nkkday 門票",
        "notes": ""
      },
      {
        "time": "12:30",
        "expense": "",
        "activity": "新世界百貨B1美食街(1-1.5HR) (午餐)",
        "content": "",
        "notes": ""
      },
      {
        "time": "14:00",
        "expense": "",
        "activity": "直達公車(181,1001,100)",
        "content": "前往海東龍宮寺",
        "notes": ""
      },
      {
        "time": "15:00",
        "expense": "",
        "activity": "海東龍宮寺 (1-1.5HR)",
        "content": "https://naver.me/58NdWaSm",
        "notes": ""
      },
      {
        "time": "16:30",
        "expense": "",
        "activity": "計程車 > 松亭站 (10min)",
        "content": "",
        "notes": ""
      },
      {
        "time": "16:45",
        "expense": "",
        "activity": "松亭站 > 釜山院洞站 (30min)",
        "content": "",
        "notes": ""
      },
      {
        "time": "17:30",
        "expense": "",
        "activity": "石板韓牛 (晚餐)",
        "content": "https://naver.me/GOPeH9Eb",
        "notes": ""
      },
      {
        "time": "19:30",
        "expense": "",
        "activity": "> 釜山車站 (1hr)",
        "content": "搭乘地鐵或計程車前往釜山站",
        "notes": ""
      },
      {
        "time": "20:30",
        "expense": "",
        "activity": "釜山站東橫inn WOW Pass開通",
        "content": "https://naver.me/xCBQBNe0",
        "notes": ""
      },
      {
        "time": "21:00",
        "expense": "",
        "activity": "釜山車站21:19 > 東大邱車站22:06",
        "content": "SRT374 (47min)",
        "notes": ""
      },
      {
        "time": "22:10",
        "expense": "",
        "activity": "東大邱車站 > 飯店 (20min)",
        "content": "",
        "notes": ""
      },
      {
        "time": "22:40",
        "expense": "",
        "activity": "慶北大學瞻星館學生宿舍 入住",
        "content": "https://map.naver.com/p/entry/place/13010731",
        "notes": ""
      }
    ]
  },
  {
    "dayIndex": 2,
    "dateInfo": "6/22 一",
    "title": "慶州古都一日遊",
    "items": [
      {
        "time": "10:30",
        "expense": "",
        "activity": "慶北大學集合逛逛",
        "content": "",
        "notes": ""
      },
      {
        "time": "11:30",
        "expense": "",
        "activity": "慶北大學global plaza吃學餐 (午餐)",
        "content": "",
        "notes": ""
      },
      {
        "time": "13:00",
        "expense": "",
        "activity": "慶北大學 > 東大邱站",
        "content": "",
        "notes": ""
      },
      {
        "time": "13:30",
        "expense": "",
        "activity": "東大邱站13:49 > 慶州站14:06",
        "content": "KTX027",
        "notes": ""
      },
      {
        "time": "15:00",
        "expense": "",
        "activity": "慶州歷史遺址區探訪",
        "content": "古都散步行程",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "瞻星台",
        "content": "",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "大陵苑 ",
        "content": "",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "皇理團路 (文創 咖啡廳)",
        "content": "文創 咖啡廳",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "月精橋",
        "content": "",
        "notes": ""
      },
      {
        "time": "18:30",
        "expense": "",
        "activity": "Cheese 餐廳 (晚餐)",
        "content": "https://naver.me/FmGpFKx3",
        "notes": "營業時間：11:00-19:30"
      },
      {
        "time": "20:40",
        "expense": "",
        "activity": "> 慶州站 (45min)",
        "content": "",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "慶州站21:35 > 東大邱站21:51",
        "content": "KTX066",
        "notes": "車票可現場買"
      },
      {
        "time": "",
        "expense": "",
        "activity": "學校北門 31冰淇淋",
        "content": "https://naver.me/FBeInpDj",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "返回慶北大學瞻星館學生宿舍 住宿",
        "content": "https://map.naver.com/p/entry/place/13010731",
        "notes": ""
      }
    ]
  },
  {
    "dayIndex": 3,
    "dateInfo": "6/23 二",
    "title": "大邱當地美食與壽城池",
    "items": [
      {
        "time": "12:30",
        "expense": "",
        "activity": "撤宿舍 / 整理行李",
        "content": "",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "三德美豬肉湯飯 (午餐)",
        "content": "https://naver.me/GZZdSD0G",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "西門市場 逛街",
        "content": "品嚐辣炒年糕、扁餃子",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "東城路商圈逛街",
        "content": "",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "晚餐隨機安排",
        "content": "",
        "notes": ""
      },
      {
        "time": "19:00",
        "expense": "",
        "activity": "壽城池散步",
        "content": "https://naver.me/GeUR216e",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "開到半夜的景色咖啡廳",
        "content": "https://naver.me/F74VCHRa",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "返回慶北大學瞻星館學生宿舍 住宿",
        "content": "https://map.naver.com/p/entry/place/13010731",
        "notes": ""
      }
    ]
  },
  {
    "dayIndex": 4,
    "dateInfo": "6/24 三",
    "title": "KTX奔向首爾 ➔ 東大門設計之夜",
    "items": [
      {
        "time": "11:00",
        "expense": "",
        "activity": "河景咖啡廳 Melt",
        "content": "https://naver.me/xY47Oic0",
        "notes": ""
      },
      {
        "time": "13:15",
        "expense": "43500.0",
        "activity": "東大邱站 13:15 > 首爾站 14:59 (KTX-CheongRyong 032)",
        "content": "7車 11A、11B (正向)",
        "notes": "一人票價 43,500 ₩ (已出票)"
      },
      {
        "time": "15:00",
        "expense": "",
        "activity": "韓貞仙優格水果大福 (甜點)",
        "content": "https://naver.me/F3TtK4GA",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "首爾車站 > 鍾路五街",
        "content": "地鐵一號線 往市政廳方向",
        "notes": ""
      },
      {
        "time": "16:00",
        "expense": "",
        "activity": "入住：阿博特斯泰東大門 (Abbottstay)",
        "content": "放行李",
        "notes": ""
      },
      {
        "time": "16:30",
        "expense": "",
        "activity": "韓式蒸餃 (點心)",
        "content": "https://naver.me/IgJC0bG9",
        "notes": "營業時間：10:00-23:30"
      },
      {
        "time": "",
        "expense": "",
        "activity": "東大門綜合市場 逛街",
        "content": "https://naver.me/xUw1rx2F",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "東大門設計廣場 (DDP)",
        "content": "https://naver.me/Fio7MOlX",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "清溪川散步",
        "content": "https://naver.me/FK5viboB",
        "notes": ""
      },
      {
        "time": "20:00",
        "expense": "",
        "activity": "孫家一隻雞 (晚餐)",
        "content": "https://naver.me/5FmSpbrI",
        "notes": "營業時間：12:00-20:25"
      },
      {
        "time": "21:30",
        "expense": "",
        "activity": "優格世界冰淇淋",
        "content": "https://naver.me/F3TnuSG3",
        "notes": "營業時間：10:40-00:30"
      },
      {
        "time": "",
        "expense": "6680.0",
        "activity": "阿博特斯泰東大門 (Abbottstay)",
        "content": "https://naver.me/FbOvHIOu",
        "notes": "住宿費用已結清"
      }
    ]
  },
  {
    "dayIndex": 5,
    "dateInfo": "6/25 四",
    "title": "安國站文青 ➔ 景福宮與洛山城牆",
    "items": [
      {
        "time": "",
        "expense": "",
        "activity": "出發 > 安國站",
        "content": "",
        "notes": ""
      },
      {
        "time": "09:00",
        "expense": "",
        "activity": "ARTIST BAKERY (早餐)",
        "content": "https://naver.me/5UEc0uzr",
        "notes": "營業時間：07:00-20:00"
      },
      {
        "time": "",
        "expense": "",
        "activity": "DOTORI GARDEN (橡果花園)",
        "content": "https://naver.me/GtURVWqh",
        "notes": "營業時間：08:00-23:00"
      },
      {
        "time": "10:00",
        "expense": "",
        "activity": "韓屋北村散策 (2hr)",
        "content": "",
        "notes": ""
      },
      {
        "time": "12:00",
        "expense": "",
        "activity": "安岩豬肉湯飯 (午餐)",
        "content": "https://naver.me/5ne4qiI4",
        "notes": "營業時間：11:30-20:10 (可用 Tableing App 候位登記)"
      },
      {
        "time": "",
        "expense": "",
        "activity": "備選：黃生家刀削麵",
        "content": "https://naver.me/5Rh0K9Fx",
        "notes": "營業時間：11:00-20:30"
      },
      {
        "time": "14:00",
        "expense": "",
        "activity": "景福宮歷史散步 (2hr)",
        "content": "",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "前往 > 漢城大學站",
        "content": "",
        "notes": ""
      },
      {
        "time": "17:00",
        "expense": "",
        "activity": "洛山城牆步道看夕陽 (1hr)",
        "content": "https://naver.me/5l7kOk5K",
        "notes": "沿城牆走下坡直接到東大門站"
      },
      {
        "time": "18:30",
        "expense": "",
        "activity": "鯖魚蕎麥麵 (晚餐)",
        "content": "https://naver.me/GPdotp80",
        "notes": ""
      },
      {
        "time": "19:30",
        "expense": "",
        "activity": "現代奧萊特購物中心",
        "content": "https://naver.me/xDJuVEOI",
        "notes": "營業時間：10:00-21:00 (可視體力彈性決定是否前往)"
      },
      {
        "time": "",
        "expense": "",
        "activity": "返回阿博特斯泰東大門住宿",
        "content": "",
        "notes": ""
      }
    ]
  },
  {
    "dayIndex": 6,
    "dateInfo": "6/26 五",
    "title": "水原華城古城巡禮",
    "items": [
      {
        "time": "",
        "expense": "",
        "activity": "出發 > 水原站 > 轉公車 (總車程約 1hr 40min)",
        "content": "",
        "notes": ""
      },
      {
        "time": "10:30",
        "expense": "",
        "activity": "美食選擇一：鐵板炸醬麵",
        "content": "https://naver.me/5WOQlRxl",
        "notes": "兩家美食擇一品嚐"
      },
      {
        "time": "",
        "expense": "",
        "activity": "美食選擇二：寬烏龍",
        "content": "https://naver.me/5YFcfRQl",
        "notes": ""
      },
      {
        "time": "12:00",
        "expense": "",
        "activity": "水原華城世界文化遺產",
        "content": "https://naver.me/FPn5j3kI",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "布魯塞爾炸薯條",
        "content": "https://naver.me/5chuHkVL",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "水原工房街 散步",
        "content": "https://naver.me/5apDqczw",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "慢速陽光 (法式吐司咖啡廳)",
        "content": "https://naver.me/GFB1lcib",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "傳統特色茶：醍醐湯제호탕",
        "content": "https://naver.me/GsBOsf0q",
        "notes": "註：不確定倒了沒，可現場確認"
      },
      {
        "time": "15:00",
        "expense": "",
        "activity": "孝園之鐘 ‧ 西將臺",
        "content": "https://naver.me/5IS5Ij80",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "水原星空圖書館 (Starfield)",
        "content": "https://naver.me/xDJuURCj",
        "notes": "選去行程"
      },
      {
        "time": "",
        "expense": "",
        "activity": "華西站 > 東廟前站 (搭乘地鐵約 1hr 30min)",
        "content": "",
        "notes": ""
      },
      {
        "time": "19:30",
        "expense": "",
        "activity": "五方全雞 (晚餐)",
        "content": "https://naver.me/5Kb342St",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "返回阿博特斯泰東大門住宿",
        "content": "",
        "notes": ""
      }
    ]
  },
  {
    "dayIndex": 7,
    "dateInfo": "6/27 六",
    "title": "DMZ 非軍事區之旅 ➔ 弘大霓虹夜生活",
    "items": [
      {
        "time": "07:30",
        "expense": "",
        "activity": "市政廳站 6 號出口集合",
        "content": "",
        "notes": "切勿遲到！"
      },
      {
        "time": "08:00",
        "expense": "1500.0",
        "activity": "DMZ 非軍事區一日遊 (中文導遊)",
        "content": "【中文導遊】非軍事區DMZ 一日遊（首爾出發） - Klook 客路",
        "notes": "Klook 預訂，已付團費"
      },
      {
        "time": "14:00",
        "expense": "",
        "activity": "市政廳站下車解散",
        "content": "",
        "notes": ""
      },
      {
        "time": "14:30",
        "expense": "",
        "activity": "西嶺平壤冷麵 (午餐)",
        "content": "https://naver.me/FDnCdvaZ",
        "notes": ""
      },
      {
        "time": "15:40",
        "expense": "",
        "activity": "我想喝抹茶 (甜點)",
        "content": "https://naver.me/GFB1lm4I",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "出發 > 弘益大學站",
        "content": "",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "弘大商圈逛街購物",
        "content": "",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "買阿懶 (購物)",
        "content": "https://naver.me/FINIIlIV",
        "notes": ""
      },
      {
        "time": "20:00",
        "expense": "",
        "activity": "豬蹄與香瓜瑪格麗酒 (晚餐)",
        "content": "https://naver.me/Gsj22rkQ",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "返回阿博特斯泰東大門住宿",
        "content": "",
        "notes": ""
      }
    ]
  },
  {
    "dayIndex": 8,
    "dateInfo": "6/28 日",
    "title": "江南醫美體驗 ➔ 江南多米飯店耍廢",
    "items": [
      {
        "time": "11:00",
        "expense": "",
        "activity": "阿博特斯泰東大門退房",
        "content": "",
        "notes": ""
      },
      {
        "time": "11:30",
        "expense": "",
        "activity": "無垢屋 雞湯 (午餐)",
        "content": "https://naver.me/FivZZffz",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "法國鐵板吐司 (下午茶)",
        "content": "https://naver.me/53lKPriu",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "COEX Mall 星空圖書館",
        "content": "https://naver.me/xprAqNM7",
        "notes": "無聊的話可以去晃晃拍照"
      },
      {
        "time": "14:00",
        "expense": "",
        "activity": "江南 Dr. Evers 醫美診所",
        "content": "https://naver.me/xrSMzQoV",
        "notes": "額頭肉毒玻尿酸，在即將入住的飯店隔壁"
      },
      {
        "time": "15:00",
        "expense": "",
        "activity": "入住：首爾江南多米飯店 (Dormy Inn)",
        "content": "https://naver.me/5tJtlBKF",
        "notes": "辦理 Check-in，在飯店休息、泡溫泉耍廢"
      },
      {
        "time": "21:00",
        "expense": "",
        "activity": "宵夜：韓式炸雞與飯店拉麵",
        "content": "享受多米飯店免費提供的夜鳴拉麵",
        "notes": ""
      }
    ]
  },
  {
    "dayIndex": 9,
    "dateInfo": "6/29 一",
    "title": "最後採購 ➔ 榮耀返台",
    "items": [
      {
        "time": "09:00",
        "expense": "",
        "activity": "飯店早餐享用",
        "content": "",
        "notes": ""
      },
      {
        "time": "11:00",
        "expense": "",
        "activity": "首爾江南多米飯店退房",
        "content": "",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "前往 > 首爾車站",
        "content": "",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "首爾路 7017 空中花園",
        "content": "https://naver.me/GQ1lOwYW",
        "notes": "高速公路改建的公園，可眺望首爾車站全景"
      },
      {
        "time": "",
        "expense": "",
        "activity": "樂天超市 (最後大採購伴手禮)",
        "content": "https://naver.me/FfeOlQjt",
        "notes": ""
      },
      {
        "time": "16:00",
        "expense": "",
        "activity": "搭乘 AREX 直達車前往仁川機場第二航廈",
        "content": "預計搭乘 16:10 直達班次",
        "notes": ""
      },
      {
        "time": "",
        "expense": "",
        "activity": "機場免稅店逛街與晚餐",
        "content": "",
        "notes": ""
      },
      {
        "time": "20:05",
        "expense": "",
        "activity": "20:05 ICN >>> 21:50 TPE (仁川機場 ✈ 桃園機場)",
        "content": "帶著滿滿的回憶返台！",
        "notes": ""
      }
    ]
  }
];

// 出發日期設定
const departureDate = new Date("2026-06-21T02:40:00");

// 初始化
document.addEventListener("DOMContentLoaded", () => {
    initGlowBackgrounds();
    initCountdown();
    initDayTabs();
    initQuickCards();
    initModals();
    
    // 預設渲染第一天
    switchDay(1);
});

// 1. 動態背景色與城市漸層球調整
function initGlowBackgrounds() {
    const container = document.createElement("div");
    container.className = "bg-glow-container";
    container.innerHTML = `
        <div class="bg-glow bg-glow-1" id="glow1"></div>
        <div class="bg-glow bg-glow-2" id="glow2"></div>
    `;
    document.body.appendChild(container);
}

// 根據天數與城市，切換背景色彩氛圍
function updateThemeColors(dayIndex) {
    const glow1 = document.getElementById("glow1");
    const glow2 = document.getElementById("glow2");
    if (!glow1 || !glow2) return;
    
    // 清除舊的主題標籤
    document.body.classList.remove(
        "theme-busan-active", 
        "theme-daegu-active", 
        "theme-seoul-active", 
        "theme-suwon-active",
        "theme-dmz-active"
    );
    
    if (dayIndex === 1) {
        document.body.classList.add("theme-busan-active");
        glow1.style.backgroundColor = "var(--theme-busan)";
        glow2.style.backgroundColor = "var(--theme-daegu)";
    } else if (dayIndex === 2 || dayIndex === 3) {
        document.body.classList.add("theme-daegu-active");
        glow1.style.backgroundColor = "var(--theme-daegu)";
        glow2.style.backgroundColor = "#ffb74d";
    } else if (dayIndex === 6) {
        document.body.classList.add("theme-suwon-active");
        glow1.style.backgroundColor = "var(--theme-suwon)";
        glow2.style.backgroundColor = "var(--theme-seoul)";
    } else if (dayIndex === 7) {
        document.body.classList.add("theme-dmz-active");
        glow1.style.backgroundColor = "var(--theme-dmz)";
        glow2.style.backgroundColor = "var(--theme-seoul)";
    } else {
        document.body.classList.add("theme-seoul-active");
        glow1.style.backgroundColor = "var(--theme-seoul)";
        glow2.style.backgroundColor = "var(--klook-orange)";
    }
}

// 2. 出發倒數計時器
function initCountdown() {
    const countdownEl = document.getElementById("countdown-days");
    if (!countdownEl) return;
    
    function updateCountdown() {
        const now = new Date();
        const diff = departureDate - now;
        
        if (diff <= 0) {
            document.querySelector(".countdown-box").innerHTML = "🎉 <span>旅程進行中！</span>";
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        countdownEl.innerText = `${days} 天 ${hours} 小時`;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 60000); // 每分鐘更新一次
}

// 3. 行程天數頁籤 (Tabs)
function initDayTabs() {
    const tabContainer = document.getElementById("day-nav-container");
    if (!tabContainer) return;
    
    tabContainer.innerHTML = "";
    
    itineraryData.forEach(day => {
        const btn = document.createElement("button");
        btn.className = `day-nav-btn ${day.dayIndex === 1 ? 'active' : ''}`;
        btn.setAttribute("data-day", day.dayIndex);
        btn.onclick = () => switchDay(day.dayIndex);
        
        // 取得該天縮寫城市
        let city = "大邱";
        if (day.dayIndex === 1) city = "釜山/大邱";
        else if (day.dayIndex === 2) city = "慶州/大邱";
        else if (day.dayIndex === 6) city = "水原";
        else if (day.dayIndex === 7) city = "DMZ/弘大";
        else if (day.dayIndex >= 4) city = "首爾";
        
        btn.innerHTML = `
            <span class="day-num">Day ${day.dayIndex}</span>
            <span class="day-date">${day.dateInfo.replace(/([日一二三四五六])$/, "($1)")} ${city}</span>
        `;
        
        tabContainer.appendChild(btn);
    });
}

// 4. 切換天數邏輯
function switchDay(dayIndex) {
    // 更改按鈕狀態
    document.querySelectorAll(".day-nav-btn").forEach(btn => {
        if (parseInt(btn.getAttribute("data-day")) === dayIndex) {
            btn.classList.add("active");
            // 自動捲動頁籤，確保在手機上能看到當前點擊的頁籤
            btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else {
            btn.classList.remove("active");
        }
    });
    
    // 更新背景渲染
    updateThemeColors(dayIndex);
    
    // 渲染該天行程
    renderTimeline(dayIndex);
}

// 5. 自動判斷活動分類 (Badge Generator)
function getCategoryBadge(activity) {
    const text = activity.toLowerCase();
    
    // 美食
    if (text.includes("嫩豆腐") || text.includes("肉") || text.includes("韓牛") || 
        text.includes("冰淇淋") || text.includes("湯飯") || text.includes("年糕") || 
        text.includes("餃子") || text.includes("晚餐") || text.includes("咖啡") || 
        text.includes("大福") || text.includes("一隻雞") || text.includes("麵") || 
        text.includes("炸醬") || text.includes("烏龍") || text.includes("吐司") || 
        text.includes("全雞") || text.includes("冷麵") || text.includes("抹茶") || 
        text.includes("豬蹄") || text.includes("雞湯") || text.includes("早餐") || 
        text.includes("宵夜") || text.includes("炸雞") || text.includes("甜點") || 
        text.includes("美食") || text.includes("下午茶")) {
        return { text: "美食 🍖", class: "badge-food" };
    }
    
    // 交通
    if (text.includes("tpe") || text.includes("pus") || text.includes("地鐵") || 
        text.includes("公車") || text.includes("火車") || text.includes("計程車") || 
        text.includes("站") || text.includes("srt") || text.includes("ktx") || 
        text.includes("arex") || text.includes("機場") || text.includes("icn") || 
        text.includes("出發") || text.includes("車程")) {
        return { text: "交通 🚄", class: "badge-transit" };
    }
    
    // 住宿
    if (text.includes("toyoko") || text.includes("東橫") || text.includes("hotel") || 
        text.includes("abbottstay") || text.includes("阿博特") || text.includes("民宿") || 
        text.includes("cheese") || text.includes("多米") || text.includes("dormy") || 
        text.includes("退房") || text.includes("check-in") || text.includes("入住")) {
        return { text: "住宿 🏨", class: "badge-hotel" };
    }
    
    // 購物
    if (text.includes("新世界") || text.includes("逛街") || text.includes("商圈") || 
        text.includes("採購") || text.includes("買") || text.includes("aland") || 
        text.includes("阿懶") || text.includes("奧萊特") || text.includes("超市")) {
        return { text: "購物 🛍️", class: "badge-shop" };
    }
    
    // 景點 / 玩樂
    if (text.includes("spaland") || text.includes("汗蒸幕") || text.includes("龍宮寺") || 
        text.includes("遺址") || text.includes("瞻星台") || text.includes("大陵苑") || 
        text.includes("皇理") || text.includes("月精橋") || text.includes("壽城池") || 
        text.includes("ddp") || text.includes("清溪川") || text.includes("北村") || 
        text.includes("韓屋") || text.includes("景福宮") || text.includes("城牆") || 
        text.includes("華城") || text.includes("dmz") || text.includes("星空") || 
        text.includes("圖書") || text.includes("7017") || text.includes("公園") || 
        text.includes("散策") || text.includes("步道") || text.includes("醫美") || 
        text.includes("診所") || text.includes("溫泉")) {
        return { text: "行程 📸", class: "badge-scenic" };
    }
    
    return { text: "行程 📸", class: "badge-other" };
}

// 6. 渲染時間軸卡片
function renderTimeline(dayIndex) {
    const dayData = itineraryData.find(d => d.dayIndex === dayIndex);
    const contentContainer = document.getElementById("timeline-content");
    if (!dayData || !contentContainer) return;
    
    // 更新區段標題
    document.getElementById("day-title").innerHTML = `
        <span class="day-tag" style="background-color: var(--theme-daegu); color: #fff;">Day ${dayData.dayIndex}</span>
        ${dayData.dateInfo.replace(/([日一二三四五六])$/, "($1)")} - ${dayData.title || '精彩行程'}
    `;
    
    contentContainer.innerHTML = "";
    
    dayData.items.forEach(item => {
        const timelineItem = document.createElement("div");
        timelineItem.className = "timeline-item";
        
        const badge = getCategoryBadge(item.activity);
        
        // 檢查 Content 中是否為 Naver Map 網址
        let naverUrl = "";
        let otherText = "";
        
        if (item.content) {
            if (item.content.startsWith("https://")) {
                naverUrl = item.content;
            } else {
                otherText = item.content;
            }
        }
        
        // 解析連結按鈕
        let actionButtonsHtml = "";
        if (naverUrl) {
            // 解析是否含有換行文字，例如 spaland 的 \nkkday 門票
            const parts = naverUrl.split("\n");
            const mapUrl = parts[0];
            actionButtonsHtml += `
                <a href="${mapUrl}" target="_blank" class="btn btn-naver">
                    <i class="ri-map-pin-line"></i> Naver Map 導航
                </a>
            `;
            if (parts.length > 1) {
                // 有門票或其它連結文字
                actionButtonsHtml += `
                    <button class="btn btn-secondary" onclick="alert('💡 備註說明：${parts[1]}')">
                        <i class="ri-ticket-2-line"></i> ${parts[1]}
                    </button>
                `;
            }
        }
        
        // Klook DMZ
        if (item.activity.includes("DMZ") && item.content.includes("Klook")) {
            actionButtonsHtml += `
                <a href="https://www.klook.com" target="_blank" class="btn btn-klook">
                    <i class="ri-ticket-2-line"></i> Klook 預訂連結
                </a>
            `;
        }
        
        // 費用標註
        let expenseHtml = "";
        if (item.expense) {
            expenseHtml = `
                <span class="btn btn-secondary" style="border-color: rgba(255,91,0,0.2); color: var(--klook-orange);">
                    💰 預算費用: ${parseFloat(item.expense).toLocaleString()} ₩
                </span>
            `;
        }
        
        // 備註粗體提醒
        let notesClass = "card-notes";
        if (item.notes.includes("切勿遲到") || item.notes.includes("限") || item.notes.includes("已結清")) {
            notesClass += " bold-notes";
        }
        
        // 組裝卡片 HTML
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="card">
                <div class="card-header">
                    <span class="card-time ${item.time ? '' : 'empty-time'}">
                        <i class="ri-time-line"></i> ${item.time ? item.time : '順遊'}
                    </span>
                    <span class="card-badge ${badge.class}">${badge.text}</span>
                </div>
                <h3 class="card-title">${item.activity}</h3>
                ${otherText ? `<p class="card-notes" style="color:var(--text-primary); font-weight:500;">💡 ${otherText}</p>` : ''}
                ${item.notes ? `<p class="${notesClass}">📌 備註：${item.notes}</p>` : ''}
                ${(actionButtonsHtml || expenseHtml) ? `
                    <div class="card-actions">
                        ${actionButtonsHtml}
                        ${expenseHtml}
                    </div>
                ` : ''}
            </div>
        `;
        
        contentContainer.appendChild(timelineItem);
    });
    
    // 微動畫：讓時間軸圓點自動亮起第一個
    setTimeout(() => {
        const dots = contentContainer.querySelectorAll(".timeline-dot");
        if (dots.length > 0) dots[0].classList.add("active-dot");
    }, 100);
}

// 7. 隨身飯店與交通 Hub 卡片生成
function initQuickCards() {
    const hotelList = document.getElementById("quick-hotel-list");
    const transitList = document.getElementById("quick-transit-list");
    
    if (hotelList) {
        hotelList.innerHTML = `
            <li>
                <span>Day 1-3 慶北大學瞻星館學生宿舍</span>
                <a href="https://map.naver.com/p/entry/place/13010731" target="_blank">地圖</a>
            </li>
            <li>
                <span>Day 4-7 東大門 Abbottstay</span>
                <a href="https://naver.me/FbOvHIOu" target="_blank">地圖</a>
            </li>
            <li>
                <span>Day 8 江南多米飯店 (Dormy Inn)</span>
                <a href="https://naver.me/5tJtlBKF" target="_blank">地圖</a>
            </li>
        `;
    }
    
    if (transitList) {
        transitList.innerHTML = `
            <li>
                <span>6/21 釜山 ➔ 大邱 SRT374</span>
                <span style="font-weight:600;">21:19 - 22:06</span>
            </li>
            <li>
                <span>6/22 大邱 ➔ 慶州 KTX027</span>
                <span style="font-weight:600;">13:49 - 14:06</span>
            </li>
            <li>
                <span>6/22 慶州 ➔ 大邱 KTX066</span>
                <span style="font-weight:600;">21:35 - 21:51</span>
            </li>
            <li>
                <span>6/24 大邱 ➔ 首爾 KTX032</span>
                <span style="font-weight:600;">13:15 - 14:59</span>
            </li>
            <li>
                <span>6/29 首爾 ➔ 仁川機場 AREX</span>
                <span style="font-weight:600;">16:10 直達車</span>
            </li>
        `;
    }
}

// 8. 全螢幕彈窗控制
function initModals() {
    const modal = document.getElementById("info-modal");
    const closeBtn = document.getElementById("modal-close");
    
    window.openModal = function(type) {
        const modalTitle = document.getElementById("modal-title");
        const modalBody = document.getElementById("modal-body-content");
        
        if (type === 'hotel') {
            modalTitle.innerText = "🏨 飯店入住詳細資訊";
            modalBody.innerHTML = `
                <div style="margin-bottom: 1.25rem;">
                    <div class="modal-section-title">慶北大學瞻星館學生宿舍 (大邱)</div>
                    <p style="font-size:0.9rem;">📍 日期：6/21 (日) - 6/23 (二) 共 3 晚</p>
                    <p style="font-size:0.9rem;">🗺️ 地圖：<a href="https://map.naver.com/p/entry/place/13010731" target="_blank" style="color:var(--naver-green); font-weight:600;">點此開啟 Naver Map 導航</a></p>
                </div>
                <div style="margin-bottom: 1.25rem;">
                    <div class="modal-section-title">Abbottstay Dongdaemun (首爾東大門)</div>
                    <p style="font-size:0.9rem;">📍 日期：6/24 (三) - 6/27 (六) 共 4 晚</p>
                    <p style="font-size:0.9rem;">💰 費用：6,680 ₩ (已預付結清)</p>
                    <p style="font-size:0.9rem;">🗺️ 地圖：<a href="https://naver.me/FbOvHIOu" target="_blank" style="color:var(--naver-green); font-weight:600;">點此開啟 Naver Map 導航</a></p>
                </div>
                <div>
                    <div class="modal-section-title">Dormy Inn Seoul Gangnam (首爾江南多米)</div>
                    <p style="font-size:0.9rem;">📍 日期：6/28 (日) 入住 1 晚</p>
                    <p style="font-size:0.9rem;">🍜 備註：免費提供夜鳴拉麵宵夜、附桑拿溫泉設施</p>
                    <p style="font-size:0.9rem;">🗺️ 地圖：<a href="https://naver.me/5tJtlBKF" target="_blank" style="color:var(--naver-green); font-weight:600;">點此開啟 Naver Map 導航</a></p>
                </div>
            `;
        } else if (type === 'transit') {
            modalTitle.innerText = "🚄 交通票券與火車班次";
            modalBody.innerHTML = `
                <div style="margin-bottom: 1.25rem;">
                    <div class="modal-section-title">SRT 374 (釜山 ➔ 東大邱)</div>
                    <p style="font-size:0.9rem;">📅 日期：6/21 (日)</p>
                    <p style="font-size:0.9rem;">⏰ 時間：21:19 釜山車站出發 ➔ 22:06 東大邱車站抵達</p>
                    <p style="font-size:0.9rem;">⏳ 乘車時間：47 分鐘</p>
                </div>
                <div style="margin-bottom: 1.25rem;">
                    <div class="modal-section-title">KTX 027 (東大邱 ➔ 慶州)</div>
                    <p style="font-size:0.9rem;">📅 日期：6/22 (一)</p>
                    <p style="font-size:0.9rem;">⏰ 時間：13:49 東大邱出發 ➔ 14:06 慶州抵達</p>
                </div>
                <div style="margin-bottom: 1.25rem;">
                    <div class="modal-section-title">KTX 066 (慶州 ➔ 東大邱)</div>
                    <p style="font-size:0.9rem;">📅 日期：6/22 (一)</p>
                    <p style="font-size:0.9rem;">⏰ 時間：21:35 慶州出發 ➔ 21:51 東大邱抵達</p>
                    <p style="font-size:0.9rem;">🎟️ 備註：車票現場買即可</p>
                </div>
                <div style="margin-bottom: 1.25rem;">
                    <div class="modal-section-title">KTX-CheongRyong 032 (東大邱 ➔ 首爾)</div>
                    <p style="font-size:0.9rem;">📅 日期：6/24 (三)</p>
                    <p style="font-size:0.9rem;">⏰ 時間：13:15 東大邱出發 ➔ 14:59 首爾抵達</p>
                    <p style="font-size:0.9rem;">🎫 座位：7車 11A、11B (正向)</p>
                    <p style="font-size:0.9rem;">💰 票價：單人 43,500 ₩ (已出票)</p>
                </div>
                <div>
                    <div class="modal-section-title">AREX 機場直達車 (首爾 ➔ 仁川機場)</div>
                    <p style="font-size:0.9rem;">📅 日期：6/29 (一)</p>
                    <p style="font-size:0.9rem;">⏰ 建議班次：16:10 直達車</p>
                </div>
            `;
        }
        
        modal.classList.add("open");
    };
    
    window.closeModal = function() {
        modal.classList.remove("open");
    };
    
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }
    
    // 點擊彈窗外部關閉
    modal.onclick = (e) => {
        if (e.target === modal) {
            closeModal();
        }
    };
}
