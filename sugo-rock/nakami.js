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
function hask(obj, key){
   let res = obj.hasOwnProperty(key);
   res = res ? 1 : 0;
   return res;
}
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
//#region drag
document.addEventListener('mousedown', e => {
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

//#region dice
let diceD = document.getElementById('dice-parepare');
let diceC = {
    kazu: 0,
    total: 0,
    six: ['front', 'back', 'right', 'left', 'top', 'bottom'],
}
let dice = 'normal'; //現在normal"1"のみ存在

function diceAdd(){
    diceC.kazu += 1;
    
    let div2 = document.createElement('div');
    div2.className = `dice-pare d${diceC.kazu}`;
    
    let div3 = document.createElement('div');
    div3.className = 'dice';
    diceC.six.forEach(a => {
        let div = document.createElement('div');
        div.className = `face ${a}`;

        let eye = document.createElement('img');
        eye.className = 'eye';
        div.appendChild(eye);
        
        let bor = document.createElement('img');
        bor.className = 'bor';
        div.appendChild(bor);

        div3.appendChild(div);
    })
    div2.appendChild(div3);
    
    let appleD = document.createElement('div');
    appleD.className = 'apple';
    div2.appendChild(appleD);
    
    div2.addEventListener('click', () => {
        diceTurn(diceC.kazu, 0);
    });

    diceD.appendChild(div2);

    diceChange();
}
function diceRem(){
    diceD.querySelector(`.dice-pare.d${diceC.kazu}`).remove();
    diceC.kazu -= 1;
}
function diceChange(name = 0){
    if(name) dice = name;
    let lsa = diceC.six;
    let lsb = [0,5,2,3,4,1];
    
    for(let num = 1; num <= diceC.kazu; num++){
        let diceD2 = diceD.querySelector(`.dice-pare.d${num}`);
        let diceD3 = diceD2.querySelector(`.dice`);
        let appleD = diceD2.querySelector('.apple');
        lsa.forEach((a, i) => {
            let div = diceD3.querySelector(`.face.${a}`);
            let num = lsb[i];
            let eye = Dices[dice].eye[num];
            let bor = +eye < 0 ? '-' : '+';
            if(bor == '-') eye *= -1;
            div.querySelector('.eye').src = `assets/dices/${eye}.png`;
            div.querySelector('.bor').src = `assets/dices/${bor}.png`;
            div.style.background = Dices[dice].col;
        });
        let rev = hoshoku(Dices[dice].col);
        appleD.style.color = rev;
        if(rev == '#000000') appleD.style.color = '#707070';
    }
}
let rolled = 0;
async function diceTurn(num, zougen){
    let diceD2 = diceD.querySelector(`.dice-pare.d${num}`);
    let appleD = diceD2.querySelector('.apple');
    let eye = await diceRoll(num);
    
    appleD.textContent = eye;
    appleD.style.opacity = 1;
    appleD.style.fontSize = '100px';
    
    if(zougen != 0){
        await delay(1000);
        let col = '#000000';

        if(String(zougen).startsWith('=')) col = '#00bbff', eye = zougen.slice(1);
        else{
            if(+zougen > 0) col = '#ffbf00ff', eye += zougen, zougen = `+${zougen}`;
            if(+zougen < 0) col = '#ff0000', eye += zougen;
        }
        let appleD2 = document.createElement('div');
        appleD2.className = 'apple mk2';
        appleD2.textContent = zougen;
        appleD2.style.color = col;
        appleD2.style.opacity = 1;
        diceD2.appendChild(appleD2);

        await delay(800);
        appleD2.style.top = '50%';
        appleD2.style.opacity = 0;
        await delay(1000);
        appleD2.remove();
        appleD.textContent = eye;
    }


    //これ以下の動き処理後にやったほうがいい
    await delay(1000);
    appleD.style.opacity = 0;
    await delay(1000);
    appleD.style.fontSize = '0px';

    diceC.total += eye;
    return eye;
}
async function diceTurnAll(zougen = 0){
    let res = 0;
    let promises = [];
    for(let num = 1; num <= diceC.kazu; num++){
        promises.push(diceTurn(num, zougen));
    }
    await Promise.all(promises);
    res = diceC.total;

    return res;
}
async function diceRoll(num, kimeran = null){
    rolled += 1;    
    let rotations = [
        [0, 0],     // front (1) [0]
        [180, 0],   // back (6) [5]
        [0, -90],   // right (3) [2]
        [0, 90],    // left (4) [3]
        [-90, 0],   // top (5) [4]
        [90, 0],    // bottom (2) [1]
    ];

    let rand = random(0,5);
    if(kimeran != null) rand = kimeran;
    let [x, y] = rotations[rand];
    let yobun = 360;

    let code = 0;
    if(rolled % 2 != 0){
        code = 1;
    }
    
    if(code){
        x += yobun;
        y += yobun;
    }

    let diceD3 = diceD.querySelector(`.dice-pare.d${num} .dice`);
    diceD3.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;

    await delay(1000 + 500);//500は余分

    let karis = [0,5,2,3,4,1].map(a => Dices[dice].eye[a]) //1,6,3,4,5,2
    // let deme = [0,5,2,3,4,1][rand];
    let eye = +karis[rand];
    // let bor = eye < 0 ? '-' : '+';
    console.log(`出目は${eye} (rand: ${rand}, eye: ${eye})`);

    return eye;
}

document.querySelector('#dice-parepare').addEventListener('click', () => {
    diceTurn()
})

let diceSD = document.querySelector('#dice-selesele');
let diceSC = {
    now: 1,
    max: 0,
    DaiCE: 'normal',
    ing: 0,
    load: () => {
        let arr = Object.keys(Dices).filter(a => Dices[a].freely);
        diceSC.max = arr.length;
        arr.forEach(a => {

            let you = {
                name: a, //name == a
                list: Dices[a].eye,
                col: Dices[a].col
            }
            let div = document.createElement('div');
            div.className = 'item';
            div.setAttribute('data-name', a);

            let list = document.createElement('div');
            list.className = 'list';
            you.list.forEach(b => {
                let itee = document.createElement('div');
                itee.className = 'cell';
                itee.textContent = b;
                itee.style.background = you.col;
                list.appendChild(itee);
            })
            div.appendChild(list);

            let name = document.createElement('div');
            name.className = 'name';
            name.textContent = you.name;
            div.appendChild(name);

            diceSD.appendChild(div);
        });
    },
    tekiou: () => {
        let items = diceSD.querySelectorAll('.item');
        items.forEach(a => {
            if(a.classList.contains('selected')) a.classList.remove('selected')
        })
        items[diceSC.now - 1].classList.add('selected')
        diceSC.DaiCE = items[diceSC.now - 1].getAttribute('data-name');
    },
    select: () => {
        diceSC.ing = 0;
        diceSD.style.display = 'none';
        diceChange(diceSC.DaiCE);
    }
}
document.addEventListener('keydown', event => {
    if(event.key == "Shift" && !diceSC.ing){
        diceSD.style.display = "flex";
        diceSC.ing = 1;
    }
});
document.addEventListener('keyup', (event) => {
    switch(event.key){};
    
    if(diceSC.ing){
        switch(event.key){
            case 'ArrowDown':
                diceSC.now += 1;
                if(diceSC.max < diceSC.now) diceSC.now = diceSC.max;
                diceSC.tekiou()
                break;
            case 'ArrowUp':
                diceSC.now -= 1;
                if(diceSC.now < 1) diceSC.now = 1;
                diceSC.tekiou()
                break;
            case 'Shift':
                diceSC.select();
                break;
        };
    }
})
//#endregion dice

//#region map
let mapD = document.getElementById('map');
let map = 'simple';
let mapC = {
    map: [],
    cells: [],
    size: 8,
}

function mapMake(kind){
    map = kind;
    mapC.map = JSON.parse(JSON.stringify(Maps[kind].map));
    mapC.map.forEach(a => {
        let div = document.createElement('div');
        div.className = `mas m${a.num}`;
        div.textContent = a.num;
        div.style.width = `100%`;
        // div.style.height = `${100 / mapC.size}%`;
        mapD.appendChild(div);
        mapC.cells.push(div);
    })
    for(let i = 0; i < Math.ceil(mapC.cells.length / mapC.size); i++){
        let karis = mapC.cells.slice(i * mapC.size, (i + 1) * mapC.size);
        if(i % 2 === 1) karis.reverse(); // 偶数行なら反転

        karis.forEach(cell => mapD.appendChild(cell));
    }
}

let masF = {
    'move':async(id, code, num) => {
        if(id == 'me') id = comaC.turn;

        let whoes = comaC.all.filter(a => a.id == id);
        for(let who of whoes){
            if(code == 'set'){
                let nom = num - who.now;
                // if(0 < num && who.now < 0) nom += 1; 
                // if(num < 0 && 0 < who.now) nom -= 1; //0を挟むなら0分を
                await comaMove(id, nom, ['force']);
                tekiou();
            }
            if(code == 'add'){
                await comaMove(id, num, ['force']);
                tekiou();
            }
        }
    },
    'buffAdd':async(id, name, type, time, value) => {
        if(id == 'me') id = comaC.turn;
        let whoes = comaC.all.filter(a => a.id == id);
        for(let who of whoes){
            await comaBuffAdd(who, name, type, time, value);
        }
    },
    'imgEmp':async(name) => {
        let src = `assets/imgs/${name}.jpg`;

        let img = document.createElement('img');
        img.src = src;
        img.className = 'img_emp';
        document.querySelector('body').appendChild(img);

        await new Promise(resolve => {
            //document.clickまたはkeydown_zで削除、return 0;
            let kaijo = () => {img.remove(); resolve(0)};
            img.addEventListener('click', kaijo);
            document.addEventListener('keydown', event => {
                if(event.key == 'z') kaijo();
                if(event.key == 'Enter') kaijo();
            })
        });
    },
}
async function masRead(mas){
    let efs = mas.effect; //エヒフみたいで言いにくいね
    for(let e of efs){
        let [func, ...args] = e;
        console.log(`${func}を実行！ (${args})`);
        await masF[func](...args);
    }
}

//#endregion map

//#region coma
let comaC = {
    colors: ['#cfe9ff', '#ece8ff', '#fff0d9', '#ddffd0'],
    all:[],
    turn: 1,
}
function comaMake(){
    let color = '#000000'
    let len = comaC.all.length;
    if(len < comaC.colors.length) color = comaC.colors[len];
    else color = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
    
    let coma = {
        id: len + 1, // 1~
        col: color,
        now: 0,
        buffs: [], //1回休みのデバフ、とかの
        last: 0, //最後に出したダイスの数字
    }
    
    let div = document.createElement('div');
    div.className = `coma i${coma.id}`;
    div.dataset.id = coma.id;

    let head = document.createElement('div');
    head.className = 'head';
    head.style.background = coma.col;
    div.appendChild(head);

    let body = document.createElement('div');
    body.className = 'body';
    body.style.background = coma.col;
    div.appendChild(body);

    coma.div = div;

    return coma;
}
function comaAdd(){
    let coma = comaMake();

    comaC.all.push(coma);

    mapD.querySelector(`.m${coma.now}`).appendChild(coma.div);
}
function comaRem(id = 'last'){
    if(id == 'me') id = comaC.turn;
    if(id == 'last') id = comaC.all.length;
    comaC.all[id-1].div.remove();
    comaC.all.splice(id-1, 1); //deleteだとundefinedになるだけらしい
}

async function comaTurn(id){
    comaC.turn = id;
    let coma = comaC.all[id-1];
    console.log(`id-${`${coma.id}`.padStart(3, '0')}のターン`);

    let now = coma.now;
    let mas = mapC.map.filter(a => a.num == now)[0];
    if(mas.kind == 'force') mas.kind = '';

    let hasb = (name) => {return coma.buffs.some(b => b.name == name)};
    let getb = (name) => {return coma.buffs.find(b => b.name == name)};

    if(hasb('rest')) return '休憩中...♧';

    diceC.total = 0;

    let dicenum = 1;
    let zougen = 0;
    let mukouka = [];
    for(let b of coma.buffs){
        if(b.name == 'diceAdd' && !mukouka.includes('dice')) dicenum += b.value;
        if(b.name == 'diceSet' && !mukouka.includes('dice')) dicenum = b.value, mukouka.push('dice');

        if(b.name == 'demeAdd' && !mukouka.includes('deme')) zougen += b.value;
        if(b.name == 'demeSet' && !mukouka.includes('deme')) zougen = `=${b.value}`, mukouka.push('deme');
    }

    if(dicenum != diceC.kazu){
        if(dicenum > diceC.kazu){
            dicenum -= diceC.kazu;
            for(let i = 0; i < dicenum; i++){
                diceAdd();
            };
        };
        if(dicenum < diceC.kazu){
            dicenum = diceC.kazu - dicenum;
            for(let i = 0; i < dicenum; i++){
                diceRem();
            };
        };
    }

    await new Promise(resolve => {
        let kaijo = () => {resolve(0)};
        document.addEventListener('keydown', event => {
            if(event.key == 'z') kaijo();
            if(event.key == 'Enter') kaijo();
        })
    });

    let res = await diceTurnAll(zougen);
    console.log(`ダイスを${diceC.kazu}個振った！ 合計:${res} (増減量:${zougen})`);
    coma.last = res;
    await comaMove(coma.id, res);

    now = coma.now;
    console.log(`${res}マス移動し、${now}マスに到着`)
    await delay(500);
    
    mas = mapC.map.filter(a => a.num == now)[0];
    if(hask(mas, 'effect')){
        await masRead(mas);
    }
}
async function comaMove(id, num, prop = []){
    let hasp = (name) => {return prop.some(p => p == name)};
    tekiou();
    console.log(id, num, prop);
    let coma = comaC.all[id-1];
    
    let add = 1;
    if(num < 0) add = -1, num *= -1;
    for(let i = 0; i < num; i++){
        let len = mapC.cells.length;
        let now = coma.now;
        if(now > len) break;

        let mas = mapC.map.filter(a => a.num == now)[0];
        if(mas.kind == 'force' && !hasp('force')) break;

        coma.now += add;
        tekiou();
        await delay(250);
    }
    await delay(500);
    return num;
}

async function comaBuffAdd(who, name, type, time, value){
    if(typeof who == 'number' || typeof who == 'string') who = comaC.all[who-1];
    let newb = {
        name,
        type,
        time,
        value
    }

    if(type == 'turn'){
        let oldb = who.buffs.find(b => b.name == name && b.type == type && b.value == value);
        if(oldb) oldb.time += time, console.log(`すでにあったから延長しといたわ(笑)`);
        else who.buffs.push(newb);
    }
    if(type == 'stack'){
        let oldb = who.buffs.find(b => b.name == name && b.type == type && b.value == value);
        if(oldb) oldb.time += time, console.log(`あ..バフ、悪化しちゃったね....？`);
        else who.buffs.push(newb);
    }
    
    return newb;
}
function tekiou(){
    comaC.all.forEach(a => {
        const el = mapD.querySelector(`.coma.i${a.id}`);
        const dest = mapD.querySelector(`.m${a.now}`);
        if(!el || !dest) return;  // 念のためガード

        dest.appendChild(el);
    });
}

//#endregion coma

//#region debug
let deviD = document.getElementById('debug');
let deviC = {
    comaS: deviD.querySelector('.coma .adrem'),
    comaB: deviD.querySelector('.coma .send'),
    buffSC: {
        name: deviD.querySelector('.buff .name'),
        type: deviD.querySelector('.buff .type'),
        time: deviD.querySelector('.buff .time'),
        value: deviD.querySelector('.buff .value'),
    },
    buffB: deviD.querySelector('.buff .send'),
}
deviC.comaB.addEventListener('click', () => {
    let code = deviC.comaS.value;
    if(code == 'add') return comaAdd();
    if(code == 'rem') return comaRem();
    console.log('buged');
})
deviC.buffB.addEventListener('click', () => {
    let name = deviC.buffSC.name.value;
    let type = deviC.buffSC.type.value;
    let time = deviC.buffSC.time.value;
    let value = deviC.buffSC.value.value;
    if(name && type && time && value) return comaBuffAdd(name, type, time, value);
    console.log('たりねぇ');
})

//#endregion debug

let looped = 0;
async function gameloop(){
    for(let coma of comaC.all){
        await comaTurn(coma.id)
    }
    looped++;
    console.log(`loopしゅ〜りょ〜`);
    
    requestAnimationFrame(gameloop);
}

document.addEventListener('DOMContentLoaded', () => {
    mapMake('simple')
    diceAdd();
    comaAdd();
    diceSC.load();
    diceChange('normal');

    gameloop();
});