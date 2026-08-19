(()=>{
/* Question Bank v2: broader reaction spectrum. A-D carry signals; E means model miss and never changes traits. */
const none=(text='都不是，你沒抓到我')=>text;
const e={E:[]};
const q=(text,opts,traits)=>({text,opts:[...opts,none()],traits:{...traits,...e}});
try{
Q.catch=[
q('聚會裡有個人一直偷偷看你。你發現了。',['沒特別反應，先做自己的事','直接看回去。🙂','笑一下，再移開視線','先觀察：他是真的在看我嗎？'],{A:['freedom'],B:['spark','direct'],C:['spark','soft'],D:['depth','clarity']}),
q('對方突然說：「你今天很好看。」',['「謝謝。」正常接住，不特別解讀','我會想知道他是認真還是隨口講','如果我也有好感，我會稱讚回去','表面淡定，但確實有被打到'],{A:['freedom'],B:['clarity','depth'],C:['reciprocity','spark'],D:['soft','spark']}),
q('你最容易被哪一種瞬間擊中？',['做事可靠、能力突然全開','聊天意外地很合，不需要硬找話題','一句很準的幽默或冷面吐槽','他怎麼對人、怎麼處理小事'],{A:['competence'],B:['depth'],C:['spark','contrast'],D:['trust','attention']}),
q('你們聊天超合，但對方偶爾會消失幾個小時。',['正常啊，大家都有自己的生活','可以，但如果會很久，講一聲我更舒服','我不會只看回訊速度，先看整體互動','如果模式突然改變，我會想確認發生什麼'],{A:['freedom','trust'],B:['clarity','trust'],C:['balance','trust'],D:['clarity','depth']}),
q('最理想的約會，比較像哪個？',['一起亂逛，看到什麼就做什麼','有安排，但中間保留很多即興','有一件明確想做的事，做完各自回家也很好','在舒服的地方待著，聊天或各做各的'],{A:['freedom','spark'],B:['balance','spark'],C:['grounded','competence'],D:['depth','soft']}),
q('你們的距離突然近到有點超過普通朋友。',['我沒特別反應，距離近不代表什麼','如果我也有意思，我會留在原地','我可能主動靠近一點，讓意思更清楚','不管喜不喜歡，不舒服我就會拉開'],{A:['freedom'],B:['tension','spark'],C:['direct','confidence'],D:['boundary']}),
q('你心情不好，但還沒準備好講。你希望對方？',['問一次，然後把選擇權留給我','陪著就好，不一定要解決','想辦法讓日常先恢復一點','如果我開口求助，再一起分析怎麼處理'],{A:['trust','freedom'],B:['soft','trust'],C:['balance','soft'],D:['clarity','competence']}),
q('你發現對方跟某個人互動有點曖昧。第一步？',['直接問清楚，不演內心劇場','先觀察，確定不是我過度解讀','如果只是正常社交，我不會特別處理','先想清楚我的界線，再決定要不要談'],{A:['clarity','direct'],B:['depth','clarity'],C:['freedom','trust'],D:['boundary','balance']}),
q('你們第一次真正吵架，對方說：「我現在不想談。」',['好，但我們約一個時間再談','我希望至少先確認問題不會被丟著','可以，等彼此冷靜後再處理','我也需要空間，先各自停一下'],{A:['clarity','balance'],B:['direct','clarity'],C:['trust','balance'],D:['freedom']}),
q('同一個問題已經發生第三次。',['再談一次，但這次要有具體改變','開始評估這是不是根本不適合','如果踩到核心底線，我會離開','看問題嚴重程度，不用所有事都三振出局'],{A:['clarity','trust'],B:['clarity','competence'],C:['boundary','direct'],D:['balance','depth']}),
q('你們對未來規劃完全不同，但都還很愛。',['一起找中間方案，看有沒有真的可行','愛不一定能解決現實，不合就可能要停','先不要急著決定，讓情況更清楚再談','把各自不能退的底線講清楚，再做選擇'],{A:['balance','trust'],B:['boundary','clarity'],C:['depth','balance'],D:['clarity','boundary']}),
q('你最想要的親密感是？',['各忙各的，但知道彼此一直在','什麼都能聊，腦袋很對頻','日常可靠，需要時真的找得到人','一起玩、一起冒險，也保有自己的生活'],{A:['freedom','trust'],B:['depth','clarity'],C:['competence','trust'],D:['spark','balance']}),
q('哪句話最容易讓你真正安心？',['「去做你的事，我在。」','「有問題我們一起處理。」','「不用一直確認，我會用行動讓你知道。」','「我選你，而且我會說清楚。」'],{A:['freedom','trust'],B:['competence','trust'],C:['trust','grounded'],D:['clarity','trust']}),
q('一個人很有火花但總讓你猜；另一個很穩但完全沒火花。',['我會先看第一個能不能把話講清楚','我比較可能選穩定，但還是需要基本吸引力','兩個都不要，這不是必選題','我不會只用火花或穩定判斷，還要看相處本身'],{A:['spark','clarity'],B:['trust','balance'],C:['boundary'],D:['depth','balance']}),
q('最後一題。你覺得愛最接近哪一句？',['我不需要你完成我，但希望你站在我旁邊','喜歡不一定很戲劇化，但我會把你放進生活','即使不同，我們還是一次次選擇彼此','有人真正看見我，而且尊重我仍然是我'],{A:['freedom','balance'],B:['grounded','trust'],C:['trust','balance'],D:['depth','boundary']})
];
Q.flirt=[
q('你發現喜歡的人一直看你。最像你的反應？',['沒特別反應，先做自己的事','直接問：「你一直看我幹嘛？」','看回去，但不急著做下一步','如果我也有意思，會給一個明確訊號'],{A:['freedom'],B:['direct'],C:['tension','confidence'],D:['reciprocity','spark']}),
q('對方突然說：「因為你好看啊。」',['「謝謝。」正常接住，不特別解讀','我會想知道他是認真還是隨口講','有好感的話，我也會稱讚回去','順著他的話玩下去，看他能撐多久'],{A:['grounded','freedom'],B:['clarity','depth'],C:['reciprocity'],D:['play','spark']}),
q('有人問：「你剛剛是不是被我撩到了？」',['老實說有或沒有，不想玩猜謎','不回答這個問題，笑笑帶過','如果有，我承認也沒差','我會反問一句，把問題丟回去'],{A:['direct','clarity'],B:['freedom'],C:['confidence','soft'],D:['play','spark']}),
q('你確定彼此有意思。接下來誰主動比較理想？',['對方多一點，我需要知道自己真的被想要','我多一點也沒差，我習慣自己決定節奏','誰想靠近誰就主動，不需要算次數','我還是會慢慢來，有意思不代表現在就要推進'],{A:['reciprocity','clarity'],B:['direct','confidence'],C:['balance','reciprocity'],D:['boundary','freedom']}),
q('對方突然不像之前那麼主動。',['我會直接問最近是不是有什麼改變','先觀察一陣子，不急著下結論','我照自己的步調，不會因為他停就追','如果我想靠近，我還是會主動一次看看'],{A:['clarity','direct'],B:['depth'],C:['freedom','grounded'],D:['confidence','reciprocity']}),
q('如果一直都只有你主動？',['沒差，只要他的回應讓我知道他有意思','久了會累，我也需要被主動靠近','我會直接確認：你到底有沒有興趣？','我不特別問，但會慢慢把投入收回來'],{A:['confidence','trust'],B:['reciprocity'],C:['clarity','direct'],D:['boundary']}),
q('哪件事比較可能讓你突然對一個人有感？',['他做事很可靠，而且真的有能力','聊天意外地很合，不需要一直找話題','他很明確地讓我知道：「我對你有興趣。」','某個很難解釋的小瞬間——眼神、笑、氣氛'],{A:['competence'],B:['depth'],C:['clarity','reciprocity'],D:['spark','sensory']}),
q('曖昧已經很明顯，對方主動拉近距離。',['如果我也想，我會自然接住','即使喜歡，我還是需要自己的速度','我可能主動更多，讓意思更明確','我會先確認自己是真的想靠近，不是因為氣氛到了'],{A:['reciprocity'],B:['boundary','freedom'],C:['direct','confidence'],D:['clarity','grounded']}),
q('公開場合很普通，私下卻突然親密很多。',['我喜歡，親密本來就不一定要給別人看','我會疑惑：為什麼只有私下？','沒差，只要前後不是兩種完全不同的人','如果這讓我覺得自己被藏起來，我會直接談'],{A:['exclusivity','freedom'],B:['clarity','trust'],C:['balance','grounded'],D:['boundary','direct']}),
q('什麼最容易讓你開始覺得一個人有吸引力？',['能力、專注、做事的樣子','外型、穿搭、聲音或氣味','幽默感，尤其真的接得到我的梗','他怎麼對人、怎麼處理事情'],{A:['competence'],B:['aesthetic','sensory'],C:['play','depth'],D:['trust','attention']}),
q('一個人很會撩，但你發現他對很多人都這樣。',['沒差，會聊天不等於承諾','吸引力會下降，我在意那是不是只對我的','我先看行動，不靠撩人的話判斷','如果我們已經有共識，我會直接問界線'],{A:['freedom','grounded'],B:['exclusivity'],C:['trust','competence'],D:['clarity','boundary']}),
q('你傳了一個有點曖昧的訊息，對方很久沒回。',['繼續過我的生活，他有空自然會回','會有點在意，但不會立刻做什麼','如果常常這樣，我會重新判斷他的投入','下次見面正常聊，不想靠訊息腦補關係'],{A:['freedom','grounded'],B:['soft','depth'],C:['clarity','boundary'],D:['direct','grounded']}),
q('你比較喜歡哪種曖昧？',['其實我不太喜歡曖昧，有意思就講清楚','慢慢熟、慢慢確認，不急著命名','有來有往、很好玩，享受那段不確定','我不在乎形式，只在乎對方是不是一致'],{A:['clarity','direct'],B:['trust','depth'],C:['play','spark'],D:['grounded','trust']}),
q('你發現自己好像比對方更投入。',['我會說出來，確認我們是不是在同一頁','先降低投入，看看這段關係實際上是什麼','不一定有問題，兩個人的速度本來就可能不同','如果差距持續很久，我會離開'],{A:['clarity','soft'],B:['boundary','grounded'],C:['trust','balance'],D:['boundary','direct']}),
q('最後。如果你真的喜歡一個人，你最希望他知道什麼？',['我喜歡你，但我還是需要自己的生活','不用讓我猜。想要我，就讓我知道','我可能沒有很會表現，但不代表我沒有在意','跟我玩可以，但重要的事情不要玩'],{A:['freedom','balance'],B:['clarity','reciprocity'],C:['depth','soft'],D:['play','boundary']})
];
Q.after=[
q('氣氛已經很明顯了，但沒有人先往前。你比較可能？',['先不動，我不急著把氣氛變成行動','我先靠近一點，看對方會不會接','直接問：「我可以親你嗎？」','如果我還不確定自己想不想，我會繼續聊'],{A:['freedom','tension'],B:['initiation','reciprocity'],C:['consent','direct'],D:['clarity','boundary']}),
q('真正讓你感覺到「我們都想靠近」的是？',['有人很明確地把想法說出來','眼神跟距離已經很有答案','其中一個先靠近，但會讀對方的反應','我其實需要比氣氛更多的確認才會這樣想'],{A:['clarity','desire'],B:['sensory','tension'],C:['consent','reciprocity'],D:['trust','clarity']}),
q('親密互動裡，你比較喜歡節奏怎麼形成？',['對方主導多一點，我比較能放鬆','我主導多一點，我喜歡掌握節奏','輪流，誰有感覺誰就接手','沒有固定偏好，舒服和能溝通比較重要'],{A:['trust','soft'],B:['confidence','direct'],C:['reciprocity','balance'],D:['balance','consent']}),
q('對方突然停下來問：「這樣可以嗎？」',['很加分，我喜歡明確確認','可以，但不用每一步都問到像填表格','我會直接告訴他我想要或不要什麼','我可能需要停一下，確認自己現在的感覺'],{A:['consent','trust'],B:['tension','trust'],C:['direct','confidence'],D:['boundary','clarity']}),
q('哪種親密感對你最有重量？',['抱著或靠著，不一定需要更多','眼神、距離和那種還沒發生的張力','明確的肢體親密','能談脆弱的事，而且不用急著修好彼此'],{A:['soft','trust'],B:['tension','sensory'],C:['desire','spark'],D:['depth','trust']}),
q('如果你今天完全沒有心情，但對方很想靠近？',['直接說今天不行，不需要愧疚','可以陪伴或抱抱，但界線講清楚','我會先確認自己是不想親密，還是只是累','看對方怎麼回應；被尊重比維持氣氛重要'],{A:['boundary','direct'],B:['boundary','soft'],C:['clarity','depth'],D:['consent','trust']}),
q('什麼比較可能讓你突然感覺到吸引力？',['聲音、語氣或某個感官細節','靠近時的距離感和氣氛','對方專注做事、很有能力的樣子','對我來說吸引力通常不是一個瞬間，是慢慢累積'],{A:['sensory'],B:['sensory','desire'],C:['competence'],D:['depth','trust']}),
q('你比較喜歡親密是「預期得到」還是「突然發生」？',['有心理準備比較舒服','意外一點比較有火花','知道彼此都想要，但細節不用全部預演','我沒有固定偏好，更看人和當天狀態'],{A:['clarity','trust'],B:['spark','tension'],C:['trust','spark'],D:['balance','freedom']}),
q('你說「等一下」，最理想的對方反應？',['立刻停，不把我的停頓當成需要說服','停下來，問我還好嗎','停，拉開一點距離讓我自己決定下一步','正常一點就好，不需要把氣氛變成審問'],{A:['consent','boundary'],B:['trust','soft'],C:['freedom','consent'],D:['balance','trust']}),
q('親密之後，你最需要的是？',['靠著或待在一起一下','聊聊彼此現在的感受','各自安靜一下也完全可以','回到正常日常，不一定需要特別做什麼'],{A:['soft','trust'],B:['clarity','depth'],C:['freedom','trust'],D:['grounded','balance']}),
q('對方說出一個你沒預期過的偏好。第一反應？',['先問清楚，不代表答應也不代表拒絕','只要安全、尊重、雙方同意，可以聊','如果踩到我的線就直接不行','我會先消化，不想當場做決定'],{A:['depth','boundary'],B:['consent','freedom'],C:['boundary','direct'],D:['freedom','depth']}),
q('你最不能接受哪種「親密」？',['把我的拒絕當欲擒故縱','什麼都不講，期待我自己猜','只顧自己，不讀我的反應','拿親密程度來證明我愛不愛他'],{A:['consent','boundary'],B:['clarity','direct'],C:['reciprocity','trust'],D:['boundary','trust']}),
q('如果你很喜歡一個人，但身體上的 chemistry 就是不太對？',['這對我很重要，我會認真面對不合的可能','可以慢慢磨合，不急著判死刑','身體吸引不是我最主要的判準','先確認是緊張、節奏問題，還是真的不合'],{A:['desire','spark'],B:['balance','trust'],C:['depth','freedom'],D:['clarity','depth']}),
q('什麼會讓你在親密裡真正放鬆？',['知道我隨時可以說停，而且不會被不爽','很確定對方在乎我的感受，不是在表現自己','可以笑、可以失誤，不需要演得很完美','彼此能直接說需求，不用靠猜'],{A:['consent','trust'],B:['trust','reciprocity'],C:['play','soft'],D:['clarity','trust']}),
q('AFTER DARK 最後一題。對你來說，好的親密最接近？',['我可以很想你，也仍然完整地做自己','我們都想靠近，而且誰都不用猜界線','有火花很好，但安全和尊重不能拿掉','親密不一定要很強烈；能自在做自己也算'],{A:['freedom','desire'],B:['consent','clarity'],C:['spark','trust'],D:['grounded','depth']})
];
window.CATCHME_QUESTION_BANK_VERSION='2.0';
}catch(err){console.error('Question Bank v2 install failed',err)}
})();