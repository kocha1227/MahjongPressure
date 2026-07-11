
const chat=q('chat'),typing=q('typing');
let wins=+(localStorage.v6wins||0);
const excuses=['仕事😭','眠い😪','飲み会🍺','また今度！','30分なら！'];
const invites=['東風だけ！','ラス半！','勝ったらジュース！','牌が呼んでる！'];
function q(i){return document.getElementById(i)}
function add(t,m){let d=document.createElement('div');d.className='b '+(m?'me':'them');d.textContent=t;chat.appendChild(d);chat.scrollTop=chat.scrollHeight;}
function update(){
 q('wins').textContent=wins;
 localStorage.v6wins=wins;
 let title='新人勧誘員',lv='雀士',mission='🎯 まずは5人成功を目指そう！';
 if(wins>=5){title='営業開始';mission='🏆 初対局達成！';}
 if(wins>=10){title='雀卓営業部';mission='📱 今日1人だけ実際に誘ってみよう！';}
 if(wins>=20){title='雀豪';lv='雀豪';mission='📸 誘えた？ YES/NOは自己申告でOK！';}
 if(wins>=50){title='雀聖';lv='雀聖';mission='🎉 50勝！既読スルー王に挑戦！';}
 q('title').textContent=title;q('level').textContent=lv;q('mission').textContent=mission;
}
q('send').onclick=()=>{
 add('🀄 '+invites[Math.random()*invites.length|0],1);
 typing.style.display='block';
 setTimeout(()=>{
 typing.style.display='none';
 if(Math.random()<0.4){add('OK！行こう！！🎉',0);wins++;}
 else add(excuses[Math.random()*excuses.length|0],0);
 update();
 },600)
}
add('友達を雀卓に集めよう！',0);update();
