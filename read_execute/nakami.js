//#region komagome
function delay(ms){
   return new Promise(resolve=>setTimeout(resolve,ms));
};
async function nicoText(mes){
   const newDiv = document.createElement('div');
   newDiv.textContent = mes;
   newDiv.className = 'nicotext';
   newDiv.style.top = `calc(${random(0,100)}vh - 20px)`
   body.appendChild(newDiv);
   //let speed = (Math.random()*100+1)*0.1;
   //let speed = mes.toString().length*2 
   let speed = 2;
   // for(let i = 0; window.innerWidth > i*speed; i++){
   //    let val = i*speed;
   //    newDiv.style.right = `${val}px`
   //    await delay(5);
   // }
   newDiv.style.transform
   newDiv.remove();
};
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
function countText(text){
   if(typeof text !== 'string'){text = text.toString();}
   let count = 0;
   text.split('').forEach(a => {
      if(/^[a-z_0-9]+$/.test(a)){
         count += 1;
      }else{
         count += 2;
      }
   })
   return count;
}
function setLocalStorage(name, value) {
   localStorage.setItem(name, value || "");
}
function getLocalStorage(name) {
   return localStorage.getItem(name);
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
      if(rawtext[i] === "*" && rawtext[i + 1] === "*"){
         isRed = !isRed; // 状態を切り替える
         i++; // 次の * をスキップ
      }else if(rawtext[i] === "&" && rawtext[i + 1] === "&"){
         isPink = !isPink;
         i++; // 次の & をスキップ
      }else if(rawtext[i] === "^" && rawtext[i + 1] === "^"){
         isBlue = !isBlue;
         i++;
      }else{
         text.push({ char: rawtext[i], color: isRed ? "red" : isPink ? "pink" : isBlue ? "blue" : null });
      }
   }
   return text;
}

