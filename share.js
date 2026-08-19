(()=>{
  const btn=document.querySelector('#shareBtn');
  const shared=document.querySelector('#shared');
  const landing=document.querySelector('#landing');
  function playableUrl(){const url=new URL(window.location.href);url.search='';url.hash='';return url}
  function safe(v,max=80){return String(v??'').slice(0,max)}
  function currentState(){try{return typeof save!=='undefined'&&save?save:JSON.parse(localStorage.getItem('catchme_v02')||'{}')}catch{return{}}}
  function shareLead(caught,total){const ratio=total?caught/total:0;if(ratio>=.73)return `不妙，AI 抓到我 ${caught}/${total} 次。它好像真的有在學。`;if(ratio<=.4)return `我把 AI 騙得有點慘：它只抓到我 ${caught}/${total} 次。🙂`;return `AI 抓到我 ${caught}/${total} 次。抓到一些，但還沒資格囂張。`}
  function buildShare(){
    const s=currentState();
    const last=s.lastChapter||s.completed?.[s.completed.length-1]||'catch';
    const stat=s.results?.[last]||s.chapterStats?.[last]||{caught:0,total:15};
    const dom=typeof topTraits==='function'?(topTraits(s.scores||{},1)[0]||'depth'):'depth';
    const chapter=typeof chapterMeta==='function'?chapterMeta(last):null;
    const signal=(typeof labels!=='undefined'&&labels[dom])?labels[dom][0]:'RELATIONSHIP SIGNAL';
    const line=(typeof quotes!=='undefined'&&quotes[dom])?quotes[dom]:'「別急著定義我。繼續學。」';
    const url=playableUrl();url.searchParams.set('r','1');url.searchParams.set('c',safe(last,16));url.searchParams.set('s',safe(dom,24));url.searchParams.set('h',String(Math.max(0,Math.min(99,Number(stat.caught)||0))));url.searchParams.set('t',String(Math.max(1,Math.min(99,Number(stat.total)||15))));
    const text=`CATCH ME｜${chapter?.title||'RELATIONSHIP REPORT'}\n${shareLead(Number(stat.caught)||0,Number(stat.total)||15)}\n目前最強訊號：${signal}\n${line}\n\n換你，看它抓不抓得到：`;
    return {title:'CATCH ME — Don’t label me. Learn me.',text,url:url.toString()};
  }
  async function copyFallback(payload){const full=`${payload.text}\n${payload.url}`;try{await navigator.clipboard.writeText(full);toast('結果＋可公開查看的連結已複製。去抓你的朋友 🙂')}catch(e){window.prompt('複製這段分享給朋友：',full)}}
  function toast(msg){const t=document.querySelector('#toast');if(!t)return;t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400)}
  function clearShareParams(){history.replaceState({},'',playableUrl().toString())}
  function showSharedResult(){const p=new URLSearchParams(location.search);if(p.get('r')!=='1'||!shared)return false;const key=p.get('c')||'catch',signalKey=p.get('s')||'depth',caught=Math.max(0,Math.min(99,parseInt(p.get('h')||'0',10)||0)),total=Math.max(1,Math.min(99,parseInt(p.get('t')||'15',10)||15)),cm=typeof chapterMeta==='function'?chapterMeta(key):null,signal=(typeof labels!=='undefined'&&labels[signalKey])?labels[signalKey][0]:'RELATIONSHIP SIGNAL',line=(typeof quotes!=='undefined'&&quotes[signalKey])?quotes[signalKey]:'「別急著定義我。繼續學。」';document.querySelector('#sharedChapter').textContent=`CHAPTER ${cm?.num||'01'} · ${cm?.title||'CATCH ME'}`;document.querySelector('#sharedSignal').textContent=signal;document.querySelector('#sharedCaught').textContent=caught;document.querySelector('#sharedTotal').textContent=total;document.querySelector('#sharedQuote').textContent=line;document.querySelectorAll('.screen').forEach(el=>el.classList.remove('active'));shared.classList.add('active');document.title=`${signal} — CATCH ME`;return true}
  if(btn){btn.textContent='分享結果＋公開結果卡';btn.onclick=async()=>{const payload=buildShare();if(navigator.share){try{await navigator.share(payload);return}catch(e){if(e?.name==='AbortError')return}}await copyFallback(payload)}}
  document.querySelector('#sharedPlayBtn')?.addEventListener('click',()=>{clearShareParams();if(typeof renderMap==='function'&&typeof show==='function'){renderMap();show('map')}else location.href=playableUrl().toString()});
  document.querySelector('#sharedHomeBtn')?.addEventListener('click',()=>{clearShareParams();document.title='CATCH ME — Don’t label me. Learn me.';document.querySelectorAll('.screen').forEach(el=>el.classList.remove('active'));landing?.classList.add('active');window.scrollTo({top:0,behavior:'smooth'})});
  showSharedResult();
})();