(()=>{
const chapter={key:'after',num:'03',title:'AFTER DARK',subtitle:'Desire · intimacy · boundaries',desc:'靠近之後，你怎麼感受慾望、界線、主動與脆弱。',color:'pink'};
const questions=[
{text:'氣氛已經很明顯了，但沒有人先往前。你比較可能？',opts:['等他先動，我想知道他到底有多想靠近','我先靠近一點，看他會不會接','直接問：「我可以親你嗎？」','繼續聊天，讓張力自己燒','我有自己的版本'],traits:{A:['desire','reciprocity'],B:['initiation','tension'],C:['consent','direct'],D:['tension'],E:['boundary']}},
{text:'真正讓你覺得「被想要」的是？',opts:['他很明確地說出來','眼神跟距離，根本不用講','他主動靠近，但會確認我的反應','平常克制，只有私下對我失控一點','這題沒有我的弱點'],traits:{A:['clarity','desire'],B:['sensory','tension'],C:['consent','trust'],D:['exclusivity','contrast'],E:['desire']}},
{text:'親密互動裡，你比較喜歡誰掌握節奏？',opts:['他多一點，我喜歡被帶著走','我多一點，我喜歡主動','輪流，誰有感覺誰就接手','完全看當下，不要固定角色','我的答案比較複雜'],traits:{A:['trust','soft'],B:['confidence','direct'],C:['reciprocity','balance'],D:['freedom','tension'],E:['balance']}},
{text:'對方突然停下來問：「這樣可以嗎？」',opts:['超加分，安全感直接上升','可以，但不用每一步都問到像填表格','我會直接告訴他我想要什麼','氣氛可能斷一下，但我還是覺得該問','看關係跟當下，我自己說'],traits:{A:['consent','trust'],B:['tension','trust'],C:['direct','confidence'],D:['consent','boundary'],E:['boundary']}},
{text:'你最吃哪種親密感？',opts:['抱很久，什麼都不用做','很多眼神、靠近、故意不碰到','親吻跟明確的肢體親密','聊到最脆弱的地方，再安靜靠著','不能拆開，我要組合技'],traits:{A:['soft','trust'],B:['tension','sensory'],C:['desire','spark'],D:['depth','soft'],E:['balance']}},
{text:'如果你今天完全沒有心情，但對方很想靠近？',opts:['直接說今天不行，不需要愧疚','先抱抱，但清楚說界線在哪','會怕掃興，所以可能先配合一點','看他怎麼問；被尊重反而可能讓我放鬆','我要自己回答'],traits:{A:['boundary','direct'],B:['boundary','soft'],C:['soft'],D:['consent','trust'],E:['boundary']}},
{text:'哪個細節最容易讓你的理性短暫下線？',opts:['聲音突然變低','靠近時很好聞','手很自然地護著我／碰到我','眼神一直沒有移開','研究員不要蒐集弱點🙂'],traits:{A:['sensory'],B:['sensory','desire'],C:['soft','sensory'],D:['tension','desire'],E:['freedom']}},
{text:'你比較喜歡親密是「預期得到」還是「突然發生」？',opts:['有心理準備比較舒服','意外一點比較有火花','最好兩個都有：知道安全，但不知道下一秒','我其實更看對象，不看形式','拒絕二選一'],traits:{A:['clarity','trust'],B:['spark','tension'],C:['trust','spark'],D:['depth','freedom'],E:['freedom']}},
{text:'你說「等一下」，最理想的對方反應？',opts:['立刻停，不追問','停下來，問我還好嗎','停，拉開一點距離讓我自己決定下一步','用輕鬆方式確認，不讓氣氛變成壓力','這要看我為什麼喊停'],traits:{A:['consent','boundary'],B:['trust','soft'],C:['freedom','consent'],D:['play','trust'],E:['depth']}},
{text:'親密之後，你最需要的是？',opts:['抱一下／靠著，不急著分開','聊天，確認彼此現在的感受','各自安靜一下也完全可以','正常耍白痴，把氣氛變回日常','我真的看當天狀態'],traits:{A:['soft','trust'],B:['clarity','depth'],C:['freedom','trust'],D:['play','soft'],E:['balance']}},
{text:'對方說出一個你沒預期過的偏好。第一反應？',opts:['先問清楚，不代表答應也不代表拒絕','只要安全、尊重、雙方同意，可以聊','如果踩到我的線就直接不行','我會先消化一下，不想當場決定','研究員你問題很多'],traits:{A:['depth','boundary'],B:['consent','freedom'],C:['boundary','direct'],D:['freedom','depth'],E:['freedom']}},
{text:'你最不喜歡哪種「親密」？',opts:['把我的拒絕當欲擒故縱','什麼都不講，期待我自己猜','只顧自己，不讀我的反應','用親密來證明我愛不愛他','全部，謝謝。'],traits:{A:['consent','boundary'],B:['clarity','direct'],C:['reciprocity','trust'],D:['boundary','trust'],E:['boundary','consent']}},
{text:'如果你很喜歡一個人，但身體上的 chemistry 就是不太對？',opts:['會很困難，這對我很重要','可以慢慢磨合，不急著判死刑','感情夠深的話，我覺得能接受','要先確認是緊張、節奏問題，還是真的不合','我拒絕在假設題裡分手🤣'],traits:{A:['desire','spark'],B:['balance','trust'],C:['depth','soft'],D:['clarity','depth'],E:['freedom']}},
{text:'什麼會讓你在親密裡真正放鬆？',opts:['知道我隨時可以說停，而且不會被不爽','很確定對方只是在乎我，不是在表現自己','我們可以笑、可以失誤，不用演得很完美','我知道他懂我的反應，不用每次解釋','都重要，我不接受砍選項'],traits:{A:['consent','trust'],B:['trust','reciprocity'],C:['play','soft'],D:['depth','trust'],E:['balance']}},
{text:'AFTER DARK 最後一題。對你來說，好的親密最接近？',opts:['我可以很想你，也仍然完整地做自己','我們都很想靠近，而且誰都不用猜界線','有火花、有玩心，也有足夠的安全','我把平常不給人看的那一面交給你，你接得住','不要替我定義，繼續學。'],traits:{A:['freedom','desire'],B:['consent','clarity'],C:['spark','trust'],D:['depth','exclusivity'],E:['depth','freedom']}}
];
function install(){try{const i=CHAPTERS.findIndex(x=>x.key==='after');if(i>=0)Object.assign(CHAPTERS[i],chapter,{locked:false});else CHAPTERS.splice(2,0,chapter);Q.after=questions;return true}catch(e){return false}}
install();
function eligible(){try{const s=JSON.parse(localStorage.getItem('catchme_v02')||'{}');return (s.completed||[]).includes('flirt')}catch{return false}}
function patchCard(){if(!eligible())return;document.querySelectorAll('.chapter-card').forEach(card=>{if(!card.textContent.includes('AFTER DARK'))return;card.disabled=false;card.classList.remove('locked');card.removeAttribute('aria-disabled');card.style.pointerEvents='auto';card.style.opacity='1';card.onclick=e=>{e.preventDefault();e.stopPropagation();try{startChapter('after')}catch(err){console.error(err)}}})}
new MutationObserver(patchCard).observe(document.documentElement,{subtree:true,childList:true,attributes:true});document.addEventListener('DOMContentLoaded',patchCard);window.addEventListener('pageshow',patchCard);
})();