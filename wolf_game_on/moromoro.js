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
let database = firebase.database();
let userData = null;

//ログイン処理
var loginForm = document.getElementById('login-form');
var chatContainer = document.getElementById('chat-container');
var loginError = document.getElementById('login-error');
let room = 1;
let username = 'no name';
let usersRef = null;

loginForm.addEventListener('submit', function(event) {
   event.preventDefault();
   username = document.getElementById('username').value;
   var password = document.getElementById('password').value;

   usersRef = database.ref('users/' + username);

   // データベースでユーザーが存在するか確認
   usersRef.once('value').then(function(snapshot) {
      if(snapshot.exists()){
            userData = snapshot.val();
            if(userData.password === password){
               loginForm.style.display = 'none';
               chatContainer.style.display = 'flex';
               PleaseWait();
         }else{
               loginError.style.display = 'block';
         }
      }else{
           usersRef.update({
               password: password,
           });
           loginForm.style.display = 'none';
           chatContainer.style.display = 'flex';
           PleaseWait();
      }
   });
});


// ここからチャットの動き
var sendButton = document.getElementById('send-button');
var messageInput = document.getElementById('message-input');
var messagesContainer = document.getElementById('messages');
var roomSelect = document.getElementById('room-select');
room = roomSelect.value;
var messagesRef = database.ref('rooms/' + room + '/messages');

messageInput.addEventListener('keypress', function(e) {
if(e.key === 'Enter'){
   if (!e.shiftKey){ // Shiftが押されていない場合
       e.preventDefault();
       sendButton.click();
   }
}
});


// 部屋変更時の処理
function selectRoom() {
   messagesRef.off();
   room = roomSelect.value;
   messagesRef = database.ref('rooms/' + room + '/messages');
   document.getElementById('messages').innerHTML = '';

   function formatDate(date) {
       const year = date.getFullYear();
       const month = String(date.getMonth() + 1).padStart(2, '0');
       const day = String(date.getDate()).padStart(2, '0');
       const hours = String(date.getHours()).padStart(2, '0');
       const minutes = String(date.getMinutes()).padStart(2, '0');
       return `${year}/${month}/${day} ${hours}:${minutes}`;
   }

   // メッセージ送信
   sendButton.addEventListener('click', function() {
       var message = messageInput.value;
       var username = document.getElementById('username').value;
       if (message.trim() !== '') {
           messagesRef.push({
               text: message.replace(/\n/g, '<br>'),
               username: username,
               timestamp: formatDate(new Date())
           });
           messageInput.value = '';
       }
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

       messagesContainer.appendChild(messageElement);

       messagesRef.on('value', function(snapshot) {
           if (snapshot.numChildren() > 20) {
               var firstMessageKey = Object.keys(snapshot.val())[0];
               messagesRef.child(firstMessageKey).remove();
           }
       });

       // 最新のメッセージが見えるようにスクロール
       messagesContainer.scrollTop = messagesContainer.scrollHeight;
   });

   messagesRef.once('value', function(snapshot) {
       displayAllMessages();  // 一回だけ全メッセージを表示
   });
}

function displayAllMessages() {
   var roomSelect = document.getElementById('room-select');
   room = roomSelect.value;
   document.getElementById('messages').innerHTML = '';

   // データベースから全てのメッセージを取得
   messagesRef.once('value', function(snapshot) {
       snapshot.forEach(function(childSnapshot) {
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

           messagesContainer.appendChild(messageElement);
       });

       messagesRef.on('value', function(snapshot) {
           if (snapshot.numChildren() > 20) {
               var firstMessageKey = Object.keys(snapshot.val())[0];
               messagesRef.child(firstMessageKey).remove();
           }
       });

       // 最新のメッセージが見えるようにスクロール
       messagesContainer.scrollTop = messagesContainer.scrollHeight;
   });
}

