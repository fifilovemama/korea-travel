// 韓國旅遊行程數據
const itineraryData = [
  {
    "dayIndex": 1,
    "dateInfo": "6/21 日",
    "title": "啟程！抵達釜山與大邱",
    "items": [
      { "time": "02:40", "expense": "", "activity": "02:40 TPE >>> 06:10 PUS (桃園機場 ✈ 釜山金海機場)", "content": "", "notes": "" },
      { "time": "06:58", "expense": "", "activity": "東大邱車站 06:58 > 釜山車站 07:50 (KTX 001)", "content": "", "notes": "", "category": "transit" },
      { "time": "07:00", "expense": "", "activity": "金海機場 > centum city站 (地鐵1hr)", "content": "08:30集合", "notes": "" },
      { "time": "08:00", "expense": "", "activity": "24小時嫩豆腐鍋 완뚝순두부", "content": "https://map.naver.com/p/entry/place/2014924086", "notes": "" },
      { "time": "09:00", "expense": "", "activity": "SPALAND 汗蒸幕 스파랜드 (3-4HR)", "content": "https://naver.me/5Q372Aqt\nkkday 門票|https://www.kkday.com/zh-tw/product/12213-busan-spa-land-centum-city-ticket", "notes": "" },
      { "time": "12:30", "expense": "", "activity": "新世界百貨 B1美食街 신세계백화점 B1 (1-1.5HR)", "content": "", "notes": "" },
      { "time": "14:00", "expense": "", "activity": "直達公車(181,1001,100)", "content": "前往海東龍宮寺 해동용궁사", "notes": "" },
      { "time": "15:00", "expense": "", "activity": "海東龍宮寺 해동용궁사 (1-1.5HR)", "content": "https://naver.me/58NdWaSm", "notes": "", "introKey": "yonggungsa" },
      { "time": "16:30", "expense": "", "activity": "計程車 > 松亭站 (10min)", "content": "", "notes": "" },
      { "time": "16:45", "expense": "", "activity": "松亭站 > 釜山院洞站 (30min)", "content": "", "notes": "" },
      { "time": "17:30", "expense": "", "activity": "石板韓牛 달벌생막창", "content": "https://naver.me/GOPeH9Eb", "notes": "" },
      { "time": "19:30", "expense": "", "activity": "> 釜山車站 (1hr)", "content": "搭乘地鐵或計程車前往釜山站", "notes": "" },
      { "time": "20:30", "expense": "", "activity": "釜山站東橫INN 토요코인 부산역 WOW Pass開通", "content": "https://naver.me/xCBQBNe0", "notes": "", "category": "hotel" },
      { "time": "21:00", "expense": "", "activity": "釜山車站 21:19 > 東大邱車站 22:06 (SRT 374)", "content": "4車 7C、7D (標準座位)", "notes": "", "category": "transit" },
      { "time": "22:10", "expense": "", "activity": "東大邱車站 > 飯店 (20min)", "content": "", "notes": "" },
      { "time": "22:40", "expense": "", "activity": "慶北大學瞻星館學生宿舍 경북대학교 첨성관 入住", "content": "https://naver.me/xgN6E7ss", "notes": "", "category": "hotel" }
    ]
  },
  {
    "dayIndex": 2,
    "dateInfo": "6/22 一",
    "title": "慶州古都一日遊",
    "items": [
      { "time": "10:30", "expense": "", "activity": "慶北大學 경북대학교 集合逛逛", "content": "", "notes": "" },
      { "time": "11:30", "expense": "", "activity": "慶北大學 Global Plaza 경북대학교 글로벌플라자 吃學餐", "content": "", "notes": "" },
      { "time": "13:00", "expense": "", "activity": "慶北大學 경북대학교 > 東大邱站", "content": "", "notes": "" },
      { "time": "13:30", "expense": "", "activity": "東大邱站13:49 > 慶州站14:06", "content": "KTX027", "notes": "", "category": "transit" },
      { "time": "15:00", "expense": "", "activity": "慶州歷史遺址區 경주역사유적지구", "content": "古都散步行程", "notes": "" },
      { "time": "", "expense": "", "activity": "瞻星台 첨성대", "content": "https://naver.me/GJTiv7JT", "notes": "", "introKey": "cheomseongdae" },
      { "time": "", "expense": "", "activity": "大陵苑 대릉원", "content": "https://naver.me/x3jFNE36", "notes": "", "introKey": "daereungwon" },
      { "time": "", "expense": "", "activity": "皇理團路 황리단길 (文創 咖啡廳)", "content": "文創 咖啡廳", "notes": "" },
      { "time": "", "expense": "", "activity": "月精橋 월정교", "content": "https://naver.me/F884gjLk", "notes": "", "introKey": "woljeonggyo" },
      { "time": "", "expense": "", "activity": "東宮與月池 동궁과 월지", "content": "https://naver.me/5FmSoI8P", "notes": "", "introKey": "donggungwolji" },
      { "time": "18:30", "expense": "", "activity": "Check in Cheese 餐廳 체크인치즈 (晚餐)", "content": "https://naver.me/FmGpFKx3", "notes": "營業時間：11:00-19:30" },
      { "time": "20:40", "expense": "", "activity": "> 慶州站 (45min)", "content": "", "notes": "" },
      { "time": "", "expense": "", "activity": "慶州站21:35 > 東大邱站21:51", "content": "KTX066", "notes": "車票可現場買", "category": "transit" },
      { "time": "", "expense": "", "activity": "學校北門 31冰淇淋 배스킨라빈스", "content": "https://naver.me/FBeInpDj", "notes": "" },
      { "time": "", "expense": "", "activity": "返回慶北大學瞻星館學生宿舍 경북대학교 첨성관 住宿", "content": "https://naver.me/xgN6E7ss", "notes": "", "category": "hotel" }
    ]
  },
  {
    "dayIndex": 3,
    "dateInfo": "6/23 二",
    "title": "大邱當地美食與壽城池",
    "items": [
      { "time": "12:30", "expense": "", "activity": "撤宿舍 / 整理行李", "content": "", "notes": "" },
      { "time": "", "expense": "", "activity": "美成豬肉湯飯 미성돼지국밥 (午餐)", "content": "https://naver.me/GZZdSD0G", "notes": "" },
      { "time": "", "expense": "", "activity": "西門市場 서문시장 逛街", "content": "品嚐辣炒年糕 떡볶이、扁餃子 납작만두", "notes": "" },
      { "time": "", "expense": "", "activity": "東城路商圈 동성로 逛街", "content": "", "notes": "" },
      { "time": "", "expense": "", "activity": "晚餐隨機安排", "content": "", "notes": "" },
      { "time": "19:00", "expense": "", "activity": "壽城池 수성못 散步", "content": "https://naver.me/GeUR216e", "notes": "" },
      { "time": "", "expense": "", "activity": "開到半夜的景色咖啡廳 카페뷰즈 (Views)", "content": "https://naver.me/F74VCHRa", "notes": "" },
      { "time": "", "expense": "", "activity": "入住：阿里郎韓屋旅館 아리랑", "content": "https://naver.me/xWTqQmFp", "notes": "", "category": "hotel" }
    ]
  },
  {
    "dayIndex": 4,
    "dateInfo": "6/24 三",
    "title": "KTX奔向首爾 ➔ 東大門設計之夜",
    "items": [
      { "time": "11:00", "expense": "", "activity": "河景咖啡廳 Melt 멜트", "content": "https://naver.me/xY47Oic0", "notes": "" },
      { "time": "13:15", "expense": "", "activity": "東大邱站 13:15 > 首爾站 14:59 (KTX-CheongRyong 032)", "content": "", "notes": "一人票價 43,500 ₩ (已出票)", "category": "transit" },
      { "time": "15:00", "expense": "", "activity": "韓貞仙優格水果大福 한정선 (甜點)", "content": "https://naver.me/F3TtK4GA", "notes": "" },
      { "time": "", "expense": "", "activity": "首爾車站 > 鍾路五街", "content": "地鐵一號線 往市政廳方向", "notes": "" },
      { "time": "16:00", "expense": "", "activity": "入住：阿博特斯泰東大門 아보트스테이 (Abbottstay)", "content": "放行李", "notes": "", "category": "hotel" },
      { "time": "16:30", "expense": "", "activity": "韓式蒸餃 創華堂 창화당 (點心)", "content": "https://naver.me/IgJC0bG9", "notes": "營業時間：10:00-23:30" },
      { "time": "", "expense": "", "activity": "東大門綜合市場 동대문종합시장 逛街", "content": "https://naver.me/xUw1rx2F", "notes": "" },
      { "time": "", "expense": "", "activity": "東大門設計廣場 동대문디자인플라자 (DDP)", "content": "https://naver.me/Fio7MOlX", "notes": "" },
      { "time": "", "expense": "", "activity": "清溪川 청계천 散步", "content": "https://naver.me/FK5viboB", "notes": "" },
      { "time": "20:00", "expense": "", "activity": "孫家一隻雞 손가네 닭한마리 (晚餐)", "content": "https://naver.me/5FmSpbrI", "notes": "營業時間：12:00-20:25" },
      { "time": "21:30", "expense": "", "activity": "優格世界冰淇淋 요거트월드", "content": "https://naver.me/F3TnuSG3", "notes": "營業時間：10:40-00:30" },
      { "time": "", "expense": "", "activity": "阿博特斯泰東大門 아보트스테이 (Abbottstay)", "content": "https://naver.me/FbOvHIOu", "notes": "", "category": "hotel" }
    ]
  },
  {
    "dayIndex": 5,
    "dateInfo": "6/25 四",
    "title": "安國站文青 ➔ 景福宮與洛山城牆",
    "items": [
      { "time": "", "expense": "", "activity": "出發 > 安國站", "content": "", "notes": "" },
      { "time": "09:00", "expense": "", "activity": "ARTIST BAKERY 아티스트 베이커리 (早餐)", "content": "https://naver.me/5UEc0uzr", "notes": "營業時間：07:00-20:00" },
      { "time": "", "expense": "", "activity": "DOTORI GARDEN 도토리가든 (橡果花園)", "content": "https://naver.me/GtURVWqh", "notes": "營業時間：08:00-23:00" },
      { "time": "10:00", "expense": "", "activity": "北村韓屋村 북촌한옥마을 (2hr)", "content": "", "notes": "", "introKey": "bukchon" },
      { "time": "12:00", "expense": "", "activity": "安岩豬肉湯飯 안암 (午餐)", "content": "https://naver.me/5ne4qiI4", "notes": "營業時間：11:30-20:10 (可用 Tableing App 候位登記)" },
      { "time": "", "expense": "", "activity": "備選：黃生家刀削麵 황생가칼국수", "content": "https://naver.me/5Rh0K9Fx", "notes": "營業時間：11:00-20:30" },
      { "time": "14:00", "expense": "", "activity": "景福宮 경복궁 歷史散步 (2hr)", "content": "", "notes": "", "introKey": "gyeongbokgung" },
      { "time": "", "expense": "", "activity": "前往 > 漢城大學站", "content": "", "notes": "" },
      { "time": "17:00", "expense": "", "activity": "洛山公園城牆步道 낙산공원 성곽길 看夕陽 (1hr)", "content": "https://naver.me/5l7kOk5K", "notes": "沿城牆走下坡直接到東大門站", "introKey": "naksan" },
      { "time": "18:30", "expense": "", "activity": "鯖魚蕎麥麵 喜喜 희희 (晚餐)", "content": "https://naver.me/GPdotp80", "notes": "" },
      { "time": "19:30", "expense": "", "activity": "現代奧萊特購物中心 현대시티아울렛", "content": "https://naver.me/xDJuVEOI", "notes": "營業時間：10:00-21:00 (可視體力彈性決定是否前往)" },
      { "time": "", "expense": "", "activity": "返回阿博特斯泰東大門 아보트스테이住宿", "content": "", "notes": "", "category": "hotel" }
    ]
  },
  {
    "dayIndex": 6,
    "dateInfo": "6/26 五",
    "title": "水原華城 수원화성 古城巡禮",
    "items": [
      { "time": "", "expense": "", "activity": "出發 > 水原站 > 轉公車 (總車程約 1hr 40min)", "content": "", "notes": "", "category": "transit" },
      { "time": "10:30", "expense": "", "activity": "美食選擇一：鐵板炸醬麵 짜마", "content": "https://naver.me/5WOQlRxl", "notes": "兩家美食擇一品嚐" },
      { "time": "", "expense": "", "activity": "美食選擇二：寬烏龍 요미우돈교자", "content": "https://naver.me/5YFcfRQl", "notes": "" },
      { "time": "12:00", "expense": "", "activity": "水原華城 수원화성", "content": "https://naver.me/FPn5j3kI", "notes": "", "introKey": "suwon_hwaseong" },
      { "time": "", "expense": "", "activity": "布魯塞爾炸薯條 브뤼셀프라이", "content": "https://naver.me/5chuHkVL", "notes": "" },
      { "time": "", "expense": "", "activity": "水原工房街 수원공방거리 散步", "content": "https://naver.me/5apDqczw", "notes": "" },
      { "time": "", "expense": "", "activity": "慢速陽光 슬로우써니사이드 (法式吐司咖啡廳)", "content": "https://naver.me/GFB1lcib", "notes": "" },
      { "time": "", "expense": "", "activity": "傳統特色茶：醍醐湯 제호탕", "content": "https://naver.me/GsBOsf0q", "notes": "不確定倒了沒，可現場確認" },
      { "time": "15:00", "expense": "", "activity": "孝園之鐘 ‧ 西將臺 효원의 종 ‧ 서장대", "content": "https://naver.me/5IS5Ij80", "notes": "", "introKey": "seojangdae" },
      { "time": "", "expense": "", "activity": "水原星空圖書館 별마당도서관 (Starfield)", "content": "https://naver.me/xDJuURCj", "notes": "選去行程" },
      { "time": "", "expense": "", "activity": "華西站 > 東廟前站 (搭乘地鐵約 1hr 30min)", "content": "", "notes": "", "category": "transit" },
      { "time": "19:30", "expense": "", "activity": "五方全雞 오반정 (晚餐)", "content": "https://naver.me/5Kb342St", "notes": "" },
      { "time": "", "expense": "", "activity": "返回阿博特斯泰東大門 아보트스테이住宿", "content": "", "notes": "", "category": "hotel" }
    ]
  },
  {
    "dayIndex": 7,
    "dateInfo": "6/27 六",
    "title": "DMZ 非軍事區之旅 ➔ 弘大霓虹夜生活",
    "items": [
      { "time": "07:30", "expense": "", "activity": "市政廳站 6 號出口集合", "content": "", "notes": "切勿遲到！" },
      { "time": "08:00", "expense": "", "activity": "DMZ 非軍事區一日遊 (中文導遊)", "content": "【中文導遊】非軍事區DMZ 一日遊（首爾出發） - Klook 客路", "notes": "Klook 預訂，已付團費", "introKey": "dmz" },
      { "time": "14:00", "expense": "", "activity": "市政廳站下車解散", "content": "", "notes": "" },
      { "time": "14:30", "expense": "", "activity": "西嶺平壤冷麵 서령 (午餐)", "content": "https://naver.me/FDnCdvaZ", "notes": "" },
      { "time": "15:40", "expense": "", "activity": "我想喝抹茶 맷차 (甜點)", "content": "https://naver.me/GFB1lm4I", "notes": "" },
      { "time": "", "expense": "", "activity": "出發 > 弘益大學站", "content": "", "notes": "", "category": "transit" },
      { "time": "", "expense": "", "activity": "弘大商圈逛街購物", "content": "", "notes": "" },
      { "time": "", "expense": "", "activity": "買阿懶 에이랜드 (ALAND) (購物)", "content": "https://naver.me/FINIIlIV", "notes": "" },
      { "time": "20:00", "expense": "", "activity": "豬蹄與香瓜瑪格麗酒 미쓰족발 (晚餐)", "content": "https://naver.me/Gsj22rkQ", "notes": "" },
      { "time": "", "expense": "", "activity": "返回阿博特斯泰東大門 아보트스테이住宿", "content": "", "notes": "", "category": "hotel" }
    ]
  },
  {
    "dayIndex": 8,
    "dateInfo": "6/28 日",
    "title": "江南醫美體驗 ➔ 江南多米飯店耍廢",
    "items": [
      { "time": "11:00", "expense": "", "activity": "阿博特斯泰東大門 아보트스테이 退房", "content": "", "notes": "" },
      { "time": "11:30", "expense": "", "activity": "無垢屋 雞湯 무구옥 (午餐)", "content": "https://naver.me/FivZZffz", "notes": "" },
      { "time": "", "expense": "", "activity": "法國鐵板吐司 스탠다드브레드 (下午茶)", "content": "https://naver.me/53lKPriu", "notes": "" },
      { "time": "", "expense": "", "activity": "COEX Mall 星空圖書館 별마당도서관", "content": "https://naver.me/xprAqNM7", "notes": "無聊的話可以去晃晃拍照" },
      { "time": "14:00", "expense": "", "activity": "江南 Dr. Evers 醫美診所 닥터에버스의원", "content": "https://naver.me/xrSMzQoV", "notes": "額頭肉毒玻尿酸，在即將入住的飯店隔壁" },
      { "time": "15:00", "expense": "", "activity": "入住：首爾江南多米飯店 도미인 서울 강남 (Dormy Inn)", "content": "https://naver.me/5tJtlBKF", "notes": "辦理 Check-in，在飯店休息、泡溫泉耍廢", "category": "hotel" },
      { "time": "21:00", "expense": "", "activity": "宵夜：韓式炸雞與飯店拉麵", "content": "享受多米飯店免費提供的夜鳴拉麵", "notes": "" }
    ]
  },
  {
    "dayIndex": 9,
    "dateInfo": "6/29 一",
    "title": "最後採購 ➔ 榮耀返台",
    "items": [
      { "time": "09:00", "expense": "", "activity": "飯店早餐享用", "content": "", "notes": "" },
      { "time": "11:00", "expense": "", "activity": "首爾江南多米飯店 도미인 서울 강남 退房", "content": "", "notes": "" },
      { "time": "", "expense": "", "activity": "前往 > 首爾車站", "content": "", "notes": "", "category": "transit" },
      { "time": "", "expense": "", "activity": "首爾路 7017 서울로 7017 空中花園", "content": "https://naver.me/GQ1lOwYW", "notes": "高速公路改建的公園，可眺望首爾車站全景" },
      { "time": "", "expense": "", "activity": "樂天超市 롯데마트 (最後大採購伴手禮)", "content": "https://naver.me/FfeOlQjt", "notes": "" },
      { "time": "16:00", "expense": "", "activity": "搭乘 AREX 直達車前往仁川機場第二航廈", "content": "預計搭乘 16:10 直達班次", "notes": "", "category": "transit" },
      { "time": "", "expense": "", "activity": "機場免稅店逛街與晚餐", "content": "", "notes": "" },
      { "time": "20:05", "expense": "", "activity": "20:05 ICN (T2) ✈ CI163 >>> 21:50 TPE (T1) (首爾仁川 ➔ 台北桃園)", "content": "中華航空 CI163 | 航廈：仁川 T2", "notes": "出發時間 20:05 / 抵達時間 21:50，請提前於機場櫃檯辦理登機與行李託運。", "category": "transit" }
    ]
  }
];

