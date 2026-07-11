
const excuses=['今日は仕事😭','眠い…','お金ない😂','嫁が…','また今度！','今ゲーセン','30分なら！'];
const persuades=['東風だけ！','ラス半！','勝ったらジュース！','役満見せて！','牌が泣いてる！'];
let mood=0,wins=+localStorage.mjwins||0;
const chat=id=>document.getElementById('chat');
function bubble(t,me){let d=document.createElement('div');d.className=me?'me':'them';d.textContent=t;chat().appendChild(d);chat().scrollTop=chat().scrollHeight;}
function update(){document.getElementById('bar').style.width=Math.min(mood,100)+'%';document.getElementById('wins').textContent=wins;localStorage.mjwins=wins;}
document.getElementById('send').onclick=()=>{
 bubble('🀄 '+persuades[Math.floor(Math.random()*persuades.length)],true);
 if(Math.random()<0.22||mood>=100){setTimeout(()=>{bubble('…OK！行こう！！🎉',false);wins++;mood=0;update();},400);}
 else {setTimeout(()=>{bubble(excuses[Math.floor(Math.random()*excuses.length)],false);mood+=15+Math.random()*20;update();},400);}
};
document.getElementById('reset').onclick=()=>{chat().innerHTML='';mood=0;bubble('新しい友達が現れた！',false);update();}
bubble('友達に麻雀の誘いを送ろう！',false);update();