// 部屋作ったりラジバンダリ
function makeRoom() {
   const Loom = document.getElementById('room-make').value;
   const NowRef = database.ref('rooms/' + Loom);
   const pass = document.getElementById('room-make-pass').value;
   NowRef.once('value').then(function(snapshot) {
       if (snapshot.exists()) { // 既存部屋の場合
           var roomData = snapshot.val();
           if (roomData.pass == pass) {
               document.getElementById('room-select').appendChild(new Option(Loom, Loom));
               roomSelect.value = Loom;
               room = Loom;
               selectRoom();
               document.getElementById('room-make').value = '';
               document.getElementById('room-make-pass').value = '';
           } else {
               document.getElementById('room-make').value = 'missed!!';
               document.getElementById('room-make-pass').value = '';
           }
       } else {
           const Pass = { pass: document.getElementById('room-make-pass').value };
           document.getElementById('room-select').appendChild(new Option(Loom, Loom));
           roomSelect.value = Loom;
           room = Loom;

           NowRef.update(Pass);

           selectRoom();
           document.getElementById('room-make').value = '';
           document.getElementById('room-make-pass').value = '';
       }
   });
}

// チャットの開始、送信、受信
function startChat(){
   room = roomSelect.value;
   selectRoom();
   GameStart();
}

function ResetRooms(){
   messagesRef = database.ref('rooms/wolf-loby/messages');
   messagesRef.remove();
   messagesRef = database.ref('rooms/wolf-wolf/messages');
   messagesRef.remove();
   messagesRef = database.ref('rooms/wolf-grave/messages');
   messagesRef.remove();
   setTimeout(displayAllMessages, 200);
}


//こっから人狼
let role = '村人';
let roles = [];
const rolelist = [['市民','パン屋','占い師','霊媒師','狩人','騎士','狂人','人狼','人狼','ヴァンパイア','サバイバー',],]
function BorW(name){
   switch(name){
      case '人狼':
         return '人狼やで';
      default:
         return '人狼じゃないで';
   }
}

let playersCount = 0; // プレイヤーの人数
let wolfData;
let Parent = 0;

const Main = document.getElementById('MainArea');
function PleaseWait(){
   DataRef = database.ref('forwolf');
   let NowCount;let players;
   DataRef.once('value').then(function(snapshot) {
       wolfData = snapshot.val();
       NowCount = wolfData.playercount;
       players = wolfData.nowplayers;
   });
   playersCount = NowCount+1;
   players.push(username);
   DataRef.update({
      playercount: playersCount,
      nowplayers: players
   });
 

   Main.style.display = 'block';
   Main.innerHTML = `
   プレイヤーを待っています...<br>
   <button onclick="GameStart()">ここを押すとゲームが開始され、<br>新たなプレイヤーが参加することができなくなります</button>`
   Parent = 0;
   if(playersCount == 1){
      Parent = 1;
      Main.innerHTML = `
      プレイヤーを待っています...<br>
      <button id="GameStart-button" onclick="GameStart()">ここを押すとゲームが開始され、<br>新たなプレイヤーが参加することができなくなります</button><br>
      <input type="text" id="choose-role" placeholder="ここに役職かいてね"><br>
      <iframe id="RoleShoukai" src="roles.txt"></iframe>
      `
   }
}
window.addEventListener('beforeunload', () => {
   NowCount = wolfData.playercount;
   playersCount = NowCount-1;
   DataRef.update({
      playercount: playersCount
   });
});
function GameStart(){
   if(Parent == 1){
      DataRef.once('value').then(function(snapshot) {
          wolfData = snapshot.val();
          players = wolfData.nowplayers;
      });

      roles = document.getElementById('choose-role').value.split(',');
      if(roles[0] == ''){
         Parent = 1;
         Main.innerHTML = `
         プレイヤーを待っています...<br>
         <button id="GameStart-button" onclick="GameStart()">ここを押すとゲームが開始され、<br>新たなプレイヤーが参加することができなくなります</button><br>
         <input type="text" id="choose-role" placeholder="ここに役職かいといてね"><br>
         <iframe id="RoleShoukai" src="roles.txt"></iframe>
         `
         document.getElementById('choose-role').value = 'ちゃんと書いてね♡';
         return;
      }

      const roleAssignment = assignRoles(players, roles);
      console.log(roleAssignment);
      //DataRef.update({role: roleAssignment});

      function assignRoles(players, roles) {
         const shuffleArray = (array) => {
         for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
         }
         return array;
         };

         // 役職をシャッフル
         const shuffledRoles = shuffleArray(roles.slice());
         const assignment = {};

         players.forEach((player, index) => {
         assignment[player] = shuffledRoles[index];
         });
         return assignment;
      }
   }
   Main.innerHTML = '';


   

   
   document.getElementById('room-select').innerHTML = `
   <option value="wolf-loby">wolf-loby</option>
   `
}
let players = [];