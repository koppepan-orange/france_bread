//#region komagome
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
};
async function nicoText(mes){
    const div = document.createElement('div');
    div.textContent = mes;
    div.className = 'nicotext';
    div.style.top = `calc(${random(0, 100)}vh - 20px)`;
    div.style.right = '0px';
    document.querySelector('body').appendChild(div);

    requestAnimationFrame(() => {
    div.style.right = `${window.innerWidth + div.offsetWidth}px`; //なんか電車の問題解いてるみたいだね
    });
    
    await delay(2000); 
    div.remove();
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
    const i2 = Math.floor(Math.random() * (i + 1));
    [array[i], array[i2]] = [array[i2], array[i]];
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
    if(array.length != probability.length) throw new Error("長さがあってないっす！先輩、ちゃんとチェックした方がいいっすよ〜？");
    const total = probability.reduce((sum, p) => sum + p, 0);
    let random = Math.random() * total;
    for (let i = 0; i < array.length; i++) {
        if(random < probability[i]) return array[i];
        random -= probability[i];
    }
};
function hask(obj, key){
let res = obj.hasOwnProperty(key);
res = res ? 1 : 0;
return res;
}
function copy(moto) {
    if(Array.isArray(moto)){
        let arr = [];
        for (let i = 0; i < moto.length; i++) {
            arr.push(copy(moto[i]));
        }
        return arr;
    }
    else if(moto != null && typeof moto == 'object'){
        let obj = {};
        for (let key in moto) {
            if (moto.hasOwnProperty(key)) {
            obj[key] = copy(moto[key]);
            }
        }
        return obj;
    }
    else {
        return moto;
    }
}
function probability(num){
    return Math.random()*100 <= num;
    //例:num == 20 → randomが20以内ならtrue,elseならfalseを返す
};
function random(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.floor(num);
};
function fl(num){
    let res = num ? 1 : 0;
    return res;
}

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
let r = {
    and: function(lef, rig){
        if(lef && rig) return 1
        return 0
    },
    or: function(lef, rig){
        if(lef || rig) return 1
        return 0
    },
    xor: function(lef, rig){
        console.log('排他的論理和発動！！')
        let l = lef ? 1 : 0
        let r = rig ? 1 : 0
        if(l != r) return 1
        return 0
    },
    not: function(lef){
        if(lef) return 0
        return 1
    },
    nand: function(lef, rig){
        if(lef && rig) return 0
        return 1
    },
    nor: function(lef, rig){
        if(lef || rig) return 0
        return 1
    },
    xnor: function(lef, rig){
        console.log('逆排他的論理和発動！！')
        let l = lef ? 1 : 0
        let r = rig ? 1 : 0
        if(l != r) return 0
        return 1
    }
}
async function error(){
    addtext('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
    await delay(2000);
    // window.open('about:blank', '_self').close();
}
function hoshoku(color) {
    color = color.replace(/^#/, ''); // #付きなら取る

    if(color.length != 6) return console.log('カラーコードは6桁、ですよ〜？楽しないでくださいね〜♪')

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
function mixshoku(c1, c2, ratio = 0.5) {
    const toRGB = c => {
        c = c.replace('#', '');
        if (c.length === 3) c = c.split('').map(x => x + x).join('');
        const n = parseInt(c, 16);
        return [n >> 16, (n >> 8) & 255, n & 255];
    };

    const [r1, g1, b1] = toRGB(c1);
    const [r2, g2, b2] = toRGB(c2);

    const r = Math.round(r1 + (r2 - r1) * ratio);
    const g = Math.round(g1 + (g2 - g1) * ratio);
    const b = Math.round(b1 + (b2 - b1) * ratio);

    return (
        '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')
    );
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
    // console.log(`${raw}を送信します`);
    // console.log(`残り: (${len - 1})[${queueAddtext}]`);
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
document.addEventListener('keydown', (e) => {
    if(e.key === 'z' || e.key === 'Enter'){
        skipText = true;
    }
});

document.addEventListener('keyup', (e) => {
    if(e.key === 'z' || e.key === 'Enter'){
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
let log_open = (code) => {
    if((!logOOmoto.classList.contains('tog') || code == 'o') && code != 'c'){
        logOOmoto.classList.add('tog');
        logOpener.textContent = '<';

    }else{
        logOOmoto.classList.remove('tog');
        logOpener.textContent = '>';
    }
}
logOpener.addEventListener('click', log_open);

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
//#region draggable
document.addEventListener('mousedown', e => {
    // const descTarget = e.target.closest('[data-description]');
    let div = e.target;
    
    if(!div.classList.contains('draggable')) return;
    offsetX = e.clientX - div.getBoundingClientRect().left;
    offsetY = e.clientY - div.getBoundingClientRect().top;
    
    function onMouseMove(e) {
        div.style.left = `${e.clientX - offsetX}px`;
        div.style.top = `${e.clientY - offsetY}px`;
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});
//#endregion 
//#region tk
class tk{
    constructor(type, x = 'half', y = 'half', w = window.innerWidth/2, h = window.innerWidth/2){
        let youso = document.createElement(type);
        youso.className = `tk ${type}`;

        let yoko = ['x', 'w'];
        for(let n of yoko){
            if(typeof eval(n) != 'string' || typeof eval(n) == 'string' && !eval(n).endsWith('%')) continue;
            let num = eval(n).slice(0, -1);
            eval(n) = num * window.innerWidth / 100;
        }

        let tate = ['y', 'h'];
        for(let n of tate){
            if(typeof eval(n) != 'string' || typeof eval(n) == 'string' && !eval(n).endsWith('%')) continue;
            let num = eval(n).slice(0, -1);
            eval(n) = num * window.innerHeight / 100;
        }

        console.log(x, y, w, h);

        youso.style.width = `${w}px`;
        youso.style.height = `${h}px`;

        youso.style.left = `${x}px`;
        youso.style.top = `${y}px`;
        
        if(x == 'half' && y == 'half') youso.classList.add('cenXY');
         else if(x == 'half') youso.classList.add('cenX');
         else if(y == 'half') youso.classList.add('cenY');

        this.youso = youso;
    };

    attrAdd(dict = 'none'){
        if(dict == 'none') return;
        
        if(typeof dict == 'string'){
            //attr: nanka
            let [key, val] = dict.split(':');
             key = key.trim();
             val = val.trim();
            this.youso.setAttribute(key, val);
            return 0;
        }

        if(typeof dict != 'object') return 1;

        for(let key in dict) this.youso.setAttribute(key, dict[key]);

        return 0;
    }

    styleAdd(dict){
        for(let key in dict) this.youso.style[key] = dict[key];
    }

    classAdd(name){this.youso.classList.add(name)};
    classRem(name){this.youso.classList.remove(name)};
    classTog(name){this.youso.classList.toggle(name)};
    classHas(name){
        let is = this.youso.classList.contains(name);
        return is;
    }

    evAdd(type, func){
        this.youso.addEventListener(type, func);
    }

    yousoAdd(youso){
        this.youso.appendChild(youso);
    }

    append(){
        document.body.appendChild(this.youso);
    };

    remove(){
        this.youso.remove();
    };
}

function tkTest(){
    let mono = new tk('div', 'half', 'half');
    mono.classAdd('draggable');
    mono.styleAdd({background: '#f0f8ff'});

    let mono2 = new tk('div', 'half', 'half');
    mono2.styleAdd({background: '#cfe9ff'});

    mono.yousoAdd(mono2.div);

    mono.evAdd('click', function(){
        nicoText('clicked');
    });

    mono.append();
}

//#endregion
//#region observer
let keys = {}
document.addEventListener('keydown', e => {
let key = e.key.toLowerCase();
if(e.key == ' ') key = 'space';
keys[key] = true;
});
document.addEventListener('keyup', e => {
let key = e.key.toLowerCase();
if(e.key == ' ') key = 'space';
keys[key] = false;
});

let clicking = false;
document.addEventListener('mousedown', () => clicking = true);
document.addEventListener('mouseup', () => clicking = false);
//#endregion


//#region 探索部分
const overfieldArea = document.querySelector('#overfieldArea')
const nowMap = document.getElementById('nowMap');

const ctx = nowMap.getContext('2d');

const mapSize = 8;
let mass = 0;
function resizeCanvas(){
    // nowMap.width = overfieldArea.offsetHeight;
    // nowMap.height = overfieldArea.offsetHeight;
    nowMap.width = window.innerHeight * 0.8;
    nowMap.height = window.innerHeight * 0.8;
    mass = window.innerHeight * 0.8 / mapSize;
}

const backmaps = [
    [
        ['b','b','b','b','b','b','b','b'],
        ['b','a','b','b','b','b','a','a'],
        ['a','a','b','b','b','a','a','a'],
        ['a','a','a','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','a'],
    ],
    [
        ['a','a','a','a','a','a','a','a'],
        ['a','b','b','a','a','a','a','a'],
        ['a','b','b','a','a','a','a','a'],
        ['a','a','b','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','a'],
        ['a','a','a','a','b','b','b','a'],
        ['a','a','a','b','b','b','b','a'],
        ['a','a','a','b','b','b','b','b'],
    ],
    [
        ['b','b','b','b','b','a','b','a'],
        ['b','b','b','a','a','a','a','a'],
        ['b','b','a','a','a','a','a','a'],
        ['b','b','a','a','a','a','a','a'],
        ['b','a','a','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','b'],
        ['a','a','a','a','a','a','a','b'],
        ['a','a','a','a','a','a','b','b'],
    ],
    [
        ['a','a','a','a','a','b','b','b'],
        ['a','b','b','a','a','b','b','b'],
        ['a','b','a','a','a','a','b','b'],
        ['a','b','a','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','a'],
        ['a','a','b','b','b','b','b','a'],
        ['a','b','b','b','b','b','b','a'],
        ['a','a','a','b','b','b','b','b'],
    ],
    [
        ['b','b','b','b','b','b','b','b'],
        ['b','b','a','b','b','a','b','b'],
        ['b','b','a','b','b','a','b','b'],
        ['b','b','a','b','b','a','b','b'],
        ['b','b','b','b','b','b','b','b'],
        ['b','a','b','b','b','b','a','b'],
        ['b','b','a','a','a','a','b','b'],
        ['b','b','b','b','b','b','b','b'],
    ],//fun23room
    [
        ['a','a','a','a','a','a','a','a'],
        ['a','b','b','a','a','b','b','a'],
        ['a','b','b','a','a','b','b','a'],
        ['a','a','a','b','b','a','a','a'],
        ['a','a','b','b','b','b','a','a'],
        ['a','a','b','a','a','b','a','a'],
        ['a','a','b','a','a','b','a','a'],
        ['a','a','a','a','a','a','a','a'],
    ],//zomusan room
    [
        ['c','c','c','c','c','c','c','c'],
        ['c','d','c','c','c','c','c','c'],
        ['c','d','d','c','c','c','c','c'],
        ['c','c','c','c','c','c','c','c'],
        ['c','c','c','c','c','c','c','a'],
        ['c','a','a','a','a','a','c','a'],
        ['a','a','a','a','a','a','a','a'],
        ['a','a','a','a','a','a','a','a'],
    ],//boss room
    [
        ['d','d','d','d','d','d','d','d'],
        ['d','c','d','d','d','d','d','d'],
        ['d','c','c','c','c','d','d','d'],
        ['c','c','c','c','c','c','c','d'],
        ['c','c','c','c','c','c','c','d'],
        ['c','c','c','c','c','c','c','c'],
        ['c','c','c','c','c','c','c','c'],
        ['c','c','c','c','c','c','c','c'],
    ],
    [
        ['d','d','c','c','c','c','c','c'],
        ['d','d','c','c','c','c','c','d'],
        ['d','d','d','c','c','c','c','d'],
        ['d','d','d','c','c','c','c','d'],
        ['d','d','c','c','c','c','c','c'],
        ['d','d','c','c','c','c','c','c'],
        ['d','d','d','c','c','c','c','c'],
        ['d','d','d','d','c','c','c','c'],
    ],
    [
        ['c','c','c','c','c','d','d','d'],
        ['c','c','c','c','c','d','d','c'],
        ['c','c','d','c','c','c','d','c'],
        ['c','c','d','d','c','c','c','c'],
        ['c','d','d','d','c','c','c','c'],
        ['c','d','d','d','c','d','d','c'],
        ['c','c','c','c','c','d','d','c'],
        ['c','c','c','c','c','c','c','c'],
    ],
    [
        ['c','c','c','d','d','d','c','d'],
        ['c','c','c','d','d','d','c','c'],
        ['c','c','d','d','d','d','c','c'],
        ['c','c','d','d','d','c','c','c'],
        ['c','d','d','d','c','c','c','c'],
        ['d','d','d','d','c','c','c','c'],
        ['d','d','d','c','c','c','c','c'],
        ['d','c','c','c','c','c','c','c'],
    ],
    [
        ['c','c','c','c','c','c','c','c'],
        ['c','c','c','c','c','c','c','c'],
        ['c','c','c','c','c','c','c','c'],
        ['c','c','c','c','c','c','c','c'],
        ['c','c','c','c','c','c','c','c'],
        ['c','c','c','c','c','c','c','c'],
        ['c','c','c','c','c','c','c','c'],
        ['c','c','c','c','c','c','c','c'],
    ],//fun68room
    [
        ['d','d','d','d','d','d','d','d'],
        ['d','d','d','d','d','d','d','d'],
        ['d','d','d','d','d','d','d','d'],
        ['g', 0 ,'d','d','d','d', 0 ,'g'],
        ['d','d','e','e','e','e','d','d'],
        ['d','d','f','d','d','f','d','d'],
        ['d','d','e','e','e','e','d','d'],
        ['d','d','d','d','d','d','d','d'],
    ],//tontonsanroom
    [
        ['d','d','c','c','c','d','d','c'],
        ['d','c','c','c','d','d','c','c'],
        ['d','c','c','c','d','d','c','c'],
        ['c','c','c','c','d','d','c','c'],
        ['c','c','c','c','d','c','c','c'],
        ['d','d','c','d','d','c','c','c'],
        ['d','d','c','d','d','c','c','c'],
        ['c','c','c','d','d','c','c','c'],
    ],//bossroom
    [
        ['e','e','e','e','e','d','d','d'],
        ['e','e','e','e','e','e','d','d'],
        ['e','e','e','e','e','e','d','d'],
        ['d','d','e','e','e','e','e','d'],
        ['d','d','d','e','e','e','e','e'],
        ['d','d','d','e','e','e','e','e'],
        ['e','e','e','e','e','e','e','d'],
        ['e','e','e','e','e','d','d','e'],
    ],
    [
        ['d','d','e','e','e','e','e','e'],
        ['d','d','e','e','e','e','e','d'],
        ['d','d','d','e','e','e','e','d'],
        ['d','d','d','e','e','e','e','d'],
        ['d','d','e','e','e','e','e','e'],
        ['d','d','e','e','e','e','e','e'],
        ['d','d','d','e','e','e','e','e'],
        ['d','d','d','d','e','e','e','e'],
    ],
    [
        ['e','e','e','e','e','d','d','d'],
        ['e','e','e','e','e','d','d','e'],
        ['e','e','d','e','e','e','d','e'],
        ['e','e','d','d','e','e','e','e'],
        ['e','d','d','d','e','e','e','e'],
        ['e','d','d','d','e','d','d','e'],
        ['e','e','e','e','e','d','d','e'],
        ['e','e','e','e','e','e','e','e'],
    ],
    [
        ['e','e','e','d','d','d','e','d'],
        ['e','e','e','d','d','d','e','e'],
        ['e','e','d','d','d','d','e','e'],
        ['e','e','d','d','d','e','e','e'],
        ['e','d','d','d','e','e','e','e'],
        ['d','d','d','d','e','e','e','e'],
        ['d','d','d','e','e','e','e','e'],
        ['d','e','e','e','e','e','e','e'],
    ],
    [
        ['e','e','e','d','d','d','e','d'],
        ['e','e','e','d','d','d','e','e'],
        ['e','e','d','d','d','d','e','e'],
        ['e','e','d','d','d','e','e','e'],
        ['e','d','d','d','e','e','e','e'],
        ['d','d','d','d','e','e','e','e'],
        ['d','d','d','e','e','e','e','e'],
        ['d','e','e','e','e','e','e','e'],
    ],//fun68
    [
        ['d','d','d','d','d','d','d','d'],
        ['d','d','d','d','d','d','d','d'],
        ['d','d','d','d','d','e','d','d'],
        ['d','d','e','d','e','e','e','d'],
        ['b', 0, 'd','e','e','d', 0 ,'b'],
        ['b', 0, 'd','b','b','d', 0 ,'b'],
        ['b','b','b','e','e','b','b','b'],
        ['e','e','e','d','d','e','e','e'],
    ],//utusen room
    [
        ['e','e','e','d','d','d','e','d'],
        ['e','e','e','d','d','d','e','e'],
        ['e','e','d','d','d','d','e','e'],
        ['e','e','d','d','d','e','e','e'],
        ['e','d','d','d','e','e','e','e'],
        ['d','d','d','d','e','e','e','e'],
        ['d','d','d','e','e','e','e','e'],
        ['d','e','e','e','e','e','e','e'],
    ],//bossroom

]
let backmap = [
    ['a','b','c','d','e','a','a','a'],
    ['a','a','a','a','a','a','a','a'],
    ['a','a','a','a','a','a','a','a'],
    ['a','a','a','a','a','a','a','a'],
    ['a','a','a','a','a','a','a','a'],
    ['a','a','a','a','a','a','a','a'],
    ['a','a','a','a','a','a','a','a'],
    ['a','a','a','a','a','a','a','a'],
];
const backmapnum = ['0.3','7.3','14.3'];//開始位置.そっから終了位置までの差

const objmaps = [
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 11, 0, 2, 0],
        [0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0],//19と23
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 6, 0],
        [0, 5, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 2, 0],
        [0, 0, 2, 0, 0, 0, 0, 0],
        [0, 6, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 6, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 10, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 7, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 8, 0, 0, 0],
        [0, 5, 3, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 8, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 3, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 5, 0],
        [0, 10, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 11, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],//こちらは祝福
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 2, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 2, 0],
        [0, 0, 0, 6, 6, 0, 0, 0],
        [2, 0, 7, 7, 7, 7, 0, 2],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [3, 0, 0, 0, 0, 0, 0, 1],    
    ],//急にホラー感ねw まあ1/100x1/10の確率だから俺が言わない限り出会わないでしょう！
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 12, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [3, 0, 0, 0, 0, 0, 0, 1],
    ],//ゾム部屋。是非ともこの部屋を引き当てて欲しいものですわ... と思ったら移動3回目くらいで出たらしい 豪運....
    [
        [0, 0, 0, 0, 0, 14, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 13, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 0, 0, 0, 0, 0],
    ],//ボス部屋
    [//こっから昼砂漠
        [0, 0, 0, 17, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 18, 0],
        [0, 20, 0, 0, 18, 0, 18, 0],
        [0, 0, 1, 0, 0, 0, 18, 18],
        [0, 0, 22, 22, 0, 0, 2, 0],
        [0, 0, 0, 22, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 16, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 20, 0, 16, 0],
        [0, 18, 0, 0, 2, 0, 0, 0],
        [0, 16, 18, 22, 22, 22, 22, 0],
        [0, 18, 18, 3, 0, 22, 22, 0],
        [0, 0, 0, 0, 0, 19, 0, 0],
        [2, 0, 20, 0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 18, 17, 17],
        [0, 0, 16, 0, 2, 18, 17, 17],
        [0, 0, 0, 0, 0, 0, 18, 0],
        [0, 3, 22, 19, 0, 0, 22, 0],
        [0, 0, 22, 22, 0, 0, 0, 0],
        [0, 0, 16, 22, 20, 0, 0, 0],
        [0, 0, 2, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 16, 0, 0, 2, 20, 0],
        [0, 5, 0, 0, 0, 0, 0, 0],
        [0, 21, 0, 0, 0, 0, 0, 0],
        [0, 0, 22, 22, 2, 0, 0, 0],
        [0, 2, 22, 22, 22, 22, 19, 0],
        [0, 0, 0, 20, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0],
        [0, 20, 0, 0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 19, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 20, 0],
        [22, 5, 16, 0, 2, 0, 0, 0],
        [21, 22, 22, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],//fun値68の部屋。...どしよここ
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 24],
        [18, 0, 0, 0, 0, 0, 0, 18],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [3, 0, 0, 0, 0, 0, 0, 1],
    ],//tontonsan部屋。
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 13, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 14, 0],
    ],//ボス部屋
    [//こっから夜砂漠
        [22, 22, 0, 17, 0, 0, 0, 0],
        [22, 22, 0, 2, 0, 0, 18, 0],
        [22, 20, 0, 0, 18, 0, 18, 0],
        [0, 0, 1, 0, 0, 0, 18, 18],
        [0, 0, 22, 22, 22, 22, 2, 0],
        [2, 22, 22, 22, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 16, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 22, 22],
        [22, 22, 1, 0, 20, 22, 16, 22],
        [0, 18, 0, 0, 2, 0, 0, 22],
        [0, 16, 18, 22, 22, 22, 22, 0],
        [0, 18, 18, 3, 22, 22, 22, 0],
        [0, 0, 0, 22, 22, 23, 22, 0],
        [2, 0, 20, 22, 22, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [22, 22, 22, 22, 0, 18, 17, 17],
        [22, 22, 16, 22, 2, 18, 17, 17],
        [22, 0, 0, 0, 22, 0, 18, 0],
        [0, 3, 22, 23, 0, 22, 22, 22],
        [22, 22, 22, 22, 0, 0, 0, 0],
        [22, 0, 16, 22, 20, 0, 0, 0],
        [22, 22, 2, 0, 0, 1, 0, 0],
        [22, 22, 0, 0, 0, 0, 0, 0],
    ],
    [
        [22, 1, 22, 22, 22, 0, 0, 0],
        [0, 22, 16, 0, 0, 2, 20, 0],
        [0, 5, 0, 0, 0, 0, 0, 0],
        [0, 21, 22, 22, 22, 22, 22, 0],
        [0, 0, 22, 22, 2, 0, 0, 0],
        [0, 2, 22, 22, 22, 22, 23, 0],
        [0, 0, 0, 20, 0, 0, 22, 22],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [22, 22, 22, 22, 22, 22, 22, 0],
        [22, 22, 22, 22, 22, 22, 1, 0],
        [0, 20, 22, 22, 0, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 23, 0, 0, 0, 0],
        [0, 0, 0, 22, 22, 0, 20, 0],
        [22, 5, 16, 0, 2, 22, 0, 0],
        [21, 22, 22, 22, 22, 22, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],//fun68
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 24, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [3, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],//utusen
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 13, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 14],
    ]//boss

];
let objmap = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];
const objmapnum = ['0.5','9.4','17.4'];
let stage = 1;
let floor = 0;

