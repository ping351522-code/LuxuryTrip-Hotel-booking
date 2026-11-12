// International Multi-Language & Booking Logic for Customer Portal
document.addEventListener("DOMContentLoaded", function () {
  console.log("Customer Portal Loaded Successfully - International Edition");

  // Multi-language dictionary support (MM, TH, JP, KR, CN, VN)
  const translations = {
    en: { title: "Luxury Hotel Booking", subtitle: "Experience world-class hospitality across Asia", book: "Book Now" },
    mm: { title: "ဇိမ်ခံဟိုတယ် ဘွတ်ကင်", subtitle: "အာရှတစ်ဝှမ်း အကောင်းဆုံး ဝန်ဆောင်မှုများကို ခံစားလိုက်ပါ", book: "အခန်းယူမည်" },
    th: { title: "จองโรงแรมสุดหรู", subtitle: "สัมผัสประสบการณ์การบริการระดับโลกทั่วเอเชีย", book: "จองเลย" },
    jp: { title: "ラグジュアリーホテル予約", subtitle: "アジア全域でワールドクラスのおもてなしを", book: "今すぐ予約" },
    kr: { title: "럭셔리 호텔 예약", subtitle: "아시아 전역에서 세계 수준의 환대를 경험하세요", book: "지금 예약" },
    cn: { title: "豪华酒店预订", subtitle: "体验全亚洲世界级的热情款待", book: "立即预订" },
    vn: { title: "Đặt phòng Khách sạn Sang trọng", subtitle: "Trải nghiệm dịch vụ đẳng cấp thế giới khắp Châu Á", book: "Đặt Ngay" }
  };

  // Language Switcher Event Listener (if language select element exists)
  const langSelect = document.getElementById("langSelector");
  if (langSelect) {
    langSelect.addEventListener("change", function (e) {
      const selectedLang = e.target.value;
      const t = translations[selectedLang] || translations["en"];
      
      document.getElementById("mainTitle").innerText = t.title;
      document.getElementById("mainSubtitle").innerText = t.subtitle;
      
      document.querySelectorAll(".book-btn").forEach(btn => {
        btn.innerText = t.book;
      });
    });
  }
});

