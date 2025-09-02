//内部へようこそ！！！
//#region 探索部分
document.getElementById('GameArea').style.display = 'block';
document.getElementById('NowMap').style.display = 'none';
const canvas = document.getElementById("NowMap");
const ctx = canvas.getContext("2d");
const backgroundMaps = [
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
let backgroundMap = [
   ['a','b','c','d','e','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
];
const backgroundMapnum = ['0.3','7.3','14.3'];//開始位置.そっから終了位置までの差

const objectMaps = [
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
   ],//こちら、「祝福」ですっ！(ノアさん風)
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

]
let objectMap = [
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0]
];
const objectMapnum = ['0.5','9.4','17.4'];
let stage = 1;
let floor = 0;

let imagesLoaded = 0;
let totalImages = 34;//ここ変えるの忘れないでね
let images = {};
let imageNames = ['a','b','c','d','e','f','g',0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

imageNames.forEach(num => {
  let img = new Image();
  img.src = `assets/maps/${num}.png`;
  img.onload = () => {
   imagesLoaded++;
   if(imagesLoaded === totalImages){
      GameStart();
   }
  };
  img.onerror = () => {
   console.error(`Image ${num} failed to load.`);
  };
  images[num] = img;
});

function DrawBackground(){
   //background、そのまま背景
   for(let yy = 0; yy < 8; yy++){
     for(let xx = 0; xx < 8; xx++){
      let img = images[backgroundMap[yy][xx]];
      if(img){
        ctx.drawImage(img, xx * 75, yy * 75, 75, 75);
      }else{
        console.error(`Image for background value ${backgroundMap[yy][xx]} not found.`);
      }
     }
   }
   //object、仕掛けとか
   for(let y = 0; y < objectMap.length; y++) {
     for(let x = 0; x < objectMap[y].length; x++) {
      let img = images[objectMap[y][x]];
      if(img){
        ctx.drawImage(img, x * 75, y * 75, 75, 75);
      }else{
        console.error(`Image for object value ${objectMap[y][x]} not found.`);
      }
     }
   }
}

const explosion1 = new Image();
explosion1.src = 'assets/effects/explosion_1.png';
const explosion2 = new Image();
explosion2.src = 'assets/effects/explosion_2.png';
const explosion3 = new Image();
explosion3.src = 'assets/effects/explosion_3.png';

// 選択画像のロードと初期表示
const IMGselect = new Image();
IMGselect.src = 'assets/maps/select.png';

let AllowMove = 0;

let SELECTx = 0; // 初期x座標
let SELECTy = 0; // 初期y座標
let MAPx,MAPy;

let bombtimer = 0;
let PlacedBombx = 0;
let PlacedBomby = 0;

canvas.addEventListener('keydown', function(event) {
   // 上下キーのキーコード
   if (event.key === 'ArrowUp' || event.key === 'ArrowLeft' ||  event.key === 'ArrowDown' || event.key === 'ArrowRight') {
       event.preventDefault(); // デフォルトの動作を無効化
   }
});

// キーが押されたときの...やつ
document.addEventListener('keydown', (event) => {
   if(AllowMove == 0){//scratchで良くやってたやつ なつかしいっすねぇ..
   let moved = 0;
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   switch(event.key) {
   case 'w':
   case 'ArrowUp': // 上
      SELECTy -= 75;
      MAPy = Math.floor(SELECTy / 75);
      if(MAPy < 0){SELECTy = 0}else if(objectMap[MAPy][MAPx]){if(objectMap[MAPy][MAPx] == undefined||objectMap[MAPy][MAPx] == 18){SELECTy += 75}}
      break;
   case 'a':
   case 'ArrowLeft': // 左
      SELECTx -= 75;
      MAPx = Math.floor(SELECTx / 75);
      if(MAPx < 0){SELECTx = 0}else if(objectMap[MAPy][MAPx]){if(objectMap[MAPy][MAPx] == undefined||objectMap[MAPy][MAPx] == 18){SELECTx += 75}}
      moved = 1;
      break;
   case 's':
   case 'ArrowDown': // 下
      SELECTy += 75;
      MAPy = Math.floor(SELECTy / 75);
      if(MAPy > 7){SELECTy = 525}else if(objectMap[MAPy][MAPx]){if(objectMap[MAPy][MAPx] == undefined||objectMap[MAPy][MAPx] == 18){SELECTy -= 75}}
      moved = 1;
      break;
   case 'd':
   case 'ArrowRight': // 右
      SELECTx += 75;
      MAPx = Math.floor(SELECTx / 75);
      if(MAPx > 7){SELECTx = 525}else if(objectMap[MAPy][MAPx]){if(objectMap[MAPy][MAPx] == undefined||objectMap[MAPy][MAPx] == 18){SELECTx -= 75}}
      moved = 1;
      break;
   }

   // 枠外に出ないように制限
   if(SELECTx<0){SELECTx=0};
   if(SELECTy<0){SELECTy=0};
   if(SELECTx>525){SELECTx=525};
   if(SELECTy>525){SELECTy=525};
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);

   // 画面をクリアしてから再描画
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);

   //ここに動いた時に記述を(爆弾とか)
   if(moved == 1){
   if(objectMap.some(row => row.includes(15))){
      bombtimer--;
      if(bombtimer <= 0){
         triggerExplosion(PlacedBombx, PlacedBomby);
      }
   }}
   function triggerExplosion(centerX, centerY) {
      let explosionStage = 0;
      const stageDelay = 100; //エフェクトの処理速度
   
      function drawExplosion(){
         let img;
         if (explosionStage === 0) {
            img = explosion1;//なんか最初だけ白くなってる もうちょい調整いる
         } else if (explosionStage === 1) {
            img = explosion2;
         } else if (explosionStage === 2) {
            img = explosion3;
         }

         //MAPx = Math.floor(SELECTx / 75);
         //MAPy = Math.floor(SELECTy / 75);
         //objectMap[MAPy][MAPx] = 15;
         //bombtimer = 5;
         //PlacedBombx = MAPx;
         //PlacedBomby = MAPy;
   
         // 爆発のエフェクトを十字に描画する
         for (let i = 0; i < 4; i++) {
            let explosionCoords = [
               [centerX + i, centerY],
               [centerX - i, centerY],
               [centerX, centerY + i],
               [centerX, centerY - i]
            ];
   
            explosionCoords.forEach(([x, y]) => {
               ctx.clearRect(x * 75, y * 75, 75, 75); // 前のフレームを消去
               ctx.drawImage(img, x * 75, y * 75, 75, 75); // 新しいフレームを描画
               //DrawBackground();
               //ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
            });
         }
   
         explosionStage++;
   
         if (explosionStage < 3) {
            setTimeout(drawExplosion, stageDelay);
         } else {
            clearExplosion(centerX, centerY);
         }
      }
   
      // 爆発アニメーションを開始
      drawExplosion();

   

   function clearExplosion(centerX, centerY) {
      for (let i = 0; i < 4; i++) {
         let explosionCoords = [
            [centerX + i, centerY],
            [centerX - i, centerY],
            [centerX, centerY + i],
            [centerX, centerY - i]
         ];
   
         explosionCoords.forEach(([x, y]) => {
            if (x >= 0 && x < objectMap[0].length && y >= 0 && y < objectMap.length) {
               // 座標がマップ範囲内なら0にする
               objectMap[y][x] = 0;
            }
         });
      }
      objectMap[PlacedBomby][PlacedBombx] = 0;
      ctx.clearRect(0, 0, 600, 600); 
      DrawBackground();
      ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   }
   
}
   
}});



canvas.addEventListener('click', (event) => {
   if(AllowMove == 0 && dungeonnow == 1){
      const rect = canvas.getBoundingClientRect();
      MAPx = event.clientX - rect.left;
      MAPy = event.clientY - rect.top;
      
      MAPx = Math.floor(x/75);
      MAPy = Math.floor(y/75);
      SELECTx = MAPx*75;
      SELECTy = MAPy*75;

      // マップの値をチェック
      if (MAPy >= 0 && MAPy < objectMap.length && MAPx >= 0 && MAPx < objectMap[MAPy].length) {NanigaOkoruKana(objectMap[MAPy][MAPx]);}
      ctx.clearRect(0, 0, 600, 600); 
      DrawBackground();
      ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   }
});

//z,xの動き
document.addEventListener('keydown', (event) => {
   if(AllowMove == 0 && dungeonnow == 1){
      if(event.key == 'Enter'||event.key == 'z'){
      if(SELECTx<0){SELECTx=0};if(SELECTy<0){SELECTy=0};if(SELECTx>525){SELECTx=525};if(SELECTy>525){SELECTy=525};
      MAPx = Math.floor(SELECTx / 75);
      MAPy = Math.floor(SELECTy / 75);

      // マップの値をチェック
      if(MAPy >= 0 && MAPy < objectMap.length && MAPx >= 0 && MAPx < objectMap[MAPy].length){NanigaOkoruKana(objectMap[MAPy][MAPx]);}
      ctx.clearRect(0, 0, 600, 600); 
      DrawBackground();
      ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
      }
   }
   if(event.key == 'x'&&document.getElementById('NowMap').style.display == 'block'){
      if(AllowMove == 0){
         AllowMove = 1;
         phase = 'null'
         window.setTimeout(inventoryOpen,200)
      }else{
         AllowMove = 0;
         phase = 1
         window.setTimeout(inventoryClose,200)
   }}
});

function NanigaOkoruKana(code){
   switch(code){
      case 1:
         GoNextFloor();
      break;
      case 2:
         EnemyAppear();
      break;
      case 3:
         AllowMove = 1;
         document.getElementById('NowMap').style.display = 'none';
         document.getElementById('EventArea').style.display = 'block';
         document.getElementById('EventArea').innerHTML = '<button id="CampRest" onclick="Camprest()"></button><br><button id="CampTrade" onclick="Camptrade()"></button>'
         log.textContent = '休憩できそうな場所を見つけた！';
         Camprestper = (Math.floor(Math.random() * 4)+3)/10;
         document.getElementById('CampRest').textContent = '朝まで休む(' + Camprestper*100 + '%回復)';//30のときはスキルカード強化みたいなやつあってもいいかも
         switch(Math.floor(Math.random() * 3)+1){
            case 1:
            if(Math.floor(Math.random() * 3)+1){
                  y = 10;document.getElementById('CampTrade').textContent = '放浪武器商人に話しかける';
            }else{  y = 1; document.getElementById('CampTrade').textContent = '武器商人に話しかける';}
            break;
            case 2: y = 2; document.getElementById('CampTrade').textContent = '防具取扱専門家に話しかける'; break;
            case 3: y = 3; document.getElementById('CampTrade').textContent = '道具屋24に話しかける'; break;
         }
      break;
      case 5:
         SkillShopOpen();//こっちはまあいいかな〜って
      break;
      case 6:
         if(!objectMap.some(row => row.includes(2))){OpenChest(1);}//マップ内に敵がいないなら〜っていうやつです
      break;
      case 7:
         if(!objectMap.some(row => row.includes(2))){OpenChest(2);}
      break;
      case 8:
         HopeButtonact();
      break;
      case 10:
         Candytake();
      break;
      case 11:
         Cookietake();
      break;
      case 12:
         ZomuEvent();
      break;
      case 13:
         BossEnemyAppear();
      break;
      case 14:
         if(!objectMap.some(row => row.includes(13))){NextStage();}
      break;
      case 16:
         if(!objectMap.some(row => row.includes(2))){OpenChest(1);}
      break;
      case 17:
         if(!objectMap.some(row => row.includes(2))){OpenChest(2);}
      break;
      case 19:
         ScorpionAct(1);
      break;
      case 20:
         CatusAct();
      break;
      case 21:
         OasisAct();
      break;
      case 22:
         //これは触れただけで何か起こるようにしよ
      break;
      case 23:
         ScorpionAct(2);
      break;
      case 24:
         UtusenEvent();
      break;
      case 25:
      break;
   }
}


function SuteFuri(code){
   if(sp < 1){return;}
   switch(code){
      case 'atk':  playerattack   += 5;   break;
      case 'def':  playerdefense   += 5;   break;
      case 'hp':   playermaxhealth += 20; playerhealth += 20;break;
      case 'mp':   playermaxmp    += 5;   break;
      case 'matk': playermattack   += 5;   break;
      case 'mdef': playermdefense  += 5;   break;
      case 'crla': playercritlate *= 100; playercritlate  += 2; playercritlate *= 0.01; break;
      case 'crdm': playercritdmg *= 10; playercritdmg += 1; playercritdmg *= 0.1;  break;
   }
   playercritlate *= 100;playercritlate = Math.floor(playercritlate);playercritlate *= 0.01;
   playercritdmg *= 10;playercritdmg = Math.floor(playercritdmg);playercritdmg *= 0.1;
   sp -= 1;
   inventoryOpen();
}

function GoNextFloor(){
   floor += 1;
   candybar = [];
      MAPx = backgroundMapnum[stage-1].split('.');
      MAPy = +MAPx[1]+1
      MAPx = +MAPx[0]
      backgroundMap = backgroundMaps[Math.floor(Math.random() * MAPy)+MAPx];
      MAPx = objectMapnum[stage-1].split('.');
      MAPy = +MAPx[1]+1
      MAPx = +MAPx[0]
      objectMap = objectMaps[Math.floor(Math.random() * MAPy)+MAPx];
      objectMap = JSON.parse(JSON.stringify(objectMaps[Math.floor(Math.random() * MAPy) + MAPx]));
      if(stage == 1){
         if(fun == 23 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[4];
            objectMap = objectMaps[6];
         }else if(fun <= 50 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[5];
            objectMap = objectMaps[7];
         };
      }else if(stage == 2){
         if(fun == 68 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[11];
            objectMap = objectMaps[14];
            objectMap = JSON.parse(JSON.stringify(objectMaps[Math.floor(Math.random() * MAPy) + MAPx]));
         }else if(fun <= 50 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[19];
            objectMap = objectMaps[23];
            objectMap = JSON.parse(JSON.stringify(objectMaps[Math.floor(Math.random() * MAPy) + MAPx]));
         };
      }else if(stage == 3){
         if(fun == 68 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[18];
            objectMap = objectMaps[22];
            objectMap = JSON.parse(JSON.stringify(objectMaps[Math.floor(Math.random() * MAPy) + MAPx]));
         }else if(fun <= 50 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[19];
            objectMap = objectMaps[23];
            objectMap = JSON.parse(JSON.stringify(objectMaps[Math.floor(Math.random() * MAPy) + MAPx]));
         };
      }
      if(stage == 1 && floor >= 10){SELECTx = 150;SELECTy = 525;backgroundMap = backgroundMaps[6];objectMap = objectMaps[8];}//創生黎明の原野
 else if(stage == 2 && floor >= 7 ){SELECTx = 150;SELECTy = 525;backgroundMap = backgroundMaps[13];objectMap = objectMaps[16];}//ガチェンレイゲスドゥールラート(昼)
 else if(stage == 3 && floor >= 3 ){SELECTx = 150;SELECTy = 525;backgroundMap = backgroundMaps[20];objectMap = objectMaps[24];}//ガチェンレイゲスドゥールラート(夜)

   ctx.clearRect(0, 0, 600, 600);
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
}
function NextStage(){
   floor = 0;
   candybar = [];
   switch(stage){
      case 1:
         ExitDungeon(1);
      break;
      case 2:
         stage = 3;
         GoNextFloor();
      break;
      case 3:
         ExitDungeon(2);
      break;
   }
}

//#endregion

//#region 変数達
let w,x,y,z;//こいつらは計算
let log = document.getElementById('log');

let fun = Math.floor(Math.random() * 100)+1;

//つぎはplayerのやつをs.~にして
//その次はbuffaddの動き見直して
//あとselectで選ぶようにして

//保存されるデータs
let username = 'user';
let rank = 1;
let rpt = 0;
let maxrpt = 100;let euro = 0;
let bankeuro = 0;
let playeratk = 0;
let playerdef = 0;
let playermatk = 0;
let playermdef = 0;
let playerhp = 0;
let playermagicpoint = 0;
let playercrla = 0;
let playercrdm = 0;
let playercrrs = 0;

//毎ダンジョン変わるデータs
let enemyhp = 0//この辺は固有値というか規定値。接頭辞によってこっから変動させたりできるようにする用
let enemyatk = 0;
let enemydef = 0;
let enemymatk = 0;
let enemymdef = 0;
let enemycrla = 0;
let enemycrdm = 0;
let enemycrrs = 0;

let sp = 1;//能力上昇(ダンジョン内有効)用
let rp = 0;//スキルツリー(永続)用

let bar = {
   cam:['player','player','player','player','enemy','enemy','enemy','enemy'],
   num:[1,2,3,4,1,2,3,4]
}
let numberofplayer = 1;
let numberofenemy = 2;
let humans = {
   players:{
      1:{
         execute:1,
         cam:'player',
         num:1,
         name:'player',
         level:1,
   
         speed:10,
         health:0,
         maxhealth:0,
         attack:0,
         defense:0,
         exp:0,
         power:1,
         shell:1,
         mp:10,
         maxmp:10,
         mattack:0,
         mdefense:0,
         critlate:0.03, //これが確率。会心率ってやつだね
         critdmg:3, //これが倍率。会心ダメージってやつだね
         critresist:0,//これは会心抵抗。ハルカ(正月)さんが下げるやつだね
   
         buffs:[],
   
         magic1:0,
         magic2:'heal',
         magic3:0,
   
         cool:100,
         ex:{
            id:'50%heal',
            name:'50%回復',
         },
         ns:{
            id:'5%heal',
            name:'5%回復',
         },
         ps:{
            id:0,
            name:'null'
         },
      },
      2:{
         execute:0,
         cam:'player',
         num:2,
         name:'friend1',
         level:1,
   
         speed:1,
         health:0,
         maxhealth:0,
         attack:0,
         defense:0,
         exp:0,
         power:1,
         shell:1,
         mp:0,
         maxmp:10,
         mattack:0,
         mdefense:0,
         critlate:0.03,
         critdmg:3,
         critresist:0,
   
         buffs:[],
   
         magic1:0,
         magic2:0,
         magic3:0,
   
         cool:100,
         ex:{
            id:0,
            name:'null',
         },
         ns:{
            id:0,
            name:'null',
         },
         ps:{
            id:0,
            name:'null'
         },
      },
      3:{
         execute:0,
         cam:'player',
         num:3,
         name:'friend2',
         level:1,
   
         speed:1,
         health:0,
         maxhealth:0,
         attack:0,
         defense:0,
         exp:0,
         power:1,
         shell:1,
         mp:0,
         maxmp:10,
         mattack:0,
         mdefense:0,
         critlate:0.03,
         critdmg:3,
         critresist:0,
   
         buffs:[],
   
         magic1:0,
         magic2:0,
         magic3:0,
   
         cool:100,
         ex:{
            id:0,
            name:'null',
         },
         ns:{
            id:0,
            name:'null',
         },
         ps:{
            id:0,
            name:'null'
         },
      },
      4:{
         execute:0,
         cam:'player',
         num:4,
         name:'friend3',
         level:1,
   
         speed:1,
         health:0,
         maxhealth:0,
         attack:0,
         defense:0,
         exp:0,
         power:1,
         shell:1,
         mp:0,
         maxmp:10,
         mattack:0,
         mdefense:0,
         critlate:0.03,
         critdmg:3,
         critresist:0,
   
         buffs:[],
   
         magic1:0,
         magic2:0,
         magic3:0,
   
         cool:100,
         ex:{
            id:0,
            name:'null',
         },
         ns:{
            id:0,
            name:'null',
         },
         ps:{
            id:0,
            name:'null'
         },
      }
   },
   enemies:{
      1:{
         execute:0,//存在の有無
         cam:'enemy',
         num:1,
         level:1,
         name:'†古書館の魔術師†',
         prefixe:'',
         ai:'supporter',

         speed:1,
         health:100,
         maxhealth:100,
         attack:10,
         defense:10,
         mattack:5,
         mdefense:5,
         critdmg:0.1,
         critlate:0.1,
         critresist:0.1,
         mp:0,
         maxmp:0,

         power:0,shell:0,
         buffs:[],
      },
      2:{
         execute:0,
         cam:'enemy',
         num:2,
         level:1,
         name:'†古書館の魔術師†',
         prefixe:'',
         ai:'supporter',

         speed:1,
         health:100,
         maxhealth:100,
         attack:10,
         defense:10,
         mattack:5,
         mdefense:5,
         critdmg:0.1,
         critlate:0.1,
         critresist:0.1,
         mp:0,
         maxmp:0,

         power:0,shell:0,
         buffs:[],
      },
      3:{
         execute:0,
         cam:'enemy',
         num:3,
         level:1,
         name:'†古書館の魔術師†',
         prefixe:'',
         ai:'supporter',

         speed:1,
         health:100,
         maxhealth:100,
         attack:10,
         defense:10,
         mattack:5,
         mdefense:5,
         critdmg:0.1,
         critlate:0.1,
         critresist:0.1,
         mp:0,
         maxmp:0,

         power:0,shell:0,
         buffs:[],
      },
      4:{
         execute:0,
         cam:'enemy',
         num:4,
         level:1,
         name:'†古書館の魔術師†',
         prefixe:'',
         ai:'supporter',

         speed:1,
         health:100,
         maxhealth:100,
         attack:10,
         defense:10,
         mattack:5,
         mdefense:5,
         critdmg:0.1,
         critlate:0.1,
         critresist:0.1,
         mp:0,
         maxmp:0,

         power:0,shell:0,
         buffs:[],
      }
   }
}
// in humans.players[me].buffs

let turn = 0;//今誰のターンか
let turncount = 0;//今のターン数

let phase = 0;//何中か


//0 = false,1 = true
let afknow = 0;
let dungeonnow = 0;
let bossbattlenow = 0;

let enemynames = ["彷徨わない亡霊", "地上の月兎", "悠々自適なクラス委員", "大胆不敵な問題児", "兎角のシルバージャグラー", "デスブリンガー・ナース",//草原
                  "ついに動いたサボテン","スフィンクスの残像","襲来セシ砂嵐","サソリ風ザリガニ","毒無しのガラガラヘビ","裏切りのアリジゴク",//昼砂漠
                  "ピンクな先輩", "ブルーな後輩", "過激派のハッカー", "反旗を翻したアンドロイド", "腐敗した落武者", "アスピリン中毒者",//夜砂漠
                "†古書館の魔術師†", "トラブルメーカーな天才少女","黒服","無邪気な夜の希望"];//学校(ここだけブルアカにしましょ)
const enemynamenum = ['0.5','6.5','12.5','18.3'];
let bossenemynames = ['purpleslime','steampumker','RailwayGun "Shemata"','joker']//RailwayGun "Shemata"...wwあ、列車砲シェマタね 対策委員会が壊そうとしてたやつ
let enemyprefixes = ['激昂','冷静沈着な','ギャンブラーな','守りが固い','心眼持ちの'];
let saydefeats = 0;
let nstimeout = 0;
let skillcooldown = 0

