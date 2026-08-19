(()=>{
const KEY='catchme_v02';
const META={catch:['01','CATCH ME'],flirt:['02','FLIRT WITH ME'],after:['03','AFTER DARK']};
function get(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch{return{}}}
function keys(s){const completed=s.completed||[];return ['catch','flirt','after'].filter(k=>s.results?.[k]||completed.includes(k))}
function open(key){const s=get(),available=keys(s);if(!available.length){document.querySelector('#startBtn')?.click();return}key=key||((s.lastChapter&&available.includes(s.lastChapter))?s.lastChapter:available[available.length-1]);s.lastChapter=key;localStorage.setItem(KEY,JSON.stringify(s));
// Use the app's real result renderer when available. Current app exposes finishChapter, not renderResults.
if(typeof finishChapter==='function'){finishChapter(key,true);return}
// Safe fallback: expose the existing result screen instead of leaving the nav button dead.
document.querySelectorAll('.screen').forEach(el=>el.classList.remove('active'));document.querySelector('#results')?.classList.add('active');window.scrollTo({top:0,behavior:'smooth'});
}
function refresh(){const s=get(),available=keys(s);const box=document.querySelector('#savedResultButtons')||document.querySelector('.saved-result-buttons');if(box)box.innerHTML=available.map(k=>`<button class="saved-result-btn" data-result-key="${k}"><span>CH.${META[k][0]}</span><strong>${META[k][1]}</strong><em>VIEW / SHARE →</em></button>`).join('');const card=document.querySelector('#savedResultsCard')||document.querySelector('.saved-results-card');if(card)card.hidden=!available.length}
// Capture RESULTS before beta.js's delegated nav handler so it cannot fall through to showExtra('results').
document.addEventListener('click',e=>{const resultNav=e.target.closest('.site-nav [data-go="results"],.site-nav [data-go="results-library"]');if(resultNav){e.preventDefault();e.stopImmediatePropagation();open();return}const saved=e.target.closest('[data-result-key]');if(saved){e.preventDefault();e.stopImmediatePropagation();open(saved.dataset.resultKey);return}setTimeout(refresh,60)},true);
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',()=>setTimeout(refresh,120)):setTimeout(refresh,120);
})();