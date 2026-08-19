(()=>{
  function allTraitKeys(){
    if(typeof Q==='undefined')return[];
    const keys=new Set();
    Object.values(Q).forEach(list=>(list||[]).forEach(q=>Object.values(q.traits||{}).forEach(ts=>(ts||[]).forEach(t=>keys.add(t)))));
    return[...keys];
  }
  function run(){
    const traitKeys=allTraitKeys();
    const checks={
      chapter_count:typeof CHAPTERS!=='undefined'&&CHAPTERS.length===8,
      roadmap_keys:typeof CHAPTERS!=='undefined'&&['catch','flirt','after','trust','fight','stay','irl','life'].every((k,i)=>CHAPTERS[i]?.key===k),
      catch_questions:typeof Q!=='undefined'&&Q.catch?.length===15,
      flirt_questions:typeof Q!=='undefined'&&Q.flirt?.length===15,
      after_dark_questions:typeof Q!=='undefined'&&Q.after?.length===15,
      future_locked:typeof CHAPTERS!=='undefined'&&CHAPTERS.slice(3).every(c=>c.locked===true),
      trait_labels_complete:traitKeys.length>0&&traitKeys.every(k=>typeof labels!=='undefined'&&Array.isArray(labels[k])&&labels[k][0]&&labels[k][1]),
      trait_quotes_complete:traitKeys.length>0&&traitKeys.every(k=>typeof quotes!=='undefined'&&typeof quotes[k]==='string'&&quotes[k].length>0),
      og_png:document.querySelector('meta[property="og:image"]')?.content?.endsWith('/og-card.png'),
      feedback_loaded:!!document.querySelector('.feedback-trigger'),
      native_cursor:document.documentElement.classList.contains('native-cursor'),
      mobile_viewport:document.querySelector('meta[name="viewport"]')?.content?.includes('viewport-fit=cover'),
      results_single_owner:typeof window.openCatchMeArchivedResult==='undefined',
      analytics_isolation:typeof Q!=='undefined'&&Q.catch?.[0]?.text==='聚會裡有個人一直偷偷看你。你發現了。'
    };
    try{
      const s=JSON.parse(localStorage.getItem('catchme_v02')||'{}');
      if((s.completed||[]).includes('flirt')){
        const after=CHAPTERS.find(c=>c.key==='after');
        checks.after_dark_unlock=!!after&&!after.locked&&!!Q.after;
      }
    }catch{checks.storage_read=false}
    const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([k])=>k);
    window.CATCHME_HEALTH={ok:failed.length===0,checks,failed,traitKeys,checkedAt:new Date().toISOString()};
    if(failed.length){console.warn('[CATCH ME] beta health check failed:',failed);window.gtag?.('event','beta_health_fail',{failed:failed.join(',')})}
    else console.info('[CATCH ME] beta health check: OK');
  }
  window.addEventListener('load',()=>setTimeout(run,180));
})();