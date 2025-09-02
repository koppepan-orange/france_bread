//#region komagome
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
};
async function nicoText(mes){
    const newDiv = document.createElement('div');
    newDiv.textContent = mes;
    newDiv.className = 'nicotext';
    newDiv.style.top = `calc(${random(0, 100)}vh - 20px)`;
    newDiv.style.right = '0px';
    document.querySelector('body').appendChild(newDiv);

    requestAnimationFrame(() => {
    newDiv.style.right = `${window.innerWidth + newDiv.offsetWidth}px`; //なんか電車の問題解いてるみたいだね
    });
    
    await delay(2000); 
    newDiv.remove();
};
function kaijou(num){
    if(num == 0) return 0;
    if(num == 1) return 1;
    return num * kaijou(num - 1);
}
function arraySelect(array){
    let select = Math.floor(Math.random()*array.length);
    return array[select];
};
function arrayShuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
function arraySize(array){
    let res = new Set(array).size;
    return res;
};
function arrayCount(array){
    const counts = {};
    for (let value of array) {
    counts[value] = (counts[value] || 0) + 1;
    }
    return counts;
}
function arrayMult(array){
    return array.reduce((a, v) => a * v, 1);
}
function arrayGacha(array,probability){
    if(array.length !== probability.length){throw new Error("長さがあってないっす！先輩、ちゃんとチェックした方がいいっすよ〜？");}
    const total = probability.reduce((sum, p) => sum + p, 0);
    let random = Math.random() * total;
    for (let i = 0; i < array.length; i++) {
    if(random < probability[i]){
    return array[i];
    }
    random -= probability[i];
    }
};
function copy(obj){
    if (obj === null || typeof obj !== 'object') {
        return obj; // 基本型はそのまま返す
    }
    if (Array.isArray(obj)) {
        return obj.map(copy); // 配列の各要素を再帰コピー
    }
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = copy(obj[key]); // オブジェクトのプロパティを再帰コピー
        }
    }
    return result;
};
function probability(num){
    return Math.random()*100 <= num;
    //例:num == 20 → randomが20以内ならtrue,elseならfalseを返す
};
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function anagramSaySay(text, loop = 10, bet = '<br>'){
    let menjo = 0;
    let len = text.length;
    if(len < 4) menjo = 1, console.log('長さが3以下なんで最大6っす');
    
    let optout = text.split('');
    let optcou = arrayCount(optout);
    let optvals = [];
    for(a of Object.keys(optcou)){
    let b = optcou[a];
    b = kaijou(b);
    optvals.push(b);
    }
    let optmat = arrayMult(optvals);
    let cal = (kaijou(len) / optmat) - 1;

    let loopen = loop;
    console.log(`総数:${cal} 回数:${loopen}`);
    if(cal < loopen) menjo = 1;
    
    let reses = [];
    while(loopen > 0){
    loopen -= 1;
    let res = arrayShuffle(optout).join(''); 
    if(reses.includes(res)){loopen += 1; continue}
    
    if(res == text && !menjo){loopen += 1; continue;}

    if(res == text && menjo && reses.length < cal){loopen += 1; continue}
    else if(res == text && menjo) res = '[重複エラー]';

    reses.push(res);
    }
    
    return reses.join(bet);
}
function setLocalStorage(name, value) {
    localStorage.setItem(name, value || "");
}
function getLocalStorage(name) {
    return localStorage.getItem(name);
}
async function error(){
    addtext('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
    await delay(2000);
    window.open('about:blank', '_self').close();
}
function hoshoku(color) {
    color = color.replace(/^#/, ''); // #付きなら取る

    if(color.length != 6) return console.log('カラーコードは6、ですよ〜？楽しないでくださいね〜♪')

    // RGB分解
    const r = parseInt(color.slice(0, 2), 16);
    const g = parseInt(color.slice(2, 4), 16);
    const b = parseInt(color.slice(4, 6), 16);

    // 補色：255から引く
    const compR = (255 - r).toString(16).padStart(2, '0');
    const compG = (255 - g).toString(16).padStart(2, '0');
    const compB = (255 - b).toString(16).padStart(2, '0');

    return `#${compR}${compG}${compB}`;
}
//#endregion
//#region log&text
let textDiv = document.querySelector('#text');
let autoDelay = 1;
let skipText = false; // スキップフラグ
let clearText = false; // テキスト消去フラグ
let textShowing = 0;

function colorcheck(rawtext) {
    const text = [];
    let isRed = false; // ** で囲まれた部分かどうか
    let isPink = false; // && で囲まれた部分かどうか
    let isBlue = false; // ^^ で囲まれた部分かどうか

    for(let i = 0; i < rawtext.length; i++){
        if(rawtext[i] == "*" && rawtext[i + 1] == "*"){
            isRed = !isRed; // 状態を切り替える
            i++; // 次の * をスキップ
        }else if(rawtext[i] == "&" && rawtext[i + 1] == "&"){
            isPink = !isPink;
            i++; // 次の & をスキップ
        }else if(rawtext[i] == "^" && rawtext[i + 1] == "^"){
            isBlue = !isBlue;
            i++;
        }else{
            let color = null;
            if(isRed) color = 'red';
            if(isPink) color = 'pink';
            if(isBlue) color = 'blue';
            text.push({
                char: rawtext[i],
                color: color
            });
        }
    }
    return text;
}

// ↓一瞬これにしようとしてた
// if(textShowing){
//     queueAddtext.push(text);
//     while(textShowing){
//         await delay(10);
//     }
// };

let queueAddtext = [];
let loopAddtext = 0;
async function waitforAddtext(){
    let len = queueAddtext.length;

    if(len == 0) loopAddtext = 0;
    else loopAddtext = 1;

    if(!loopAddtext) return console.log('loopがないんでしゅーりょー');
    requestAnimationFrame(waitforAddtext);
    
    if(textShowing) return console.log('文字表示されたんでスキップ');
    
    let raw = queueAddtext.shift();
    console.log(`${raw}を送信します`);
    console.log(`残り: (${len - 1})[${queueAddtext}]`);
    await addtext(raw);
}
async function addtext(raw){
    if(!raw) return console.log('「内容が？内容が〜〜？ないよ〜〜〜つってwwww直せ」');

    if(textShowing){
        queueAddtext.push(raw);

        if(!loopAddtext) waitforAddtext();
        return;
    }
    
    textShowing = 1;
    text = colorcheck(raw);
    textDiv.innerHTML = ""; // 中身をリセット
    textDiv.style.display = "block"; // 表示
    let index = 0;
    clearText = false; // 消去フラグをリセット

    return new Promise((resolve) => {
        async function type() {
                if (index < text.length) {
                if (skipText) {
                    // スキップ処理
                    while (index < text.length) {
                            const span = document.createElement("span");
                            span.textContent = text[index].char;
                            if (text[index].color) {
                            span.classList.add(`color-${text[index].color}`);
                            }
                            textDiv.appendChild(span);
                            index++;
                    }
                    index = text.length; // 全ての文字を表示済みにする
                    skipText = false;
                    setTimeout(type, 10);
                } else {
                    // 通常の文字表示
                    const span = document.createElement("span");
                    span.textContent = text[index].char;
                    if (text[index].color) {
                            span.classList.add(`color-${text[index].color}`);
                    }
                    textDiv.appendChild(span);

                    index++;
                    setTimeout(type, 80); // 次の文字を表示する間隔
                }
                } else {
                addlog(textDiv.innerHTML);
                const waitTime = autoDelay * 1000;
                const timeout = new Promise(resolve => setTimeout(resolve, waitTime));
                const userAction = new Promise(resolve => {
                    function waitToClear(event) {
                            if (event.type === 'click' || event.key === 'z' || event.key === 'Enter') {
                                event.preventDefault();
                                document.removeEventListener('click', waitToClear);
                                document.removeEventListener('keydown', waitToClear);
                                resolve();
                            }
                    }
                    document.addEventListener('click', waitToClear);
                    document.addEventListener('keydown', waitToClear);
                });

                Promise.race([timeout, userAction]).then(() => {
                    textDiv.textContent = "";
                    textDiv.style.display = "none";
                    clearText = true;
                    skipText = false
                    textShowing = 0;
                    resolve('end'); // Promiseを解決
                });
                }
        }
        type();
    });
}
document.addEventListener('keydown', (event) => {
    if(event.key === 'z' || event.key === 'Enter'){
        skipText = true;
    }
});

document.addEventListener('keyup', (event) => {
    if(event.key === 'z' || event.key === 'Enter'){
        skipText = false;
    }
});

document.addEventListener('click', () => {
    skipText = true;
    setTimeout(() => skipText = false, 50); // 一時的にスキップを有効化
});

let logOOmoto = document.querySelector('#log');
let log = document.querySelector('#log .log');
let logOpener = document.querySelector('#log .opener');
logOpener.addEventListener('click', function(){
    if(logOOmoto.style.right == '-300px'){
        logOOmoto.style.right = '0px';
        logOpener.textContent = '>';
    }else{
        logOOmoto.style.right = '-300px';
        logOpener.textContent = '<';
    }
});
function addlog(text){
    log.innerHTML += text + '<br>';
    log.scrollTop = log.scrollHeight;
}
//#endregion
//#region description
let movableDescription = document.getElementById('movableDescription');
document.addEventListener('mousemove', (e) => {
    movableDescription.style.left = `${e.clientX + 10}px`;
    movableDescription.style.top = `${e.clientY + 10}px`;
});
document.addEventListener('mouseover', (e) => {
    const descTarget = e.target.closest('[data-description]');
    if (descTarget) {
        const desc = descTarget.dataset.description;
        movableDescription.innerText = desc;
        movableDescription.style.display = 'block';
    }
});
document.addEventListener('mouseout', (e) => {
    const descTarget = e.target.closest('[data-description]');
    if (descTarget) {
        movableDescription.innerText = '';
        movableDescription.style.display = 'none';
    }
});
//#endregion

let RaceD = document.getElementById('atRace');
let RaceC = {
    racersD: RaceD.querySelector('.racers'),
    startB: RaceD.querySelector('.start'),
    now: 0,
    long: 16,
    member: ['a', 'b', 'c', 'd'],
    charas:{
        '基本ちゃん':{
            name:'基本ちゃん',
            desc:'最もオーソドックスなキャラ。\n基本と描かれたメジエドの服を着ている',
            seleable:['user', 'rand'],
            ex:[['move', 1], ['move', 1], ['move', 1], ['move', 2], ['move', 2], ['wait', 1000]]
        },
        '猫':{
            name:'猫',
            desc:'足が速い..が、めっちゃ止まるしなんなら戻る。\nスーパー気分屋',
            seleable:['user', 'rand'],
            ex:[['move', 2], ['move', 2], ['move', 2], ['move', -1], ['move', -1], ['wait', 1000], ['wait', 1000]]
        },
    }

}
let RaceF = {
    make: () =>{
        for(let id of RaceC.member){
            let who = {
                id: id,
                name: null,
                x: 0,
                load: [],
                exes: [],
            };
            
            //道〜〜〜
            for(let i = 0; i < (RaceC.long-1); i++){
                who.load.push('=');
            }
            who.load.unshift('@');

            //スキル
            let charaes = Object.values(RaceC.charas).filter(a => a.seleable.includes('rand'));
            let chara = arraySelect(charaes);
            who.name = chara.name;
            for(let i = 0; i < chara.ex.length; i++){
                who.exes.push(chara.ex[i]);
            }

            RaceC[id] = who;

            let div = document.createElement('div');
            div.className = `${id} racer`;
            
            let head = document.createElement('div');
            head.className = 'head';
            head.textContent = who.id;
            head.dataset.description = `${who.name}\nex:[${who.exes.join(' ')}]\n${chara.desc}`;
            div.appendChild(head);

            let body = document.createElement('div');
            body.className = 'body';
            body.textContent = who.load.join('');
            div.appendChild(body);

            RaceC.racersD.appendChild(div);
            RaceC[id].div = RaceC.racersD.querySelector(`.${id}`);
        }
    },
    tekiou: () => {
        for(let id of RaceC.member){
            let div = RaceC[id].div;
            let body = div.querySelector('.body');
            body.textContent = RaceC[id].load.join('');
        }
    },
    move: async(who, num) =>{
        for(let i = 0; i < num; i++){
            who.load[who.x] = '=';
            who.x += 1;
            who.load[who.x] = '@';
            await delay(500);
        }
    },
    wait: async(who) => {
        if(who.wait > 0){
            while(who.wait > 0){
                await delay(1);
                who.wait -= 1;
            }
        }
    },
    flip: (who) => {
        let arr = RaceC.member;
        arr.splice(arr.indexOf(who), 1);
        return arr;
    }
}
RaceF.lets = async(id) => {
    let who = RaceC[id];

    await RaceF.wait(who);

    let context = {};
    let code = arraySelect(who.exes);
    switch(code[0]){
        case 'move':
            context['num'] = code[1];
            context['rev'] = code[2];
            if(!context['rev']) await RaceF.move(who, context['num']);
            else{
                RaceF.flip(who).forEach(id => {
                    RaceF.move(RaceC[id], context['num']);
                });
            }
            break;

        case 'wait':
            context['num'] = code[1];
            context['rev'] = code[2];
            if(!context['rev']) who.wait += context['num'];
            else{
                RaceF.flip(who).forEach(id => {
                    RaceC[id].wait += context['num'];
                });
            }
            break;
    }

    RaceF.tekiou();

    await delay(500)
    RaceF.lets(id);
}
RaceF.staRt = async() => {
    for(let id of RaceC.member){
        await RaceF.lets(id);
    }
}
RaceC.startB.addEventListener('click', () => {
    RaceF.staRt();
});

document.addEventListener('DOMContentLoaded', () => {
    RaceF.make();
});