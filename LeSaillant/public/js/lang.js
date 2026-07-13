/* ── lang.js — FR/EN toggle, shared by all pages ── */

let lang = localStorage.getItem('lang') || 'fr';

function setLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === l.toUpperCase());
  });
  document.querySelectorAll('[data-fr]').forEach(el => {
    if (el.dataset.fr && el.dataset.en) {
      el.textContent = el.dataset[l];
    }
  });
}

const footerYearEl = document.getElementById('footerYear');
if (footerYearEl) footerYearEl.textContent = new Date().getFullYear();

setLang(lang);
