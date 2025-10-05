let playername = 'player';
let x = 0;
let y = 0;  
let z = 0;
let pt = 0;
let ptkari = 0;
let have = 0;
let hour = 14
let min = 0;
let traveled = 0;
let traveledmax = 0;
let strollnow = 0;
let gohomeroot = 0;
let gohomenow = 0;
let phase = 0;
const gostraightmove = '<button class="button" id="Select1" onclick="select1()">go straight</button><br><br><button class="button" id="Select2" onclick="select2()">return home</button>';
const lobyscreen = '<button class="button" onclick="LetsStroll()">Go to stroll</button><br><br><button class="button" onclick-"GoShop()">Shop</button>';
let vendingnum = []

function delay(ms){return new Promise(function(resolve){setTimeout(resolve,ms);});}//遅延がやってみたかったのです
function disappear(){document.getElementById('Select1').textContent = '';document.getElementById('Select2').textContent = '';}
//起動時にやっちゃいます！
playername = 'player'; reset();
async function reset(){
    x = 0; y = 0; z = 0;
    pt = 0; ptkari = 0;
    have = 0; traveled = 0;
    gohomeroot = 0; gohomenow = 0;
    hour = 14; min = 0; phase = 0;
    vendingnum = [];
    window.setTimeout(BackToLoby,1000)
}
async function Timetekiou(){
    if(min == 60){min = 0; hour += 1;};
    if(min == 0){x = '00'}else if(min == 5){x = '05'}else{x = min};
    document.getElementById('Time').textContent = hour + ':' + x;
    if(hour == 18 && strollnow == 1){document.getElementById('log').textContent = 'あなたは家に帰れなかった....'; await delay(2000); reset();}
}
function tekiou(){
    if(strollnow == 0){
        document.getElementById('UI1').textContent = '所持ポイント:' + pt + 'pt';
        document.getElementById('UI2').textContent = '';
        document.getElementById('UI3').textContent = '';
    }else if(strollnow == 1){
        document.getElementById('UI1').textContent = '持っているゴミ:' + have + '個';
        if(gohomenow == 0){x = '家からの距離'}else if(gohomenow == 1){x = '家までの距離'};
        document.getElementById('UI2').textContent = x + ':' + traveled + 'km';
        document.getElementById('UI3').textContent = '獲得予定ポイント:' + ptkari + 'pt';
    }
}
async function LetsStroll(){
    strollnow = 1;
    x = 0; y = 0; z = 0;
    pt = 0; ptkari = 0;
    have = 0; traveled = 0;
    gohomeroot = 0; gohomenow = 0;
    hour = 14; min = 0; Timetekiou();
    vendingnum = [];
    for(i = 0; i < 8; i++){vendingnum.push((Math.floor(Math.random()*6)+1)+(6*i));};
    document.getElementById('log').textContent = 'Lets Go!';
    await delay(1000);
    document.getElementById('scene').innerHTML = gostraightmove;
    yourturn();
}
function yourturn(){
    tekiou();
    if(gohomenow == 0){
        x = gostraightmove;
        document.getElementById('Select1').textContent = 'go straight';
        document.getElementById('Select2').textContent = 'return home';
        phase = 1;
    }else if(gohomenow = 1){
        x = gostraightmove;
        document.getElementById('Select1').textContent = 'go straight';
        document.getElementById('Select2').textContent = '';
        phase = 3;
    };
    document.getElementById('log').textContent = 'さあ、どうしようか？'
}
async function select1(){
    disappear();
    if(phase == 1){
    phase = 0;
    traveled += 1;
    min += 5;
    if(have < 4 && Math.floor(Math.random()*4) == 0){min -= 5; document.getElementById('log').textContent = 'るんるる〜ん♪'; await delay(500);};//3個以下ならたまにスキップする
    if(6 > have > 3 && Math.floor(Math.random()*5)  == 0){document.getElementById('log').textContent = 'すこしゴミを落としてしまった！'; await delay(500); min += 5; Timetekiou(); document.getElementById('log').textContent = '全て拾い終えた!'; await delay(500);}//4個以上ならたまに時間ロス
    if(have > 6 && Math.floor(Math.random()*2)  == 0){document.getElementById('log').textContent = 'すこしゴミを落としてしまった！'; await delay(500); min += 5; Timetekiou(); document.getElementById('log').textContent = '全て拾い終えた!'; await delay(500);}//4個以上ならすごい時間ロス
    Timetekiou();
    tekiou();
    if(Math.floor(Math.random()*2) == 0){
        x = Math.floor(Math.random()*6);
        if(x == 6){y = '瓶'}else if(x == 5){y = '空き缶'}else{y = 'ペットボトル'};
        document.getElementById('log').textContent = y + 'を発見した！';//缶、瓶とか増やして難易度上げてもいいかも
        document.getElementById('Select1').textContent = 'Pick Up';
        document.getElementById('Select2').textContent = 'Leave It';
        phase = 2;
    } else {
        document.getElementById('log').textContent = '何も見つからなかった..'
        window.setTimeout(vending,500)
    }
    } else if(phase == 2){
    phase = 0;
    if(have < 10){
        have += 1;
        document.getElementById('log').textContent = playername + 'は'+ y +'を拾った！';
        tekiou();
        window.setTimeout(vending,500);
    }else{
        document.getElementById('log').textContent = 'もう持てない...!!';
        phase = 2;
        document.getElementById('Select1').textContent = 'Pick Up';
        document.getElementById('Select2').textContent = 'Leave It';
    };
    } else if(phase == 3){
    phase = 0;
    traveled -= 1;
    min += 5;
    if(traveled > 0){
        tekiou(); Timetekiou();
        if(Math.floor(Math.random()*4) == 0){
        document.getElementById('log').textContent = 'なんとペットボトルを発見した！';
        document.getElementById('Select1').textContent = 'Pick Up';
        document.getElementById('Select2').textContent = 'Leave It';
        phase = 2;
        } else {
            document.getElementById('log').textContent = '進んだ...';
            window.setTimeout(vending,100);
        }
    } else if(traveled == 0){
        tekiou(); strollnow = 0;
        Timetekiou();
        document.getElementById('log').textContent = playername + 'は家に帰りました!';
        await delay(1500);
        document.getElementById('scene').innerHTML = '<span id="PointScore"></span><br><span id="MovedScore"></span><br><span id="TimeScore"></span><br><br><button class="button" onclick="BackToLoby()">Back to loby</button>'
        document.getElementById('PointScore').textContent = 'ポイント:' + ptkari + 'pt';
        document.getElementById('MovedScore').textContent = '移動距離:' + traveledmax + 'km';
        if(min == 0){x = '00'}else if(min == 5){x = '05'}else{x = min};
        document.getElementById('TimeScore').textContent = '帰宅時間:' + hour + ':' + x;
        document.getElementById('log').textContent = 'これが今回のスコア!';
        pt += ptkari; ptkari = 0;
    }
    } else if(phase == 4){
    phase = 0;
    if(have < 10){
        have += 1;
        document.getElementById('log').textContent = playername + 'はペットボトルを拾った！';
        tekiou();
        window.setTimeout(vending,500);
    }else{document.getElementById('log').textContent = 'もう持てない...!!'}
    }
}
function select2(){
    disappear();
    if(phase == 1){
    phase = 0;
    gohomenow = 1;
    traveledmax = traveled;
    document.getElementById('log').textContent = 'さあ、家に帰ろう！';
    window.setTimeout(yourturn,500)
    } else if(phase == 2){
    phase = 0;
    document.getElementById('log').textContent = '見捨てることにした！';
    window.setTimeout(vending,1000);
    } else if(phase == 3){
    phase = 0;
    yourturn();
    } else if(phase == 4){
    phase = 0;
    document.getElementById('log').textContent = '見捨てることにした！';
    window.setTimeout(vending,1000);
    }   
}
async function vending(){
    phase = 0;
    disappear();
    if(vendingnum.includes(traveled)){
        document.getElementById('log').textContent = '自動販売機を発見した！';
    if(have > 0){
        await delay(500);
        document.getElementById('log').textContent = playername + 'はすべてのペットボトルを捨て、';
        x = ptkari
        ptkari += have;
        y = ptkari - x
        have = 0;
        await delay(500);
        document.getElementById('log').textContent = y + 'ptを得た!';
        tekiou();
    }
    await delay(750);
    };
    yourturn();
}
function BackToLoby(){
    tekiou();
    document.getElementById('scene').innerHTML = lobyscreen;
    document.getElementById('log').textContent = 'さて、何をしようか?';
}
function GoShop(){
}