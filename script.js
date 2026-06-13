// 韓國旅遊行程數據
const itineraryData = [
  {
    "dayIndex": 1,
    "dateInfo": "6/21 日",
    "title": "啟程！抵達釜山與大邱",
    "items": [
      {
        "time": "06:10",
        "expense": "",
        "activity": "會合：抵達金海機場",
        "content": `
          <div class="split-transit">
            <div class="split-item">
              <div class="split-item-title">有為：從台北出發</div>
              02:40 TPE >>> 06:10 PUS<br>
              (桃園機場 ✈ 釜山金海機場)
            </div>
            <div class="split-item">
              <div class="split-item-title">尚白：從大邱出發</div>
              東大邱 ➔ 金海機場 (高速客運)<br>
              05:20 出發 (座位 21號)
            </div>
          </div>
        `,
        "notes": "",
        "category": "transit"
      },
      { "time": "07:00", "expense": "", "activity": "金海機場 > centum city站 (地鐵1hr)", "content": "", "notes": "" },
      { "time": "08:00", "expense": "", "activity": "24小時嫩豆腐鍋 완뚝순두부", "content": "https://map.naver.com/p/entry/place/2014924086", "notes": "", "introKey": "wantu_sundubu" },
      { "time": "09:00", "expense": "", "activity": "SPALAND 汗蒸幕 스파랜드 (3-4HR)", "content": "https://naver.me/5Q372Aqt\nkkday 門票|https://www.kkday.com/zh-tw/product/12213-busan-spa-land-centum-city-ticket", "notes": "" },
      { "time": "12:30", "expense": "", "activity": "新世界百貨 B1美食街 신세계백화점 B1 (1-1.5HR)", "content": "", "notes": "", "introKey": "shinsegae_food" },
      { "time": "14:00", "expense": "", "activity": "直達公車(181,1001,100)", "content": "前往海東龍宮寺 해동용궁사", "notes": "" },
      { "time": "15:00", "expense": "", "activity": "海東龍宮寺 해동용궁사 (1-1.5HR)", "content": "https://naver.me/58NdWaSm", "notes": "", "introKey": "yonggungsa" },
      { "time": "16:30", "expense": "", "activity": "計程車 > 松亭站 (10min)", "content": "", "notes": "" },
      { "time": "16:45", "expense": "", "activity": "松亭站 > 釜山院洞站 (30min)", "content": "", "notes": "" },
      { "time": "17:30", "expense": "", "activity": "薄利多銷石板韓牛 박리다매 돌판한우", "content": "https://naver.me/GOPeH9Eb", "notes": "", "introKey": "dalbeol_makchang" },
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
      { "time": "11:30", "expense": "", "activity": "慶北大學 Global Plaza 경북대학교 글로벌플라자 吃學餐", "content": "", "notes": "", "introKey": "knu_cafeteria" },
      { "time": "13:00", "expense": "", "activity": "慶北大學 경북대학교 > 東大邱站", "content": "", "notes": "" },
      { "time": "13:30", "expense": "", "activity": "東大邱站13:49 > 慶州站14:06", "content": "KTX027", "notes": "", "category": "transit" },
      { "time": "15:00", "expense": "", "activity": "慶州歷史遺址區 경주역사유적지구", "content": "", "notes": "" },
      { "time": "", "expense": "", "activity": "瞻星台 첨성대", "content": "https://naver.me/GJTiv7JT", "notes": "", "introKey": "cheomseongdae" },
      { "time": "", "expense": "", "activity": "大陵苑 대릉원", "content": "https://naver.me/x3jFNE36", "notes": "", "introKey": "daereungwon" },
      { "time": "", "expense": "", "activity": "皇理團路 황리단길 (文創 咖啡廳)", "content": "文創 咖啡廳", "notes": "" },
      { "time": "", "expense": "", "activity": "月精橋 월정교", "content": "https://naver.me/F884gjLk", "notes": "", "introKey": "woljeonggyo" },
      { "time": "", "expense": "", "activity": "東宮與月池 동궁과 월지", "content": "https://naver.me/5FmSoI8P", "notes": "", "introKey": "donggungwolji" },
      { "time": "18:30", "expense": "", "activity": "Check in Cheese 餐廳 체크인치즈 (晚餐)", "content": "https://naver.me/FmGpFKx3", "notes": "營業時間：11:00-19:30", "introKey": "checkin_cheese" },
      { "time": "20:40", "expense": "", "activity": "> 慶州站 (45min)", "content": "", "notes": "" },
      { "time": "", "expense": "", "activity": "慶州站21:35 > 東大邱站21:51", "content": "KTX066", "notes": "車票可現場買", "category": "transit" },
      { "time": "", "expense": "", "activity": "學校北門 31冰淇淋 배스킨라빈스", "content": "https://naver.me/FBeInpDj", "notes": "", "introKey": "baskin_robbins" },
      { "time": "", "expense": "", "activity": "返回慶北大學瞻星館學生宿舍 경북대학교 첨성관 住宿", "content": "https://naver.me/xgN6E7ss", "notes": "", "category": "hotel" }
    ]
  },
  {
    "dayIndex": 3,
    "dateInfo": "6/23 二",
    "title": "大邱當地美食與壽城池",
    "items": [
      { "time": "12:30", "expense": "", "activity": "撤宿舍 / 整理行李", "content": "", "notes": "" },
      { "time": "", "expense": "", "activity": "山堆美成豬肉湯飯 慶大店 (午餐)", "content": "https://naver.me/GZZdSD0G", "notes": "", "introKey": "miseong_soup" },
      { "time": "", "expense": "", "activity": "西門市場 서문시장 逛街", "content": "品嚐刀削麵、扁餃子、雞蛋飯捲等平民美食", "notes": "", "introKey": "seomun_market" },
      { "time": "", "expense": "", "activity": "東城路商圈 동성로 逛街", "content": "", "notes": "" },
      { "time": "", "expense": "", "activity": "晚餐隨機安排", "content": "", "notes": "" },
      { "time": "19:00", "expense": "", "activity": "壽城池 수성못 散步", "content": "https://naver.me/GeUR216e", "notes": "" },
      { "time": "", "expense": "", "activity": "開到半夜的景色咖啡廳 카페뷰즈 (Views)", "content": "https://naver.me/F74VCHRa", "notes": "", "introKey": "cafe_views" },
      { "time": "", "expense": "", "activity": "阿里郎韓屋旅館 아리랑", "content": "https://naver.me/xWTqQmFp", "notes": "", "category": "hotel" }
    ]
  },
  {
    "dayIndex": 4,
    "dateInfo": "6/24 三",
    "title": "KTX奔向首爾 ➔ 東大門設計之夜",
    "items": [
      { "time": "11:00", "expense": "", "activity": "河景咖啡廳 Melt 멜트", "content": "https://naver.me/xY47Oic0", "notes": "", "introKey": "cafe_melt" },
      { "time": "13:15", "expense": "", "activity": "東大邱站 13:15 > 首爾站 14:59 (KTX-CheongRyong 032)", "content": "", "notes": "", "category": "transit" },
      { "time": "15:00", "expense": "", "activity": "韓貞仙優格水果大福 한정선 (甜點)", "content": "https://naver.me/F3TtK4GA", "notes": "", "introKey": "hanjeongseon" },
      { "time": "", "expense": "", "activity": "首爾車站 > 鍾路五街", "content": "地鐵一號線 往市政廳方向", "notes": "" },
      { "time": "16:00", "expense": "", "activity": "阿博特斯泰東大門 아보트스테이 (Abbottstay)", "content": "放行李", "notes": "", "category": "hotel" },
      { "time": "16:30", "expense": "", "activity": "韓式蒸餃 乙支餃子을지만두", "content": "https://naver.me/IgJC0bG9", "notes": "營業時間：10:00-23:30", "introKey": "changhwadang" },
      { "time": "", "expense": "", "activity": "東大門綜合市場 동대문종합시장 逛街", "content": "https://naver.me/xUw1rx2F", "notes": "", "introKey": "dongdaemun_market" },
      { "time": "", "expense": "", "activity": "東大門設計廣場 동대문디자인플라자 (DDP)", "content": "https://naver.me/Fio7MOlX", "notes": "", "introKey": "ddp" },
      { "time": "", "expense": "", "activity": "清溪川 청계천 散步", "content": "https://naver.me/FK5viboB", "notes": "", "introKey": "cheonggyecheon" },
      { "time": "20:00", "expense": "", "activity": "孫家一隻雞 손가네 닭한마리 (晚餐)", "content": "https://naver.me/5FmSpbrI", "notes": "營業時間：12:00-20:25", "introKey": "songane_chicken" },
      { "time": "21:30", "expense": "", "activity": "優格世界冰淇淋 요거트월드", "content": "https://naver.me/F3TnuSG3", "notes": "營業時間：10:40-00:30", "introKey": "yogurt_world" },
      { "time": "", "expense": "", "activity": "阿博特斯泰東大門 아보트스테이 (Abbottstay)", "content": "https://naver.me/FbOvHIOu", "notes": "", "category": "hotel" }
    ]
  },
  {
    "dayIndex": 5,
    "dateInfo": "6/25 四",
    "title": "安國站文青 ➔ 景福宮與洛山城牆",
    "items": [
      { "time": "", "expense": "", "activity": "出發 > 安國站", "content": "", "notes": "" },
      { "time": "09:00", "expense": "", "activity": "ARTIST BAKERY 아티스트 베이커리 (早餐)", "content": "https://naver.me/5UEc0uzr", "notes": "營業時間：07:00-20:00", "introKey": "artist_bakery" },
      { "time": "", "expense": "", "activity": "DOTORI GARDEN 도토리가든 (橡果花園)", "content": "https://naver.me/GtURVWqh", "notes": "營業時間：08:00-23:00", "introKey": "dotori_garden" },
      { "time": "10:00", "expense": "", "activity": "北村韓屋村 북촌한옥마을 (2hr)", "content": "", "notes": "", "introKey": "bukchon" },
      { "time": "12:00", "expense": "", "activity": "安岩豬肉湯飯 안암 (午餐)", "content": "https://naver.me/5ne4qiI4", "notes": "營業時間：11:30-20:10 (可用 Tableing App 候位登記)", "introKey": "anam_soup" },
      { "time": "", "expense": "", "activity": "備選：黃生家刀削麵 황생가칼국수", "content": "https://naver.me/5Rh0K9Fx", "notes": "營業時間：11:00-20:30", "introKey": "hwangsengga" },
      { "time": "14:00", "expense": "", "activity": "景福宮 경복궁 歷史散步 (2hr)", "content": "", "notes": "", "introKey": "gyeongbokgung" },
      { "time": "", "expense": "", "activity": "前往 > 漢城大學站", "content": "", "notes": "" },
      { "time": "17:00", "expense": "", "activity": "洛山公園城牆步道 낙산공원 성곽길 看夕陽 (1hr)", "content": "https://naver.me/5l7kOk5K", "notes": "沿城牆走下坡直接到東大門站", "introKey": "naksan" },
      { "time": "18:30", "expense": "", "activity": "鯖魚蕎麥麵 喜喜 희희 (晚餐)", "content": "https://naver.me/GPdotp80", "notes": "", "introKey": "heehee_soba" },
      { "time": "19:30", "expense": "", "activity": "現代奧萊特購物中心 현대시티아울렛", "content": "https://naver.me/xDJuVEOI", "notes": "營業時間：10:00-21:00 (可視體力彈性決定是否前往)" },
      { "time": "", "expense": "", "activity": "返回阿博特斯泰東大門 아보트스테이住宿", "content": "", "notes": "", "category": "hotel" }
    ]
  },
  {
    "dayIndex": 6,
    "dateInfo": "6/26 五",
    "title": "水原華城古城巡禮",
    "items": [
      { "time": "", "expense": "", "activity": "出發 > 水原站 > 轉公車 (總車程約 1hr 40min)", "content": "", "notes": "", "category": "transit" },
      { "time": "10:30", "expense": "", "activity": "美食選擇一：鐵板炸醬麵 짜마", "content": "https://naver.me/5WOQlRxl", "notes": "兩家美食擇一品嚐", "introKey": "jjama" },
      { "time": "", "expense": "", "activity": "美食選擇二：寬烏龍 요미우돈교자", "content": "https://naver.me/5YFcfRQl", "notes": "", "introKey": "yomi_udon" },
      { "time": "12:00", "expense": "", "activity": "水原華城 수원화성", "content": "https://naver.me/FPn5j3kI", "notes": "", "introKey": "suwon_hwaseong" },
      { "time": "", "expense": "", "activity": "布魯塞爾炸薯條 브뤼셀프라이", "content": "https://naver.me/5chuHkVL", "notes": "", "introKey": "brussels_fry" },
      { "time": "", "expense": "", "activity": "水原工房街 수원공방거리 散步", "content": "https://naver.me/5apDqczw", "notes": "" },
      { "time": "", "expense": "", "activity": "慢速陽光 슬로우써니사이드 (法式吐司咖啡廳)", "content": "https://naver.me/GFB1lcib", "notes": "", "introKey": "slow_sunnyside" },
      { "time": "", "expense": "", "activity": "傳統特色茶：醍醐湯 제호탕", "content": "https://naver.me/GsBOsf0q", "notes": "不確定倒了沒，可現場確認", "introKey": "jehotang" },
      { "time": "15:00", "expense": "", "activity": "孝園之鐘 ‧ 西將臺 효원의 종 ‧ 서장대", "content": "https://naver.me/5IS5Ij80", "notes": "", "introKey": "seojangdae" },
      { "time": "", "expense": "", "activity": "水原星空圖書館 별마당도서관 (Starfield)", "content": "https://naver.me/xDJuURCj", "notes": "選去行程" },
      { "time": "", "expense": "", "activity": "華西站 > 東廟前站 (搭乘地鐵約 1hr 30min)", "content": "", "notes": "", "category": "transit" },
      { "time": "19:30", "expense": "", "activity": "五方全雞 오반정 (晚餐)", "content": "https://naver.me/5Kb342St", "notes": "", "introKey": "obanjeong" },
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
      { "time": "14:30", "expense": "", "activity": "西嶺平壤冷麵 서령 (午餐)", "content": "https://naver.me/FDnCdvaZ", "notes": "", "introKey": "seoryeong_naengmyeon" },
      { "time": "15:40", "expense": "", "activity": "我想喝抹茶 맷차 (甜點)", "content": "https://naver.me/GFB1lm4I", "notes": "", "introKey": "metcha" },
      { "time": "", "expense": "", "activity": "出發 > 弘益大學站", "content": "", "notes": "", "category": "transit" },
      { "time": "", "expense": "", "activity": "弘大商圈逛街購物", "content": "", "notes": "" },
      { "time": "", "expense": "", "activity": "買阿懶 에이랜드 (ALAND) (購物)", "content": "https://naver.me/FINIIlIV", "notes": "" },
      { "time": "20:00", "expense": "", "activity": "豬蹄與香瓜瑪格麗酒 미쓰족발 (晚餐)", "content": "https://naver.me/Gsj22rkQ", "notes": "", "introKey": "miss_jokbal" },
      { "time": "", "expense": "", "activity": "返回阿博特斯泰東大門 아보트스테이住宿", "content": "", "notes": "", "category": "hotel" }
    ]
  },
  {
    "dayIndex": 8,
    "dateInfo": "6/28 日",
    "title": "江南醫美體驗 ➔ 江南多米飯店耍廢",
    "items": [
      { "time": "11:00", "expense": "", "activity": "阿博特斯泰東大門 아보트스테이 退房", "content": "", "notes": "" },
      { "time": "11:30", "expense": "", "activity": "無垢屋 雞湯 무구옥 (午餐)", "content": "https://naver.me/FivZZffz", "notes": "", "introKey": "muguok" },
      { "time": "", "expense": "", "activity": "法國鐵板吐司 스탠다드브레드 (下午茶)", "content": "https://naver.me/53lKPriu", "notes": "", "introKey": "standard_bread" },
      { "time": "", "expense": "", "activity": "COEX Mall 星空圖書館 별마당도서관", "content": "https://naver.me/xprAqNM7", "notes": "無聊的話可以去晃晃拍照" },
      { "time": "14:00", "expense": "", "activity": "江南 Dr. Evers  닥터에버스의원", "content": "https://naver.me/xrSMzQoV", "notes": "" },
      { "time": "15:00", "expense": "", "activity": "首爾江南多米飯店 도미인 서울 강남 (Dormy Inn)", "content": "https://naver.me/5tJtlBKF", "notes": "辦理 Check-in，在飯店休息、泡溫泉耍廢", "category": "hotel" },
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

        let linkClass = "btn-accent";
        if (linkText.toLowerCase().includes("kkday")) {
          linkClass = "btn-kkday-outline";
        }

        actionButtonsHtml += `
                <a href="${linkUrl}" target="_blank" class="btn ${linkClass} btn-sm" style="margin-left: 0.5rem;">
                    <i class="ri-ticket-line"></i> ${linkText}
                </a>
            `;
      }
    }

    // 景點介紹 / 餐廳指南按鈕
    if (item.introKey) {
      let btnText = "景點介紹";
      let btnIcon = "ri-information-line";
      let btnClass = "btn-intro";

      if (attractionIntroductions[item.introKey] && attractionIntroductions[item.introKey].content.includes('ri-restaurant-line')) {
        btnText = "餐廳指南";
        btnIcon = "ri-restaurant-2-fill"; // Use a restaurant icon
        btnClass = "btn-restaurant";
      }

      actionButtonsHtml += `
        <button class="btn ${btnClass} btn-sm" style="margin-left: 0.5rem;" onclick="openModal('${item.introKey}')">
                    <i class="${btnIcon}"></i> ${btnText}
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
                        <span class="transit-route">東大邱 ➔ 金海機場 (高速客運)</span>
                        <span class="transit-time">05:20 出發<small>(座位 21號)</small></span>
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
                        <span class="transit-route">東大邱 ➔ 首爾 KTX 032</span>
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
                        <span class="transit-route">仁川 T2 ➔ 桃園 T1 (CI163)</span>
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
      <img src="images/yonggungsa.jpg" class="intro-image" alt="海東龍宮寺">
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
      <img src="images/cheomseongdae.jpg" class="intro-image" alt="瞻星台">
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
      <img src="images/daereungwon.jpg" class="intro-image" alt="大陵苑">
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
      <img src="images/woljeonggyo.jpg" class="intro-image" alt="月精橋">
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
      <img src="images/donggungwolji.jpg" class="intro-image" alt="東宮與月池">
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
      <img src="images/bukchon.jpg" class="intro-image" alt="北村韓屋村">
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
      <img src="images/gyeongbokgung.jpg" class="intro-image" alt="景福宮">
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
      <img src="images/naksan.jpg" class="intro-image" alt="洛山公園城牆">
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
      <img src="images/suwon_hwaseong.jpg" class="intro-image" alt="水原華城">
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
      <img src="images/seojangdae.jpg" class="intro-image" alt="西將臺">
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
      <img src="images/dmz.jpg" class="intro-image" alt="DMZ 非軍事區">
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
  },
  dongdaemun_market: {
    title: "🛍️ 東大門綜合市場 동대문종합시장",
    content: `
      <img src="images/dongdaemun_market.jpg" class="intro-image" alt="東大門綜合市場">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>東大門綜合市場</strong>是亞洲規模最大的專業市場之一，擁有超過50年歷史。這裡聚集了數千家批發與零售商，是韓國服飾、布料、飾品配件與手藝材料的流行發源地。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-t-shirt-line"></i> 飾品與配件天堂</h4>
          <p>市場的A棟和B棟五樓是超人氣的「飾品副料區」，販售各種耳環、項鍊、髮飾零件以及吊飾娃娃。喜愛手作或想挖寶便宜精緻飾品的人，絕對會在這裡逛到捨不得離開。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-time-line"></i> 批發與零售文化</h4>
          <p>這裡的營業時間非常特別，白天以零售為主，深夜則轉變為熱鬧非凡的批發市場，許多來自世界各地的代購都會拉著大型黑色批發袋在此穿梭，體驗韓國獨特的「東大門夜生活」。</p>
        </div>
        <div class="intro-tip">
          <i class="ri-lightbulb-line"></i> <strong>便利貼：</strong> 綜合市場內部宛如迷宮，不同樓層與棟別賣的東西都不一樣。許多批發店家不支援刷卡，請務必<strong>準備充足的現金</strong>，且部分店家可能不單賣零散商品。
        </div>
      </div>
    `
  },
  ddp: {
    title: "🛸 東大門設計廣場 DDP",
    content: `
      <img src="images/ddp.jpg" class="intro-image" alt="東大門設計廣場">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>東大門設計廣場 (DDP)</strong>由已故普立茲克建築獎得主 Zaha Hadid 設計，是世界最大規模的非標準建築。其宛如巨大銀色幽浮的外觀，已成為首爾最具代表性的現代地標。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-shape-line"></i> 無直角的流線建築</h4>
          <p>整座建築沒有任何一條直線或直角，外牆由45,133片形狀各異的鋁片拼貼而成。內部充滿未來感的迴旋步道與光影設計，不僅是設計迷的朝聖地，更是絕佳的網美拍照打卡點。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-moon-clear-line"></i> 迷人的絢麗夜景</h4>
          <p>入夜後，DDP的銀色鋁牆會透出充滿科技感的燈光。周邊經常舉辦大型展覽、首爾時裝週以及燈光秀（Seoul Light），搭配周圍不夜城的喧囂，展現首爾最前衛的一面。</p>
        </div>
        <div class="intro-tip">
          <i class="ri-lightbulb-line"></i> <strong>便利貼：</strong> DDP 內部有設計商店（DDP Design Store），可以買到許多具備高質感的韓國原創設計商品與文創小物，非常適合挑選特別的伴手禮。
        </div>
      </div>
    `
  },
  cheonggyecheon: {
    title: "🌊 清溪川 청계천",
    content: `
      <img src="images/cheonggyecheon.jpg" class="intro-image" alt="清溪川">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>清溪川</strong>是一條貫穿首爾市中心的活水河流。它曾被水泥覆蓋成為高架道路長達數十年，後經浩大的城市復育工程重見天日，成為都市中難得的生態綠洲與市民休憩聖地。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-footprint-line"></i> 城市裡的避暑散步道</h4>
          <p>沿著清澈的溪水兩側設有完善的行人步道。夏天時，您會看到許多韓國人脫下鞋子，坐在岸邊將雙腳泡在冰涼的溪水中聊天喝啤酒，享受繁華都市裡的片刻寧靜。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-magic-line"></i> 跨越歷史的二十二座橋樑</h4>
          <p>清溪川全長近6公里，上方橫跨了22座造型各異的橋樑。從清溪廣場壯觀的「彈簧」雕塑與螺旋瀑布開始，一路往下游走，夜晚點燈後水波蕩漾，浪漫氣氛滿分。</p>
        </div>
        <div class="intro-tip">
          <i class="ri-lightbulb-line"></i> <strong>便利貼：</strong> 靠近東大門區段的清溪川，步道兩側經常有街頭藝人表演，或是舉辦夜市與燈節活動。逛完東大門買宵夜來這裡坐著吃，是最道地的體驗！
        </div>
      </div>
    `
  },
  wantu_sundubu: {
    title: "🍲 24小時嫩豆腐鍋 완뚝순두부",
    content: `
      <img src="images/wantu_sundubu.jpg" class="intro-image" alt="24小時嫩豆腐鍋 완뚝순두부">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>완뚝순두부 (Wandduk Soft Tofu)</strong> 是一間主打平價、豐富配料與24小時營業的韓式連鎖餐廳。其最大特色為「點湯鍋即附贈石鍋飯」，讓顧客在享用香濃滑嫩的豆腐鍋後，還能挖出鍋底鍋巴製成熱呼呼的香醇鍋巴水享用。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌與菜單推薦</h4>
          <p>✔ <strong>招牌 완뚝순두부 (原味/招牌純豆腐鍋)</strong>：喜歡品嚐傳統濃郁黃豆香與原始鮮辣湯頭的首選。<br>✔ <strong>얼큰짬뽕순두부 (海鮮辣炒碼麵風味嫩豆腐鍋)</strong>：湯頭帶有海鮮的鮮甜與香辣滋味，是人氣極高的重口味選擇。<br>✔ <strong>차돌박이순두부 (牛肉嫩豆腐鍋)</strong>：含有豐富的牛肉片與冬粉，湯頭更加濃郁香醇，非常推薦。</p>
        </div>
      </div>
    `
  },
  shinsegae_food: {
    title: "🍱 新世界百貨 B1美食街",
    content: `
      <img src="images/shinsegae_food.jpg" class="intro-image" alt="新世界百貨 B1美食街">
      <div class="attraction-intro">
        <p class="intro-desc">釜山新世界百貨 Centum City店的B1美食街是匯集韓國排隊名店與各國美食的精華區。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 正餐與輕食推薦</h4>
          <p>✔ <strong>弘大螞蟻 (홍대개미)</strong>：韓國超人氣連鎖丼飯專賣店。<br>　 必點：<strong>炙燒牛肉丼 (스테이크 덮밥)、醬油醃蝦丼</strong>。牛肉表面微炙燒，肉質軟嫩搭配特製醬汁非常下飯。<br><br>✔ <strong>Gordon Ramsay Burger</strong>：由地獄廚神高登拉姆齊創立的頂級漢堡店。<br>　 必點：<strong>地獄漢堡 (Hell's Kitchen Burger) 或招牌薯條 (Truffle Parmesan Fries)</strong>。雖然單價較高，但牛肉多汁厚實。<br><br>✔ <strong>金老師飯捲 (바르다김선생)</strong>：主打健康、食材講究的高級紫菜包飯。<br>　 必點：<strong>經典牛肉飯捲 或 泡菜鮪魚飯捲</strong>，餡料飽滿紮實。</p>
        </div>
      </div>
    `
  },
  dalbeol_makchang: {
    title: "🥩 薄利多銷石板韓牛 박리다매 돌판한우",
    content: `
      <img src="images/dalbeol_makchang.jpg" class="intro-image" alt="薄利多銷石板韓牛">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>薄利多銷石板韓牛 東萊溫泉川店（박리다매 돌판한우 동래온천천점）</strong>是一家位於釜山東萊區、主打高性價比最高等級 1++ (투쁠) 頂級韓牛的超人氣排隊名店。餐廳名稱「薄利多銷」直接體現了其經營理念：用非常實惠的價格，讓顧客品嚐到高品質的頂級牛肉。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 主餐肉品推薦</h4>
          <p>✔ <strong>1++ 韓牛肋眼牛排（1++한우 꽃등심）</strong>：最強招牌特色！一般烤肉店會將肋眼周邊昂貴的「老饕肉」拆開高價販售，但這家店直接原汁原味大塊奉上，完美保留極致油花與濃郁肉香，入口即化。<br><br>✔ <strong>1++ 韓牛牛胸肉 / 牛五花（1++한우 차돌박이）</strong>：這裡的牛胸肉切得比一般店家更厚實大片，非常有彈性與嚼勁。店家特別細心去除純油脂部位，保留肉質與油花比例最完美的區塊，在石板上烤時散發高雅油香。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-magic-line"></i> 內行隱藏吃法</h4>
          <p>🌟 <strong>厚切牛胸肉 ＋ 鮮嫩生拌韓牛（한우육회）</strong>：老饕激推！點一份甕裝現拌鮮甜生牛肉（1++等級），將它當作熱騰騰牛胸肉的「內餡」捲起來一起吃。熱與冷、彈牙與軟嫩的極端口感在口中交織，是大受好評的魔幻吃法。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 特色後食</h4>
          <p>✔ <strong>荷葉包飯（연잎쌈밥）</strong>：充滿淡淡荷葉清香的糯米飯，非常解膩搭配。<br><br>✔ <strong>蕎麥冷麵（들기름 메밀국수）</strong>：加入香濃紫蘇油與芝麻碎的蕎麥麵，口感清爽咕溜，是烤肉後的完美結尾。</p>
        </div>
      </div>
    `
  },
  knu_cafeteria: {
    title: "🎓 慶北大學 Global Plaza 吃學餐",
    content: `
      <img src="images/knu_cafeteria.jpg" class="intro-image" alt="慶北大學 Global Plaza 吃學餐">
      <div class="attraction-intro">
        <p class="intro-desc">體驗道地韓國大學生日常的「單一白飯、國湯、主菜與多樣小菜組合」當日定食（정식）模式。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-information-line"></i> 用餐資訊</h4>
          <p>✔ <strong>位置：</strong> Global Plaza 3 樓<br>✔ <strong>營業時間：</strong> 平日（週一至週五）11:30 ~ 13:30（僅供應中午時段，週末及國定假日不營業）<br>✔ <strong>餐點價格：</strong> 每人 6,000 韓元（價格相當實惠，校外人士、外國人亦可點餐）</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 點餐方式</h4>
          <p>餐廳入口處設有<strong>無人自動點餐機（키오스크）</strong>，一律採取卡片先結帳。購買食券後，至取餐檯排隊領取當日的主食與湯品，部分小菜則採自助式夾取。</p>
        </div>
      </div>
    `
  },
  checkin_cheese: {
    title: "🧀 Check in Cheese 餐廳",
    content: `
      <img src="images/checkin_cheese.jpg" class="intro-image" alt="Check in Cheese 餐廳">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>Check in Cheese 皇理團路店</strong>是主打每日店內新鮮現做、無添加手工起司的義式餐廳。店內將招牌布拉塔起司結合低溫熟成窯烤披薩，是慶州皇理團路兼具打卡氛圍與道地美味的質感餐廳。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點餐點推薦</h4>
          <p>✔ <strong>布拉塔生火腿披薩</strong>：招牌必點！Q彈窯烤餅皮搭配生火腿、芝麻葉與整顆手工布拉塔起司，乳香流心與鹹香完美融合。<br><br>✔ <strong>布拉塔冷拌沙拉義大利麵</strong>：冰鎮麵條搭配大量生菜與酸甜醬汁，拌入新鮮布拉塔起司，清脆解膩且非常開胃。<br><br>✔ <strong>香辣鮮蝦粉紅羅德義大利麵</strong>：特調番茄鮮奶油粉紅醬搭配肥美大蝦，微辣香濃、非常涮嘴（辣度可調整）。</p>
        </div>
      </div>
    `
  },
  baskin_robbins: {
    title: "🍦 學校北門 31冰淇淋",
    content: `
      <img src="images/baskin_robbins.jpg" class="intro-image" alt="學校北門 31冰淇淋">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>31冰淇淋（Baskin-Robbins / 배스킨라빈스）</strong>除了每月的限定新品，韓國 BR 有幾款長年霸榜、甚至讓韓國人冬天也欲罷不能的「靈魂不敗款」：</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點靈魂不敗款</h4>
          <p>✔ <strong>媽媽是外星人（엄마는 외계인）</strong>：韓國銷量霸主！三種巧克力冰淇淋搭配酥脆「巧克力雙層脆球」，甜鹹交織。<br><br>✔ <strong>戀愛中的草莓（사빠딸）</strong>：起司蛋糕冰淇淋基底，融合草莓果肉、巧克力片與起司蛋糕塊，層次豐富。<br><br>✔ <strong>薄荷巧克力（민트 초콜릿 칩）</strong>：引領韓國「薄巧派」大戰的元祖！清爽薄荷搭配滿滿巧克力脆片。<br><br>✔ <strong>紐約起司蛋糕（뉴욕 치즈케이크）</strong>：純正濃郁的起司冰淇淋，吃得到扎實的手工起司蛋糕塊。<br><br>✔ <strong>杏仁糖果（아몬드 봉봉）</strong>：香草冰淇淋加入裹上巧克力的香脆杏仁果與焦糖絲，經典老少咸宜。</p>
        </div>
      </div>
    `
  },
  miseong_soup: {
    title: "🥣 山堆美成豬肉湯飯 慶大店",
    content: `
      <img src="images/miseong_soup.jpg" class="intro-image" alt="山堆美成豬肉湯飯 慶大店">
      <div class="attraction-intro">
        <p class="intro-desc">大邱慶北大學北門的高CP值名店。主打以國產豬骨熬煮12小時的濃郁白湯，肉量澎湃如山。最大亮點是設有免費無限續點的自助吧，熱騰騰的血腸、豬內臟、涼拌菜與白飯全部讓顧客吃到飽，深受學生與老饕喜愛。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 特色餐點推薦</h4>
          <p>✔ <strong>山堆特級豬肉湯飯</strong>：肉量加倍的薄切豬肉招牌湯飯。<br>✔ <strong>直火松阪豬湯飯</strong>：加入帶有炙烤焦香、口感Q彈的松阪豬肉。<br>✔ <strong>白切肉定食</strong>：軟嫩的加布里肉搭配包肉生菜，附贈熱湯。</p>
        </div>
      </div>
    `
  },
  seomun_market: {
    title: "🥟 大邱西門市場 서문시장",
    content: `
      <img src="images/seomun_market.jpg" class="intro-image" alt="大邱西門市場 서문시장">
      <div class="attraction-intro">
        <p class="intro-desc">大邱西門市場（서문시장）是韓國三大傳統市場之一，更是大邱規模最大的歷史性地標。這裡不僅是服飾、寢具與布匹的批發大本營，更是名副其實的「大邱平民美食戰場」，每到夜晚還會變身為熱鬧的夜市。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 傳統白天市場必吃推薦</h4>
          <p>✔ <strong>刀削麵 & 麵疙瘩（칼국수 & 수제비）</strong>：西門市場最著名的代表麵食。麵條與麵疙瘩多為現點現擀，口感極其Ｑ彈。搭配由鯷魚和白蘿蔔熬煮的清爽鮮甜湯底。<br><br>✔ <strong>大邱薄餃子 / 扁餃子（납작만두）</strong>：大邱著名「大邱十味」之一。水餃皮內只包裹少許冬粉與韭菜，煎到兩面微焦後淋上醬油與辣椒粉。<br><br>✔ <strong>雞蛋飯捲（계란김밥）</strong>：知名攤位 Eden飯捲的招牌。將傳統飯捲裹上蛋液後煎香，搭配辛辣泡菜一起享用。<br><br>✔ <strong>葉子手捏餃子 & 辣炒魚糕（나뭇잎형손만두 & 양념오뎅）</strong>：外型如樹葉的巨大煎餃，常與大邱特有的紅色辣炒魚糕一起販售。<br><br>✔ <strong>堅果糖餅（호떡）</strong>：排隊名店的人氣點心，外皮清爽，裡面包裹著滿滿的黑糖與堅果融漿。</p>
        </div>
      </div>
    `
  },
  cafe_views: {
    title: "☕ 景色咖啡廳 카페뷰즈",
    content: `
      <img src="images/cafe_views.jpg" class="intro-image" alt="景色咖啡廳 카페뷰즈">
      <div class="attraction-intro">
        <p class="intro-desc">營業至深夜的質感咖啡廳，擁有超大落地窗，能將整片壽城池美景（特別是春季櫻花）盡收眼底。這裡與知名麵包店合作，主打店內新鮮現烘的咖啡豆與精緻烘焙。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 3大必點餐點推薦</h4>
          <p>✔ <strong>維也納咖啡 (Einspänner)</strong>：招牌必點！現烘原豆搭配極度綿密濃厚、甜而不膩的鮮奶油，口感層次豐富。<br><br>✔ <strong>杜拜巧克力麻糬餅乾 (두바이쫀득쿠키)</strong>：熱門排隊款！融入當紅杜拜巧克力，口感扎實黏糯、可可香氣濃郁。<br><br>✔ <strong>草莓可頌 / 季節甜點</strong>：賣相極佳的視覺系甜點，香酥可頌搭配滿滿鮮奶油與草莓，和黑咖啡是絕配。</p>
        </div>
      </div>
    `
  },
  cafe_melt: {
    title: "🏞️ 河景咖啡廳 Melt 멜트",
    content: `
      <img src="images/cafe_melt.jpg" class="intro-image" alt="河景咖啡廳 Melt 멜트">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>Cafe Melt (카페 멜트)</strong>是位於大邱北區琴湖江（機場橋）旁，以絕美河景與得獎幾何建築聞名的指標性大巨型烘焙咖啡廳。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-information-line"></i> 門市簡略介紹</h4>
          <p>✔ <strong>建築設計大獎</strong>：曾榮獲 2019年大邱建築最優秀獎，獨特的清水模幾何線條外觀非常吸睛，錯落的落地窗設計讓每個座位都有不同視野。<br><br>✔ <strong>琴湖江第一排河景</strong>：整棟樓包含地下停車場共有5層（含頂樓天台），面向琴湖江與機場橋，視野毫無遮蔽，白天的綠意河景與夜晚的橋樑霓虹夜景都極美。<br><br>✔ <strong>多元放鬆空間</strong>：內部空間寬敞，高樓層設有適合靜心工作、讀書的插座座位，也有微風吹拂的戶外露台，是一座都市中的療癒空間。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 3大必點餐點推薦</h4>
          <p style="font-size:0.9rem; margin-bottom:0.5rem; color:var(--text-secondary);">店內主打現點現烘焙的各式精緻麵包，以及多達30幾種的豐富飲品選項。</p>
          <p>✔ <strong>千層酥皮與可頌類 (페이스트리/크루아상)</strong>：店內的絕對招牌！外皮烤得極致酥脆、內裡充滿濃郁高雅的奶油香氣，口感層次分明，是每次出爐都最快被掃空的品項。<br><br>✔ <strong>招牌鹽可頌 / 年輪麻糬捲 (모찌롤/소금빵)</strong>：口感扎實且帶有迷人的微鹹滋味；麻糬捲系列則是外皮Q彈、內餡綿密，與微苦的黑咖啡非常對味。<br><br>✔ <strong>五味子汽水 (오미자 에이드) / 新鮮果汁</strong>：除了水準極高的美式咖啡外，店內特調的五味子汽水酸甜清爽、色澤夢幻，是夏季消暑、不喝咖啡顧客的首選。</p>
        </div>
      </div>
    `
  },
  hanjeongseon: {
    title: "🍓 韓貞仙 綠 首爾車站店 한정선 녹 서울역점",
    content: `
      <img src="images/hanjeongseon.jpg" class="intro-image" alt="韓貞仙 綠 首爾車站店 한정선 녹 서울역점">
      <div class="attraction-intro">
        <p class="intro-desc">從聖水洞紅透半邊天的新潮韓式傳統水果大福（大福/찹쌀떡）專賣店 <strong>韓貞仙 (Han Jung Sun)</strong>。首爾車站店以「綠（녹）」為主題，坐落於 KTX 首爾站大廳 2 樓。店內主打將整顆新鮮多汁的當季水果裹入細緻豆沙與極致 Q 彈的糯米皮中，並用色彩典雅的韓國傳統韓紙手工個別包裝，精緻的高級質感使其成為現今韓國最火紅的列車點心與首爾伴手禮首選。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 推薦必點</h4>
          <p>✔ <strong>生草莓杜拜巧克力大福 (생딸기 두바이 찹쌀떡)</strong>：超級明星招牌！ 將脆口的卡達伊夫開心果杜拜巧克力、酸甜大顆的生草莓與細糯的麻糬皮完美結合，鹹甜交織且層次感驚艷，常在傍晚前就提早售罄。<br><br>✔ <strong>生草莓優格大福 (생딸기 요거트 찹쌀떡)</strong>：首爾車站店極受歡迎的限定感新口味！內餡改用濃郁略帶微酸的希臘優格質地與草莓搭配，口感像冰淇淋般滑順且完全不甜膩。<br><br>✔ <strong>生草莓大福 (생딸기 찹쌀떡) / 冰柿大福 (홍시 찹쌀떡)</strong>：初次品嚐的經典不敗款。草莓咬下立刻爆汁；而冰柿口味則是直接包入整塊香甜的冷凍柿子果肉，口感非常特別。</p>
        </div>
      </div>
    `
  },
  changhwadang: {
    title: "🥟 韓式蒸餃 乙支餃子 을지만두",
    content: `
      <img src="images/changhwadang.jpg" class="intro-image" alt="韓式蒸餃 乙支餃子 을지만두">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>乙支餃子 (을지만두)</strong>是位於東大門熱鬧商圈旁，主打每日手工現包、現點現蒸且CP值極高的老字號平價蒸餃專賣店。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 3大必點菜色</h4>
          <p>✔ <strong>馬鈴薯皮鮮肉蒸餃 (감자피고기만두)</strong>：改用馬鈴薯澱粉製作的透明外皮極其Q彈黏糯，肉餡飽滿鮮美，是店內的人氣王。<br><br>✔ <strong>鮮蝦通餃子 (새우통만두)</strong>：每顆餃子裡都包入一整條完整脆彈的鮮蝦，海鮮控絕不能錯過。<br><br>✔ <strong>傳統紅豆豆沙包 (왕찐빵/손찐빵)</strong>：手工揉製的麵皮軟Q且帶有淡淡鹹香，裡頭包入爆漿、重量感十足的綿密紅豆餡。</p>
        </div>
      </div>
    `
  },
  songane_chicken: {
    title: "🍲 孫家一隻雞 손가네 닭한마리",
    content: `
      <img src="images/songane_chicken.jpg" class="intro-image" alt="孫家一隻雞 손가네 닭한마리">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>孫家一隻雞 (손가네닭한마리)</strong>是首爾東廟站與新設洞站 (신설동역) 附近的 40 年傳統在地排隊老店，以份量十足的「蒜味炸彈」鮮甜雞湯聞名，是深受韓國當地人喜愛的超人氣隱藏版美食。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點菜色</h4>
          <p>✔ <strong>닭한마리 (一隻雞)</strong>：湯頭加入大量蒜末熬煮，越煮越濃郁，雞肉鮮嫩多汁。吃的時候一定要搭配店家特製的醬油、芥末與大量韭菜一起享用。<br><br>✔ <strong>국수사리 (刀切麵)</strong>：雞肉吃完後，絕對必點的靈魂配角。吸附了滿滿雞湯精華的麵條，Q彈濃郁，是完美的收尾。</p>
        </div>
      </div>
    `
  },
  yogurt_world: {
    title: "🍧 優格世界冰淇淋 요거트월드",
    content: `
      <img src="images/yogurt_world.jpg" class="intro-image" alt="優格世界冰淇淋 요거트월드">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>優格世界 (Yogurt World)</strong> 是韓國超人氣的連鎖甜點品牌，主打以純天然成分製成的超濃郁優格冰淇淋與純手工希臘優格，搭配豐富的生鮮水果和獨家配料，讓你可以完全自由客製化專屬的健康系甜點。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p style="font-size:0.9rem; margin-bottom:0.5rem; color:var(--text-secondary);">想要直接點店家配好的經典組合，以下是韓國網友最推的三大必點品項：</p>
          <p>✔ <strong>蜂蜜世界 (Honey World)</strong>：最經典的入門款。基底是微酸清爽的優格冰淇淋，搭配 100% 韓國產天然蜂巢蜜 (Honeycomb)、香脆格蘭諾拉麥片和香蕉，蜂巢蜜在口中爆漿的甜味與優格簡直是神仙組合。<br><br>✔ <strong>爆彈系列 (Fruit Bomb / 폭탄SET)</strong>：水果控絕對不能錯過。店家提供最高等級的生鮮水果，其中以草莓爆彈 (冬天限定)、哈密瓜爆彈和葡萄柚爆彈最受歡迎，水果堆得像小山一樣，誠意十足。<br><br>✔ <strong>奧利奧世界 (Oreo World)</strong>：巧克力控的靈魂歸屬。由奧利奧餅乾碎、布朗尼方塊、巧克力醬與棉花糖組成的美式甜點風，跟酸甜的優格冰淇淋搭配後，濃郁卻完全不覺得甜膩。</p>
        </div>
      </div>
    `
  },
  artist_bakery: {
    title: "🥐 ARTIST BAKERY 아티스트 베이커리",
    content: `
      <img src="images/artist_bakery.jpg" class="intro-image" alt="ARTIST BAKERY 아티스트 베이커리">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>ARTIST BAKERY (아티스트베이커리)</strong> 是首爾排隊神店「倫敦貝果博物館」推出的全新姐妹品牌，主打將傳統鹽可頌（鹽麵包）與法棍，化身為數十種兼具視覺藝術與極致澱粉香氣的英倫復古風麵包沙龍。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p style="font-size:0.9rem; margin-bottom:0.5rem; color:var(--text-secondary);">來到這家位於安國站的打卡地標，在玲瑯滿目的烘焙藝術品中，韓國網友與觀光客一致盛讚的四大必點菜色如下：</p>
          <p>✔ <strong>原味鹽麵包 (Plain Salt Bread)</strong>：店內雷打不動的經典基礎。特別分為「Soft（鬆軟）」與「Hard（偏硬、帶法棍嚼勁）」兩種口感。底部被奶油煎得超級酥脆，咬下去滿滿的黃油爆漿感與岩鹽的鹹香相互交織，是測試這家店實力的必吃款。<br><br>✔ <strong>香蔥蒜味奶油鹽麵包 (Spring Onion Garlic Cream Cheese)</strong>：視覺與味覺的雙重暴擊。在切開的鹽可頌內塞滿特調的爆量香蔥大蒜乳酪醬，蔥花的清甜中和了乳酪的濃厚，鹹香濃郁，在韓國社群（如 Threads）上擁有極高人氣。<br><br>✔ <strong>牛奶奶油鹽麵包 (Milk Cream Salt Bread)</strong>：甜味愛好者的 NO.1。在帶有微鹹度的酥脆麵包中，夾入像雲朵般輕盈、完全不甜膩的純淨鮮奶油，鹹甜交織的「單純美味」讓人一吃上癮。<br><br>✔ <strong>招牌番茄濃湯 (Tomato Soup)</strong>：內用絕對不能遺漏的靈魂餐點！湯頭濃郁酸甜、帶著溫和的義式香料味，熱騰騰的濃湯直接用剛出爐的鹽麵包或法棍蘸著吃，美味程度甚至超越了麵包本身。</p>
        </div>
      </div>
    `
  },
  dotori_garden: {
    title: "🐿️ DOTORI GARDEN 도토리가든",
    content: `
      <img src="images/dotori_garden.jpg" class="intro-image" alt="DOTORI GARDEN 도토리가든">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>Dotori Garden (도토리가든 안국점)</strong> 是首爾安國站極具代表性的網美咖啡廳，主打將百年老韓屋改造成彷彿吉卜力動畫般的療癒森林感小屋，提供現點現做的浮誇系蜂巢希臘優格、造型可愛的橡子果點心與全天候早午餐。店內吉祥物是一隻藍色小精靈「Tori」，走進店裡就像踏入童話世界。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p style="font-size:0.9rem; margin-bottom:0.5rem; color:var(--text-secondary);">在豐富的烘焙區與優格吧中，最受歡迎的四大必點菜色如下：</p>
          <p>✔ <strong>蜂巢蜜希臘優格碗 (Live Greek Yogurt Bowl)</strong>：店內雷打不動的 NO.1 招牌。這裡的希臘優格非常濃稠、帶有如奶油般的質地。現點現做的優格碗最上層會霸氣地放上一整塊生鮮蜂巢蜜 (Honeycomb)，點綴大量手工烤格蘭諾拉麥片與生鮮水果（如藍莓或草莓），酸甜交織、極具嚼勁，非常適合當早午餐或下午茶。<br><br>✔ <strong>橡子果瑪德蓮 (Dotori Madeleine)</strong>：呼應店名「Dotori（韓文橡子果之意）」的視覺系招牌。外觀做成超級逼真的小橡子形狀，下半部還裹了巧克力或沾醬。口味非常多樣，其中以伯爵茶（Earl Grey）與抹茶最熱門，雖然口感部分評價因人而異（偏紮實鬆散），但因為長相太可愛，幾乎每桌都會拿一盤來拍照打卡。<br><br>✔ <strong>橡子鮮奶油麵包 (Dotori Bread Plain)</strong>：麵包控的最愛。外觀同樣是放大版的橡子果外型，切開後裡面擠滿了爆量卻甜而不膩的鮮奶油，麵包體質地非常鬆軟，是店內經常一出爐就被夾光的明星麵包。<br><br>✔ <strong>鹽可頌早午餐盤 (Salt Bread Brunch / Pretzel Brunch)</strong>：如果你是早上 8 點一開門就想來吃正餐，這裡的早午餐盤水準很高。包含酥脆的招牌鹽可頌（或椒鹽捲餅麵包），搭配鬆軟的炒蛋、新鮮酪梨、培根與炒菇，再點一碗濃郁的蘑菇馬鈴薯濃湯，就是最完美的首爾晨間享受。</p>
        </div>
      </div>
    `
  },
  anam_soup: {
    title: "🍲 安岩豬肉湯飯 안암",
    content: `
      <img src="images/anam_soup.jpg" class="intro-image" alt="安岩豬肉湯飯 안암">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>安岩 (ANAM / 안암)</strong> 是首爾北村連續多年榮獲米其林必比登推介的精緻現代風湯飯店，主打顛覆傳統、融入青陽辣椒與甘藍菜綠色香油的創新視覺系豬肉湯飯，在黑白摩登的吧檯空間為饕客帶來如法式料理般優雅的味覺饗宴。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p style="font-size:0.9rem; margin-bottom:0.5rem; color:var(--text-secondary);">這家店的菜單品項極度精簡，但每一道都是精心雕琢的藝術品，店內最受歡迎的三大必點菜色如下：</p>
          <p>✔ <strong>安岩豬肉湯飯（ANAM Gukbap）</strong>：跨越傳統界線的靈魂招牌。清澈溫潤的豬骨湯底，表面漂浮著用青陽辣椒與羽衣甘藍特製的碧綠香油，視覺極其吸睛。配料大手筆選用軟嫩多汁的西班牙杜洛克（Duroc）薄切豬肩肉與兩根輕輕一撥就骨肉分離的豬肋排，米飯則混入大麥增加嚼勁。建議先喝原味清湯，再依個人喜好加入爆量香菜，最後灑上桌前的花椒粉（四川山椒），湯頭會瞬間轉化出類似東南亞或日式拉麵的異國層次感，非常神奇！<br><br>✔ <strong>岩石炸豬排（Rock Fried Pork / 바위튀김）</strong>：衝擊視覺的驚豔副餐。外觀呈現如濟州島火山玄武岩般的焦黑碳色，是利用墨魚汁麵衣包裹豬里肌肉炸至外酥內嫩。咬下去肉汁直接在口中爆發，搭配沾裹隨盤附上的蒔蘿艾利醬（Dil Aioli），酸甜溫潤、帶有優雅草本香氣，酥脆卻毫不油膩，被眾多食客盛讚美味度完全不輸主角湯飯。<br><br>✔ <strong>萊姆白切肉（Lime Jeyuk / 제육）</strong>：極具巧思的清爽肉盤。這不是傳統一整盤紅通通的韓式炒豬肉，而是類似冷盤的低溫舒肥薄切豬肉片。肉片帶有淡淡的レモングラス（香茅）香氣，食用時將一片肥瘦勻稱的豬肉包裹著旁邊附贈的香菜、紅蔥頭與萊姆沙拉一同入口，口感輕盈微酸，完美平衡了豬肉的油脂感。</p>
        </div>
        <div class="intro-tip">
          <i class="ri-lightbulb-line"></i> <strong>探店小撇步：</strong><br>
          <strong>遠端排隊：</strong>這家店僅有約 20 個吧檯座位，現場排隊往往需要等候 1 小時以上。建議在每日營業時間開始後，直接使用 [Catchtable] 或 [테이블링 (Tabling) APP] 進行線上遠端抽號碼牌，就能一邊在北村逛街一邊等進場。<br>
          <strong>特級肉量：</strong>如果食量比較大，點餐時可以加價將湯飯升級為「肉特多（고기 특）」選項，但必須在入座前一開始點餐時就決定，入座後是無法追加肉量的唷！
        </div>
      </div>
    `
  },
  hwangsengga: {
    title: "🍜 黃生家刀切麵 황생가칼국수",
    content: `
      <img src="images/hwangsengga.jpg" class="intro-image" alt="黃生家刀切麵 황생가칼국수">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>黃生家刀切麵 (황생가칼국수)</strong> 是首爾北村三清洞連續多年榮獲米其林必比登推介的傳奇老字號，主打以高檔韓牛骨、牛胸肉慢火熬製的雪白濃郁湯頭，搭配純手工現包的超大王餃子，為無數饕客帶來最正宗、溫潤的韓式傳統麵食體驗。這家緊鄰景福宮與國立現代美術館的排隊名店，菜單雖然走純樸扎實路線，但以下四大必點菜色絕對不能錯過：</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>牛骨刀切麵 (Sagol Kalguksu / 사골칼국수)</strong>：店內當之無愧的靈魂主角。湯頭使用韓牛骨與牛胸肉長時間熬煮，呈現乳白色的濃郁質感，味道卻極其溫潤清爽、毫不油膩。手工切製的麵條吸飽了牛骨精華，口感軟Q滑順，上層再鋪上炒過的櫛瓜、大蔥、洋蔥與香菇片作為高明配料，暖胃又療癒。<br><br>✔ <strong>手工大王餃子 (Wang Mandu / 왕만두)</strong>：每桌必點的爆漿副餐。每天早上由店員在門口以純熟的手速現場手工現包，餃子皮薄卻帶有嚼勁，內餡塞滿了新鮮豬肉、豆腐、蔥花與韭菜，體積巨大、內餡扎實且飽含清甜肉汁，與台灣重口味的餃子不同，走的是清爽自然的韓式家常風味。<br><br>✔ <strong>白切韓牛肉 (Hanu Suyuk / 한우수육)</strong>：老饕與多人聚餐的豪華首選。嚴選高品質的韓國產韓牛（Hanu），經過完美的火候慢燉切成薄片，肉質極其軟嫩、一入口就能品嚐到濃郁高雅的牛肉香氣，沾上一點特製醬汁或是夾著配菜一同享用，口感精緻又奢侈。<br><br>✔ <strong>夏季限定：冷豆漿麵 (Kongguksu / 콩국수)</strong>：酷暑時節的最強救星！每年夏天限定推出的冷麵，湯底是用新鮮黃豆磨製成的濃郁豆漿，並大手筆混入芝麻與花生等堅果調配，喝起來質地極度濃稠、甚至能感受到細微的豆沙顆粒，冰涼沁爽又充滿堅果醇香，是韓國人夏天最愛的消暑聖品。</p>
        </div>
      </div>
    `
  },
  heehee_soba: {
    title: "🐟 鯖魚蕎麥麵 喜喜 희희",
    content: `
      <img src="images/heehee_soba.jpg" class="intro-image" alt="鯖魚蕎麥麵 喜喜 희희">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>喜喜 (희희)</strong> 是從首爾孔德站紅透半邊天、近年遷至鐘路5街的大人氣日式純手作蕎麥麵專賣店，主打使用 100% 韓國江原道封坪蕎麥手工製麵，並搭配耗時熬製的 20 多種天然熟成日式醬油（Tsuyu），在木質調的靜謐空間裡提供極致清爽與富有層次的冷、溫蕎麥麵與熟成豬排。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p style="font-size:0.9rem; margin-bottom:0.5rem; color:var(--text-secondary);">不論是炎炎夏日還是微涼的季節，這家隱身在巷弄內的精緻日料有以下三大必點招牌：</p>
          <p>✔ <strong>烤鯖魚溫蕎麥麵 (고등어구이 온소바)</strong>：店內最具視覺衝擊與靈魂特色的 NO.1 招牌。將一整片去骨、外皮烤得金黃酥脆且富含油脂的挪威青花魚（鯖魚）直接鋪在熱騰騰的蕎麥麵上。原本擔心會有魚腥味，但融入了手作鰹魚醬油高湯後，魚肉的鮮甜與熟成醬油的煙燻香氣完美契合，熱氣讓 100% 純蕎麥麵的獨特麥香更加四溢，是老饕來店必鎖定的特色料理。<br><br>✔ <strong>炸蝦/炸大麥魚冷蕎麥麵 (튀김 냉소바)</strong>：夏日消暑的絕對首選。這裡的冷蕎麥汁是用二十多種天然食材慢火熟成，鹹甜適中、回甘帶有清香。冰鎮過的手工蕎麥麵體極具嚼勁、口感爽滑，搭配旁邊現點現炸、外衣像羽毛般酥脆且完全不油膩的大蝦天婦羅（새우튀김）或當季大麥魚（보리멸），一口冰涼麵條、一口酥脆炸物，爽口度破表。<br><br>✔ <strong>熟成里肌/腰內豬排 (돈카츠)</strong>：被眾多韓國網友笑稱「被蕎麥麵耽誤的頂級豬排專賣店」。嚴選優質的韓國產本地黑豬肉進行長時間低溫熟成，外層裹上細緻的麵包粉炸至黃金酥脆。尤其是里肌豬排（등심카츠），邊緣帶有一層豐厚的黃金油脂（비계），咬下去肉質細嫩、肉汁瘋狂噴發，沾上現磨山葵（わさび）和岩鹽，美味程度完全不輸外面的專業排隊豬排店。</p>
        </div>
      </div>
    `
  },
  jjama: {
    title: "🍝 石板炸醬 ZZAMA 돌판짜장 짜마",
    content: `
      <img src="images/jjama.jpg" class="intro-image" alt="石板炸醬 ZZAMA 돌판짜장 짜마">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>石板炸醬 ZZAMA (돌판짜장 짜마 수원행궁동본점)</strong> 是傳承三代、擁有 25 年歷史的 수원 經典老字號中餐館，主打將熱騰騰的招牌炸醬麵盛裝在 300 度的炙熱大石板上，在上桌時掀開象徵「水原華城」的特色錐形帽罩，帶來視覺與嗅覺雙重震撼的極致不熄火美味。這家從水原仁溪洞火紅到進駐行宮洞（行理團路）的排隊名店，菜單極度專精，以下三大必點招牌與絕配吃法絕對是每桌必備：</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>招牌石板炸醬麵 (Dolpan Jjajang / 돌판짜장)</strong>：全店的核心靈魂。店家會將沾滿微辣濃郁春醬的Q彈麵條盛在 300 度的石板上送上桌，掀開特色錐形罩後，香氣瞬間隨白煙爆發！配料極其浮誇，包含爆量且完全不腥的鮮嫩花枝、大蝦仁、酥炸鍋巴（누룽지）、炸餃子以及牽絲起司。因為石板的熱度，吃到最後一口都是熱騰騰的，底部還會形成焦香的特製鍋巴。<br><br>✔ <strong>白雪糯米糖醋肉 (Bakseol Tangsuyuk / 찹쌀 백설탕수육)</strong>：點餐時通常會與石板炸醬組成「雙人經典套餐」的完美配角。外觀像一朵朵白圓的雲朵（구름탕수육），外皮使用 100% 糯米麵衣炸得極致酥脆卻不油膩，裡面包著厚實、無腥味且多汁的現炸豬肉，外酥內糯的口感沾上酸甜沾醬簡稱一絕。<br><br>✔ <strong>隱藏版靈魂：自助拌飯 (Rice / 볶음밥 비빔)</strong>：這是老饕去這家店絕對不能漏掉的最後一個步驟。當石板上的炸醬麵吃得差不多時，記得去店內的自助區盛一碗白飯，倒進依然炙熱的石板上，與剩餘的炸醬、海鮮、鍋巴碎和蔬菜殘汁均勻翻炒。白飯會迅速被石板烤得像高麗菜高冷炒飯一樣高鬆，醬汁完全吸附在飯粒上，美味程度甚至常超越炸醬麵本身！</p>
        </div>
      </div>
    `
  },
  yomi_udon: {
    title: "🍜 寬烏龍 요미우돈교자",
    content: `
      <img src="images/yomi_udon.jpg" class="intro-image" alt="寬烏龍 요미우돈교자">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>YUMMY UDON GYOZA (요미우돈교자)</strong> 是席捲韓國各大商圈（如首爾延南洞、江南、水原行宮洞）的超人氣排隊日式創意食堂，主打將日本傳統的烏龍麵與日式煎餃結合韓式在地食材與新穎視覺，並在復古、充滿日式車站氛圍的洗鍊空間內，呈現口感極致Q彈的寬幅冷麵與爆醬系脆皮煎餃。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p style="font-size:0.9rem; margin-bottom:0.5rem; color:var(--text-secondary);">這家店不論哪家分店幾乎一開店就客滿，根據品牌官方公布的年度銷售熱門排行榜，以下是初訪必點的三大招牌菜色：</p>
          <p>✔ <strong>超寬幅冷烏龍麵 (Nimono Kawa Udon / 넓적우동)</strong>：當之無愧的鎮店之寶（NO.1 明星商品）！源自日本群馬縣的桐生烏龍麵（ひもかわう동），將麵條製成厚度僅 1mm、寬度卻達數公分的薄寬紙片狀。麵條整齊地鋪在冰鎮碎冰上以維持極致的嚼勁，食用時用筷子夾起一片，依序浸入隨盤附上的清爽冷鰹魚醬汁（Tsuyu）與濃郁黃金胡麻醬（참깨소스）中。那種同時具備滑溜、柔軟卻在口中回彈的獨特面體口感，全韓國極少地方能吃得到。<br><br>✔ <strong>地雞烏龍麵 (Jidori Udon / 지도리우동)</strong>：不習慣吃冷麵或遇到微涼天氣時的溫暖救星（銷售排行 NO.2）。湯底是以日本九州地方傳統手法熬製的濃郁雞骨高湯為基底，大手筆加入了帶有強烈火烤焦香的大塊雞肉、烘烤過的大蔥、表菇與多種蔬菜。熱騰騰的濃郁湯頭伴隨著強烈的煙燻炭火香氣，吸飽湯汁的手工粗圓烏龍麵扎實有嚼勁，是非常有層次感的一道經典。<br><br>✔ <strong>大阪燒風脆皮煎餃 (Okonomiyaki Gyoza / 오코노미야끼 교자)</strong>：單吃烏龍麵怕太單調時最完美的副餐選擇。店家將底部煎得像蜂巢般酥脆的金黃日式羽翼煎餃上，鋪滿了大量鮮甜爽脆的高麗菜絲，最後淋上濃郁的大阪燒醬、美乃滋，並撒上爆量跳舞的柴魚片。咬下去外皮喀擦作響，內餡則是多汁的豬肉蔬菜，搭配上方高麗菜絲的爽脆，完美中和了傳統煎餃的油膩感。</p>
        </div>
      </div>
    `
  },
  brussels_fry: {
    title: "🍟 布魯塞爾炸薯條 브뤼셀프라이",
    content: `
      <img src="images/brussels_fry.jpg" class="intro-image" alt="布魯塞爾炸薯條 브뤼셀프라이">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>布魯塞爾炸薯條 (Brussels Fries / 브뤼셀프라이 수원행궁본점)</strong> 是水原行宮洞（行理團路）風靡全網的街頭排隊美食，主打引進歐洲比利時傳統的兩次油炸工藝，提供厚實酥脆的大容量薯條，並讓饕客從 35 種以上的特製醬汁、調味粉與頂級配料中自由客製化出專屬的浮誇系散步點心。這家店緊鄰水原華城城牆，由於不設室內用餐區（純外帶專賣店），幾乎所有人都是點完後拿在手上，一邊沿著唯美的古城牆散步一邊享用。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌與黃金組合推薦</h4>
          <p style="font-size:0.9rem; margin-bottom:0.5rem; color:var(--text-secondary);">來到這裡，你可以依照以下最受韓國大胃王 Youtuber 及網友推崇的三大黃金組合與明星必點來點餐：</p>
          <p>✔ <strong>經典歐風：原味直切薯條＋惡魔醬＋蒜味美乃滋 (Straight Cut + Diablo + Garlic Dipping)</strong>：熱愛鹹香濃郁感的老饕首選。基底選用經典的「直切細薯（Straight Cut）」，剛出爐時外酥內軟。沾醬選擇微辣帶勁的比利時風味「惡魔醬（Diablo）」與極度濃郁的「蒜味美乃滋」雙醬混搭，上層再撒上墨西哥辣椒碎（Jalapeno）與帕瑪森起司粉，香辣解膩，讓人完全停不下來。<br><br>✔ <strong>美式奢華：V型契型薯條＋松露起司醬＋牛排醬 (Wedge Cut + Truffle Cheese + Steak Sauce)</strong>：馬鈴薯控的重口味天堂。將馬鈴薯帶皮切塊的「契型薯條（Wedge Cut）」能吃到更飽滿、綿密的馬鈴薯泥口感。搭配香氣極致高雅的松露起司醬與美式牛排醬，最後一定要額外加購特製培根碎（Bacon Bits）或脆洋蔥酥，多層次的酥脆口感在口中爆發，奢侈感十足。<br><br>✔ <strong>夏日靈魂伴侶：純白手工牛奶雪昔 (Milk Shake / 밀크쉐이크)</strong>：薯條區之外每人必手拿一杯的明星副餐。店家特別引進歐洲傳統配方製成濃稠、奶香極度炸裂的手工奶昔，最熱門的是純牛奶原味與香濃的焦糖花生（Caramel Peanut）口味。用熱騰騰、帶有岩鹽鹹味的薯條直接蘸著冰涼甜美的牛奶雪昔吃，這種「極致鹹甜交織（단짠）」的邪惡美式吃法在韓國社群上極度爆紅！</p>
        </div>
      </div>
    `
  },
  slow_sunnyside: {
    title: "🥞 慢速陽光 슬로우써니사이드",
    content: `
      <img src="images/slow_sunnyside.jpg" class="intro-image" alt="慢速陽光 슬로우써니사이드">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>Slow Sunny Side (슬로우써니사이드)</strong> 是水原行宮洞（行理團路）極具人氣的法式復古風歐式早午餐餐酒館，主打拒絕任何市售現成醬料，堅持全手工熬製醬汁並結合季節食材，在採光極佳且帶有歐式應客室氛圍的兩層樓老宅空間中，提供精緻的義式麵食、手工洋芋球（뇨끼）與全天候創意定食。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p style="font-size:0.9rem; margin-bottom:0.5rem; color:var(--text-secondary);">這家店因為餐點精緻、環境好拍，深受首爾和水原在地年輕人的喜愛，店內最受歡迎的三大明星菜色如下：</p>
          <p>✔ <strong>味增牛排燉飯 (Miso Steak Risotto / 미소 스테이크 리조또)</strong>：常年高居店內銷售 NO.1 的必點招牌。主廚大手筆選用美國 Prime 頂級特選牛下肩胛襯底牛排（부채살）切成骰子狀煎至完美熟度，搭配大蔥油慢火炒香的洋蔥與香菇。燉飯基底融入了帶有淡淡發酵鹹香的日式味噌調味，米粒保有極具層次感的咬勁與活潑嚼勁，牛肉的豐厚肉汁與微鹹回甘的味噌燉飯堪稱絕配。<br><br>✔ <strong>香蝦酪梨開放式三明治 (Egg Shrimp Sandwich / 에그쉬림프샌드위치)</strong>：視覺與清新風味的完美化身。在烤至酥脆的比利時切片麵包（Slap Bread）上，像藝術品般層層堆疊起新鮮魯科拉生菜（芝麻葉）、高達起司、鮮切番茄、現切酪梨，以及用大蒜黃油爆炒的Q彈鮮蝦。最後淋上店內特調的「 jalapeno 檸檬馬乃滋」，微辣微酸、清爽且份量十足。<br><br>✔ <strong>朝陽朝氣晨間套餐 (Morning Joy Set / 모닝조이 세트)</strong>：早鳥們最推薦的極高 CP 值首選。套餐由極具罪惡感的「蜜汁馬鈴薯起司吐司（허니 감자치즈 토스트）」搭配一碗香濃的「法式巧達蛤蜊濃湯（클램차우더 스프）」組成。吐司內塞滿兩種牽絲起司與綿密薯泥，沾著香氣濃郁、放滿蛤蜊肉與馬鈴薯丁的熱濃湯一起吃，非常療癒。</p>
        </div>
      </div>
    `
  },
  jehotang: {
    title: "🍵 傳統特色茶：醍醐湯 제호탕",
    content: `
      <img src="images/jehotang.jpg" class="intro-image" alt="傳統特色茶：醍醐湯 제호탕">
      <div class="attraction-intro">
        <p class="intro-desc">朝鮮宮廷的消暑秘方！由烏梅與多種韓藥材熬製而成的傳統茶飲，酸甜回甘，非常有特色。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 特色餐點推薦</h4>
          <p>✔ <strong>冰鎮醍醐湯</strong>：夏天喝非常解渴消暑。<br>✔ <strong>傳統韓菓</strong>：搭配茶飲最對味。</p>
        </div>
      </div>
    `
  },
  obanjeong: {
    title: "🍗 五方全雞 오반정",
    content: `
      <img src="images/obanjeong.jpg" class="intro-image" alt="五方全雞 오반정">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>五方全雞 (오반정)</strong> 是首爾新堂洞與東廟一帶人氣炸裂的復古風烤雞餐酒館，主打將 48 小時低溫熟成的整隻鮮雞，在 2 樓透明櫥窗內以高溫不熄火的慢火精準旋轉電烤，搭配帶有神祕發財寓意的山寨老鋪裝潢與 1 樓的清涼露天夜場氛圍。這家店甚至連《黑白大廚》林熙元主廚也曾慕名造訪，在濃郁的懷舊氛圍下，以下是韓國網友最推的三大必點招牌與靈魂副餐：</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>黃金通鸛 (Golden Chicken / 황금통닭)</strong>：店內最具代表性的當家主力。嚴選優質雞肉經過 48 小時獨家祕方熟成，在爐內烤至表皮呈現完美的黃金焦糖色。最厲害的是，它的雞肚子裡塞滿了耗時 8 小時烹調的 5 種綜合珍貴菇類與大蒜，外皮薄脆香酥、肉質極度多汁軟嫩（甚至被網友笑稱用牙齦就能輕易咬斷），吸飽菇類香氣的雞肉單吃就充滿層次。<br><br>✔ <strong>靈魂佐餐：特製酸甜韭菜拌五魚 (韭菜拌青瓜 / 오이무침)</strong>：網路上評價甚至快超越烤雞的明星副餐！這可不是一般的醃蘿蔔，而是店家特製的爆量清脆黃瓜與鮮嫩韭菜，拌入微辣帶甜的獨門韓式醬汁。口感爽脆解膩、帶點活潑的맵싹（微辣）後勁，與油脂豐厚的電烤雞一同入口，是老饕公認的靈魂吃法。<br><br>✔ <strong>香酥脆皮大麥雞前餅 (雞肉煎餅 / 닭전)</strong>：多人聚餐極力推薦的特色下酒菜。不同於傳統海鮮煎餅，店家將鮮嫩的雞肉撕成條狀與大蔥、蔬菜混和，拉薄後在鐵板上煎到極致酥脆。邊緣咬下去喀擦作響，中間卻保有雞肉的軟嫩，沾上特製的醬油沾醬，跟冰涼的生啤酒是絕配。</p>
        </div>
      </div>
    `
  },
  seoryeong_naengmyeon: {
    title: "🍜 西領總店 서령 본점",
    content: `
      <img src="images/seoryeong_naengmyeon.jpg" class="intro-image" alt="西領總店 서령 본점">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>西領總店 (Seoryung / 서령 본점)</strong> 是從江華島紅回首爾、近年連續榮獲米其林必比登推介的平壤冷麵新星神店，主打不添加一粒澱粉的 100% 純手工蕎麥麵體，搭配慢火熬製 24 小時、肉香極致濃郁的純韓牛母牛高湯，在首爾站與南大門旁掀起現象級的排隊狂潮。這家被各大美食節目（如《生活之達人》）與美食家聖經爭相報導的頂級韓食餐館，以下是每桌必點的四大天王品項：</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>西領水冷麵 (Seoryung Pure Buckwheat Noodles / 서령 순면)</strong>：當之無愧的鎮店靈魂（NO.1 明星商品）。麵條由 30 年經歷的蕎麥大師現場製作，100% 純蕎麥帶來一咬即斷、細緻高雅的獨特穀物香氣。最驚豔的是湯頭，打破傳統平壤冷麵「像抹布水」的淡蔑刻板印象，這裡的湯底使用高檔韓牛母牛慢燉，一入口清澈冰涼卻帶著非常霸道、純粹的深邃肉香，回甘極強，堪稱現代平壤冷麵的最高傑作。<br><br>✔ <strong>白切豬杭前肉 (Pork Jowl Suyuk / 항정 제육)</strong>：老饕一入座絕對先指名追加的靈魂冷盤副餐。與一般使用五花肉的白切肉不同，店家大手筆選用富含精緻油脂、口感脆彈的豬松阪肉（杭前肉/Jowl）。經過完美火候烹調後完全不油膩，口感極其軟嫩卻帶有活潑的Q彈度，夾著隨盤附贈的特製酸甜無鹽醃蘿蔔絲（무생채）與蝦醬一同入口，油脂香氣在口中瞬間化開。<br><br>✔ <strong>紫蘇油蕎麥冷麵 (Perilla Oil Buckwheat Noodles / 들기름 메밀국수)</strong>：不習慣傳統冷麵湯頭者的絕對救星。在同樣優質的 100% 純手工蕎麥麵上，淋上極致香醇、毫無油耗味的特級冷壓高山紫蘇油，並撒上爆量的烘烤細海苔酥與碎芝麻。一上桌香氣直接炸裂，均勻拌開後，紫蘇油的草本清香、海苔的鹹香與蕎麥麵的淡淡甜味在舌尖交織，非常高雅迷人。<br><br>✔ <strong>正宗平壤手工大萬壽 (Wang Mandu / 접시만두)</strong>：極高 CP 值的扎實點心。每天在店內純手工現包，外皮帶有溫和的麵香與嚼勁，內餡塞滿了新鮮豬肉、大量捏碎的豆腐與清甜的韭菜花。走的是最正宗的平壤風味——淡雅、多汁、飽滿，完全不靠厚重的調味料掩蓋食材本身的鮮甜，沾一點桌上特製的「西領醋（서령초）」，美味度會再上升一個層次。</p>
        </div>
      </div>
    `
  },
  metcha: {
    title: "🍵 맷차 METCHA 명동본점",
    content: `
      <img src="images/metcha.jpg" class="intro-image" alt="맷차 METCHA 명동본점">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>METCHA (맷차 명동본점)</strong> 是首爾明洞最具代表性的 4 層樓獨棟高質感大形咖啡廳，主打將韓國傳統文化中的「石磨（맷돌）」融入現代茶飲，現場現磨 100% 濟州島有機頂級大麥與茶葉，為抹茶控與手沖咖啡愛好者帶來極致濃郁且香氣天然的原生系飲品體驗。走進這家兼具傳統工藝與現代極簡風的店面，以下是韓國在地網友與觀光客一致瘋傳的三大必點招牌：</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>石磨抹茶鮮奶茶 (Matcha Milk Tea / 말차 밀크티)</strong>：當之無愧的鎮店靈魂（NO.1 明星商品）。店家將頂級的濟州島 100% 有機茶葉放上特製石磨，在顧客面前現場研磨成細緻的粉末，再與醇厚的鮮奶完美融合。喝起來帶有鮮明的新鮮草本香氣、微微的溫和苦甜感與回甘的細緻甜味。最棒的是，這裡的甜度可以完全客製化調整，推薦給想品嚐純粹抹茶原香的老饕。<br><br>✔ <strong>抹茶冰淇淋咖啡 (Matcha Coffee Ice Cream / 말차 커피 아이스크림)</strong>：視覺與層次感爆棚的夢幻阿芙佳朵（Affogato）。基底是店內特製的頂級手作抹茶冰淇淋，口感細緻滑順、奶香與抹香兼具。上桌時會由店員或自行淋上用石磨研磨的原豆所萃取出的香濃濃縮咖啡（Espresso）。咖啡的炭焙苦香完美中和了冰淇淋的甜度，甘甜與微苦在口中交織，美味程度甚至被網友盛讚完全不輸大牌專賣店。<br><br>✔ <strong>烘焙綠茶奶蓋拿鐵 (Roasted Green Tea Cream Latte / 볶은 녹차 크림 라떼)</strong>：如果你是不習慣抹茶草本味的人，這款是超完美的替代方案。基底是由經過高溫烘焙過、帶有濃郁焙茶（Hojicha）堅果香氣的焙茶拿鐵，最上層則鋪上一層厚厚、帶有微鹹微甜質地的綿密手作奶蓋。飲用時絕對不要攪拌，直接大口喝下，讓醇厚的奶蓋與帶有煙燻堅果香的焙茶在口中自然交融，口感極其絲滑且富有層次。</p>
        </div>
      </div>
    `
  },
  miss_jokbal: {
    title: "🍖 弘大豬腳 홍대족발",
    content: `
      <img src="images/miss_jokbal.jpg" class="intro-image" alt="弘大豬腳 홍대족발">
      <div class="attraction-intro">
        <p class="intro-desc">首爾弘大商圈的排隊美食，以皮Q肉嫩、膠質濃郁聞名，將傳統豬腳滷至入味，肥而不膩、入口即化。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 推薦必點</h4>
          <p>✔ <strong>蒜味豬腳 (마늘족발)</strong>：店內人氣第一！鋪滿厚厚一層微甜的蒜泥，解膩又提味。<br><br>✔ <strong>原味五香豬腳 (오리지널족발)</strong>：最經典的吃法，充滿漢方香氣，口感最能吃出皮的Q彈。</p>
        </div>
      </div>
    `
  },
  muguok: {
    title: "🍲 無垢屋 聖水店 무구옥 성수점",
    content: `
      <img src="images/muguok.jpg" class="intro-image" alt="無垢屋 聖水店 무구옥 성수점">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>無垢屋 聖水店（무구옥 성수점）</strong>首爾聖水洞極具人氣的北韓平壤式蔘雞湯專賣店，榮獲韓國藍緞帶（Blue Ribbon Survey）美味認證。與傳統將糯米塞入雞肚的砂鍋蔘雞湯不同，無垢屋使用傳統大型鐵鍋，將極致濃稠的雞白湯與鮮嫩雞肉分開盛裝，口感宛如法式濃湯般醇厚無腥味，是目前聖水商圈最火紅的排隊食補名店。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 推薦必點</h4>
          <p>✔ <strong>北韓式蔘雞湯定食 (이북식 삼계백반)</strong>：店內雷打不動的招牌！附有白飯、去骨嫩雞肉與一碗濃郁至極的雞白湯。隨餐附上山蔘培養根與蒜泥，建議先喝原味雞湯的甘甜，再加入人蔘和蒜頭，最後將白飯倒入湯中作湯泡飯享用。<br><br>✔ <strong>酸甜魷魚拌雞肉 (오징어 닭무침)</strong>：絕佳的涼拌配菜！酸辣爽口的魷魚與雞肉絲非常開胃，能完美中和雞湯濃郁的膠質口感，和蔘雞定食是韓國在地人認證的黃金組合。</p>
        </div>
      </div>
    `
  },
  standard_bread: {
    title: "🍞 Standard Bread 聖水店 스탠다드브레드 성수",
    content: `
      <img src="images/standard_bread.jpg" class="intro-image" alt="Standard Bread 聖水店 스탠다드브레드 성수">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>Standard Bread 聖水店（스탠다드브레드 성수）</strong>是聖水洞超高人氣的歐式鄉村風「現烤生吐司」專賣咖啡廳。店家主打「每 30 分鐘新鮮出爐」的烘焙節奏，門口設有呆萌的巨型大吐司公仔與歐式小橋流水庭院，是洗版韓國社交平台（如 IG、Threads）的知名打卡聖地。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 推薦必點</h4>
          <p>✔ <strong>焦糖布蕾法式吐司 (크림브륄레 프렌치 토스트)</strong>：店內雷打不動的 No.1 明星招牌！厚實的布里歐吐司放在鐵盤上現烤，表層是炙燒到酥脆的焦糖脆片，切開後內裡像布丁般濕潤軟嫩、入口即化。<br><br>✔ <strong>經典生吐司系列 (생식빵) 配自選抹醬</strong>：經過 100 天研發的招牌生吐司，口感極度蓬鬆、帶有濃郁奶香。現場提供多達 16 款像冰淇淋一樣色彩繽紛的創意果醬與抹醬供挑選搭配。<br><br>✔ <strong>千層紙巾吐司 (Tissue Bread)</strong>：近期非常火紅的人氣新品，麵包體層次分明，可以用手像抽紙巾一樣一片片撕下來吃，口感帶勁又富有玩味。</p>
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
                        <div class="modal-section-title" style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem; border-bottom: none; padding-bottom: 0;">高速客運 (東大邱 ➔ 金海機場)</div>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">⏰ 時間：05:20 東大邱出發 ➔ 直達金海機場</p>
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">🎫 座位：21號</p>
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
                        <p style="font-size:0.9rem; margin-bottom: 0.2rem;">💰 票價：單人 43,500 ₩</p>
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