// buffadd(  ←これで検索かけて全部直すよ 頑張って....
let Buffs = {
   'powerup':{
      name:'powerup',
      lv:{
         1:1.25,
         2:1.5,
         3:2,
         4:2.5,
         5:3,
         6:4
      }
   },
   'shellup':{
      name:'shellup',
      lv:{
         1:1.25,
         2:1.5,
         3:2,
         4:2.5,
         5:3,
         6:4
      }
   },
   'luck':{
      name:'luck',
      lv:{
         1:5,
         2:3,
      }
   },
   'LetsThrow':{
      name:'LetsThrow',
      lv:{
         1:1,
      }
   },
   'gambling':{
      name:'gambling',
      lv:{
         1:1,
      }
   },
}

let Debuffs = {
   'powerdown':{
      name:'powerdown',
      lv:{
         1:0.25,
         2:0.5,
         3:0.75,
         4:0.8,
         5:0.9,
         6:0.95
      }
   },
   'shelldown':{
      name:'shelldown',
      lv:{
         1:0.25,
         2:0.5,
         3:0.75,
         4:0.8,
         5:0.9,
         6:0.95
      }
   },
   'poison':{
      name:'poison',
      lv:{
         1:0.05,
         2:0.1,
         3:0.2,
      }
   },
   'burn':{
      name:'burn',
      lv:{
         1:10,
         2:20,
         3:40,
      }
   },
   'freeze':{
      name:'freeze',
      lv:{
         1:3,//-
         2:5,//deep
         3:7,//etarnal
      }
   },
   'stan':{
      name:'stan',
      lv:{
         1:1,
      }
   },
   'skip':{
      name:'skip',
      lv:{
         1:1,
      }
   },
}

//#endregion
//#region 全道具です 
let Aspirin = {
   name:'アスピリン',
   id:'Aspirin',
   num:0,
   price:20
}
let Pablon = {
   name:'パブロン',
   id:'Pablon',
   num:0,
   price:40
}
let Trypsin = {
   name:'トリプシン',
   id:'Trypsin',
   num:0,
   price:60
}
let Lulu = {
   name:'ルル',
   id:'Lulu',
   num:0,
   price:80
}
let Potion={
   name:'ポーション',
   id:'Potion',
   num:3,
   price:100
};
let ThrowKnife={
   name:'投げナイフ',
   id:'ThrowKnife',
   num:0,
   price:20
};
let TrickyVariable={
   name:'トリッキーな変数',
   id:'TrickyVariable',
   num:0,
   price:40
};
let CoveringFire={
   name:'援護射撃',
   id:'CoveringFire',
   num:0,
   price:60
};
let BottleGrenade={
   name:'ボトルグレネード',
   id:'BottleGrenade',
   num:0,
   price:80
};
let Bomb={
   name:'爆弾',
   id:'Bomb',
   num:3,
   price:100
};
let Redcard={
   name:'赤のスキップ',
   id:'Redcard',
   num:3,
   price:35
};
let Bluecard={
   name:'青のリバース',
   id:'Bluecard',
   num:0,
   price:35
};
let Greencard={
   name:'緑のドロアル',
   id:'Greencard',
   num:0,
   price:35
};
let Blackcard={
   name:'黒のドロスー',
   id:'Blackcard',
   num:0,
   price:70
};

const weapons = {
   name:['拳','木の棒','木刀','竹刀','石ころ','大きな石','薄めの紙','カード','はさみ','ほんもののナイフ','ジェン・ソルテ','time on target','大博打','天邪鬼'],
   num:[0,1,3,5,10,20,40,1,'1~13',100,300,15,20,'10~1000',80],
  power:[0,1,3,5,10,20,40,1,0,100,300,15,200,0,800],
  price:[0,10,20,30,50,80,25,77,200,300]
}
const rareweapons = {
   name:['none','ジェン・ソルテ','time on target','大博打','天邪鬼'],
  price:[0,150,150,150,150]
}
const armors  = {
   name:['筋肉','マスク','薄い本','木の板','テッパン','鍋の蓋','厚めの本','ドア','扇風機','ペロロ様人形'],
   num:[0,0,1,5,10,15,20,25,30,50],
  price:[0,1,5,20,30,50,80,100,200,400]
}
const tools = {
  name:['none','アスピリン','パブロン','トリプシン','ルル','ポーション','投げナイフ','トリッキーな変数','援護射撃','ボトルグレネード','爆弾','赤のスキップ','青のリバース','緑のドロアル','黒のドロスー'],
 price:[20,40,60,80,100,20,40,60,80,100,35,35,35,70]
}
//#endregion

//#region 超シンプルで使いやすい子達
function tekiou(){
   let awase = 0;
   if(humans.players[1].execute == 1){
      awase = buffcheck('humans.players[1].buffs','humans.players[1].buffs');
      document.getElementById('player1').innerHTML = `
      <b>${humans.players[1].name}</b>　<i>Lv.${humans.players[1].level}</i><br>
      <span id="PlayerHealth">${humans.players[1].health}</span>/<span>${humans.players[1].maxhealth}</span><br>
      <span id="PlayerMP">${humans.players[1].mp}</span>/<span id="PlayerMaxMP">${humans.players[1].maxmp}</span><br>
      <span id="PlayerBuff">${awase[0].join('')}</span> <span id="PlayerDebuff">${awase[1].join('')}</span>`;
      humans.players[1].power = 1;humans.players[1].shell = 1;let karix = 0;
      if('powerup' in humans.players[1].buffs){karix = humans.players[1].buffs.powerup.num};
      if('powerdown' in humans.players[1].buffs){karix -= humans.players[1].buffs.powerdown.num};
      if(karix > 0){humans.players[1].power = Buffs.powerup.lv[karix]};if(karix < 0){humans.players[1].power = Debuffs.powerdown.lv[karix*-1]}
      if('shellup' in humans.players[1].buffs){karix = humans.players[1].buffs.shellup.num};
      if('shelldown' in humans.players[1].buffs){karix -= humans.players[1].buffs.shelldown.num};
      if(karix > 0){humans.players[1].shell = Buffs.shellup.lv[karix]};if(karix < 0){humans.players[1].shell = Debuffs.shelldown.lv[karix*-1]}
   }
   if(humans.players[2].execute == 1){
      awase = buffcheck('humans.players[2].buffs','humans.players[2].buffs');
      document.getElementById('player2').innerHTML = `
      <b>${humans.players[2].name}</b>　<i>Lv.${humans.players[2].level}</i><br>
      <span id="PlayerHealth">${humans.players[2].health}</span>/<span>${humans.players[2].maxhealth}</span><br>
      <span id="PlayerMP">${humans.players[2].mp}</span>/<span id="PlayerMaxMP">${humans.players[2].maxmp}</span><br>
      <span id="PlayerBuff">${awase[0].join('')}</span> <span id="PlayerDebuff">${awase[1].join('')}</span>`;
      humans.players[2].power = 1;humans.players[2].shell = 1;let karix = 0;
      if('powerup' in humans.players[2].buffs){karix = humans.players[2].buffs.powerup.num};
      if('powerdown' in humans.players[2].buffs){karix -= humans.players[2].buffs.powerdown.num};
      if(karix > 0){humans.players[2].power = Buffs.powerup.lv[karix]};if(karix < 0){humans.players[2].power = Debuffs.powerdown.lv[karix*-1]}
      if('shellup' in humans.players[2].buffs){karix = humans.players[2].buffs.shellup.num};
      if('shelldown' in humans.players[2].buffs){karix -= humans.players[2].buffs.shelldown.num};
      if(karix > 0){humans.players[2].shell = Buffs.shellup.lv[karix]};if(karix < 0){humans.players[2].shell = Debuffs.shelldown.lv[karix*-1]}
   }
   if(humans.players[3].execute == 1){
      awase = buffcheck('humans.players[3].buffs','humans.players[3].buffs');
      document.getElementById('player3').innerHTML = `
      <b>${humans.players[3].name}</b>　<i>Lv.${humans.players[3].level}</i><br>
      <span id="PlayerHealth">${humans.players[3].health}</span>/<span>${humans.players[3].maxhealth}</span><br>
      <span id="PlayerMP">${humans.players[3].mp}</span>/<span id="PlayerMaxMP">${humans.players[3].maxmp}</span><br>
      <span id="PlayerBuff">${awase[0].join('')}</span> <span id="PlayerDebuff">${awase[1].join('')}</span>`;
      humans.players[3].power = 1;humans.players[3].shell = 1;let karix = 0;
      if('powerup' in humans.players[3].buffs){karix = humans.players[3].buffs.powerup.num};
      if('powerdown' in humans.players[3].buffs){karix -= humans.players[3].buffs.powerdown.num};
      if(karix > 0){humans.players[3].power = Buffs.powerup.lv[karix]};if(karix < 0){humans.players[3].power = Debuffs.powerdown.lv[karix*-1]}
      if('shellup' in humans.players[3].buffs){karix = humans.players[3].buffs.shellup.num};
      if('shelldown' in humans.players[3].buffs){karix -= humans.players[3].buffs.shelldown.num};
      if(karix > 0){humans.players[3].shell = Buffs.shellup.lv[karix]};if(karix < 0){humans.players[3].shell = Debuffs.shelldown.lv[karix*-1]}
   }
   if(humans.players[4].execute == 1){
      awase = buffcheck('humans.players[4].buffs','humans.players[4].buffs');
      document.getElementById('player4').innerHTML = `
      <b>${humans.players[4].name}</b>　<i>Lv.${humans.players[4].level}</i><br>
      <span id="PlayerHealth">${humans.players[4].health}</span>/<span>${humans.players[4].maxhealth}</span><br>
      <span id="PlayerMP">${humans.players[4].mp}</span>/<span id="PlayerMaxMP">${humans.players[4].maxmp}</span><br>
      <span id="PlayerBuff">${awase[0].join('')}</span> <span id="PlayerDebuff">${awase[1].join('')}</span>`;
      humans.players[4].power = 1;humans.players[4].shell = 1;let karix = 0;
      if('powerup' in humans.players[4].buffs){karix = humans.players[4].buffs.powerup.num};
      if('powerdown' in humans.players[4].buffs){karix -= humans.players[4].buffs.powerdown.num};
      if(karix > 0){humans.players[4].power = Buffs.powerup.lv[karix]};if(karix < 0){humans.players[4].power = Debuffs.powerdown.lv[karix*-1]}
      if('shellup' in humans.players[4].buffs){karix = humans.players[4].buffs.shellup.num};
      if('shelldown' in humans.players[4].buffs){karix -= humans.players[4].buffs.shelldown.num};
      if(karix > 0){humans.players[4].shell = Buffs.shellup.lv[karix]};if(karix < 0){humans.players[4].shell = Debuffs.shelldown.lv[karix*-1]}
   }

   if(humans.enemies[1].execute == 1){
      awase = buffcheck('humans.enemies[1].buffs','humans.enemies[1].buffs');
      document.getElementById('enemy1').innerHTML = `<b id="EnemyName">${humans.enemies[1].name}</b>　<i id="EnemyLevel">Lv.${humans.enemies[1].level}</i><br>
      <span id="EnemyHealth">${humans.enemies[1].health}</span>/<span id="EnemyMaxHealth">${humans.enemies[1].maxhealth}</span><br>
      <span id="EnemyMP">${humans.enemies[1].mp}</span>/<span id="EnemyMaxMP">${humans.enemies[1].maxmp}</span><br>
      <span id="EnemyBuff">${awase[0].join('')}</span> <span id="EnemyDebuff">${awase[1].join('')}</span>`;
      humans.enemies[1].power = 1;humans.enemies[1].shell = 1;let karix = 0;
      if('powerup' in humans.enemies[1].buffs){karix = humans.enemies[1].buffs.powerup.num};
      if('powerdown' in humans.enemies[1].buffs){karix -= humans.enemies[1].buffs.powerdown.num};
      if(karix > 0){humans.enemies[1].power = Buffs.powerup.lv[karix]};if(karix < 0){humans.enemies[1].power = Debuffs.powerdown.lv[karix*-1]}
      if('shellup' in humans.enemies[1].buffs){karix = humans.enemies[1].buffs.shellup.num};
      if('shelldown' in humans.enemies[1].buffs){karix -= humans.enemies[1].buffs.shelldown.num};
      if(karix > 0){humans.enemies[1].shell = Buffs.shellup.lv[karix]};if(karix < 0){humans.enemies[1].shell = Debuffs.shelldown.lv[karix*-1]}
   }
   if(humans.enemies[2].execute == 1){
      awase = buffcheck('humans.enemies[2].buffs','humans.enemies[2].buffs');
      document.getElementById('enemy2').innerHTML = `
      <b id="EnemyName">${humans.enemies[2].name}</b>　<i id="EnemyLevel">Lv.${humans.enemies[2].level}</i><br>
      <span id="EnemyHealth">${humans.enemies[2].health}</span>/<span id="EnemyMaxHealth">${humans.enemies[2].maxhealth}</span><br>
      <span id="EnemyMP">${humans.enemies[2].mp}</span>/<span id="EnemyMaxMP">${humans.enemies[2].maxmp}</span><br>
      <span id="EnemyBuff">${awase[0].join('')}</span> <span id="EnemyDebuff">${awase[1].join('')}</span>`;
      humans.enemies[2].power = 1;humans.enemies[2].shell = 1;let karix = 0;
      if('powerup' in humans.enemies[2].buffs){karix = humans.enemies[2].buffs.powerup.num};
      if('powerdown' in humans.enemies[2].buffs){karix -= humans.enemies[2].buffs.powerdown.num};
      if(karix > 0){humans.enemies[2].power = Buffs.powerup.lv[karix]};if(karix < 0){humans.enemies[2].power = Debuffs.powerdown.lv[karix*-1]}
      if('shellup' in humans.enemies[2].buffs){karix = humans.enemies[2].buffs.shellup.num};
      if('shelldown' in humans.enemies[2].buffs){karix -= humans.enemies[2].buffs.shelldown.num};
      if(karix > 0){humans.enemies[2].shell = Buffs.shellup.lv[karix]};if(karix < 0){humans.enemies[2].shell = Debuffs.shelldown.lv[karix*-1]}
   }
   if(humans.enemies[3].execute == 1){
      awase = buffcheck('humans.enemies[3].buffs','humans.enemies[3].buffs');
      document.getElementById('enemy3').innerHTML = `
      <b id="EnemyName">${humans.enemies[3].name}</b>　<i id="EnemyLevel">Lv.${humans.enemies[3].level}</i><br>
      <span id="EnemyHealth">${humans.enemies[3].health}</span>/<span id="EnemyMaxHealth">${humans.enemies[3].maxhealth}</span><br>
      <span id="EnemyMP">${humans.enemies[3].mp}</span>/<span id="EnemyMaxMP">${humans.enemies[3].maxmp}</span><br>
      <span id="EnemyBuff">${awase[0].join('')}</span> <span id="EnemyDebuff">${awase[1].join('')}</span>`;
      humans.enemies[3].power = 1;humans.enemies[3].shell = 1;let karix = 0;
      if('powerup' in humans.enemies[3].buffs){karix = humans.enemies[3].buffs.powerup.num};
      if('powerdown' in humans.enemies[3].buffs){karix -= humans.enemies[3].buffs.powerdown.num};
      if(karix > 0){humans.enemies[3].power = Buffs.powerup.lv[karix]};if(karix < 0){humans.enemies[3].power = Debuffs.powerdown.lv[karix*-1]}
      if('shellup' in humans.enemies[3].buffs){karix = humans.enemies[3].buffs.shellup.num};
      if('shelldown' in humans.enemies[3].buffs){karix -= humans.enemies[3].buffs.shelldown.num};
      if(karix > 0){humans.enemies[3].shell = Buffs.shellup.lv[karix]};if(karix < 0){humans.enemies[3].shell = Debuffs.shelldown.lv[karix*-1]}
   }
   if(humans.enemies[4].execute == 1){
      awase = buffcheck('humans.enemies[4].buffs','humans.enemies[4].buffs');
      document.getElementById('enemy4').innerHTML = `
      <b id="EnemyName">${humans.enemies[4].name}</b>　<i id="EnemyLevel">Lv.${humans.enemies[4].level}</i><br>
      <span id="EnemyHealth">${humans.enemies[4].health}</span>/<span id="EnemyMaxHealth">${humans.enemies[4].maxhealth}</span><br>
      <span id="EnemyMP">${humans.enemies[4].mp}</span>/<span id="EnemyMaxMP">${humans.enemies[4].maxmp}</span><br>
      <span id="EnemyBuff">${awase[0].join('')}</span> <span id="EnemyDebuff">${awase[1].join('')}</span>`;
      humans.enemies[4].power = 1;humans.enemies[4].shell = 1;let karix = 0;
      if('powerup' in humans.enemies[4].buffs){karix = humans.enemies[4].buffs.powerup.num};
      if('powerdown' in humans.enemies[4].buffs){karix -= humans.enemies[4].buffs.powerdown.num};
      if(karix > 0){humans.enemies[4].power = Buffs.powerup.lv[karix]};if(karix < 0){humans.enemies[4].power = Debuffs.powerdown.lv[karix*-1]}
      if('shellup' in humans.enemies[4].buffs){karix = humans.enemies[4].buffs.shellup.num};
      if('shelldown' in humans.enemies[4].buffs){karix -= humans.enemies[4].buffs.shelldown.num};
      if(karix > 0){humans.enemies[4].shell = Buffs.shellup.lv[karix]};if(karix < 0){humans.enemies[4].shell = Debuffs.shelldown.lv[karix*-1]}   
   }

   if(humans.turret?.execute??0 == 1){
      document.getElementById('PlayerTurret').innerHTML = `
      <b>friend3</b>x${humans.players.turret.num}<br>
      <span>${humans.players.turret.health}</span>/<span>${humans.players.turret.maxhealth}</span><br>
      `;
   }
   



   function buffcheck(target1,target2){
      let apply = [];
      eval(target1).forEach(nanka => {apply.push(`<img src="assets/buffs/${nanka}.png" width="18" height="18"> `)});

      // Object.keys()を使ってforEachで繰り返す
      let t1 = eval(target1)
      Object.keys(t1).forEach(key => {
         let name = t1[key].name;
         apply.push(`<img src="assets/buffs/${name}.png" width="18" height="18">`);
      });
      let b = apply;
      apply = []
      let t2 = eval(target2)
      Object.keys(t2).forEach(key => {
         let name = t2[key].name;
         apply.push(`<img src="assets/buffs/${name}.png" width="18" height="18">`);
      });
      let db = apply;
      let awase = [b,db];
      return awase
   }

   save();

}
function save(){
   updateUI();
   const newData = {
      euro: euro,
      bankeuro: bankeuro,
      rank: rank,
      rpt: rpt,
      rp: rp,
      clearedmainquest: clearedmainquest,
      cleareddailyquest: cleareddailyquest,
      playerattack: playeratk,
      playerdefense: playerdef,
      playermattack: playermatk,
      playermdefense: playermdef,
      playerhealth: playerhp,
      playermp: playermagicpoint,
      playercritlate: playercrla,
      playercritdmg: playercrdm,
      playercritresist: playercrrs,
   };
   usersRef.update(newData)
}

function load(){
   usersRef.once('value')
      .then((snapshot) => {snapshot.forEach((childSnapshot) => {userData = childSnapshot.val();})})
}

function delay(ms){return new Promise(resolve=>setTimeout(resolve,ms));}

async function NicoNicoText(mes){
   const newDiv = document.createElement('div');
   newDiv.textContent = mes;
   newDiv.style = `
   position: absolute;
   top: ${Math.random()*100}vh;
   right: 0;
   background-color: rgba(228, 249, 255, 0.563);
   color: #000000;
   font-size: 20px;
   `
   document.getElementById('Gamezone').appendChild(newDiv);
   let speed = Math.random()*100+1;
   //let speed = mes.toString().length*2 
   for(let i = 0; window.innerWidth > i*speed; i++){
       let val = i*speed;
       newDiv.style.right = `${val}px`
       await delay(50);
   }
   newDiv.remove();
}

function DesideEnemyName(target){
   humans.enemies[target].prefixe = 0;
   let ENEMYarray = enemynamenum[stage-1].split('.');
   let ENEMY1 = +ENEMYarray[1]+1
   let ENEMY2 = +ENEMYarray[0]
   humans.enemies[target].name = enemynames[Math.floor(Math.random() * ENEMY1)+ENEMY2]; // 敵の名前を決めます
   if(Math.floor(Math.random() * 5) == 0){humans.enemies[target].prefixe = enemyprefixes[Math.floor(Math.random() * enemyprefixes.length)]};
   
   humans.enemies[target].attack = enemyatk;//敵の能力を決めます
   humans.enemies[target].defense = enemydef;
   humans.enemies[target].maxhealth = enemyhp; humans.enemies[target].health = humans.enemies[target].health;
   humans.enemies[target].critlate = enemycrla;
   humans.enemies[target].critdmg = enemycrdm;
   humans.enemies[target].critresist = enemycrrs;
   switch(humans.enemies[target].prefixe){//接頭辞ごとの能力
      case '激昂':
         humans.enemies[target].attack  = Math.floor(enemyatk*1.5);
         humans.enemies[target].defense = Math.floor(enemydef*0.75);
         humans.enemies[target].critlate = 0.05
         break;
      case '冷静沈着な':
         humans.enemies[target].defense = Math.floor(enemydef*2);
         humans.enemies[target].attack  = Math.floor(enemyatk*0.75);
         break;
      case 'ギャンブラーな':
         humans.enemies[target].critlate = enemycrla + 0.3;
         humans.enemies[target].maxhealth = Math.floor(enemyhp*0.5);
      break;
      case '守りが固い':
         humans.enemies[target].critresist += 0.5;//会心半減ね
         humans.enemies[target].health = Math.floor(enemyhp*1.25);
         humans.enemies[target].defense = Math.floor(enemydef*1.5);
         humans.enemies[target].attack = Math.floor(enemyatk*0.3);
      break;
      case '心眼持ちの':
         humans.enemies[target].critlate = 1;//確定会心人間(抵抗無視の場合)
         humans.enemies[target].critdmg = 1.2;//さすがに弱め
         humans.enemies[target].attack = Math.floor(enemyatk*0.3);
         humans.enemies[target].maxhealth = Math.floor(enemyhp*0.5);
      break;
   }
   humans.enemies[target].health = humans.enemies[target].maxhealth;
   return humans.enemies[target].name;
}

//async function errorcheck(){if(playerattack==Infinity||playerdefense==Infinity||playerhealth==Infinity||playermaxhealth==Infinity||playerlevel==Infinity||playerpower==Infinity||playermaxmp==Infinity||playershell==Infinity||isNaN(playerhealth)||isNaN(playermaxhealth)||isNaN(playerattack)||isNaN(playerdefense)||isNaN(playermaxmp)||isNaN(playerpower)||isNaN(playershell)||isNaN(playerlevel)||Potion.num==Infinity||euro==Infinity||Bomb.num==Infinity||Redcard.num==Infinity||isNaN(Potion.num)||isNaN(euro)||isNaN(Bomb.num)||isNaN(Redcard.num)){log.textContent='error100が発生しました。';awaitdelay(1000);log.textContent='リブートを開始します。';await delay(1000);open('about:blank','_self').close();}}//おっとこれは...?}
//#endregion

