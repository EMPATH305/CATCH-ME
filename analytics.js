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
      track('chapter_select',{chapter_title:title});
    }
    if(el.id==='lockBtn'){
      const chapter=document.querySelector('#chapterLabel')?.textContent||'';
      const q=document.querySelector('#questionCount')?.textContent||'';
      track('question_answered',{chapter_label:chapter,chapter:chapterKey(),question_progress:q});
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

/* Public Beta bias pass: keep CATCH ME's voice, remove the assumption that the player is
   always the person being pursued / protected / flustered. No gender split: agency is the axis. */
(()=>{
  if(typeof Q==='undefined') return;
  const set=(chapter,index,text,opts,traits)=>{
    if(!Q[chapter]||!Q[chapter][index]) return;
    Q[chapter][index]={text,opts,traits};
  };

  // CH.01 — add neutral / initiating / boundary reactions instead of four flavours of "被撩到".
  set('catch',0,
    '聚會裡，你注意到某個人好像一直在看你。你會？',
    ['沒特別反應，視線不一定代表什麼','有興趣的話，我會直接看回去','我可能主動找機會跟對方講話','先觀察一下，確認是不是我想太多','都不是，我有自己的版本'],
    {A:['freedom'],B:['spark','direct'],C:['direct','confidence'],D:['depth','clarity'],E:['depth']});
  set('catch',5,
    '你們的距離突然近到有點超過普通朋友。',
    ['我沒特別反應，距離近不代表什麼','如果我也有意思，我會故意不退','我可能反而再靠近一點，看對方反應','不管喜不喜歡，不舒服我就會拉開距離','研究員管太多，我自己答'],
    {A:['freedom'],B:['spark','tension'],C:['spark','direct'],D:['boundary','freedom'],E:['spark']});

  // CH.02 — break the opening run of recipient-only flirting scenes.
  set('flirt',0,
    '你跟喜歡的人對到眼，而且誰都沒有立刻移開。你比較可能？',
    ['當沒事，繼續做自己的事','直接笑一下或開口：「怎樣？」','就看回去，看誰先撐不住','如果我有興趣，我會主動找機會靠近','別管我，我有自己的玩法'],
    {A:['freedom','contrast'],B:['direct','play'],C:['tension','confidence'],D:['confidence','spark'],E:['spark','confidence']});
  set('flirt',1,
    '曖昧的人突然很直接地稱讚你。你的第一反應比較像？',
    ['收下：「謝啦。」不特別腦補','順勢問：「所以你現在是在撩我？」','稱讚回去，看對方接不接得到','如果我也喜歡，我會乾脆把球丟得更明顯','我要自己回'],
    {A:['freedom'],B:['direct','tension'],C:['reciprocity','play'],D:['confidence','spark'],E:['direct']});
  set('flirt',2,
    '你感覺彼此有點意思，但還沒有人把話說破。你會？',
    ['先照原本節奏，不急著定義','丟一顆明顯一點的球測試','直接約出去，行動比猜有用','享受拉扯，晚一點說破比較好玩','我有更狠的'],
    {A:['freedom'],B:['play','tension'],C:['direct','confidence'],D:['tension','spark'],E:['confidence']});
  set('flirt',4,
    '曖昧一陣子後，對方突然把主動權留給你。',
    ['好，那換我往前走','我會先確認對方是不是也想要','故意不動，看誰先輸','如果一直要猜，我會直接問清楚','我的反應不能公開'],
    {A:['confidence','reciprocity'],B:['trust','reciprocity'],C:['tension','play'],D:['clarity','direct'],E:['spark']});
  set('flirt',7,
    '你們靠得很近，氣氛已經明顯不是普通朋友。你會？',
    ['如果我也想靠近，我會主動一點','我會等對方給更明確的訊號','我會直接問／說出我的意思','沒那個感覺的話，我會自然拉開距離','研究員不要問了'],
    {A:['confidence','reciprocity'],B:['tension','trust'],C:['direct','clarity'],D:['boundary','freedom'],E:['spark']});
  set('flirt',13,
    '哪種「你對我不一樣」最容易讓你有感？',
    ['在人群裡會自然注意到彼此','記得我講過的小事，我也會記得對方的','只有我們之間才有的梗或相處模式','喜歡就直接說，不用讓我解謎','拜託不要逼我選'],
    {A:['attention','exclusivity'],B:['attention','depth'],C:['contrast','exclusivity'],D:['clarity','reciprocity'],E:['balance']});

  // CH.03 — keep consent/boundaries, broaden agency and sensory language.
  set('after',0,
    '氣氛已經很明顯了，但沒有人先往前。你比較可能？',
    ['先不動，看看對方會不會給更明確的訊號','我先靠近一點，看對方會不會接','直接問：「我可以親你嗎？」','繼續聊天，讓張力自己燒','我有自己的版本'],
    {A:['desire','tension'],B:['initiation','reciprocity'],C:['consent','direct'],D:['tension'],E:['boundary']});
  set('after',1,
    '真正讓你感覺到「我們都想靠近」的是？',
    ['有人很明確地把想法說出來','眼神跟距離已經很有答案','其中一個先靠近，但會讀對方的反應','平常都克制，只有彼此之間明顯不一樣','這題沒有我的弱點'],
    {A:['clarity','desire'],B:['sensory','tension'],C:['consent','reciprocity'],D:['exclusivity','contrast'],E:['desire']});
  set('after',2,
    '親密互動裡，你比較喜歡節奏怎麼形成？',
    ['對方主導多一點，我比較能放鬆','我主導多一點，我喜歡掌握節奏','輪流，誰有感覺誰就接手','完全看當下，不要固定角色','我的答案比較複雜'],
    {A:['trust','soft'],B:['confidence','direct'],C:['reciprocity','balance'],D:['freedom','tension'],E:['balance']});
  set('after',6,
    '哪個細節最容易讓你的理性短暫下線？',
    ['說話的聲音／語氣突然變得很有張力','靠近時的氣味或距離感','對方做某件事時突然超專注、很有掌控感','一個很明確、沒有移開的眼神','研究員不要蒐集弱點🙂'],
    {A:['sensory'],B:['sensory','desire'],C:['competence','sensory'],D:['tension','desire'],E:['freedom']});
})();