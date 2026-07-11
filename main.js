
const excuses=['今日は仕事😭','眠い😪','また今度！','嫁が…','財布が空だ😂','飲み会🍺'];
const invites=['東風だけ！','30分だけ！','ラス半！','役満見よう！','牌が呼んでる！'];
let wins=+localStorage.wins||0,combo=0;
const chat=document.getElementById('chat'),typing=document.getElementById('typing');
function add(t,me){let d=document.createElement('div');d.className='b '+(me?'me':'them');d.textContent=t;chat.appendChild(d);chat.scrollTop=chat.scrollHeight;}
function hud(){winsEl.textContent=wins;comboEl.textContent=combo;localStorage.wins=wins;}
const winsEl=document.getElementById('wins'),comboEl=document.getElementById('combo');
add('友達を麻雀に誘おう！',0);hud();
send.onclick=()=>{
 combo++; if(navigator.vibrate)navigator.vibrate(15);
 add('🀄 '+invites[Math.random()*invites.length|0],1);
 typing.style.display='block';
 setTimeout(()=>{
 typing.style.display='none';
 if(Math.random()<0.25){add('OK！行こう！！🎉',0);wins++;combo=0;}
 else add(excuses[Math.random()*excuses.length|0],0);
 hud();
 },700);
};
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(()=>{});}
