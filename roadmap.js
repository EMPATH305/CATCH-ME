(()=>{
  const future=[
    {key:'trust',num:'04',title:'TRUST ISSUES',subtitle:'Security · jealousy · distance',desc:'已讀不回、忙碌、前任、異性朋友與不確定感。你在哪裡開始不安？',color:'lav',locked:true,badge:'COMING NEXT'},
    {key:'fight',num:'05',title:'FIGHT ME',subtitle:'Conflict · communication',desc:'你追、你退、你要現在談，還是先冷靜？看看衝突時真正的你。',color:'acid',locked:true,badge:'LOCKED'},
    {key:'stay',num:'06',title:'STAY OR GO?',subtitle:'Repair · dealbreakers',desc:'什麼值得修，什麼一次就夠？愛一個人和適合留下，是同一件事嗎？',color:'pink',locked:true,badge:'LOCKED'},
    {key:'irl',num:'07',title:'LOVE ME IRL',subtitle:'Reality · compatibility',desc:'錢、工作、遠距、生活習慣、家人與時間。浪漫開始碰到現實。',color:'lav',locked:true,badge:'LOCKED'},
    {key:'life',num:'08',title:'BUILD A LIFE',subtitle:'Commitment · future',desc:'如果不是玩玩而已，你願意把什麼交進共同人生？',color:'acid',locked:true,badge:'FINAL CHAPTER'}
  ];

  function install(){
    // app.js declares CHAPTERS with top-level const. In a classic script that is
    // globally visible by identifier, but deliberately is NOT window.CHAPTERS.
    if(typeof CHAPTERS==='undefined') return false;
    const firstThree=CHAPTERS.filter(c=>['catch','flirt','after'].includes(c.key));
    CHAPTERS.splice(0,CHAPTERS.length,...firstThree,...future);
    return CHAPTERS.length===8;
  }

  if(!install()) document.addEventListener('DOMContentLoaded',install,{once:true});
})();