//#region 画像とかをロードする機構
let imageNamesL = 0;
let images = {};
let imageNames = {
    'maps':['a','b','c','d','e','f','g'],
    'effects':['explosion_1','explosion_2','explosion_3'],
    'enemies':['翠嵐の風刃','蒼白の粘液','燐光の妖花','黄昏の穿影','燦爛する緑夢','紫苑の花姫'],
    'charas':['color_slime_green','color_slime_blue','color_slime_red','color_slime_yellow','color_slime_purple','color_slime_white','color_slime_black','mechanic','clown','magodituono','wretch'],
    'systems':['star1','star2','star3'],
}
let imageNamesT = Object.keys(imageNames).map(a => imageNames[a].length).reduce((a, b) => a + b);
Object.keys(imageNames).forEach(belong => {
    imageNames[belong].forEach(num => {
        let img = new Image();
        img.src = `assets/${belong}/${num}.png`;
        img.onload = () => {
            imageNamesL++;
            if(imageNamesL === imageNamesT){
                waitForGameStart();
            }
        };
        img.onerror = () => {
            console.error(`Image ${belong}/${num} failed to load.`);
        };
        if(!images[belong]) images[belong] = {};
        images[belong][num] = img;
    });
});

let detailmapNamesL = 0;
let detailmapNames = {
    '草原':['a','b',0,'stair','fire_on','fire_off','shop','chest_n','chest_r','candy','cookie','door']
}
let detailmapNamesT = Object.keys(detailmapNames).map(a => detailmapNames[a].length).reduce((a, b) => a + b);
Object.keys(detailmapNames).forEach(belong => {
    detailmapNames[belong].forEach(num => {
        let img = new Image();
        img.src = `assets/maps/${belong}/${num}.png`;
        img.onload = () => {
            detailmapNamesL++;
            if(detailmapNamesL === detailmapNamesT){
                waitForGameStart();
            }
        };
        img.onerror = () => {
            console.error(`Image maps/${belong}/${num} failed to load.`);
        };
        if(!images[belong]) images[belong] = {};
        images[belong][num] = img;
    });
});

let waitfornowforgamestart = 0;
function waitForGameStart(){
    waitfornowforgamestart++;
    if(2 <= waitfornowforgamestart){
        GameStart();
    }
}

//#endregion


// 選択画像のロードと初期表示
let IMGselect = 0;
IMGselect = new Image();
IMGselect.src = 'assets/maps/select.png';

let movable = 0;

let SELECTx = 0; // x座標
let SELECTy = 0; // y座標
let MAPx,MAPy;

// キーが押されたときの...やつ
async function pUpdate(){
    let p = get();
    if(!movable) return;
    let moved = 0;
    
    let mv = 1;
    if(!p.moving){
        if((keys.w || keys.arrowup) && !p.moving){
            // if(keys.shift) mv = p.y;
            if(p.dir == 0) await move(p, 'add', 0, -mv);
            else p.dir = 0;
        }
        if((keys.s || keys.arrowdown) && !p.moving){
            // if(keys.shift) mv = (mapSize - 1) - p.y;
            if(p.dir == 180) await move(p, 'add', 0, mv);
            else p.dir = 180;
        };
        if((keys.a || keys.arrowleft) && !p.moving){
            // if(keys.shift) mv = p.x;
            if(p.dir == 270) await move(p, 'add', -mv, 0);
            else p.dir = 270;
        };
        if((keys.d || keys.arrowright) && !p.moving){
            // if(keys.shift) mv = (mapSize - 1) - p.x;
            if(p.dir == 90) await move(p, 'add', mv, 0);
            else p.dir = 90;
        };
        
        /*
        let ac = 0;
        if((keys.w || keys.arrowdown) && (keys.d || keys.arrowright)){
            p.dir = 45;
        }else if((keys.d || keys.arrowdown) && (keys.s || keys.arrowleft)){
            p.dir = 135;
        }else if((keys.s || keys.arrowdown) && (keys.a || keys.arrowright)){
            p.dir = 225;
        }else if((keys.a || keys.arrowdown) && (keys.w || keys.arrowright)){
            p.dir = 315;
        }else if(keys.w || keys.arrowup){
            p.dir = 0;
        }else if(keys.d || keys.arrowright){
            p.dir = 90;
        }else if(keys.s || keys.arrowleft){
            p.dir = 180;
        }else if(keys.a || keys.arrowleft){
            p.dir = 270;
        }

        if((keys.w || keys.arrowdown) || (keys.a || keys.arrowleft) || (keys.s || keys.arrowright) || (keys.d || keys.arrowup)){
            ac = 1;
            // if(keys.shift) ac = 2;
        }
        move(p, 'drive', ac, 0);
        */
    }

    if((keys.z || keys.enter) && textShowing == 0 && !p.moving){
        // 今乗ってる（on == true かつ 座標が同じ） => obon認定
        let obon = Objects.filter(a => a.x == p.x && a.y == p.y && a.on);
        if(obon.length > 1) return console.log(obon,'←onのやつらが重なってるみたいっす！');
        if(obon.length == 1){
            obon = obon[0];
            let data = Objectdatas.find(a => a.id == obon.id)
            if(!data) return console.error(obon,'←これのidの処理、書いてないっすよ〜？(ニヤっ)');

            let res = data.process();
            draw();

            if(res) return 1;
        }

        // 目の前にあるやつ（on == false かつ 向いてる方向）
        let karix = 0, kariy = 0;
        switch (p.dir) {
            case 0: kariy -= 1; break;
            case 90: karix += 1; break;
            case 180: kariy += 1; break;
            case 270: karix -= 1; break;
        }
        
        //onしてない => nobon認定
        let nobon = Objects.filter(a => a.x == p.x + karix && a.y == p.y + kariy && !a.on)
        if(nobon.length > 1) return console.log(nobon,'←not onのやつらが重なってるみたいっす！');
        if(nobon.length == 1){
            nobon = nobon[0];
            let data = Objectdatas.find(a => a.id == nobon.id);
            console.log(nobon, data)
            if(!data) return console.error(nobon,'←これのidの処理、書いてないっすよ〜？(ニヤっ)');

            let res = data.process();
            draw();

            if(res) return 1;
        }
    }

    if(p.x < 0 || mapSize < p.x || p.y < 0 || mapSize < p.y) error();
    
};

document.addEventListener('keydown', (event) => {
    if(event.key == 'e' && document.querySelector('#overfieldArea').style.display == 'block'){
        if(movable){
            movable = 0;
            window.setTimeout(inventoryOpen,200)
        }else{
            movable = 1;
            window.setTimeout(inventoryClose,200)
        }
    }
    if(event.key == 'g' && document.querySelector('#overfieldArea').style.display == 'block') testEnemyAppear();
});


function draw() {
    // if(SELECTx < 0) SELECTx=0;
    // if(SELECTy < 0) SELECTy=0;
    // if(SELECTx > mapSize*mass) SELECTx = mapSize*mass;
    // if(SELECTy > mapSize*mass) SELECTy = mapSize*mass;
    // MAPx = Math.floor(SELECTx / mass);
    // MAPy = Math.floor(SELECTy / mass);

    ctx.clearRect(0, 0, nowMap.offsetWidth, overfieldArea.offsetHeight); // 画面をクリア
    
    // ctx.drawImage(IMGselect, SELECTx, SELECTy, mass, mass);

    //background、そのまま背景
    for(let yy = 0; yy < mapSize; yy++){
      for(let xx = 0; xx < mapSize; xx++){
        let img = images['maps'][backmap[yy][xx]];
        if(img){
          ctx.drawImage(img, xx * mass, yy * mass, mass, mass);
        }else{
          console.error(`assets/maps/${backmap[yy][xx]}.png is not found.`);
        }
      }
    }

    /*
        for(let y = 0; y < objmap.length; y++) {
        for(let x = 0; x < objmap[y].length; x++) {
        let obs = objmap[y][x];
        if(obs.id == 0) continue;

        let belong = stage;
        let src = obs.id;
        if(obs.id == 'enemy') belong = 'enemies', src = obs.data.name;
        if('used' in obs.data) src += obs.data.used ? '_off' : '_on';

        let img = images[belong][src];
        if(!img) console.log(`assets/${belong}/${src}.png not found.`), img = images['systems']['error'];

        if(img) ctx.drawImage(img, x * mass, y * mass, mass, mass);
      }
    }
    */

    //object、仕掛けとか
    for(let obs of Objects){
        if(obs.id == 0) continue;
        
        let belong = obs.stage;
        let src = obs.src;
        if(obs.id == 'player') belong = 'charas', src = obs.data.img;
        if(obs.id == 'enemy') belong = 'enemies', src = obs.data.name;
        if('type' in obs.data) src += `_${obs.data.type}`;
        if('used' in obs.data) src += obs.data.used ? '_off' : '_on';

        let img = images[belong][src];
        if(!img) console.log(`assets/${belong}/${src}.png is not found.`), img = images['systems']['error'];
        if(img) ctx.drawImage(img, obs.ox, obs.oy, obs.w, obs.h);
    }
}


function get(me = '指定なし'){
    if(me == '指定なし') me = 0; //特別扱い, player
    
    let who = Objects[me];

    return who;
}
function able(who, type){
    return who.ables.some(a => a == type);
}
function prop(who, type){
    return who.prop && who.prop.some(a => a == type);
}
async function move(who, code, mx, my, force = 0){
    // let who = get(cam, me);

    // console.log(`想定: x|${who.x.toString().padStart(2, '0')}, y|${who.y.toString().padStart(2, '0')} => x|${(who.x + mx).toString().padStart(2, '0')}, y|${(who.y + my).toString().padStart(2, '0')}`)

    if(who.x + mx < 0 || 11 < who.x + mx) mx = 0;
    if(who.y + my < 0 || 11 < who.y + my) my = 0;
    
    if(mx == 0 && my == 0) return //console.log(`${who.name}「移動量が0ですわ〜〜！！」`);

    if(!able(who, 'move') && !force) return //console.log(`${who.name}「動けないっっ...!!」`);

    let addx, addy;
    let ssx = who.sx, ssy = who.sy; //save sxの略
    if(code == 'add'){
        who.sx += mx*mass;
        who.sy += my*mass;
        addx = mx*mass/who.spd;
        addy = my*mass/who.spd;
    }
    if(code == 'set'){
        who.sx = mx*mass;
        who.sy = my*mass;
        addx = Math.abs(who.x - mx) / who.spd;
        addy = Math.abs(who.y - my) / who.spd;
    }
    if(code == 'drive'){
        let rad = (who.dir - 90) * Math.PI / 180;
        
        my = 0; //これ無視した方がいいかも。使い所isない
        let noise = random(-my, my);

        let dx = mx * mass * Math.cos(rad) - noise * Math.sin(rad);
        let dy = mx * mass * Math.sin(rad) + noise * Math.cos(rad);

        who.sx += dx;
        who.sy += dy;

        addx = dx / who.spd;
        addy = dy / who.spd;
    }

    let list = Object.values(Objects).flat();
    // console.log(`(${looped})${who.name}「${able(who, 'pass')}, ${list.some(t => over(who, t))}, ${list.some(t => able(t, 'bepass'))}」`);
    if(list.some(t => over(who, t))){
        list.forEach(t => {
            if(over(who, t) && !able(t, 'bepass')){
                // console.log(`(${looped})${who.name}[${who.x},${who.y}]「${t.name}[${t.x},${t.y}]とぶつかる〜〜〜〜！！」`)
                // console.log(`(${looped})自分: ${who.name} x:${who.x} y:${who.y} sx:${who.sx} sy:${who.sy} w:${who.w} h:${who.h} dir:${who.dir} spd:${who.spd}`);
                // console.log(`(${looped})相手: ${t.name}) x:${t.x} y:${t.y} sx:${t.sx} sy:${t.sy} w:${t.w} h:${t.h} dir:${t.dir} spd:${t.spd}`);
            };
        })
    }
    if(!able(who, 'pass') && list.some(t => over(who, t) && !able(t, 'bepass'))) return who.sx = ssx, who.sy = ssy, draw()//, console.log(`(${looped})${who.name}「この先に何かあるっぽい？」`);

    // console.log(`(${looped})想定: x|${who.x.toString().padStart(2, '0')}, y|${who.y.toString().padStart(2, '0')} => x|${(who.x + mx).toString().padStart(2, '0')}, y|${(who.y + my).toString().padStart(2, '0')} || 実行: x|${addx.toString().padStart(5, ' ')}, y|${addy.toString().padStart(5, ' ')} 計${who.spd}回反復`)

    who.moving = 1;
    for(let i = 0; i < who.spd; i++){
        who.ox += addx;
        who.oy += addy;
        await delay(10);
        draw();
    }

    who.x = Math.round(who.ox / mass);
    who.y = Math.round(who.oy / mass);
    who.ox = who.sx
    who.oy = who.sy;

    draw();

    who.moving = 0;
}
const EPSILON = 0.01;
function over(a, b) {
    if (a.cam == b.cam && a.me == b.me) return false;

    let sx1 = a.sx, sy1 = a.sy, ex1 = a.sx + a.w, ey1 = a.sy + a.h;
    let sx2 = b.sx, sy2 = b.sy, ex2 = b.sx + b.w, ey2 = b.sy + b.h;

    let overlapX = (sx1 < ex2 - EPSILON) && (ex1 > sx2 + EPSILON);
    let overlapY = (sy1 < ey2 - EPSILON) && (ey1 > sy2 + EPSILON);

    return overlapX && overlapY;
}

function cm(cam = '指定なし', me = '指定なし'){
    if(cam == '指定なし' && me == '指定なし') cam = 'players', me = 0; //超特別扱い
    
    let who;
    if(me == '指定なし') who = humans[cam];
    else who = humans[cam][me];

    return who;
}

function GoNextFloor(){
    floor += 1;
    candybar = [];

    mapmake();

    draw()
}

function mapmake(code){
    //stage
    for(let i = 0; i < mapSize; i++){
        backmap[i] = [];

        for(let j = 0; j < mapSize; j++){
            let basescore = 10, bonus = 40;
            let scores = {};

            // 各タイルの初期スコアをセット
            let dataS = Stages.find(a => a.id == stage);
            dataS.tiles.forEach(type => scores[type] = basescore);

            // 左と上のマスに同じタイルがあったらスコア加算
            if (j > 0) scores[backmap[i][j - 1]] += bonus;
            if (i > 0) scores[backmap[i - 1][j]] += bonus;

            function weightedRandom(weightMap) {
                let total = Object.values(weightMap).reduce((a, b) => a + b, 0);
                let r = Math.random() * total;
                for (let key in weightMap) {
                    r -= weightMap[key];
                    if (r < 0) return key;
                }
            }

            // 重み付きランダム選択
            let chosen = weightedRandom(scores);

            backmap[i][j] = chosen;
            //ctx.drawImage(images.maps[chosen], j * mass, i * mass, mass, mass);
        }
    }

    objmap = [];
    for(let i = 0; i < mapSize; i++){
        objmap[i] = [];
        for(let j = 0; j < mapSize; j++){
            objmap[i][j] = {id:0};
        }
    }
    let maxObs = random(3,7);
    let obsList = JSON.parse(JSON.stringify(obsAll[stage]));
    for(let i = 0; i < maxObs; i++){
        let obs = arrayGacha(obsList, obsList.map(a => a.p));
        if(!obs) console.log(obsList, obs);
        let obsInd = obsList.indexOf(obs);

        let obdata = Objectdatas.find(b => b.id == obs.id??0);
        if(!obdata) obdata = Objectdatas.find(b => b.id == 'none');
        if(obdata.k??1 == 0) obsList.splice(obsInd, 1); // 重複できない子なら消し去る

        let obx = 0, oby = 0;
        let douBasyo = Objects.filter(a => a.x == obx && a.y == oby && a.id != 0);
        while(douBasyo.length || !(douBasyo.filter(a => a.on) && !obdata.on)){
            // console.log(`あるか:${douBasyo.length}, 乗れるか:${!obs.on}`)
            // console.log(`(${obx}, ${oby})はすでに何かがあるっぽい？`);
            obx = random(0, mapSize - 1);
            oby = random(0, mapSize - 1);
            douBasyo = Objects.filter(a => a.x == obx && a.y == oby && a.id != 0);
        };

        // console.log(obs)
        // console.log(obs.id, obs.data.name)
        addob(obs.id, obx, oby, obdata.w, obdata.h, obdata.spd, 90, obdata.ables, obs.data);

        /*
            obsAllのobs = {
                id:'enemy',
                on:0,
                p:35,
                data:{
                    name:'蒼白の粘液',
                }
            }

            objectDatasのob = {
                id: 'enemy',
                w: 1, //1 == 1massの意
                h: 1,
                spd: 20,
                pass: 0,
            }
        */
    }

    // MAPx = objmapnum[stage-1].split('.');
    // MAPy = +MAPx[1]+1
    // MAPx = +MAPx[0]
    // objmap = objmaps[Math.floor(Math.random() *    MAPy)+MAPx];
    // objmap = JSON.parse(JSON.stringify(objmaps[Math.floor(Math.random() * MAPy) + MAPx]));

    // if(stage == 1){
    //     if(fun == 23 && probability(10)){
    //         backmap = backmaps[4];
    //         objmap = objmaps[6];
    //     }else if(fun <= 50 && probability(10)){
    //         backmap = backmaps[5];
    //         objmap = objmaps[7];
    //     };
    // }else if(stage == 2){
    //     if(fun == 68 && probability(10)){
    //         backmap = backmaps[11];
    //         objmap = objmaps[14];
    //         objmap = JSON.parse(JSON.stringify(objmaps[Math.floor(Math.random() * MAPy) + MAPx]));
    //     }else if(fun <= 50 && probability(10)){
    //         backmap = backmaps[19];
    //         objmap = objmaps[23];
    //         objmap = JSON.parse(JSON.stringify(objmaps[Math.floor(Math.random() * MAPy) + MAPx]));
    //     };
    // }else if(stage == 3){
    //     if(fun == 68 && probability(10)){
    //         backmap = backmaps[18];
    //         objmap = objmaps[22];
    //         objmap = JSON.parse(JSON.stringify(objmaps[Math.floor(Math.random() * MAPy) + MAPx]));
    //     }else if(fun <= 50 && probability(10)){
    //         backmap = backmaps[19];
    //         objmap = objmaps[23];
    //         objmap = JSON.parse(JSON.stringify(objmaps[Math.floor(Math.random() * MAPy) + MAPx]));
    //     };
    // }
    // if(stage == 1 && floor >= 10){SELECTx = 150;SELECTy = 525;backmap = backmaps[6];objmap = objmaps[8]}; //創生黎明の原野
    // if(stage == 2 && floor >= 7 ){SELECTx = 150;SELECTy = 525;backmap = backmaps[13];objmap = objmaps[16]}; //ガチェンレイゲスドゥールラート(昼)
    // if(stage == 3 && floor >= 3 ){SELECTx = 150;SELECTy = 525;backmap = backmaps[20];objmap = objmaps[24]}; //ガチェンレイゲスドゥールラート(夜)
}

let Objects = [];
function addob(id, mx, my, w, h, spd, dir, ables, data){
    //idは0なら何もしない
    if(id == 0) return;

    let src = id;

    let ob = {
        id: id,
        //cam: cam,
        me: Objects.length,
        stage: stage,
        src: src,
        x: mx,
        y: my,
        sx: mx*mass,
        sy: my*mass,
        ox: mx*mass,
        oy: my*mass,
        w: w*mass,
        h: h*mass,
        moving: 0,
        spd: spd || 5,
        dir: dir || 90,
        ables: ables || [],
        data: data || {},
    }

    Objects.push(ob);
}

function NextStage(){
    let mts = stage; //moto stage

    while(mts == stage){
        // 1~3の間でランダムにステージを決定
        let arr = Stages.map(a => a.id);
        stage = arraySelect(arr);
    }
    
    floor = 0;
    GoNextFloor();
}

//#endregion

//#region 変数達
let x,y,z;//こいつらは計算

let fun = random(1,100);

let turn = ['players', 1];//今誰のターンか
let turncount = 0;//今のターン数
let phase = 0;//何中か

//保存されるデータs
let username = 'no name';
let rank = 1;
let rpt = 0;
let maxrpt = 100;
let valorimar = 0;
let bankvalorimar = 0;

//毎ダンジョン変わるデータs 固有値というか規定値。接頭辞によってこっから変動させたりできるようにする用
let enemylv = 1;
let enemyhp = 0;
let enemymp = 0;
let enemyatk = 0;
let enemydef = 0;
let enemymatk = 0;
let enemymdef = 0;
let enemycrla = 0;
let enemycrdm = 0;
let enemycrrs = 0;


let sp = 1;//能力上昇(ダンジョン内有効)用

let acted = 0;
let bar = {
    cam:['players','players','players','players','enemies','enemies','enemies','enemies'],
    me:[0,1,2,3,0,1,2,3]
}

//0 = false,1 = true
let afknow = 0;
let dungeonnow = 0;
let bossbattlenow = 0;


let myWeapons = [];
let myArmors = [];
let mySkills = [];

myWeapons.push(
    {
        id:'woodensword',
        lv:1, //強化で上がる数値
        rank:1,//重層で上がる数値
    },
    {
        id:'card',
        lv:3,
        rank:1,
    }
)

//#endregion

//#region ダブルタップによる拡大を禁止するやつ
var time = 0;
document.addEventListener('touchend', function (e) {
    e.preventDefault();

    console.log("preventDefault");
    var now = new Date().getTime();
    if ((now - time) < 350) {
        e.preventDefault();
    }
    time = now;
}, true);
//#endregion


let humans = {
    players:[],
    enemies:[]
};

