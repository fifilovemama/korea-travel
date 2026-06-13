const fs = require('fs');

const data = {
  wantu_sundubu: {
    title: "🍲 24小時嫩豆腐鍋 완뚝순두부",
    desc: "釜山在地人也推薦的平價熱門豆腐鍋！無論是清晨抵達或是深夜肚子餓，這裡熱騰騰、滑嫩香辣的豆腐鍋隨時等著溫暖你的胃。",
    items: "✔ <strong>招牌海鮮嫩豆腐鍋</strong>：湯頭鮮甜微辣，豆腐滑嫩。<br>✔ <strong>起司雞蛋捲</strong>：份量十足，起司濃郁牽絲。"
  },
  shinsegae_food: {
    title: "🍱 新世界百貨 B1美食街",
    desc: "位於釜山新世界百貨地下室，匯集全韓知名餐飲品牌與超人氣甜點的美食綠洲。",
    items: "✔ <strong>各式散步甜點</strong>：逛街中途補充體力的最佳選擇。<br>✔ <strong>在地小吃拼盤</strong>：一次品嚐多種道地口味。"
  },
  dalbeol_makchang: {
    title: "🥩 石板韓牛 달벌생막창",
    desc: "大邱超人氣的烤牛腸與韓牛專賣店！用特製石板高溫炙烤，將油脂逼出，留下滿滿焦香與酥脆口感。",
    items: "✔ <strong>綜合烤腸拼盤</strong>：牛大腸、小腸一次滿足。<br>✔ <strong>大蒜調味牛腸</strong>：大蒜香氣完美解膩。"
  },
  knu_cafeteria: {
    title: "🎓 慶北大學 Global Plaza 吃學餐",
    desc: "深入體驗道地韓國大學生日常的隱藏版高CP值食堂！餐點選擇多樣且價格親民。",
    items: "✔ <strong>每日特餐</strong>：體驗最真實的韓系家常菜。<br>✔ <strong>韓式炸豬排</strong>：份量超大，學生族最愛。"
  },
  checkin_cheese: {
    title: "🧀 Check in Cheese 餐廳",
    desc: "濃郁起司愛好者的天堂！店內裝潢超有質感，主打浮誇系網美義式創意料理。",
    items: "✔ <strong>瀑布起司義大利麵</strong>：桌邊現刨起司秀。<br>✔ <strong>手作窯烤披薩</strong>：餅皮Q彈，配料豐富。"
  },
  baskin_robbins: {
    title: "🍦 學校北門 31冰淇淋",
    desc: "韓國超夯的國民冰淇淋連鎖店，每個月都會推出限定新口味，是韓國年輕人飯後必吃的甜點。",
    items: "✔ <strong>媽媽是外星人</strong>：超人氣巧克力球口味。<br>✔ <strong>薄荷巧克力</strong>：清爽解膩的經典選擇。"
  },
  miseong_soup: {
    title: "🥣 山堆美成豬肉湯飯 慶大店",
    desc: "大邱慶北大學北門的高CP值名店。主打以國產豬骨熬煮12小時的濃郁白湯，肉量澎湃如山。最大亮點是設有免費無限續點的自助吧，熱騰騰的血腸、豬內臟、涼拌菜與白飯全部讓顧客吃到飽，深受學生與老饕喜愛。",
    items: "✔ <strong>山堆特級豬肉湯飯</strong>：肉量加倍的薄切豬肉招牌湯飯。<br>✔ <strong>直火松阪豬湯飯</strong>：加入帶有炙烤焦香、口感Q彈的松阪豬肉。<br>✔ <strong>白切肉定食</strong>：軟嫩的加布里肉搭配包肉生菜，附贈熱湯。"
  },
  seomun_market: {
    title: "🥟 大邱西門市場 서문시장",
    desc: "大邱西門市場（서문시장）是韓國三大傳統市場之一，更是大邱規模最大的歷史性地標。這裡不僅是服飾、寢具與布匹的批發大本營，更是名副其實的「大邱平民美食戰場」，每到夜晚還會變身為熱鬧的夜市。",
    items: "✔ <strong>刀削麵 & 麵疙瘩</strong>：現點現擀口感Ｑ彈，搭配鯷魚清爽湯底。<br>✔ <strong>大邱扁餃子</strong>：「大邱十味」之一，煎至微焦後淋上醬油與蔥粒。<br>✔ <strong>雞蛋飯捲</strong>：裹上蛋液煎香，搭配辛辣泡菜。<br>✔ <strong>葉子手捏餃子 & 辣炒魚糕</strong>：外型巨大塞滿冬粉肉末，搭配香辣魚糕。<br>✔ <strong>堅果糖餅</strong>：排隊名店點心，清爽外皮包裹滿滿黑糖與堅果融漿。"
  },
  cafe_views: {
    title: "☕ 景色咖啡廳 카페뷰즈",
    desc: "營業至深夜的質感咖啡廳，擁有大面觀景窗，能將壽城池美麗的夜景與湖面倒影盡收眼底。",
    items: "✔ <strong>招牌拿鐵</strong>：奶香濃郁，拉花精緻。<br>✔ <strong>手作蛋糕</strong>：每日限定口味，搭配咖啡剛好。"
  },
  cafe_melt: {
    title: "🏞️ 河景咖啡廳 Melt 멜트",
    desc: "擁有絕美大面落地窗的琴湖江河景咖啡廳，純白建築搭配波光粼粼的江水，怎麼拍都美。",
    items: "✔ <strong>冰美式咖啡</strong>：韓國人血液裡的必需品。<br>✔ <strong>焦糖可頌鬆餅 (Croffle)</strong>：酥脆香甜。"
  },
  hanjeongseon: {
    title: "🍓 韓貞仙水果大福 한정선",
    desc: "首爾超人氣的網美排隊甜點！傳統韓屋風格店面，主打外皮極致Q彈、內餡飽滿多汁的新鮮水果大福。",
    items: "✔ <strong>新鮮無花果大福</strong>：季節限定，清甜不膩。<br>✔ <strong>草莓優格大福</strong>：酸甜比例完美。"
  },
  changhwadang: {
    title: "🥟 韓式蒸餃 創華堂 창화당",
    desc: "復古韓屋風格的知名麵食餃子館，裝潢充滿古早味，是許多韓劇取景與明星造訪的名店。",
    items: "✔ <strong>綜合煎餃拼盤</strong>：一次吃到泡菜、鮮肉等多種口味。<br>✔ <strong>辣炒年糕</strong>：微辣過癮。"
  },
  songane_chicken: {
    title: "🍲 孫家一隻雞 손가네 닭한마리",
    desc: "東大門在地人激推的溫補美食！嚴選嫩雞燉煮，湯頭清澈鮮甜，蒜泥醬汁是美味靈魂。",
    items: "✔ <strong>招牌一隻雞</strong>：肉質鮮嫩多汁。<br>✔ <strong>手工刀削麵</strong>：最後放入吸滿精華湯汁的麵條，完美收尾。"
  },
  yogurt_world: {
    title: "🍧 優格世界冰淇淋 요거트월드",
    desc: "清爽無負擔的優格霜淇淋專賣店，可自由搭配超多種新鮮水果與酥脆配料。",
    items: "✔ <strong>蜂巢蜜優格冰淇淋</strong>：整塊天然蜂巢放上去，顏值極高。<br>✔ <strong>綜合水果優格</strong>：健康又美味。"
  },
  artist_bakery: {
    title: "🥐 ARTIST BAKERY 아티스트 베이커리",
    desc: "安國站超人氣排隊名店！裝潢充滿濃濃法式藝術氣息，主打各式各樣口味豐富的鹽麵包。",
    items: "✔ <strong>經典海鹽麵包</strong>：外酥內軟，奶油香氣十足。<br>✔ <strong>松露蘑菇濃湯</strong>：沾著麵包吃是內行吃法。"
  },
  dotori_garden: {
    title: "🐿️ DOTORI GARDEN 도토리가든",
    desc: "彷彿走入吉卜力童話森林的超萌橡果主題咖啡廳！每個角落都有可愛的插畫與裝飾。",
    items: "✔ <strong>橡果造型瑪德蓮</strong>：造型可愛，多種口味。<br>✔ <strong>蜂巢希臘優格</strong>：招牌必點，口感濃郁。"
  },
  anam_soup: {
    title: "🍲 安岩豬肉湯飯 안암",
    desc: "米其林指南連續推薦！顛覆傳統的精緻豬肉湯飯，湯頭清澈，並加入了獨特的青陽辣椒油與香菜。",
    items: "✔ <strong>帶骨豬肉湯飯 (加香菜)</strong>：肉質軟嫩，湯頭層次豐富。<br>✔ <strong>特色涼拌肉</strong>：清爽開胃。"
  },
  hwangsengga: {
    title: "🍜 黃生家刀削麵 황생가칼국수",
    desc: "米其林必比登連續多年推薦的北村老字號麵館。使用濃郁牛骨熬製湯頭，麵條純手工製作。",
    items: "✔ <strong>牛骨湯刀削麵</strong>：湯頭醇厚，麵條Q彈。<br>✔ <strong>巨大手工王餃子</strong>：皮薄餡多，咬下會爆汁。"
  },
  heehee_soba: {
    title: "🐟 鯖魚蕎麥麵 喜喜 희희",
    desc: "創新又美味的日韓融合麵食館！主打將烤得油脂豐富的鯖魚搭配清爽的蕎麥麵。",
    items: "✔ <strong>冷湯鯖魚蕎麥麵</strong>：炙燒鯖魚香氣四溢，冷湯清爽解膩。<br>✔ <strong>炸里肌豬排</strong>：外酥內嫩。"
  },
  jjama: {
    title: "🍝 鐵板炸醬麵 짜마",
    desc: "水原特色中華料理！有別於傳統炸醬麵，這裡用滾燙的鐵板端上桌，滋滋作響的聲音與焦香令人食指大動。",
    items: "✔ <strong>鐵板海鮮炸醬麵</strong>：料多味美，帶有迷人鍋氣。<br>✔ <strong>韓式糖醋肉</strong>：外皮酥脆，酸甜開胃。"
  },
  yomi_udon: {
    title: "🍜 寬烏龍 요미우돈교자",
    desc: "視覺衝擊滿分的日式麵食館！主打超寬版烏龍麵與造型華麗的冰花煎餃。",
    items: "✔ <strong>招牌寬烏龍麵</strong>：麵條極寬，口感Q彈有嚼勁。<br>✔ <strong>起司明太子冰花煎餃</strong>：底部酥脆，內餡濃郁。"
  },
  brussels_fry: {
    title: "🍟 布魯塞爾炸薯條 브뤼셀프라이",
    desc: "行宮洞超人氣的街頭散步美食！現點現炸的粗切馬鈴薯條，可任選多種特調罪惡醬汁。",
    items: "✔ <strong>松露美乃滋薯條</strong>：松露香氣濃郁。<br>✔ <strong>辣味起司薯條</strong>：重口味愛好者必點。"
  },
  slow_sunnyside: {
    title: "🥞 慢速陽光 슬로우써니사이드",
    desc: "隱身在巷弄內，充滿歐洲南法風情的陽光咖啡廳，擁有漂亮的小庭院，以法式吐司極為出名。",
    items: "✔ <strong>焦糖香蕉法式吐司</strong>：外酥內軟，蛋香濃郁。<br>✔ <strong>招牌鮮奶茶</strong>：茶香與奶香完美平衡。"
  },
  jehotang: {
    title: "🍵 傳統特色茶：醍醐湯 제호탕",
    desc: "朝鮮宮廷的消暑秘方！由烏梅與多種韓藥材熬製而成的傳統茶飲，酸甜回甘，非常有特色。",
    items: "✔ <strong>冰鎮醍醐湯</strong>：夏天喝非常解渴消暑。<br>✔ <strong>傳統韓菓</strong>：搭配茶飲最對味。"
  },
  obanjeong: {
    title: "🍗 五方全雞 오반정",
    desc: "水原名物除了排骨，還有「炸全雞」！保留傳統炸雞做法，外皮薄脆，肉質卻依然多汁不柴。",
    items: "✔ <strong>傳統炸全雞</strong>：直接豪邁剝開吃最過癮。<br>✔ <strong>調味炸雞半半</strong>：經典甜辣醬汁與原味一次滿足。"
  },
  seoryeong_naengmyeon: {
    title: "🍜 西嶺平壤冷麵 서령",
    desc: "炎炎夏日的消暑聖品！主打清淡卻底蘊深厚的高級平壤冷麵，是韓國老饕最愛的解暑美食。",
    items: "✔ <strong>平壤水冷麵</strong>：湯頭清澈，蕎麥麵條香氣足。<br>✔ <strong>韓式白切肉</strong>：肉質軟嫩，無豬腥味。"
  },
  metcha: {
    title: "🍵 我想喝抹茶 맷차",
    desc: "明洞與弘大超人氣的職人級抹茶專賣店！特色是現場使用傳統石臼緩慢磨製優質茶葉。",
    items: "✔ <strong>特濃抹茶拿鐵</strong>：茶香極度濃郁，微苦回甘。<br>✔ <strong>抹茶千層蛋糕</strong>：餅皮極薄，層次豐富。"
  },
  miss_jokbal: {
    title: "🍖 豬蹄與香瓜瑪格麗酒 미쓰족발",
    desc: "弘大超人氣宵夜！顛覆傳統的豬腳吃法，富含膠原蛋白的Q彈豬腳搭配清爽沙拉，完全不油膩。",
    items: "✔ <strong>蒜味豬蹄拼盤</strong>：鋪滿滿滿蒜泥，香氣逼人。<br>✔ <strong>香瓜瑪格麗酒</strong>：清甜順口，女生最愛。"
  },
  muguok: {
    title: "🍲 無垢屋 雞湯 무구옥",
    desc: "嚴選優質土雞熬煮的清爽雞湯，不添加過多調味，保留食材最純粹的鮮甜，營養滿分的滋補餐點。",
    items: "✔ <strong>招牌清燉雞湯飯</strong>：雞肉輕輕一撥就骨肉分離。<br>✔ <strong>辣味涼拌雞絲</strong>：非常開胃。"
  },
  standard_bread: {
    title: "🍞 法國鐵板吐司 스탠다드브레드",
    desc: "江南區高質感的鐵板現煎法式吐司專賣店！將平凡的吐司透過鐵板煎烤，變成精緻的下午茶甜點。",
    items: "✔ <strong>經典焦糖法式吐司</strong>：邊緣微焦，內裡像布丁般柔軟。<br>✔ <strong>手沖單品咖啡</strong>：香醇順口。"
  }
};

let output = "";
for (const key in data) {
  const item = data[key];
  output += `  ${key}: {
    title: "${item.title}",
    content: \`
      <img src="images/${key}.jpg" class="intro-image" alt="${item.title}">
      <div class="attraction-intro">
        <p class="intro-desc">${item.desc}</p>
        <div class="intro-section">
          <h4 class="intro-sub-title"><i class="ri-restaurant-line"></i> 特色餐點推薦</h4>
          <p>${item.items}</p>
        </div>
      </div>
    \`
  },
`;
}

fs.writeFileSync('C:\\01\\korea trip\\patch.txt', output, 'utf8');
console.log("Patch generated.");
