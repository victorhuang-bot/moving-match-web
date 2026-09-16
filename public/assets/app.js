const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const modal = document.querySelector("#inquiryModal");
const inquiryForm = document.querySelector("#movingInquiry");

function setInquiryModal(open) {
  if (!modal) return;
  modal.classList.toggle("open", open);
  modal.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("modal-open", open);
  if (open) {
    setTimeout(() => modal.querySelector('input[name="name"]')?.focus(), 50);
  }
}

document.querySelectorAll(".open-inquiry").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    setInquiryModal(true);
  });
});

modal?.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", () => setInquiryModal(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setInquiryModal(false);
});

if (inquiryForm) {
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(inquiryForm);
    const type = data.get("type") || "搬遷需求";
    const lines = [
      `需求類型：${type}`,
      `姓名／聯絡人：${data.get("name") || ""}`,
      `聯絡電話：${data.get("phone") || ""}`,
      `搬遷日期：${data.get("date") || "未定"}`,
      `搬遷地區：${data.get("area") || "未填"}`,
      `需求說明：${data.get("details") || "未填"}`
    ];
    const subject = `搬家通網站｜${type}需求`;
    const body = `您好，我想詢問搬遷服務：\n\n${lines.join("\n")}\n\n謝謝。`;
    setInquiryModal(false);
    inquiryForm.reset();
    window.location.href =
      `mailto:service@moving-match.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