// 出發日期設定
const departureDate = new Date("2026-06-21T02:40:00+08:00");

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

// 1. 動態背景發光球
function initGlowBackgrounds() {
  const container = document.createElement("div");
  container.className = "bg-glow-container";
  container.innerHTML = `
        <div class="bg-glow bg-glow-1" id="glow1"></div>
        <div class="bg-glow bg-glow-2" id="glow2"></div>
    `;
  document.body.appendChild(container);
}

// 2. 根據天數切換背景色彩氛圍
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

// 3. 出發倒數計時器
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

// 4. 初始化天數標籤
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
    else if (day.dayIndex === 3) city = "大邱";
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

// 5. 切換天數邏輯
function switchDay(dayIndex) {
  document.querySelectorAll(".day-nav-btn").forEach(btn => {
    if (parseInt(btn.getAttribute("data-day")) === dayIndex) {
      btn.classList.add("active");
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    } else {
      btn.classList.remove("active");
    }
  });

  updateThemeColors(dayIndex);
  renderTimeline(dayIndex);
}

// 6. 自動判斷活動分類 (Badge Generator)
function getCategoryBadge(item) {
  const activityText = typeof item === 'string' ? item : item.activity;

  if (item && typeof item === 'object') {
    if (item.category === "scenic") return { text: "行程 📸", class: "badge-scenic" };
    if (item.category === "hotel") return { text: "住宿 🏨", class: "badge-hotel" };
    if (item.category === "transit") return { text: "交通 🚄", class: "badge-transit" };
    if (item.category === "food") return { text: "美食 🍖", class: "badge-food" };
    if (item.category === "shop") return { text: "購物 🛍️", class: "badge-shop" };
  }

  const text = activityText.toLowerCase();

  // 美食
  if (text.includes("嫩豆腐") || text.includes("韓牛") || text.includes("冰淇淋") ||
    text.includes("湯飯") || text.includes("年糕") || text.includes("餃子") ||
    text.includes("晚餐") || text.includes("咖啡") || text.includes("大福") ||
    text.includes("一隻雞") || text.includes("麵") || text.includes("炸醬") ||
    text.includes("烏龍") || text.includes("吐司") || text.includes("全雞") ||
    text.includes("冷麵") || text.includes("抹茶") || text.includes("豬蹄") ||
    text.includes("雞湯") || text.includes("早餐") || text.includes("宵夜") ||
    text.includes("炸雞") || text.includes("甜點") || text.includes("美食") ||
    text.includes("下午茶") || text.includes("午餐")) {
    return { text: "美食 🍖", class: "badge-food" };
  }

  // 交通
  if (text.includes("tpe") || text.includes("pus") || text.includes("地鐵") ||
    text.includes("公車") || text.includes("火車") || text.includes("計程車") ||
    text.includes("出發 >") || text.includes("srt") || text.includes("ktx") ||
    text.includes("arex") || text.includes("機場") || text.includes("icn") ||
    text.includes("車站") || text.includes("車程") || text.includes("轉公車")) {
    return { text: "交通 🚄", class: "badge-transit" };
  }

  // 住宿
  if (text.includes("toyoko") || text.includes("東橫") || text.includes("hotel") ||
    text.includes("abbottstay") || text.includes("阿博特") || text.includes("民宿") ||
    text.includes("cheese") || text.includes("多米") || text.includes("dormy") ||
    text.includes("退房") || text.includes("check-in") || text.includes("入住") ||
    text.includes("住宿") || text.includes("宿舍") || text.includes("旅館")) {
    return { text: "住宿 🏨", class: "badge-hotel" };
  }

  // 購物
  if (text.includes("新世界") || text.includes("逛街") || text.includes("商圈") ||
    text.includes("採購") || text.includes("aland") || text.includes("阿懶") ||
    text.includes("奧萊特") || text.includes("超市") || text.includes("購物")) {
    return { text: "購物 🛍️", class: "badge-shop" };
  }

  // 景點 / 玩樂
  if (text.includes("spaland") || text.includes("汗蒸幕") || text.includes("龍宮寺") ||
    text.includes("瞻星台") || text.includes("大陵苑") || text.includes("皇理") ||
    text.includes("月精橋") || text.includes("壽城池") || text.includes("清溪川") ||
    text.includes("北村") || text.includes("韓屋") || text.includes("景福宮") ||
    text.includes("城牆") || text.includes("華城") || text.includes("dmz") ||
    text.includes("星空") || text.includes("圖書") || text.includes("7017") ||
    text.includes("公園") || text.includes("步道") || text.includes("醫美") ||
    text.includes("診所") || text.includes("溫泉") || text.includes("散步")) {
    return { text: "行程 📸", class: "badge-scenic" };
  }

  return { text: "其他 💡", class: "badge-other" };
}

