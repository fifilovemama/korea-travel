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
      { "time": "", "expense": "", "activity": "首爾路 7017 서울로 7017 空中花園", "content": "https://naver.me/GQ1lOwYW", "notes": "首爾站旁，可散步。高速公路改建的公園，可眺望首爾車站全景", "introKey": "seoullo_7017" },
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
        <p class="intro-desc"><strong>薄利多銷石板韓牛 東萊溫泉川店（박리다매 돌판한우 동래온천천점）</strong>是一間位於釜山東萊區、主打高 CP 值 1++（투쁠）韓牛的韓式烤肉名店。店名「薄利多銷」代表以相對親民的價格提供高等級韓牛，加上石板燒烤方式，能完整保留肉汁與牛肉香氣，因此一直是人氣很高的排隊餐廳。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌與菜單推薦</h4>
          <p>✔ <strong>1++ 韓牛肋眼（1++한우 꽃등심）</strong>：店內招牌首選。直接保留完整部位上桌，不特別拆售高級部位，油花分布均勻、肉質柔嫩，烤後能感受到濃郁牛香與細緻口感。<br><br>✔ <strong>1++ 韓牛牛胸肉／牛五花（1++한우 차돌박이）</strong>：比一般烤肉店切得更厚、更有存在感，兼具油脂香氣與肉感，放上石板後香氣特別明顯，是不少熟客固定必點。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-magic-line"></i> 推薦搭配吃法</h4>
          <p>🌟 <strong>厚切牛胸肉＋鮮嫩韓牛生拌（한우육회）</strong>：人氣組合吃法。將新鮮韓牛生拌包入剛烤好的牛胸肉一起享用，同時吃得到溫熱肉汁與滑嫩口感，層次更豐富。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 特色後食</h4>
          <p>✔ <strong>荷葉包飯（연잎쌈밥）</strong>：帶有淡淡荷葉香氣的糯米飯，搭配烤肉能平衡油膩感。<br><br>✔ <strong>紫蘇油蕎麥麵（들기름 메밀국수）</strong>：以香濃紫蘇油與芝麻提味，口感清爽，是烤肉後很受歡迎的收尾選擇。</p>
        </div>
      </div>
    `
  },
  knu_cafeteria: {
    title: "🎓 慶北大學 Global Plaza 吃學餐",
    content: `
      <img src="images/knu_cafeteria.jpg" class="intro-image" alt="慶北大學 Global Plaza 吃學餐">
      <div class="attraction-intro">
        <p class="intro-desc">��司結合低溫熟成窯烤披薩，是慶州皇理團路兼具打卡氛圍與道地美味的質感餐廳。</p>
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
        <p class="intro-desc"><strong>Cafe Melt（카페 멜트）</strong>是位於大邱北區琴湖江（機場橋）旁的超大型河景烘焙咖啡廳，以開闊景觀與獨特建築設計聞名。整體空間結合咖啡、甜點與休憩功能，不論白天或夜晚都很適合停留放鬆。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-information-line"></i> 門市特色介紹</h4>
          <p>✔ <strong>得獎建築設計</strong>：曾獲得 2019 大邱建築最優秀獎，以清水模搭配幾何線條打造外觀，大面積落地窗設計讓不同座位區都有獨特景色。<br><br>✔ <strong>琴湖江第一排景觀</strong>：整棟空間共 5 層（含地下停車場與頂樓區域），正對琴湖江與機場橋，白天能欣賞河岸景色，夜晚則可看到橋樑燈光與城市夜景。<br><br>✔ <strong>寬敞放鬆空間</strong>：館內座位豐富，高樓層設有適合讀書、工作使用的插座區，也有能享受戶外景色的露台座位，是兼具景觀與舒適度的咖啡空間。</p>
        </div>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點餐點推薦</h4>
          <p>✔ <strong>千層酥皮與可頌系列（페이스트리 / 크루아상）</strong>：店內人氣招牌。外層酥脆、內部帶有濃郁奶油香氣，層次感豐富。<br><br>✔ <strong>鹽可頌／年輪麻糬捲（소금빵 / 모찌롤）</strong>：鹽可頌帶有淡淡鹹香與紮實口感；麻糬捲則兼具Q彈外皮與柔軟內餡，是很受歡迎的甜點選擇。<br><br>✔ <strong>五味子汽水（오미자 에이드）／新鮮果汁</strong>：除了咖啡品項外，清爽果香的飲品系列也很有人氣，特別適合夏天或不喝咖啡的顧客。</p>
        </div>
      </div>
    `
  },
  hanjeongseon: {
    title: "🍓 韓貞仙 綠 首爾車站店 한정선 녹 서울역점",
    content: `
      <img src="images/hanjeongseon.jpg" class="intro-image" alt="韓貞仙 綠 首爾車站店 한정선 녹 서울역점">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>韓貞仙 首爾站店（한정선 서울역점）</strong>是從聖水洞人氣延伸而來的韓式水果大福專門店，以精緻韓式甜點風格受到歡迎。首爾站店位於 KTX 首爾站大廳 2 樓，主打將整顆新鮮水果包入細緻內餡與Q彈糯米皮，再以典雅韓紙風格包裝呈現，因此成為許多人購買列車點心與首爾伴手禮的人氣選擇。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點餐點推薦</h4>
          <p>✔ <strong>生草莓杜拜巧克力大福（생딸기 두바이 찹쌀떡）</strong>：人氣招牌款。將酥脆口感的杜拜巧克力元素結合新鮮草莓與柔軟糯米皮，甜中帶層次，是熱門口味之一。<br><br>✔ <strong>生草莓優格大福（생딸기 요거트 찹쌀떡）</strong>：以帶有微酸感的優格內餡搭配草莓，整體口感滑順清爽，不容易感到甜膩。<br><br>✔ <strong>生草莓大福（생딸기 찹쌀떡）／冰柿大福（홍시 찹쌀떡）</strong>：經典入門推薦。草莓口味果香鮮明；冰柿版本則帶有冷凍柿子的綿密果肉口感，風味相當有特色。</p>
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
        <p class="intro-desc"><strong>優格世界（Yogurt World）</strong>是韓國人氣連鎖優格甜點品牌，主打以濃郁優格冰淇淋與手工希臘優格為基底，搭配多種新鮮水果與配料自由組合，整體風格偏向清爽、健康系甜點，因此深受年輕族群喜愛。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>蜂蜜世界（Honey World）</strong>：經典入門首選。以酸甜優格冰淇淋搭配天然蜂巢蜜、格蘭諾拉麥片與香蕉，蜂蜜香氣與優格酸度平衡，是品牌代表性組合。<br><br>✔ <strong>爆彈系列（Fruit Bomb／폭탄 SET）</strong>：水果控推薦必點。使用大量新鮮水果搭配優格，其中以草莓爆彈（季節限定）、哈密瓜爆彈與葡萄柚爆彈最受歡迎，水果份量豐富、口感清爽。<br><br>✔ <strong>奧利奧世界（Oreo World）</strong>：適合喜歡濃郁甜點的人。以奧利奧碎片、布朗尼、巧克力醬與棉花糖搭配優格冰淇淋，甜度與酸味相互平衡，整體不會過於厚重。</p>
        </div>
      </div>
    `
  },
  artist_bakery: {
    title: "🥐 ARTIST BAKERY 아티스트 베이커리",
    content: `
      <img src="images/artist_bakery.jpg" class="intro-image" alt="ARTIST BAKERY 아티스트 베이커리">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>ARTIST BAKERY（아티스트베이커리）</strong>是首爾人氣品牌「倫敦貝果博物館」推出的姐妹烘焙品牌，以鹽麵包與法棍為核心，結合英倫復古風格與精緻烘焙概念，打造兼具外觀與口感的特色麵包店，因此成為安國站一帶相當熱門的排隊名店。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>原味鹽麵包（Plain Salt Bread）</strong>：店內經典必吃款，提供 Soft（鬆軟） 與 Hard（較有嚼勁） 兩種口感選擇。外層酥香、底部帶有奶油煎烤香氣，搭配岩鹽風味，能吃到最純粹的麵包特色。<br><br>✔ <strong>香蔥蒜味奶油乳酪鹽麵包（Spring Onion Garlic Cream Cheese）</strong>：人氣創意口味。將香蔥與蒜香乳酪醬大量填入麵包中，蔥香與奶香平衡，口味濃郁卻不厚重，是許多人推薦的熱門品項。<br><br>✔ <strong>牛奶奶油鹽麵包（Milk Cream Salt Bread）</strong>：甜系代表口味。酥脆麵包夾入滑順鮮奶油，利用微鹹與奶香形成層次感，整體口感輕盈不甜膩。<br><br>✔ <strong>招牌番茄濃湯（Tomato Soup）</strong>：內用推薦搭配。番茄風味濃郁、帶有淡淡香料香氣，搭配剛出爐的鹽麵包或法棍一起享用，是很受歡迎的組合。</p>
        </div>
      </div>
    `
  },
  dotori_garden: {
    title: "🐿️ DOTORI GARDEN 도토리가든",
    content: `
      <img src="images/dotori_garden.jpg" class="intro-image" alt="DOTORI GARDEN 도토리가든">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>Dotori Garden（도토리가든 안국점）</strong>是首爾安國站人氣很高的韓屋風咖啡廳，將傳統韓屋空間結合森林感與童話氛圍，打造出溫暖療癒的用餐環境。店內以現做希臘優格、特色烘焙與全天候早午餐聞名，也是許多人到北村、安國一帶會安排造訪的熱門咖啡廳。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>蜂巢蜜希臘優格碗（Live Greek Yogurt Bowl）</strong>：店內代表餐點。以濃厚滑順的希臘優格為基底，搭配整塊蜂巢蜜、手工格蘭諾拉與新鮮水果，酸甜平衡且層次豐富，很適合作為早午餐或下午茶。<br><br>✔ <strong>橡子果瑪德蓮（Dotori Madeleine）</strong>：呼應品牌特色的招牌甜點。以橡子造型呈現，口味選擇多樣，其中伯爵茶與抹茶最受歡迎，外型精緻、拍照辨識度很高。<br><br>✔ <strong>橡子鮮奶油麵包（Dotori Bread Plain）</strong>：人氣烘焙品項。鬆軟麵包搭配份量充足的鮮奶油內餡，整體口感輕盈、不會過甜，是許多人必拿的熱門選擇。<br><br>✔ <strong>鹽可頌早午餐盤（Salt Bread Brunch／Pretzel Brunch）</strong>：想吃正餐時很推薦。以鹽可頌或椒鹽捲搭配炒蛋、酪梨、培根與配菜，整體份量完整，也很適合當作首爾旅行的早餐選擇。</p>
        </div>
      </div>
    `
  },
  anam_soup: {
    title: "🍲 安岩豬肉湯飯 안암",
    content: `
      <img src="images/anam_soup.jpg" class="intro-image" alt="安岩豬肉湯飯 안암">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>安岩（ANAM／안암）</strong>是位於首爾北村、連續多年獲得米其林必比登推介的人氣湯飯店，以現代手法重新詮釋韓式豬肉湯飯。店內空間以簡潔摩登風格呈現，結合精緻擺盤與創新風味，帶來不同於傳統湯飯店的用餐體驗。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>安岩豬肉湯飯（ANAM Gukbap）</strong>：店內代表招牌。以溫潤豬骨湯為基底，搭配青陽辣椒與綠色香油點綴，湯頭層次豐富。配料使用柔嫩豬肉與燉煮入味的排骨，搭配加入大麥的米飯，整體口感更有層次。建議先品嚐原味，再依喜好加入香菜與調味粉，風味變化更明顯。<br><br>✔ <strong>岩石炸豬排（Rock Fried Pork／바위튀김）</strong>：人氣副餐選擇。外層炸衣酥脆、內部保有肉汁，搭配特製蒔蘿風味醬料，整體口感濃郁卻不厚重，是許多人會一起加點的熱門品項。<br><br>✔ <strong>萊姆白切肉（Lime Jeyuk／제육）</strong>：清爽風格肉料理。以薄切豬肉搭配香草、洋蔥與萊姆風味配料，利用微酸與清新的層次平衡肉香，適合作為搭配湯飯共享享用。</p>
        </div>
      </div>
    `
  },
  hwangsengga: {
    title: "🍜 黃生家刀切麵 황생가칼국수",
    content: `
      <img src="images/hwangsengga.jpg" class="intro-image" alt="黃生家刀切麵 황생가칼국수">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>黃生家刀切麵（황생가칼국수）</strong>是位於首爾北村三清洞、連續多年獲得米其林必比登推介的韓式傳統麵食名店，以濃郁卻溫和的韓牛骨湯頭與手工製作料理聞名。鄰近景福宮與國立現代美術館，是許多人安排北村散步時會順道造訪的人氣餐廳。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>牛骨刀切麵（Sagol Kalguksu／사골칼국수）</strong>：店內經典招牌。以韓牛骨與牛肉長時間熬製出乳白色湯底，風味濃厚卻不油膩，搭配手工刀切麵與蔬菜配料，口感滑順、很有韓式家常湯麵特色。<br><br>✔ <strong>手工大王餃子（Wang Mandu／왕만두）</strong>：人氣必點副餐。每日現包製作，餃子尺寸飽滿，內餡以豬肉、豆腐與蔬菜搭配，整體口味偏清爽，與牛骨湯麵特別適合一起享用。<br><br>✔ <strong>白切韓牛肉（Hanu Suyuk／한우수육）</strong>：適合多人分食的推薦品項。將韓牛慢燉後切片呈現，肉質柔嫩，能吃到牛肉本身的香氣與口感層次。<br><br>✔ <strong>夏季限定冷豆漿麵（Kongguksu／콩국수）</strong>：夏天熱門限定餐點。以現磨黃豆製成濃郁豆漿湯底，入口帶有自然豆香與滑順口感，是韓國夏季很具代表性的消暑料理。</p>
        </div>
      </div>
    `
  },
  heehee_soba: {
    title: "🐟 鯖魚蕎麥麵 喜喜 희희",
    content: `
      <img src="images/heehee_soba.jpg" class="intro-image" alt="鯖魚蕎麥麵 喜喜 희희">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>喜喜（희희）</strong>是位於首爾鐘路一帶的人氣日式蕎麥麵專門店，以手工蕎麥麵與細緻日式定食風格受到歡迎。店內主打使用 100% 韓國江原道封坪蕎麥製作麵體，搭配熟成日式醬汁與安靜溫暖的木質空間，提供兼具清爽與層次感的蕎麥料理。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>烤鯖魚溫蕎麥麵（고등어구이 온소바）</strong>：店內代表餐點。將炙烤後香氣濃郁的鯖魚搭配熱蕎麥麵與日式高湯，魚肉油脂與湯頭融合後風味溫潤，能同時感受到魚香與蕎麥麵本身的麥香。<br><br>✔ <strong>炸蝦／炸大麥魚冷蕎麥麵（튀김 냉소바）</strong>：夏季人氣選擇。冰鎮手工蕎麥麵搭配熟成冷麵醬汁，口感清爽有彈性，再配上現炸天婦羅，兼具酥脆與清涼感，很適合天氣較熱時享用。<br><br>✔ <strong>熟成里肌／腰內豬排（돈카츠）</strong>：店內另一項高人氣品項。使用熟成豬肉搭配細緻麵衣油炸，外酥內嫩、肉汁飽滿，搭配山葵與鹽品嚐能更凸顯肉香，也是許多人會加點的推薦料理。</p>
        </div>
      </div>
    `
  },
  jjama: {
    title: "🍝 石板炸醬 ZZAMA 돌판짜장 짜마",
    content: `
      <img src="images/jjama.jpg" class="intro-image" alt="石板炸醬 ZZAMA 돌판짜장 짜마">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>石板炸醬 ZZAMA（돌판짜장 짜마 수원행궁동본점）</strong>是位於水原行宮洞、擁有多年歷史的人氣中式餐館，以高溫石板料理方式打造特色炸醬麵聞名。招牌料理會以高溫石板直接上桌，不只保留熱度，也讓整體用餐體驗更具特色，因此成為行宮洞相當熱門的排隊名店。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>招牌石板炸醬麵（Dolpan Jjajang／돌판짜장）</strong>：店內代表餐點。將炸醬麵盛裝於高溫石板上，搭配海鮮、蔬菜與豐富配料一起拌炒，麵條能持續維持熱度，最後還會形成微微焦香的鍋巴口感，是來店最推薦的品項。<br><br>✔ <strong>白雪糯米糖醋肉（Bakseol Tangsuyuk／찹쌀 백설탕수육）</strong>：熱門搭配副餐。以糯米麵衣製作出酥脆外層，搭配厚實豬肉與酸甜醬汁，外酥內嫩，是許多人會一起搭配炸醬麵享用的組合。<br><br>✔ <strong>自助拌飯吃法（볶음밥 비빔）</strong>：店內人氣隱藏吃法。當炸醬麵吃到後段時，可搭配白飯加入仍有餘溫的石板中與剩餘醬汁一起拌勻，讓米飯吸收醬香與配料風味，形成不同層次的收尾吃法。</p>
        </div>
      </div>
    `
  },
  yomi_udon: {
    title: "🍜 寬烏龍 요미우돈교자",
    content: `
      <img src="images/yomi_udon.jpg" class="intro-image" alt="寬烏龍 요미우돈교자">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>YUMMY UDON GYOZA（요미우돈교자）</strong>是韓國人氣很高的日式創意食堂品牌，在首爾延南洞、江南與水原行宮洞等地都有分店。店內以特色烏龍麵與日式煎餃為核心，結合日韓風味與復古車站氛圍空間，因此成為年輕族群很喜歡的人氣排隊店。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>超寬幅冷烏龍麵（Nimono Kawa Udon／넓적우동）</strong>：店內代表餐點。使用超寬版烏龍麵搭配冰鎮方式呈現，麵體口感滑順又有彈性，可搭配冷醬汁與胡麻醬享用，清爽又很有特色。<br><br>✔ <strong>地雞烏龍麵（Jidori Udon／지도리우동）</strong>：適合喜歡熱食的人。以濃郁雞高湯為基底，搭配炙烤雞肉、蔬菜與手工烏龍麵，整體風味溫潤且層次豐富，是店內高人氣品項之一。<br><br>✔ <strong>大阪燒風脆皮煎餃（Okonomiyaki Gyoza／오코노미야끼 교자）</strong>：推薦一起搭配的副餐。酥脆煎餃搭配高麗菜絲、大阪燒醬與柴魚片，兼具香氣與口感層次，能平衡烏龍麵的整體風味。</p>
        </div>
      </div>
    `
  },
  brussels_fry: {
    title: "🍟 布魯塞爾炸薯條 브뤼셀프라이 수원행궁본점",
    content: `
      <img src="images/brussels_fry.jpg" class="intro-image" alt="布魯塞爾炸薯條 브뤼셀프라이 수원행궁본점">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>布魯塞爾炸薯條（Brussels Fries／브뤼셀프라이 수원행궁본점）</strong>是位於水原行宮洞的人氣街頭美食店，以比利時風格炸薯條與多樣客製化搭配聞名。店內主打雙重油炸工法製作厚實酥脆的薯條，並提供多種醬料與配料自由組合，很適合買著邊走邊逛水原華城。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>經典直切薯條＋惡魔醬＋蒜味美乃滋（Straight Cut + Diablo + Garlic Dipping）</strong>：經典人氣組合。直切薯條外酥內鬆，搭配帶有微辣風味的醬料與蒜香美乃滋，鹹香層次豐富，是第一次造訪很適合嘗試的搭配。<br><br>✔ <strong>契型薯條＋松露起司醬＋牛排醬（Wedge Cut + Truffle Cheese + Steak Sauce）</strong>：喜歡濃郁風味的人推薦。厚切帶皮薯條能吃到更明顯的馬鈴薯口感，搭配松露起司與醬料後風味更有層次，也常會再加點培根碎或脆洋蔥增加口感。<br><br>✔ <strong>手工牛奶雪昔（Milk Shake／밀크쉐이크）</strong>：店內人氣飲品。口感濃厚滑順，牛奶與焦糖花生口味都很受歡迎，也很適合搭配熱薯條一起享用，形成經典鹹甜組合。</p>
        </div>
      </div>
    `
  },
  slow_sunnyside: {
    title: "🍳 Slow Sunny Side 슬로우써니사이드",
    content: `
      <img src="images/slow_sunnyside.jpg" class="intro-image" alt="Slow Sunny Side 슬로우써니사이드">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>Slow Sunny Side（슬로우써니사이드）</strong>是位於水原行宮洞的人氣歐式早午餐餐酒館，以法式復古氛圍與手工料理受到歡迎。店內強調自製醬料與季節食材搭配，在明亮舒適的老宅空間中提供義式料理、創意早午餐與特色定食，是當地很受歡迎的聚餐與拍照餐廳。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>味增牛排燉飯（Miso Steak Risotto／미소 스테이크 리조또）</strong>：店內人氣代表餐點。將香煎牛排搭配味噌風味燉飯呈現，米飯保有口感層次，搭配牛肉香氣與微鹹發酵風味，整體濃郁卻不厚重。<br><br>✔ <strong>香蝦酪梨開放式三明治（Egg Shrimp Sandwich／에그쉬림프샌드위치）</strong>：清爽系人氣餐點。以烤麵包搭配鮮蝦、酪梨、生菜與起司，再加入特製醬料提味，口感豐富且份量充足。<br><br>✔ <strong>朝陽朝氣晨間套餐（Morning Joy Set／모닝조이 세트）</strong>：適合早餐或早午餐時段享用。組合包含起司馬鈴薯吐司與濃湯，兼具飽足感與溫暖風味，是店內熱門套餐選擇。</p>
        </div>
      </div>
    `
  },
  jehotang: {
    title: "☕ 韓國傳統茶飲 醍醐湯 제호탕",
    content: `
      <img src="images/jehotang.jpg" class="intro-image" alt="韓國傳統茶飲 醍醐湯 제호탕">
      <div class="attraction-intro">
        <p class="intro-desc">以朝鮮宮廷傳統茶文化為靈感，主打以烏梅與多種韓方材料熬製而成的特色茶飲，入口帶有自然酸甜與回甘層次，是韓國相當具代表性的傳統消暑飲品。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 特色餐點推薦</h4>
          <p>✔ <strong>冰鎮醍醐湯</strong>：店內人氣招牌。以冰涼方式呈現，酸甜清爽、口感溫潤，很適合夏天飲用。<br><br>✔ <strong>傳統韓菓</strong>：推薦搭配茶飲一起享用。以樸實細緻的甜味襯托茶香，更能感受韓式傳統點心的風味特色。</p>
        </div>
      </div>
    `
  },
  obanjeong: {
    title: "🍗 五方全雞 오반정",
    content: `
      <img src="images/obanjeong.jpg" class="intro-image" alt="五方全雞 오반정">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>五方全雞（오반정）</strong>是位於首爾新堂洞與東廟一帶的人氣烤雞餐酒館，以復古氛圍與現烤整雞聞名。店內主打經過熟成處理的整隻雞，再以旋轉烤爐慢火烘烤，打造外酥內嫩的口感，加上懷舊風格空間與戶外座位氛圍，成為當地相當受歡迎的聚餐選擇。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>黃金通雞（Golden Chicken／황금통닭）</strong>：店內招牌代表餐點。整隻雞經熟成後慢火烘烤至金黃色澤，外皮酥香、肉質柔嫩多汁，並搭配菇類與蒜香風味，層次感豐富，是第一次造訪最推薦的選擇。<br><br>✔ <strong>特製黃瓜韭菜拌菜（오이무침）</strong>：人氣搭配小菜。以清脆黃瓜與韭菜拌入酸甜微辣醬汁，口感清爽解膩，很適合搭配烤雞一起享用。<br><br>✔ <strong>雞肉煎餅（닭전）</strong>：多人共享推薦副餐。將雞肉與蔬菜製成煎餅，外層酥脆、內部保有柔嫩口感，搭配醬汁後風味更完整，也是常見的下酒料理選擇。</p>
        </div>
      </div>
    `
  },
  seoryeong_naengmyeon: {
    title: "🍜 西領總店 서령 본점",
    content: `
      <img src="images/seoryeong_naengmyeon.jpg" class="intro-image" alt="西領總店 서령 본점">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>西領總店（Seoryung／서령 본점）</strong>是從江華島發展至首爾、近年獲得米其林必比登推介的人氣平壤冷麵專門店，以 100% 純蕎麥手工麵 與長時間熬製的韓牛高湯聞名。店內以現代方式呈現平壤冷麵風格，保留清爽細膩的特色，同時帶出更鮮明的層次感，因此成為首爾站周邊熱門韓食名店之一。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>西領水冷麵（Seoryung Pure Buckwheat Noodles／서령 순면）</strong>：店內代表餐點。使用純手工蕎麥麵製作，麵體帶有自然穀物香氣與細緻口感，搭配韓牛高湯呈現清爽卻富有深度的風味，是第一次造訪最推薦的選擇。<br><br>✔ <strong>白切豬杭前肉（Pork Jowl Suyuk／항정 제육）</strong>：人氣冷盤副餐。選用油脂分布均勻的部位慢火料理，肉質柔嫩又保有口感，搭配蘿蔔絲與醬料一起享用更能提升整體層次。<br><br>✔ <strong>紫蘇油蕎麥冷麵（Perilla Oil Buckwheat Noodles／들기름 메밀국수）</strong>：不想選湯麵時的人氣品項。將純蕎麥麵搭配紫蘇油、海苔與芝麻拌勻，香氣清新、口感滑順，能更直接感受到蕎麥本身的風味。<br><br>✔ <strong>平壤手工大餃子（Wang Mandu／접시만두）</strong>：推薦搭配享用的經典副餐。每日手工製作，內餡以豬肉、豆腐與蔬菜為主，風味清爽自然，很適合搭配冷麵一起享用。</p>
        </div>
      </div>
    `
  },
  metcha: {
    title: "🍵 METCHA 맷차 명동본점",
    content: `
      <img src="images/metcha.jpg" class="intro-image" alt="METCHA 맷차 명동본점">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>METCHA（맷차 명동본점）</strong>是位於首爾明洞的人氣大型茶飲咖啡廳，以韓國傳統「石磨（맷돌）」概念結合現代茶文化聞名。店內主打現場研磨茶葉與穀物製作飲品，透過簡約空間與細緻工藝，提供濃郁且保留原始香氣的抹茶與咖啡體驗，是抹茶愛好者很受歡迎的造訪地點。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 必點招牌推薦</h4>
          <p>✔ <strong>石磨抹茶鮮奶茶（Matcha Milk Tea／말차 밀크티）</strong>：店內代表飲品。以現場研磨的濟州茶葉搭配鮮奶製作，能喝到明顯茶香與自然回甘，整體濃郁卻不厚重，也可依喜好調整甜度。<br><br>✔ <strong>抹茶冰淇淋咖啡（Matcha Coffee Ice Cream／말차 커피 아이스크림）</strong>：人氣甜點系飲品。以抹茶冰淇淋搭配濃縮咖啡呈現，融合茶香、奶香與咖啡苦韻，層次感豐富，很適合喜歡阿芙佳朵風格的人。<br><br>✔ <strong>烘焙綠茶奶蓋拿鐵（Roasted Green Tea Cream Latte／볶은 녹차 크림 라떼）</strong>：不習慣抹茶苦韻時推薦選擇。以焙茶風味拿鐵搭配綿密奶蓋，整體帶有淡淡堅果與茶香，口感滑順、接受度也較高。</p>
        </div>
      </div>
    `
  },
  miss_jokbal: {
    title: "🐷 豬腳小姐 미쓰족발",
    content: `
      <img src="images/miss_jokbal.jpg" class="intro-image" alt="豬腳小姐 미쓰족발">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>豬腳小姐（미쓰족발）</strong>是首爾弘大商圈的人氣豬腳名店，以滷製入味、皮Q肉嫩的韓式豬腳聞名。透過長時間燉煮讓膠質充分釋放，整體口感柔嫩卻不油膩，因此成為許多人到弘大必吃的經典韓式美食之一。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 推薦必點</h4>
          <p>✔ <strong>蒜味豬腳（마늘족발）</strong>：店內人氣首選。將豬腳鋪上大量蒜泥醬料，帶有微甜蒜香，能平衡豬腳的油脂感，整體風味更加順口。<br><br>✔ <strong>原味五香豬腳（오리지널족발）</strong>：經典必吃口味。以傳統方式燉滷，保留豬腳本身的香氣與膠質口感，更能感受到外皮Q彈與肉質的層次。</p>
        </div>
      </div>
    `
  },
  muguok: {
    title: "🍲 無垢屋 聖水店 무구옥 성수점",
    content: `
      <img src="images/muguok.jpg" class="intro-image" alt="無垢屋 聖水店 무구옥 성수점">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>無垢屋 聖水店（무구옥 성수점）</strong>是首爾聖水洞人氣很高的北韓平壤式蔘雞湯專門店，並獲得韓國藍緞帶美食認證。不同於傳統將糯米填入雞腹燉煮的蔘雞湯，店內以濃郁雞白湯搭配分開呈現的嫩雞料理為特色，整體風味溫潤濃厚卻不厚重，是聖水相當受歡迎的韓式食補料理之一。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 推薦必點</h4>
          <p>✔ <strong>北韓式蔘雞湯定食（이북식 삼계백반）</strong>：店內招牌餐點。包含濃郁雞白湯、嫩雞肉與白飯，建議先品嚐原味湯頭，再依喜好加入人蔘與蒜泥，最後搭配白飯一起享用，更能感受到湯底層次與雞肉香氣。<br><br>✔ <strong>酸甜魷魚拌雞肉（오징어 닭무침）</strong>：人氣搭配小菜。以魷魚與雞肉拌入酸甜微辣調味，口感清爽開胃，能平衡雞湯的濃厚感，也是許多人推薦一起搭配的組合。</p>
        </div>
      </div>
    `
  },
  standard_bread: {
    title: "🍞 Standard Bread 聖水店 스탠다드브레드 성수",
    content: `
      <img src="images/standard_bread.jpg" class="intro-image" alt="Standard Bread 聖水店 스탠다드브레드 성수">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>Standard Bread 聖水店（스탠다드브레드 성수）</strong>是首爾聖水洞高人氣的現烤生吐司咖啡廳，以歐式鄉村風空間與定時出爐的烘焙方式聞名。店內主打柔軟濕潤的生吐司與創意甜點，加上充滿氛圍感的庭院設計與大型吐司裝置，成為聖水相當熱門的打卡咖啡廳之一。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 推薦必點</h4>
          <p>✔ <strong>焦糖布蕾法式吐司（크림브륄레 프렌치 토스트）</strong>：店內人氣招牌。厚切吐司現烤後覆蓋炙燒焦糖表層，外層帶有酥脆口感，內部柔軟濕潤，整體像甜點般細緻。<br><br>✔ <strong>經典生吐司系列（생식빵）＋自選抹醬</strong>：招牌必吃品項。生吐司口感鬆軟、奶香明顯，可依喜好搭配不同風味抹醬，能感受到麵包本身的細緻風味。<br><br>✔ <strong>千層紙巾吐司（Tissue Bread）</strong>：近期人氣餐點。麵包層次豐富，可一層層撕開享用，兼具口感與趣味性，很適合多人一起分享。</p>
        </div>
      </div>
    `
  },
  seoullo_7017: {
    title: "🌳 首爾路 7017 서울로 7017 空中花園",
    content: `
      <img src="images/7017.jpg" class="intro-image" alt="首爾路 7017 서울로 7017 空中花園">
      <div class="attraction-intro">
        <p class="intro-desc"><strong>首爾路 7017（서울로 7017）</strong>是將舊有首爾站高架道路改造而成的空中花園步道。名稱中的「70」代表高架橋建成的1970年，「17」則代表重生的2017年。這條長達一公里多的綠色步道種植了豐富多樣的植物，不僅是市民休憩的好去處，更將首爾站周邊被切斷的動線重新連接，是首爾最具代表性的都市更新計畫之一。</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-camera-lens-line"></i> 必看亮點推薦</h4>
          <p>✔ <strong>空中庭園漫步</strong>：步道兩側種植了數百種植物，四季都有不同的花草景觀，沿途還設有咖啡廳、觀景台與供人休息的長椅，非常適合散步。<br><br>✔ <strong>首爾站夜景（夜間點燈）</strong>：到了夜晚，步道會點亮夢幻的藍色燈光，從這裡俯瞰首爾站、崇禮門與周邊繁華的城市夜景，是攝影愛好者的必拍取景地。<br><br>✔ <strong>周邊景點串聯</strong>：首爾路 7017 連接著南大門市場、明洞、南山等多個重要景點，讓旅客可以輕鬆步行穿梭於首爾的歷史與現代區域之間。</p>
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