function tekiou(){
    //存在確認用コマンド Object.keys(humans).forEach(cam => {Object.keys(humans[cam]).map(a => a.toString()).filter(s => humans[cam][s].status == 1 || humans[cam][s].status == 2).forEach(me => {console.log(`${cam}${me}`)})})
    //生存確認用コマンド x = [1, 2, 3, 4].every(id => {let Enemy = humans.enemies[id];return Enemy.status == 0 || Enemy.status == 2;});
    Object.keys(humans).forEach(cam => {
        Object.keys(humans[cam]).map(a => a.toString()).filter(s => humans[cam][s].status == 1 || humans[cam][s].status == 2).forEach(me => {
            let human = humans[cam][me];
            let humanD = document.querySelector(`#${cam}${me}`);

            let name = human.prefixe ? `${human.prefixe} ${human.name}` : human.name;

            humanD.querySelector(`.name`).textContent = name;
            humanD.querySelector(`.level`).textContent = `Lv.${human.level}`;
            humanD.querySelector(`.hp .num`).textContent = `${human.hp}/${human.maxhp}`;
            humanD.querySelector(`.hp .bar .inner`).style.width = `${(human.hp / human.maxhp)*100}%`;
            humanD.querySelector(`.mp .num`).textContent = `${human.mp}/${human.maxmp}`;
            humanD.querySelector(`.mp .bar .inner`).style.width = `${(human.mp / human.maxmp)*100}%`;

            if(cam == 'players' && me !== 't'){
                humanD.querySelector('.skill .gauge').style.height = `${(human.ep / human.maxep)*100}%`;
                if(human.ep >= human.maxep){human.ep = human.maxep; humanD.querySelector('.skill gauge').style.height = '100%'}
            }

            let apply = buffcheck(cam,me);
            humanD.querySelector(`.effects`).innerHTML = apply.join('');

            humans[cam][me].power = 1;humans[cam][me].shell = 1;
            let karix = 0;
            
            human.buffs.forEach(buff => {
                
            })

            if(humans[cam][me].status == 2){
                document.querySelector(`#${cam}${me}`).style.backgroundColor = '#b2b2b2';
            }
        })
    })

    function buffcheck(cam,me){
        let buffs = humans[cam][me].buffs;

        let apply = [];

        const typeOrder = {buff: 1, debuff: 2, handle: 3, unique: 4, unknown: 5};
        const kindOrder = {turn: 1, stack: 2};

        let result =  buffs.sort((a, b) => {
            // type（buff → debuff → handle → unique → unknown）でソート
            if(typeOrder[a.type] !== typeOrder[b.type]){
                return typeOrder[a.type] - typeOrder[b.type];
            }
            // kind（turn → stack）でソート
            return (kindOrder[a.kind] || 99) - (kindOrder[b.kind] || 99);
        });

        result.forEach(effect => {
            //console.log(`${effect.lv}Lvの${effect.time}の${effect.name}。typeは${effect.type}で、kindは${effect.kind}`);
            let data = Buffs.find(e => e.name == effect.name);

            let Time = effect.kind == 'turn' ? effect.time : (effect.kind == 'stack' ? effect.lv : '？？？');
            let Lv = effect.kind == 'turn' ? `<br>Lv: ${effect.lv}` : '';

            let top,bottom;
            if(effect.type == 'debuffs'){
                top = ` hasd" data-description="${data.description}<br>${effect.kind}: ${Time}${Lv}" style="background:url('assets/buffs/${data.img}.png') center/cover no-repeat"`;
                bottom = `"`;
            }else{
                top = `"`;
                bottom = ` hasd" data-description="${data.description}<br>${effect.kind}: ${Time}${Lv}" style="background:url('assets/buffs/${data.img}.png') center/cover no-repeat"`;
            }

            apply.push(`
                <div class="${effect.type}"">
                    <div class="top${top}></div>
                    <div class="bottom${bottom}></div>
                </div>
            `)
        })

        return apply
    }

    let buffses = [
        {
            name:'powerup',
            type:'buffs',
            kind:'turn',
            lv:1,
            time:1
        },
        {
            name:'palsy',
            type:'handles',
            kind:'turn',
            lv:2,
            time:1
        },
        {
            name:'enchant',
            type:'buffs',
            kind:'turn',
            lv:2,
            time:3
        },
        {
            name:'powerdown',
            type:'debuff',
            kind:'turn',
            lv:2,
            time:2
        },
        {
            name:'anger',
            type:'handles',
            kind:'stack',
            lv:2,
            time:null
        },
        {
            name:'pierce',
            type:'buffs',
            kind:'turn',
            lv:2,
            time:4
        },
    ]

    //細々とした必要なものを 略して"こまごめピペット"
    document.querySelector('#turn').textContent = `turn:${turncount}`;
    

}

function save(){
    if(!usersRef) return 1;
    updateUI();
    const newData = {
        valorimar: valorimar,
        bankvalorimar: bankvalorimar,
        rank: rank,
        rpt: rpt,
        clearedQuest: {main:clearedQuest.main, daily:clearedQuest.daily}
    };
    usersRef.update(newData)
}

function load(){
    return usersRef.once('value').then(snapshot => {
        return snapshot.val();
    });
}

//#region invD
let invD = document.querySelector('#inventory');
let Sutefuris = [
    {
        name:'maxhp',
        jpnm:'最大体力',
        added:0, //実績用にします？
        value:20,
        description:'最大体力を20増やし、体力を20回復する<br>ピンチな時にぜひ<br>筋肉は全てを解決する',
    },
    {
        name:'atk',
        jpnm:'攻撃力',
        added:0,
        value:5,
        description:'攻撃力を5増加させる。腕立て伏せかな'
    },
    {
        name:'def',
        jpnm:'防御力',
        added:0,
        value:5,
        description:'防御力を5増加させる。腹筋とかかな'
    },
    {
        name:'maxmp',
        jpnm:'最大魔素',
        added:0,
        value:10,
        description:'最大魔素保有量を10増加。けど圧縮してる感じ<br>筋肉でも解決できないことはある'
    },
    {
        name:'matk',
        jpnm:'魔法攻撃力',
        added:0,
        value:5,
        description:'魔法攻撃力を5増加。おそらく変換機の改良'
    },
    {
        name:'mdef',
        jpnm:'魔法抵抗力',
        added:0,
        value:5,
        description:'魔法防御力を5増加。おそらく気合い'
    },
    {
        name:'critlate',
        jpnm:'会心率',
        added:0,
        value:2,
        description:'会心率を2上昇する。つまりは2%上昇。<br>相手の弱点を見抜く力は大事',
    },
    {
        name:'critdmg',
        jpnm:'会心倍率',
        added:0,
        value:0.1,
        description:'会心時の倍率を10%上昇する。つまりは倍率が+0.1',
    },
    {
        name:'critresist',
        jpnm:'会心抵抗',
        added:0,
        value:2,
        description:'会心抵抗を2上昇する。つまりは2%分会心されにくい<br>どこまでが本体かわからないような服着てるのかな'
    },
    {
        name:'speed',
        jpnm:'速度',
        added:0,
        value:5,
        description:'速度を5上昇させる。あまり上げる意味はない<br>こうそくいどうがなんだかんだめちゃ強なんすわ'
    },
    {
        name:'dodge',
        jpnm:'回避率',
        added:0,
        value:2,
        description:'回避率を2上昇させる。つまりは2%。<br>速度と一緒やろ！！って思った人は帰れ'
    },
    {
        name:'targe',
        jpnm:'命中率',
        added:0,
        value:2,
        description:'命中率を2上昇させる。つまりは2%。<br>回避率に対抗するか命中が下げられたかでもないと基本上げない'
    }
]
let InventoryPage = 0;
function inventoryOpen(me = 0){
    InventoryPage = me??1;
    let array = ['name','level','exp','hp','maxhp','atk','def','maxmp','matk','mdef','critlate','critdmg','critresist'];
    let Status = array.map(a => `${a}: ${humans.players[InventoryPage][a]}`).join('<br>');
    
    for(let ste of Sutefuri){
        // <button class="button" data-description="${Sutefuris[a].description}" onclick="suteFuri${a}">${a}</button>
        let div = document.createElement('div');
        div.className = 'sute';
        div.textContent = ste.name;
        div.dataset.description = ste.description;
        div.addEventListener('click', () => suteFuri(ste.name));
        invD.appendChild(div);
    }
    invD.style.display = 'flex';
    

    // let slashs = Object.keys(Slashs).map(a => Slashs[a].lv <= humans.players[InventoryPage].level ? `<span class="hasd" data-description="${Slashs[a].description}">${Slashs[a].id}</span>` : null).filter(Boolean)
    // document.querySelector('#ISlashAppearence').innerHTML = slashs.join('<br>');
    // let magics = Object.keys(Magics).map(a => Magics[a].lv <= humans.players[InventoryPage].level ? `<span class="hasd" data-description="${Magics[a].description}">${Magics[a].id}</span>` : null).filter(Boolean)
    // document.querySelector('#IMagicAppearence').innerHTML = magics.join('<br>');
    // let weapons = Object.keys(Weapons).map(a => Weapons[a].num >= 1 && Weapons[a].num > Object.keys(humans.players).filter(b => humans.players[b].weapon.id == Weapons[a].id).length ? `<span class="hasd" data-description="${Weapons[a].description}">${Weapons[a].name} x${Weapons[a].num}</span>` : null).filter(Boolean)
    // document.querySelector('#IWeapons').innerHTML = weapons.join('<br>');
    // let shields = Object.keys(Armors).map(a => Armors[a].num >= 1 && Armors[a].num > Object.keys(humans.players).filter(b => humans.players[b].shield.id == Armors[a].id).length ? `<span class=" hasd" data-description="${Armors[a].description}">${Armors[a].name} x${Armors[a].num}</span>` : null).filter(Boolean)
    // document.querySelector('#IArmors').innerHTML = shields.join('<br>');
    // let tools = Object.keys(Tools).filter(a => Tools[a].num > 0).map(a => `<span class="hasd" data-description="${Tools[a].description}">${Tools[a].name} x${Tools[a].num}:</span>`).filter(Boolean)
    // document.querySelector('#IItems').innerHTML = tools.join('<br>');

    document.querySelector('#IEquipsChangeZone').style.display = 'none';

    
    let nextpage = addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {    
            InventoryPage++;if(InventoryPage>4){InventoryPage=1;}
            if(humans.players[InventoryPage].status >= 1){
                inventoryOpen();
                nextpage.remove();
            }else{
                InventoryPage--;
            }
        }
        if (event.key === 'ArrowLeft') {
            InventoryPage--;if(InventoryPage<1){InventoryPage=4;}
            if(humans.players[InventoryPage].status >= 1){
                inventoryOpen();
                nextpage.remove();
            }else{
                InventoryPage++;
            }
        }
    });
}
function inventoryClose(){
    movable = 1;
    invD.style.display = 'none';
};


function SlashChange(num){
    let availableSlashs = Object.keys(Slashs)
        .filter(a => Slashs[a].lv <= humans.players[InventoryPage].level)
        .map(a => Slashs[a].id);
    let slashSelectHTML = availableSlashs.map(slash => 
        `<button class="button hasd" onclick="SlashChangeDecide('${slash}',${num})" data-description="${Slashs[slash].description}">${Slashs[slash].name}</button>`
  ).join(' ');
  
  document.querySelector('#SlashChangePlace').innerHTML = `
        Select Slash for Slot ${num}:<br>
        ${slashSelectHTML}
  `;
}
function SlashChangeDecide(name,num){
    // 選択したスロットに魔法を割り当て
    switch(num) {
         case 1:
              humans.players[InventoryPage].slash[1] = name;
              break;
         case 2:
              humans.players[InventoryPage].slash[2] = name;
              break;
         case 3:
              humans.players[InventoryPage].slash[3] = name;
              break;
    }
    inventoryOpen(InventoryPage)
}
function MagicChange(num){
    let availableMagics = Object.keys(Magics).filter(a => Magics[a].lv <= humans.players[InventoryPage].level).map(a => Magics[a].id);
    let magicSelectHTML = availableMagics.map(magic => 
        `<button class="button hasd" onclick="MagicChangeDecide('${magic}', ${num})" data-description="${Magics[magic].description}">${magic}</button>`
  ).join(' ');
  
  document.querySelector('#MagicChangePlace').innerHTML = `
        <div>Select Magic for Slot ${num}:</br>
        ${magicSelectHTML}
  `;
}
function MagicChangeDecide(name,num){
    // 選択したスロットに魔法を割り当て
    switch(num) {
         case 1:
              humans.players[InventoryPage].magic[1] = name;
              break;
         case 2:
              humans.players[InventoryPage].magic[2] = name;
              break;
         case 3:
              humans.players[InventoryPage].magic[3] = name;
              break;
    }
    inventoryOpen(InventoryPage)
}

function WeaponChange(){
    document.querySelector('#IEquipsChangeZone').innerHTML = '';document.querySelector('#IEquipsChangeZone').style.display = 'block';
    let order = Object.keys(Weapons).map(a => a.id);
    let joins = [];
    myWeapons.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
    myWeapons.forEach((a,i) => {
        joins.push(`<button class="button hasd" data-description="${Weapons[a.id].description}" onclick="WeaponChangeDeside('${i}')">${Weapons[a.id].name}</button>`);
    })
    if(humans.players[InventoryPage].weapon.id !== 'none'){joins.unshift(`<button class="button hasd" data-description="${Weapons.none.description}" onclick="WeaponChangeDeside('none')">none</button>`)};
    document.querySelector('#IEquipsChangeZone').innerHTML += joins.join(' ');
}
function WeaponChangeDeside(code){
    console.log(`${Weapons[humans.players[InventoryPage].weapon.id]?.name??'error'} => ${Weapons[myWeapons[code]?.id??'none']?.name??'error'}`);
    if(code !== 'none'){
        humans.players[InventoryPage].weapon.id !== 'none' && myWeapons.push(humans.players[InventoryPage].weapon);
        humans.players[InventoryPage].weapon = myWeapons[code];
        myWeapons.splice(code,1);
    }else{
        humans.players[InventoryPage].weapon.id !== 'none' && myWeapons.push(humans.players[InventoryPage].weapon);
        humans.players[InventoryPage].weapon = Weapons.none;
    }
    inventoryOpen(InventoryPage);
}
function ArmorChange(){
    document.querySelector('#IEquipsChangeZone').innerHTML = '';document.querySelector('#IEquipsChangeZone').style.display = 'block';
    let order = Object.keys(Armors).map(a => a.id);
    let joins = [];
    myArmors.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id))
    myArmors.forEach((a,i) => {
        joins.push(`<button class="button hasd" data-description="${Armors[a.id].description}" onclick="ArmorChangeDeside('${i}')">${Armors[a.id].name}</button>`)
    })
    if(humans.players[InventoryPage].shield.id !== 'none'){joins.unshift(`<button class="button hasd" data-description="${Armors.none.description}" onclick="ArmorChangeDeside('none')">none</button>`)};
    document.querySelector('#IEquipsChangeZone').innerHTML += joins.join(' ');
}
function ArmorChangeDeside(code){
    console.log(`${Armors[humans.players[InventoryPage].shield.id]?.name??'error'} => ${Armors[myArmors[code]?.id??'none']?.name??'error'}`);
    if(code !== 'none'){
        humans.players[InventoryPage].shield.id !== 'none' && myArmors.push(humans.players[InventoryPage].shield);
        humans.players[InventoryPage].shield = myArmors[code];
        myArmors.splice(code,1);
    }else{
        humans.players[InventoryPage].shield.id !== 'none' && myArmors.push(humans.players[InventoryPage].shield);
        humans.players[InventoryPage].shield = Armors.none;
    }
    inventoryOpen(InventoryPage);
}
function ToolChange(num){
    document.querySelector('#IEquipsChangeZone').innerHTML = '';document.querySelector('#IEquipsChangeZone').style.display = 'block';
    Object.keys(Tools).filter(a => Tools[a].num > 0).forEach((a,i) => {
        document.querySelector('#IEquipsChangeZone').innerHTML += `<button class="button hasd" data-description="${Tools[a].description}<br>${Tools[a].num}個所持しています" onclick="ToolChangeDeside(${num},'${a}')">${Tools[a].name}</button>`;
    })
}
function ToolChangeDeside(num,code){
    switch(num){
        case 1:
            humans.players[InventoryPage].tool[1] = Tools[code].id;
            break;
        case 2:
            humans.players[InventoryPage].tool[2] = Tools[code].id;
            break;
        case 3:
            humans.players[InventoryPage].tool[3] = Tools[code].id;
            break;
    }
    inventoryOpen(InventoryPage);    
}

function suteFuri(me,code){
    let who = humans.players[me];
    if(who.sp <= 0){
        nicoText('spがないのぜ');
        return;
    };
    //Sutefuris
    
    grow(who, code, Sutefuris[code].value);

    switch(code){
        case 'maxhp':
            who.maxhp += 20;
            who.hp += 20;
            break;
        case 'atk':
            who.atk += 5;
            break;
        case 'def':
            who.def += 5;
            break;
        case 'maxmp':
            who.maxmp += 5;
            break;
        case 'matk':
            who.matk += 5; 
            break;
        case 'mdef':
            who.mdef += 5;
            break;
        case 'critlate':
            who.critlate += 2;
            break;
        case 'critdmg':
            who.critdmg += 0.1;
            break;
        case 'critresist':
            who.critresist += 2;
            break;
        case 'speed':
            who.speed += 5;
            break;
    }

    who.sp -= 1;
    inventoryOpen(me);
}

//#endregion

//#region smartPhone
let smartD = document.querySelector("#smartMenu");
let smartC = {}
let smartL = [
    {
        name:'zishou',
        img:'assets/enemies/翠嵐の風刃.png'
    },
    {
        name:'notice',
        img:'assets/systems/notice.png'
    },
    {
        name:'logbo',
        img:'assets/systems/logbo.png'
    },
    {
        name:'phone',
        img:'assets/systems/phone.png'
    }
]
for(let sm of smartL){
    let item = document.createElement("div");
    item.className = `item ${sm.name}`;
    if(sm.name != 'phone') item.classList.add('hidden');
    item.innerHTML = `<img src="${sm.img}">`;
    smartD.appendChild(item);
}
smartC.phone = smartMenu.querySelector(".phone");
smartC.phone.addEventListener("click", () => {
    smartD.querySelectorAll(".item:not(.phone)").forEach(item => {
        item.classList.toggle("hidden");
    });
});
smartD.querySelector('.zishou').addEventListener('click', () => {
    let p = cm();
    if(!p) return nicoText('failed!');
    if(p.hp > 10) p.hp -= 10;
    nicoText('successed!!');
    tekiou();
})
//#endregion smartPhone

//#region notice
let noticeD = document.querySelector('#notice');
let noticeC = {
    toggleB: document.querySelector('#smartMenu .notice'),
    listD: noticeD.querySelector('.list'),
    XD: noticeD.querySelector('.x'),
    backD: noticeD.querySelector('.back'),
    showD: noticeD.querySelector('.show'),
    stitleD: noticeD.querySelector('.show .title'),
    sdateD: noticeD.querySelector('.show .date'),
    sbodyD: noticeD.querySelector('.show .body')
}
let noticeNow = 0;

noticeC.toggleB.addEventListener('click', () => {
    noticeNow = 1;
    noticeD.style.display = 'block';

    noticeC.listD.innerHTML = '';
    Object.keys(noticeData).forEach(key => {
        let item = document.createElement('div');
        item.className = 'item';
        item.innerText = noticeData[key].title;
        item.setAttribute('data-id', key);
        item.addEventListener('click', () => {
            noticeC.stitleD.innerText = noticeData[key].title;
            noticeC.sdateD.innerText = noticeData[key].date;
            noticeC.sbodyD.innerText = noticeData[key].body;
            noticeC.listD.style.display = 'none';
            noticeC.showD.style.display = 'block';
        })
     noticeC.listD.appendChild(item);
  });
})
noticeC.XD.addEventListener('click', event => {
  noticeD.style.display = 'none';
  noticeNow = 0;
});
noticeC.backD.addEventListener('click', event => {
  noticeC.showD.style.display = 'none';
  noticeC.listD.style.display = 'flex';
});

//#endregion

//#region tutorial
//#endregion

//#region setting
//#endregion

//#region questの動き
let quest = [];
let clearedQuest = {main:0, daily:0};

function questShow(code){
    let mQ = quests.main;

    //クエストのリストを更新
    const waku = document.querySelector('#quest-list');
    waku.innerHTML = '';

    let mD = document.createElement('div');
    mD.className = 'quest main';
    questMake(mD, mQ)

    waku.appendChild(mD);

    //daily
    for (let i = 0; i < quest.daily.length; i++){
        const dq = document.createElement('div');
        dq.className = 'quest-daily';
        dq.innerHTML = `
            ${quest.daily[i].id}:${quest.daily[i].description}<br>
            ${quest.daily[i].rewards}€  ${quest.daily[i].num}/${quest.daily[i].nom}<br>
            <button class="button"onclick="questClear('${i}')">受け取り</button>`//mainが2以上になったら()のとこD1にして
        waku.appendChild(dq);
        waku.appendChild(br);
    }
}
function questMake(div, data){
    let title = document.createElement('div');
    title.className = 'title';
    title.textContent = data.description;
    div.appendChild(title);

    let reward = document.createElement('div');
    reward.className = 'reward';
    reward.textContent = `${data.rewards}€`;
    div.appendChild(reward);

    let prog = document.createElement('div');
    prog.className = 'progress';
    prog.textContent = `${data.num}/${data.nom}`;
    div.appendChild(prog);

    let B = document.createElement('button');
    B.className = 'button';
    B.textContent = '完了';
    B.addEventListener('click', () => questClear());
    div.appendChild(B);
}

function questClear(code){
    if(code == 'M'&&quest.main.num == quest.main.nom){
        valorimar += quest.main.rewards;
        rpt += 20;
        clearedQuest.main += 1;
        questShow('x');
    }
    switch(code){
        case 0:
            if(quest.daily[0].num == quest.daily[0].nom){
            valorimar += quest.daily[0].rewards;
            quest.daily[0].id = 0;
            quest.daily[0].description = 'end';
            quest.daily[0].rewards = 0;
            quest.daily[0].type = '';
            quest.daily[0].num = 0;
            quest.daily[0].nom = 0;
            clearedQuest.daily += 1;
            }
            break;
        case 1:
            if(quest.daily[1].num == quest.daily[1].nom){
            valorimar += quest.daily[1].rewards;
            quest.daily[1].id = 0;
            quest.daily[1].description = 'end';
            quest.daily[1].rewards = 0;
            quest.daily[1].type = '';
            quest.daily[1].num = 0;
            quest.daily[1].nom = 0;
            clearedQuest.daily += 1;
            }
            break;
        case 2:
            if(quest.daily[2].num == quest.daily[2].nom){
            valorimar += quest.daily[2].rewards;
            quest.daily[2].id = 0;
            quest.daily[2].description = 'end';
            quest.daily[2].rewards = 0;
            quest.daily[2].type = '';
            quest.daily[2].num = 0;
            quest.daily[2].nom = 0;
            clearedQuest.daily += 1;
            }
            break;
        case 3:
            if(quest.daily[3].num == quest.daily[3].nom){                
            valorimar += quest.daily[3].rewards;
            quest.daily[3].id = 0;
            quest.daily[3].description = 'end';
            quest.daily[3].rewards = 0;
            quest.daily[3].type = '';
            quest.daily[3].num = 0;
            quest.daily[3].nom = 0;
            clearedQuest.daily += 1;
            }
            break;
        case 4:
            if(quest.daily[4].num == quest.daily[4].nom){
            valorimar += quest.daily[4].rewards;
            quest.daily[4].id = 0;
            quest.daily[4].description = 'end';
            quest.daily[4].rewards = 0;
            quest.daily[4].type = '';
            quest.daily[4].num = 0;
            quest.daily[4].nom = 0;
            clearedQuest.daily += 1;
            }
            break;
    }
    save();
}
//#endregion