// 7. 渲染時間軸卡片
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

    const badge = getCategoryBadge(item);

    // 檢查 Content 中是否為 Naver Map 網址
    let naverUrl = "";
    let otherText = "";

    if (item.content) {
      if (item.content.startsWith("https://") || item.content.startsWith("http://")) {
        naverUrl = item.content;
      } else {
        otherText = item.content;
      }
    }

    // 解析連結按鈕
    let actionButtonsHtml = "";
    if (naverUrl) {
      const parts = naverUrl.split("\n");
      const mapUrl = parts[0];
      actionButtonsHtml += `
                <a href="${mapUrl}" target="_blank" class="btn btn-naver">
                    <i class="ri-map-pin-line"></i> Naver Map 導航
                </a>
            `;
      if (parts.length > 1 && parts[1].includes("|")) {
        const linkParts = parts[1].split("|");
        const linkText = linkParts[0];
        const linkUrl = linkParts[1];
        actionButtonsHtml += `
                <a href="${linkUrl}" target="_blank" class="btn btn-accent btn-sm" style="margin-left: 0.5rem;">
                    <i class="ri-ticket-line"></i> ${linkText}
                </a>
            `;
      }
    }

    // 景點介紹按鈕
    if (item.introKey) {
      actionButtonsHtml += `
                <button class="btn btn-secondary btn-sm" style="margin-left: 0.5rem;" onclick="openModal('${item.introKey}')">
                    <i class="ri-information-line"></i> 景點介紹
                </button>
            `;
    }

    // 費用標註
    let expenseHtml = "";
    if (item.expense) {
      expenseHtml = `
                <span class="card-expense">
                    <i class="ri-money-dollar-circle-line"></i> 預估費用：${item.expense} ₩
                </span>
            `;
    }

    // 備註樣式
    let notesClass = "card-notes";
    if (item.notes && (item.notes.includes("入住") || item.notes.includes("切勿遲到"))) {
      notesClass = "card-notes note-important";
    }

    timelineItem.innerHTML = `
            <div class="timeline-dot active-dot"></div>
            <div class="card ${badge.class === 'badge-transit' ? 'card-transit' : ''}">
                <div class="card-header">
                    <span class="card-time ${item.time ? '' : 'empty-time'}">
                        <i class="ri-time-line"></i> ${item.time ? item.time : '順遊'}
                    </span>
                    <span class="card-badge ${badge.class}">${badge.text}</span>
                </div>
                <div class="card-title">${item.activity}</div>
                ${otherText ? `<p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:0.75rem;">${otherText}</p>` : ''}
                ${item.notes ? `<div class="${notesClass}">${item.notes}</div>` : ''}
                <div class="card-actions">
                    ${actionButtonsHtml}
                    ${expenseHtml}
                </div>
            </div>
    `;
    contentContainer.appendChild(timelineItem);
  });

  setTimeout(() => {
    const dots = contentContainer.querySelectorAll(".timeline-dot");
    if (dots.length > 0) dots[0].classList.add("active-dot");
  }, 100);
}

// 8. 快速資訊卡片
function initQuickCards() {
  const hotelList = document.getElementById("quick-hotel-list");
  const transitList = document.getElementById("quick-transit-list");

  if (hotelList) {
    hotelList.innerHTML = `
            <li>
                <span>Day 1-2 慶北大學瞻星館學生宿舍</span>
                <a href="https://naver.me/xgN6E7ss" target="_blank">地圖</a>
            </li>
            <li>
                <span>Day 3 阿里郎韓屋旅館 아리랑</span>
                <a href="https://naver.me/xWTqQmFp" target="_blank">地圖</a>
            </li>
            <li>
                <span>Day 4-7 Abbottstay 東大門</span>
                <a href="https://naver.me/FbOvHIOu" target="_blank">地圖</a>
            </li>
            <li>
                <span>Day 8 首爾江南多米飯店 (Dormy Inn)</span>
                <a href="https://naver.me/5tJtlBKF" target="_blank">地圖</a>
            </li>
        `;
  }

  if (transitList) {
    transitList.innerHTML = `
            <div class="transit-group">
                <div class="transit-group-title"><i class="ri-calendar-line"></i> 6/21 (日)</div>
                <ul class="transit-sublist">
                    <li>
                        <span class="transit-route">東大邱 ➔ 釜山 KTX 001</span>
                        <span class="transit-time">06:58 - 07:50<small>(6車 1D)</small></span>
                    </li>
                    <li>
                        <span class="transit-route">釜山 ➔ 東大邱 SRT 374</span>
                        <span class="transit-time">21:19 - 22:06<small>(4車 7C、7D)</small></span>
                    </li>
                </ul>
            </div>
            <div class="transit-group">
                <div class="transit-group-title"><i class="ri-calendar-line"></i> 6/22 (一)</div>
                <ul class="transit-sublist">
                    <li>
                        <span class="transit-route">東大邱 ➔ 慶州 KTX 027</span>
                        <span class="transit-time">13:49 - 14:06</span>
                    </li>
                    <li>
                        <span class="transit-route">慶州 ➔ 東大邱 KTX 066</span>
                        <span class="transit-time">21:35 - 21:51<small>(現場買)</small></span>
                    </li>
                </ul>
            </div>
            <div class="transit-group">
                <div class="transit-group-title"><i class="ri-calendar-line"></i> 6/24 (三)</div>
                <ul class="transit-sublist">
                    <li>
                        <span class="transit-route">東大邱 ➔ 首爾 KTX-CheongRyong 032</span>
                        <span class="transit-time">13:15 - 14:59<small>(7車 11A、11B)</small></span>
                    </li>
                </ul>
            </div>
            <div class="transit-group">
                <div class="transit-group-title"><i class="ri-calendar-line"></i> 6/29 (一)</div>
                <ul class="transit-sublist">
                    <li>
                        <span class="transit-route">首爾 ➔ 仁川機場 AREX</span>
                        <span class="transit-time">16:10 <small>(直達車)</small></span>
                    </li>
                    <li>
                        <span class="transit-route">首爾仁川 ➔ 台北桃園 CI163</span>
                        <span class="transit-time">20:05 - 21:50</span>
                    </li>
                </ul>
            </div>
        `;
  }
}

// 景點介紹資料
const attractionIntroductions = {
  yonggungsa: {
    title: "🌊 海東龍宮寺 해동용궁사",
    content: `
      <div class="attraction-intro">
        <p class="intro-desc"><strong>海東龍宮寺</strong>是韓國唯一一座建於海邊礁石上的佛教寺廟，始建於1376年高麗恭愍王時期，由國師懶翁大師所建。依山傍海，景色極為壯麗，與一般深山幽谷中的寺廟截然不同。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-sun-cloudy-line"></i> 觀日出與許願勝地</h4>
          <p>寺廟坐東朝西，是釜山著名的觀日出名所。據說在此虔誠祈禱，便能獲得大慈大悲觀世音菩薩的感應，「至少會實現一個願望」，因此終年香火鼎盛。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-compass-line"></i> 108階與龍門石橋</h4>
          <p>從入口進入後，需走過象徵消除世俗108種煩惱的「108階」，沿途能見到十二生肖石像。穿過階梯後，豁然開朗的蔚藍大海與建在礁石上的雄偉大雄寶殿隨之映入眼簾，令人心曠神怡。</p>
        </div>
        <div class="intro-tip">
          <i class="ri-lightbulb-line"></i> <strong>便利貼：</strong> 進入寺廟的道路兩旁有許多在地小吃與紀念品攤位，可以一邊品嚐釜山特色魚板，一邊散步。參觀時建議穿著防滑好走的鞋子。
        </div>
      </div>
    `
  },
  cheomseongdae: {
    title: "🌟 瞻星台 첨성대",
    content: `
      <div class="attraction-intro">
        <p class="intro-desc"><strong>瞻星台</strong>是建於新羅第27代善德女王時期（公元632~647年）的罕見天文觀測台，也是東亞現存最古老的天文台。1962年被指定為國寶第31號。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-palette-line"></i> 獨特的建築美學</h4>
          <p>整座石台由 <strong>365塊</strong> 花崗岩砌成，象徵著一年的 <strong>365天</strong>。它共有27層，象徵善德女王是新羅的第27代君王（若加上最底部的基座與最頂部的井字石，共計29層或30層，代表陰曆的一個月）。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-calculator-line"></i> 神奇的幾何對稱</h4>
          <p>塔身正中央設有一個方形窗口，位於第13層至15層，恰好將塔身平分為上下各12層，這與一年有12個月、24個節氣的數字不謀而合，展現出高度發達的新羅天文與幾何力學水平。</p>
        </div>
        <div class="intro-tip">
          <i class="ri-lightbulb-line"></i> <strong>便利貼：</strong> 夜間瞻星台會點亮五彩繽紛的景觀燈，與夜空中閃爍的繁星交相輝映。建議傍晚前往，能同時拍到夕陽與絕美夜景！
        </div>
      </div>
    `
  },
  daereungwon: {
    title: "👑 大陵苑 대릉원",
    content: `
      <div class="attraction-intro">
        <p class="intro-desc"><strong>大陵苑</strong>是慶州市區內規模最大的新羅時代王陵與貴族墓葬群，占地十幾萬坪，綠草如茵。園內散布著23座巨大的饅頭形古墓，猶如起伏的翠綠丘陵，是慶州「古都」景色的象徵地標。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-compass-3-line"></i> 必看亮點一：天馬塚 (천마총)</h4>
          <p>這是苑內唯一開放內部參觀的古墓。因出土了畫有奔馳天馬的鞍橋障泥（天馬圖）而得名。墓內完整展示了木椁墓的剖面結構，並陳列了大量極其奢華的黃金冠冕、金製腰帶等隨葬珍寶（複製品，真跡藏於博物館）。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-image-line"></i> 必看亮點二：夢幻木蘭樹</h4>
          <p>在兩座巨大的綠色陵墓之間，夾著一棵孤獨生長的玉蘭樹，這是大陵苑最著名的網紅拍照景點。無論是春季白花盛開、夏季綠意盎然，還是冬雪覆蓋，拍照都極具浪漫氛圍。</p>
        </div>
        <div class="intro-tip">
          <i class="ri-lightbulb-line"></i> <strong>便利貼：</strong> 大陵苑自2023年起已開放「免費入園」（僅參觀天馬塚內部需另購票，約3,000₩）。園區設有環狀步道，散步非常舒服。
        </div>
      </div>
    `
  },
  woljeonggyo: {
    title: "🌉 月精橋 월정교",
    content: `
      <div class="attraction-intro">
        <p class="intro-desc"><strong>月精橋</strong>是一座橫跨慶州南川的宏偉迴廊式木結構拱橋，最早建於新羅時代（公元760年景德王時期），是連接新羅王宮「月城」與南部地區的重要通道。曾毀於火災，後歷時多年考古研究，於2018年重現其宏大面貌。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-layout-line"></i> 唐風迴廊式建築</h4>
          <p>橋身兩端設有宏偉的雙層樓閣，橋面上建有長達60多公尺的瓦頂長廊。行人走在長廊中，可以透過木窗欣賞南川溪水，橋樑內部雕樑畫棟，色彩鮮豔精緻，充滿古樸典雅的氣息。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-moon-line"></i> 慶州公認第一夜景</h4>
          <p>當夜幕降臨，月精橋的金色燈光會全數點亮，與平靜的水面形成一道對稱的金色長廊倒影，美得令人窒息。溪流上的石步道（豆腐岩）是拍攝全景與水中倒影的黃金機位。</p>
        </div>
        <div class="intro-tip">
          <i class="ri-lightbulb-line"></i> <strong>便利貼：</strong> 橋旁的樓閣二樓設有展示館，陳列了月精橋的修復歷史與出土文物複製品。此外，過橋後可直接順遊「校村韓屋村」。
        </div>
      </div>
    `
  },
  donggungwolji: {
    title: "🌙 東宮與月池 동궁과 월지",
    content: `
      <div class="attraction-intro">
        <p class="intro-desc"><strong>東宮與月池</strong>（舊稱<strong>雁鴨池 안압지</strong>）是新羅王宮的離宮遺址，建於公元674年文武王時期。這裡曾是新羅王室設宴款待國賓、舉辦重大慶典的御花園，也是韓國代表性的古代宮苑園林。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-water-flash-line"></i> 精妙的造園智慧</h4>
          <p>新羅造園家在設計月池時，巧妙運用了折線與島嶼遮擋。無論遊客站在湖泊的哪一個角落，都無法一眼看盡整個池塘的邊界，使狹小的池塘營造出一望無際、宛如大海的壯闊視界。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-ancient-gate-line"></i> 華麗的臨海殿遺址</h4>
          <p>池畔重建了三座精緻的木結構殿閣。夜間點燈後，臨海殿的橘紅色燈光與湖畔翠綠的古松、奇石，倒映在靜謐如鏡的湖面上，燈火輝煌，波光粼粼，如夢似幻。</p>
        </div>
        <div class="intro-tip">
          <i class="ri-lightbulb-line"></i> <strong>便利貼：</strong> 這裡是慶州人氣最高的夜景景點，售票處與入園處在傍晚亮燈後經常大排長龍，建議可以使用現場的電子自助售票機快速購票入場。
        </div>
      </div>
    `
  },
  bukchon: {
    title: "🏡 北村韓屋村 북촌한옥마을",
    content: `
      <div class="attraction-intro">
        <p class="intro-desc"><strong>北村韓屋村</strong>位於首爾景福宮、昌德宮和宗廟之間，是一處擁有六百多年歷史的傳統韓屋居住區。這裡保存了數百棟朝鮮時代的瓦房韓屋，曾是王室宗親及高官顯赫所居住的貴族住宅區。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-palette-line"></i> 傳統建築與歷史小巷</h4>
          <p>這裡的一磚一瓦都散發著朝鮮時代的古樸風韻。沿著陡峭的石階與蜿蜒的小巷漫步，兩旁是精緻的泥牆、青磚瓦頂以及木質門窗，古今交錯的視覺衝擊讓人彷彿穿越時空。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-camera-line"></i> 北村八景與黃金拍攝點</h4>
          <p>遊客最喜愛的地點是北村路11街的斜坡步道（北村五景與六景）。從坡道頂端俯瞰，整片鱗次櫛比的傳統黑瓦屋頂與遠處現代的首爾 N 首爾塔融為一體，是明信片般的經典畫面。</p>
        </div>
        <div class="intro-tip">
          <i class="ri-lightbulb-line"></i> <strong>便利貼：</strong> 北村目前仍是真實的住宅區，請務必輕聲細語、勿亂丟垃圾或擅自開門探頭，尊重當地居民的隱私與生活。
        </div>
      </div>
    `
  },
  gyeongbokgung: {
    title: "👑 景福宮 경복궁",
    content: `
      <div class="attraction-intro">
        <p class="intro-desc"><strong>景福宮</strong>建於1395年，是朝鮮王朝建造的第一座、也是規模最大、設計最美的法宮（正宮）。它以北岳山為背景，格局雄偉，是首爾最具代表性的歷史地標與文化象徵。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-government-line"></i> 勤政殿與慶會樓</h4>
          <p>宮殿內必看亮點包括：<strong>勤政殿</strong>（國王登基與接見外賓的雄偉大殿，殿前品階石路旁排列著官員官位）、以及建在蓮花池上的雙層木閣慶會樓（古代舉辦宮廷宴會的場所，湖面倒影如詩如畫）。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-team-line"></i> 守門將換崗儀式</h4>
          <p>每天上午10:00與下午14:00（週二除外），光化門前會重現朝鮮時代守門軍的換崗儀式。身穿華麗傳統服飾的軍兵手持旗幟與兵器，伴隨著傳統鼓樂齊鳴，儀式莊嚴且震撼。</p>
        </div>
        <div class="intro-tip">
          <i class="ri-lightbulb-line"></i> <strong>便利貼：</strong> 穿著傳統韓服（Hanbok）可免費進入景福宮參觀！宮殿周邊有許多韓服體驗店，建議提前預約租借。另外，每週二為景福宮固定休館日，行程規劃請特別留意。
        </div>
      </div>
    `
  },
  naksan: {
    title: "🧱 洛山公園城牆步道 낙산공원 성곽길",
    content: `
      <div class="attraction-intro">
        <p class="intro-desc"><strong>洛山公園城牆步道</strong>沿著海拔125公尺的洛山伸展，是「漢陽都城（首爾古城牆）」的一部分。這條歷史古牆始建於1396年朝鮮太祖時期，全長18.6公里，保護著古老的都城。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-history-line"></i> 朝鮮時代的防衛屏障</h4>
          <p>城牆由大大小小修整整齊的花崗岩石塊疊砌而成。細看石塊的形狀與砌法，能發現不同國王統治時期（太祖、世宗、肅宗）因防禦科技進步而進行的改建歷史，是一座活的軍事歷史博物館。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-contrast-line"></i> 夕陽與浪漫夜景勝地</h4>
          <p>沿著城牆漫步，一側是歷史古牆，另一側則是首爾現代都市的開闊視野。這裡因能眺望極美的日落景色，以及入夜後城牆燈光與城市萬家燈火的夢幻交織，成為無數經典韓劇的取景地。</p>
        </div>
        <div class="intro-tip">
          <i class="ri-lightbulb-line"></i> <strong>便利貼：</strong> 建議傍晚前往，沿著城牆緩緩下坡步行可直達東大門站。步道鋪設完善，但有一定坡度，建議穿著舒適便鞋。
        </div>
      </div>
    `
  },
  suwon_hwaseong: {
    title: "🛡️ 水原華城 수원화성",
    content: `
      <div class="attraction-intro">
        <p class="intro-desc"><strong>水原華城</strong>是朝鮮王朝第22代正祖大王於1794-1796年間，為向其父親莊獻世子展現孝心、並建立強大國防而建造的城郭。1997年被列入聯合國教科文組織世界文化遺產，被譽為東亞城牆建築的巔峰之作。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-tools-line"></i> 科學與軍事設計的結晶</h4>
          <p>城牆全長5.74公里，建造時融合了當時最新引進的西洋科學技術（如丁若鏞發明的起重機「擧重器」），並完美結合了中國與歐洲的軍事防禦設施。城牆上設有砲樓、暗門、空心墩等，設計極精密，且實用性極高。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-water-line"></i> 四大城門與華虹門</h4>
          <p>華城擁有宏偉的四大城門（長安門、八達門、蒼龍門、華西門），其中橫跨水原川的七孔石橋水門「華虹門」，其水流噴湧與周圍柳樹相映的景致，是華城最著名的代表性美景。</p>
        </div>
        <div class="intro-tip">
          <i class="ri-lightbulb-line"></i> <strong>便利貼：</strong> 參觀城牆免費，但進入華城行宮需購票（1,500₩）。城牆步道漫步一圈約需 2-3 小時，體力有限者可搭乘可愛的「華城御車」遊覽主要路線。
        </div>
      </div>
    `
  },
  seojangdae: {
    title: "🔔 孝園之鐘 ‧ 西將臺 효원의 종 ‧ 서장대",
    content: `
      <div class="attraction-intro">
        <p class="intro-desc"><strong>西將臺</strong>位於水原華城的最高點八達山頂，是國王或軍事指揮官親自監督士兵訓練、發號施令的軍事指揮所。「將臺」意即將軍站立的平台。旁邊設有象徵孝心的<strong>孝園之鐘</strong>。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-shield-user-line"></i> 西將臺：居高臨下的指揮中樞</h4>
          <p>西將臺為雙層閣樓建築，視野極佳，在此能將整座水原華城城廓與水原市區一覽無遺。當年正祖大王曾在此親自督導了華城歷史上規模最大的夜間軍事演習，其牌匾上的「西將臺」三字即為正祖本人的親筆墨寶。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-notification-3-line"></i> 孝園之鐘：孝心與祝福之聲</h4>
          <p>這座銅鐘是水原市民為了紀念正祖大王對父母的深厚孝心而鑄造的。鐘聲渾厚悠揚，任何人只需支付小額費用（約1,000-2,000₩）即可親自撞鐘三次，分別祈求父母健康、家庭和睦以及自身心願達成。</p>
        </div>
        <div class="intro-tip">
          <i class="ri-lightbulb-line"></i> <strong>便利貼：</strong> 前往八達山頂西將臺需步行一段向上的台階或斜坡，但山頂視野非常開闊，是欣賞華城夕陽與城市夜景的黃金機位。
        </div>
      </div>
    `
  },
  dmz: {
    title: "🎖️ DMZ 非軍事區 DMZ",
    content: `
      <div class="attraction-intro">
        <p class="intro-desc"><strong>DMZ（非軍事區）</strong>是1953年《韓戰停戰協定》後，以軍事分界線（38度線）為中心，南北各後退2公里所劃出的4公里寬緩衝帶。它是世界上防備最嚴密、最獨特的冷戰歷史遺跡。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-focus-3-line"></i> 臨津閣與第三地道</h4>
          <p>行程必看點包括：<strong>臨津閣觀光區</strong>（展示自由之橋、被子彈打得千瘡百孔的蒸汽火車頭）、<strong>第三地道</strong>（北韓企圖奇襲首爾而暗中挖掘的秘密通道，遊客可戴安全帽深入地下73公尺寬的通道參觀）、以及<strong>都羅展望台</strong>（在此可透過望遠鏡直接窺探北韓開城工業區及北韓農村生活景象）。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-leaf-line"></i> 意外被保存的生態淨土</h4>
          <p>由於逾70年來嚴禁平民進入與任何開發，DMZ區內意外成為許多瀕危野生動植物（如丹頂鶴）的天然庇護所，具有極高的歷史與生態雙重價值。</p>
        </div>
        <div class="intro-tip">
          <strong>便利貼：</strong> 進入DMZ管制區<strong>必須攜帶個人護照正本</strong>以供軍方安檢（不可使用影本或電子檔）。管制區內嚴禁朝北韓方向揮手、大聲呼喊或在未授權區域拍照，請務必嚴格遵守導遊與駐守軍人的指令。
        </div>
      </div>
    `
  }
};

// 9. 彈窗控制器
function initModals() {
  const modal = document.getElementById("info-modal");
  const closeBtn = document.getElementById("modal-close");

  window.openModal = function (type) {
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body-content");

    if (type === 'hotel') {
      modalTitle.innerText = "🏨 飯店入住詳細資訊";
      modalBody.innerHTML = `
                <div style="margin-bottom: 1.25rem;">
                    <div class="modal-section-title">慶北大學瞻星館學生宿舍 경북대학교 첨성관 (大邱)</div>
                    <p style="font-size:0.9rem;">📍 日期：6/21 (日) - 6/22 (一) 共 2 晚</p>
                    <p style="font-size:0.9rem;">🗺️ 地圖：<a href="https://naver.me/xgN6E7ss" target="_blank" style="color:var(--naver-green); font-weight:600;">點此開啟 Naver Map 導航</a></p>
                </div>
                <div style="margin-bottom: 1.25rem;">
                    <div class="modal-section-title">阿里郎韓屋旅館 아리랑 (大邱)</div>
                    <p style="font-size:0.9rem;">📍 日期：6/23 (二) 入住 1 晚</p>
                    <p style="font-size:0.9rem;">🗺️ 地圖：<a href="https://naver.me/xWTqQmFp" target="_blank" style="color:var(--naver-green); font-weight:600;">點此開啟 Naver Map 導航</a></p>
                </div>
                <div style="margin-bottom: 1.25rem;">
                    <div class="modal-section-title">Abbottstay Dongdaemun 아보트스테이 (首爾東大門)</div>
                    <p style="font-size:0.9rem;">📍 日期：6/24 (三) - 6/27 (六) 共 4 晚</p>
                    <p style="font-size:0.9rem;">💰 費用：6,680 ₩ (已預付結清)</p>
                    <p style="font-size:0.9rem;">🗺️ 地圖：<a href="https://naver.me/FbOvHIOu" target="_blank" style="color:var(--naver-green); font-weight:600;">點此開啟 Naver Map 導航</a></p>
                </div>
                <div>
                    <div class="modal-section-title">Dormy Inn Seoul Gangnam 도미인 서울 강남 (首爾江南多米)</div>
                    <p style="font-size:0.9rem;">📍 日期：6/28 (日) 入住 1 晚</p>
                    <p style="font-size:0.9rem;">🍜 備註：免費提供夜鳴拉麵宵夜、附桑拿溫泉設施</p>
                    <p style="font-size:0.9rem;">🗺️ 地圖：<a href="https://naver.me/5tJtlBKF" target="_blank" style="color:var(--naver-green); font-weight:600;">點此開啟 Naver Map 導航</a></p>
                </div>
            `;
    } else if (type === 'transit') {
      modalTitle.innerText = "🚄 交通票券與火車班次";
      modalBody.innerHTML = `
                <div class="modal-date-group" style="margin-bottom: 1.5rem;">
                    <div class="modal-date-header" style="font-size: 1.1rem; font-weight: 700; color: var(--theme-daegu); margin-bottom: 0.75rem; border-left: 4px solid var(--theme-daegu); padding-left: 0.5rem;">📅 6/21 (日)</div>
                    <div style="margin-left: 0.75rem; margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 1px dashed rgba(0,0,0,0.08);">
                        <div class="modal-section-title" style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem; border-bottom: none; padding-bottom: 0;">KTX 001 (東大邱 ➔ 釜山)</div>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">⏰ 時間：06:58 東大邱車站出發 ➔ 07:50 釜山車站抵達</p>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">🎫 座位：6車 1D (正向)</p>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">🎫 票號：80008-0609-10172-72</p>
                    </div>
                    <div style="margin-left: 0.75rem;">
                        <div class="modal-section-title" style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem; border-bottom: none; padding-bottom: 0;">SRT 374 (釜山 ➔ 東大邱)</div>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">⏰ 時間：21:19 釜山車站出發 ➔ 22:06 東大邱車站抵達</p>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">⏳ 乘車時間：47 分鐘</p>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">🎫 座位：4車 7C、7D (標準座位)</p>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">🎫 票號：81501-0609-10078-00 / 81501-0609-10079-56</p>
                    </div>
                </div>
                <div class="modal-date-group" style="margin-bottom: 1.5rem;">
                    <div class="modal-date-header" style="font-size: 1.1rem; font-weight: 700; color: var(--theme-daegu); margin-bottom: 0.75rem; border-left: 4px solid var(--theme-daegu); padding-left: 0.5rem;">📅 6/22 (一)</div>
                    <div style="margin-left: 0.75rem; margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 1px dashed rgba(0,0,0,0.08);">
                        <div class="modal-section-title" style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem; border-bottom: none; padding-bottom: 0;">KTX 027 (東大邱 ➔ 慶州)</div>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">⏰ 時間：13:49 東大邱出發 ➔ 14:06 慶州抵達</p>
                    </div>
                    <div style="margin-left: 0.75rem;">
                        <div class="modal-section-title" style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem; border-bottom: none; padding-bottom: 0;">KTX 066 (慶州 ➔ 東大邱)</div>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">⏰ 時間：21:35 慶州出發 ➔ 21:51 東大邱抵達</p>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">🎟️ 備註：車票現場買即可</p>
                    </div>
                </div>
                <div class="modal-date-group" style="margin-bottom: 1.5rem;">
                    <div class="modal-date-header" style="font-size: 1.1rem; font-weight: 700; color: var(--theme-daegu); margin-bottom: 0.75rem; border-left: 4px solid var(--theme-daegu); padding-left: 0.5rem;">📅 6/24 (三)</div>
                    <div style="margin-left: 0.75rem;">
                        <div class="modal-section-title" style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem; border-bottom: none; padding-bottom: 0;">KTX-CheongRyong 032 (東大邱 ➔ 首爾)</div>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">⏰ 時間：13:15 東大邱出發 ➔ 14:59 首爾抵達</p>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">🎫 座位：7車 11A、11B (正向，普通席)</p>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">💰 票價：單人 43,500 ₩ (已出票)</p>
                    </div>
                </div>
                <div class="modal-date-group">
                    <div class="modal-date-header" style="font-size: 1.1rem; font-weight: 700; color: var(--theme-daegu); margin-bottom: 0.75rem; border-left: 4px solid var(--theme-daegu); padding-left: 0.5rem;">📅 6/29 (一)</div>
                    <div style="margin-left: 0.75rem; margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 1px dashed rgba(0,0,0,0.08);">
                        <div class="modal-section-title" style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem; border-bottom: none; padding-bottom: 0;">AREX 機場直達車 (首爾 ➔ 仁川機場)</div>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">⏰ 建議班次：16:10 直達車</p>
                    </div>
                    <div style="margin-left: 0.75rem;">
                        <div class="modal-section-title" style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem; border-bottom: none; padding-bottom: 0;">中華航空 CI163 (首爾仁川 ➔ 台北桃園)</div>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">⏰ 時間：20:05 仁川 T2 出發 ➔ 21:50 桃園 T1 抵達</p>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">✈️ 航班：CI163 (航廈：ICN T2 / TPE T1)</p>
                    </div>
                </div>
            `;
    } else if (attractionIntroductions[type]) {
      modalTitle.innerText = attractionIntroductions[type].title;
      modalBody.innerHTML = attractionIntroductions[type].content;
    }

    modal.classList.add("open");
  };

  window.closeModal = function () {
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
