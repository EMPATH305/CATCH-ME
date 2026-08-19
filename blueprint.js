(()=>{
const pairs=[
{left:'SPARK',right:'SAFETY',a:['spark','tension','play','contrast','sensory'],b:['trust','clarity','soft'],note:['你目前比較容易被化學反應與張力啟動。','你目前更在意關係是否讓人安心、可預期。','你不是二選一型：有火花，但不能拿安全感交換。']},
{left:'FREEDOM',right:'CLOSENESS',a:['freedom','boundary'],b:['soft','reciprocity','exclusivity','trust'],note:['你需要保有自己的世界，靠近不等於合併。','被需要、被偏愛與靠近對你有明顯重量。','你同時要空間和連結；關鍵是靠近不能變成控制。']},
{left:'DIRECT',right:'OBSERVE',a:['direct','clarity','confidence'],b:['depth','attention','tension'],note:['不確定太久時，你比較傾向把事情攤開。','你會先讀空氣、收資料，再決定要不要出手。','你會觀察，但到了某個點仍然需要答案。']},
{left:'REPAIR',right:'EXIT',a:['balance','trust','soft'],b:['boundary','direct'],note:['你通常願意先找修復方案，而不是第一時間離開。','反覆踩線會快速消耗你的修復意願。','你願意修，但不是無限修；這條線會隨情境移動。']}
];
function load(){try{return JSON.parse(localStorage.getItem('catchme_v02'))||{}}catch{return{}}}
function sum(scores,arr){return arr.reduce((n,k)=>n+(scores[k]||0),0)}
function calc(scores,p){const a=sum(scores,p.a),b=sum(scores,p.b),total=a+b;if(!total)return{pct:50,note:'資料還不夠。繼續玩，這條軸才會開始移動。'};const pct=Math.max(8,Math.min(92,Math.round((b/total)*100)));const delta=Math.abs(a-b)/(total||1);return{pct,note:delta<.2?p.note[2]:a>b?p.note[0]:p.note[1]}}
function mount(){const grid=document.querySelector('.blueprint-grid');if(!grid||document.querySelector('.blueprint-v2'))return;grid.insertAdjacentHTML('afterbegin','<section class="blueprint-v2"><div class="blueprint-v2-head"><div><p class="card-label">YOUR RELATIONSHIP TENSIONS</p><h3>不是一個標籤。<br>是幾條正在拉扯的線。</h3></div><p>這些軸只描述你目前答案裡反覆出現的傾向；完成更多章節，它們會繼續移動。</p></div><div id="tensionList" class="tension-list"></div><p class="blueprint-disclaimer">CATCH ME 是互動式自我探索遊戲，不是心理診斷。結果會隨你完成更多章節而更新。</p></section>');render()}
function render(){const box=document.querySelector('#tensionList');if(!box)return;const scores=load().scores||{};box.innerHTML=pairs.map(p=>{const x=calc(scores,p);return `<div class="tension-row"><span class="tension-side">${p.left}</span><div class="tension-track"><i class="tension-dot" style="left:${x.pct}%"></i></div><span class="tension-side">${p.right}</span><p class="tension-note">${x.note}</p></div>`}).join('')}
document.addEventListener('DOMContentLoaded',()=>{mount();new MutationObserver(()=>{if(document.querySelector('#results')?.classList.contains('active'))render()}).observe(document.body,{subtree:true,attributes:true,attributeFilter:['class']})});
})();