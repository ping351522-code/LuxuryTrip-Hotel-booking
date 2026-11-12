// Multi-Language Translation Engine (EN, MM, TH, JP, KR, CN, VN)
const languageData = {
  en: {
    code: "en",
    label: "🇬🇧 English",
    nav_home: "Home",
    nav_membership: "Membership",
    nav_withdraw: "Withdrawal",
    nav_customer: "Customer Service",
    nav_logout: "Logout",
    hero_title: "Luxury Hotel & Resort Booking",
    hero_subtitle: "Experience world-class hospitality across Asia",
    btn_book: "Book Now",
    btn_details: "View Details"
  },
  mm: {
    code: "mm",
    label: "🇲🇲 မြန်မာ",
    nav_home: "ပင်မစာမျက်နှာ",
    nav_membership: "အသင်းဝင်အဆင့်",
    nav_withdraw: "ငွေထုတ်ယူရန်",
    nav_customer: "ဝန်ဆောင်မှုဌာန",
    nav_logout: "ထွက်မည်",
    hero_title: "ဇိမ်ခံဟိုတယ်နှင့် အပန်းဖြေစခန်း ဘွတ်ကင်",
    hero_subtitle: "အာရှတစ်ဝှမ်း အကောင်းဆုံး ဝန်ဆောင်မှုများကို ခံစားလိုက်ပါ",
    btn_book: "အခန်းယူမည်",
    btn_details: "အသေးစိတ်ကြည့်ရန်"
  },
  th: {
    code: "th",
    label: "🇹🇭 ไทย",
    nav_home: "หน้าแรก",
    nav_membership: "ระดับสมาชิก",
    nav_withdraw: "ถอนเงิน",
    nav_customer: "บริการลูกค้า",
    nav_logout: "ออกจากระบบ",
    hero_title: "จองโรงแรมและรีสอร์ทสุดหรู",
    hero_subtitle: "สัมผัสประสบการณ์การบริการระดับโลกทั่วเอเชีย",
    btn_book: "จองเลย",
    btn_details: "ดูรายละเอียด"
  },
  jp: {
    code: "jp",
    label: "🇯🇵 日本語",
    nav_home: "ホーム",
    nav_membership: "会員ランク",
    nav_withdraw: "出金申請",
    nav_customer: "カスタマーサポート",
    nav_logout: "ログアウト",
    hero_title: "ラグジュアリーホテル＆リゾート予約",
    hero_subtitle: "アジア全域でワールドクラスのおもてなしを",
    btn_book: "今すぐ予約",
    btn_details: "詳細を見る"
  },
  kr: {
    code: "kr",
    label: "🇰🇷 한국어",
    nav_home: "홈",
    nav_membership: "멤버십 등급",
    nav_withdraw: "출금하기",
    nav_customer: "고객센터",
    nav_logout: "로그아웃",
    hero_title: "럭셔리 호텔 & 리조트 예약",
    hero_subtitle: "아시아 전역에서 세계 수준의 환대를 경험하세요",
    btn_book: "지금 예약",
    btn_details: "상세보기"
  },
  cn: {
    code: "cn",
    label: "🇨🇳 中文",
    nav_home: "首页",
    nav_membership: "会员等级",
    nav_withdraw: "提现",
    nav_customer: "客户服务",
    nav_logout: "退出登录",
    hero_title: "豪华酒店与度假村预订",
    hero_subtitle: "体验全亚洲世界级的热情款待",
    btn_book: "立即预订",
    btn_details: "查看详情"
  },
  vn: {
    code: "vn",
    label: "🇻🇳 Tiếng Việt",
    nav_home: "Trang chủ",
    nav_membership: "Cấp thành viên",
    nav_withdraw: "Rút tiền",
    nav_customer: "Chăm sóc khách hàng",
    nav_logout: "Đăng xuất",
    hero_title: "Đặt phòng Khách sạn & Khu nghỉ dưỡng",
    hero_subtitle: "Trải nghiệm dịch vụ đẳng cấp thế giới khắp Châu Á",
    btn_book: "Đặt Ngay",
    btn_details: "Xem Chi Tiết"
  }
};

// Initialize Language Switcher
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "en";
  applyLanguage(savedLang);
  renderLanguageDropdown(savedLang);
});

// Render Dropdown Menu dynamically
function renderLanguageDropdown(currentLang) {
  const container = document.getElementById("languageSwitcherContainer");
  if (!container) return;

  const currentData = languageData[currentLang] || languageData["en"];

  let optionsHTML = "";
  for (const key in languageData) {
    const item = languageData[key];
    const activeClass = key === currentLang ? "active" : "";
    optionsHTML += `<div class="lang-option ${activeClass}" onclick="selectLanguage('${key}')">${item.label}</div>`;
  }

  container.innerHTML = `
    <div class="language-wrapper">
      <button class="lang-btn" id="langToggleBtn" type="button">
        <span>${currentData.label}</span>
        <span>▼</span>
      </button>
      <div class="lang-dropdown" id="langDropdownMenu">
        ${optionsHTML}
      </div>
    </div>
  `;

  const toggleBtn = document.getElementById("langToggleBtn");
  const dropdownMenu = document.getElementById("langDropdownMenu");

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    dropdownMenu.classList.remove("show");
  });
}

// Change & Save Language
function selectLanguage(langCode) {
  localStorage.setItem("selectedLanguage", langCode);
  applyLanguage(langCode);
  renderLanguageDropdown(langCode);
}

// Update all elements with [data-i18n] attribute
function applyLanguage(langCode) {
  const dict = languageData[langCode] || languageData["en"];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });
}

