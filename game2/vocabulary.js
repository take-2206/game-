
const vocabulary = {
  unit1: [
    // { word: "おもてなし", reading: "おもてなし", meaning: "Lòng hiếu khách \n sự tiếp đãi" },
    // { word: "俊足", reading: "しゅんそく", meaning: "Nhanh chân\n Người tài giỏi" },
    // { word: "獣", reading: "けもの", meaning: "động vật hoang dã" },
    // { word: "獣医", reading: "じゅうい", meaning: "Bác sĩ thú y" },
    // { word: "仰せ", reading: "おおせ", meaning: "mệnh lệnh\n chỉ thị " },
    // { word: "酸素", reading: "さんそ", meaning: "Oxy " },
    // { word: "ピンチ", reading: "ピンチ", meaning: "Khủng hoảng" },
    // { word: "溢れる", reading: "あふれる", meaning: "Ngập\ntràn đầy" },
    // { word: "伏せる", reading: "ふせる", meaning: "Nằm úp, cúi xuống\nGiấu (thông tin, tên tuổi)" },
    // { word: "降伏", reading: "こうふく", meaning: "Đầu hàng" },
    // { word: "抑制", reading: "よくせい", meaning: "Hạn chế\n kiềm hãm" },
    // { word: "抑圧", reading: "よくあつ", meaning: "Đàn áp\n áp chế" },
    // { word: "出費", reading: "しゅっぴ", meaning: "Chi tiêu\n khoản chi" },
    // { word: "高騰", reading: "こうとう", meaning: "Tăng vọt\n leo thang (giá cả, chỉ số, v.v.)" },
    // { word: "備蓄", reading: "びちく", meaning: "Dự trữ\ntích trữ" },
    // { word: "報道", reading: "ほうどう", meaning: "Đưa tin\n phát tin" },
    // { word: "暴落", reading: "ぼうらく", meaning: "Sụp đổ\nlao dốc(giá, cổ phiếu" },
    // { word: "救出", reading: "きゅうしゅつ", meaning: "cứu nguy" },
    // { word: "全滅", reading: "ぜんめつ", meaning: "tiêu diệt hoàn toàn" },
    // { word: "プロポーズ", reading: "プロポーズ", meaning: "Cầu hôn" },
    // { word: "酸味", reading: "さんみ", meaning: "Vị chua" },
    // { word: "仰向け", reading: "あおむけ", meaning: "Nằm ngửa" },
    // { word: "渦", reading: "うず", meaning: "Vòng xoáy\nxoáy nước" },
    // { word: "献立", reading: "こんだて", meaning: "Thực đơn" },
    // { word: "掌", reading: "てのひら", meaning: "Lòng bàn tay" },
    // { word: "蓋", reading: "ふた", meaning: "Nắp nồi" },
    // { word: "朱肉", reading: "しゅにく", meaning: "hộp mực đỏ\n(để đóng dấu)" },
    // { word: "真珠", reading: "しんじゅ", meaning: "chân châu" },
    // { word: "威力", reading: "いりょく", meaning: "sức mạnh,uy lực" },
    // { word: "誠意", reading: "せいい", meaning: "thành ý,chân thành" },
    // { word: "獲物", reading: "えもの", meaning: "con mồi,chiến lợi phẩm" },
    // { word: "権威", reading: "けんい", meaning: "quyền uy,quyền lực" },
    // { word: "地獄", reading: "じごく", meaning: "địa ngục" },
    // { word: "抱負", reading: "ほうふ", meaning: "hoài bão" },
    // { word: "実相", reading: "じっそう", meaning: "thực trạng\nbản chất" },
    // { word: "背後", reading: "はいご", meaning: "phía sau" },
    // { word: "アーティスト", reading: "アーティスト", meaning: "nghệ sĩ" },
    // { word: "イヤホン", reading: "イヤホン", meaning: "tai nghe" },
    // { word: "エッセイ", reading: "エッセイ", meaning: "bài tiểu luận" },
    // { word: "エッセンス", reading: "エッセンス", meaning: "tinh chất,tinh túy" },
    // { word: "カーソル", reading: "カーソル", meaning: "con trỏ(máy tính) " },
    // { word: "有力", reading: "ゆうりょく", meaning: "Sự ảnh hưởng mạnh mẽ" },
    // { word: "弱気", reading: "よわき", meaning: "nhát gan,rụt rè" },
    // { word: "特殊", reading: "とくしゅ", meaning: "đặc biệt, đặc thù" },
    // { word: "酸っぱい", reading: "すっぱい", meaning: "chua" },
    // { word: "尊い", reading: "とうとい", meaning: "cao quý" },
    // { word: "潔い", reading: "いさぎよい", meaning: "thẳng thắn\n trong sạch" },
    // { word: "仰々しい", reading: "ぎょうぎょうしい", meaning: "khoa trương" },
    // { word: "猛烈", reading: "もうれつ", meaning: "Mãnh liệt" },
    // { word: "軽率", reading: "けいそつ", meaning: "bất cẩn" },
    // { word: "実質的", reading: "じっしつてき", meaning: "thực chất" },
    // { word: "仰ぐ", reading: "あおぐ", meaning: "phụ thuộc" },
    { word: "蓄える", reading: "たくわえる", meaning: "tiết kiệm; tích lũy" },
    { word: "萎える", reading: "なえる", meaning: "Héo rũ,Nản chí" },
    { word: "滅びる", reading: "ほろびる", meaning: "Bị tiêu diệt" },
    { word: "諭す", reading: "さとす", meaning: "dạy bảo, răn dạy" },
    { word: "信仰", reading: "しんこう", meaning: "tín ngưỡng" },
    { word: "仰天", reading: "ぎょうてん", meaning: "Hết sức kinh ngạc" },
     { word: "献身", reading: "けんしん", meaning: "Sự cống hiến, hiến thân" },
      { word: "貢献", reading: "こうけん", meaning: "Sự đóng góp" },
      { word: "潜伏", reading: "せんぷく", meaning: " tiềm ẩn; ủ bệnh" },
      { word: "起伏", reading: "きふく", meaning: "Nhấp nhô、 Sự thăng trầ、" },
      { word: "蓄積", reading: "ちくせき", meaning: "Tích lũy(kinh nghiệm,...)" },
      { word: "貯蓄", reading: "ちょちく", meaning: "Tiết kiệm (tiền của, tài sản)" },
      { word: "萎縮", reading: "いしゅく", meaning: "teo nhỏ; rụt rè" },
   { word: "滅亡", reading: "めつぼう", meaning: "Diệt vong, tiêu vong" },
   { word: "絶滅", reading: "ぜつめつ", meaning: "Tuyệt chủng" },
   { word: "猛反対", reading: "もうはんたい", meaning: "Phản đối mạnh mẽ" },
   { word: "自制", reading: "じせい", meaning: "Tự kiềm chế" },
   { word: "辞職", reading: "じしょく", meaning: "Từ chức" },
   { word: "沈下", reading: "ちんか", meaning: "chìm xuống " },
   { word: "緊迫", reading: "きんぱく", meaning: "cấp bách, kịch tính" },
    
     { word: "枯渇", reading: "こかつ", meaning: "Cạn kiệt, khô cạnh" },
      { word: "治癒", reading: "ちゆ", meaning: "Chữa lành, hồi phục" },
     { word: "丸々", reading: "まるまる", meaning: "Tròn trịa,Toàn bộ" },
      { word: "丸ごと", reading: "まるごと", meaning: "Toàn bộ, nguyên vẹn" },
       { word: "誠に", reading: "まことに", meaning: "Thật sự" },
        { word: "殊に", reading: "ことに", meaning: "Đặc biệt là" },


   

    

      

    
    
    
    
   
    
    
    





    

   

  ],
  day2: [
      { word: "", reading: "", meaning: "" },
    
  ]
};