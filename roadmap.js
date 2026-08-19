(()=>{
  const canonical=[
    {key:'catch',num:'01',title:'CATCH ME',subtitle:'How do you love?',desc:'先建立你的 baseline：心動、安全感、自由、界線。',color:'acid',locked:false},
    {key:'flirt',num:'02',title:'FLIRT WITH ME',subtitle:'How do you play?',desc:'眼神、訊息、反殺、死機。這章開始比較不正經。',color:'lav',locked:false},
    {key:'after',num:'03',title:'AFTER DARK',subtitle:'Desire · intimacy · boundaries',desc:'靠近之後，你怎麼感受慾望、界線、主動與脆弱。',color:'pink',locked:false},
    {key:'trust',num:'04',title:'TRUST ISSUES',subtitle:'Security · jealousy · distance',desc:'已讀不回、忙碌、前任、異性朋友與不確定感。你在哪裡開始不安？',color:'lav',locked:true,badge:'COMING NEXT'},
    {key:'fight',num:'05',title:'FIGHT ME',subtitle:'Conflict · communication',desc:'你追、你退、你要現在談，還是先冷靜？看看衝突時真正的你。',color:'acid',locked:true,badge:'LOCKED'},
    {key:'stay',num:'06',title:'STAY OR GO?',subtitle:'Repair · dealbreakers',desc:'什麼值得修，什麼一次就夠？愛一個人和適合留下，是同一件事嗎？',color:'pink',locked:true,badge:'LOCKED'},
    {key:'irl',num:'07',title:'LOVE ME IRL',subtitle:'Reality · compatibility',desc:'錢、工作、遠距、生活習慣、家人與時間。浪漫開始碰到現實。',color:'lav',locked:true,badge:'LOCKED'},
    {key:'life',num:'08',title:'BUILD A LIFE',subtitle:'Commitment · future',desc:'如果不是玩玩而已，你願意把什麼交進共同人生？',color:'acid',locked:true,badge:'FINAL CHAPTER'}
  ];

  function install(){
    if(typeof CHAPTERS==='undefined') return false;
    CHAPTERS.splice(0,CHAPTERS.length,...canonical);
    try{
      renderMap=function(){
        const unlockedCount=save.completed.includes('flirt')?3:save.completed.includes('catch')?2:1;
        $('#mapKnown').textContent=overallKnown()+'%';
        $('#mapWelcome').textContent=save.completed.length?`歡迎回來。你已經完成 ${save.completed.length} 個章節。下一層會更深，也更欠揍。`:'第一章先從最表面的心動開始。後面會越來越不客氣。';
        $('#chapterGrid').innerHTML=CHAPTERS.map((c,index)=>{
          const complete=save.completed.includes(c.key);
          const released=index<3;
          const unlocked=released&&index<unlockedCount;
          const current=unlocked&&!complete;
          const stat=save.chapterStats[c.key];
          const stateTxt=complete?'COMPLETE':unlocked?'UNLOCKED':c.badge||'LOCKED';
          return `<button type="button" class="chapter-card ${complete?'complete':current?'current':'locked'} ${unlocked?'unlocked':''}" data-chapter="${c.key}" ${unlocked?'':'disabled aria-disabled="true"'} aria-label="Chapter ${c.num}: ${c.title}. ${stateTxt}"><span class="chapter-state">${stateTxt}</span><span class="chapter-num">CHAPTER ${c.num} · ${c.subtitle.toUpperCase()}</span><h3>${c.title}</h3><p>${c.desc}</p>${stat?`<span class="chapter-score">CAUGHT ${stat.caught}/${stat.total} · ${stat.accuracy}% ACCURACY</span>`:''}</button>`;
        }).join('');
        document.querySelectorAll('.chapter-card.unlocked').forEach(el=>el.onclick=()=>startChapter(el.dataset.chapter));
      };
      if(typeof initLanding==='function') initLanding();
      if(document.querySelector('#map')?.classList.contains('active')) renderMap();
    }catch(e){console.warn('[CATCH ME] roadmap install warning',e)}
    return CHAPTERS.length===8;
  }

  if(!install()) document.addEventListener('DOMContentLoaded',install,{once:true});
})();