(()=>{
  function track(type){
    if(typeof window.gtag==='function') window.gtag('event','beta_feedback',{feedback_type:type,page:document.querySelector('.screen.active')?.id||'unknown',chapter:document.querySelector('#chapterLabel')?.textContent||''});
  }
  function toast(msg){const t=document.querySelector('#toast');if(!t)return;t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
  function init(){
    const wrap=document.createElement('div');
    wrap.className='feedback-wrap';
    wrap.innerHTML=`<button class="feedback-trigger" aria-expanded="false">FEEDBACK</button><div class="feedback-panel" hidden><div class="feedback-head"><strong>HOW'S THE EXPERIMENT?</strong><button class="feedback-close" aria-label="關閉">×</button></div><p>不用寫作文。告訴我目前最接近哪一個。</p><div class="feedback-quick"><button data-feedback="fun">好玩 😈</button><button data-feedback="stuck">我卡住了</button><button data-feedback="confusing">有點看不懂</button><button data-feedback="more">我要更多</button></div><a class="feedback-detail" href="https://github.com/EMPATH305/CATCH-ME/issues/new?title=%5BPublic%20Beta%20Feedback%5D%20&body=%E6%88%91%E5%9C%A8%20CATCH%20ME%20%E7%9A%84%E5%93%AA%E8%A3%A1%EF%BC%9A%0A%0A%E6%88%91%E9%81%87%E5%88%B0%E7%9A%84%E5%95%8F%E9%A1%8C%EF%BC%8F%E6%83%B3%E6%B3%95%EF%BC%9A%0A" target="_blank" rel="noopener">留詳細意見 / 回報 bug ↗</a><small>快速回饋只送出類別，不包含你的答案內容。</small></div>`;
    document.body.appendChild(wrap);
    const trigger=wrap.querySelector('.feedback-trigger'),panel=wrap.querySelector('.feedback-panel');
    const close=()=>{panel.hidden=true;trigger.setAttribute('aria-expanded','false')};
    trigger.onclick=()=>{const opening=panel.hidden;panel.hidden=!opening;trigger.setAttribute('aria-expanded',String(opening));if(opening)track('opened')};
    wrap.querySelector('.feedback-close').onclick=close;
    wrap.querySelectorAll('[data-feedback]').forEach(b=>b.onclick=()=>{track(b.dataset.feedback);toast('收到。研究員記下來了 🙂');close()});
  }
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();
})();