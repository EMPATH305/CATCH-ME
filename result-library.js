(()=>{
const KEY='catchme_v02';
const META={catch:['01','CATCH ME'],flirt:['02','FLIRT WITH ME'],after:['03','AFTER DARK']};
function get(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch{return{}}}
function keys(s){const completed=s.completed||[];return ['catch','flirt','after'].filter(k=>s.chapterStats?.[k]||s.results?.[k]||completed.includes(k))}
function statFor(s,key){return s.chapterStats?.[key]||s.results?.[key]||{caught:0,total:15,accuracy:0}}
function open(key){
  const stored=get(),available=keys(stored);
  if(!available.length){document.querySelector('#startBtn')?.click();return}
  key=key||((stored.lastChapter&&available.includes(stored.lastChapter))?stored.lastChapter:available[available.length-1]);
  stored.lastChapter=key;localStorage.setItem(KEY,JSON.stringify(stored));
  const stat=statFor(stored,key);
  try{
    // app.js keeps save/run/renderResults/show in the shared classic-script global scope.
    // Rehydrate the minimum run state renderResults needs, without changing scores.
    if(typeof save!=='undefined') save=loadSave();
    if(typeof run!=='undefined') run={key,i:0,selected:null,prediction:null,caught:Number(stat.caught)||0,answers:[],localScores:{}};
    if(typeof renderResults==='function'&&typeof show==='function'){
      renderResults();
      show('results');
      window.gtag?.('event','saved_result_view',{chapter:key});
      return;
    }
  }catch(err){console.error('[CATCH ME] saved result render failed',err)}
  document.querySelectorAll('.screen').forEach(el=>el.classList.remove('active'));
  document.querySelector('#results')?.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}
function refresh(){
  const s=get(),available=keys(s);
  const box=document.querySelector('#savedResultButtons')||document.querySelector('.saved-result-buttons');
  if(box)box.innerHTML=available.map(k=>`<button class="saved-result-btn" data-result-key="${k}"><span>CH.${META[k][0]}</span><strong>${META[k][1]}</strong><em>VIEW / SHARE →</em></button>`).join('');
  const card=document.querySelector('#savedResultsCard')||document.querySelector('.saved-results-card');
  if(card)card.hidden=!available.length;
}
document.addEventListener('click',e=>{
  const resultNav=e.target.closest('.site-nav [data-go="results"],.site-nav [data-go="results-library"]');
  if(resultNav){e.preventDefault();e.stopImmediatePropagation();open();return}
  const saved=e.target.closest('[data-result-key]');
  if(saved){e.preventDefault();e.stopImmediatePropagation();open(saved.dataset.resultKey);return}
  setTimeout(refresh,60);
},true);
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',()=>setTimeout(refresh,120)):setTimeout(refresh,120);
})();