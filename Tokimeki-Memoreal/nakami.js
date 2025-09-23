let talknow = 0;
let x = 0;
let y = 0;  
let z = 0;
let serif1
let serif2
let serif3
let msg1 = [];
let msg2 = [];
let msg3 = [];
let rmse = [];
let room = 0; //部屋の区分です。シーンとも言う
let phase = 0;//部屋内の区分です。もうrpgの応用よね
let readmessage = 0;
let haveaddress = 1;
let ayaya = {
    name: 'アヤヤ', //名前変更イベントとかで変えれるようにする用
    likability: 40,
}
let luna = {
    name: 'ルナ',
    likability: 20,
}
function delay(ms) {return new Promise(resolve => setTimeout(resolve, ms));} //今回使うかわからんけど

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
    playername = document.getElementById("InputPlayername").value;
    if(playername == ''){playername = 'あなた';document.getElementById('SuguKieru').innerHTML= '';reset();}else{document.getElementById('SuguKieru').innerHTML= '';reset();
}}});
function reset(){
  x = 0; y = 0; z = 0;
  room = 0;
 chara = ['？？？',playername,'？？？',playername,'アヤヤ',playername,'アヤヤ',playername,'アヤヤ','アヤヤ','アヤヤ',playername,'アヤヤ',playername,'コッペくん']
  msg1 = ['..ぇ.....て...','ん....?','ねぇ..きて...','んん...?','ねぇ起きて！！','ん？あ、おはよう','おはようじゃなくて!','まあそのくらいならもうちょっと寝てても..','確かに...?','じゃなくて！','もうみんな帰っちゃったよ？！','んぇ？','そうかなぁ...','おけ、れっつご〜','えと..'];
  msg2 = [' ',' ',' ',' ',' ',' ','もう3時だけど?!',' ',' ','なんで学校来てからずっと寝てるの？！',' ','まあそのくらい許されるって','てか、帰るよ！もう門閉まっちゃうから！！',' ','これはこんな感じに話が進むお話です！'];
  msg3 = [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','やりたかったらすすんでってね〜？'];
  rmse = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
  talknow = 1; readmessage = 0;
  Nextmsg();
}
function ch(name){document.getElementById('CharacterName').textContent = name;}
function s1(msg){document.getElementById('serif1').textContent = msg;}
function s2(msg){document.getElementById('serif2').textContent = msg;}
function s3(msg){document.getElementById('serif3').textContent = msg;}
function choicese2(){document.getElementById('Choicese').innerHTML = '<button id="Choice1" class="Choice" onclick="choice1()"></button><br><br><button id="Choice2" class="Choice" onclick="choice2()"></button>';}
function choicese3(){document.getElementById('Choicese').innerHTML = '<button id="Choice1" class="Choice" onclick="choice1()"></button><br><br><button id="Choice2" class="Choice" onclick="choice2()"></button><br><br><button id="Choice3" class="Choice" onclick="choice3()"></button>';}
function choicese4(){document.getElementById('Choicese').innerHTML = '<button id="Choice1" class="Choice" onclick="choice1()"></button><br><br><button id="Choice2" class="Choice" onclick="choice2()"></button><br><br><button id="Choice3" class="Choice" onclick="choice3()"></button><br><br><button id="Choice4" class="Choice" onclick="choice4()"></button>';}
function c1(msg){document.getElementById('Choice1').textContent = msg;}
function c2(msg){document.getElementById('Choice2').textContent = msg;}
function c3(msg){document.getElementById('Choice3').textContent = msg;}
function c4(msg){document.getElementById('Choice4').textContent = msg;}
function Nextmsg(){
    ch(chara[readmessage]);
    s1(msg1[readmessage]);
    s2(msg2[readmessage]);
    s3(msg3[readmessage]);
    room = rmse[readmessage];
}
document.addEventListener('keydown', (event) => {
    if(talknow == 1){
    if (event.key === 'z') {
        readmessage++;
        if (readmessage < msg1.length) {
            Nextmsg();
        } else {// 全てのメッセージを表示し終えた場合の処理
            talknow = 0;
            if(room == 1){
                GoRoom();
            }
        }
    }
}});

function GoRoom(){
if(room == 1){
    phase = 1;
    ch(playername); s1('さて、何をしようか？'); s2(''); s3('');
    choicese2();
    c1('スマホを見る');
    c2('寝る');//もうちょい追加予定}
}
}
async function choice1(){
if(room == 1){
if(phase == 1){
    phase = 2;
    choicese4();
    c1('JINEを見る');
    c2('ぽけったーを見る');
    c3('ゲームをする');//この選択肢は今までのやつをいろいろとねじ込みたい
    c4('やっぱやめる');
    s1('どうする？');
} else if(phase == 2){//JINE
    if(haveaddress <= 0){s1('友達がいない....'); haveaddress = 0;}
    else{
        phase = 3;//JINE mode
        s1('JINEを見よう!');
        await delay(1000);
        phase = 1;
        s1('誰に話しかけようか...');
        jineopen(); //JINEを開く
        //右側に画面を出したい
    }
}
}
}
async function choice2(){
    if(room == 1){
    if(phase == 1){
        s1('寝よう！！');
        await delay(1000);
        s1(playername + 'は、死にました')
        await delay(1000);
        s1('error500が発生しました。');//500は、「サーバー側に以上が発生したりやプログラムにミスがあった場合などで返されるコード」だぜ
        await delay(1000);
        s1('リブートを開始します。');
        await delay(1000);
        open('about:blank', '_self').close();//できてないときは無理やり終わらせちゃおう！作戦(まじでこのゲーム大変説ある)
    } else if(phase == 2){//JINE
        if(haveaddress <= 0){s1('友達がいない....'); haveaddress = 0;}
        else{
            phase = 4;//ぽけったー
            s1('ぽけったーを見よう！')
            await delay(1000);
            s1('どうやらメンテナンス中らしい...')//一生メンテナンスしてるサイトってことで...
            phase = 2;
        }

    }
    } 
}
function choice3(){
    if(room == 1){
    if(phase == 2){//げーむ
        phase = 5;
        choicese4();
        s1('何をしようか..?');
        c1('clicker_of_mugen');
        c2('stroll_game');
        c3('vending_machine');
        c4('やっぱやめる');
    }
    }
}
function choice4(){
    if(room == 1){
    if(phase == 2){
        phase = 1;
        choicese2();
        s1('さて、何をしようか？'); s2(''); s3('');
        c1('スマホを見る');
        c2('寝る');
    } else if(phase == 5){
        phase = 1;
        choicese2();
        s1('さて、何をしようか？'); s2(''); s3('');
        c1('スマホを見る');
        c2('寝る');
    }
}
}
function jineopen(){
    document.getElementById('UIright').innerHTML = '<div id="jine-box"><div id="jine-title">JINE</div><div id="jine-area"><div id="jine-chatzone"></div><div id="JineChoicese"></div></div></div>';
}
let jinenow = 1;
let jinemsg = ['届いてる？','よかった〜','まじか...','って返せてるって事は届いてるよね？！','あ、でね？','えっと...明日空いてる？','どっか遊びに行かない？','やった♪','じゃあ駅前集合で！']
let jinenum = [2,0,0,0,0,0,1,0,0,-0]   //-0 会話の終わり(追加される) 0 何もなし 1 選択肢1つの選択肢 2 選択肢2つの選択肢
let jineevn = [1,0,0,0,0,0,2,0,0,-0]
let jinerp1 = ['うん！届いてるよ！！','','','','','','もちろん！アヤヤの頼みならね','','']//トーク用
let jinerp2 = ['え、届いてないよ？','','','','','','','','']
let jiners1 = ['うん！','','','','','','もちろん！','','']//表示用
let jiners2 = ['え？','','','','','','','','']
let jineeve = {
    '1':'114,234',
    '2':'67',
    '3':'0',
    '4':'0',
}   //124はその選択肢を選んだら1に飛び、2になったら4までjumpするということ。 もはや暗号やろこれ
let jineevenumber = 0;
let jinejumpto1 = 0;
let jinejumpto2 = 0;
let jinejumpto3 = 0;
let jinejump = 0; 
let sent = 0;
function jinechoicese0(){document.getElementById('JineChoicese').innerHTML = '';}
function jinechoicese1(){document.getElementById('JineChoicese').innerHTML = '<button id="JineChoice1" class="Choice" onclick="jineselectmsg(1)"></button>';}
function jinechoicese2(){document.getElementById('JineChoicese').innerHTML = '<button id="JineChoice1" class="Choice" onclick="jineselectmsg(1)"></button><br><button id="JineChoice2" class="Choice" onclick="jineselectmsg(2)"></button>';}
function jinechoi1(msg){document.getElementById('JineChoice1').textContent = msg;}
function jinechoi2(msg){document.getElementById('JineChoice2').textContent = msg;}
function jineaddmsg(text,className){//classNameはplayer(緑)もしくはfriend(白)
    const Zone = document.getElementById('jine-chatzone');// ここで豆知識！function内でconstを焚くと、二回目以降でもエラーは起きないぜ！なぜなら..関数が実行されたら新しく細胞みたいなものが作られてそこでだけ定義されるから他のところからは見れないみたいな.....(???)
    const messageElement = document.createElement('div'),br = document.createElement('br');
    messageElement.className = `jine-msg ${className}`;//この$はjQueryの$じゃなくて、これもだよ〜みたいな..いわば+だね。で、多分、``内で変数を引用する手段なんじゃないかな、これ メモにも書いとくわね
    messageElement.textContent = text;
    requestAnimationFrame(() => {//このrequest..のやつは、ちょっと軽くしてくれるらしい。必要性は不明。(ここはAI)
        Zone.appendChild(messageElement);//これが文字として出力する装置　すっごい調べて学んだのぜ
        Zone.appendChild(br);
        Zone.scrollTop = Zone.scrollHeight;//これはコピペだが...スクロールするらしい？
    });   
}
function delay(ms) {return new Promise(resolve => setTimeout(resolve, ms));} //今回使うかわからんけど
async function jinesendmsg(){
    jineaddmsg(jinemsg[sent],'friend')
    sent++
    if(jinejump == 1 && (sent-1) == jinejumpto2){
        sent = jinejumpto3;
        jinejump = 0;
    };
    if(jinenum[sent-1] == 1){
        await delay(1000);
        jinechoicese1();
        jinechoi1(jiners1[sent-1]);
    } else if(jinenum[sent-1] == 2){
        await delay(1000);
        jinechoicese2();
        jinechoi1(jiners1[sent-1]);
        jinechoi2(jiners2[sent-1]);
    } else {window.setTimeout(jinesendmsg,1000)};
}
function jineselectmsg(num){
    jineevenumber = jineeve[jineevn[sent-1]].split(',');
    switch(jineevenumber.length){
        case 1:
            jineaddmsg(jinerp1[sent-1],'player');
            break;//1の場合そのまま流せるということに気づいた
        case 2:
            x = eval('jinerp' + num)//'a'をaにできるやつ。セキュリティ上のリスク？そんなの知ったこちゃないね！！！！！！
            jineaddmsg(x[sent-1],'player');
            jineevenumber = jineevenumber[num-1];
            jinejumpto1 = +jineevenumber.slice(0,1);//+をつけると''をはずせるらしい(数字限定)
            jinejumpto2 = +jineevenumber.slice(1,2);
            jinejumpto3 = +jineevenumber.slice(2);
            jinejump = 1;
            sent = jinejumpto2;
            break;
        default:
    }
    jinechoicese0();
    window.setTimeout(jinesendmsg,1000)
}//完全に自作。調べつつ頑張った

//以下music player
let audio = document.getElementById('audio');
let playPauseBtn = document.getElementById('playPauseBtn');
let muteBtn = document.getElementById('muteBtn');
let progressBar = document.getElementById('progressBar');
let playPauseImg = document.getElementById('playPauseImg');
let muteImg = document.getElementById('muteImg');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let playlist = [
    'music1.mp3',
    'music2.mp3',
    'music3.mp3',
    'music4.mp3',
    'music5.mp3',
    'music6.mp3',
];
let nowaudio = 'music1.mp3';
let currentTrackIndex = 0;
// 再生とかです
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseImg.src = 'assets/button_stop.png';
        playPauseImg.alt = 'Pause';
    } else {
        audio.pause();
        playPauseImg.src = 'assets/button_play.png';
        playPauseImg.alt = 'Play';
    }
});
// ミュートとかその辺
muteBtn.addEventListener('click', () => {
    audio.muted = !audio.muted;
    if (audio.muted) {
        muteImg.src = 'assets/button_mute.png';
        muteImg.alt = 'Unmute';
    } else {
        muteImg.src = 'assets/button_unmute.png';
        muteImg.alt = 'Mute';
    }
});
// 次の曲へ
nextBtn.addEventListener('click', () => {
    if (currentTrackIndex < playlist.length - 1) {
        currentTrackIndex++;
    } else {
        currentTrackIndex = 0;
    }
    audio.src = playlist[currentTrackIndex];
    setTimeout(() => {
    audio.play().catch(error => {
        console.log("Playback was prevented. Error: ", error);
    });
    }, 50);
    nowaudio = playlist[currentTrackIndex];
    audio.play();
    playPauseImg.src = 'assets/button_stop.png';
    playPauseImg.alt = 'Pause';
    switch(nowaudio){
        case 'music1.mp3':
            nowmusicname = 'ツイッターランド/STEAKA-初音ミク';
            break;
        case 'music2.mp3':
            nowmusicname = 'サンタムエルテ/wotaku-羽累';
            break;
        case 'music3.mp3':
            nowmusicname = '合法覚醒剤/STEAKA-初音ミク';
            break;
        case 'music4.mp3':
            nowmusicname = 'ド屑/なきそ-歌愛ユキ';
            break;
        case 'music5.mp3':
            nowmusicname = 'ぷらいまり/いよわ-可不';
            break;
        case 'music6.mp3':
            nowmusicname = 'つづみぐさ/いよわ-初音ミク';
            break;
        default:
    }
    document.getElementById('NowMusicName').textContent = nowmusicname;
});
// 前の曲へ
prevBtn.addEventListener('click', () => {
    if (currentTrackIndex > 0) {
        currentTrackIndex--;
    } else {
        currentTrackIndex = playlist.length - 1;
    }
    audio.src = playlist[currentTrackIndex];
    audio.play();
    playPauseImg.src = 'assets/button_stop.png';
    playPauseImg.alt = 'Pause';
});
// 再生位置バーのやつ
audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
});