//#region Inventory
let InventoryPage = 1;
function inventoryOpen(){
   AllowMove = 1;
   localStorage.setItem('num', humans.players[InventoryPage].level);
   document.getElementById('InventoryArea').style.display = 'flex';
   document.getElementById('InventoryArea').innerHTML = `
      <div id="Status">${humans.players[InventoryPage].name}<br>Level: ${humans.players[InventoryPage].level}<br>exP: ${humans.players[InventoryPage].exp}<br>Health: ${humans.players[InventoryPage].health}/${humans.players[InventoryPage].maxhealth}<br>MP: ${humans.players[InventoryPage].mp}/${humans.players[InventoryPage].maxmp}<br>attack: ${humans.players[InventoryPage].attack}<br>defense: ${humans.players[InventoryPage].defense}<br>crit-late: ${humans.players[InventoryPage].critlate}<br>crit-dmg: ${humans.players[InventoryPage].critdmg}<br>crit-resist: ${humans.players[InventoryPage].critresist}</div>　
      <div id="Sutefuri">magics<br>1:${humans.players[InventoryPage].magic1} <button class="button" onclick="MagicChange(1)">change</button><br>2:${humans.players[InventoryPage].magic2} <button class="button" onclick="MagicChange(2)">change</button><br>3:${humans.players[InventoryPage].magic3} <button class="button" onclick="MagicChange(3)">change</button><br><iframe src="resources/appearmagics.html" style="width: 90%; height: 100px;"></iframe><br><div id="MagicChangePlace"></div><br><br><span id="Appearsp">${humans.players[InventoryPage].sp} pt</span><br><button class="button" onclick="SuteFuri('atk')">attack</button><br><button class="button" onclick="SuteFuri('def')">defense</button><br><button class="button" onclick="SuteFuri('hp')">maxhealth</button><br><button class="button" onclick="SuteFuri('mp')">magicpt</button><br><button class="button" onclick="SuteFuri('crla')">clit-late</button><br><button class="button" onclick="SuteFuri('crdm')">clit-dmg</button></div>
   `;
   let nextpage = addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
         InventoryPage++;if(InventoryPage>4){InventoryPage=1;}
         inventoryOpen();
         nextpage.remove();
      }
      if (event.key === 'ArrowLeft') {
         InventoryPage--;if(InventoryPage<1){InventoryPage=4;}
         inventoryOpen();
         nextpage.remove();
      }
   });
}
// <div id="Equip">武器:${weapons.name[equipweapon]}(+${weapons.num[equipweapon]})<br>装甲:${armors.name[equiparmor]}(+${armors.num[equiparmor]})<br>${equiptool1.name}:${equiptool1.num}<br>${equiptool2.name}:${equiptool2.num}<br>${equiptool3.name}:${equiptool3.num}<br><br>ex:${playerex.name}<br>ns:${playerns.name}<br>ps:${playerps.name}</div>　
function inventoryClose(){
   AllowMove = 0;
   document.getElementById('InventoryArea').style.display = 'none';
   log.textContent = '';
};
//#endregion
//#region Magics
//const Magic = ['heal','power','shell','poison','thunder','fire','healer than','luck','ell thunder','more power','more shell','deadly poison','giga thunder','giga fire','the healest','luckgreat','Thoron','random',]
const Magics = {
   'heal':{
      name:'heal',
      mp:4,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はhealを唱えた!';await delay(1000);
         x = Math.round(humans[tcam][target].maxhealth * 0.2);
         if((x + humans[tcam][target].health) > humans[tcam][target].maxhealth){x = humans[tcam][target].maxhealth - humans[tcam][target].health;};
         humans[tcam][target].health += x;
         log.textContent = `体力が${x}回復した!`;tekiou();
         window.setTimeout(NextTurnis, 1000)
      }
   },
   'power':{
      name:'power',
      mp:5,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はpowerを唱えた!';await delay(1000);
         buffadd('humans'+[tcam]+[target]+'.buffs','powerup',3,1);
         NextTurnis(me);
      }
   },
   'shell':{
      name:'shell',
      mp:5,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はshellを唱えた!';await delay(1000);
         buffadd('humans.'+[tcam]+[target]+'.buffs','shellup',3,1);
         NextTurnis(me);
      }
   },
   'poison':{
      name:'poison',
      mp:7,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はpoisonを唱えた!';await delay(1000);
         buffadd(`humans[${tcam}][${target}].buffs`,'poison',4,1);await delay(1000);
         NextTurnis(me);
      }
   },
   'thunder':{
      name:'thunder',
      mp:3,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はthunderを唱えた!!';await delay(1000);
         await humandamaged(tcam,'mg',me,target,0.7,4);//雷
         NextTurnis(me)
      }
   },
   'fire':{
      name:'fire',
      mp:4,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         log.textContent = `${humans[cam].name}はfireを唱えた！`;
         await delay(1000);
         await humandamaged(tcam,'mg',me,target,1.1,2);//火
         buffadd(`humans.enemies${target}.buffs`,'burn',2,1);
         NextTurnis(me)
      }
   },
   'healerthan':{
      name:'healer than',
      mp:8,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はhealer thanを唱えた!';await delay(1000);
         x = Math.round(humans[tcam][target].maxhealth * 0.4);
         if((x + humans[tcam][target].health) > humans[tcam][target].maxhealth){x = humans[tcam][target].maxhealth - humans[tcam][target].health;};
         humans[tcam][target].health += x;
         log.textContent = `体力が${x}回復した!`;tekiou();
         NextTurnis(me)
      }
   },
   'luck':{
      name:'luck',
      mp:4,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         buffadd(`humans[${tcam}][${target}].buffs`,'luck',4,1);
         log.textContent = humans[cam][me].name + 'はluckを唱えた!';
         NextTurnis(me)
      }
   },
   'ellthunder':{
      name:'ellthunder',
      mp:8,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はellthunderを唱えた!';await delay(1000);
         humandamaged(tcam,'mg',me,target,1.2,4);//雷
         NextTurnis(me)
      }
   },
   'morepower':{
      name:'more power',
      mp:8,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         buffadd(`humans.[${tcam}][${target}].buffs`,'powerup',3,2)
         log.textContent = humans[cam][me].name + 'はmore powerを唱えた!';
         NextTurnis(me)
      }
   },
   'moreshell':{
      name:'more shell',
      mp:8,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         buffadd(`humans.[${tcam}][${target}].buffs`,'shellup',3,2)
         log.textContent = humans[cam][me].name + 'はmore shellを唱えた!';
         NextTurnis(me)
      }
   },
   'deadlypoison':{
      name:'deadly poison',
      mp:12,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         buffadd(`humans.[${tcam}][${target}].buffs`,'poison',5,2);
         log.textContent = humans[cam][me].name + 'はdeadly poisonを唱えた!';
         NextTurnis(me)
      }
   },
   'gigafire':{
      name:'giga fire',
      mp:10,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はgiga fireを唱えた!';
         await delay(1000);
         await humandamaged(tcam,'mg',me,target,2.3,2);//火
         buffadd(`humans[${tcam}][${target}].buffs`,'burn',2,2);
         NextTurnis(me)
      }
   },
   'the healest':{
      name:'the healest',
      mp:12,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はthe healestを唱えた!!!';await delay(1000);
         x = Math.round(humans[tcam][target].maxhealth * 0.6);
         if((x + humans[tcam][target].health) > humans[tcam][target].maxhealth){x = humans[tcam][target].maxhealth - humans[tcam][target].health;};
         humans[tcam][target].health += x;
         log.textContent = `体力が${x}回復した!`;tekiou();
         NextTurnis(me)
      }
   },
   'luckgreat':{
      name:'luckgreat',
      mp:12,
      lv:1,
      tcam:'players',
      process:function(cam,tcam,me,target){
         buffadd(`humans[${tcam}][${target}].buffs`,'luck',5,2);
         log.textContent = humans[cam][me].name + 'はluckgreatを唱えた!';
         NextTurnis(me)
      }
   },
   'thoron':{
      name:'Thoron',
      mp:12,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         log.textContent = 'トロン！！！';await delay(1000);//byルフレ
         await humandamaged(tcam,'mg',me,target,3.6,4);//雷
         NextTurnis(me)
      }
   },
   'merazoma':{
      name:'メラゾーマ',
      mp:12,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はメラゾーマを唱えた!';
         await delay(1000);
         await humandamaged(tcam,'mg',me,target,3.5,4);//雷
         buffadd(`humans[${tcam}][${target}].buffs`,'burn',3,2);
         NextTurnis(me)
      }
   },
   'random':{
      name:'Random',
      mp:12,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         log.textContent = 'randomを唱えた.......';
         await delay(1000);
         x = Magics.map(a => a.process,a => a.name);
         y = Math.floor(Math.random() * x[0].length);
         log.textContent = x[1][y]+'が出た！';
         await delay(1000);
         x[0][y](cam,me,target);
      }
   },

   
}
function MagicChange(num){document.getElementById('MagicChangePlace').innerHTML = `<input type="text" size="10" id="MagicChangeInput"></input><button class="button" onclick="MagicChangeDecide(${num})">Go</button>`}
function MagicChangeDecide(num){
   y = +document.getElementById('MagicChangeInput').value;
   document.getElementById('MagicChangePlace').innerHTML = '';
   y = Magics[y-1];
   let code = Math.floor((humans.players[InventoryPage].level+2)/3);
   code = Magics.slice(0, code);
   if(code.includes(y)){
   switch(num){
      case 1:humans.players[InventoryPage].magic1 = y;break;
      case 2:humans.players[InventoryPage].magic2 = y;break;
      case 3:humans.players[InventoryPage].magic3 = y;break;
   }
   log.textContent = y+'を覚えた！';
   }else{
      log.textContent = 'error';
   }
   inventoryOpen();
}
//#endregion
//#region Notice
let noticenow = 0;
function OpenNotice(){
   if(noticenow == 0){
      noticenow = 1;
      document.getElementById('Notice-page').style.display = 'block';
      document.getElementById('Notice-page').innerHTML = '<iframe src="resources/notice.html" width="100%" height="100%" frameborder="0"></iframe>';
   }else{
      noticenow = 0;
      document.getElementById('Notice-page').style.display = 'none';
      document.getElementById('Notice-page').innerHTML = '';
   }
}
//#endregion
//#region Questの動き
const quests = {
   main:[
      {
         id: 1,
         description: "このゲームを見つけてくれてありがとう！！",
         rewards: 200,
         type: 'if',
         num: 1,
         nom: 1,
      },
      {
         id: 1,
         description: "ダンジョンを1回クリアせよ",
         rewards: 150,
         type: 'd.c.',//dungeon clearの略 ダ・カーボじゃないぞ☆
         num: 0,
         nom: 1,
      },
      {
         id: 1,
         description: "武器を装備せよ",
         rewards: 80,
         type: 'e.w.',
         num: 0,
         nom: 1,
      },
      {
         id: 1,
         description: "敵を10体倒せ",
         rewards: 120,
         type: 'k.',
         num: 0,
         nom: 10,
      },
      {
         id: 1,
         description: "ボスを1体倒せ",
         rewards: 150,
         type: 'k.b.',//kill boss
         num: 0,
         nom: 1,
      }
   ],
   daily:[
      {
         id: 1,
         description: "ボスを1体倒す",
         rewards: 20,
         type: 'k.b',
         num: 0,
         nom: 1,
      },
      {
         id: 1,
         description: "敵を3体倒す",
         rewards: 20,
         type: 'k.',
         num: 0,
         nom: 3,
      },
      {
         id: 1,
         description: "敵を5体倒す",
         rewards: 20,
         type: 'k.',
         num: 0,
         nom: 5,
      },
      {
         id: 1,
         description: "敵を7体倒す",
         rewards: 20,
         type: 'k.',
         num: 0,
         nom: 7,
      },
      {
         id: 1,
         description: "ダンジョンを1回クリアする",
         rewards: 20,
         type: 'd.c.',
         num: 0,
         nom: 1,
      }
   ]
}
let quest = {
   main:{},
   daily:[
       {},
       {},
       {},
       {},
       {},
   ]
};
let clearedmainquest = 0;
let cleareddailyquest= 0;





function MakeNewQuest(code){
   quest.main = quests.main[clearedmainquest];

   //クエストのリストを更新
   const waku = document.getElementById('quest-list');
   waku.innerHTML = '';
   const br = document.createElement('br');
   //main
   const mq = document.createElement('div');
   mq.className = 'quest-main';
   mq.innerHTML = `
      Main:${quest.main.description}
      <br>
      ${quest.main.rewards}€  ${quest.main.num}/${quest.main.nom}<br>
      <button class="button"onclick="ClearedMainQuest('M')">受け取り</button>`
   waku.appendChild(mq);
   waku.appendChild(br);
   waku.appendChild(br);

   //daily
   for (let i = 0; i < quest.daily.length; i++){
      const dq = document.createElement('div');
      dq.className = 'quest-daily';
      dq.innerHTML = `
         ${quest.daily[i].id}:${quest.daily[i].description}<br>
         ${quest.daily[i].rewards}€  ${quest.daily[i].num}/${quest.daily[i].nom}<br>
         <button class="button"onclick="ClearedMainQuest('${i}')">受け取り</button>`//mainが2以上になったら()のとこD1にして
      waku.appendChild(dq);
      waku.appendChild(br);
   }
}

function ClearedMainQuest(code){
   if(code == 'M'&&quest.main.num == quest.main.nom){
      euro += quest.main.rewards;
      rpt += 20;
      clearedmainquest += 1;
      MakeNewQuest('x');
   }
   switch(code){
      case 0:
         if(quest.daily[0].num == quest.daily[0].nom){
         euro += quest.daily[0].rewards;
         quest.daily[0].id = 0;
         quest.daily[0].description = 'end';
         quest.daily[0].rewards = 0;
         quest.daily[0].type = '';
         quest.daily[0].num = 0;
         quest.daily[0].nom = 0;
         cleareddailyquest += 1;
         }
         break;
      case 1:
         if(quest.daily[1].num == quest.daily[1].nom){
         euro += quest.daily[1].rewards;
         quest.daily[1].id = 0;
         quest.daily[1].description = 'end';
         quest.daily[1].rewards = 0;
         quest.daily[1].type = '';
         quest.daily[1].num = 0;
         quest.daily[1].nom = 0;
         cleareddailyquest += 1;
         }
         break;
      case 2:
         if(quest.daily[2].num == quest.daily[2].nom){
         euro += quest.daily[2].rewards;
         quest.daily[2].id = 0;
         quest.daily[2].description = 'end';
         quest.daily[2].rewards = 0;
         quest.daily[2].type = '';
         quest.daily[2].num = 0;
         quest.daily[2].nom = 0;
         cleareddailyquest += 1;
         }
         break;
      case 3:
         if(quest.daily[3].num == quest.daily[3].nom){            
         euro += quest.daily[3].rewards;
         quest.daily[3].id = 0;
         quest.daily[3].description = 'end';
         quest.daily[3].rewards = 0;
         quest.daily[3].type = '';
         quest.daily[3].num = 0;
         quest.daily[3].nom = 0;
         cleareddailyquest += 1;
         }
         break;
      case 4:
         if(quest.daily[4].num == quest.daily[4].nom){
         euro += quest.daily[4].rewards;
         quest.daily[4].id = 0;
         quest.daily[4].description = 'end';
         quest.daily[4].rewards = 0;
         quest.daily[4].type = '';
         quest.daily[4].num = 0;
         quest.daily[4].nom = 0;
         cleareddailyquest += 1;
         }
         break;
   }
   save();
}
//#endregion
//#region buffの動き
function bufftekiou(){
   //今は無き、やで
};

function buffadd(array,buff,time,num){//誰のバフ/デバフか,バフ/デバフの名前,効果時間,効果量
   console.log(array,buff,time,num??0);
   let bx = eval(array);
   let btime = time??1;if(bx[buff]&&bx[buff].num == num){btime += bx[buff].time;};//効果量が同じなら足す形に
   bx[buff] = {
      type: Buffs.includes(buff) ? 'buff' : Debuffs.includes(buff) ? 'debuff' : 'unknown',
      name: buff,
      time: btime,
      num: num, 
   }
   tekiou();
}
function buffremove(array,buff){
   //誰のバフ/デバフか,バフ/デバフの名前
   let bx = eval(array);
   delete bx[buff];
   tekiou();
}
function buffclear(array){
   let bx = eval(array + 'time');
   bx = {};
   tekiou()
}
//#endregion

//#region ゲーム開始時ログインの動き、チャットのあれこれ - - - - - - - - - - -  - - -  - - -  - - -  - - -  - - -  - - -  - - -
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
// Firebaseの初期化
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
let chatroom = 1;
let messagesRef = database.ref('forrpg/rooms/'+chatroom+'/messages');
let usersRef;
let userData;

function GameStart(){

   document.getElementById('GameArea').innerHTML = `
   <div class="login-container">
      <form class="login-form" id="login-form">
         <input type="text" id="username" placeholder="ユーザー名" required>
         <input type="password" id="password" placeholder="パスワード" required>
         <button type="submit">ログイン</button>
         <div id="login-error" style="color: red; display: none;">パスワードが間違っています。</div>
      </form>
   </div>
   `
   
   document.getElementById('GameArea').style.display = 'block';


   document.getElementById('login-form').addEventListener('submit', function(event){
      const loginForm = document.getElementById('login-form');
      const loginError = document.getElementById('login-error');
      const chatContainer = document.getElementById('chat-container');

      event.preventDefault();
      username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      usersRef = database.ref('users/'+username+'/forrpg');

      // データベースでユーザーが存在するか確認
      usersRef.once('value').then(function(snapshot){
         if(snapshot.exists()){
            usersRef.update({
               status: 'online'
            });

            userData = snapshot.val();
            if(userData.password === password){
               document.getElementById('login-form').style.display = 'none';
               document.getElementById('ChatTab').style.display = 'block';
               chatContainer.style.display = 'flex';
               startChat(); // チャット画面の初期化
               document.getElementById('room-select').style.display = 'block';
               document.getElementById('ChatTab').style.display = 'none';

               AllowMove = 1;
               document.getElementById('GameArea').innerHTML = `
               <span>turn:</span><span id="TurnCount">0</span><br>
               <div id="enemies">
               <div id="enemy1" class="enemy">
                  <b id="EnemyName">†古書館の魔術師†</b>   <i id="EnemyLevel">Lv.24</i><br>
                  <span id="EnemyHealth">100</span>/<span id="EnemyMaxHealth">100</span><br>
                  <span id="EnemyMP">20</span>/<span id="EnemyMaxMP">20</span><br>
                  <span id="EnemyBuff"></span> <span id="EnemyDebuff"></span>
               </div>
               <div id="enemy2" class="enemy">
                  <b id="EnemyName">読書マニアな司書</b>   <i id="EnemyLevel">Lv.22</i><br>
                  <span id="EnemyHealth">100</span>/<span id="EnemyMaxHealth">100</span><br>
                  <span id="Ene myMP">20</span>/<span id="EnemyMaxMP">20</span><br>
                  <span id="EnemyBuff"></span> <span id="EnemyDebuff"></span>
               </div>  
               <div id="enemy3" class="enemy">
                  <b id="EnemyName">忍び寄るナース</b>   <i id="EnemyLevel">Lv.23</i><br>
                  <span id="EnemyHealth">100</span>/<span id="EnemyMaxHealth">100</span><br>
                  <span id="EnemyMP">20</span>/<span id="EnemyMaxMP">20</span><br>
                  <span id="EnemyBuff"></span> <span id="EnemyDebuff"></span>
               </div>
               <div id="enemy4" class="enemy">
                  <b id="EnemyName">「救護」のプロ</b>   <i id="EnemyLevel">Lv.24</i><br>
                  <span id="EnemyHealth">100</span>/<span id="EnemyMaxHealth">100</span><br>
                  <span id="EnemyMP">20</span>/<span id="EnemyMaxMP">20</span><br>
                  <span id="EnemyBuff"></span> <span id="EnemyDebuff"></span>
               </div>
               </div>
               <br><br>

               <div id="players">
               <div id="player1" class="player">
                  <b>mechanic</b>   <i>Lv.23</i><br>
                  <span id="PlayerHealth">100</span>/<span>100</span><br>
                  <span id="PlayerMP">0</span>/<span id="PlayerMaxMP">0</span><br>
                  <span id="PlayerBuff"></span> <span id="PlayerDebuff"></span>
               </div>
               <div id="player2" class="player">
                  <b>friend1</b>   <i>Lv.23</i><br>
                  <span id="PlayerHealth">100</span>/<span>100</span><br>
                  <span id="PlayerMP">0</span>/<span id="PlayerMaxMP">0</span><br>
                  <span id="PlayerBuff"></span> <span id="PlayerDebuff"></span>
               </div>
               <div id="player3" class="player">
                  <b>friend2</b>   <i>Lv.23</i><br>
                  <span id="PlayerHealth">100</span>/<span>100</span><br>
                  <span id="PlayerMP">0</span>/<span id="PlayerMaxMP">0</span><br>
                  <span id="PlayerBuff"></span> <span id="PlayerDebuff"></span>
               </div>
               <div id="player4" class="player">
                  <b>friend3</b>   <i>Lv.23</i><br>
                  <span id="PlayerHealth">100</span>/<span>100</span><br>
                  <span id="PlayerMP">0</span>/<span id="PlayerMaxMP">0</span><br>
                  <span id="PlayerBuff"></span> <span id="PlayerDebuff"></span>
               </div>
               </div><br><br><br>
               <button class="button" id="select1" onclick="select1()">attack</button>  <button class="button" id="select2" onclick="select2()">magic</button>  <button class="button" id="select3" onclick="select3()">tools</button>  <button class="button" id="back" onclick="back()">pass</button><br>
               <span id="Skillbutton"><button class="button" id="Skill1" onclick="Skill1()">skill</button></span>
               `
               document.getElementById('GameArea').style.display = 'none';
               document.getElementById('EventArea').style.display = 'none';
               document.getElementById('NowMap').style.display = 'none';

               // データを取得する関数)
               usersRef.once('value')
                  .then((snapshot) => {
                     snapshot.forEach((childSnapshot) => {
                        userData = childSnapshot.val();
                        if(userData.euro === null){
                           euro = 0;
                           bankeuro = 0;
                           rank = 1;
                           rpt = 0;
                           rp = 0;
                           clearedmainquest = 0;
                           cleareddailyquest = 0;
                           playeratk = 20;
                           playerdef = 0;
                           playermatk = 10;
                           playermdef = 0;
                           playerhp = 100;
                           playermagicpoint = 50;
                           playercrla = 0.03;
                           playercrdm = 1.5;
                           playercrrs = 0;
                           Potion.num = 2; Bomb.num = 2; Redcard.num = 2;
                           maxrpt = 100;
                        }
                        euro = userData.euro??0;
                        bankeuro = userData.bankeuro??0;
                        rank = userData.rank??1;
                        rpt = userData.rpt??0;
                        rp = userData.rp??0;
                        clearedmainquest = userData.clearedmainquest??0;
                        cleareddailyquest = userData.cleareddailyquest??0;
                        playerhp = userData.playerhealth??0;
                        playeratk = userData.playerattack??20;
                        playerdef = userData.playerdefense??0;
                        playermatk = userData.playermattack??10;
                        playermdef = userData.playermdefense??0;
                        playermagicpoint = userData.playermp??50;
                        playercrla = userData.playercritlate??0.03;
                        playercrdm = userData.playercritdmg??1.5;
                        playercrrs = userData.playercritresist??0;
                        maxrpt = rank*100;
                     });
                  })
                  .catch((error) => {
                     console.error("Error fetching data: ", error);
                  });
               
               log.textContent = 'Now loading..';
               setTimeout(BacktoHome,1000);

               // ここでlastactをチェックする処理を追加
               load();
               usersRef.once('value').then(snapshot => {
                  
                  if(userData && checkLastLogin(userData.lastact)){
                        cleareddailyquest = 0;
                        quest.daily = [];
                        for(i = 0;i < 5;i++){
                           let newquest = quests.daily[Math.floor(Math.random() * quests.daily.length)];
                           newquest.id = i+1;
                           quest.daily.push(newquest);
                        }
                  }else{
                     const namba = 5- cleareddailyquest
                     quest.daily = [];
                     for(i = 0;i < namba;i++){
                        let newquest = quests.daily[Math.floor(Math.random() * quests.daily.length)];
                        newquest.id = i+1;
                        quest.daily.push(newquest);
                     }
                  }
               });

            } else {
               // パスワードが間違っている
               document.getElementById('GameArea').innerHTML = `
               <div class="login-container">
                  <form class="login-form" id="login-form">
                     <input type="text" id="username" placeholder="ユーザー名" required>
                     <input type="password" id="password" placeholder="パスワード" required>
                     <button type="submit">ログイン</button>
                     <div id="login-error" style="color: red; display: none;">パスワードが間違っています。</div>
                  </form>
               </div>
               `
               loginError.style.display = 'block';
            }
         }else{
            usersRef.update({
               status: 'online',
               password: password,
            });
            loginForm.style.display = 'none';
            document.getElementById('ChatTab').style.display = 'block';
            chatContainer.style.display = 'flex';
            startChat();
            document.getElementById('room-select').style.display = 'block';
            switch(username){
               case 'test':
                  document.getElementById('room-select').appendChild(new Option("デバッグ用","debug"));
                  break;
               case 'koppepan_orange':
                  document.getElementById('room-select').appendChild(new Option("koppepan","koppepan"));
                  break;
               case 'forest_inlet':
                  document.getElementById('room-select').appendChild(new Option("forest","forest"));
                  break;
               case 'luna':
                  document.getElementById('room-select').appendChild(new Option("luna","luna"));
                  break;
            }
            document.getElementById('ChatTab').style.display = 'none';
            document.getElementById('GameArea').style.display = 'block';
            

            AllowMove = 1;

            euro = 0;
            bankeuro = 0;
            rank = 1;
            rpt = 0;
            rp = 0;
            clearedmainquest = 0;
            playeratk = 20;
            playerdef = 0;
            playermatk = 10;
            playermdef = 0;
            playerhp = 100;
            playermagicpoint = 50;
            playercrla = 0.03;
            playercrdm = 1.5;
            playercrrs = 0;
            Potion.num = 2; Bomb.num = 2; Redcard.num = 2;

            BacktoHome();

            clearedmainquest = 0;
            quest.main = quests.main[0];
            quest.daily = [];
            for(i = 0;i < 5;i++){
               let newquest = quests.daily[Math.floor(Math.random() * quests.daily.length)];
               newquest.id = i+1;
               quest.daily.push(newquest);
            }
         }
      });
      
   });

   //こっからchat
   document.getElementById('message-input').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          if(!e.shiftKey){
            e.preventDefault();
            document.getElementById('send-button').click();
          }else{
            document.getElementById('message-input').value += '<br>'
          }
      }
      });   
  function startChat() {
      chatroom = document.getElementById('room-select').value;
      selectRoom();
  }

}
//#endregion

