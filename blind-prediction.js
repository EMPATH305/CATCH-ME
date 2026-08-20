(()=>{
/* Blind prediction: lock the model's bet before the user answers, reveal it only after lock-in. */
try{
  const basePredict=predict;
  predict=function(q){
    const allowed={traits:{}};
    ['A','B','C','D'].forEach(k=>{if(q.traits?.[k]) allowed.traits[k]=q.traits[k]});
    return basePredict(allowed);
  };

  const baseRenderQuestion=renderQuestion;
  renderQuestion=function(){
    baseRenderQuestion();
    const card=document.querySelector('#predictionCard');
    const small=card?.querySelector('small');
    const value=document.querySelector('#predictionText');
    const hint=document.querySelector('#predictionHint');
    if(card) card.classList.remove('revealed');
    if(small) small.textContent='PREDICTION LOCKED';
    if(value){value.textContent='LOCKED';value.setAttribute('aria-label','Prediction locked')}
    document.querySelectorAll('.predicted-badge').forEach(x=>x.remove());
    if(hint && !hint.textContent.startsWith("I'VE MADE MY BET")) hint.textContent=`I'VE MADE MY BET · ${hint.textContent}`;
  };

  const baseLockAnswer=lockAnswer;
  lockAnswer=function(){
    if(!run?.selected)return;
    const selected=run.selected;
    const bet=run.prediction;
    const pm=predictionMeta(Q[run.key][run.i]);
    baseLockAnswer();

    /* Explicitly reveal the original prediction card again after answer lock-in.
       This avoids a hidden-card state where users only ever see LOCKED. */
    const predictionCard=document.querySelector('#predictionCard');
    const small=predictionCard?.querySelector('small');
    const value=document.querySelector('#predictionText');
    const hint=document.querySelector('#predictionHint');
    if(predictionCard){predictionCard.hidden=false;predictionCard.classList.add('revealed')}
    if(small) small.textContent='MY PREDICTION · REVEALED';
    if(value){value.textContent=bet;value.setAttribute('aria-label',`My prediction was ${bet}`)}
    if(hint) hint.textContent=`${pm.level} · 你鎖定之後我才翻牌。`;

    const reveal=document.querySelector('#revealCard');
    const copy=document.querySelector('#revealCopy');
    reveal?.querySelector('.blind-reveal-match')?.remove();
    if(reveal){
      const match=document.createElement('div');
      match.className='blind-reveal-match';
      match.innerHTML=`<div><small>YOU</small><strong>${selected==='E'?'NONE':selected}</strong></div><span>VS</span><div><small>MY BET</small><strong>${bet}</strong></div>`;
      const title=document.querySelector('#revealTitle');
      title?.insertAdjacentElement('afterend',match);
    }

    if(selected==='E'){
      document.querySelector('#revealStamp').textContent='NOT EVEN CLOSE.';
      document.querySelector('#revealTitle').textContent='我以為答案在 A–D 裡。結果你根本沒站在我的選項裡。';
      if(copy) copy.textContent=`Fair. 這題是我的選項沒抓到你，不會硬算成人格訊號。${pm.level} · 我會把這次當成模型失敗，而不是你的問題。`;
    }else if(copy){
      copy.textContent=`${selected===bet?'同一張牌。':'你成功讓我翻車。'} ${copy.textContent}`;
    }
  };

  const resetBtn=document.querySelector('#resetBtn');
  if(resetBtn){
    resetBtn.onclick=()=>{
      if(!confirm('真的要清除全部章節、答案和藍圖？這不能復原。'))return;
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('catchme_subject');
      location.replace(location.pathname+location.search);
    };
  }

  const style=document.createElement('style');
  style.textContent=`
    .prediction-card.revealed{display:flex!important;border-color:var(--ink);box-shadow:4px 4px 0 var(--ink)}
    .prediction-card.revealed #predictionText{font-size:clamp(40px,8vw,72px)!important;letter-spacing:-.03em}
    .blind-reveal-match{display:grid;grid-template-columns:1fr auto 1fr;gap:14px;align-items:center;margin:22px 0;padding:16px;border:2px solid var(--ink);border-radius:18px;background:rgba(255,255,255,.58)}
    .blind-reveal-match>div{display:flex;align-items:baseline;justify-content:space-between;gap:12px}.blind-reveal-match small{font:700 9px 'Space Grotesk';letter-spacing:.12em}.blind-reveal-match strong{font:700 30px 'Space Grotesk'}.blind-reveal-match>span{font:700 9px 'Space Grotesk';letter-spacing:.1em;opacity:.55}
    #predictionText{font-size:clamp(22px,4vw,34px)!important;letter-spacing:.04em}
    @media(max-width:520px){.blind-reveal-match{gap:8px;padding:14px}.blind-reveal-match strong{font-size:24px}.blind-reveal-match>div{display:block}.blind-reveal-match small,.blind-reveal-match strong{display:block}.blind-reveal-match strong{margin-top:4px}}
  `;
  document.head.appendChild(style);
  window.CATCHME_BLIND_PREDICTION=true;
}catch(err){console.error('Blind prediction install failed',err)}
})();