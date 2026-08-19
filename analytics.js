(()=>{
  const sent=new Set();
  const track=(name,params={})=>{
    if(typeof window.gtag!=='function')return;
    window.gtag('event',name,params);
  };
  const once=(key,name,params={})=>{if(sent.has(key))return;sent.add(key);track(name,params)};
  const chapterKey=()=>{
    const label=document.querySelector('#chapterLabel')?.textContent||document.querySelector('#reportLabel')?.textContent||'';
    const m=label.match(/(?:CHAPTER|REPORT)\s*0?(\d+)/i);
    return m?`ch_${m[1].padStart(2,'0')}`:'unknown';
  };

  document.addEventListener('click',e=>{
    const el=e.target.closest('button');
    if(!el)return;
    if(el.id==='startBtn'||el.id==='howStartBtn') track('game_entry',{entry_point:el.id==='startBtn'?'landing':'how'});
    if(el.id==='sharedPlayBtn') track('shared_result_play_click');
    if(el.id==='shareBtn') track('share_result_click',{chapter:chapterKey()});
    if(el.id==='continueBtn') track('result_continue_click',{chapter:chapterKey()});
    if(el.classList.contains('result-image-btn')) track('result_card_intent',{chapter:chapterKey()});
    if(el.classList.contains('chapter-card')&&!el.disabled){
      const title=el.querySelector('h3')?.textContent||'chapter';
      track('chapter_select',{chapter_title:title,chapter_key:el.dataset.chapter||'unknown'});
    }
    if(el.id==='lockBtn'){
      track('question_answered',{
        chapter_label:document.querySelector('#chapterLabel')?.textContent||'',
        chapter:chapterKey(),
        question_progress:document.querySelector('#questionCount')?.textContent||''
      });
    }
  },true);

  const observer=new MutationObserver(()=>{
    const results=document.querySelector('#results');
    if(results?.classList.contains('active')){
      const label=document.querySelector('#reportLabel')?.textContent||'report';
      const caught=Number(document.querySelector('#caughtScore')?.textContent||0);
      const chapter=chapterKey();
      once(`complete:${label}`,'chapter_complete',{report_label:label,chapter,caught_count:caught,total_questions:15});
      once(`result:${label}`,'result_view',{report_label:label,chapter});
    }
    const shared=document.querySelector('#shared');
    if(shared?.classList.contains('active')) once('shared-view','shared_result_view');
  });
  observer.observe(document.body,{subtree:true,attributes:true,attributeFilter:['class']});
  once('session','catch_me_session');
})();