(()=>{
  function run(){
    const checks={
      chapter_count:typeof CHAPTERS!=='undefined'&&CHAPTERS.length===6,
      catch_questions:typeof Q!=='undefined'&&Q.catch?.length===15,
      flirt_questions:typeof Q!=='undefined'&&Q.flirt?.length===15,
      after_dark_questions:typeof Q!=='undefined'&&Q.after?.length===15,
      og_png:document.querySelector('meta[property="og:image"]')?.content?.endsWith('/og-card.png'),
      feedback_loaded:!!document.querySelector('.feedback-trigger'),
      native_cursor:document.documentElement.classList.contains('native-cursor'),
      mobile_viewport:document.querySelector('meta[name="viewport"]')?.content?.includes('viewport-fit=cover')
    };
    try{
      const s=JSON.parse(localStorage.getItem('catchme_v02')||'{}');
      if((s.completed||[]).includes('flirt')){
        const after=CHAPTERS.find(c=>c.key==='after');
        checks.after_dark_unlock=!!after&&!after.locked&&!!Q.after;
      }
    }catch{checks.storage_read=false}
    const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([k])=>k);
    window.CATCHME_HEALTH={ok:failed.length===0,checks,failed,checkedAt:new Date().toISOString()};
    if(failed.length){console.warn('[CATCH ME] beta health check failed:',failed);window.gtag?.('event','beta_health_fail',{failed:failed.join(',')})}
    else console.info('[CATCH ME] beta health check: OK');
  }
  window.addEventListener('load',()=>setTimeout(run,120));
})();