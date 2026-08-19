(()=>{
  const btn=document.querySelector('#shareBtn');
  if(!btn)return;

  function playableUrl(){
    const url=new URL(window.location.href);
    url.search='';
    url.hash='';
    return url.toString();
  }

  function buildShare(){
    const last=save?.lastChapter||'catch';
    const stat=save?.chapterStats?.[last]||{caught:0,total:15};
    const dom=typeof topTraits==='function'?(topTraits(save?.scores||{},1)[0]||'depth'):'depth';
    const chapter=typeof chapterMeta==='function'?chapterMeta(last):null;
    const signal=(typeof labels!=='undefined'&&labels[dom])?labels[dom][0]:'RELATIONSHIP SIGNAL';
    const line=(typeof quotes!=='undefined'&&quotes[dom])?quotes[dom]:'「別急著定義我。繼續學。」';
    const url=playableUrl();
    const text=`CATCH ME｜${chapter?.title||'RELATIONSHIP REPORT'}\nAI 抓到我 ${stat.caught}/${stat.total} 次。\n目前最強訊號：${signal}\n${line}\n\n你也來讓它猜看看：`;
    return {title:'CATCH ME — Don’t label me. Learn me.',text,url};
  }

  async function copyFallback(payload){
    const full=`${payload.text}\n${payload.url}`;
    try{
      await navigator.clipboard.writeText(full);
      const t=document.querySelector('#toast');
      if(t){t.textContent='結果＋遊戲連結已複製。去抓你的朋友 🙂';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400)}
    }catch(e){
      window.prompt('複製這段分享給朋友：',full);
    }
  }

  btn.textContent='分享結果＋遊戲連結';
  btn.onclick=async()=>{
    const payload=buildShare();
    if(navigator.share){
      try{
        await navigator.share(payload);
        return;
      }catch(e){
        if(e?.name==='AbortError')return;
      }
    }
    await copyFallback(payload);
  };
})();
