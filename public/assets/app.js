const b=document.querySelector(".menu"),n=document.querySelector(".nav nav");if(b&&n){b.onclick=()=>{const o=n.classList.toggle("open");b.setAttribute("aria-expanded",String(o))};n.querySelectorAll("a").forEach(a=>a.onclick=()=>n.classList.remove("open"))}document.querySelector("#year").textContent=new Date().getFullYear();
const f=document.querySelector("#movingInquiry");if(f){f.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(f),type=d.get("type")||"搬遷需求",lines=[`需求類型：${type}`,`姓名／聯絡人：${d.get("name")||""}`,`聯絡電話：${d.get("phone")||""}`,`搬遷日期：${d.get("date")||"未定"}`,`搬遷地區：${d.get("area")||"未填"}`,`需求說明：${d.get("details")||"未填"}`],subject=`搬家通網站｜${type}需求`,body=`您好，我想詢問搬遷服務：\n\n${lines.join("\n")}\n\n謝謝。`;setInquiryModal(false);f.reset();location.href=`mailto:service@moving-match.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`})}

const modal=document.querySelector("#inquiryModal"),openInquiry=document.querySelector(".open-inquiry");
function setInquiryModal(open){
  if(!modal)return;
  modal.classList.toggle("open",open);
  modal.setAttribute("aria-hidden",String(!open));
  document.body.classList.toggle("modal-open",open);
  if(open){setTimeout(()=>modal.querySelector('input[name="name"]')?.focus(),50)}
}
openInquiry?.addEventListener("click",()=>setInquiryModal(true));
modal?.querySelectorAll("[data-close-modal]").forEach(el=>el.addEventListener("click",()=>setInquiryModal(false)));
document.addEventListener("keydown",e=>{if(e.key==="Escape")setInquiryModal(false)});


// V1.4.1 — robust moving inquiry dialog + smart logistics anchor
document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('movingInquiryDialog');
  const closeBtn = document.getElementById('movingInquiryClose');
  const form = document.getElementById('movingInquiryForm');

  document.querySelectorAll('a,button').forEach((el) => {
    const text = (el.textContent || '').replace(/\s+/g,'').trim();
    if (text.includes('填寫搬遷需求')) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        if (dialog && typeof dialog.showModal === 'function') dialog.showModal();
      });
    }
  });

  if (closeBtn && dialog) closeBtn.addEventListener('click', () => dialog.close());
  if (dialog) dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });

  if (form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const subject = `搬遷需求｜${fd.get('moveType') || ''}｜${fd.get('contactName') || ''}`;
    const body = [
      `搬遷類型：${fd.get('moveType') || ''}`,
      `姓名／聯絡人：${fd.get('contactName') || ''}`,
      `聯絡電話：${fd.get('phone') || ''}`,
      `搬遷日期：${fd.get('moveDate') || ''}`,
      `搬遷地區：${fd.get('area') || ''}`,
      '',
      '需求說明：',
      fd.get('details') || ''
    ].join('\n');
    window.location.href = `mailto:service@moving-match.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    dialog.close();
  });
});