async function addtext(text){
   textShowing = 1;
   text = colorcheck(text);
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
document.addEventListener('keydown', (event) => {
   if (event.key === 'z' || event.key === 'Enter') {
      skipText = true;
   }
});

document.addEventListener('keyup', (event) => {
   if (event.key === 'z' || event.key === 'Enter') {
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
//#region 音をロードする機構
let soundsLoaded = 0;
let sounds = {};
let soundsNames = [] //増やしたけりゃここに増やしなねs
let totalsounds = soundsNames.length

soundsNames.forEach(num => {
    let sound = new Audio();
    sound.preload = 'auto';
    sound.src = `assets/sounds/${num}.mp3`; 
    sound.addEventListener('canplaythrough', () => {
        soundsLoaded++;
        if(soundsLoaded == totalsounds){
            nicoText('読み込みed');
        }
    }, {once: true});
    sound.onerror = () => {
        console.error(`Sound ${num} failed to load.`);
    };
    sounds[num] = sound;
}); 
//#endregion

let executions = {}
async function execute(arr){
   let [functionName, ...args] = arr;
   await executions[functionName](...args);
}

async function loadScriptFile(path){
   const res = await fetch(path);
   if (!res.ok) throw new Error('読み込み失敗');
   const text = await res.text();
   return text.split('\n').map(line => line.trim()).filter(Boolean); // 空行は除く
}
async function loadScriptFile(src){
   const url = `assets/txts/${src}.txt`;
   const res = await fetch(url);

   const text = await res.text();
   const lines = text.split(/\r?\n/);

   let currentSection = null;
   let sections = {};

   for(let line of lines){
      line = line.trim();
      if(line == '' || line.startsWith('//')) continue;

      if(line.startsWith('@')){
         currentSection = line.slice(1).trim();
         sections[currentSection] = [];
         continue;
      }

      if(currentSection){
         sections[currentSection].push(line);
      }
   }

   allScripts[src] = sections

   return sections;
}


const context = {};
let readed = [];

async function read(gen){
   readed.push(gen);

   const stack = []; // 制御構文のネスト追跡
   let skip = false; // 現在この行を無視すべきか？

   // continueされた == その行は飛ばされた, 処理が終了した
   for(let moto of gen){
      // console.log(stack)

      let raw = moto.trim().split(',');
      if(raw.length == 0) continue;
      
      let line = raw.map(token => revision(token)).filter(Boolean); //全要素をrevisionしつつ、空要素を取り除く

      let cmd = line[0]

      if(cmd == 'if'){
         let [, left, operator, right] = line;
         let condition = false;
         switch(operator){
            case '==': condition = left == right; break;
            case '!=': condition = left != right; break;
            case '<':  condition = left <  right; break;
            case '>':  condition = left >  right; break;
            case '<=': condition = left <= right; break;
            case '>=': condition = left >= right; break;
            default: console.error(`演算子${operator}は使えませんわ〜〜〜！！`);
         }
         console.log(`if:: (${left} ${operator} ${right}) => ${condition}`);

         stack.push(condition);
         skip = !condition;
         continue;
      }

      
      if(cmd == 'else'){ //ifの逆、もしくはnotで処理を。不必須
         if(stack.length == 0) console.error('ifがないのにelseされてるっす、先輩！！');
         const prev = stack[stack.length - 1];
         skip = prev; // 逆にする
         continue;
      }

      if(cmd == 'edif'){ //ifを終わらせる。必須
         if(stack.length == 0) console.error('ifがないのにedifされてるっす、先輩！！');
         stack.pop();
         skip = stack.some(val => !val); // ネスト内に1つでもfalseあればskip続行
         continue;
      }

      if(skip) continue;

      let res = await enter(line);
      if(res == 'continue') continue;
      if(res == 'break') break;
   }
}
async function enter(line){   
   switch(line[0]){
      case 'log':{
         let [, text] = line;
         console.log(text)
         break;
      };

      case 'nico':{
         let [, text] = line;
         nicoText(text);//右から左にメッセージが横切っていく、って感じの関数。ロード完了とかを表示する予定
         break;
      };
      
      case '変数':{ 
         // 変数,変数名,値
         let [, name, value, value2] = line;

         if(value2){
            switch(value){
               case '=' : context[name]  = value2;
               case '+=': context[name] += value2;
               case '-=': context[name] -= value2;
               case '*=': context[name] *= value2;
               case '/=': context[name] /= value2;
            }
         }else{
            context[name] = value;
         }
         break;
      };

      case '乱数生成':{
         let [, min, max] = line.map(Number);;
         let num = random(min, max);
         console.log(`乱数生成:: ${min} ~ ${max} => ${num}`);
         context['乱数'] = num;
         break;
      };

      case '攻撃タイプランダム変更':{
         let [, ...arr] = line;
         context['攻撃タイプ'] = arraySelect(arr);
         break;
      }

      case 'ログ追加':{ // 3ダメージを受けた！ みたいなセリフじゃないけど表示はしたいやつみたいな
         let [, text] = line;
         addlog(text);
         break;
      };

      case '話者変更':{
         let [, name] = line;
         context['話者'] = name;
         break;
      };

      case 'セリフ':{
         let [, text] = line;
         await addtext(`${context['話者']}「${text}」`);
         break;
      };
      
      case 'サウンド':{ //currentTime = 0要らん気がしてきた 連発の可能性あるし
         let [, name] = line;
         if(!sounds[name]) return console.error(`サウンド"${name}"がありませんぜ not existってやつだね`);
         sounds[name].currentTime = 0;
         sounds[name].play();
         break;
      };
   }
}

function revision(moto){
   let after = moto.trim();

   if(after == '') return after;

   //数字またはなんか変なやつならばそのままお返し申す
   if(typeof after !== 'string'){
      //誰お前ら(array, object)
      if(after instanceof Array){
         return after.map(revision);
      }
      if(after instanceof Object){
         return Object.fromEntries(Object.entries(after).map(([k, v]) => [k, revision(v)]));
      }

      return after;
   }

   // %%パンは['変数', 'パン']に置換
   if (after.startsWith('%%')){
      return ['変数', after.slice(2)];
   }

   // %パンはcontext['パン']に置換
   if (after.startsWith('%')) {
      return context[after.slice(1)];
   }

   // 文字列内の%{パン}はcontext['パン']に置換
   return after.replace(/\%{(.*?)}/g, (_, v) => context[v] ?? '');
}


let inputD = document.querySelector('#input');
let inputD_text = inputD.querySelector('.text');
let inputD_send = inputD.querySelector('.send');
inputD_send.addEventListener('click', () => {
   let text = inputD_text.value;
   inputD_text.value = '';

   read(text.split('\n')); //改行で分ける...お前天才だなまじ
});

function syncHeight() {
   inputD_send.style.height = `${inputD_text.offsetHeight}px`;
};
syncHeight(); //最初に高さ合わせ
const observer = new ResizeObserver(syncHeight);
observer.observe(inputD_text);





//参考文献s
// https://chatgpt.com/share/68559001-24a4-8012-8eec-ff4700ba4b54 ←fetch読み込みと噛み砕き