//#region chatのやつ
function selectRoom() {
   const roomSelect = document.getElementById('room-select');
   const sendButton = document.getElementById('send-button');
   const messageInput = document.getElementById('message-input');
   messagesRef.off();
   chatroom = roomSelect.value;
   messagesRef = database.ref('forrpg/rooms/'+chatroom+'/messages');
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

       document.getElementById('messages').appendChild(messageElement);

       messagesRef.on('value', function(snapshot) {
           if (snapshot.numChildren() > 20) {
               var firstMessageKey = Object.keys(snapshot.val())[0];
               messagesRef.child(firstMessageKey).remove();
           }
       });

       // 最新のメッセージが見えるようにスクロール
       document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
   });

   messagesRef.once('value', function(snapshot) {
       displayAllMessages();  // 一回だけ全メッセージを表示
   });
}

function displayAllMessages() {
   var roomSelect = document.getElementById('room-select');
   chatroom = roomSelect.value;
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

           document.getElementById('messages').appendChild(messageElement);
       });

       messagesRef.on('value', function(snapshot) {
           if (snapshot.numChildren() > 20) {
               var firstMessageKey = Object.keys(snapshot.val())[0];
               messagesRef.child(firstMessageKey).remove();
           }
       });

       // 最新のメッセージが見えるようにスクロール
       document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
   });
}