//#region ゲーム開始時ログインの動き、チャットのあれこれ
const firebaseConfig = {
    apiKey: "AIzaSyBN5V_E6PzwlJn7IwVsluKIWNIyathhxj0",
    authDomain: "koppepan-orange.firebaseapp.com",
    databaseURL: "https://koppepan-orange-default-rtdb.firebaseio.com",
    projectId: "koppepan-orange",
    storageBucket: "koppepan-orange.appspot.com",
    messagingSenderId: "730150198097",
    appId: "1:730150198097:web:076a074a3d406053155170",
    measurementId: "G-MYKJWD203Z"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
let chatroom = 1;
let messagesRef = database.ref('forrpg/rooms/'+chatroom+'/messages');
let usersRef;
let userData;
let loginDiv = document.querySelector('#login');
let loginAbleto = document.querySelector('#upperUI .login');

async function GameStart(){
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    document.querySelector('#homeArea').style.display = 'block';

    //autoLogin
    username = getLocalStorage("username"); // ログイン時
    if(username){
        console.log("自動ログインしました");
        usersRef = database.ref(`users/${username}/forrpg`);
        nicoText('wait for now...')
        login();
    }else{
        console.log("ログインしてください");
        loginAbleto.style.display = 'block'
    }
}

loginAbleto.addEventListener('click', () =>  {
    loginDiv.style.display = 'block';
})

loginDiv.querySelector('.button').addEventListener('click', async function(event){
    event.preventDefault();
    username = document.querySelector('#login .username').value;
    var password = document.querySelector('#login .password').value;
    let kariusersRef = database.ref('users/'+username+'/forrpg');

    // データベースでユーザーが存在するか確認
    kariusersRef.once('value').then(async function(snapshot){
        if(snapshot.exists()){
            userData = snapshot.val();
            if(userData.password === password){
                console.log('success!!!!!!!!!!!!!!!')
                login();
                setLocalStorage("username", username); // ログイン成功時
            } else {
                nicoText('パスワードが間違っています');
            }
        }else{
            usersRef.update({
                password: password,
            });
            
            valorimar = 0;
            bankvalorimar = 0;
            rank = 1;
            rpt = 0;
            clearedQuest.main = 0;
            clearedQuest.main = 0;

            quest.main = quest.main[0];
            quest.daily = [];
            for(i = 0;i < 5;i++){
                let newquest = arraySelect(quest.daily)
                newquest.id = i+1;
                quest.daily.push(newquest);
            }

            save()
            console.log('maked!!!!!!!!!!!!!!!!!!!!!')
            login();
            setLocalStorage("username", username);
        }
    });
    
});

// function questMake(code){
//     if(code == 'daily'){
//         for(i = 0;i < 5;i++){
//             let newquest = arraySelect(quest.daily)
//             newquest.id = i+1;
//             quest.daily.push(newquest);
//         };
//     };
// };

async function login(){

    usersRef.update({
        status: 'online'
    });
    loginDiv.style.display = 'none';
    document.querySelector('#chat-tab #chat').style.display = 'flex';
    selectRoom( )


    // データを取得する関数)
    userData = await load();
    await delay(50)

    valorimar = userData.valorimar??0;
    bankvalorimar = userData.bankvalorimar??0;
    rank = userData.rank??1;
    rpt = userData.rpt??0;
    clearedQuest.main = userData.clearedQuest.main??0;
    clearedQuest.daily = userData.clearedQuest.daily??0;
    maxrpt = rank*100;

    updateUI();
    
    quest.main = Quests.main[clearedQuest.main+1];
    if(userData && checkLastLogin(userData?.lastact??0)){
        clearedQuest.daily = 0;
        Object.keys(quest).filter(a => a.kind == 'daily').forEach(nanka => {
            quest[nanka] = arraySelect(Quests);
            quest[nanka].id = eval(nanka.slice(5));
        });
    }

    await delay(50);
    console.log('最初のロードのcd')
    cd('home','home','home')
}
//#endregion
//#region chatのやつ
function selectRoom() {
    const roomSelect = document.querySelector('#room-select');
    const sendButton = document.querySelector('#send-button');
    const messageInput = document.querySelector('#message-input');
    messagesRef.off();
    chatroom = roomSelect.value;
    messagesRef = database.ref('forrpg/rooms/'+chatroom+'/messages');
    document.querySelector('#messages').innerHTML = '';

    function formatDate(date) {
         const year = date.getFullYear();
         const month = String(date.getMonth() + 1).padStart(2, '0');
         const day = String(date.getDate()).padStart(2, '0');
         const hours = String(date.getHours()).padStart(2, '0');
         const minutes = String(date.getMinutes()).padStart(2, '0');
         return `${year}/${month}/${day} ${hours}:${minutes}`;
    }

    
    //こっからchat
    document.querySelector('#message-input').addEventListener('keypress', function(e) {
        if (e.key == 'Enter') {
            if(!e.shiftKey){
                e.preventDefault();
                document.querySelector('#send-button').click();
            }else{
                document.querySelector('#message-input').value += '<br>'
            }
        }
    });

    // メッセージ送信
    sendButton.addEventListener('click', function() {
         var message = messageInput.value;
         if (message.trim() !== '') {
              messagesRef.push({
                    text: message,
                    username: username,
                    timestamp: formatDate(new Date())
              });
              messageInput.value = '';
         }
         messagesRef.on('value', function(snapshot) {
              if (snapshot.numChildren() > 20) {
                    var firstMessageKey = Object.keys(snapshot.val())[0];
                    messagesRef.child(firstMessageKey).remove();
                    setTimeout(displayAllMessages, 200);
              }
         });
    });

    // 新しいメッセージが追加された時のみ、そのメッセージを追加表示
    messagesRef.on('child_added', function(snapshot) {
         var messageData = snapshot.val();
         var messageElement = document.createElement('div');
         messageElement.className = 'message';
         messageElement.setAttribute('data-id', snapshot.key);

         var usernameElement = document.createElement('span');
         usernameElement.className = 'username';
         usernameElement.textContent = messageData.username;
         messageElement.appendChild(usernameElement);

         var timestampElement = document.createElement('span');
         timestampElement.className = 'timestamp';
         timestampElement.textContent = '  —' + messageData.timestamp;
         messageElement.appendChild(timestampElement);

         var brElement = document.createElement('br');
         messageElement.appendChild(brElement);

         var textElement = document.createElement('div');
         textElement.innerHTML = messageData.text;
         messageElement.appendChild(textElement);

         document.querySelector('#messages').appendChild(messageElement);

         messagesRef.on('value', function(snapshot) {
              if (snapshot.numChildren() > 20) {
                    var firstMessageKey = Object.keys(snapshot.val())[0];
                    messagesRef.child(firstMessageKey).remove();
              }
         });

         // 最新のメッセージが見えるようにスクロール
         document.querySelector('#messages').scrollTop = document.querySelector('#messages').scrollHeight;
    });

    messagesRef.once('value', function(snapshot) {
        displayAllMessages(snapshot);  // 一回だけ全メッセージを表示
    });
}

function displayAllMessages(snapshot){
    var roomSelect = document.querySelector('#room-select');
    chatroom = roomSelect.value;
    document.querySelector('#messages').innerHTML = '';

    // データベースから全てのメッセージを取得
    snapshot.forEach(function(childSnapshot){
        var messageData = childSnapshot.val();
        var messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.setAttribute('data-id', childSnapshot.key);

        var usernameElement = document.createElement('span');
        usernameElement.className = 'username';
        usernameElement.textContent = messageData.username;
        messageElement.appendChild(usernameElement);

        var timestampElement = document.createElement('span');
        timestampElement.className = 'timestamp';
        timestampElement.textContent = '  —' + messageData.timestamp;
        messageElement.appendChild(timestampElement);

        var brElement = document.createElement('br');
        messageElement.appendChild(brElement);

        var textElement = document.createElement('div');
        textElement.innerHTML = messageData.text;
        messageElement.appendChild(textElement);

        document.querySelector('#messages').appendChild(messageElement);
    });

    if (snapshot.numChildren() > 30) {
        var firstMessageKey = Object.keys(snapshot.val())[0];
        messagesRef.child(firstMessageKey).remove();
    }

    // 最新のメッセージが見えるようにスクロール
    document.querySelector('#messages').scrollTop = document.querySelector('#messages').scrollHeight;
}

// 部屋作ったりラジバンダリ
function makeRoom() {
    const roomSelect = document.querySelector('#room-select');
    const Loom = document.querySelector('#room-make').value;
    const NowRef = database.ref('rooms/' + Loom);
    const pass = document.querySelector('#room-make-pass').value;
    NowRef.once('value').then(function(snapshot) {
         if (snapshot.exists()) { // 既存部屋の場合
              var roomData = snapshot.val();
              if (roomData.pass == pass) {
                    document.querySelector('#room-select').appendChild(new Option(Loom, Loom));
                    roomSelect.value = Loom;
                    chatroom = Loom;
                    selectRoom();
                    document.querySelector('#room-make').value = '';
                    document.querySelector('#room-make-pass').value = '';
              } else {
                    document.querySelector('#room-make').value = 'missed!!';
                    document.querySelector('#room-make-pass').value = '';
              }
         } else {
              const Pass = { pass: document.querySelector('#room-make-pass').value };
              document.querySelector('#room-select').appendChild(new Option(Loom, Loom));
              roomSelect.value = Loom;
              chatroom = Loom;

              NowRef.update(Pass);

              selectRoom();
              document.querySelector('#room-make').value = '';
              document.querySelector('#room-make-pass').value = '';
         }
    });
}


function checkLastLogin(lastact) {
    const now = new Date().getTime();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1日をミリ秒に変換

    // 最終アクティブ時間が昨日以前かどうかを判定
    return (now - lastact) > oneDayInMilliseconds;
}

// beforeunloadイベントでユーザーの状態を更新
window.addEventListener('beforeunload', () => {
    const lastact = new Date().getTime();
    usersRef.update({
         status: 'offline',
         lastact: lastact
    });
});

//#endregion

//#region valorimarとrankの上のやつ
function updateUI(){
    if(rpt >= maxrpt){
        rank += 1;
        rpt = 0;
        maxrpt = rank*100;
        save();
    }

    document.querySelector('.user .username').textContent = username;
    document.querySelector('.user .rank').textContent = `Rank:${rank}`;
    document.querySelector('.rpt .bar .inner').style.width = (rpt / maxrpt) * 100 + '%';
    document.querySelector('.rpt .text').textContent = `${rpt}/${maxrpt}`;
    document.querySelector('#upperUI .valorimar').innerHTML = `${valorimar}𐩰`; 

}
updateUI();

function Charge(e,m){
    load();
    if(userData.valorimar??0 >= m){
        valorimar += e;
        usersRef.update({
            valorimar: userData.valorimar??m - m
        });
        save();
        nicoText(`${m}€払い、${e}個チャージ完了、です！`);
    }else{
        console.log(`必要:${m}€, 所持:${valorimar}€`);
        nicoText('お金が足りません...');
    }
}
//#endregion

//#region profileのやつ
async function UpdateProfile(){
    let about = userData.about??'入力してね';
    document.querySelector('#profile-tab').innerHTML = `
    <span style="font-size: 24px; border: 1px solid #000000">${username}</span>　Rank:${rank}<br><br>
    <textarea id="about" placeholder="write about you" style="width: 255px; height: 124px;" oninput="InputAboutMe()">${about}</textarea>
    `
    document.querySelector('#about').addEventListener('change', InputAboutMe);
}//自己紹介とかも入れたいよね
function InputAboutMe(){
    const textarea = document.querySelector('#about');
    usersRef.update({
        about: textarea.value
    });
    load();
}
//#endregion

//#region Homeの動き達
const homeArea = document.querySelector('#homeArea');
let nowPlace = {
    tab: 'home', //home-tab
    area: 'home', //homeArea
    selection: 'home', //home
    detail1: null,
    detail2: null,
    detail3: null,
}
async function cd(tab, area, selection, detail1, detail2, detail3){
    console.log(`cd:: #${tab}-tab${area ? ` #${area}Area` : ''}${selection ? ` .${selection}` : ''}${detail1 ? ` .${detail1}` : ''}${detail2 ? ` .${detail2}` : ''}${detail3 ? ` .${detail3}` : ''}`)
    
    // document.querySelector(`#${nowPlace.tab}-tab${nowPlace.area ? ` #${nowPlace.area}Area` : ''}${nowPlace.selection ? ` .${nowPlace.selection}` : ''}${nowPlace.detail1 ? ` .${nowPlace.detail1}` : ''}${nowPlace.detail2 ? ` .${nowPlace.detail2}` : ''}${detail3 ? ` .${detail3}` : ''}`).style.display = 'none';
    if(nowPlace.tab) document.querySelector(`#${nowPlace.tab}-tab`).style.display = 'none';
    if(nowPlace.area) document.querySelector(`#${nowPlace.tab}-tab #${nowPlace.area}Area`).style.display = 'none';
    if(nowPlace.selection) document.querySelector(`#${nowPlace.tab}-tab #${nowPlace.area}Area .${nowPlace.selection}`).style.display = 'none';
    if(nowPlace.detail1) document.querySelector(`#${nowPlace.tab}-tab #${nowPlace.area}Area .${nowPlace.selection} .${nowPlace.detail1}`).style.display = 'none';
    if(nowPlace.detail2) document.querySelector(`#${nowPlace.tab}-tab #${nowPlace.area}Area .${nowPlace.selection} .${nowPlace.detail1} .${nowPlace.detail2}`).style.display = 'none';
    if(nowPlace.detail3) document.querySelector(`#${nowPlace.tab}-tab #${nowPlace.area}Area .${nowPlace.selection} .${nowPlace.detail1} .${nowPlace.detail2} .${nowPlace.detail3}`).style.display = 'none';

    // document.querySelector(`#${tab}-tab${area ? ` #${area}Area` : ''}${selection ? ` .${selection}` : ''}${detail1 ? ` .${detail1}` : ''}${detail2 ? ` .${detail2}` : ''}${detail3 ? ` .${detail3}` : ''}`).style.display = 'block';
    if(tab) document.querySelector(`#${tab}-tab`).style.display = 'block';
    if(area) document.querySelector(`#${tab}-tab #${area}Area`).style.display = 'block';
    if(selection) document.querySelector(`#${tab}-tab #${area}Area .${selection}`).style.display = 'block';
    if(detail1) document.querySelector(`#${tab}-tab #${area}Area .${selection} .${detail1}`).style.display = 'block';
    if(detail2) document.querySelector(`#${tab}-tab #${area}Area .${selection} .${detail1} .${detail2}`).style.display = 'block';
    if(detail3) document.querySelector(`#${tab}-tab #${area}Area .${selection} .${detail1} .${detail2} .${detail3}`).style.display = 'block';

    nowPlace = {
        tab: tab,
        area: area,
        selection: selection,
        detail1: detail1,
        detail2: detail2,
        detail3: detail3
    };
}

document.addEventListener('click', e => {
    const gotoTarget = e.target.closest('[data-goto]');
    if(gotoTarget){
        const reach = gotoTarget.dataset.goto;
        const goList = reach.split(' ');
        const [tab, area, selection, detail1, detail2, detail3] = [...goList, null, null, null, null, null, null];
        cd(tab, area, selection, detail1, detail2, detail3);
    };
})

//#region rpgtoka
async function HomeLetsDungeon(){
    save();

    cd('home', 'home', 'station', 'select');
    document.querySelector('#home-tab #homeArea .station .select .chara').style.display = 'flex';

    fun = random(1,100);//毎回変更されるのぜ
    stage = 1;
    floor = 0;
    
    for(let id of Object.keys(Charas)){
        let chara = Charas[id];
        let div = document.createElement('div');
        div.className = 'item';
        div.id = chara.name;
        div.dataset.description = chara.description;
        div.addEventListener('click', function(){
            HomeGoDungeon(chara.id);
        })
        
        let img = document.createElement('img');
        img.className = 'img';
        img.src = `assets/charas/${chara.img}.png`;
        div.appendChild(img);

        let name = document.createElement('div')
        name.className = 'name';
         let span = document.createElement('div');
         span.className = 'txt';
         span.textContent = chara.name;
         name.appendChild(span);
        div.appendChild(name);
        
        document.querySelector('#homeArea .station .select .chara').appendChild(div);

        // 先に専用styleタグを準備（1回だけ作る）
        if(!window.dynamicStyle){
            window.dynamicStyle = document.createElement('style');
            window.dynamicStyle.id = 'dynamicStyles';
            document.head.appendChild(window.dynamicStyle);
        }
        let sheet = window.dynamicStyle.sheet;

        // 後付けハードディスク部分
        let spanScrollWidth = span.scrollWidth;
        if(spanScrollWidth > 60){
            const animationName = `scroll-${chara.id}ver`;
            let fixedTime = 2; // 前後の固定タイム
            let moveTime = (spanScrollWidth - 60) * 0.05;

            // 既に同名アニメーションが登録されてないか確認
            let exists = Array.from(sheet.cssRules).some(rule => rule.name === animationName);
            if(!exists){
                sheet.insertRule(`
                    @keyframes ${animationName} {
                    0% { transform: translateX(0); }
                    ${(fixedTime / (fixedTime * 2 + moveTime)) * 100}% { transform: translateX(0); }
                    ${(1 - fixedTime / (fixedTime * 2 + moveTime)) * 100}% { transform: translateX(-${Math.max(0, spanScrollWidth - 60)}px); }
                    100% { transform: translateX(-${Math.max(0, spanScrollWidth - 60)}px); }
                    }`, sheet.cssRules.length);
            }

            span.style.animation = `${animationName} ${fixedTime * 2 + moveTime}s linear infinite`;
        }

    }

}
function HomeGoDungeon(name){
    let id = name;
    humans.players = [];
    humans.enemies = [];
    
    let who = {
        status:1,//0 = none, 1 = alive, 2 = dead
        cam:'players',
        me:0,
        id:id,
        name:'supermario wiiiiiiiiiiii',
        level:1,
        exp:0,
        sp:1,

        buffs:[],

        slash:{
            1:{name:'slash'},
            2:{name:'double slash'},
            3:{name:'slash of light'}
        },
        
        magic:{
            1:{name:'heal'},
            2:{name:'power'},
            3:{name:'shell'},
        },

        tool:{
            1:{name:'aspirin'},
            2:{name:'throwknife'},
            3:{name:'redcard'}
        },

        weapon:{
            id:'none',
            lv:1,
        },
        shield:{
            id:'none',
            lv:1,
        },
        ear:{ // 耳
            id:'none',
            lv:1,
        },
        ring:{ // 腕
            id:'none',
            lv:1,
        },
        neck:{ // 首
            id:'none',
            lv:1,
        },
        
        ep:100,
        ex:'50%heal',
        ns:'5%heal',
        ps:'null',
    };

    let kihonChan = Charas.find(a => a.id == 'wretch');
    Object.keys(kihonChan).forEach(key => { //基本に戻す
        who[key] = kihonChan[key];
    })

    let data = Charas.find(a => a.id == id);
    console.log(id, data)
    Object.keys(data).forEach(key => { //変更点だけ変更
        who[key] = data[key];
    })

    Style.button.solid = data.buttonsolid;
    Style.button.back = data.buttonback;
    Style.tekiou();

    who.hp = who.maxhp;
    who.mp = who.maxmp;

    humans.players.unshift(who);

    enemylv = 1;
    enemyhp = 80;
    enemymp = 50;
    enemyatk = 10;
    enemymatk = 10;
    enemydef = 0;
    enemymdef = 0;
    enemycrla = 3;
    enemycrdm = 1.5;
    enemycrrs = 0;
    
    dungeonnow = 1;
    logOOmoto.style.display = 'flex';
    log_open('c')
    document.querySelector('#homeArea').style.display = 'none';
    
    addob('player', 0, 0, 1, 1, 20, 90, ['move'], {id, img: data.img})

    overfieldArea.style.display = 'block';
    NextStage();

    SELECTx = 0;
    SELECTy = 0;
    draw()
    movable = 1;
    
    loop = 1;
    gameloop();
}
let loop = 0;
function gameloop(){
    pUpdate();
    if(loop) requestAnimationFrame(gameloop);
}

function ExitDungeon(code){
    valorimar += 50*code;
    dungeonnow = 0;
    document.querySelector('#overfieldArea').style.display = 'none';
    document.querySelector('#battleArea').style.display = 'none';
    console.log('ダンジョン出た時ののcd')
    cd('home','home','home')
}
//#endregion
//#region jobtoka
function HomeJobStart(name){
    save();
    afknow = 1;
    let num = document.querySelector('#homeArea .job .num').value;
    document.querySelector('#homeArea').innerHTML = `
    `;
    let reword = 0;
    let time = 0;
    let type = 0;
    switch(name){
        case 'valorimarShort':
            type = 'valorimar'
            reword = num*10;
            time = 5
            break;
        case 'valorimarMiddle':
            type = 'valorimar';
            reword = num*50;
            time = 15;
            break;
        case 'valorimarLong':
            type = 'valorimar'; 
            reword = num*100
            time = 30;  
            break;
    }
    let maxTasks = num*time*60;
    let taskInterval = 1000;
    let completedTasks = 0;
    let taskTimer;
    function afkTask(){
        completedTasks++;
        if(completedTasks < maxTasks){
            document.querySelector('#task-bar').style.width = (completedTasks/maxTasks) * 100 + '%';
            document.querySelector('#task-text').textContent = `${completedTasks}/${maxTasks}`;
            //document.querySelector('#Task-log').textContent = `${completedTasks} / ${maxTasks}`
        }else{
            clearInterval(taskTimer);
            afknow = 0;
            switch(type){
                case 'valorimar':valorimar += reword;document.querySelector('#valorimar').textContent = valorimar+'€'; break;
            }
            HomeJobSelect();
        }
    }
    // 15分ごとにafkTaskを実行
    taskTimer = setInterval(afkTask, taskInterval);
}

//#endregion

//#region bar

async function friendRecluit(num, code){ //numは回数、codeは"3"で
    let per1 = 0.80, per2 = 0.17, per3 = 0.03;

    const Recruiting = document.querySelector('#homeArea .bar .recluit .recruiting');
    const Start = Recruiting.querySelector('.start');
    const Detail = Recruiting.querySelector('.detail');
    const Results = Recruiting.querySelector('.results');

    let result = [];
    let resultName = []

    save();
    
    result = [];
    for(i = 0; i < num; i++){
        let rarity = Math.random();
        if(rarity < per1){
            result.push(1)
        }else if(rarity < (1-per3)){
            result.push(2)
        }else{
            result.push(3)
        }
    }
    if(num == 10 && !result.includes(2)){
        result.pop();
        result.push(2)
        console.log('最低保証が働きました！')
    }
    let color = result.includes(3) ? 'pink' : 'blue';

    result.forEach(atai => {
        let person = arraySelect(Object.keys(Friends).filter(a => Friends[a].rare == atai));
        resultName.push(person)
    });

    Start.querySelector('.push').addEventListener('click', async function(){
        Start.style.display = 'none';
        Results.style.display = 'block';
        resultName.forEach(i => {
            let friend = Friends[resultName[i]];

            let div = document.createElement('div');
            div.className = 'result';
            div.dataset.num = i;
            div.innerHTML = `
            <div class="img">
                <img class="inner" src="${images['friends'][Friends[i].id].src}">
            </div>
            <div class="rare">
                <img class="inner" src="${images['systems'][`star${Friends[i].rare}`].src}" alt="">
            </div>
            `;

            div.addEventListener('click', async function(){
                Results.style.display = 'none';
                Detail.style.display = 'block';

                Detail.querySelector('.name .ruby').textContent = friend.ruby;
                Detail.querySelector('.name .txt').textContent = friend.name;
                Detail.querySelector('.rare .img').src = images['systems'][`star${friend.rare}`].src;
            })
        })
    });
}

function HomeBarRecluitLets(num){
    document.querySelector('#r-go').removeEventListener('click',HomeBarRecluitLets);
    log.textContent = "";
    document.querySelector('#r-go').style.fontSize = '20px';
    document.querySelector('#r-go').innerHTML = resultName.join("<br>");
}
function HomeBarMeet(){
    save();
    log.textContent = 'ごめんね、まだできてないんよ';
    setTimeout(HomeBarRecluit,1000)
}//ブルアカ風にappencChildでやりたいね
//#endregion
//#region training
function HomeTraining(){
    save();
    document.querySelector('#homeArea').innerHTML = `
    <button onclick="BacktoHome()">←</button> 訓練場<br>
    ここではスキルツリー的に能力を伸ばせるようにする予定。<br>
    まあ...できてないんですけどね！！！！！<br>
    steamにearly-accessのゲームが多い理由がわかるような気がしますわ！！！！！
    `;
}
//#endregion
//#region bank
function HomeBank(){
    updateUI()
    save();
    document.querySelector('#homeArea').innerHTML = `
  <button onclick="BacktoHome()">←</button> 超安心安全銀行<br>
  <span id="bank-deposit" class="bank-title">deposite</span><input type="number" id="bank-deposit-num" /><button id="bank-deposit-num-go" onclick="BankDeposite('Num')" class="bank-button">go</button><button id="bank-deposit-all" class="bank-button" onclick="BankDeposite('All')">All</button><br>
  <span id="bank-withdraw" class="bank-title">withdraw</span><input type="number" id="bank-withdraw-num" /><button id="bank-withdraw-num-go" onclick="BankWithdraw('Num')" class="bank-button">go</button><button id="bank-withdraw-all" class="bank-button" onclick="BankWithdraw('All')">All</button><br>
  <span id="Bankvalorimar">bank account:0€</span>
    `;
    document.querySelector('#Bankvalorimar').textContent = 'bank account:'+bankvalorimar+'€';
}
function BankDeposite(code){
    if(code == 'Num'){
        let num = +document.querySelector('#bank-deposit-num').value;
        bankvalorimar += num;
        valorimar -= num;
        document.querySelector('#bank-deposit-num').value = '';
    }else if(code == 'All'){
        bankvalorimar += valorimar;
        valorimar = 0;
        document.querySelector('#bank-deposit-num').value = '';
    }
    save();
    HomeBank();
}
function BankWithdraw(code){
    if(code == 'Num'){
        let num = +document.querySelector('#bank-withdraw-num').value;
        valorimar += num;
        bankvalorimar -= num;
        document.querySelector('#bank-withdraw-num').value = '';
    }else if(code == 'All'){
        valorimar += bankvalorimar;
        bankvalorimar = 0;
        document.querySelector('#bank-withdraw-num').value = '';
    }
    save();
    HomeBank();
}
//#endregion

//#endregion

//#region 非ダメ時モーション(?)

async function damage(who, ares, value, kind, prop = []){
    value /= 100;

    console.log(ares)

    let hasa = (whi, name) => whi.ables.includes(name);
    let hasp = (name) => prop.includes(name);

    if(!Array.isArray(ares)) ares = [ares];

    for(let are of ares){
        //攻撃x回復o = heal 攻撃+攻撃者与ダメ回復 = absorb
        //防御無視 = penetrate 確定会心 = crit 会心無効 = nocrit
        //固定値 = fixed
        console.log(hasp('fixed')
        ? `${who.name} => ${are.name} ${kind}で${value}ダメージの予定！ [${prop}]`
        : `${who.name} => ${are.name} "${kind}"で攻撃力の${value}倍 [${prop}]`);

        let atker = {...who};
        let defer = {...are};
        console.log(atker);
        console.log(defer);
        
        let stats = [
            'atk','matk','def','mdef',
            'hp','maxhp','mp','maxmp', 'shl',
            'spd','critlate','critdmg','critresist',
        ];

        console.log(`weapon:${atker.weapon.id}, shield:${atker.shield.id}, ear:${atker.ear.id}, ring:${atker.ring.id}, neck:${atker.neck.id}`);
        for(let stat of stats){
            for(let buff of atker.buffs){
                let moto = atker[stat];
                buffKeisan(atker, buff, stat);
                let huka = moto == atker[stat] ? '(変動なし)' : `(${atker[stat] - moto})`;
                console.log(`>> ${moto} => ${atker[stat]} ${huka}`);
            };
            
            for(let bui of ['weapon','shield','ear','ring','neck']){
                let eq = atker[bui];
                let data = Equips[bui].find(a => a.id == eq.id);
                let res = 0;
                if(data.ap){
                    res = await data.afterProcess(arr);
                    if(res) return 1;
                }
            }

            for(let buff of defer.buffs){
                buffKeisan(defer, buff, stat);
                defer[stat] += val;
            }
        };

        //攻撃力
        let atkval = kind == 'sh' ? atker.atk : atker.matk;
        let dmg = (atkval * atker.power * value);
        if(hasp('fixed')) dmg = value;

        //会心
        let crited = 0;
        if(isCrit(atker, defer)) crited = 1;
        if((crited && !hasp('nocrit')) || hasp('crit')){
            dmg *= atker.critdmg / 100;
            if(who.cam == 'players') await addtext('かいしんのいちげき！');
            if(who.cam == 'enemies') await addtext('つーこんのいちげき！');
        }
        if(crited && hasp('nocrit')){
            console.log('この攻撃は会心が無効です！')
        }

        //防御力
        let defval = kind == 'sh' ? defer.def : defer.mdef;
        if(!hasp('penetrate')) dmg -= (defval * defer.shell);

        //整え
        dmg = Math.floor(dmg);
        let iran = {
            over: 0,
            text: ''
        };
        if(defer.hp < dmg) dmg = defer.hp, overkill = 1;
        console.log(`予測:: ${defer.hp} => ${defer.hp - dmg} | dmg:${dmg}`);
        if(!hasp('fixed')) iran.text = `dmg:: (${atkval} x ${atker.power} x ${value}) - (${defval} x ${defer.shell}) = ${dmg}`;
        if(iran.over) iran.text += ' (overkillされそうだったんで調整したよ)';
        if(iran.text) console.log(iran.text);

        // ~~終了~~ atker - defer ~~終了~~ //
        
        //実装
        if(!hasp('heal')) are.hp -= dmg;
        else await heal(atker, defer, dmg)

        //ep
        if(who.cam == 'players') who.ep += Math.floor(10 * who.epgain);

        tekiou()
        await addtext(`${are.name}に${dmg}のダメージ`)

        //その後
        let res = 0;
        if(are.hp <= 0) res = await killed(who, are);
        if(res) return 1;

        //追撃ゾーン
        if(!hasp('unpursuit')){
            let weapon = who.weapon;
            if(Equips.weapon[who.id]?.ap){
                res = await Weapons[weapon.id].afterProcess(arr);
                if(res) return 1;
            }

            if(who.name == 'herta' && are.hp <= (are.maxhp / 2) && 10 <= who.level){ // 1凸効果「弱みは付け込み」
                res = damage(who, are, 20, 'sh', ['unpursuit']);
                if(res) return 1;
            }
            if(who.ps == 'enemy50%pursuit' && are.hp <= are.maxhp / 2 && enemy50pursuitenelgy == 1){
                enemy50pursuitenelgy = 0;
                await addtext(arraySelect(['くるくる〜っと','くるりん〜っと']));
                res = damage(who, are, 50, 'sh', ['unpursuit']);
                if(res) return 1;
            }
        }
    }
    return 0;
}

async function heal(who, ares, value, code = 'add', ...prop){
    let hasa = (whi, name) => whi.ables.includes(name);
    let hasp = (name) => prop.includes(name);

    if(!Array.isArray(ares)) ares = [ares];

    for(let are of ares){

        let bh = are.hp;
        
        let val = value;
        if(val.endsWith('%')){
            val = +val.slice(0, -1)/100;
            console.log(`${value}っていう%だったから${val}って値に変えといたぜ`);
            val *= are.maxhp;
        }
        
        let ah = 0;
        if(code == 'add'){
            ah = are.hp + val;
        }
        if(code == 'set'){
            ah = val;
        }
        
        if(are.maxhp < ah) ah = are.maxhp;
        
        console.log(`${who.nane} => ${are.name}, val:${val} | ${bh} => ${ah}`);
        
        are.hp = ah;
    }

    return 0;
}

function cm(cam = '指定なし', me = '指定なし'){
    if(cam == '指定なし' && me == '指定なし') cam = 'players', me = 0; //超特別扱い
    
    let who;
    if(me == '指定なし') who = humans[cam];
    else who = humans[cam][me];

    return who;
}

function isCrit(who, are){
    let lat = who.critlate;
    let res = are.critresist;
    let is = 0;
    
    if(res == 'absolute'){
        is = false;
        console.log('会心無効！')
    }else if(lat == 'absolute'){
        is = true;
        console.log('確定会心！')
    }else{
        is = Math.random() < (lat - res) / 100;
        console.log(`crit:: ${lat - res}%...結果は${is}!!`)
    }

    return is;
}

function isCri2(name, p){ //いずくりっつー
    let res = probability(p);
    console.log(`(${name}):: 成功確率${p}%...結果は${res}！`)
    if(res) return 1;
    if(!res) return 0;
}

//#endregion
//#region buffの動き
async function buffadd(who, ares, buff, kind, time, val){ //誰のバフ/デバフか,バフ/デバフの名前,効果時間,効果量
    console.log(`buffadd:: ${buff}, ${kind}, ${time}, ${val}`);
    let newbuff = buffMold(buff, kind, time, val);
    let data = Buffs.find(e => e.name == buff);

    // console.log(ares)

    let hasa = (dare, name) => dare.ables.includes(name);

    if(!Array.isArray(ares)) ares = [ares];

    for(let are of ares){
        console.log(`buffadd:: ${who.name} => ${are.name}に${val}の${buff}を${time}付与`);

        let isPush = 1;
        switch(kind){
            case 'turn':{
                //すでにある場合の処理
                let hasbuffIndex = are.buffs.findIndex(e => e.name == buff && e.value == val);
                if(hasbuffIndex >= 0){
                    are.buffs[hasbuffIndex].time += time;
                    isPush = 0;
                }
                tekiou();
                break;
            };

            case 'stack':{
                let hasbuffIndex = are.buffs.findIndex(e => e.name == buff);
                if(hasbuffIndex >= 0){
                    are.buffs[hasbuffIndex].time += time;
                    are.buffs[hasbuffIndex].value = data.lv[time];
                    isPush = 0;
                }
                tekiou();
                break;
            };
        }

        //whoがデバフ延長を持っているなら〜的な処理をここで。

        if(kind == 'turn') are.buffs.push(newbuff);
    }
}
function buffMold(buff, kind, time, val){
    if(!buff || !kind || !time || !val) console.error('要素が足りないぜ！！！', buff, kind, time, val);
    let data = Buffs.find(e => e.name == buff);
    if(!data) console.error(buff,'←これ存在しないらしいっすよ〜？')

    if(data.mode == 'free') val = {[data.agemono]: val};
    if(data.mode == 'fixe') val = data.lvs[val]??null;
    console.log(`[${data.mode}]${buff} val:`,val,` time:${time}`);

    let newbuff = {};

    switch(kind){
        case 'turn':{
            newbuff = {
                type: data.type,
                kind: kind,
                name: buff,
                time: time,
                value: val,
                data: data,
            };
            break;
        }

        case 'stack':{
            newbuff = {
                type: data.type,
                kind: kind,
                name: buff,
                time: time,
                value: data.lv[time],
                data: data,
            };
            break;
        }
    }
    console.log(newbuff)

    return newbuff;
}
function buffremove(who, buff){
    //誰のバフ/デバフか,バフ/デバフの名前
    if(!buffhas(who, buff)) return 0;

    let i = who.buffs.findIndex(e => e.name == buff)
    who.buffs.splice(i,1);
    tekiou();
    return 1;
}
function buffclear(who, code){
    switch(code){
        case 'all':
            who.buffs = [];
            break;
        case 'turn':
            who.buffs = who.buffs.filter(e => e.kind != 'turn');
            break;
        case 'stack':
            who.buffs = who.buffs.filter(e => e.kind != 'stack');
            break;
        case 'buffs':
            who.buffs = who.buffs.filter(e => e.type == 'buffs');
            break;
        case 'debuffs':
            who.buffs = who.buffs.filter(e => e.type == 'debuffs');
            break;
        case 'handles':
            who.buffs = who.buffs.filter(e => e.type == 'handles');
            break;
        case 'uniques':
            who.buffs = who.buffs.filter(e => e.type == 'uniques');
            break;
        default:
            console.console('codeが違ったからとりあえず同名消したけど、よかった？');
            who.buffs = who.buffs.filter(e => e.name == code);
    }
    tekiou();
}
function buffhas(who, buff){
    if(who.buffs.find(b => b.name === buff)) return 1;

    return 0;
}
function buffKeisan(dare, buff, code){
    console.log(`Keisan:: [${code}]${buff.name} val:${buff.value} time:${buff.time}`);
    let data = Buffs.find(a => a.name == buff.name);
    
    let val = 0;
    if(data.mode == 'free'){
        if(!hask(buff.value, code)) return 0;
        val = buff.value[code];
    }
    if(data.mode == 'fixe'){
        if(!hask(data.lvs[buff.value], code)) return 0;
        val = data.lv[buff.value][code];
    }

    // =+1 =-14 +24% -50%
    let dochi = val.slice(0,1); // =
    if(dochi != '=') dochi = '+';
    else val = val.slice(1);
    let puma = val.slice(0,1); // + -
    if(puma != '+' && puma != '-') puma = '+';
    val = val.slice(1);
    if(val.endsWith('%')){
        val = val.slice(0,-1);
        val = +dare[code]*(val/100);
    }
    else val = +val;

    if(!val) return 1;
    
    if(puma == '-') val = -val;

    switch(dochi){
        case '=': dare[code]  = val; break;
        case '+': dare[code] += val; break;
    }

    return 0
}
//#endregion
//#region QTEのやつ
let qteD = document.getElementById('qte');
async function qte(limit, seikai, arrkey) {
    console.log(`qte:: (${limit})「${seikai}」of (${arrkey.length})[${arrkey}]`);
    return new Promise((resolve) => {
        // arrkeyの数で配置決定
        const positions = {
            1: ["center"],
            2: ["left", "right"],
            3: ["left", "up", "right"],
            4: ["left", "up", "right", "down"]
        };
        let len = arrkey.length;
        let pos = positions[len] || 'errored';
        if(pos == 'errored') return 'errored';
        console.log(pos)

        let qteD2 = qteD.querySelector(`.q${len}`);
        qteD2.style.display = "block";
        //lenの分だけ要素をqteD2に追加して、a,b,c,dでmitame.cssで指示する感じで。それぞれpolygonで三角にする感じで。

        let elements = [];
        for(let i = 0; i < len; i++){
            let el = document.createElement("div");
            el.className = `qt${len} ${pos[i]}`;
            qteD2.appendChild(el);
            elements.push(el);
        }
        // const elements = arrkey.map((key, i) => {
        //     let div = document.createElement("div");
        //     div.className = `qt${len} ${pos[i]}`;
        //     return el;
        // });
        console.log(elements);

        const cleanup = (result) => {
            elements.forEach(el => {if(el) el.style.display = "none"});
            window.removeEventListener("keydown", handler);
            clearTimeout(timer);
            resolve(result);
        };

        const handler = (event) => {
            if (arrkey.includes(event.key)) {
                cleanup(event.key == seikai);
            }
        };

        window.addEventListener("keydown", handler);

        const timer = setTimeout(() => cleanup(false), limit * 1000);
    });
}

//#endregion

//#region これが起きたらこれがある、のs
async function letsElseed(who, are, act, name){
    console.log(`letsElsees:: ${act}'s ${name}を実行！`);
    console.log(`>> ...しかし なにもおこらなかった`);
}
//#endregion これが起きたらこれがある、のs

//#region playerturn
function backtoplayerturn(){
    phase = 1;
    commandC.s1B.textContent = 'act';
    commandC.s2B.textContent = 'magic';
    commandC.s3B.textContent = 'tools';
    commandC.s4B.textContent = 'run';
    //errorcheck();
}
async function playerturn(who){
    let nss = Skills.filter(a => a.type == 'ns');
    let datans = nss.find(a => a.id == who.ns.id);
    if(who.ns.process != undefined && (turncount % datans.cool) == 0){
        await data.process(who);
        await delay(1000)
    };

    tekiou();

    phase = 1;
    addtext('あなたのターンです！');
    backtoplayerturn();
};
//#endregion
//#region playerの選択
let nowturn = 0;
let targetselect = 0;

const battleArea = document.querySelector('#battleArea');
const commandD = battleArea.querySelector('#UIs .commands');
let commandC = {
    s1B: commandD.querySelector('.s1'),
    s2B: commandD.querySelector('.s2'),
    s3B: commandD.querySelector('.s3'),
    s4B: commandD.querySelector('.s4'),
}

commandC.s1B.addEventListener('click', async function(){
    let who = humans.players[0];
    switch(phase){
        case 1:
            phase = 2;
            commandC.s1B.textContent = humans.players[0].slash[1].name;
            commandC.s2B.textContent = humans.players[0].slash[2].name;
            commandC.s3B.textContent = humans.players[0].slash[3].name;
            commandC.s4B.textContent = 'back';
            break;
        case 2:
            Slash(who, 1)
            break;
        case 3:
            Magic(who, 1)
            break;
        case 4:
            Tool(who, 1)
            break;
    }
})

commandC.s2B.addEventListener('click', async function(){
    let who = humans.players[0];
    switch(phase){
        case 1:
            phase = 3;
            commandC.s1B.textContent = who.magic[1].name;
            commandC.s2B.textContent = who.magic[2].name;
            commandC.s3B.textContent = who.magic[3].name;
            commandC.s4B.textContent = 'back';
            break;
        case 2:
            Slash(who, 2);
            break;
        case 3:
            Magic(who, 2);
            break;
        case 4:
            Tool(who, 2);
            break;
    }
})

commandC.s3B.addEventListener('click', async function(){
    let who = humans.players[0];
    switch(phase){
        case 1:
            phase = 4;
            commandC.s1B.textContent = who.tool[1].name;
            commandC.s2B.textContent = who.tool[2].name;
            commandC.s3B.textContent = who.tool[3].name;
            commandC.s4B.textContent = 'back';
            break;
        case 2:
            Slash(who, 3);
            break;
        case 3:
            Magic(who, 3);
            break;
        case 4:
            Tool(who, 3);
            break;
    }
})

commandC.s4B.addEventListener('click', async function(){
    let who = humans.players[0];
    switch(phase){
        case 1:
            dassyutsu();
            break;
        case 2:
        case 3:
        case 4:
            backtoplayerturn();
            break;
    } 
})

function disappear(){
    phase = 0;
    commandC.s1B.textContent = ' ';
    commandC.s2B.textContent = ' ';
    commandC.s3B.textContent = ' ';
    commandC.s4B.textContent = ' ';
}

async function dassyutsu(){

    disappear();
    battleArea.style.display = 'none';
    document.querySelector('#overfieldArea').style.display = 'block';
    
    draw()
    movable = 1;
    await addtext('うまく逃げ切れた！');
}

function LetsTargetSelect(one){
    let code = one??1; //1:通常(1人) 2:選んだところと左右 3:選んだ陣営全体
    return new Promise((resolve) => {
        let color = '#fff450';
        let pcolor = '#f7f7f7';

        let array = [];
        Object.keys(humans.players).filter(a => humans.players[a].status == 1).forEach(a => array.push(`players${a}`));
        Object.keys(humans.enemies).filter(a => humans.enemies[a].status == 1).forEach(a => array.push(`enemies${a}`));

        let target = [];
        function handleClick(event) {
            let element = event.target;
            while(element && !array.includes(element.id)){
                element = element.parentElement;
            }
            if(!element){return};

            array.forEach(a => {
                document.getElementById(a).removeEventListener('click', handleClick);
                document.getElementById(a).style.backgroundColor = pcolor;
            });

            let me = +element.id.slice(7);
            let cam = element.id.slice(0, 7);
            target = [
                me,
                cam
            ]

            if(code == 2){
                let nums = Object.keys(humans[cam]).filter(a => humans[cam][a].status == 1);
                let cams = Array(nums.length).fill(cam); //fillは全ての値を同じ値にするやつ。同数にするために使用されがち
                target = [
                    nums,
                    cams
                ];
            }
            if(code == 3){ //拡散-3
                let pnum = (humans[cam][me-1]?.status??0 == 1) ? me - 1 : null;
                let nnum = (humans[cam][me+1]?.status??0 == 1) ? me + 1 : null;
                
                let cn = 1;
                if(pnum) cn += 1;
                if(nnum) cn += 1;
                
                let cams = Array(cn).fill(cam);
                
                target = [
                    [me-1,me,me+1],
                    cams
                ];
            }
            if(code == 4){// 拡散-5
                let pnum = (humans[cam][me-1]?.status??0 == 1) ? me - 1 : null;
                let p2num = (humans[cam][me-2]?.status??0 == 1) ? me - 2 : null;
                let nnum = (humans[cam][me+1]?.status??0 == 1) ? me + 1 : null;
                let n2num = (humans[cam][me+2]?.status??0 == 1) ? me + 2 : null;
                
                let cn = 1;
                if(pnum) cn += 1;
                if(p2num) cn += 1;
                if(nnum) cn += 1;
                if(n2num) cn += 1;
                
                let cams = Array(cn).fill(cam);
                
                target = [
                    [me-2,me-1,me,me+1,me+2],
                    cams
                ];
            }

            let cs = target[1];
             if(typeof cs == 'string') cs = [cs]
            let ns = target[0];
             if(typeof ns == 'string' || typeof ns == 'number') ns = [ns]
            // console.log(cs, ns)
            let whoes = [];
            for(let i = 0; i < cs.length; i++){
                let c = cs[i];
                let n = ns[i];
                console.log(`humans[${c}][${n}]を狙います！`);
                let cn = humans[c][n];
                // console.log(cn);
                whoes.push(cn);
            }

            console.log(whoes);

            resolve(whoes);
        }

        array.forEach(a => {
            let element = document.getElementById(a);
            element.removeEventListener('click', handleClick)
            element.addEventListener('click', handleClick);
            element.style.backgroundColor = color;
        });
    });
}
 


//#endregion
//#region playerの斬撃
async function Slash(who, num){
    disappear();
    let sl = who.slash[num]
    if(!sl.name){
        await addtext('you dont have slash...');
        return backtoplayerturn()
    }

    let name = sl.name;
    let data = Slashs.find(a => a.id == name)
    if(who.mp >= data.mp){
        let are = await LetsTargetSelect();

        who.mp -= data.mp;
        tekiou();

        await addtext(`${who.name}の${name}！`);

        let result = await data.process(who, are);
        if(result) return 1;
        NextTurnis(who);
    }else{
        await addtext('not enough mp...');
        backtoplayerturn();
    }
}
//#endregion
//#region playerの魔法
async function Magic(who, num){    
    disappear();
    let mg = who.magic[num]
    if(!mg.name){
        await addtext('you dont have magic...');
        return backtoplayerturn()
    }

    let name = mg.name;
    let data = Magics.find(a => a.id == name)
    if(who.mp >= data.mp){
        let are = await LetsTargetSelect();

        who.mp -= data.mp;
        tekiou();

        await addtext(`${who.name}の${name}！`);
        let result = await data.process(who, are);
        if(result) return 1;
        NextTurnis(who);
    }else{
        await addtext('not enough mp...');
        backtoplayerturn();
    }
}

//#endregion
//#region playerの道具
async function Tool(who, num){
    disappear();
    let tl = who.tool[num]
    if(!tl.name){
        await addtext('you dont have tool...');
        return backtoplayerturn()
    }

    let name = tl;
    //今はいいけど、inven(tory)に全部詰め込むことになるならdata.jsのnumじゃなくて簡単関数でinven内の数を求めて、で〜って形にした方がいいかも
    let data = Tools.find(a => a.id == name)
    if(data.num > 0){
        data.num -= 1;

        let are = await LetsTargetSelect();
        await addtext(`${who.name}は${name}を使用した!`);
        
        let result = await data.process(who, are);
        if(result) return 1;
        NextTurnis(who);
    }else{
        await addtext('not enough tool...');
        backtoplayerturn();
    }
}
//#endregion
//#region playerのskill
let Splithp = 0;
let Splitmaxhp = 0;
let clowngambling = ['0','0','2','2','2','4'];

// スキル予約関数
let skillQueue = [];
async function skillReserve(cam,me){
    if(humans[cam][me].ep == 100){
        x = humans[cam][me].ex;
        skillQueue.push({cam:cam,me:me,skill:x});
        skillReset(cam,me);
        console.log(`スキル予約済み: ${cam} ${me} -> ${x}  現在キューは次に表示します;`);
        console.log(skillQueue);

        if(phase > 0){
            let result = await skillAct(cam,me,x);
            skillQueue.shift();
            if(result == 'end'){return 'end';}
        }
    }else{
        nicoText('まだクールダウン中ですわ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜');
    }
}
async function skillAct(cam,me,skill){
    let dataex = Skills.filter(a => a.type == 'ex').find(a => a.id == skill);
    let result = await dataex.process(cam, me);
    await delay(1000);
    return result;
}
function skillReset(who){
    who.ep = 0;
    tekiou();
}
function turretPlace(cam){
    if(!document.querySelector(`#${cam}t`)){
        let div = makeNewPlayer('t')
        humans[cam].t.kazu = 0;
        humans[cam].t.maxhp = 0;
        humans[cam].t.hp = 0;
        document.querySelector(`#${cam}`).appendChild(div);
    }
    humans[cam].t.status = 1;
    humans[cam].t.kazu += 1;
    humans[cam].t.maxhp += 15;
    humans[cam].t.hp += 15;
    humans[cam].t.name = `Turret x${humans[cam].t.kazu}`;
    tekiou()
    document.querySelector(`#${cam}t`).style.display = 'block'
    document.querySelector(`#${cam}t`).style.backgroundColor = '#f7f7f7'
}
function turretBreak(cam){
    humans[cam].t.status = 0;
    humans[cam].t.kazu -= 1;
    if(humans[cam].t.kazu <= 0){
        humans[cam].t.kazu = 0;
        humans[cam].t.maxhp = 0;
        humans[cam].t.hp = 0;
        document.querySelector(`#${cam}t`).remove();
    }
}
function turretAllClear(){
    if(document.querySelector('#playerst')){
        document.querySelector('#playerst').remove();
        humans.players.t.kazu = 0;
        humans.players.t.status = 0;
    };
    if(document.querySelector('#enemiest')){
        document.querySelector('#enemiest').remove();
        humans.enemies.t.kazu = 0;
        humans.enemies.t.status = 0
    }
}
//#endregion

//#region charaのturn
//#endregion

//#region next-turn
async function NextTurnis(who = 0){
    //もともとはareもいたけど、消えました。存在理由なさすぎて
    phase = 0;

    if(!who == 0){
        for(let buff of who.buffs){
            let data = Buffs.find(a => a.name = buff.name);
            //アンコールの動き
            if(hask(data, 'luck')){//luck
                if(isCri2('luck', data.luck)){
                    addlog('当たりが出たらもう一本！！');
                    backtoplayerturn(); return;
                }
            }

            //継続ダメージの動き
            
            
        
            for(const key in who.buffs){
                who.buffs[key].time -= 1; // -1する
                if(who.buffs[key].time <= 0){
                    let index = who.buffs.indexOf(key);
                    who.buffs.splice(index, 1)
                }
            }
            tekiou();
        }
    }

    //強制スキルの動き
    while(skillQueue.length > 0){
        const nanka = skillQueue.shift(); // 先頭を消してその消したやつを処理する的な機構".shift()"
        let cam = nanka.cam;
        let me = nanka.me;
        let dare = cm(cam,me);
        let skill = nanka.skill;
        let data = Skills.find(a => a.id == skill);
        console.log(`${dare.name}のスキル:"${skill}"を発動!`);
        await addtext(`${dare.name}は"${data.name}"を発動した！！`);
        let result = await skillAct(dare, skill);
        if(result) return 1;
    }

    //こっから次のターン行く動き　ここでこの人のターンは終わるって感じだね

    acted += 1;
    if(acted >= bar.me.length){
        turncount += 1;
        const combined = [...Object.values(humans.players).filter(a => a.status === 1 && a.hp > 0 && a.id != 't'), ...Object.values(humans.enemies)].filter(b => b.status === 1 && b.hp > 0)// オブジェクトをリストに変換して合体
        .sort((a, b) => {// 降順でソート
            if(b.speed == a.speed){
                if(a.cam == b.cam){
                    return a.me - b.me;  // 同じcamならmeの小さい方が優先
                }
                return a.cam === 'players' ? -1 : 1;  // camが'p'なら優先
            }
            return b.speed - a.speed;  // 速度の高い順に並べる
        });
        bar = {
            cam: combined.map(c => c.cam),
            me: combined.map(c => c.me)
        };
        console.log(bar)
        acted = 0;
        console.log(`〜〜〜〜〜〜${turncount}ターン目〜〜〜〜〜〜`); //あとはskill系とmagicもて加えてって 今skill系着工中 todolistをみんな見れる形にするみたいにしたいね
    } 

    nowturn = bar.me[acted];
    cam = bar.cam[acted]
    console.log(nowturn, cam)
    are = humans[cam][nowturn];
    console.log(`現在、${cam}${nowturn}(${are.name})さんのターンですわ〜`);

    let dots = {}; //DamegeOverTimeのdot
    for(let buff of are.buffs){
        let data = Buffs.find(a => a.name == buff.name)
        console.log(buff, data)
        if(hask(data, 'dot')){
            // これは hp:'-10'みたいにならなくて、hp:10 で10減る感じ
            let dot = data.dot;

            let val = 0;
            val = buff.value[dot];
            if(val.endsWith('%')) val = Math.round(are.maxhp * val.slice(0,-1) / 100);

            //出血の処理はここへ
            
            if(!dots[dot]) dots[dot] = 0;
            dots[dot] += val;
        }
        //dotがないならそれは継続ダメージではない。
    
        if(buff.name == 'onslime'){
            if(isCri2('onslime', buff.value)){
                buffremove(are, 'onslime');
                addlog('なんとかスライムを取り払った!!');
            }else{
                addlog('スライムが邪魔して動けない!!');//今思ったけどこれやばいのでは...?
                NextTurnis();
                return;
            }; 
        }
        if(buffhas(are,'skip')){
            await addtext(`はい${are.name}、お前スキップ〜〜`);
            NextTurnis(are); return;
        }
        if(hask(data, 'palsy')){
            if(!isCri2('palsy', data.palsy)) continue;
            data.name != 'stan' 
            ? addlog(`${are.name}は麻痺している..`)
            : addlog(`${are.name}はスタンしている....`);
            NextTurnis(are);
            return 1;
        }
        if(hask(data, 'freeze')){
            if(!isCri2('freeze', data.freeze)){
                await addtext(`氷が溶けた!`);
                buffremove(are,'freeze');
            }else{
                await addtext(`${are.name}は凍っている...`);
                NextTurnis(are); return;
            }    
        }
    }
    console.log(`${cam}${nowturn}こと${are.name}、動きます！`);

    switch(cam){
        case 'players':
            playerturn(are);
            break;
        case 'enemies':top 
            enemyturn(are);
            break;
    }
}
//#endregion

//#region enemyturn
async function enemyturn(who){
    let data = Enemies.find(a => a.name == who.name);
    console.log(who)

    for(let buff in who.buffs){
        buff.time -= 1;
        if (buff.time <= 0) {
            delete who.buffs[buff]; //0以下なら消し去る
        }
    }
    tekiou();

    let are;
    if(data){
        let act = enemySelectAction(who)
        let res = await act.process(who);
        if(res) return 1;
    }else{
        await addtext(`${who.name}は何かで攻撃した！`)
        are = ShallTargetSelect(who, 'phpl');
        let res = await damage(who, are, 1, 'sh'); //areの後、1の前に"何の倍率か"を入れるべき。基本atkかもだけどfixで固定、とかできそう
        if(res) return 1;
    }

    NextTurnis(who);
}
function enemySelectAction(who){
    let data = Enemies.find(a => a.name == who.name);
    let acts = [];
    let pros = [];

    if(who)
    if(who.lasts.length != 0){
        //直前にreを実行していたならば、対応するabを確定実行するやつ
        who.lasts.forEach(last => {
            data.acts.forEach(a => {
                let props = a.props;
                props.filter(p => p.startsWith('ab') && p.endsWith(last)).forEach(p => {
                    console.log(a, p)
                    acts.push(a);
                    pros.push(a.probable);
                });
            })
        })
        who.lasts = [];
    }else{
        data.acts.forEach(a => {
            acts.push(a);
            pros.push(a.probable);
        })
    }
    // console.log(acts);
    // console.log(pros);

    //reをするとlastを記録
    let act = arrayGacha(acts, pros);
    console.log(act);
    let props = act.prop ?? [];
    props.forEach(p => {
        if(p.startsWith('re')){
            let item = p.slice(0,2);
            who.lasts.push(item);
            console.log(`re:: ${item}を記録しました`);
        }
    })

    return act;
}
function ShallTargetSelect(who, code, both = 0) {
    console.log(`ShallTarget!!! ${code}(both:${both})`)
    console.log(`code:: ${code}`)
    const side = code[0] === 'p' ? 'players' : 'enemies';
    console.log(`>> ${code}`);
    const stat = code.includes('hp') ? 'hp' : code.includes('atk') ? 'atk' : 'def';
    console.log(`>> ${code}`);
    const mode = code.endsWith('l') ? 'low' : code.endsWith('h') ? 'high' : 'random';
    console.log(`>> ${code}`);
    console.log(side, stat, mode);

    const list = Object.values(humans[side])
      .filter(c => c.status === 1 && c.hp > 0)
      .sort((a, b) => a[stat] - b[stat]);
    console.log(list);

    if (list.length === 0) return `errored! ${side} is inai desuwa!!`;

    let target;
    if(mode === 'low')  target = list[0];
    else if(mode === 'high') target = list[list.length - 1];
    else target = arraySelect(list);

    const ret = [];
    if(both === 0) ret.push(target.me);
    else {
        const ids = list.map(c => c.me);
        const i = ids.indexOf(target.me);
        const adj = [];
        if (i > 0) adj.push(ids[i - 1]);
        adj.push(ids[i]);
        if (i < ids.length - 1) adj.push(ids[i + 1]);
        ret.push(adj);
    }
    console.log(ret)

    let arees = [];
    for(let num of ret){
        let are = humans[side][num];
        arees.push(are);
    }
    console.log(arees)

    return arees;
}

/*
function ShallTargetSelect(who,code,both = 0){
    console.log(`ShallTarget!!! ${code}(both:${both})`)
    let me = who.me;
    //これは敵しか使わないターゲットセレクト。だから陣営とかは考えんでいいよ
    //標的陣営、起動者、コード(e = enemies, p = players | m = most highest, l = most lowest,| atk = 攻撃力, def = 防御力, hp = 体力 || r = random)、両隣にも被害を与えるか0,1
    //,b => b.hp//playerのhp達を、statusが1のやつだけ、小さい順(昇順)に並べてる。
    let pls = humans.players.filter(c => c.status == 1 && c.hp > 0).map(a => a.me)
    const playerstatus = {
        me:pls.sort((p1, p2) => p1.me - p2.me),
        hp:pls.sort((p1, p2) => p1.hp - p2.hp),
        at:pls.sort((p1, p2) => p1.atk - p2.atk),
        de:pls.sort((p1, p2) => p1.def - p2.def),
    }
    let ens = humans.enemies.filter(c => c.status == 1 && c.hp > 0).map(a => a.me)
    const enemystatus = {
        me:ens.sort((e1, e2) => e1.me - e2.me),
        hp:ens.sort((e1, e2) => e1.hp - e2.hp),
        at:ens.sort((e1, e2) => e1.atk - e2.atk),
        de:ens.sort((e1, e2) => e1.def - e2.def),
    }
    // console.log(playerstatus)
    // console.log(enemystatus)
    let ret = [];
    let errorMes = 'エラー！ShallでTargetをSelectできませんでした！！'
    switch(code){
        //players
        case 'pr'://random
            x = arraySelect(playerstatus.hp)
            if(x == undefined) return errorMes
            if(both == 0){
                ret.push(x);
            }else{
                let b = []
                if(playerstatus.me.includes(x-1)){b.push(x-1)};
                b.push(x);
                if(playerstatus.me.includes(x+1)){b.push(x+1)};
                ret.push(b)
            }
            break;
        case 'phpl':
            x = playerstatus.hp[0];
            if(x == undefined) return errorMes
            if(both == 0){
                ret.push(x);
            }else{
                let b = []
                if(playerstatus.me.includes(x-1)){b.push(x-1)};
                b.push(x);
                if(playerstatus.me.includes(x+1)){b.push(x+1)};
                ret.push(b)
            }
            break;
        case 'phph':
            x = playerstatus.hp[playerstatus.hp.length - 1];
            if(x == undefined) return errorMes;
            if(both == 0){
                ret.push(x);
            }else{
                let b = []
                if(playerstatus.me.includes(x-1)){b.push(x-1)};
                b.push(x);
                if(playerstatus.me.includes(x+1)){b.push(x+1)};
                ret.push(b)
            }
            break;
        case 'patkl':
            x = playerstatus.at[0]
            if(x == undefined) return errorMes;
            if(both == 0){
                ret.push(x);
            }else{
                let b = []
                if(playerstatus.me.includes(x-1)){b.push(x-1)};
                b.push(x);
                if(playerstatus.me.includes(x+1)){b.push(x+1)};
                ret.push(b)
            }
            break;
        case 'patkh':
            x = playerstatus.at[playerstatus.at.length - 1]
            if(x == undefined) return errorMes;
            if(both == 0){
                ret.push(x);
            }else{
                let b = []
                if(playerstatus.me.includes(x-1)){b.push(x-1)};
                b.push(x);
                if(playerstatus.me.includes(x+1)){b.push(x+1)};
                ret.push(b)
            }
            break;
        case 'pdefl':
            x = playerstatus.de[0]
            if(x == undefined) return errorMes;
            if(both == 0){
                ret.push(x);
            }else{
                let b = []
                if(playerstatus.me.includes(x-1)){b.push(x-1)};
                b.push(x);
                if(playerstatus.me.includes(x+1)){b.push(x+1)};
                ret.push(b)
            }
            break;
        case 'pdefh':
            x = playerstatus.de[playerstatus.de.length - 1]
            if(x == undefined) return errorMes;
            if(both == 0){
                ret.push(x);
            }else{
                let b = []
                if(playerstatus.me.includes(x-1)){b.push(x-1)};
                b.push(x);
                if(playerstatus.me.includes(x+1)){b.push(x+1)};
                ret.push(b)
            }
            break;
        case 'pc'://center
            x = [me,me-1,me-2,me+1,me+2].find(n => playerstatus.me.includes(n))||1;
            if(x == undefined) return errorMes;
            if(both == 0){
                ret.push(x);
            }else{
                let b = [];
                if(playerstatus.me.includes(x-1)){b.push(x-1)};
                b.push(x);
                if(playerstatus.me.includes(x+1)){b.push(x+1)};
                ret.push(b);
            }
            break;
        case 'pz'://zentai
            x = playerstatus.me;
            if(x == undefined) return errorMes;
            ret.push(x);
            break;

        //enemies
        case 'er':
            x = arraySelect(enemystatus.hp)
            if(x == undefined) return errorMes;
            if(both == 0){
                ret.push(x);
            }else{
                let b = []
                if(enemystatus.me.includes(x-1)){b.push(x-1)};
                b.push(x);
                if(enemystatus.me.includes(x+1)){b.push(x+1)};
                ret.push(b)
            }
            break;
        case 'ehpl':
            x = enemystatus.hp[0]
            if(x == undefined) return errorMes;
            if(both == 0){
                ret.push(x);
            }else{
                let b = []
                if(enemystatus.me.includes(x-1)){b.push(x-1)};
                b.push(x);
                if(enemystatus.me.includes(x+1)){b.push(x+1)};
                ret.push(b)
            }
            break;
        case 'ehph':
            x = enemystatus.hp[enemystatus.hp.length - 1]
            if(x == undefined) return errorMes;
            if(both == 0){
                ret.push(x);
            }else{
                let b = []
                if(enemystatus.me.includes(x-1)){b.push(x-1)};
                b.push(x);
                if(enemystatus.me.includes(x+1)){b.push(x+1)};
                ret.push(b)
            }
            break;
        case 'eatkl':
            x = enemystatus.atk[0]
            if(x == undefined) return errorMes;
            if(both == 0){
                ret.push(x);
            }else{
                let b = []
                if(enemystatus.me.includes(x-1)){b.push(x-1)};
                b.push(x);
                if(enemystatus.me.includes(x+1)){b.push(x+1)};
                ret.push(b)
            }
            break;
        case 'eatkh':
            x = enemystatus.atk[enemystatus.atk.length - 1]
            if(x == undefined) return errorMes;
            if(both == 0){
                ret.push(x);
            }else{
                let b = []
                if(enemystatus.me.includes(x-1)){b.push(x-1)};
                b.push(x);
                if(enemystatus.me.includes(x+1)){b.push(x+1)};
                ret.push(b)
            }
            break;
        case 'edefl':
            x = enemystatus.def[0]
            if(x == undefined) return errorMes;
            if(both == 0){
                ret.push(x);
            }else{
                let b = []
                if(enemystatus.me.includes(x-1)){b.push(x-1)};
                b.push(x);
                if(enemystatus.me.includes(x+1)){b.push(x+1)};
                ret.push(b)
            }
            break;
        case 'edefh':
            x = enemystatus.def[enemystatus.def.length - 1]
            if(x == undefined) return errorMes;
            if(both == 0){
                ret.push(x);
            }else{
                let b = []
                if(enemystatus.me.includes(x-1)){b.push(x-1)};
                b.push(x);
                if(enemystatus.me.includes(x+1)){b.push(x+1)};
                ret.push(b)
            }
            break;
        case 'ec'://center..まあ自分よな
            x = me;
            if(x == undefined) return errorMes;
            if(both == 0){
                ret.push(x);
            }else{
                let b = []
                if(enemystatus.me.includes(x-1)){b.push(x-1)};
                b.push(x);
                if(enemystatus.me.includes(x+1)){b.push(x+1)};
                ret.push(b)
            }
            break;
    }
    if(code.startsWith('p')){ret.push('players')}
    if(code.startsWith('e')){ret.push('enemies')}
    
    console.log(ret)
    let ed1 //num
    if(ret[0].length > 1 && Array.isArray(x)) ed1 = [ret[0]];
    else ed1 = ret[0];
    let ed2 //cam
    if(ret[1].length > 1 && Array.isArray(x)) ed2 = [ret[1]];
    else ed2 = ret[1];
    console.log(ed1, ed2)

    let whoes;
    if(Array.isArray(ed1) && Array.isArray(ed2)){
        for(let i = 0; i < ed1.length; i++){
            let dare = humans[ed2[i]][ed1[i]];
            console.log(dare);
            whoes.push(dare);
        }  
    }else{
        whoes = humans[ed2][ed1];
    }
    console.log(whoes)
    
    return whoes;
}
*/
//#endregion

//#region 勝利/負けの動き
async function killed(who, are){//殺った側cam,meと殺された側tcam,target
    are.hp = 0;
    are.status = 2;
    buffclear(are, 'all');tekiou();

    let karix = bar.cam.map((Cam, Num) => Cam === 'p' && bar.me[Num] === 2 ? Num : -1).filter(Num => Num !== -1);
    bar.cam.splice(karix,1);bar.me.splice(karix,1);
    
    //クエストの動
    Object.keys(quest).filter(a => 
            quest[a].type == 'k' && quest[a].term.includes(0) || 
            quest[a].term.includes(stage) && tcam == 'enemies').forEach(nanka => {
        quest[nanka].acted += 1;
        if(quest[nanka].acted >= quest[nanka].act){
            quest[nanka].acted = quest[nanka].act;
            quest[nanka].type =  '';
        }
    })

    //あれ、もしかして全滅しちゃった？な動
    let result = await killedCheck();
    return result;
}
async function killedCheck(){
    let isZemetu = false;
    isZemetu = Object.keys(humans.enemies).every(id => {
        let Enemy = humans.enemies[id];
        return Enemy.status == 0 || Enemy.status == 2;//0か2ならOKってこと。everyは全会一致だからね
    });
    if(isZemetu){
        //敵全滅
        let enemyKaz = Object.keys(humans['enemies']).length;
        let recievable = random(5,15) * enemyKaz;
        valorimar += recievable;
        
        let gainExp = 0;
        Object.keys(humans.enemies).filter(a => humans.enemies[a].status >= 1).forEach(a => {
            gainExp += a.level;
        })
        rpt += gainExp;
        updateUI();
        await addtext('勝利した！');
        await addtext(`${gainExp}の経験値を奪った!`);
        Object.keys(humans.players).filter(a => humans.players[a].status == 1).forEach(nanka => {// || humans.players[a].status == 2
            humans.players[nanka].exp += gainExp;
            while(humans.players[nanka].exp >= humans.players[nanka].level){
                humans.players[nanka].exp -= humans.players[nanka].level;
                humans.players[nanka].level += 1;
                humans.players[nanka].sp += 1;
            }
            tekiou();
        });
        await delay(1000);

        z = Math.floor(Math.random() * 7)-2;// -2~4
        enemylv += z;if(enemylv < 1){enemylv = 1;}
        if(!z <= 0){
            for(i = 0; i < z; i++){
            y = Math.floor(Math.random() * 3) + 1;
            switch(y){
                case 1: enemyhp  += 20;break;
                case 2: enemyatk += 5; break;
                case 3: enemydef += 5; break;
            }}
        }else if(z < 0){
            for(i = 0; i < -z; i++){
            y = Math.floor(Math.random() * 3) + 1;
            switch(y){
                case 1: enemyhp  -= 20;break;
                case 2: enemyatk -= 5; break;
                case 3: enemydef -= 5; break;
            }}
        }
        document.querySelector('#battleArea').style.display = 'none';
        document.querySelector('#overfieldArea').style.display = 'block';
        
        objmap[MAPy][MAPx].id = 0;//戦利品的な何かにしてもいいかも..いやなし
        draw()
        movable = 1;
        return 'end';
    }else{
        let isZemetu = [1,2,3,4].every(id => {
            let human = humans.players[id];
            console.log(id, human)
            return human.status == 0 || human.status == 2;
        })
        if(isZemetu){
            let saydefeats = [`${who.name}は力尽きた...残念でしたね！にはははは〜！`, '残念だったね!すごい惜しかったね!!', 'あ、あれ..？もう負けちゃったんですか....？', 'ほら、負けを認めてください？'];
            if(who.level < 3)saydefeats = ['あはは..負けちゃいましたね....防御力を上げると楽ですよ!', 'あはは..負けちゃいましたね....double slashは運要素も少ないので強いですよ!', 'あはは..負けちゃいましたね....魔法にターン数制限はありません!いっぱい使っちゃいましょう!', 'あはは..負けちゃいましたね....mechanicは防御全振りで戦うと良いですよ!', 'あれ〜？負けちゃったんですか〜？？おにいさんよわいね〜？？'];
            
            await addtext(arraySelect(saydefeats));

            Object.keys(humans.players).filter(a => humans.players[a].status == 1||humans.players[a].status == 2).forEach(nanka => {
                humans.players[nanka].status = 1;
                humans.players[nanka].hp = Math.floor(humans.players[nanka].maxhp*0.5);
            })

            bossbattlenow = 0;
            floor = 0;
            GoNextFloor();

            document.querySelector('#battleArea').style.display = 'none';
            document.querySelector('#overfieldArea').style.display = 'block';

            draw()
            movable = 1;
            
            return 'end';
        }else{
            return 'continue';
        }
    }
}
//#endregion 勝利/負けの動き

//#region 敵/俺作り
async function EnemyAppear(){
    movable = 0;
    document.querySelector('#overfieldArea').style.display = 'none';
    document.querySelector('#battleArea').style.display = 'block';
    commandC.s1B.textContent = '';
    commandC.s2B.textContent = '';
    commandC.s3B.textContent = '';
    commandC.s4B.textContent = '';

    //前までのやつの処理
    turretAllClear();
    enemy50pursuitenelgy = 1;

    x = Object.keys(humans.players).filter(a => humans.players[a].status == 1 || humans.players[a].status == 2).length;
    console.log(`playersの数:${x}`);
    for(i = 0; i < x; i++){
        let div = makeNewPlayer(i);
        document.querySelector('#players').appendChild(div);
        tekiou();
    }
    x = arraySelect([1,1,1,1,2,2,3])
    console.log(`敵の数:${x}`);
    for(i = 0; i < x; i++){
        humans.enemies[i] = DesideEnemyName(i);
        /**let div = */makeNewEnemy(i);
        if(humans.enemies[i].prefixe) document.querySelector(`#enemies${i}`).style.backgroundColor = '#fefaff';//ちょい強敵ってことね
        tekiou();
    }
    tekiou();
    log_open('o')
    await addtext(`${humans.enemies[0].name}が現れた!`);
    
    // bar-create
    bar = {
        cam:[],
        me:[]
    }
    turncount = 0;
    NextTurnis();
}

function DesideEnemyName(target){
    let names = Object.keys(Enemies).filter(a => Enemies[a].stage == stage).map(a => Enemies[a].name);
    let enemyname = arraySelect(names);
    
    let data = Enemies.find(e => e.name == enemyname);
    let enemy = {};

    enemy.status = 1;
    enemy.cam = 'enemies';
    enemy.me = target;

    enemy.level = enemylv + Math.floor(Math.random() * 7)-3; 
    if(enemy.level < 1){enemy.level = 1;}
    
    enemy.id = enemyname; //nameは表示用、idは内部処理用
    enemy.name = enemyname;

    enemy.atk = enemyatk;
    enemy.def = enemydef;
    enemy.matk = enemymatk;
    enemy.mdef = enemymdef;
    enemy.maxhp = enemyhp;
    enemy.maxmp = enemymp;
    enemy.critlate = enemycrla;
    enemy.critdmg = enemycrdm;
    enemy.critresist = enemycrrs;
    enemy.speed = 50;

    enemy.power = 1;
    enemy.shell = 1;

    enemy.buffs = [];
    
    enemy.weapon = {id:'none', lv:1};
    enemy.shield  = {id:'none', lv:1};
    enemy.ear     = {id:'none', lv:1};
    enemy.ring    = {id:'none', lv:1};
    enemy.neck    = {id:'none', lv:1};

    enemy.ep = 0;
    enemy.ex = 'null';
    enemy.ns = 'null';
    enemy.ps = 'null';
    
    enemy.lasts = [];
    
    let statuses = ['atk','def','matk','mdef','maxhp','maxmp','critlate','critdmg','critresist','speed'];
    statuses.forEach(statu => {
        if(data[statu].startsWith('+') || data[statu].startsWith('-')){
            let me = Number(data[statu].slice(1));
            if(data[statu].startsWith('-')){me *= -1};
            enemy[statu] += me;
        }else if(data[statu].startsWith('=')){
            let me = Number(data[statu].slice(1));
            enemy[statu] = me;
        }
        ///'0'なら変動無し
    })

    //prefixeのやつ
    enemy.prefixe = '';
    let prefixe = arraySelect(Object.keys(Prefixes));
    if(probability(0)){
        console.log(enemy)
        let data = Prefixes.find(e => e.name == prefixe);
        console.log(`enemies(${target})は"${data.name}"です`);
        enemy.prefixe = data.name;
        let arr = Object.entries(data.effects);
        arr.forEach(a => {
            let key = a[0];
            let val = a[1];
            if(key != 'buff'){
                let res = null;
                // val = "=10%"
                if(val.startsWith('=')) res = 0;
                if(val.startsWith('+') || val.startsWith('-')) res = 1;
                if(val.endsWith('%')){
                    if(res == 0) res = 2;
                    if(res == 1) res = 3;
                }
                switch(res){
                    case 0: // =
                        res = +val.slice(1);
                        enemy[key] = res;
                        break;

                    case 1: // +
                        res = +val.slice(1);
                        if(val.startsWith('-')) res *= -1;
                        enemy[key] += res;
                        break;

                    case 2: // =%
                        res = +(val.slice(0,-1))/100; //10% => 0.1
                        enemy[key] *= res; //0.1 => key*0.1
                        res = enemy[key];
                        break;

                    case 3: // +%
                        res = +(val.slice(0, -1) / 100); //10% => 0.1
                        res = enemy[key] * res; //0.1 => key*0.1
                        if(val.startsWith('-')) res *= -1; //if"-" => -(key*0.1)
                        enemy[key] += res;
                        break;

                    default:
                        break;
                }
            }
            if(key == 'buff'){
                val.forEach(b => {
                    let newbuff = buffMold(b.name, b.time, b.val);
                    enemy.buffs.push(newbuff);
                })
            }
        })
        console.log(enemy)
    };

    enemy.hp = enemy.maxhp;
    enemy.mp = enemy.maxmp;
    return enemy;
}

async function testEnemyAppear(){
    movable = 0;
    document.querySelector('#overfieldArea').style.display = 'none';
    document.querySelector('#battleArea').style.display = 'block';
    commandC.s1B.textContent = '';
    commandC.s2B.textContent = '';
    commandC.s3B.textContent = '';
    commandC.s4B.textContent = '';

    //前までのやつの処理
    turretAllClear();
    enemy50pursuitenelgy = 1;

    x = Object.keys(humans.players).filter(a => humans.players[a].status == 1 || humans.players[a].status == 2).length;
    for(i = 1; i < x+1; i++){
        let div = makeNewPlayer(i);
        document.querySelector('#players').appendChild(div);
        tekiou();
    }

    let me = 1;
    const enemy = humans.enemies[me]

    enemy.status = 1;
    enemy.level = 2;
    enemy.name = '縺代▽縺ｰ繧'
    enemy.atk = 10;
    enemy.def = 0;
    enemy.matk = 10;
    enemy.mdef = 0;
    enemy.maxhp = 50;
    enemy.maxmp = 50;
    enemy.hp = 50;
    enemy.maxmp = 50;
    enemy.critlate = 3;
    enemy.critdmg = 1.25;
    enemy.critresist = 0;
    enemy.speed = 50;

    let enemyDiv = document.createElement('div');
    enemyDiv.id = `enemies${me}`;
    enemyDiv.className = 'enemies';

    let border = document.createElement('div');
    border.className = 'border';

    let row = document.createElement('div');
    row.className = 'row';

    let name = document.createElement('span');
    name.className = 'name';
    name.textContent = enemy.name;
    row.appendChild(name);

    let level = document.createElement('span');
    level.className = 'level';
    level.textContent = 'Lv.' + enemy.level;
    row.appendChild(level);
    border.appendChild(row);

    let hp = document.createElement('div');
    hp.className = 'hp';

    let hpNum = document.createElement('div');
    hpNum.className = 'num';
    hpNum.textContent = `${enemy.hp}/${enemy.maxhp}`;
    hp.appendChild(hpNum);

    let hpBar = document.createElement('div');
    hpBar.className = 'bar';

    let hpBarInner = document.createElement('div');
    hpBarInner.className = 'inner';
    hpBarInner.style.width = `${(enemy.hp / enemy.maxhp) * 100}%`;
    hpBar.appendChild(hpBarInner);
    hp.appendChild(hpBar);
    border.appendChild(hp);

    let mp = document.createElement('div');
    mp.className = 'mp';

    let mpNum = document.createElement('div');
    mpNum.className = 'num';
    mpNum.textContent = `${enemy.mp}/${enemy.maxmp}`;
    mp.appendChild(mpNum);

    let mpBar = document.createElement('div');
    mpBar.className = 'bar';

    let mpBarInner = document.createElement('div');
    mpBarInner.className = 'inner';
    mpBarInner.style.width = `${(enemy.mp / enemy.maxmp) * 100}%`;
    mpBar.appendChild(mpBarInner);
    mp.appendChild(mpBar);
    border.appendChild(mp);
    enemyDiv.appendChild(border);

    let img = document.createElement('img');
    img.className = 'img';
    img.src = `assets/enemies/${enemy.name}.png`;
    enemyDiv.appendChild(img);

    let effects = document.createElement('div');
    effects.className = 'effects';

    let buffs = document.createElement('div');
    buffs.className = 'buffs';
    effects.appendChild(buffs);

    let debuffs = document.createElement('div');
    debuffs.className = 'debuffs';
    effects.appendChild(debuffs);
    enemyDiv.appendChild(effects);

    document.querySelector('#enemies').appendChild(enemyDiv);

    tekiou();
    log_open('o')
    await addtext(`これは縺代▽縺ｰ繧だ！`);//訳:けつばん
    
    // bar-create
    bar = {
        cam:[],
        me:[]
    }
    turncount = 0;
    NextTurnis();
}

function makeNewPlayer(me){
    const player = humans.players[me];

    let playerDiv = document.createElement('div');
    playerDiv.id = `players${me}`;
    playerDiv.className = 'players';

    let effects = document.createElement('div');
    effects.className = 'effects';
    playerDiv.appendChild(effects);
    
    let main = document.createElement('div');
    main.className = 'main';

    if(player.id != 'turret'){
        let skill = document.createElement('div');
        skill.className = 'skill';

        let skillBack = document.createElement('img');
        skillBack.className = 'back';
        skillBack.src = `assets/skills/${player.ex}.png`;
        skill.appendChild(skillBack);

        let skillGauge = document.createElement('div');
        skillGauge.className = 'gauge';
        skillGauge.style.height = `${player.ep / player.maxep * 100}%`;
        skill.appendChild(skillGauge);
        main.appendChild(skill);
    }

    let img = document.createElement('img');
    img.className = 'img';
    img.src = `assets/charas/${player.id}.png`; //長押しで詳細とか見れるようにしたい
    main.appendChild(img);
    playerDiv.appendChild(main);


    let border = document.createElement('div');
    border.className = 'border';

    let row = document.createElement('div');
    row.className = 'row';

    let name = document.createElement('span');
    name.className = 'name';
    name.textContent = player.name;
    row.appendChild(name);

    let level = document.createElement('span');
    level.className = 'level';
    level.textContent = 'Lv.' + player.level;
    row.appendChild(level);
    border.appendChild(row);

    let hp = document.createElement('div');
    hp.className = 'hp';

    let hpNum = document.createElement('div');
    hpNum.className = 'num';
    hpNum.textContent = `${player.hp}/${player.maxhp}`;
    hp.appendChild(hpNum);

    let hpBar = document.createElement('div');
    hpBar.className = 'bar';

    let hpBarInner = document.createElement('div');
    hpBarInner.className = 'inner';
    hpBarInner.style.width = `${(player.hp / player.maxhp) * 100}%`; //tekiouで色とか変えるようにしといて
    hpBarInner.style.backgroundColor = '#ff0000';
    hpBar.appendChild(hpBarInner);
    hp.appendChild(hpBar);
    border.appendChild(hp);

    let mp = document.createElement('div');
    mp.className = 'mp';

    let mpNum = document.createElement('div');
    mpNum.className = 'num';
    mpNum.textContent = `${player.mp}/${player.maxmp}`;
    mp.appendChild(mpNum);

    let mpBar = document.createElement('div');
    mpBar.className = 'bar';

    let mpBarInner = document.createElement('div');
    mpBarInner.className = 'inner';
    mpBarInner.style.width = `${(player.mp / player.maxmp) * 100}%`; //tekiouで色とか変えるようにしといて
    mpBar.appendChild(mpBarInner);
    mp.appendChild(mpBar);
    border.appendChild(mp);
    playerDiv.appendChild(border);

    return playerDiv;
}
function makeNewEnemy(me){
    const enemy = humans.enemies[me];

    let enemyDiv = document.createElement('div');
    enemyDiv.id = `enemies${me}`;
    enemyDiv.className = 'enemies';

    let border = document.createElement('div');
    border.className = 'border';

    let row = document.createElement('div');
    row.className = 'row';

    let name = document.createElement('span');
    name.className = 'name';

    let nameSpan = document.createElement('div');
    nameSpan.className = 'txt';
    nameSpan.textContent = enemy.name;
    name.appendChild(nameSpan);
    row.appendChild(name);

    let level = document.createElement('span');
    level.className = 'level';
    level.textContent = 'Lv.' + enemy.level;
    row.appendChild(level);
    border.appendChild(row);

    let hp = document.createElement('div');
    hp.className = 'hp';

    let hpNum = document.createElement('div');
    hpNum.className = 'num';
    hpNum.textContent = `${enemy.hp}/${enemy.maxhp}`;
    hp.appendChild(hpNum);

    let hpBar = document.createElement('div');
    hpBar.className = 'bar';

    let hpBarInner = document.createElement('div');
    hpBarInner.className = 'inner';
    hpBarInner.style.width = `${(enemy.hp / enemy.maxhp) * 100}%`;
    hpBar.appendChild(hpBarInner);
    hp.appendChild(hpBar);
    border.appendChild(hp);

    let mp = document.createElement('div');
    mp.className = 'mp';

    let mpNum = document.createElement('div');
    mpNum.className = 'num';
    mpNum.textContent = `${enemy.mp}/${enemy.maxmp}`;
    mp.appendChild(mpNum);

    let mpBar = document.createElement('div');
    mpBar.className = 'bar';

    let mpBarInner = document.createElement('div');
    mpBarInner.className = 'inner';
    mpBarInner.style.width = `${(enemy.mp / enemy.maxmp) * 100}%`;
    mpBar.appendChild(mpBarInner);
    mp.appendChild(mpBar);
    border.appendChild(mp);
    enemyDiv.appendChild(border);

    let img = document.createElement('img');
    img.className = 'img hasd';
    img.src = `assets/enemies/${enemy.name}.png`;
    img.setAttribute('data-description', 'これは新版のenemyDivです。これじゃないやついる？いねぇよなぁ？？')
    enemyDiv.appendChild(img);

    let effects = document.createElement('div');
    effects.className = 'effects';

    let buffs = document.createElement('div');
    buffs.className = 'buffs';
    effects.appendChild(buffs);

    let debuffs = document.createElement('div');
    debuffs.className = 'debuffs';
    effects.appendChild(debuffs);
    enemyDiv.appendChild(effects);

    document.querySelector('#enemies').appendChild(enemyDiv);


    //後付けハードディスク
    let spanScrollWidth = nameSpan.scrollWidth
    // console.log(`${nameSpan.textContent}のnameSpanは${spanScrollWidth}です`)
    if(spanScrollWidth > 80){
        const animationName = `scroll-enemies${me}-${enemy.id}ver`;
        const styleSheet = document.styleSheets[0];
        let fixedTime = 1.5;//前後の固定タイム
        let moveTime = (spanScrollWidth - 80) * 0.05;

        styleSheet.insertRule(`
            @keyframes ${animationName} {
                0% { transform: translateX(0); }
                ${(fixedTime / (fixedTime * 2 + moveTime)) * 100}% { transform: translateX(0); }
                ${(1 - fixedTime / (fixedTime * 2 + moveTime)) * 100}% { transform: translateX(-${Math.max(0, spanScrollWidth - 80)}px); }
                100% { transform: translateX(-${Math.max(0, spanScrollWidth - 80)}px); }
            }`, styleSheet.cssRules.length);
        nameSpan.style.animation = `scroll-enemies${me}-${enemy.id}ver ${fixedTime * 2 + moveTime}s linear infinite`;
    }


    return enemyDiv;
}
//#endregion 敵/俺作り


//#region　bossの動き
async function BossEnemyAppear(){
    movable = 0;
    document.querySelector('#overfieldArea').style.display = 'none';
    document.querySelector('#battleArea').style.display = 'block';
    bossbattlenow = 1;
    commandC.s1B.textContent = ' ';
    commandC.s2B.textContent = ' ';
    commandC.s3B.textContent = ' ';
    commandC.s4B.textContent = ' ';
    turncount = 0;
    document.querySelector('#TurnCount').textContent = turncount;
    playermp = playermaxmp;
    playerpower = 1;playershell = 1;
    if(playerps == 'enemy50%pursuit'){enemy50pursuitenelgy = 1;};
    humans.enemies[me].hp = humans.enemies[me].hp; document.querySelector('#EnemyMaxHealth').textContent = humans.enemies[me].hp; tekiou();
    if (enemylevel < 1){enemylevel = 1}
    humans.enemies[me].name = bossenemies[me].names[stage-1]; //敵の名前を決めます
    switch(humans.enemies[me].name){//ボスごとのステータスを決めます
        case 'purpleslime':
            humans.enemies[me].hp = 300;
            humans.enemies[me].hp = humans.enemies[me].hp;
            humans.enemies[me].atk = 30;
            humans.enemies[me].def = 10;
            humans.enemies[me].mdef = 0;
            humans.enemies[me].critlate = 0.01;
            humans.enemies[me].critdmg = 2;
            humans.enemies[me].critresist = 0.5;
        break;
        case 'steampumker':
            humans.enemies[me].hp = 250;
            humans.enemies[me].hp = humans.enemies[me].hp;
            humans.enemies[me].atk = 25;
            humans.enemies[me].def = 10;
            humans.enemies[me].mdef = 20;
            humans.enemies[me].critlate = 0.05;
            humans.enemies[me].critdmg = 2;
            humans.enemies[me].critresist = 0;
        break;
        case 'RailwayGun "Shemata"':
            humans.enemies[me].hp = 400;
            humans.enemies[me].hp = humans.enemies[me].hp;
            humans.enemies[me].atk = 35;
            humans.enemies[me].def = 20;
            humans.enemies[me].mdef = 0;
            humans.enemies[me].critlate = 0;
            humans.enemies[me].critdmg = 0;
            humans.enemies[me].critresist = 0;
        break;

    }
    document.getElementById('EnemyName').textContent = humans.enemies[me].name;
    logOpener.style.right = '300px'
    log.style.right = '0px'
    await addtext(`${humans.enemies[me].name}が現れた!`);
    document.querySelector('#EnemyLevel').textContent = enemylevel;
    tekiou();
    window.setTimeout(playerturn, 750);
    save();
}
async function bossenemyturn(){
    if(humans.enemies[me].name == 'purpleslime'){
        //1: 攻撃(シンプル)
        //2:攻撃(シンプル)
        //3:相手を毒に(2ターン)
        //if(max0.3>)[確定]防御力down1(討伐まで有効)
        if(humans.enemies[me].hp <= humans.enemies[me].hp * 0.3){await buffadd(cam,me,'shelldown','turn',1,1);}
        switch(Math.floor(Math.random()*4)+1){
            case 1:
            case 2:
                log.textContent = humans.enemies[me].name + 'の攻撃';
                damage('players',me,targetselect,1,1);
                break;
            case 3:
                log.textContent = humans.enemies[me].name + 'は大きく息を吐いた！';
                await buffadd(cam,me,'poison','turn',2,1);
                break;
        }
    }else if(humans.enemies[me].name == 'steampumker'){
        //ターン数が奇数: 攻撃
        //ターン数が偶数: タレットの設置
        //タレットが3つ以上: 攻撃力の3倍のダメージで攻撃、タレットを破壊
        if(enemyturret >= 3){
            damage('players',me,targetselect,enemyturret,1);
            document.querySelector('#EnemyFriendBack').innerHTML = '';
            enemyturret = 0;
            EnemyTurrettekiou();
        }
        if((turncount % 2) == 0){
            document.querySelector('#EnemyFriendBack').innerHTML = '<br><b><font color="#DF0101">Turret</font><span id="EnemyTurret"></span></b><br><br>';
            enemyturret += 1;
            EnemyTurrettekiou();
            log.textContent = humans.enemies[me].name+'はturretを設置した!';
        }else{
            await damage('players',me,targetselect,1,1);
        }
        if(enemyturret > 0){await damage('players',me,targetselect,enemyturret*0.5,1);}
    }else if(humans.enemies[me].name == 'RailwayGun "Shemata"'){
        //
        //
        //
        playerhp = 0;
        log.textContent = 'しーんだしんだ、シリウスブラ〜ック!';
        defeat();//いや雑にもほどがあるやろ
    }else if(humans.enemies[me].name == 'joker'){
        //1:爆弾を投げる。普通(x1),雷(x2),炎(x3),閃光弾(x0.5,スタン1)
        //if(max0.25>):勝ち気(攻撃が0倍か4倍になる)を付与(毎ターン)
        x = 1;
        if(humans.enemies[me].hp <= humans.enemies[me].hp * 0.25){x = [0,4];x = x[Math.floor(Math.random()*2)]};
        y = Math.floor(Math.random() * 4);
        switch(y){
            case 1:log.textContent = '普通の爆弾だった!!';break;//これによる効果とかもあっていいかも
            case 2:log.textContent = '爆弾は雷光弾だった!!!';break;
            case 3:log.textContent = '爆弾は焼夷弾だった!';break;
            case 0:log.textContent = '爆弾は閃光弾だった!!';await buffadd(cam,me,'stan','turn',1,1);y = 0.5;break;
        }
        await delay(1000);
        await damage('players',me,targetselect,x*y,0);
    }
    await enemycontidmg(me);
    if(humans.enemies[me].hp < 0){humans.enemies[me].hp = 0};
    if(humans.enemies[me].hp == 0){window.setTimeout(killed, 1000)}
    else {
        await delay(1000);
        return 'alive';
    }
}
//こっから変数とか関数とか
let enemyturret = 0;
function EnemyTurrettekiou(){
    document.querySelector('#EnemyTurret').textContent = 'x' + enemyturret;
}
//#endregion

//#region 休憩所の動き
let Camprestper
  async function Camprest(){
    playerhp += playermaxhp * Camprestper;
    playerhp = Math.floor(playerhp);
    if(playerhp > playermaxhp){playerhp = playermaxhp;};
    log.textContent = '寝ることにした....';//睡眠阻害イベント..とかありでは？
    await delay(2000);
    log.textContent = '起きた！！！！！！！';
    await delay(1000);
    document.querySelector('#eventArea').innerHTML = '';
    
    document.querySelector('#battleArea').style.display = 'none';
    document.querySelector('#overfieldArea').style.display = 'block';
    
    objmap[MAPy][MAPx].data.used = 1;
    draw()
    movable = 1;
  }
  async function Camptrade(){
        save();
    if(y == 1){
            log.textContent = '武器屋に話しかけた！';
            await delay(1000);
            nowshop = 1;
            log.textContent = 'ここにはこんなものがあるけど、どうする？';
            document.querySelector('#eventArea').innerHTML = '<iframe height="230" width="200" src="assets/shops/weapons.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
        }else if(y == 2){
            log.textContent = '防具屋に話しかけた！';
            await delay(1000);
            nowshop = 2;
            log.textContent = 'うちの店ではこんなものが売ってるよ';
            document.querySelector('#eventArea').innerHTML = '<iframe height="400" width="300" src="assets/shops/shields.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
        }else if(y == 3){
            log.textContent = '道具屋に話しかけた！';
            await delay(1000);
            nowshop = 3;
            log.textContent = 'いらっしゃいませぇぇぇぇぇ？？ご注文をどうぞ！！！！';
            document.querySelector('#eventArea').innerHTML = '<iframe height="400" width="300" src="assets/shops/tools.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
        }else if(y == 10){
            log.textContent = '武器屋に話しかけた！';
            await delay(1000);
            nowshop = 10;
            log.textContent = 'ほう..よく来たな。好きに見ていってくれ';
            document.querySelector('#eventArea').innerHTML = '<iframe height="400" width="300" src="assets/shops/rareweapons.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
}
      
  }
  
//shop
let nowshop = 0;
function ShopBuyButton(){
    const num = +document.querySelector('#ShopInputText').value;
    switch(nowshop){
        case 1:
        if(haveweapons.includes(weapons.name[num])){
            log.textContent = 'you already have a it!';
        }else{
            if(valorimar >= weapons.price[num]){
                valorimar -= weapons.price[num];
                haveweapons.push(weapons.name[num]);
                log.textContent = weapons.name[num]+'を購入しました!';
            }else{
                log.textContent = 'not enough valorimar..';
            };
        }
        break;
        case 10:
        if(haveweapons.includes(rareweapons.name[num])){
            log.textContent = 'you already have a it!';
        }else{
            if(valorimar >= rareweapons.price[num]){
                valorimar -= rareweapons.price[num];
                haveweapons.push(rareweapons.name[num]);
                log.textContent = rareweapons.name[num]+'を購入しました!';
            }else{
                log.textContent = 'not enough valorimar..';
            };
        }
        break;
        case 2:
        if(haveshields.includes(shields.name[num])){
            log.textContent = 'you already have a it!';
        }else{
            if(valorimar >= shields.price[num]){
                valorimar -= shields.price[num];
                haveshields.push(shields.name[num]);
                log.textContent = shields.name[num]+'を購入しました!';
            }else{
                log.textContent = 'not enough valorimar..';
            };
        }
        break;
        case 3:
        if(valorimar >= tools.price[num]){
            valorimar -= tools.price[num];
            eval(tools.id[num]).num++;
            log.textContent = tools.name[num]+'を購入しました!';
        }else{
            log.textContent = 'not enough valorimar..';
        };
        break;
    }



    save();
    document.querySelector('#ShopInputText').value = '';
}
function CampBye(){
    log.textContent = 'ついでに装備を変えていこうかな？';
    document.querySelector('#eventArea').innerHTML = '<button class="button"onclick="GoToEquip()">そうしよう！</button><br><button class="button"onclick="Campback()">やめとこう！</button>';
}
function Campback(){
    document.querySelector('#eventArea').innerHTML = '<button id="CampRest" onclick="Camprest()"></button><br><button id="CampTrade" onclick="Camptrade()"></button>'
    document.querySelector('#CampRest').textContent = '朝まで休む(' + Camprestper*100 + '%回復)';//30のときはスキルカード強化みたいなやつあってもいいかも
    switch(y){
        case 1: document.querySelector('#CampTrade').textContent = '武器商人に話しかける';      break;
        case 2: document.querySelector('#CampTrade').textContent = '防具取扱専門家に話しかける'; break;
        case 3: document.querySelector('#CampTrade').textContent = '道具屋24に話しかける';      break;
        case 10:document.querySelector('#CampTrade').textContent = '放浪武器商人に話しかける';    break;
    }
}
let appearweapons = '';
let appearshields = '';
let appeartools = '';
function GoToEquip(){
    document.querySelector('#eventArea').innerHTML = '<button class="button"onclick="GoToEquipWeapon()">Equip Weapon</button>  <button class="button"onclick="GoToEquipArmor()">Equip Armor</button>  <button class="button"onclick="GoToEquipTool()">Equip Tool</button><br><br><button class="button"onclick="Campback()">Leave</button>'
}
function GoToEquipWeapon(){
    nowshop = 4;
    document.querySelector('#eventArea').innerHTML = '<span id="AppearShops"></span><br><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopEquipButton()">Equip</button><br><br><button class="button" onclick="GoToEquip()">Back</button>';
    appearweapons = '';
    x = 0;
    for(let i = 0; i < haveweapons.length; i++){
        let ChildNText = document.createElement('span');
        ChildNText.innerHTML = haveweapons[i]+ ` <button class="button" onclick="ShopEquipButton('weapon',${i})">Equip</button>` + '<br>';
        document.querySelector('#AppearShops').appendChild(ChildNText);
    }
}
function GoToEquipArmor(){
    nowshop = 5;
    document.querySelector('#eventArea').innerHTML = '<span id="AppearShops"></span><br><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopEquipButton()">Equip</button><br><br><button class="button" onclick="GoToEquip()">Back</button>';
    appearshields = '';
    x = 0;
    for(let i = 0; i < haveshields.length; i++){
        let ChildNText = document.createElement('span');
        ChildNText.innerHTML = haveshields[i]+ ` <button class="button" onclick="ShopEquipButton('shield',${i})">Equip</button>` + '<br>';
        document.querySelector('#AppearShops').appendChild(ChildNText);
    }
}
function ShopEquipButton(){
    const Num = +document.querySelector('#ShopInputText').value;
    switch(nowshop){
        case 4:
            if(haveweapons.includes(weapons.name[Num])){
                log.textContent = 'あなたは'+weapons.name[Num]+'を装備しました！';
                equipweapon = Num;
                weaponpower = weapons.power[Num];
            }else{log.textContent = 'you dont have it!'};
        break;
        case 5:
            if(haveshields.includes(shields.name[Num])){
                log.textContent = 'あなたは'+shields.name[Num]+'を装備しました！';
                equipshield = Num;
                shieldshell = shields.shell[Num];
            }else{log.textContent = 'you dont have it!'};
        break;
    }
    document.querySelector('#ShopInputText').value = '';
}
function GoToEquipTool(){
    nowshop = 6;
    
    document.querySelector('#eventArea').innerHTML = '<iframe src="resources/appeartools.html" width="100%" height="100%" frameborder="0"></iframe><br><div id="Camptoolequip"><button id="Campequipedtool1" class="button" onclick="Campequiptool(1)"> </button>　<button id="Campequipedtool2" class="button" onclick="Campequiptool(2)"> </button>　<button id="Campequipedtool3" class="button" onclick="Campequiptool(3)"> </button></div><br><br><button class="button" onclick="GoToEquip()">Back</button>'; //持ってないやつも登録できるようにしたら処理楽かな？
    document.querySelector('#Campequipedtool1').textContent = humans.players[0].tool[1].name;
    document.querySelector('#Campequipedtool2').textContent = humans.players[0].tool[2].name;
    document.querySelector('#Campequipedtool3').textContent = humans.players[0].tool[3].name;
    log.textContent = 'どうしようかな...?';
}
function Campequiptool(code){
    x = code;
    log.textContent = '何を持とう？';
    x = [];
    document.querySelector('#Camptoolequip').innerHTML = `
    <i>Item一覧</i><br>
    <div id="toolsdesuwa"></div>
    `;
    Object.keys(Tools).filter(a => Tools[a].num > 0).forEach(nanka => {
        let c = document.createElement('button');
        c.textContent = Tools[nanka].name+' x'+Tools[nanka].num;
        c.classList.add('button');
        c.addEventListener('click', () => {
            document.querySelector('#toolsdesuwa').remove();
            humans.players[0].tool[1][code] = Tools[nanka].id;
            document.querySelector('#Camptoolequip').innerHTML = '<button id="Campequipedtool1" class="button" onclick="Campequiptool(1)"> </button>　<button id="Campequipedtool2" class="button" onclick="Campequiptool(2)"> </button>　<button id="Campequipedtool3" class="button" onclick="Campequiptool(3)"> </button>';
            document.querySelector('#Campequipedtool1').textContent = humans.players[0].tool[1].name;
            document.querySelector('#Campequipedtool2').textContent = humans.players[0].tool[2].name;
            document.querySelector('#Campequipedtool3').textContent = humans.players[0].tool[3].name;
            log.textContent = Tools[nanka].name+'を持つことにした！';
        })
        x.push(c);
    })
    document.querySelector('#toolsdesuwa').innerHTML = x.join('');
}
// #endregion

//#region skillshop
  function skillshopcreateCard(item){
    const card = document.createElement('div');
    card.classList.add('card');
    
    const titleText = document.createElement('span');
    titleText.classList.add('card-titletext');
    titleText.innerHTML = `${item.type}    ${item.name}<br>価格: ${item.price}€<br>${item.description}<br>`;
    card.appendChild(titleText);
    
    const buyButton = document.createElement('button');
    buyButton.classList.add('button');
    buyButton.classList.add('card-buy');
    buyButton.setAttribute('onclick', `BuyItem('${item.type}','${item.id}','${item.name}','${item.price}')`);
    buyButton.textContent = 'Buy';
    card.appendChild(buyButton);
    
    return card;
  }

  function SkillShopOpen() {
    movable = 0;
    document.querySelector('#overfieldArea').style.display = 'none';
    document.querySelector('#eventArea').style.display = 'block';
    document.querySelector('#eventArea').innerHTML = `
    <div id="skillshopcorner"></div><br>
    <button class="button" onclick="SkillShopClose()">Exit</button>
    `
    const cardsContainer = document.querySelector('#skillshopcorner');
    cardsContainer.style.display = 'block';
    cardsContainer.innerHTML = ''; // 前の内容をクリアする
    const selectedItems = arrayShuffle(Skills).slice(0, 6);
    selectedItems.forEach(item => {
      const card = skillshopcreateCard(item);
      cardsContainer.appendChild(card);
    });
  }

  function SkillShopClose() {
    document.querySelector('#skillshopcorner').innerHTML = ''; // 前の内容をクリアする
    
    document.querySelector('#overfieldArea').style.display = 'block';
    
    objmap[MAPy][MAPx].id = 0;
    draw()
    movable = 1;
  }

  function BuyItem(type,id,name,price) {
    if(valorimar >= price){
      valorimar -= price;
      humans.players[0][type][id] = id;
      log.textContent = name + 'を購入しました！';
    }else{
      log.textContent = 'not enough valorimar...';
    }
    updateUI();
  }

// #endregion

//こっからイベントとかそのへん

let Events = {
    'candystand':{
        id:'candystand',
        name:'あめ置き場',
        happend:0,
        process:async function(){
            let candynum = Math.floor(Math.random() * 20) + 1;
            if(candybar.includes(candynum)){candynum = 2}
         else{candybar.push(candynum);candynum = 1};
            log.textContent = 'あめを食べた..';await delay(500);
            
            let changeyousos = [
                ['atk','def','maxhp'],
                ['攻撃力','防御力','体力'],
                [Math.floor(Math.random()*4)+2,Math.floor(Math.random()*4)+2,Math.floor(Math.random()*10)+5]
            ];

            if(Math.floor(Math.random()*3) == 0){
                let numm = Math.floor(Math.random()*3);
                humans.players[0][changeyousos[0][numm]] += changeyousos[2][numm];
                log.textContent = changeyousos[1][numm]+'が上がった！';
            }else{
                let numm = Math.floor(Math.random()*3);
                humans.players[0][changeyousos[0][numm]] -= changeyousos[2][numm];
                log.textContent = changeyousos[1][numm]+'が下がった！';
            }
        }
    }
};

//#region candystand
let candybar = [];
async function Candytake(){
    //log.textContent = 'あめを食べた..';
    //await delay(1000);
    let candynum = Math.floor(Math.random() * 20) + 1;
    if (!candybar.includes(candynum)){
    candybar.push(candynum);
    switch(Math.floor(Math.random()*3)+1){
        case 1:
            humans.players[0].atk += random(1,4);
            log.textContent = '攻撃力が上がった！';
            break;
        case 2:
            humans.players[0].def += random(1,4);if(humans.players[0].def < 0){humans.players[0].def = 0};
            log.textContent = '防御力が上がった！';
            break;
        case 3:
            humans.players[0].maxhp += random(5,15);
            log.textContent = '体力が増えた！';
            break;
    };
    }else{
        switch(random(1,3)){
            case 1:
                humans.players[0].atk -= random(5,18);if(humans.players[0].atk < 1){humans.players[0].atk = 1};
                log.textContent = '攻撃力が下がった！';
                break;
            case 2:
                humans.players[0].def -= random(3,12);if(humans.players[0].def < 0){humans.players[0].def = 0};
                log.textContent = '防御力が下がった！';
                break;
            case 3:
                humans.players[0].maxhp -= random(10,30);if(humans.players[0].maxhp < 1){humans.players[0].maxhp = 1};
                if(humans.players[0].hp > humans.players[0].maxhp){humans.players[0].hp = humans.players[0].maxhp};
                log.textContent = '体力が減った！';
                break;
        };
    }
}
// #endregion
//#region hopeful-button  廃止予定
async function HopeButtonact(){
    movable = 0;
    log.textContent = 'ボタンを押した....';
    await delay(1000);
    if(Math.floor(Math.random() * 2) == 0){
        log.textContent = 'な、中から四葉のクローバーが...!!';
        buffclear(cam,me,'all');
        await buffadd('players',1,'luck','turn',2,1);
    } else {
        log.textContent = 'ボタンが溶けて手がやられた！';
        await buffadd(cam,me,'shelldown','turn',3,1);
        await buffadd(cam,me,'powerdown','turn',3,2);
    }
    await delay(1000);
    
    document.querySelector('#overfieldArea').style.display = 'block';
    
    objmap[MAPy][MAPx].id = 0;
    draw()
    movable = 1;
}
// #endregion
//#region chest
const inchestTool = ['aspirin','pablon','trypsin','throwknife','trickyvariable','bottlegrenade','redcard','bluecard','greencard'];
const inchestRareTool = ['lulu','potion','cdveringfire','bomb','blackcard'];
async function OpenChest(code){
    movable = 0;
    switch(code){
    case 1:
        log.textContent = 'チェストを開けた...';
        await delay(1000);
        for(let i = 0; i < 3; i++){
            x = arraySelect(inchestTool);
            Tools[x].num += 1;
            log.textContent = Tools[x].name+'を手に入れた！';
            await delay(750);
        }
    break;
    case 2:
        log.textContent = 'チェストを開けた...';
        await delay(1000);
        for(let i = 0; i < 3; i++){
            x = arraySelect(inchestRareTool);
            Tools[x].num += 1;
            log.textContent = Tools[x].name+'を手に入れた！';
            await delay(750);
        }
    break;
    }
    document.querySelector('#eventArea').innerHTML = '';
    
    document.querySelector('#battleArea').style.display = 'none';
    document.querySelector('#overfieldArea').style.display = 'block';
    
    objmap[MAPy][MAPx].id = 0;
    draw()
    movable = 1;
}
// #endregion
//#region Cookietake
async function Cookietake(){
    movable = 0;
    log.textContent = 'クッキーを食べてみた...';//これはお助け的イベントだから上昇量は少なめ
    await delay(1000);
    switch(Math.floor(Math.random()*3)+1){
        case 1:
            humans.players[0].atk += 5 ;
            x = '熱い！焼きたてだぜ！！';
            break;
        case 2:
            humans.players[0].def += 5;
            x = '硬い！凍ってたかもしんねぇ！！';
            break;
        case 3:
            humans.players[0].maxhp += 20;
            humans.players[0].hp = humans.players[0].maxhp;
            x = 'うまい！！';//体力増える..の味が思いつかなすぎた これはしゃーない 煉獄さん
            break;
        case 4:
            humans.players[0].maxmp += 10;
            x = '甘い！砂糖マシマシだー！！';
            break;
        case 5:
            humans.players[0].critdmg += 0.1;//当たり枠(会心ダメージ増加はぶっ壊れてる..たぶん)
            x = 'はっ..!?これは....ジャム入りだ.....!!!!';//ちなみにコッペくんはジャムが上に乗ったタルト生地のクッキーが好物です マカロンと張るくらい好き
            break;
    }
    log.textContent = x;
    await delay(1000);
    document.querySelector('#eventArea').innerHTML = '';
    
    document.querySelector('#battleArea').style.display = 'none';
    document.querySelector('#overfieldArea').style.display = 'block';
    
    objmap[MAPy][MAPx].id = 0;
    draw()
    movable = 1;
}
// #endregion
//#region placebomb
const explosion1 = new Image();
explosion1.src = 'assets/effects/explosion_1.png';
const explosion2 = new Image();
explosion2.src = 'assets/effects/explosion_2.png';
const explosion3 = new Image();
explosion3.src = 'assets/effects/explosion_3.png';

let bombtimer = 0;
let PlacedBombx = 0;
let PlacedBomby = 0;

async function placebomb(){
    objmap[MAPy][MAPx].id = 'bomv';
    bombtimer = 5;
    PlacedBombx = MAPx;
    PlacedBomby = MAPy;
    log.textContent = '爆弾を設置しました！';
    //so coolのやつやってもいいかも
}//出口を消した時どうする論争
//#endregion
//#region catus
async function CatusAct(){
    if(humans.players[0].hp > 10){
        log.textContent = 'いてっ';
        humans.players[0].hp -= 10;
        humans.players[0].atk += 5;
        if(stage == 3) humans.players[0].hp -= 10, humans.players[0].atk += 5;
        objmap[MAPy][MAPx].id = 0;
    }else{
        log.textContent = 'なんか..今触ったら死にそう....'
    }
    await delay(500);
    
}
//#endregion
//#region scorpion 廃止予定
async function ScorpionAct(code){
    log.textContent = '刺された...';
    switch(code){
        case 1:await buffadd('playerbuff','poison','turn',3,1);break;
        case 2:await buffadd('playerbuff','poison','turn',3,2);break;
    }
    playeratk += 10*code;
    objmap[MAPy][MAPx].id = 0;
    await delay(500);
    
}
//#endregion

//#region wrwrdイベント(fun値50以下の際1/23の確率で出現)
function ZomuEvent(){//創生黎明の原野
    log.textContent = 'かまってぇや、マジで';
    playername = 'zomusan'
    humans.players[me].ex = 'bombe';//clownみたいな感じで爆弾投げ。普通、水、マグマ、閃光弾。ex使用後は攻撃力が1.5倍になる(1ターン)
    playerns = 'hitelec';//4の倍数のターンの時、強制的にエレキギターで殴る。攻撃力の3倍のダメージを与える。
    playerps = 'solx5but'//slashoflightを使った際、当たれば5倍だが、外れれば自分にダメージを与える。

    Styles.button.solid = '#000000';
    Styles.button.back = '#50C878';
    Styles.tekiou();

    objmap[MAPy][MAPx].id = 0;
    draw()
    movable = 1;
}
function UtusenEvent(){
    log.textContent = 'はいどうも〜、僕です';
    playername = 'utusen'
    humans.players[me].ex = '50%appease';//相手の体力が半分以下なら仲間にする｡でなければ､攻撃力の1.5倍のダメージ
    playerns = 'ehp50%but';//3の倍数のターンの時、相手か自分の体力を半分にする。運ゲー
    playerps = 'reverseta';//逆TA(相手より体力がめちゃ低いとダメージを喰らわない)

    Style.button.solid = '#4c6cb3';
    Style.button.back = '#949495';
    Style.tekiou();
    objmap[MAPy][MAPx].id = 0;
    draw()
    movable = 1;
}
// #endregion