// 部屋作ったりラジバンダリ
function makeRoom() {
   const roomSelect = document.getElementById('room-select');
   const Loom = document.getElementById('room-make').value;
   const NowRef = database.ref('rooms/' + Loom);
   const pass = document.getElementById('room-make-pass').value;
   NowRef.once('value').then(function(snapshot) {
       if (snapshot.exists()) { // 既存部屋の場合
           var roomData = snapshot.val();
           if (roomData.pass == pass) {
               document.getElementById('room-select').appendChild(new Option(Loom, Loom));
               roomSelect.value = Loom;
               chatroom = Loom;
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
           chatroom = Loom;

           NowRef.update(Pass);

           selectRoom();
           document.getElementById('room-make').value = '';
           document.getElementById('room-make-pass').value = '';
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

//#region euroとrankの上のやつ
function updateUI(){
   document.getElementById('rank').textContent = rank;
   document.getElementById('rpt-bar').style.width = (rpt / maxrpt) * 100 + '%';
   document.getElementById('rpt-text').textContent = `${rpt}/${maxrpt}`;
   document.getElementById('euro').textContent = euro+'€';

   if(rpt >= maxrpt){
      rank += 1;
      rpt = 0;
      maxrpt = rank*100;
      save();
   }
}
updateUI();

function LetsCharge(){
   document.getElementById('HomeArea').innerHTML = `
   <!--<span id="BigText">チャージステーション</span><br>-->
   <button onclick="BacktoHome()">←</button> チャージステーション<br>
   <div class="row">
   <button class="HomeBButton" onclick="Charge(90,120)">90€/120$</button>
   <button class="HomeBButton" onclick="Charge(300,360)">300€/360$</button>
   <button class="HomeBButton" onclick="Charge(300,360)">720€/860$</button>
   </div>
   <div class="row">
   <button class="HomeBButton" onclick="Charge(900,1080)">960€/1080$</button>
   <button class="HomeBButton" onclick="Charge(300,360)">1340€/1460$</button>
   <button class="HomeBButton" onclick="Charge(300,360)">1980€/2160$</button>
   </div>
   `;
}
function Charge(e,m){
   load();
   if(userData.money??0 >= m){
      euro += e;
      usersRef.update({
         money: userData.money??m - m
      });
      save();
      NicoNicoText(`${m}$払い、${e}€チャージ完了、です！`);
   }else{
      NicoNicoText('お金が足りません...');
   }
}
//#endregion
//#region profileのやつ
async function UpdateProfile(){
   await getUserData('about');
   let about = data;
   document.getElementById('ProfileTab').innerHTML = `
   <span style="font-size: 24px; border: 1px solid #000000">${username}</span>　Rank:${rank}<br><br>
   <textarea id="about" placeholder="write about you" style="width: 255px; height: 124px;" oninput="InputAboutMe()">${about}</textarea>
   `
}//自己紹介とかも入れたいよね
function getUserData(name){
   usersRef.get().then((snapshot) => {
      if (snapshot.exists()) {
         let data = eval('snapshot.val().'+name);
      } else {
         console.log("データが存在しません");
      }
  }).catch((error) => {
      console.error("エラー:", error);
  });
  return data;
}
function InputAboutMe(){
   const textarea = document.getElementById('about');
   usersRef.update({
      about: textarea.value
   });
}
//#endregion
//#region Homeの動き達
function OpenTab(code){
   document.getElementById('HomeTab').style.display = 'none';
   document.getElementById('InventoryTab').style.display = 'none';
   document.getElementById('QuestTab').style.display = 'none';
   document.getElementById('ChatTab').style.display = 'none';
   document.getElementById('ProfileTab').style.display = 'none';

   switch(code){
      case 'H':document.getElementById('HomeTab').style.display = 'block';break;
      case 'I':document.getElementById('InventoryTab').style.display = 'block';break;
      case 'Q':document.getElementById('QuestTab').style.display = 'block';MakeNewQuest('x');break;
      case 'C':document.getElementById('ChatTab').style.display = 'block';break;
      case 'P':document.getElementById('ProfileTab').style.display = 'block';UpdateProfile();break;
   }
}
function BacktoHome(){
   save();
   log.textContent = '';
   document.getElementById('HomeArea').style.display = 'block';
   document.getElementById('HomeArea').innerHTML = `
   <!--<span id="BigText">シャングリ・ラ中心街</span><br>-->
   <img src="assets/downtown.png" style="width: 600px; height: 300px;"><br>
   インタラクト<br>
   <button class="HomeButton" onclick="HomeShop('W')">武器屋</button> <button class="HomeButton" onclick="HomeShop('A')">防具屋</button> <button class="HomeButton" onclick="HomeShop('T')">道具屋</button><br>
   <button class="HomeButton" onclick="HomeBank()">銀行</button> (ここもうちょい追加したいね)<br><br>
   <button class="HomeBigButton" onclick="HomeMapSelect()">駅に行く</button>
   <button class="HomeBigButton" onclick="HomeJobSelect()">タイミーをする</button>
   <button class="HomeBigButton" onclick="HomeMarket()">商店街を見に行く</button>
   `;
}
//#region rpgtoka
function HomeMapSelect(){
   save();
   document.getElementById('HomeArea').innerHTML = `
   <!--<span id="BigText">シャングリ・ラ中心街</span><br>-->
   <img src="assets/station.png" style="width: 600px; height: 300px;"><br>
   <button onclick="BacktoHome()">←</button> 駅<br>
   <button class="HomeSButton" onclick="HomeLetsDungeon(1)">創世黎明の原野</button><br>
   <button class="HomeSButton" onclick="HomeLetsDungeon(2)">ガチェンレイゲスドゥールラート</button><br>
   <button class="HomeSButton" onclick="">アビドス高等学校((</button><br>
   `;
}
function HomeLetsDungeon(code){
   save();
   fun = Math.floor(Math.random() * 100)+1;//毎回変更されるのぜ
   stage = code;
   floor = 0;

   humans.players[1].level = 1;
   humans.players[1].exp = 0;
   sp = 1;
   
   humans.players[1].attack = playeratk;
   humans.players[1].defense = playerdef;
   humans.players[1].mattack = playermatk;
   humans.players[1].mdefense = playermdef;
   humans.players[1].maxhealth = playerhp;
   humans.players[1].maxmp = playermagicpoint;
   humans.players[1].critlate = playercrla;
   humans.players[1].critdmg = playercrdm;
   humans.players[1].critresist = playercrrs;
   humans.players[1].health = humans.players[1].maxhealth;
   humans.players[1].mp = humans.players[1].maxmp
   humans.players[1].power = 1;humans.players[1].shell = 1;
   
   document.getElementById('HomeArea').style.display = 'none';
   document.getElementById('GameArea').style.display = 'block';
   document.getElementById('GameArea').innerHTML = `
   <button class="button" onclick="HomeGoDungeon('greenslime');">greenslime</button><button class="button" onclick="HomeGoDungeon('mechanic');">mechanic</button><button class="button" onclick="HomeGoDungeon('clown');">clown</button><button class="button" onclick="HomeGoDungeon('herta');">herta</button><br>
   <button class="button">something</button><br>
   <button class="button" onclick="HomeGoDungeon('wretch');">wretch〜持たざる者〜</button>
   `;
}
function HomeGoDungeon(name){
   document.getElementById('GameArea').style.display = 'none';
   humans.players[1].name = name;
   switch(humans.players[1].name){//これはキャラ固有のやつやね
      case '持たざる者'://wretch〜持たざる者〜
         humans.players[1].ex.id = 'none';
         humans.players[1].ns.id = 'none';
         humans.players[1].ps.id = 'none';
         buttonsolid = '#000000'
         buttonback = '#999999'
      break;
      case 'green_slime'://greenslime
         humans.players[1].ex.id = 'none';
         humans.players[1].ns.id = 'none';
         humans.players[1].ps.id = 'none';
         buttonsolid = '#000000'
         buttonback = '#999999'
         humans.players[1].maxmp = 0;
         humans.players[1].defense += 5;
      break;
      case 'メカニッカ'://mechanic
         humans.players[1].ex.id = 'placeturret';
         humans.players[1].ns.id = 'throwwrench';
         humans.players[1].ps.id = 'solplaceturret';
         buttonsolid = '#ff7373';
         buttonback = '#fcffc0';
         humans.players[1].maxhealth -= 50;
         humans.players[1].attack += 5;
         humans.players[1].mattack += 10;
         humans.players[1].mdefense += 20;
      break;
      case '週末の道化師'://clown //ごめん好きこいつ...ww 終末もそのうち作るよ
         humans.players[1].ex.id = 'trickyvariables';
         humans.players[1].ns.id = 'gambler';
         humans.players[1].ps.id = 'highsol';
         buttonsolid = '#FFACF9';
         buttonback = '#ACF8FF';
         humans.players[1].critlate += 0.06;
         humans.players[1].critresist += 0.1;
      break;
      case 'ヘルタ'://herta
         humans.players[1].ex.id = 'bigdiamond';//こんな大きなダイアモンド見たことないでしょ、あげるね〜
         humans.players[1].ns.id = 'improve';//パーツアップグレード。
         humans.players[1].ps.id = 'enemy50%pursuit';//くるくる〜っと、くるりん〜っと
         buttonsolid = '#F1EA66';
         buttonback = '#A163CB';
         humans.players[1].attack -= 5;
         humans.players[1].maxmp -= 40;
         humans.players[1].critlate += 0.04;
         enemy50pursuitenelgy = 1;
      break;
   }
   humans.players[1].health = humans.players[1].maxhealth;

   switch(stage){
      case 1:
         enemylevel = 1;enemyhp = 100;
         enemyatk = 10;enemypower = 1; enemymatk = 10;
         enemydef = 0; enemyshell = 1; enemymdef = 0;
         enemycrla = 0.03;enemycrdm = 1.5;enemycrrs = 0;
      break;
      case 2:
      case 3:
         enemylevel = 5;enemyhp = 140;
         enemyatk = 15;enemypower = 1; enemymatk = 10;
         enemydef = 5; enemyshell = 1; enemymdef = 0;
         enemycrla = 0.03;enemycrdm = 1.5;enemycrrs = 0;
      case 4:
         enemylevel = 10;enemyhp = 160;
         enemyatk = 25;enemypower = 1; enemymatk = 15;
         enemydef = 10; enemyshell = 1; enemymdef = 10;
         enemycrla = 0.03;enemycrdm = 1.5;enemycrrs = 0;
   }
   
   dungeonnow = 1;
   document.getElementById('NowMap').style.display = 'block';
   document.getElementById('HomeArea').style.display = 'none';
   document.getElementById('GameArea').innerHTML = `<span>turn:</span><span id="TurnCount">0</span><br>
      <div id="enemies">
        <div id="enemy1" class="enemy">
          <b id="EnemyName">†古書館の魔術師†</b>   <i id="EnemyLevel">Lv.24</i><br>
          <span id="EnemyHealth">100</span>/<span id="EnemyMaxHealth">100</span><br>
          <span id="EnemyMP">20</span>/<span id="EnemyMaxMP">20</span><br>
          <span id="EnemyBuff"></span> <span id="EnemyDebuff"></span>
        </div>
        <div id="enemy2" class="enemy">
          <b id="EnemyName">読書マニアな司書</b>   <i id="EnemyLevel">Lv.22</i><br>
          <span id="EnemyHealth">100</span>/<span id="EnemyMaxHealth">100</span><br>
          <span id="Ene myMP">20</span>/<span id="EnemyMaxMP">20</span><br>
          <span id="EnemyBuff"></span> <span id="EnemyDebuff"></span>
        </div>  
        <div id="enemy3" class="enemy">
          <b id="EnemyName">忍び寄るナース</b>   <i id="EnemyLevel">Lv.23</i><br>
          <span id="EnemyHealth">100</span>/<span id="EnemyMaxHealth">100</span><br>
          <span id="EnemyMP">20</span>/<span id="EnemyMaxMP">20</span><br>
          <span id="EnemyBuff"></span> <span id="EnemyDebuff"></span>
        </div>
        <div id="enemy4" class="enemy">
          <b id="EnemyName">「救護」のプロ</b>   <i id="EnemyLevel">Lv.24</i><br>
          <span id="EnemyHealth">100</span>/<span id="EnemyMaxHealth">100</span><br>
          <span id="EnemyMP">20</span>/<span id="EnemyMaxMP">20</span><br>
          <span id="EnemyBuff"></span> <span id="EnemyDebuff"></span>
        </div>
      </div>
      <br><br>

      <div id="players">
        <div id="player1" class="player">
          <b>mechanic</b>   <i>Lv.23</i><br>
          <span id="PlayerHealth">100</span>/<span>100</span><br>
          <span id="PlayerMP">0</span>/<span id="PlayerMaxMP">0</span><br>
          <span id="PlayerBuff"></span> <span id="PlayerDebuff"></span>
        </div>
        <div id="player2" class="player">
          <b>friend1</b>   <i>Lv.1</i><br>
          <span id="PlayerHealth">100</span>/<span>100</span><br>
          <span id="PlayerMP">0</span>/<span id="PlayerMaxMP">0</span><br>
          <span id="PlayerBuff"></span> <span id="PlayerDebuff"></span>
        </div>
        <div id="player3" class="player">
          <b>friend2</b>   <i>Lv.1</i><br>
          <span id="PlayerHealth">100</span>/<span>100</span><br>
          <span id="PlayerMP">0</span>/<span id="PlayerMaxMP">0</span><br>
          <span id="PlayerBuff"></span> <span id="PlayerDebuff"></span>
        </div>
        <div id="player4" class="player">
          <b>friend3</b>   <i>Lv.1</i><br>
          <span id="PlayerHealth">100</span>/<span>100</span><br>
          <span id="PlayerMP">0</span>/<span id="PlayerMaxMP">0</span><br>
          <span id="PlayerBuff"></span> <span id="PlayerDebuff"></span>
        </div>
      </div><br><br><br>
      <div id="sbuttons"><button class="button" id="select1" onclick="select1()">attack</button>  <button class="button" id="select2" onclick="select2()">magic</button>  <button class="button" id="select3" onclick="select3()">tools</button>  <button class="button" id="back" onclick="back()">runaway</button></div><br>
      <span id="Skillbutton"><button class="button" id="Skill1" onclick="Skill1()">skill</button></span>`;
   document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';
   document.getElementById('ButtonStyle').textContent = `.button{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};cursor: pointer;}input[type="text"]:focus{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};}`;
   GoNextFloor();

   AllowMove = 0;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
}

function ExitDungeon(code){
   euro += 50*code;
   dungeonnow = 0;
   document.getElementById('NowMap').style.display = 'none';
   document.getElementById('GameArea').style.display = 'none';
   BacktoHome();
}
//#endregion
//#region jobtoka
function HomeJobSelect(){
   save();
   document.getElementById('HomeArea').innerHTML = `
   <!--<span id="BigText">タイミー</span><br>-->
   <button onclick="BacktoHome()">←</button> お仕事一覧<br>
   <select id="Num-Select"><option value="1">01</option><option value="2">02</option><option value="3">03</option><option value="4">04</option><option value="5">05</option><option value="6">06</option><option value="7">07</option><option value="8">08</option></select><br>
   <button class="HomeSButton" onclick="HomeJobStart('EuroShort')">[急募][短期][面接無し]品出し(エイトイレブン)</button><br>
   <button class="HomeSButton" onclick="HomeJobStart('EuroMiddle')">[高収入]仕分け、シール貼り(株式会社アイミックス)</button><br>
   <button class="HomeSButton" onclick="HomeJobStart('EuroLong')">[超高収入]荷物を受け取り、運ぶだけ！</button><br>
   `;
}

function HomeJobStart(name){
   save();
   afknow = 1;
   let num = document.getElementById('Num-Select').value;
   document.getElementById('HomeArea').innerHTML = `
   ーAFKタスク進行中ー<br>
   <span id="Task-log">
      <div class="task-bar-container">
         <div class="task-bar" id="task-bar"></div>
         <div class="task-text">  <span id="task-text">wait...</span></div>
      </div>
   </span>
   `;
   let reword = 0;
   let time = 0;
   let type = 0;
   switch(name){
      case 'EuroShort':
         type = 'Euro'
         reword = num*10;
         time = 5
         break;
      case 'EuroMiddle':
         type = 'Euro';
         reword = num*50;
         time = 15;
         break;
      case 'EuroLong':
         type = 'Euro'; 
         reword = num*100
         time = 30;  
         break;
   }
   let maxTasks = num*time*60;
   let taskInterval = 1000; // 15分 (ミリ秒に変換)
   let completedTasks = 0;
   let taskTimer;
   function afkTask(){
      completedTasks++;
      if(completedTasks < maxTasks){
         document.getElementById('task-bar').style.width = (completedTasks/maxTasks) * 100 + '%';
         document.getElementById('task-text').textContent = `${completedTasks}/${maxTasks}`;
         //document.getElementById('Task-log').textContent = `${completedTasks} / ${maxTasks}`
      }else{
         clearInterval(taskTimer);
         afknow = 0;
         switch(type){
            case 'Euro':euro += reword;document.getElementById('euro').textContent = euro+'€'; break;
         }
         HomeJobSelect();
      }
   }
   // 15分ごとにafkTaskを実行
   taskTimer = setInterval(afkTask, taskInterval);
}

//#endregion

//#region bank
function HomeBank(){
   save();
   document.getElementById('HomeArea').innerHTML = `
  <button onclick="BacktoHome()">←</button> 超安心安全銀行<br>
  <span id="bank-deposit" class="bank-title">deposite</span><input type="number" id="bank-deposit-num" /><button id="bank-deposit-num-go" onclick="BankDeposite('Num')" class="bank-button">go</button><button id="bank-deposit-all" class="bank-button" onclick="BankDeposite('All')">All</button><br>
  <span id="bank-withdraw" class="bank-title">withdraw</span><input type="number" id="bank-withdraw-num" /><button id="bank-withdraw-num-go" onclick="BankWithdraw('Num')" class="bank-button">go</button><button id="bank-withdraw-all" class="bank-button" onclick="BankWithdraw('All')">All</button><br>
  <span id="BankEuro">bank account:0€</span>
   `;
   document.getElementById('BankEuro').textContent = 'bank account:'+bankeuro+'€';
}
function BankDeposite(code){
   if(code == 'Num'){
      let num = +document.getElementById('bank-deposit-num').value;
      bankeuro += num;
      euro -= num;
      document.getElementById('bank-deposit-num').value = '';
   }else if(code == 'All'){
      bankeuro += euro;
      euro = 0;
      document.getElementById('bank-deposit-num').value = '';
   }
   save();
   HomeBank();
}
function BankWithdraw(code){
   if(code == 'Num'){
      let num = +document.getElementById('bank-withdraw-num').value;
      euro += num;
      bankeuro -= num;
      document.getElementById('bank-withdraw-num').value = '';
   }else if(code == 'All'){
      euro += bankeuro;
      bankeuro = 0;
      document.getElementById('bank-withdraw-num').value = '';
   }
   save();
   HomeBank();
}
//#endregion

//#endregion

//#region 非ダメ時モーション(?)
async function humandamaged(tcam,kind,me,target,multiplier,code){//矛先の陣営、攻撃タイプ(物理||魔法)、自分、矛先、倍率、コード(PS用)
   switch(tcam){
      case 'players':
         console.log('enemy:'+humans.enemies[me].name+'->'+humans.players[target].name+[tcam,kind,me,target,multiplier,code])
         x = (humans.enemies[me].attack * humans.enemies[me].power * multiplier);
         x -= (humans.players[target].defense * humans.players[target].shell);
         if(x < 0){x = 0};
         if((Math.floor(Math.random()+ humans.enemies[me].critlate)-humans.players[target].critresist) >= 1){x += (humans.players[target].defense);x *= humans.enemies[me].critdmg;log.textContent = '痛恨の一撃！';await delay(1000);};
         x = Math.ceil(x);
         if(x > humans.players[target].maxhealth){x = humans.players[target].maxhealth};
         if(x < 0){x = 0;};
         if('onslime' in humans.enemies[me].buffs){x = 0;};
         if('spliting' in humans.players[target].buffs){Splithealth -= x; if(Splithealth < 0){Splithealth = 0}; Splittekiou(); Splithealth = Math.floor(Splithealth); if(Splithealth == 0){Splitbreak(); await delay(1000)};}
         else{
            y = humans.players[target].health;
            humans.players[target].health -= x; tekiou();
            if(humans.players[target].health <= 0){humans.players[target].health = 1;defeat();return;}
         };
         console.log(`damage:${y}->${humans.players[target].health}(${x})`);
         if(x == 0){log.textContent = 'miss! ' + humans.players[target].name + 'にダメージを与えられない!';}
         else{log.textContent = humans.players[target].name + 'に' + x + 'のダメージ!';};
         if('onslime' in humans.enemies[me].buffs){await delay(1000);buffremove('humans.enemies[target].buffs','onslime');log.textContent = humans.enemies[target].name + 'からスライムが剥がれた!';};
         break;

      case 'enemies':
         console.log('player:'+humans.players[me].name+'->'+humans.enemies[target].name+[tcam,kind,me,target,multiplier,code])
         switch(kind){
            case 'sh':
               //codeは基本0。sは1、dsは2、solは3、スキルなら's'、アイテムなら'i'(ない)
               x = weaponpower;
               if(equipweapon == 8){x = Math.floor(Math.random() * 13)+1};
               if(equipweapon == 13){x = Math.floor(Math.random() * 1000)+1};//えぐ...
               x = (humans.players[me].attack * humans.players[me].power * multiplier + x);
               if(code == 3 && humans.players[me].ps.id == 'highsol'){x *= 3};
               if(code == 3 && humans.players[me].ps.id == 'solx5but'){x *= 5};
               x -= (humans.enemies[target].defense * humans.enemies[target].shell);
            
               if(equipweapon == 7){humans.players[me].critlate += 0.5}
               if(equipweapon == 14){t=humans.players[me].critlate;humans.players[me].critlate = 0.7;w=humans.players[me].critdmg;humans.players[me].critdmg = 0.05}//ん？なんか会心多くね？を言わせてやりたいぜ..ww(50%増やしてるからかなりぶっ壊れ)
               if((Math.floor(Math.random()+ humans.players[me].critlate)-humans.enemies[target].critresist) >= 1){x += (humans.enemies[target].defense); x *= humans.players[me].critdmg; log.textContent = '会心の一撃！'; await delay(1000);};
               if(equipweapon == 14){humans.players[me].critlate = t;humans.players[me].critdmg = w;}
               if(equipweapon == 7){humans.players[me].critlate -= 0.5}
               
               if('improve' in humans.players[me].buffs){x *= 1.4;};
               if('LetsThrow' in humans.players[me].buffs){x *= 2; buffremove('humans.players[me].buffs','LetsThrow');};
               if('gambling' in humans.players[me].buffs){z = clowngambling[Math.floor(Math.random() * clowngambling.length)]; x *= z; buffremove('humans.players[me].buffs','gambling'); log.textContent = 'ダメージは' + z + '倍になった!!'; await delay(1000);};
               x = Math.ceil(x);
               if(x < 0){x = 0}; if(x > humans.enemies[target].health){x = humans.enemies[target].health};
               y = humans.enemies[target].health;
               humans.enemies[target].health -= x;
               console.log(`damage:${y}->${humans.enemies[target].health}(${x})`);
               
               if(humans.enemies[target].health < 0){humans.enemies[target].health = 0};
               tekiou();
               log.textContent = humans.enemies[target].name + 'に' + x + 'のダメージ！';
               if(code == 3 && humans.players[me].ps.id == 'solplaceturret'){PlayerTurretPlace(me);}
               
               x = 1;if(code == 3){x = 2};
               switch(humans.players[me].name){
                  case 'Wretch': skillcooldown += 10*x; break;
                  case 'greenslime': skillcooldown += 5*x; break;
                  case 'mechanic': skillcooldown += 15*x; break;
                  case 'clown': skillcooldown += 20*x; break;
                  case 'herta': skillcooldown += 10*x; break;
               }
               if(skillcooldown > 100){skillcooldown = 100};
               if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}
               else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};//新！クールダウン！！
               await delay(1000);

               //特殊武器ゾーン
               if(equipweapon == 11){//体力を吸収するやつ。(ジェン・ソルテ)
                  log.textContent = humans.players[me].name+'は'+humans.enemies[target].name+'の体力を吸収した！';
                  await delay(500);
                  y = Math.ceil(x * 0.25);
                  humans.players[me].health += y;
                  if(humans.players[me].health > humans.players[me].maxhealth){humans.players[me].health = humans.players[me].maxhealth};
                  tekiou();
                  log.textContent = y+'のHPを回復した！';
                  await delay(1000);
               }
               if(equipweapon == 12 && code == 1 && humans.enemies[target].health > 0){//防御力下げるやつ(time on target)
                  t = Math.floor(Math.random()*3)+1;
                  switch(t){case 1:t='トリニティの砲撃術は優秀ですから。';break; case 2:t='お客様のお見送りも、丁寧に。'; break; case 3:t='砲手、支援を。';break;}
                  log.textContent = t;
                  await delay(1000);
                  x = Math.ceil(humans.players[me].attack * humans.players[me].power * 1.1 + weaponpower - humans.enemies[target].defense);
                  if(x < 0){x = 0};if(x > humans.enemies[target].health){x = humans.enemies[target].health};
                  humans.enemies[target].health -= x;
                  tekiou();
                  buffadd(target,'humans.enemies[target].buffs','shelldown',4,1);
                  log.textContent = 'お口に合うと良いのですが..';
                  await delay(1000);
               }
            
               //追撃ゾーン
               if(humans.players[me].ps.id == 'enemy50%pursuit' && humans.enemies[target].health <= humans.enemies[target].maxhealth / 2 && enemy50pursuitenelgy == 1 && humans.enemies[target].health > 0){
                  enemy50pursuitenelgy = 0;
                  z = Math.floor(Math.random() * 2);
                  if(z == 0){log.textContent = 'くるくる～――っと';}else{log.textContent = 'くるりん～っと';}
                  await delay(1000);
                  x = (humans.players[me].attack * humans.players[me].power * 0.7 + weaponpower); x -= (humans.enemies[target].defense);
                  if((Math.floor(Math.random()+ humans.players[me].critlate)) == 1){x += (humans.enemies[target].defense); x *= 3; log.textContent = '会心の一撃！'; await delay(1000);};
                  if('improve' in humans.players[me].buffs){x *= 1.4;};
                  x = Math.ceil(x);
                  if('LetsThrow' in humans.players[me].buffs){x *= 2; buffremove('humans.players[me].buffs','LetsThrow');};
                  if(x < 0){x = 0}; if(x > humans.enemies[target].health){x = humans.enemies[target].health};
                  humans.enemies[target].health -= x;
                  if(humans.enemies[target].health < 0){humans.enemies[target].health = 0};
                  tekiou();
                  log.textContent = humans.enemies[target].name + 'に' + x + 'のダメージ!';
                  skillcooldown += 10;
                  if(skillcooldown > 100){skillcooldown = 100};if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
               }else if(humans.players[me].name == 'herta' && humans.enemies[target].health <= humans.enemies[target].maxhealth / 2 && humans.players[me].level >= 10 && humans.enemies[target].health > 0){//1凸効果「弱みは付け込み」
                  x = (humans.players[me].attack * humans.players[me].power * 0.4 + weaponpower) - (humans.enemies[target].defense);
                  if((Math.floor(Math.random()+ humans.players[me].critlate - 0.05)) == 1){x += (humans.enemies[target].defense); x *= humans.players[me].critdmg; log.textContent = '会心の一撃！'; await delay(1000);};
                  if('improve' in humans.players[me].buffs){x *= 1.4;};
                  x = Math.ceil(x);
                  if('LetsThrow' in humans.players[me].buffs){x *= 2; buffremove('humans.players[me].buffs','LetsThrow');};
                  if(x < 0){x = 0}; if(x > humans.enemies[target].health){x = humans.enemies[target].health};humans.enemies[target].health -= x;if(humans.enemies[target].health < 0){humans.enemies[target].health = 0};
                  tekiou();
                  log.textContent = humans.enemies[target].name + 'に' + x + 'のダメージ!';
                  skillcooldown += 5;
                  if(skillcooldown > 100){skillcooldown = 100};if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
               }
               break;
            case 'mg':
               //codeは基本0。sは1、dsは2、solは3、スキルなら's'、アイテムなら'i'(ない)
               x = (humans.players[me].mattack * humans.players[me].mpower * multiplier);
               x -= (humans.enemies[target].mdefense * humans.enemies[target].shell);
               x = Math.ceil(x);if(x < 0){x = 0};if(x > humans.enemies[target].health){x = humans.enemies[target].health};
               humans.enemies[target].health -= x;
               tekiou();
               log.textContent = humans.enemies[target].name + 'に' + x + 'のダメージ!';
               await delay(1000);
               break;
         }
         break;
   }
   
};
//#endregion

//#region playerturn
function backtoplayerturn(){
   if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
   if(humans.players[1].ex.id == 'placeturret'){PlayerTurretattack = Math.round(humans.players[1].attack * 0.5);};
   phase = 1;
   log.textContent = 'あなたのターンです！';
   document.getElementById('select1').textContent = 'attack';
   document.getElementById('select2').textContent = 'magic';
   document.getElementById('select3').textContent = 'tools';
   document.getElementById('back').textContent = 'pass';
   //errorcheck();
}
async function playerturn(me){
   nstimeout = 0;
   x = Object.values(humans.players).filter(x => x.execute == 1&& x.health > 0).map(x => x.num);
   for(i = 0; i < x.length; i++){
      let n = x[i]
      for(const key in humans.players[n].buffs){
         humans.players[n].buffs[key].time -= 1; // -1する
         if (humans.players[n].buffs[key].time <= 0) {
            delete humans.players[n].buffs[key]; // 0以下なら消し去る
         }
      }
   }
   tekiou();

   if('onslime' in humans.players[me].buffs){
      x = Math.floor(Math.random() * 3);
      if(x !== 0){
         buffremove('humans.players[me].buffs','onslime');
         log.textContent = 'なんとかスライムを取り払った!!';
      }else{
         log.textContent = 'スライムが邪魔して動けない!!';//今思ったけどこれやばいのでは...?
         await delay(1000);NextTurnis();return;}; 
   }

   nstimeout = 0;
   if ((turncount % 3) == 0 && humans.players[me].ns.id == 'throwslime'){
      buffadd('humans.enemies[target].buffs','onslime',3,1);
      log.textContent = humans.enemies[me].name + 'にスライムが覆い被さった!';
      nstimeout = 1;
   } else if ((turncount % 4) == 0 && humans.players[me].ns.id == 'throwwrench'){
      buffadd('humans.players[me].buffs','LetsThrow',3,1);
      log.textContent = 'wrenchを投げる準備ができた!';
      nstimeout = 1;
   } else if ((turncount % 3) == 0 && humans.players[me].ns.id == 'gambler'){
      buffadd('humans.players[me].buffs','gambling',1,1);
      log.textContent = 'さあ、ギャンブルの時間だ!!';
      nstimeout = 1;
   }else if(turncount == 6 && humans.players[me].ns.id == 'improve'){
      if('improve' in humans.players[me].buffs == false){
         buffadd('humans.players[me].buffs','improve',4,1);
         log.textContent = 'パーツアップグレード。';
         nstimeout = 1;
      }
   }else if((turncount % 3) == 0 && humans.players[me].ns.id == '5%heal'){
      x = humans.players[me].health;
      humans.players[me].health += Math.ceil(humans.players[me].maxhealth * 0.2);
      if(humans.players[me].health > humans.players[me].maxhealth){humans.players[me].health = humans.players[me].maxhealth};
      x = humans.players[me].health - x;
      tekiou();
      if(x > 0){log.textContent = '5%のHPを回復した!!'; nstimeout = 1;}
   }else if((turncount % 4) == 0 && humans.players[me].ns.id == 'hitelec'){
      disappear();
      buffadd('humans.players[me].buffs','powerup',2,2);
      log.textContent = 'エレキギターで殴るぞ..ごめんここのセリフどしよ'
      let target = await LetsTargetSelect();
      await humandamaged(target[1],'sh',me,target[0],2,4);//enemydamagedをme,target,mudlathda,codeちゃんとしていして そしたら多分全部うまくいく　playerdamagedもかおm
      tekiou();
      if(humans.enemies[me].health <= 0){humans.enemies[me].health = 0; tekiou();};
      if(humans.enemies[me].health == 0){window.setTimeout(killedenemy,1000);}
      else{window.setTimeout(enemyorplayer,1000);}
      return;
   }
   if(nstimeout == 1){await delay(1000);};

   if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
   if(humans.players[me].ex.id == 'placeturret'){PlayerTurretattack = Math.round(humans.players[me].attack * 0.5);};
   phase = 1;
   log.textContent = 'あなたのターンです！';
   document.getElementById('sbuttons').innerHTML = `<button class="button" id="select1" onclick="select1(${me})">attack</button>  <button class="button" id="select2" onclick="select2(${me})">magic</button>  <button class="button" id="select3" onclick="select3(${me})">tools</button>  <button class="button" id="back" onclick="back(${me})">runaway</button>`
   //errorcheck();
};
//#endregion
//#region playerの選択
let nowturn = 0;
let targetselect = 0;
async function select1(me){
   if (phase == 1){
      log.textContent = 'どうやって攻撃する？';
      document.getElementById('select1').textContent = 'slash';
      document.getElementById('select2').textContent = 'double slash';
      document.getElementById('select3').textContent = 'slash of light';
      document.getElementById('back').textContent = 'back';
      phase = 2;
   } else if (phase == 2) {
      disappear();
      let target = await LetsTargetSelect();
      log.textContent = humans.players[me].name + 'の斬撃!';
      setTimeout(() => {slash('players',target[1],me,target[0]);}, 1000);
   } else if (phase == 3) {
      disappear()
      if(humans.players[me].magic1 !== 0){
         magic(1,me)
      }else{
         log.textContent = 'you dont have magic...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   } else if (phase == 4) {
      disappear()
      if (equiptool1.num > 0){
         log.textContent = humans.players[me].name + 'は'+equiptool1.name+'を使用した!';
         window.setTimeout(eval(equiptool1.id+'act'), 1000)
      } else {
         log.textContent = 'not enough item ...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   }
}
async function select2(me){
   if (phase == 1) {
      log.textContent = 'どうする？';
      document.getElementById('select1').textContent = humans.players[me].magic1;
      document.getElementById('select2').textContent = humans.players[me].magic2;
      document.getElementById('select3').textContent = humans.players[me].magic3;
      document.getElementById('back').textContent = 'back';
      phase = 3;
   } else if (phase == 2) {
      disappear()
      let target = await LetsTargetSelect();
      log.textContent = humans.players[me].name + 'の回転斬り!!';
      setTimeout(() => {doubleslash('players',target[1],me,target[0]);}, 1000);
   } else if (phase == 3) {
      disappear()
      if(humans.players[me].magic2 !== 0){
         magic(2,me)
      }else{
         log.textContent = 'you dont have magic...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   } else if (phase == 4) {
      disappear()
      if (equiptool2.num > 0){
         log.textContent = humans.players[me].name + 'は'+equiptool2.name+'を使用した!';
         window.setTimeout(eval(equiptool2.id+'act'), 1000)
      } else {
         log.textContent = 'not enough item ...';
         window.setTimeout(backtoplayerturn, 1000)
      }
      
   }
}
async function select3(me){
   if (phase == 1) {
      log.textContent = '何を使う？';
      document.getElementById('select1').textContent = equiptool1.name+' x'+equiptool1.num;
      document.getElementById('select2').textContent = equiptool2.name+' x'+equiptool2.num;
      document.getElementById('select3').textContent = equiptool3.name+' x'+equiptool3.num;
      document.getElementById('back').textContent = 'back';
      phase = 4;
   } else if (phase == 2) {
      disappear()
      let target = await LetsTargetSelect();
      log.textContent = humans.players[me].name + 'の一閃!!';
      setTimeout(() => {slashoflight('players',target[1],me,target[0]);}, 1000);
   } else if (phase == 3) {
      disappear()
      if(humans.players[me].magic3 !== 0){
         magic(3,me)
      }else{
         log.textContent = 'you dont have magic...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   } else if (phase == 4) {
      disappear()
      if(equiptool3.num > 0){
         log.textContent = humans.players[me].name + 'は'+equiptool3.name+'を使用した!';
         window.setTimeout(eval(equiptool3.id+'act(me)'), 1000)
      }else{
         log.textContent = 'not enough item ...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   }
}

function LetsTargetSelect(){
   log.textContent = '誰を狙う？';
   return new Promise((resolve) => {
      let color = 'background-color:#fff450';
      let pcolor = 'background-color:#ffffff';

      let pla1 = document.getElementById('player1');
      let pla2 = document.getElementById('player2');
      let pla3 = document.getElementById('player3');
      let pla4 = document.getElementById('player4');
      let ene1 = document.getElementById('enemy1');
      let ene2 = document.getElementById('enemy2');
      let ene3 = document.getElementById('enemy3');
      let ene4 = document.getElementById('enemy4');
      
      const resetStyles = () => {
         pla1.style.backgroundColor = pcolor;
         pla2.style.backgroundColor = pcolor;
         pla3.style.backgroundColor = pcolor;
         pla4.style.backgroundColor = pcolor;
         ene1.style.backgroundColor = pcolor;
         ene2.style.backgroundColor = pcolor;
         ene3.style.backgroundColor = pcolor;
         ene4.style.backgroundColor = pcolor;
      };

      let zigo = function(){
         resetStyles();
         if(humans.players[1].execute == 1){pla1.removeEventListener('click', handleClick);}
         if(humans.players[2].execute == 1){pla2.removeEventListener('click', handleClick);}
         if(humans.players[3].execute == 1){pla3.removeEventListener('click', handleClick);}
         if(humans.players[4].execute == 1){pla4.removeEventListener('click', handleClick);}
         if(humans.enemies[1].execute == 1){ene1.removeEventListener('click', handleClick);}
         if(humans.enemies[2].execute == 1){ene2.removeEventListener('click', handleClick);}
         if(humans.enemies[3].execute == 1){ene3.removeEventListener('click', handleClick);}
         if(humans.enemies[4].execute == 1){ene4.removeEventListener('click', handleClick);}
         resolve(target);
      }
      let target = []
      function handleClick(num,cam){
         target.push(num);target.push(cam);
         zigo();
      }
      if(humans.players[1].execute == 1){
         pla1.style.backgroundColor = color;
         pla1.addEventListener('click', () => handleClick(1, 'players'));
      }
      if (humans.players[2].execute == 1) {
         pla2.style.backgroundColor = color;
         pla2.addEventListener('click', () => handleClick(2, 'players'));
      }
      if (humans.players[3].execute == 1) {
         pla3.style.backgroundColor = color;
         pla3.addEventListener('click', () => handleClick(3, 'players'));
      }
      if (humans.players[4].execute == 1) {
         pla4.style.backgroundColor = color;
         pla4.addEventListener('click', () => handleClick(4, 'players'));
      }

      if (humans.enemies[1].execute == 1) {
         ene1.style.backgroundColor = color;
         ene1.addEventListener('click', () => handleClick(1, 'enemies'));
      }
      if (humans.enemies[2].execute == 1) {
         ene2.style.backgroundColor = color;
         ene2.addEventListener('click', () => handleClick(2, 'enemies'));
      }
      if (humans.enemies[3].execute == 1) {
         ene3.style.backgroundColor = color;
         ene3.addEventListener('click', () => handleClick(3, 'enemies'));
      }
      if (humans.enemies[4].execute == 1) {
         ene4.style.backgroundColor = color;
         ene4.addEventListener('click', () => handleClick(4, 'enemies'));
      }
   });
}
 
//一個選択肢を戻るやつ
async function back(me){
   if(phase == 1){
      disappear();
      document.getElementById('GameArea').style.display = 'none';
      document.getElementById('NowMap').style.display = 'block';
      
      ctx.clearRect(0, 0, 600, 600); 
      DrawBackground();
      ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
      AllowMove = 0;
      log.textContent = 'うまく逃げ切れた！';
      await delay(1000);
      log.textContent = '';
   }else if(phase == 2){
      backtoplayerturn()
   }else if(phase == 3){
      backtoplayerturn()
   }else if(phase == 4){
      backtoplayerturn()
   }
   
}
function disappear(){
   document.getElementById('select1').textContent = ' ';
   document.getElementById('select2').textContent = ' ';
   document.getElementById('select3').textContent = ' ';
   document.getElementById('back').textContent = '';
   phase = 'null';
}
//#endregion
//#region playerの斬撃
async function slash(cam,tcam,me,target) {
   await humandamaged(tcam,'sh',me,target,1,1);
   if(humans[tcam][target].health == 0){killedenemy();return;}
   if(humans[cam][me].ps.id == 'sthree' && Math.floor(Math.random() * 4) == 0){//1/4
      log.textContent = humans[cam][me].name+'は頑張った!';
      await delay(500)
      await humandamaged(tcam,'sh',me,target,1,1);
      if(humans[tcam][target].health == 0){killedenemy();return;}
      await humandamaged(tcam,'sh',me,target,1,1);
      if(humans[tcam][target].health == 0){killedenemy();return;}
   }
   endplayerturn(me,target);
}
async function doubleslash(cam,tcam,me,target) {
   if(Math.floor(Math.random() * 3) == 0){
      log.textContent = 'miss! ダメージを与えられない!';await delay(1000);
   }else{
      await humandamaged(tcam,'sh',me,target,1,2);
      if(humans.enemies[target].health == 0){killedenemy();return;}
   }
   if(Math.floor(Math.random() * 3) == 0){
      log.textContent = 'miss! ダメージを与えられない!';await delay(1000);
   }else{
      await humandamaged(tcam,'sh',me,target,1,2);
      if(humans.enemies[target].health == 0){killedenemy();return;}
   }
   endplayerturn(me,target)
}
async function slashoflight(cam,tcam,me,target){
   x = Math.floor(Math.random() * 3); // 1/3です
   if(humans[cam][me].ps.id == 'highsol'){x = Math.floor(Math.random() * 5);}; // 1/5です。
   if(x !== 0){
      if(humans[cam][me].ps.id == 'solx5but'){
         humans[cam][me].health -= (humans[cam][me].attack+weaponpower);
         if(humans[cam][me].health <= 0){humans[cam][me].health = 1;};//これで死んだらなんか言ってきそうだからね
         tekiou();
         log.textContent = humans[cam][me].name+'は混乱して自分を殴った！';
         await delay(1000);
      }else{
         log.textContent = 'miss! ダメージを与えられない!';
         await delay(1000);
      }
   }else{
      await humandamaged(tcam,'sh',me,target,3,3);
      if(humans.enemies[target].health == 0){killedenemy();return;}
   }
   endplayerturn(me,target);
}
//#endregion
//#region playerの魔法
async function magic(num,me){
   let UseMagic
   switch(num){
      case 1:UseMagic = humans.players[me].magic1;break;
      case 2:UseMagic = humans.players[me].magic2;break;
      case 3:UseMagic = humans.players[me].magic3;break;
   }
   
   if(humans.players[me].mp >= Magics[UseMagic].mp){
      target = await LetsTargetSelect();
      Magics[UseMagic].process('players',target[1],me,target[0]);
      humans.players[me].mp -= Magics[UseMagic].mp;
      tekiou();
   }else{
      log.textContent = 'not enough mp...';
      window.setTimeout(backtoplayerturn, 1000)
   }
}

//#endregion
//#region playerの道具
function Aspirinact(){
   playerhealth += Math.round(playermaxhealth * 0.2);
   if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
   tekiou();
   log.textContent = 'おや？頭が痛いって？痛みに効くのはアスピリン！！';
   Aspirin.num -= 1;
   window.setTimeout(backtoplayerturn, 1000)
}
function Pablonact(){
   playerhealth += Math.round(playermaxhealth * 0.4)
   if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
   tekiou();
   log.textContent = '早めのパブロン♪';
   Pablon.num -= 1;
   window.setTimeout(backtoplayerturn, 1000)
}
function Trypsinact(){
   playerhealth += Math.round(playermaxhealth * 0.6)
   if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
   tekiou();
   log.textContent = 'トリプシンを飲んだ！！え？これは薬じゃないって？';
   Trypsin.num -= 1;
   window.setTimeout(backtoplayerturn, 1000)
}
function Luluact(){
   playerhealth += Math.round(playermaxhealth * 0.8)
   if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
   tekiou();
   log.textContent = '熱・のど・鼻にルルが効く〜♪';//名前かわいいかよ(???)
   Lulu.num -= 1;
   window.setTimeout(backtoplayerturn, 1000)
}
function Potionact(){
   playerhealth = playermaxhealth
   tekiou();
   log.textContent = 'なんか一番しょうもないよね、これ あ、全回復です';
   Potion.num -= 1;
   window.setTimeout(backtoplayerturn, 1000)
}
async function ThrowKnifeact(me,target){
   log.textContent = 'では、ナイフの錆にしてあげましょう';
   ThrowKnife.num -= 1;
   await delay(1000);
   x = Math.ceil(humans.enemies[target].health*0.20);
   if(humans.enemies[target].health < x){x = humans.enemies[target].health};
   humans.enemies[target].health -= x
   tekiou();
   log.textContent = humans.enemies[target].name+'に'+x+'のダメージ！';
   await delay(1000);
   if(humans.enemies[target].health <= 0){
      killedenemy();
   }else{
      endplayerturn(me,target);
   }
}
async function TrickyVariableact(me,target){//ここの作り込みよ
   x = Math.floor(Math.random() * 3) + 1;
   switch(x){
      case 1:
         log.textContent = 'ま、これでいいですよね？';
         x = Math.ceil(humans.enemies[target].health*0.10);
         break;
      case 2:
         log.textContent = '結果良ければすべてオッケー！ってね？';
         x = Math.ceil(humans.enemies[target].health*0.25);
         break;
      case 3:
         log.textContent = 'これぞ醍醐味、ってやつ？';
         x = Math.ceil(humans.enemies[target].health*0.40);
         break;
   }
   TrickyVariable.num -= 1;
   await delay(1000);
   if(humans.enemies[target].health < x){x = humans.enemies[target].health};
   humans.enemies[target].health -= x
   tekiou();
   log.textContent = humans.enemies[target].name+'に'+x+'のダメージ！';
   await delay(1000);
   if(humans.enemies[target].health <= 0){
      log.textContent = 'ちょろい、ちょろい。BANG！';
      window.setTimeout(killedenemy, 1000)
   }else{endplayerturn(me,target);}
}//ここの作り込みやば...ww まあ好きなキャラTop3の1人だからしゃーない にはははは〜！
async function BottleGrenadeact(me,target){
   log.textContent = 'これはちょっと、スパイシーなやつだよ';
   BottleGrenade.num -= 1;
   await delay(1000);
   x = Math.ceil(humans.enemies[target].health*0.45);
   if(humans.enemies[target].health < x){x = humans.enemies[target].health};
   humans.enemies[target].health -= x;
   tekiou();
   buffadd('humans.enemies[target].buffs','burn',3,1);
   log.textContent = humans.enemies[target].name+'に'+x+'のダメージ！';
   await delay(1000);
   if(humans.enemies[target].health <= 0){
      log.textContent = 'レッドウィンターの問題児にしては上出来じゃない？';
      window.setTimeout(killedenemy, 1000)
   }
   endplayerturn(me,target);
}
async function CoveringFireact(me,target){//これはノーマルスキル扱いってことで... 弱点把握状態もやりたいけど枠がねぇ....あ、スキルを獲得制にすれば......!?
   log.textContent = 'え、援護します...'
   CoveringFire.num -= 1;
   await delay(1000);
   x = Math.ceil(humans.enemies[target].health*0.60);
   if(humans.enemies[target].health < x){x = humans.enemies[target].health};
   humans.enemies[target].health -= x
   tekiou();
   log.textContent = humans.enemies[target].name+'に'+x+'のダメージ！';
   await delay(1000);
   if(humans.enemies[target].health <= 0){
      log.textContent = 'わ、私のことはお気になさらずに...';
      window.setTimeout(killedenemy, 1000)
   }else{endplayerturn(me,target);}
}
function Bombact(me,target){
   humans.enemies[target].health = 0;
   tekiou();
   log.textContent = '爆発オチなんてサイテー！！';
   Bomb.num -= 1;
   window.setTimeout(killedenemy, 1000)
}
function Redcardact(me,target){
   buffadd(target,'humans.enemies[target].buffs','skip',5,1);
   log.textContent = 'カードを仕込みました!';
   Redcard.num -= 1;
   window.setTimeout(backtoplayerturn, 1000)
}
function Bluecardact(me,target) {
   x = humans.players[me].health/humans.players[me].maxhealth*humans.enemies[target].health;//割合交換(そのうちゲージにする時用)
   y = humans.enemies[target].health/humans.enemies[target].health*humans.players[me].maxhealth;
   humans.enemies[target].health = x;
   if(humans.enemies[target].health < humans.enemies[target].health){humans.enemies[target].health = humans.enemies[target].health;}
   humans.players[me].health = y;
   if(humans.players[me].maxhealth < humans.players[me].health){humans.players[me].health = humans.players[me].maxhealth;}
   tekiou();
   log.textContent = '体力を交換しました！';
   Bluecard.num -= 1;
   window.setTimeout(backtoplayerturn, 1000)
}
function Greencardact(me,target) {
   const Greenrandombuffs = ['poison','burn1','powerdown1','shelldown1']
   x = Greenrandombuffs[Math.floor(Math.random() * Greenrandombuffs.length)];
   y = Greenrandombuffs[Math.floor(Math.random() * Greenrandombuffs.length)];
   while (y == x) {y = Greenrandombuffs[Math.floor(Math.random() * Greenrandombuffs.length)];}
   buffadd(target,'humans.enemies[target].buffs',x,3,1);
   buffadd(target,'humans.enemies[target].buffs',y,3,1);
   Greencard.num -= 1;
   log.textContent = humans.enemies[target].name+'にバフを二個つけました！！';
   window.setTimeout(backtoplayerturn, 1000)
}
function Blackcardact(me,target) {
   buffadd(target,'humans.enemies[target].buffs','poison',3,1);
   buffadd(target,'humans.enemies[target].buffs','burn1',3,1);
   buffadd(target,'humans.enemies[target].buffs','powerdown1',3,1);
   buffadd(target,'humans.enemies[target].buffs','shelldown1',3,1);
   Blackcard.num -= 1;
   log.textContent = 'バフを四個つけました！';
   window.setTimeout(backtoplayerturn, 1000)
}
//#endregion
//#region playerのskill
let Splithealth = 0;
let Splitmaxhealth = 0;
let PlayerTurret = 0;
let PlayerTurretattack = 0;
let clowngambling = ['0','0','2','2','2','4'];
let hertaexvoice = ['こんな大きなダイアモンド見たことないでしょ？あげるね～','あなた…それじゃあダメだよ','ちょっとは静かになさい！','私が誰だか知ってるの？']
async function skillact() {
   let serif = 'errored';
   if(phase == 1){
   if(skillcooldown == 100){
      if(humans.players[me].ex.id == '50%split'){
         if('spliting' in humans.players[me].buffs == false){
            if(playerhealth > Math.floor(playermaxhealth * 0.5)){
            buffadd('humans.players[me].buffs','spliting',7);//廃止予定
            x = Math.floor(playermaxhealth * 0.5);
            playerhealth -= x;
            document.getElementById('PlayerFriendFront').innerHTML = '<br><br><b><font color="#2EFE2E">'+playername+'のコピー</font></b>  <br><span id="SplitHealth">0</span>/<span id="SplitMaxHealth">0</span>';
            Splitmaxhealth = x;
            Splithealth = x;
            Splittekiou()
            log.textContent = playername+'は分裂した!!';
            tekiou()
            } else {log.textContent = 'tairyoku ga sukunai desu...';}
         }
      }else if(humans.players[me].ex.id == 'placeturret'){
         document.getElementById('PlayerFriendBack').innerHTML = '<br><br><b><font color="#DF0101">turret</font><span id="PlayerTurret"></span></b>';
         PlayerTurret += 1;
         PlayerTurrettekiou()
         PlayerTurretattack = Math.round(playerattack * 0.5);
         document.getElementById('Skillbutton').innerHTML = '';
         log.textContent = playername+'はturretを設置した!';
         skillcooldown = 0;
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
      }else if(humans.players[me].ex.id == 'trickyvariables'){
         phase = 0; disappear();
         log.textContent = playername+'は爆弾を投げた...';
         document.getElementById('Skillbutton').innerHTML = '';
         window.setTimeout(Trickybomb, 1000)
         skillcooldown = 0;
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
      }else if(humans.players[me].ex.id == 'bigdiamond'){
         phase = 0; disappear(); skillcooldown = 0;
         log.textContent = hertaexvoice[Math.floor(Math.random() * hertaexvoice.length)];//そのうち消える
         await delay(1000);
         let target = await LetsTargetSelect();
         humandamaged(target[1],'mg',me,target[0],2,4);//雷
         buffadd('humans.enemies[target].buffs','freeze',4,1);
         skillcooldown = 0;
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
         NextTurnis(me)
      }else if(humans.players[me].ex.id == '50%heal'){
         phase = 0;disappear();skillcooldown = 0;
         let target = await LetsTargetSelect();
         x = humans[target[1]][target[0]].health;
         humans[target[1]][target[0]].health += Math.floor(humans[target[1]][target[0]].maxhealth * 0.5);
         if (humans[target[1]][target[0]].health > humans[target[1]][target[0]].maxhealth){humans[target[1]][target[0]].health = humans[target[1]][target[0]].maxhealth;}
         x = humans[target[1]][target[0]].health - x;
         log.textContent = '体力が' + x + '回復した!';
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
      }else if(humans.players[me].ex.id == 'kyrieeleison'){
         phase = 0; disappear();
         let target = await LetsTargetSelect();
         switch(Math.floor(Math.random()*3)+1){
            case 1:serif = 'あなたたちは通れないよ';break;
            case 2:serif = 'ここから先は進ませないよ';break;
            case 3:serif = 'ここは私が守るから';break;
         }
         log.textContent = serif;
         x = 2;
         if(humans[target[1]][target[0]].health >= humans[target[1]][target[0]].health * 0.7){x = 4};
         await humandamaged(target[1],'sh',me,target[0],x,4);
         skillcooldown = 0;
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
      }else if(humans.players[me].ex.id == 'standrone'){
         phase = 0; disappear();
         let target = await LetsTargetSelect();
         switch(Math.floor(Math.random()*3)+1){
            case 1:
               serif = '1';
               break;
            case 2:
               serif = '2';
               break;
            case 3:
               serif = '3';
               break;
         }//ミヤコさん
         log.textContent = serif;
         await humandamaged(target[1],'sh',me,target[0],0.75,4);
         buffadd(`humans[${target[1]}][${target[0]}].buffs`,'stan',1,1);
         skillcooldown = 0;
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
         phase = 1;backtoplayerturn();
      }else if(humans.players[me].ex.id == 'recievechallenge'){
         phase = 0; disappear();
         let target = await LetsTargetSelect();
         switch(Math.floor(Math.random()*3)+1){
            case 1:
               serif = '宇沢レイサにお任せください！！';
               break;
            case 2:
               serif = '外れ〜〜〜';
               break;
            case 3:
               serif = '外れ〜〜〜';
               break;
         }//宇沢レイサ
         log,textContent = serif;
         await humandamaged(target[1],'sh',me,target[0],0.5,1)
         buffadd(`humans[${target[1]}][${target[0]}].buffs`,'shelldown',2,2);
         skillcooldown = 0;
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
         phase = 1;backtoplayerturn();
      }else if(humans.players[me].ex.id == 'timidpursuit'){
         phase = 0; disappear();
         switch(Math.floor(Math.random()*3)+1){
            case 1:
               serif = '私はその辺の小石...';
               break;
            case 2:
               serif = '私のことなんて...気にしないでください...';
               break;
            case 3:
               serif = 'すみません...一人にさせてください......';
               break;
         }
         log.textContent = serif;
         buffadd(`humans[${target[1]}][${target[0]}.buffs`,'weaknessgrasp',2,1);//弱点把握状態 名前どーにかしよっか
         skillcooldown = 0;
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
         phase = 1;backtoplayerturn();
      }else if(humans.players[me].ex.id == 'bombe'){
         phase = 0; disappear();
         await LetsTargetSelect();
         log.textContent = humans.players[me].name+'は爆弾を投げた...';
         document.getElementById('Skillbutton').innerHTML = '';
         await delay(1000);//普通　水　マグマ　閃光弾
         const bombetype = [3,1,6,0];
         x = bombetype[Math.floor(Math.random()*4)]
         switch(x){
            case 3:log.textContent = '普通の爆弾だった..!';break;
            case 1:log.textContent = '水爆弾だった！！';break;//強制終了です
            case 6:log.textContent = 'Lucky♪マグマ爆弾だった!!';break;
            case 0:log.textContent = 'いけっ！ピカピカの実！';buffadd('humans.enemies[target[0]].buffs','stan',2,2);break;
         }
         await humandamaged(target[1],'sh',me,target[0],x,4);
         if(humans[target[1]][target[0]].health == 0){killedenemy();}
         else{phase = 1; endplayerturn(me,target[0])};
         skillcooldown = 0;
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
         //if(x == 1){next-enemy();}
      }
   }else {log.textContent = 'skill is not ready...';}
   }
}
function Splittekiou(){
   document.getElementById('SplitHealth').textContent = Splithealth;
   document.getElementById('SplitMaxHealth').textContent = Splitmaxhealth;
   }
function Splitbreak(){
   buffremove('humans.players[me].buffs','spliting')
   x = Math.floor(Splitmaxhealth * 0.7);
   playerhealth += x;
   if (playerhealth > playermaxhealth){playerhealth = playermaxhealth;}
   document.getElementById('PlayerFriendFront').innerHTML = '';
   Splitmaxhealth = 0;
   Splithealth = 0;
   log.textContent = playername+'のコピーは倒された...';
   skillcooldown = 0;
   document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
   document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
}
function PlayerTurretPlace(me){
   if(!document.getElementById('PlayerTurret')){
      let div = document.createElement('div');
      div.id = 'PlayerTurret';
      div.class = 'player'
      document.getElementById('players').appendChild(div);
   }
   humans.players.turret = {//atkは攻撃毎に
      execute: 1,
      num: 0,
      health: humans.players.turret?.health??0 + Math.floor(humans.players[me].maxhealth*0.3),
      maxhealth: humans.players.turret?.maxhealth??0 + Math.floor(humans.players[me].maxhealth*0.3),
   }
   humans.players.turret.num += 1;
   document.getElementById('PlayerTurret').innerHTML = `
      <b>turret</b>x${humans.players.turret.num}<br>
      <span>${humans.players.turret.health}</span>/<span>${humans.players.turret.maxhealth}</span><br>
   `
}
function PlayerTurrettekiou(){};
function PlayerTurretbreak(){
   humans.players.turret.num -= 1;
   if(humans.players.turret.num == 0){
      humans.players.turret = {};
      document.getElementById('PlayerTurret').remove();
   }else{
      document.getElementById('PlayerTurret').innerHTML = `
         <b>turret</b>x${humans.players.turret.num}<br>
         <span>${humans.players.turret.health}</span>/<span>${humans.players.turret.maxhealth}</span><br>
      `;
   }
}
async function Trickybomb(){
   switch(Math.floor(Math.random() * 6)){
      case 0:x=0;log.textContent = 'しかし不発弾だった!!';break;//これによる効果とかもあっていいかも
      case 5:x=5;log.textContent = 'Lucky! 爆弾は焼夷弾だった!!!';break;
      case 4:x=4;log.textContent = '爆弾は花火だった!';break;
      case 3:x=3;log.textContent = '爆弾は毒ガス入りだった!!';buffadd('humans.enemies[target].buffs','poison',3,1);break; //毒ガス入りだった場合
      case 2:x=2;log.textContent = '爆弾はスライム入りだった!!';buffadd('humans.enemies[target].buffs','onslime',2,1);break;//スライム入りだった場合
      case 1:x=1;log.textContent = '爆発した..だがただの特殊な薬品だった!!';break;
   }
   await delay(1000);
   await humandamaged(tcam,'sh',me,target,x,4);
   if(humans.enemies[target].health == 0){killedenemy();}
   else{phase = 1; endplayerturn(me,target)};
}
//#endregion

//#region prev-enemyturn
async function endplayerturn(me,target){
   phase = 0;
   y = 1;//luck or luckgreat
   if('luck' in humans.players[me].buffs){y = Math.floor(Math.random() * humans.players[me].buffs.luck.num);}//luck
   if(y == 0){
      log.textContent = '当たりが出たらもう一本♪';
      await delay(1000); backtoplayerturn(); return;
   }

   if(PlayerTurret > 0){
      log.textContent = 'turretの攻撃!';
      await delay(1000);
      x = Math.ceil(PlayerTurretattack * PlayerTurret) - Math.ceil(humans.enemies[target].defense*humans.enemies[target].shell);
      if(x < 0){x = 0};if(x > humans.enemies[target].health){x = humans.enemies[target].health};
      humans.enemies[target].health -= x;tekiou();
      log.textContent = humans.enemies[target].name+'に'+x+'のダメージ！';
      await delay(1000);
   }
   if(humans.enemies[target].health == 0){killedenemy();return;}

   if ('poison' in humans.players[me].buffs){
      x = playerhealth;
      playerhealth -= Math.floor(playermaxhealth * humans.players[me].buffs.poison.num);
      if(playerhealth < 0){playerhealth = 0};
      y = x - playerhealth;
      log.textContent = playername + 'は毒で' + y + 'のダメージ!';
      await delay(1000);
   };
   if('burn1' in humans.players[me].buffs){
      x = playerhealth;
      playerhealth -= humans.players[me].buffs.burn.num;
      if (playerhealth < 0){playerhealth = 0}
      y = x - playerhealth;
      log.textContent = playername + 'は燃えて' + y + 'のダメージ!';
      await delay(1000);
   };
   tekiou();
   if(humans.players[me].health <= 0){defeat();return;}

   NextTurnis();
}
async function NextTurnis(){
   acted += 1;
   if(acted < bar.num.length){
   nowturn = bar.num[acted-1];
   switch(bar.cam[acted]){
      case 'player':
         playerturn(nowturn);
         break;
      case 'enemy':
         enemyturn(nowturn);
         break;
   }
   }else{
      turncount += 1;
      const combined = [...Object.values(humans.players), ...Object.values(humans.enemies)].filter(c => c.execute === 1 && c.health > 0)// オブジェクトをリストに変換して合体
      .sort((a, b) => {// 降順でソート、speedが同じならcamが'p'のものを優先
         if(b.speed === a.speed){
            if(a.cam === b.cam){
               return a.num - b.num;  // 同じcamならnumの小さい方が優先
            }
            return a.cam === 'p' ? -1 : 1;  // camが'p'なら優先
         }
         return b.speed - a.speed;  // 速度の高い順に並べる
      });
      console.log(combined);
   bar = {
      cam: combined.map(c => c.cam),
      num: combined.map(c => c.num)
   };
      acted = 0;
      nowturn = bar.num[acted];
      switch(bar.cam[acted]){
         case 'player':
            playerturn(nowturn);
            break;
         case 'enemy':
            enemyturn(nowturn);
            break;
      }
   }

}
//#endregion
//#region enemyturn
async function enemyturn(me){
   console.log(`〜〜〜〜〜〜enemyturn${humans.enemies[me].name}〜〜〜〜〜〜`);
   console.log('attack:'+humans.enemies[me].attack+'power:'+humans.enemies[me].power);
   x = Object.values(humans.enemies).filter(x => x.execute == 1&& x.health > 0).map(x => x.num);
   for(i = 0; i < x.length; i++){
      let n = x[i]
      for(const key in humans.enemies[n].buffs){
         humans.enemies[n].buffs[key].time -= 1; //-1する
         if (humans.enemies[n].buffs[key].time <= 0) {
            delete humans.enemies[n].buffs[key]; //0以下なら消し去る
         }
      }
   }
   tekiou();

   //こっから敵が動けるかどうかの動き
   y = 1;//skip
   if('skip' in humans.enemies[me].buffs){y = 0;}//skip1
   if(y == 0){
      log.textContent = 'はい'+humans.enemies[me].name+'、お前スキップ〜〜';
      await delay(1000); NextTurnis(); return;
   }
   y = 1;//stan
   if('stan' in humans.enemies[me].buffs){y = 0;}//stan
   if(y == 0){
      log.textContent = humans.enemies[me].name+'はスタンした！';
      await delay(1000); NextTurnis(); return;　
   }
   //freeze
   if('freeze' in humans.enemies[me].buffs){
      if(!Math.floor(Math.random() * 3) !== 0){
         log.textContent = '氷が溶けた!'; buffremove('humans.enemies[target].buffs','freeze');
      }else{
         log.textContent = humans.enemies[me].name + 'は凍っている...';
         await delay(1000); NextTurnis(); return;
      }   
   }
   
   let name = humans.enemies[me].name
   log.textContent = name+'のターン！';await delay(1000);
   let selected = ['players',1]
   switch(humans.enemies[me].ai){
      case 'supporter':
         switch(name){
            case '†古書館の魔術師†'://古関ウイ。コッペパンの"めっちゃ好きなキャラ"。ヒナタさんと仲がいい。
               switch(Math.floor(Math.random() * 3)){
                  case 1:
                     log.textContent = `${name}はピストルカービンで撃った！`;await delay(1000);//ウイさんの武器やね デ・リーズル カービン
                     selected = ShallTargetSelect(me,'phpl',0);
                     await humandamaged(selected[0],'sh',me,selected[1],1,1);
                     break;
                  case 2:
                     log.textContent = `${name}は古書の専門家だ！！`;await delay(1000);//いやごめん、は？ (ウイさんのEX「古書の専門家」より)
                     selected = ShallTargetSelect(me,'eatkh',0);//enemy atk high
                     await Magics.boost.process(selected[0],me,selected[1]);
                     break;
                  case 3:
                     log.textContent = `${name}は知識を伝達した！`;await delay(1000);//ウイさんのNS「伝達されていく知識」..いやそのまますぎるか...?
                     selected = ShallTargetSelect(me,'ec',1);//自分付近
                     await Magics.boost.process(selected[0],me,selected[1]);
                     break;
               }
               break;
            default:
               log.textContent = `${name}は何かで攻撃した！`;await delay(1000);
               selected = ShallTargetSelect(me,'phpl',0);
               await humandamaged('players','sh',me,selected[1],1,1);
               break;
         }
         break;
      default:
         log.textContent = `${name}は何かで攻撃した！`;await delay(1000);
         selected = ShallTargetSelect(me,'phpl',0);
         await humandamaged(selected[0],'sh',me,selected[1],1,1);//矛先の陣営、攻撃タイプ(物理||魔法)、自分、矛先、倍率、コード(PS用)
         break;
   }
   await enemycontidmg(me);
   if(humans.enemies[me].health <= 0){humans.enemies[me].health = 0}
   if(humans.enemies[me].health == 0){window.setTimeout(killedenemy, 1000)}
   else{
      await delay(1000);
      NextTurnis();
   }
}
function ShallTargetSelect(me,code,both){//これは敵しか使わないターゲットセレクト。だから陣営とかは考えんでいいよ
   //標的陣営、起動者、コード(e = enemy, p = player | m = most highest, l = most lowest,| atk = 攻撃力, def = 防御力, hp = 体力 || r = random)、両隣にも被害を与えるか0,1
   //,b => b.health//playerのhealth達を、executeが1のやつだけ、小さい順(昇順)に並べてる。
   const playerstatus = {
      num:Object.values(humans.players).filter(c => c.execute == 1 && c.health > 0).sort((p1, p2) => p1.num - p2.num).map(a => a.num),
   health:Object.values(humans.players).filter(c => c.execute == 1 && c.health > 0).sort((p1, p2) => p1.health - p2.health).map(a => a.num),
      atk:Object.values(humans.players).filter(c => c.execute == 1 && c.health > 0).sort((p1, p2) => p1.attack - p2.attack).map(a => a.num),
      def:Object.values(humans.players).filter(c => c.execute == 1 && c.health > 0).sort((p1, p2) => p1.defense - p2.defense).map(a => a.num),
   }
   const enemystatus = {
      num:Object.values(humans.enemies).filter(c => c.execute == 1 && c.health > 0).sort((e1, e2) => e1.num - e2.num).map(a => a.num),
   health:Object.values(humans.enemies).filter(c => c.execute == 1 && c.health > 0).sort((e1, e2) => e1.health - e2.health).map(a => a.num),
      atk:Object.values(humans.enemies).filter(c => c.execute == 1 && c.health > 0).sort((e1, e2) => e1.attack - e2.attack).map(a => a.num),
      def:Object.values(humans.enemies).filter(c => c.execute == 1 && c.health > 0).sort((e1, e2) => e1.defense - e2.defense).map(a => a.num),
   }
   let ret = [];
   switch(code){
      //player
      case 'pr'://random
         ret.push('players');
         x = playerstatus.health[Math.floor(Math.random() * playerstatus.length)]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(playerstatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(playerstatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'phpl':
         ret.push('players');
         x = playerstatus.health[0];
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(playerstatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(playerstatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'phph':
         ret.push('players');
         x = playerstatus.health[playerstatus.length - 1];
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(playerstatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(playerstatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'patkl':
         ret.push('players');
         x = playerstatus.atk[0]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(playerstatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(playerstatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'patkh':
         ret.push('players');
         x = playerstatus.atk[playerstatus.length - 1]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(playerstatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(playerstatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'pdefl':
         ret.push('players');
         x = playerstatus.def[0]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(playerstatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(playerstatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'pdefh':
         ret.push('players');
         x = playerstatus.def[playerstatus.length - 1]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(playerstatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(playerstatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'pc'://center
         ret.push('players');
         if(playerstatus.num.includes(me)){
            x = me;
         }else if(playerstatus.num.includes(me-1)){
            x = me-1;
         }else if(playerstatus.num.includes(me+1)){
            x = me+1;
         }else{
            x = 1;
         }
         x = [me,me-1,me-2,me+1,me+2].find(n => playerstatus.num.includes(n))||1;
         if(both == 0){
            ret.push(x);
         }else{
            let b = [];
            if(playerstatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(playerstatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b);
         }
         break;
      case 'pz'://zentai
         ret.push('players');
         x = playerstatus.num;
         ret.push(x);
         break;

      //enemy
      case 'er':
         ret.push('enemies');
         x = enemystatus.health[Math.floor(Math.random() * enemystatus.length)]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(enemystatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(enemystatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'ehpl':
         ret.push('enemies');
         x = enemystatus.health[0]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(enemystatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(enemystatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'ehph':
         ret.push('enemies');
         x = enemystatus.health[enemystatus.length - 1]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(enemystatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(enemystatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'eatkl':
         ret.push('enemies');
         x = enemystatus.atk[0]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(enemystatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(enemystatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'eatkh':
         ret.push('enemies');
         x = enemystatus.atk[enemystatus.length - 1]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(enemystatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(enemystatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'edefl':
         ret.push('enemies');
         x = enemystatus.def[0]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(enemystatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(enemystatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'edefh':
         ret.push('enemies');
         x = enemystatus.def[enemystatus.length - 1]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(enemystatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(enemystatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'ec'://center..まあ自分よな
         ret.push('enemies');
         x = me;
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(enemystatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(enemystatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
   }
   console.log(ret)
   return ret;
}
async function enemycontidmg(me){
   if ('poison' in humans.enemies[me].buffs){
      x = humans.enemies[me].health;
      humans.enemies[me].health -= Math.floor(humans.enemies[me].health * humans.enemies[me].buffs.poison.num);
      if(humans.enemies[me].health < 0){humans.enemies[me].health = 0};
      y = x - humans.enemies[me].health;
      await delay(1000);
      log.textContent = humans.enemies[me].name + 'は毒で' + y + 'のダメージ!';
   };
   if('burn' in humans.enemies[me].buffs){
      x = humans.enemies[me].health;
      humans.enemies[me].health -= humans.enemies[me].buffs.burn.num;
      if (humans.enemies[me].health < 0){humans.enemies[me].health = 0}
      y = x - humans.enemies[me].health;
      await delay(1000);
      log.textContent = humans.enemies[me].name + 'は燃えて' + y + 'のダメージ!';
   };
   tekiou();
}
//#endregion

//#region 勝利/負けの動き
async function killedenemy() {
   log.textContent = humans.enemies[target].name + 'を倒した!';

   //クエストの動
   if(quest.main.type == 'k.' || quest.main.type == '1.k.'&&stage == 1 || quest.main.type == '2.k.'&&stage == 2){
      quest.main.num += 1;
      if(quest.main.num >= quest.main.nom){
         quest.main.num = quest.main.nom;
         quest.main.type = '';
      }
   }
   for(i = 0;i < quest.daily.length;i++){
      if(quest.daily[i].type == 'k.' || quest.daily[i].type == '1.k.'&&stage == 1 || quest.daily[i].type == '2.k.'&&stage == 2){
         quest.daily[i].num += 1;
         if(quest.daily[i].num >= quest.daily[i].nom && quest.daily[i].nom){
            quest.daily[i].num = quest.daily[i].nom;
            quest.daily[i].type = '';
         }
      }
   }
   
   await delay(1000);
   z = Math.floor(Math.random() * 21) + 10;
   euro += z;log.textContent =  z + '€を獲得した!';tekiou();
   await delay(1000);
   playerexp += enemylevel;
   rpt += humans.enemies[1].level+eneies[2].level+humans.enemies[3].level+humans.enemies[4].level;
   x = enemylevel;
   if(bossbattlenow = 1){
      playerexp += enemylevel;
      rpt += enemylevel*2;
      x = enemylevel*2;
      bossbattlenow = 0;
   }
   log.textContent = x+'の経験値を奪った!';
   while(playerexp >= playerlevel){
      playerexp -= playerlevel;
      playerlevel += 1;
      sp += 1;
      document.getElementById('PlayerLevel').textContent = playerlevel;
   }

   await delay(1000);
   buffclear('humans.enemies[target].buffs');buffclear('humans.enemies[target].buffs');
   PlayerTurretbreak();
   z = Math.floor(Math.random() * 5)-2;// -2~2
   enemylevel += z;
   if(enemylevel < 1){enemylevel = 1;}
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
   document.getElementById('EnemyLevel').textContent = enemylevel;
   log.textContent = '';
   document.getElementById('GameArea').style.display = 'none';
   document.getElementById('NowMap').style.display = 'block';
   

   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 0;//戦利品的な何かにしてもいいかも..いやなし
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
}   
async function EnemyAppear(){
   AllowMove = 1;
   document.getElementById('NowMap').style.display = 'none';
   document.getElementById('GameArea').style.display = 'block';
   document.getElementById('select1').textContent = ' ';
   document.getElementById('select2').textContent = ' ';
   document.getElementById('select3').textContent = ' ';
   document.getElementById('back').textContent = ' ';
   document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown"  class="button" onclick="skillact()"></button>'
   

   enemy50pursuitenelgy = 1;
   x = numberofplayer+1;
   for(i = 1; i < x; i++){
      let num = i-1;
      document.getElementById(`player${i}`).style.display = 'block';
      humans.players[i].execute = 1;
      tekiou();
   }
   x = [1,1,1,1,2,2,3]
   numberofenemy = x[Math.floor(Math.random() * x.length)];
   let nanika = numberofenemy+1;
   for(i = 1; i < nanika; i++){
      let num = i-1;
      document.getElementById(`enemy${i}`).style.display = 'block';
      humans.enemies[i].execute = 1;
      humans.enemies[i].name = DesideEnemyName(i);
      tekiou();
   }
   tekiou();
   log.textContent = humans.enemies[1].name + 'が現れた!';

   turncount = 1;document.getElementById('TurnCount').textContent = turncount;
   // bar-create
   const combined = [...Object.values(humans.players), ...Object.values(humans.enemies)].filter(c => c.execute === 1 && c.health > 0)
      .sort((a, b) => {
         if(b.speed === a.speed){
            if(a.cam === b.cam){
               return a.num - b.num;  // 同じcamならnumの小さい方が優先
            }
            return a.cam === 'p' ? -1 : 1;  // camが'p'なら優先
         }
         return b.speed - a.speed;  // 速度の高い順に並べる
      });
      console.log(combined);
   bar = {
      cam: combined.map(c => c.cam),
      num: combined.map(c => c.num)
   };
   console.log(bar)
   acted = 0;
   nowturn = bar.num[acted];

   await delay(750);
   switch(bar.cam[acted]){
      case 'player':
         playerturn(nowturn);
         break;
      case 'enemy':
         enemyturn(nowturn);
         break;
   }
}

async function defeat(){
   //if(playerlevel < 3){saydefeats = ['あはは..負けちゃいましたね....防御力を上げると良いですよ!', 'あはは..負けちゃいましたね....double slashは運要素も少ないので強いですよ!', 'あはは..負けちゃいましたね....魔法にターン数制限はありません!いっぱい使っちゃいましょう!','あはは..負けちゃいましたね....mechanicは防御全振りで戦うと良いですよ!','あれ〜？負けちゃったんですか〜？？おにいさんよわいね〜？？'];}
   saydefeats = [playername + 'は力尽きた...残念でしたね！にはははは〜！','残念だったね!すごい惜しかったね!!','あ、あれ..？もう負けちゃったんですか....？','ほら、負けを認めてください？'];
   log.textContent = saydefeats[Math.floor(Math.random() * saydefeats.length)];
   await delay(2000);
   playerhealth = Math.floor(playermaxhealth*0.5);
   bossbattlenow = 0;
   floor = 0;
   GoNextFloor();
   document.getElementById('GameArea').style.display = 'none';
   document.getElementById('NowMap').style.display = 'block';
   

   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
   log.textContent = '';
}
//#endregion

//#region　bossの動き
function BossEnemyAppear(){
   AllowMove = 1;
   document.getElementById('NowMap').style.display = 'none';
   document.getElementById('GameArea').style.display = 'block';
   bossbattlenow = 1;
   document.getElementById('select1').textContent = ' ';
   document.getElementById('select2').textContent = ' ';
   document.getElementById('select3').textContent = ' ';
   document.getElementById('back').textContent = ' ';
   document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown"  class="button" onclick="skillact()"></button>'
   turncount = 0;
   document.getElementById('TurnCount').textContent = turncount;
   playermp = playermaxmp;
   playerpower = 1;playershell = 1;
   if(playerps.id == 'enemy50%pursuit'){enemy50pursuitenelgy = 1;};
   humans.enemies[me].health = humans.enemies[me].health; document.getElementById('EnemyMaxHealth').textContent = humans.enemies[me].health; tekiou();
   if (enemylevel < 1){enemylevel = 1}
   humans.enemies[me].name = bossenemies[me].names[stage-1]; //敵の名前を決めます
   switch(humans.enemies[me].name){//ボスごとのステータスを決めます
      case 'purpleslime':
         humans.enemies[me].health = 300;
         humans.enemies[me].health = humans.enemies[me].health;
         humans.enemies[me].attack = 30;
         humans.enemies[me].defense = 10;
         humans.enemies[me].mdefense = 0;
         humans.enemies[me].critlate = 0.01;
         humans.enemies[me].critdmg = 2;
         humans.enemies[me].critresist = 0.5;
      break;
      case 'steampumker':
         humans.enemies[me].health = 250;
         humans.enemies[me].health = humans.enemies[me].health;
         humans.enemies[me].attack = 25;
         humans.enemies[me].defense = 10;
         humans.enemies[me].mdefense = 20;
         humans.enemies[me].critlate = 0.05;
         humans.enemies[me].critdmg = 2;
         humans.enemies[me].critresist = 0;
      break;
      case 'RailwayGun "Shemata"':
         humans.enemies[me].health = 400;
         humans.enemies[me].health = humans.enemies[me].health;
         humans.enemies[me].attack = 35;
         humans.enemies[me].defense = 20;
         humans.enemies[me].mdefense = 0;
         humans.enemies[me].critlate = 0;
         humans.enemies[me].critdmg = 0;
         humans.enemies[me].critresist = 0;
      break;

   }
   document.getElementById("EnemyName").textContent = humans.enemies[me].name;
   log.textContent = humans.enemies[me].name + 'が現れた!';
   document.getElementById('EnemyLevel').textContent = enemylevel;
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
      if(humans.enemies[me].health <= humans.enemies[me].health * 0.3){buffadd('humans.players[me].buffs','shelldown',1,1);}
      switch(Math.floor(Math.random()*4)+1){
         case 1:
         case 2:
            log.textContent = humans.enemies[me].name + 'の攻撃';
            humandamaged('players',me,targetselect,1,1);
            break;
         case 3:
            log.textContent = humans.enemies[me].name + 'は大きく息を吐いた！';
            buffadd('humans.players[me].buffs','poison',2,1);
            break;
      }
   }else if(humans.enemies[me].name == 'steampumker'){
      //ターン数が奇数: 攻撃
      //ターン数が偶数: タレットの設置
      //タレットが3つ以上: 攻撃力の3倍のダメージで攻撃、タレットを破壊
      if(enemyturret >= 3){
         humandamaged('players',me,targetselect,enemyturret,1);
         document.getElementById('EnemyFriendBack').innerHTML = '';
         enemyturret = 0;
         EnemyTurrettekiou();
      }
      if((turncount % 2) == 0){
         document.getElementById('EnemyFriendBack').innerHTML = '<br><b><font color="#DF0101">turret</font><span id="EnemyTurret"></span></b><br><br>';
         enemyturret += 1;
         EnemyTurrettekiou();
         log.textContent = humans.enemies[me].name+'はturretを設置した!';
      }else{
         await humandamaged('players',me,targetselect,1,1);
      }
      if(enemyturret > 0){await humandamaged('players',me,targetselect,enemyturret*0.5,1);}
   }else if(humans.enemies[me].name == 'RailwayGun "Shemata"'){
      //
      //
      //
      playerhealth = 0;
      log.textContent = 'しーんだしんだ、シリウスブラ〜ック!';
      defeat();//いや雑にもほどがあるやろ
   }else if(humans.enemies[me].name == 'joker'){
      //1:爆弾を投げる。普通(x1),雷(x2),炎(x3),閃光弾(x0.5,スタン1)
      //if(max0.25>):勝ち気(攻撃が0倍か4倍になる)を付与(毎ターン)
      x = 1;
      if(humans.enemies[me].health <= humans.enemies[me].health * 0.25){x = [0,4];x = x[Math.floor(Math.random()*2)]};
      y = Math.floor(Math.random() * 4);
      switch(y){
         case 1:log.textContent = '普通の爆弾だった!!';break;//これによる効果とかもあっていいかも
         case 2:log.textContent = '爆弾は雷光弾だった!!!';break;
         case 3:log.textContent = '爆弾は焼夷弾だった!';break;
         case 0:log.textContent = '爆弾は閃光弾だった!!';buffadd('humans.players[me].buffs','stan',1,1);y = 0.5;break;
      }
      await delay(1000);
      await humandamaged('players',me,targetselect,x*y,0);
   }
   await enemycontidmg(me);
   if(humans.enemies[me].health < 0){humans.enemies[me].health = 0};
   if(humans.enemies[me].health == 0){window.setTimeout(killedenemy, 1000)}
   else {
      await delay(1000);
      NextTurnis();
   }
}
//こっから変数とか関数とか
let enemyturret = 0;
function EnemyTurrettekiou(){
   document.getElementById('EnemyTurret').textContent = 'x' + enemyturret;
}
//#endregion

//#region 休憩所の動き
let Camprestper
  async function Camprest(){
   playerhealth += playermaxhealth * Camprestper;
   playerhealth = Math.floor(playerhealth);
   if(playerhealth > playermaxhealth){playerhealth = playermaxhealth;};
   log.textContent = '寝ることにした....';//睡眠阻害イベント...はさすがにやめようか..wちょっと隠しイベント多すぎる
   await delay(2000);
   log.textContent = '起きた！！！！！！！';
   await delay(1000);
   document.getElementById('EventArea').innerHTML = '';
   log.textContent = '';
   document.getElementById('GameArea').style.display = 'none';
   document.getElementById('NowMap').style.display = 'block';
   
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 4;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
  }
  async function Camptrade(){
      save();
   if(y == 1){
         log.textContent = '武器屋に話しかけた！';
         await delay(1000);
         nowshop = 1;
         log.textContent = 'ここにはこんなものがあるけど、どうする？';
         document.getElementById('EventArea').innerHTML = '<iframe height="230" width="200" src="assets/shops/weapons.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
      }else if(y == 2){
         log.textContent = '防具屋に話しかけた！';
         await delay(1000);
         nowshop = 2;
         log.textContent = 'うちの店ではこんなものが売ってるよ';
         document.getElementById('EventArea').innerHTML = '<iframe height="400" width="300" src="assets/shops/armors.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
      }else if(y == 3){
         log.textContent = '道具屋に話しかけた！';
         await delay(1000);
         nowshop = 3;
         log.textContent = 'いらっしゃいませぇぇぇぇぇ？？ご注文をどうぞ！！！！';
         document.getElementById('EventArea').innerHTML = '<iframe height="400" width="300" src="assets/shops/tools.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
      }else if(y == 10){
         log.textContent = '武器屋に話しかけた！';
         await delay(1000);
         nowshop = 10;
         log.textContent = 'ほう..よく来たな。好きに見ていってくれ';
         document.getElementById('EventArea').innerHTML = '<iframe height="400" width="300" src="assets/shops/rareweapons.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
}
     
  }
  const Camprandomtool = ['Aspirin','Pablon','Trypsin','ThrowKnife','TrickyVariable','BottleGrenade','Redcard','Bluecard','Greencard'];
  const RareCamprandomtool = ['Lulu','Potion','CoveringFire','Bomb','Blackcard'];
  
//shop
let nowshop = 0;
let haveweapons = [];
let havearmors = [];
let equipweapon = 0;
let equiparmor = 0;
let equiptool1 = Potion;
let equiptool2 = Bomb;
let equiptool3 = Redcard;
let weaponpower = 0;
let armorshell = 0;
function ShopBuyButton(){
   const num = +document.getElementById('ShopInputText').value;
   switch(nowshop){
      case 1:
      if(haveweapons.includes(weapons.name[num])){
         log.textContent = 'you already have a it!';
      }else{
         if(euro >= weapons.price[num]){
            euro -= weapons.price[num];
            haveweapons.push(weapons.name[num]);
            log.textContent = weapons.name[num]+'を購入しました!';
         }else{
            log.textContent = 'not enough euro..';
         };
      }
      break;
      case 10:
      if(haveweapons.includes(rareweapons.name[num])){
         log.textContent = 'you already have a it!';
      }else{
         if(euro >= rareweapons.price[num]){
            euro -= rareweapons.price[num];
            haveweapons.push(rareweapons.name[num]);
            log.textContent = rareweapons.name[num]+'を購入しました!';
         }else{
            log.textContent = 'not enough euro..';
         };
      }
      break;
      case 2:
      if(havearmors.includes(armors.name[num])){
         log.textContent = 'you already have a it!';
      }else{
         if(euro >= armors.price[num]){
            euro -= armors.price[num];
            havearmors.push(armors.name[num]);
            log.textContent = armors.name[num]+'を購入しました!';
         }else{
            log.textContent = 'not enough euro..';
         };
      }
      break;
      case 3:
      if(euro >= tools.price[num]){
         euro -= tools.price[num];
         eval(tools.id[num]).num++;
         log.textContent = tools.name[num]+'を購入しました!';
      }else{
         log.textContent = 'not enough euro..';
      };
      break;
   }



   save();
   document.getElementById('ShopInputText').value = '';
}
function CampBye(){
   log.textContent = 'ついでに装備を変えていこうかな？';
   document.getElementById('EventArea').innerHTML = '<button class="button"onclick="GoToEquip()">そうしよう！</button><br><button class="button"onclick="Campback()">やめとこう！</button>';
}
function Campback(){
   document.getElementById('EventArea').innerHTML = '<button id="CampRest" onclick="Camprest()"></button><br><button id="CampTrade" onclick="Camptrade()"></button>'
   document.getElementById('CampRest').textContent = '朝まで休む(' + Camprestper*100 + '%回復)';//30のときはスキルカード強化みたいなやつあってもいいかも
   switch(y){
      case 1: document.getElementById('CampTrade').textContent = '武器商人に話しかける';     break;
      case 2: document.getElementById('CampTrade').textContent = '防具取扱専門家に話しかける'; break;
      case 3: document.getElementById('CampTrade').textContent = '道具屋24に話しかける';     break;
      case 10:document.getElementById('CampTrade').textContent = '放浪武器商人に話しかける';   break;
   }
}
let appearweapons = '';
let appeararmors = '';
let appeartools = '';
function GoToEquip(){
   document.getElementById('EventArea').innerHTML = '<button class="button"onclick="GoToEquipWeapon()">Equip Weapon</button>  <button class="button"onclick="GoToEquipArmor()">Equip Armor</button>  <button class="button"onclick="GoToEquipTool()">Equip Tool</button><br><br><button class="button"onclick="Campback()">Leave</button>'
}
function GoToEquipWeapon(){
   nowshop = 4;
   document.getElementById('EventArea').innerHTML = '<span id="AppearShops"></span><br><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopEquipButton()">Equip</button><br><br><button class="button" onclick="GoToEquip()">Back</button>';
   appearweapons = '';
   x = 0;
   for(let i = 0; i < haveweapons.length; i++){
      let ChildNText = document.createElement('span');
      ChildNText.innerHTML = haveweapons[i]+ ` <button class="button" onclick="ShopEquipButton('weapon',${i})">Equip</button>` + '<br>';
      document.getElementById('AppearShops').appendChild(ChildNText);
   }
}
function GoToEquipArmor(){
   nowshop = 5;
   document.getElementById('EventArea').innerHTML = '<span id="AppearShops"></span><br><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopEquipButton()">Equip</button><br><br><button class="button" onclick="GoToEquip()">Back</button>';
   appeararmors = '';
   x = 0;
   for(let i = 0; i < havearmors.length; i++){
      let ChildNText = document.createElement('span');
      ChildNText.innerHTML = havearmors[i]+ ` <button class="button" onclick="ShopEquipButton('armor',${i})">Equip</button>` + '<br>';
      document.getElementById('AppearShops').appendChild(ChildNText);
   }
}
function ShopEquipButton(){
   const Num = +document.getElementById('ShopInputText').value;
   switch(nowshop){
      case 4:
         if(haveweapons.includes(weapons.name[Num])){
            log.textContent = 'あなたは'+weapons.name[Num]+'を装備しました！';
            equipweapon = Num;
            weaponpower = weapons.power[Num];
         }else{log.textContent = 'you dont have it!'};
      break;
      case 5:
         if(havearmors.includes(armors.name[Num])){
            log.textContent = 'あなたは'+armors.name[Num]+'を装備しました！';
            equiparmor = Num;
            armorshell = armors.shell[Num];
         }else{log.textContent = 'you dont have it!'};
      break;
   }
   document.getElementById('ShopInputText').value = '';
}
function GoToEquipTool(){
   nowshop = 6;
   localStorage.setItem('Aspirin', Aspirin.num);
   localStorage.setItem('Pablon', Pablon.num);
   localStorage.setItem('Trypsin', Trypsin.num);
   localStorage.setItem('Lulu', Lulu.num);
   localStorage.setItem('Potion', Potion.num);
   localStorage.setItem('ThrowKnife', ThrowKnife.num);
   localStorage.setItem('TrickyVariable', TrickyVariable.num);
   localStorage.setItem('CoveringFire', CoveringFire.num);
   localStorage.setItem('BottleGrenade', BottleGrenade.num);
   localStorage.setItem('Bomb', Bomb.num);
   localStorage.setItem('Redcard', Redcard.num);
   localStorage.setItem('Bluecard', Bluecard.num);
   localStorage.setItem('Greencard', Greencard.num);
   localStorage.setItem('Blackcard', Blackcard.num);

   document.getElementById('EventArea').innerHTML = '<iframe src="resources/appeartools.html" width="100%" height="100%" frameborder="0"></iframe><br><div id="Camptoolequip"><button id="Campequipedtool1" class="button" onclick="Campequiptool(1)"> </button>　<button id="Campequipedtool2" class="button" onclick="Campequiptool(2)"> </button>　<button id="Campequipedtool3" class="button" onclick="Campequiptool(3)"> </button></div><br><br><button class="button" onclick="GoToEquip()">Back</button>'; //持ってないやつも登録できるようにしたら処理楽かな？
   document.getElementById('Campequipedtool1').textContent = equiptool1.name;
   document.getElementById('Campequipedtool2').textContent = equiptool2.name;
   document.getElementById('Campequipedtool3').textContent = equiptool3.name;
   log.textContent = 'どうしようかな...?';
   }
function Campequiptool(code){
   x = code;
   log.textContent = '何を持とう？';
   document.getElementById('Camptoolequip').innerHTML = '<i>Item一覧</i><br>' +'<button id="CampselectTool01" class="button" onclick="Campselecttool(Aspirin)">アスピリン</button>' +'<button id="CampselectTool02" class="button" onclick="Campselecttool(Pablon)">パブロン</button>' +'<button id="CampselectTool03" class="button" onclick="Campselecttool(Trypsin)">トリプシン</button>' +'<button id="CampselectTool04" class="button" onclick="Campselecttool(Lulu)">ルル</button>' +'<button id="CampselectTool05" class="button" onclick="Campselecttool(Potion)">ポーション</button><br>' +'<button id="CampselectTool11" class="button" onclick="Campselecttool(ThrowKnife)">投げナイフ</button>' +'<button id="CampselectTool12" class="button" onclick="Campselecttool(TrickyVariable)">トリッキーな変数</button>' +'<button id="CampselectTool13" class="button" onclick="Campselecttool(CoveringFire)">援護射撃</button>' +'<button id="CampselectTool14" class="button" onclick="Campselecttool(BottleGrenade)">ボトルグレネード</button>' +'<button id="CampselectTool15" class="button" onclick="Campselecttool(Bomb)">爆弾</button><br>' +'<button id="CampselectTool21" class="button" onclick="Campselecttool(Redcard)">赤のスキップ</button>' +'<button id="CampselectTool22" class="button" onclick="Campselecttool(Bluecard)">青のリバース</button>' +'<button id="CampselectTool23" class="button" onclick="Campselecttool(Greencard)">緑のドロアル</button>' +'<button id="CampselectTool24" class="button" onclick="Campselecttool(Blackcard)">黒のドロスー</button>';
   }
function Campselecttool(code){
   let equiptoolVar;
   switch(code){
   case Aspirin:
      equiptoolVar = 'アスピリン';
      break;
   case Pablon:
      equiptoolVar = 'パブロン';
      break;
   case Trypsin:
      equiptoolVar = 'トリプシン';
      break;
   case Lulu:
      equiptoolVar = 'ルル';
      break;
   case Potion:
      equiptoolVar= 'ポーション';
      break;
   case ThrowKnife:
      equiptoolVar = '投げナイフ';
      break;
   case TrickyVariable:
      equiptoolVar = 'トリッキーな変数';
      break;
   case CoveringFire:
      equiptoolVar = '援護射撃';
      break;
   case BottleGrenade:
      equiptoolVar = 'ボトルグレネード';
      break;
   case Bomb:
      equiptoolVar = '爆弾';
      break;
   case Redcard:
      equiptoolVar = '赤のスキップ';
      break;
   case Bluecard:
      equiptoolVar = '青のリバース';
      break;
   case Greencard:
      equiptoolVar = '緑のドロアル';
      break;
   case Blackcard:
      equiptoolVar = '黒のドロスー';
   }
   eval('equiptool' + x + ' = code');
   document.getElementById('Camptoolequip').innerHTML = '<button id="Campequipedtool1" class="button" onclick="Campequiptool(1)"> </button>　<button id="Campequipedtool2" class="button" onclick="Campequiptool(2)"> </button>　<button id="Campequipedtool3" class="button" onclick="Campequiptool(3)"> </button>';
   document.getElementById('Campequipedtool1').textContent = equiptool1.name;
   document.getElementById('Campequipedtool2').textContent = equiptool2.name;
   document.getElementById('Campequipedtool3').textContent = equiptool3.name;
   log.textContent = equiptoolVar+'を持つことにした！';
}
// #endregion

//#region skillshop
const SHOPexrandom = {
   name: ['GO!SPLIT!!', '雷ちゃん、召喚', 'トリッキーな変数', '私がかけた魔法だよ', 'Kyrie Eleison', '自走式閃光ドローン', '挑戦状を受け取ってください!!', '小心者の観測'],
   price: [95, 95, 95, 95, 110, 60, 90, 50],
   id: ['50%split', 'placeturret', 'trickyvariables', 'bigdiamond', 'kyrieeleison', 'standrone', 'recievechallenge', 'timidpursuit'],
   explain:['体力が半分以上ならば分身を召喚し、<br>ダメージを代わりに受けさせます。','タレットを配置する。<br>タレットは攻撃力の50%の攻撃力を持ちます。','爆弾を投擲し、<br>敵にランダムな効果を与える。','敵に攻撃力の150%のダメージを与え、<br>50%の確率で凍らせる。','敵に攻撃力の200%のダメージを与える。<br>対象の体力が70%以上の場合、400%のダメージ。','敵に攻撃力の75%のダメージを与え、<br>スタンさせる。','敵の防御力を下げ、自身の攻撃力を上げる。<br>','敵に攻撃力の60%のダメージを与え、<br>弱点把握状態を付与する。(2ターン)'],
  };
  const SHOPnsrandom = {
   name: ['Attach!slime!!', '匙を投げる？これはレンチだよ', 'かけ上手', '改善が必要だよ'],
   price: [70, 70, 70, 70],
   id: ['throwslime', 'throwwrench', 'gambler', 'improve'],
   explain:['敵にスライムをくっつけ、<br>攻撃を無効化する。','レンチを投げる準備をする。<br>レンチは攻撃力の200%の攻撃力を持つ。','ギャンブル熱状態に入り、<br>攻撃時0,2,4倍のいずれかの倍率がかかる。','攻撃力を上昇させる。バフをかける。<br>すでにある場合は解除する。',]
  };
  const SHOPpsrandom = {
   name: ['DoYourBest!!', '雷ちゃん、もうちょっと', '生粋の勝負師', '一度限りの取引'],
   price: [90, 90, 90, 90],
   id: ['sthree', 'solplaceturret', 'highsol', 'enemy50%pursuit'],
   explain:['slash時、たまに3回攻撃する。<br>','slashoflightが当たった時、<br>タレットを配置する。','slashoflightの当たる確率が下がるが、<br>倍率が9倍になる。','攻撃によって敵の体力が50%を下回った時、<br>攻撃力の70%で追撃する。',]
  };

  const allItems = [...SHOPexrandom.name.map((name, index) => ({name, price: SHOPexrandom.price[index], explain: SHOPexrandom.explain[index], id: SHOPexrandom.id[index], type: 'ex'})),
               ...SHOPnsrandom.name.map((name, index) => ({name, price: SHOPnsrandom.price[index], explain: SHOPnsrandom.explain[index], id: SHOPnsrandom.id[index], type: 'ns'})),
               ...SHOPpsrandom.name.map((name, index) => ({name, price: SHOPpsrandom.price[index], explain: SHOPpsrandom.explain[index], id: SHOPpsrandom.id[index], type: 'ps'}))];

  function skillshopshuffle(array){
   for (let i = array.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
  }

  function skillshopcreateCard(item){
   const card = document.createElement('div');
   card.classList.add('card');
   
   const cardTextbox = document.createElement('div');
   cardTextbox.classList.add('card__textbox');
   
   const titleText = document.createElement('span');
   titleText.classList.add('card__titletext');
   titleText.innerHTML = `${item.name}   ${item.type}<br>価格: ${item.price}€<br>${item.explain}<br>`;
   
   const buyButton = document.createElement('button');
   buyButton.classList.add('button');
   buyButton.setAttribute('onclick', `BuyItem('${item.name}', '${item.price}', '${item.id}', '${item.type}')`);
   buyButton.textContent = 'Buy';
   
   cardTextbox.appendChild(titleText);
   cardTextbox.appendChild(buyButton);
   card.appendChild(cardTextbox);
   
   return card;
  }

  function SkillShopOpen() {
   AllowMove = 0;
   document.getElementById('NowMap').style.display = 'none';
   document.getElementById('EventArea').style.display = 'block';
   document.getElementById('EventArea').innerHTML = `
   <div id="skillshopcorner"></div><br>
   <button class="button" onclick="SkillShopClose()">Exit</button>
   `
   const cardsContainer = document.getElementById('skillshopcorner');
   cardsContainer.style.display = 'block';
   cardsContainer.innerHTML = ''; // 前の内容をクリアする
   const selectedItems = skillshopshuffle(allItems).slice(0, 6);
   selectedItems.forEach(item => {
     const card = skillshopcreateCard(item);
     cardsContainer.appendChild(card);
   });
  }

  function SkillShopClose() {
   document.getElementById('skillshopcorner').innerHTML = ''; // 前の内容をクリアする
   log.textContent = '';
   document.getElementById('NowMap').style.display = 'block';
   
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 0;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
  }

  function BuyItem(name, price, id, type) {
   if (euro >= price) {
     euro -= price;
     if(type === 'ex') humans.players[me].ex.id = id;
 else if(type === 'ns') playerns.id = id;
 else if(type === 'ps') playerps.id = id;
     log.textContent = name + 'を購入しました！';
     
   } else {
     log.textContent = 'not enough euro...';
   }
   save();
  }

// #endregion

//こっからイベントとかそのへん
//#region candystand
let candybar = [];
async function Candytake(){
   //デバフによって初期からたくさんあるってのもありかも
   //log.textContent = 'あめを食べた..';
   //await delay(1000);
   let candynum = Math.floor(Math.random() * 20) + 1;
   if (!candybar.includes(candynum)){
   candybar.push(candynum);
   switch(Math.floor(Math.random()*3)+1){
      case 1:
         playerattack += Math.floor(Math.random() * 3) + 2;if(playerattack < 1){playerattack = 1};
         log.textContent = '攻撃力が上がった！';
         break;
      case 2:
         playerdefense += Math.floor(Math.random() * 3) + 1;if(playerdefense < 0){playerdefense = 0};
         log.textContent = '防御力が上がった！';
         break;
      case 3:
         playermaxhealth += Math.floor(Math.random() * 5) + 5;if(playermaxhealth < 1){playermaxhealth = 1};
         log.textContent = '体力が増えた！';
         break;
   };
   }else{
      switch(Math.floor(Math.random()*3)+1){
         case 1:
            playerattack -= Math.floor(Math.random() * 13) + 5;if(playerattack < 1){playerattack = 1};
            log.textContent = '攻撃力が下がった！';
            break;
         case 2:
            playerdefense -= Math.floor(Math.random() * 10) + 3;if(playerdefense < 0){playerdefense = 0};
            log.textContent = '防御力が下がった！';
            break;
         case 3:
            playermaxhealth -= Math.floor(Math.random() * 21) + 10;if(playermaxhealth < 1){playermaxhealth = 1};
            if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
            log.textContent = '体力が減った！';
            break;
      };
   }
}
// #endregion
//#region hopeful-button
async function HopeButtonact(){
   AllowMove = 1;
   log.textContent = 'ボタンを押した....';
   await delay(1000);
   if(Math.floor(Math.random() * 2) == 0){
      log.textContent = 'な、中から四葉のクローバーが...!!';
      buffclear('humans.players[me].buffs');
      buffadd('playerbuff','luck',2,1);
   } else {
      log.textContent = 'ボタンが溶けて手がやられた！';
      buffadd('humans.players[me].buffs','shelldown',3,1);
      buffadd('humans.players[me].buffs','powerdown',3,2);
   }
   await delay(1000);
   log.textContent = '';
   document.getElementById('NowMap').style.display = 'block';
   

   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 0;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
}
// #endregion
//#region chest
async function OpenChest(code){
   AllowMove = 1;
   switch(code){
   case 1:
      log.textContent = 'チェストを開けた...';
      await delay(1000);
      x = Camprandomtool[Math.floor(Math.random() * Camprandomtool.length)];
      w = eval(x); w.num += 1;
      log.textContent = w.name+'を手に入れた！';
      await delay(750);
      x = Camprandomtool[Math.floor(Math.random() * Camprandomtool.length)];
      w = eval(x); w.num += 1;
      log.textContent = w.name+'を手に入れた！';
      await delay(750);
      x = Camprandomtool[Math.floor(Math.random() * Camprandomtool.length)];
      w = eval(x); w.num += 1;
      log.textContent = w.name+'を手に入れた！';
      await delay(1000);
   break;
   case 2:
      log.textContent = 'チェストを開けた...';
      await delay(1000);
      x = RareCamprandomtool[Math.floor(Math.random() * RareCamprandomtool.length)];
      w = eval(x); w.num += 1;
      log.textContent = w.name+'を手に入れた！';
      await delay(750);
      x = RareCamprandomtool[Math.floor(Math.random() * RareCamprandomtool.length)];
      w = eval(x); w.num += 1;
      log.textContent = w.name+'を手に入れた！';
      await delay(750);
      x = RareCamprandomtool[Math.floor(Math.random() * RareCamprandomtool.length)];
      w = eval(x); w.num += 1;
      log.textContent = w.name+'を手に入れた！';
      await delay(1000);
   break;
   }
   document.getElementById('EventArea').innerHTML = '';
   log.textContent = '';
   document.getElementById('GameArea').style.display = 'none';
   document.getElementById('NowMap').style.display = 'block';
   

   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 0;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
}
// #endregion
//#region Cookietake
async function Cookietake(){
   AllowMove = 1;
   log.textContent = 'クッキーを食べてみた...';//これはお助け的イベントだから上昇量は少なめ
   await delay(1000);
   switch(Math.floor(Math.random()*3)+1){
      case 1:
         playerattack += 3;
         x = '熱い！焼きたてだぜ！！';
         break;
      case 2:
         playerdefense += 3;
         x = '硬い！凍ってたかもしんねぇ！！';
         break;
      case 3:
         playermaxhealth += 10;
         playerhealth = playermaxhealth;
         x = 'うまい！！';//体力増える..の味が思いつかなすぎた これはしゃーない
         break;
      case 4:
         playermaxmp += 3;
         x = '甘い！砂糖マシマシだー！！';
         break;
      case 5:
         playercritdmg += 0.2;//当たり枠(会心ダメージ増加はぶっ壊れてる..たぶん)
         x = 'はっ..!?これは....ジャム入りだ.....!!!!';//ちなみにコッペくんはジャムが上に乗ったタルト生地のクッキーが好物です マカロンと張るくらい好き
         break;
   }
   log.textContent = x;
   await delay(1000);
   document.getElementById('EventArea').innerHTML = '';
   log.textContent = '';
   document.getElementById('GameArea').style.display = 'none';
   document.getElementById('NowMap').style.display = 'block';
   

   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 0;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
}
// #endregion
//#region placebomb
async function placebomb(){
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 15;
   bombtimer = 5;
   PlacedBombx = MAPx;
   PlacedBomby = MAPy;
   log.textContent = '爆弾を設置しました！';
}//出口を消した時どうする論争
//#endregion
//#region catus
async function CatusAct(){
   if(playerhealth > 10){
      log.textContent = 'いてっ';
      playerhealth -= 10;playerattack += 5;if(stage == 3){playerhealth -= 10;playerattack += 5;}
      MAPx = Math.floor(SELECTx / 75);
      MAPy = Math.floor(SELECTy / 75);
      objectMap[MAPy][MAPx] = 0;
   }else{
      log.textContent = 'なんか..今触ったら死にそう....'
   }
   await delay(500);
   log.textContent = '';
}
//#endregion
//#region scorpion
async function ScorpionAct(code){
   log.textContent = '刺された...';
   switch(code){
      case 1:buffadd('playerbuff','poison',3,1);break;
      case 2:buffadd('playerbuff','poison',3,2);break;
   }
   playerattack += 10*code;
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 0;
   await delay(500);
   log.textContent = '';
}
//#endregion

//#region wrwrdイベント(fun値50以下の際1/23の確率で出現)
function ZomuEvent(){//創生黎明の原野
   log.textContent = 'かまってぇや、マジで';
   playername = 'zomusan'
   humans.players[me].ex.id = 'bombe';//clownみたいな感じで爆弾投げ。普通、水、マグマ、閃光弾。ex使用後は攻撃力が1.5倍になる(1ターン)
   playerns.id = 'hitelec';//4の倍数のターンの時、強制的にエレキギターで殴る。攻撃力の3倍のダメージを与える。
   playerps.id = 'solx5but'//slashoflightを使った際、当たれば5倍だが、外れれば自分にダメージを与える。
   buttonsolid = '#000000';buttonback = '#50C878';
   document.getElementById('ButtonStyle').textContent = `.button{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};cursor: pointer;}input[type="text"]:focus{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};}`;
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 0;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
}
function UtusenEvent(){
   log.textContent = 'はいどうも〜、僕です';
   playername = 'utusen'
   humans.players[me].ex.id = '50%appease';//相手の体力が半分以下なら仲間にする｡でなければ､攻撃力の1.5倍のダメージ
   playerns.id = 'ehp50%but';//3の倍数のターンの時、相手か自分の体力を半分にする。運ゲー
   playerps.id = 'reverseta';//逆TA(相手より体力がめちゃ低いとダメージを喰らわない)
   buttonsolid = '#4c6cb3';buttonback = '#949495';
   document.getElementById('ButtonStyle').textContent = `.button{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};cursor: pointer;}input[type="text"]:focus{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};}`;
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 0;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
}
// #endregion      

