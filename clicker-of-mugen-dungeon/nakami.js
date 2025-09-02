//内部へようこそ！！！

//探索部分
//#region
document.getElementById('GameArea').style.display = 'block';
document.getElementById('NowMap').style.display = 'none';
const canvas = document.getElementById("NowMap");
const ctx = canvas.getContext("2d");
const backgroundMaps = {
   //草原
   1.1:[
   //こっから草原
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
   ]//boss room
   ],

   //砂漠
   2.1:[
   //ここから昼砂漠
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
      ['d','d','c','c','c','d','d','c'],
      ['d','c','c','c','d','d','c','c'],
      ['d','c','c','c','d','d','c','c'],
      ['c','c','c','c','d','d','c','c'],
      ['c','c','c','c','d','c','c','c'],
      ['d','d','c','d','d','c','c','c'],
      ['d','d','c','d','d','c','c','c'],
      ['c','c','c','d','d','c','c','c'],
   ],//bossroom

   //ここから夜砂漠
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
   ]//bossroom
   ],


}
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
const backgroundMapnum = {
   1.1:['0.3'],
   2.1:['7.3','14.3'],
};

const objectMaps = {
   //草原
   1.1:[
      [
         [0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 2, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 11, 0, 2, 0],
         [0, 1, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 2, 0, 0, 0],
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
   ],

   //砂漠
   2.1:[
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
   ],
}
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
const objectMapnum = {
   1.1:['0.5'],
   2.1:['9.4','17.4'],
};
let stage = 1;
let floor = 0;
let step = 0;

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
   if(AllowMove == 0){
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
   if(AllowMove == 0){
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
         document.getElementById('log').textContent = '休憩できそうな場所を見つけた！';
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
      MAPx = backgroundMapnum[stage][step-1].split('.');
      MAPy = +MAPx[1]+1
      MAPx = +MAPx[0]
      backgroundMap = backgroundMaps[stage][Math.floor(Math.random() * MAPy)+MAPx];
      MAPx = objectMapnum[stage][step-1].split('.');
      MAPy = +MAPx[1]+1
      MAPx = +MAPx[0]
      objectMap = objectMaps[stage][Math.floor(Math.random() * MAPy)+MAPx];
      objectMap = JSON.parse(JSON.stringify(objectMaps[stage][Math.floor(Math.random() * MAPy) + MAPx]));
      if(stage == 1){
         if(fun == 23 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[stage][4];
            objectMap = objectMaps[stage][6];
         }else if(fun <= 50 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[stage][5];
            objectMap = objectMaps[stage][7];
         };
      }else if(stage == 2){
         if(fun == 68 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[stage][4];
            objectMap = objectMaps[stage][5];
            objectMap = JSON.parse(JSON.stringify(objectMaps[stage][Math.floor(Math.random() * MAPy) + MAPx]));
         }else if(fun <= 50 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[stage][11];
            objectMap = objectMaps[stage][13];
            objectMap = JSON.parse(JSON.stringify(objectMaps[stage][Math.floor(Math.random() * MAPy) + MAPx]));
         };
      }else if(stage == 3){
         if(fun == 68 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[stage][10];
            objectMap = objectMaps[stage][12];
            objectMap = JSON.parse(JSON.stringify(objectMaps[stage][Math.floor(Math.random() * MAPy) + MAPx]));
         }else if(fun <= 50 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[stage][11];
            objectMap = objectMaps[stage][13];
            objectMap = JSON.parse(JSON.stringify(objectMaps[stage][Math.floor(Math.random() * MAPy) + MAPx]));
         };
      }
      if(stage == 1 && floor >= 10){SELECTx = 150;SELECTy = 525;backgroundMap = backgroundMaps[6];objectMap = objectMaps[8];}//創生黎明の原野
 else if(stage == 2 && floor >= 7 ){SELECTx = 150;SELECTy = 525;backgroundMap = backgroundMaps[5];objectMap = objectMaps[6];}//ガチェンレイゲスドゥールラート(昼)
 else if(stage == 3 && floor >= 3 ){SELECTx = 150;SELECTy = 525;backgroundMap = backgroundMaps[12];objectMap = objectMaps[14];}//ガチェンレイゲスドゥールラート(夜)

   ctx.clearRect(0, 0, 600, 600);
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
}
function NextStage(){
   floor = 0;
   candybar = [];
   let NextStageIs = 0;
   switch(stage){
      case '1.1':
         NextStageIs = [2.1];
         stage = NextStageIs[Math.floor(Math.random()*NextStageIs.length)];
         step = 1;
         GoNextFloor();
      break;
      case 2.1:
         stage = 2.1;
         step = 2;
         GoNextFloor();
      break;
      case 2.2:
         NextStageIs = [3.1];
         stage = NextStageIs[Math.floor(Math.random()*NextStageIs.length)];
         step = 1;
         GoNextFloor();
      break;

         
   }
}

//#endregion

let a,b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;//こいつらは計算用

let fun = Math.floor(Math.random() * 100)+1;


let playername = 'player';
let sp = 1;
let playerhealth = 0;
let playermaxhealth = 0;
let playerattack = 0;
let playerdefense = 0;
let playerexp = 0;
let playerpower = 1;
let playershell = 1;
let playermp = 0;
let playermaxmp = 10;
let playermattack = 0;
let playermdefense = 0;
let playercritlate = 0.03; //これが確率。会心率ってやつだね
let playercritdmg = 3; //これが倍率。会心ダメージってやつだね
let playercritresist = 0;//これは会心抵抗。ハルカ(正月)さんが下げるやつだね
let magic1 = 0,magic2 = 0,magic3 = 0;

let enemyhp = 0;//この辺は固有値というか規定値。接頭辞によってこっから変動させたりできるようにする用
let enemyatk = 0;
let enemydef = 0;
let enemymatk = 0;
let enemymdef = 0;
let enemycrla = 0;
let enemycrdm = 0;
let enemycrrs = 0;

let enemyhealth = 0;
let enemymaxhealth = 0;
let enemyattack = 0;
let enemydefense = 1;
let enemymattack = 0;
let enemymdefense = 0;
let enemypower = 1;
let enemyshell = 1;
let playerlevel = 1;
let enemylevel = 1;
let enemycritlate = 0.03; //これが確率。会心率ってやつだね
let enemycritdmg = 3; //これが倍率。会心ダメージってやつだね
let enemycritresist = 0;//これは会心抵抗。ハルカ(正月)さんが下げるやつだね

let playerbuff = [];
let playerbufftime = [];
let playerbuffapply = [];
let playerdebuff = [];
let playerdebufftime = [];
let playerdebuffapply = [];

let enemybuff = [];
let enemybufftime = [];
let enemybuffapply = [];
let enemydebuff = [];
let enemydebufftime = [];
let enemydebuffapply = [];

let turn = 0;//今誰のターンか
let turncount = 0;//今のターン数

let phase = 0;//何中か


//0 = false,1 = true
let bossbattlenow = 0;

//全道具です
//#region 
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

let enemyname = 0;
let enemynames = {
   1.1:["彷徨わない亡霊", "地上の月兎", "悠々自適なクラス委員", "大胆不敵な問題児", "兎角のシルバージャグラー", "デスブリンガー・ナース",],
   2.1:["ついに動いたサボテン","スフィンクスの残像","襲来セシ砂嵐","サソリ風ザリガニ","毒無しのガラガラヘビ","裏切りのアリジゴク","ピンクな先輩", "ブルーな後輩", "過激派のハッカー", "反旗を翻したアンドロイド", "腐敗した落武者", "アスピリン中毒者",],//夜砂漠
   3.1:["古書館の魔術師", "トラブルメーカーな天才少女","黒服","無邪気な夜の希望"]//学校(ここだけブルアカにしましょ)
               };
let bossenemynames = ['purpleslime','steampumker','RailwayGun "Shemata"','joker']//RailwayGun "Shemata"...wwあ、列車砲シェマタね 対策委員会が壊そうとしてたやつ
let enemyprefixe = 0;
let enemyprefixes = ['激昂','冷静沈着な','ギャンブラーな','守りが固い','心眼持ちの'];
let saydefeats = 0;
let NStimeout = 0;
let skillcooldown = 0;
let playerEX = {
   id:'50%heal',
   name:'50%回復'
}
let playerNS = {
   id:'5%heal',
   name:'5%回復'
};
let playerPS = {
   id:0,
   name:0
};

//超シンプルで使いやすい子達
function tekiou(){
   document.getElementById('EnemyName').textContent = enemyname;
   document.getElementById('PlayerName').textContent = playername;
   document.getElementById('EnemyHealth').textContent = 'HP:'+enemyhealth;
   document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth;
   document.getElementById('PlayerHealth').textContent = 'HP:'+playerhealth;
   document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;
   document.getElementById('PlayerMP').textContent = 'MP:'+playermp;
   document.getElementById('PlayerMaxMP').textContent = playermaxmp;
   

   //これアイコンにするのもありかも
   switch(playerEX.id){
   case '50%heal':
      playerEX.name = '50%回復'
      break;
      case '50%split':
      playerEX.name = 'GO!SPLIT!!'
      break;
      case 'placeturret':
      playerEX.name = '雷ちゃん、召喚'
      break;
      case 'trickyvariables':
      playerEX.name = 'トリッキーな変数'
      break;
      case 'bigdiamond':
      playerEX.name = '私がかけた魔法だよ'
      break;
      case 'kyrieeleison':
      playerEX.name = 'Kyrie Eleison'
      break;
      case 'standrone':
      playerEX.name = '自走式閃光ドローン'
      break;
      case 'recievechallenge':
      playerEX.name = '挑戦状を受け取ってください！'
      break;
      case 'timidpursuit':
      playerEX.name = '小心者の観測'
      break;
   }
   switch(playerNS.id){
      case '5%heal':
         playerNS.name = '5%回復'
         break;
      case 'throwslime':
         playerNS.name = 'Attach!slime!!'
         break;
      case 'throwwrench':
         playerNS.name = '匙を投げる？これはレンチだよ'
         break;
      case 'gambler':
         playerNS.name = 'かけ上手'
         break;
      case 'improve':
         playerNS.name = '改善が必要だよ'
         break;
   }
   switch(playerPS.id){
      case 'sthree':
         playerPS.name = 'DoYourBest!!'
         break;
      case 'solplaceturret':
         playerPS.name = '雷ちゃん、もうちょっと'
         break;
      case 'highsol':
         playerPS.name = '生粋の勝負師'
         break;
      case 'enemy50%pursuit':
         playerPS.name = '一度限りの取引';
         break;
   }
}


//#region Inventory
function inventoryOpen(){
   AllowMove = 1;
   localStorage.setItem('num', playerlevel);
   document.getElementById('InventoryArea').style.display = 'flex';
   document.getElementById('InventoryArea').innerHTML = `
      <div id="Status">${playername}<br>Level: ${playerlevel}<br>EXP: ${playerexp}<br>Health: ${playerhealth}/${playermaxhealth}<br>MP: ${playermaxmp}<br>attack: ${playerattack}<br>defense: ${playerdefense}<br>crit-late: ${playercritlate}<br>crit-dmg: ${playercritdmg}</div>　
      <div id="Sutefuri">magics<br>1:${magic1} <button class="button" onclick="MagicChange(1)">change</button><br>2:${magic2} <button class="button" onclick="MagicChange(2)">change</button><br>3:${magic3} <button class="button" onclick="MagicChange(3)">change</button><br><iframe src="resources/appearmagics.html" style="width: 90%; height: 100px;"></iframe><br><div id="MagicChangePlace"></div><br><br><span id="Appearsp">${sp} pt</span><br><button class="button" onclick="SuteFuri('atk')">attack</button><br><button class="button" onclick="SuteFuri('def')">defense</button><br><button class="button" onclick="SuteFuri('hp')">maxhealth</button><br><button class="button" onclick="SuteFuri('mp')">magicpt</button><br><button class="button" onclick="SuteFuri('crla')">clit-late</button><br><button class="button" onclick="SuteFuri('crdm')">clit-dmg</button></div>
   `;
}
// <div id="Equip">武器:${weapons.name[equipweapon]}(+${weapons.num[equipweapon]})<br>装甲:${armors.name[equiparmor]}(+${armors.num[equiparmor]})<br>${equiptool1.name}:${equiptool1.num}<br>${equiptool2.name}:${equiptool2.num}<br>${equiptool3.name}:${equiptool3.num}<br><br>EX:${playerEX.name}<br>NS:${playerNS.name}<br>PS:${playerPS.name}</div>　
function inventoryClose(){
   AllowMove = 0;
   document.getElementById('InventoryArea').style.display = 'none';
   document.getElementById('log').textContent = '';
};
//#endregion

//#region Magics
const Magics = ['heal','power','shell','poison','thunder','fire','healer than','luck','ell thunder','more power','more shell','deadly poison','giga thunder','giga fire','the healest','greatluck','Thoron','random',]
const MagicInfo = {
   mp:[4,5,5,7,3,4,8,7,5,9,9,11,10,8,12,12,13,5],
   onclick:[Heal,Power,Shell,Poison,Thunder,Fire,Healerthan,Luck,Ellthunder,Morepower,Moreshell,Deadlypoison,Gigafire,Thehealest,Greatluck,Thoron,Random]
}
function MagicChange(num){document.getElementById('MagicChangePlace').innerHTML = `<input type="text" size="10" id="MagicChangeInput"></input><button class="button" onclick="MagicChangeDecide(${num})">Go</button>`}
function MagicChangeDecide(num){
   y = +document.getElementById('MagicChangeInput').value;
   document.getElementById('MagicChangePlace').innerHTML = '';
   y = Magics[y-1];
   let code = Math.floor((playerlevel+2)/3);
   code = Magics.slice(0, code);
   if(code.includes(y)){
   switch(num){
      case 1:magic1 = y;break;
      case 2:magic2 = y;break;
      case 3:magic3 = y;break;
   }
   document.getElementById('log').textContent = y+'を覚えた！';
   }else{
      document.getElementById('log').textContent = 'error';
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

//buffの動き
//#region
function bufftekiou(){
   playerbuffapply = [];
   playerbuff.forEach(nanka => {//これをすると全部をやってくれるらしい？
      switch(nanka){
         case 'powerup1':
            playerbuffapply.push('<img src="assets/buffs/power_up_1.png" width="18" height="18"> ');
            break;
         case 'powerup2':
            playerbuffapply.push('<img src="assets/buffs/power_up_2.png" width="18" height="18"> ');
            break;
         case 'powerup3':
            playerbuffapply.push('<img src="assets/buffs/power_up_3.png" width="18" height="18"> ');
            break;
         case 'powerup4':
            playerbuffapply.push('<img src="assets/buffs/power_up_4.png" width="18" height="18"> ');
            break;
         case 'powerup5':
            playerbuffapply.push('<img src="assets/buffs/power_up_5.png" width="18" height="18"> ');
            break;
         case 'powerup6':
            playerbuffapply.push('<img src="assets/buffs/power_up_6.png" width="18" height="18"> ');
            break;
         case 'shellup1':
            playerbuffapply.push('<img src="assets/buffs/defense_up_1.png" width="18" height="18"> ');
            break;
         case 'shellup2':
            playerbuffapply.push('<img src="assets/buffs/defense_up_2.png" width="18" height="18"> ');
            break;
         case 'shellup3':
            playerbuffapply.push('<img src="assets/buffs/defense_up_3.png" width="18" height="18"> ');
            break;
         case 'shellup4':
            playerbuffapply.push('<img src="assets/buffs/defense_up_4.png" width="18" height="18"> ');
            break;
         case 'shellup5':
            playerbuffapply.push('<img src="assets/buffs/defense_up_5.png" width="18" height="18"> ');
            break;
         case 'shellup6':
            playerbuffapply.push('<img src="assets/buffs/defense_up_6.png" width="18" height="18"> ');
            break;
         case 'luck':
            playerbuffapply.push('<img src="assets/buffs/luck.png" width="18" height="18"> ');
            break;
         case 'greatluck':
            playerbuffapply.push('<img src="assets/buffs/luck_great.png" width="18" height="18"> ');
            break;
         case 'spliting':
            playerbuffapply.push('<img src="assets/buffs/spliting.png" width="18" height="18"> ');
            break;
         case 'LetsThrow':
            playerbuffapply.push('<img src="assets/buffs/wrench.png" width="18" height="18"> ');
            break;
      }
   });
   document.getElementById('PlayerBuff').innerHTML = playerbuffapply.join('');
   playerdebuffapply = [];
   playerdebuff.forEach(nanka => {
      switch(nanka){
         case 'burn1':
            playerdebuffapply.push('<img src="assets/buffs/burn_1.png" width="18" height="18"> ');
            break;
         case 'burn2':
            playerdebuffapply.push('<img src="assets/buffs/burn_2.png" width="18" height="18"> ');
            break;
         case 'burn3':
            playerdebuffapply.push('<img src="assets/buffs/burn_3.png" width="18" height="18"> ');
            break;
         case 'poison':
            playerdebuffapply.push('<img src="assets/buffs/poison.png" width="18" height="18"> ');
            break;
         case 'deadlypoison':
            playerdebuffapply.push('<img src="assets/buffs/poison_deadly.png" width="18" height="18"> ');
            break;
         case 'powerdown1':
            playerdebuffapply.push('<img src="assets/buffs/power_down_1.png" width="18" height="18"> ');
            break;
         case 'powerdown2':
            playerdebuffapply.push('<img src="assets/buffs/power_down_2.png" width="18" height="18"> ');
            break;
         case 'powerdown3':
            playerdebuffapply.push('<img src="assets/buffs/power_down_3.png" width="18" height="18"> ');
            break;
         case 'powerdown4':
            playerdebuffapply.push('<img src="assets/buffs/power_down_4.png" width="18" height="18"> ');
            break;
         case 'powerdown5':
            playerdebuffapply.push('<img src="assets/buffs/power_down_5.png" width="18" height="18"> ');
            break;
         case 'powerdown6':
            playerdebuffapply.push('<img src="assets/buffs/power_down_6.png" width="18" height="18"> ');
            break;
         case 'shelldown1':
            playerdebuffapply.push('<img src="assets/buffs/defense_down_1.png" width="18" height="18"> ');
            break;
         case 'shelldown2':
            playerdebuffapply.push('<img src="assets/buffs/defense_down_2.png" width="18" height="18"> ');
            break;
         case 'shelldown3':
            playerdebuffapply.push('<img src="assets/buffs/defense_down_3.png" width="18" height="18"> ');
            break;
         case 'shelldown4':
            playerdebuffapply.push('<img src="assets/buffs/defense_down_4.png" width="18" height="18"> ');
            break;
         case 'shelldown5':
            playerdebuffapply.push('<img src="assets/buffs/defense_down_5.png" width="18" height="18"> ');
            break;
         case 'shelldown6':
            playerdebuffapply.push('<img src="assets/buffs/defense_down_6.png" width="18" height="18"> ');
            break;
         case 'onslime':
            playerdebuffapply.push('<img src="assets/buffs/onslime.png" width="18" height="18"> ');
            break;
      }
   });
   document.getElementById('PlayerDebuff').innerHTML = playerdebuffapply.join('');
   enemybuffapply = [];
   enemybuff.forEach(nanka => {
      switch(nanka){
         case 'powerup1':
            enemybuffapply.push('<img src="assets/buffs/power_up_1.png" width="18" height="18"> ');
            break;
         case 'powerup2':
            enemybuffapply.push('<img src="assets/buffs/power_up_2.png" width="18" height="18"> ');
            break;
         case 'powerup3':
            enemybuffapply.push('<img src="assets/buffs/power_up_3.png" width="18" height="18"> ');
            break;
         case 'powerup4':
            enemybuffapply.push('<img src="assets/buffs/power_up_4.png" width="18" height="18"> ');
            break;
         case 'powerup5':
            enemybuffapply.push('<img src="assets/buffs/power_up_5.png" width="18" height="18"> ');
            break;
         case 'powerup6':
            enemybuffapply.push('<img src="assets/buffs/power_up_6.png" width="18" height="18"> ');
            break;
         case 'shellup1':
            enemybuffapply.push('<img src="assets/buffs/defense_up_1.png" width="18" height="18"> ');
            break;
         case 'shellup2':
            enemybuffapply.push('<img src="assets/buffs/defense_up_2.png" width="18" height="18"> ');
            break;
         case 'shellup3':
            enemybuffapply.push('<img src="assets/buffs/defense_up_3.png" width="18" height="18"> ');
            break;
         case 'shellup4':
            enemybuffapply.push('<img src="assets/buffs/defense_up_4.png" width="18" height="18"> ');
            break;
         case 'shellup5':
            enemybuffapply.push('<img src="assets/buffs/defense_up_5.png" width="18" height="18"> ');
            break;
         case 'shellup6':
            enemybuffapply.push('<img src="assets/buffs/defense_up_6.png" width="18" height="18"> ');
            break;
      }
   });
   document.getElementById('EnemyBuff').innerHTML = enemybuffapply.join('');
   enemydebuffapply = [];
   enemydebuff.forEach(nanka => {
      switch(nanka){
         case 'burn1':
            enemydebuffapply.push('<img src="assets/buffs/burn_1.png" width="18" height="18"> ');
            break;
         case 'burn2':
            enemydebuffapply.push('<img src="assets/buffs/burn_2.png" width="18" height="18"> ');
            break;
         case 'burn3':
            enemydebuffapply.push('<img src="assets/buffs/burn_3.png" width="18" height="18"> ');
            break;
         case 'poison':
            enemydebuffapply.push('<img src="assets/buffs/poison.png" width="18" height="18"> ');
            break;
         case 'deadlypoison':
            enemydebuffapply.push('<img src="assets/buffs/poison_deadly.png" width="18" height="18"> ');
            break;
         case 'powerdown1':
            enemydebuffapply.push('<img src="assets/buffs/power_down_1.png" width="18" height="18"> ');
            break;
         case 'powerdown2':
            enemydebuffapply.push('<img src="assets/buffs/power_down_2.png" width="18" height="18"> ');
            break;
         case 'powerdown3':
            enemydebuffapply.push('<img src="assets/buffs/power_down_3.png" width="18" height="18"> ');
            break;
         case 'powerdown4':
            enemydebuffapply.push('<img src="assets/buffs/power_down_4.png" width="18" height="18"> ');
            break;
         case 'powerdown5':
            enemydebuffapply.push('<img src="assets/buffs/power_down_5.png" width="18" height="18"> ');
            break;
         case 'powerdown6':
            enemydebuffapply.push('<img src="assets/buffs/power_down_6.png" width="18" height="18"> ');
            break;
         case 'shelldown1':
            enemydebuffapply.push('<img src="assets/buffs/defense_down_1.png" width="18" height="18"> ');
            break;
         case 'shelldown2':
            enemydebuffapply.push('<img src="assets/buffs/defense_down_2.png" width="18" height="18"> ');
            break;
         case 'shelldown3':
            enemydebuffapply.push('<img src="assets/buffs/defense_down_3.png" width="18" height="18"> ');
            break;
         case 'shelldown4':
            enemydebuffapply.push('<img src="assets/buffs/defense_down_4.png" width="18" height="18"> ');
            break;
         case 'shelldown5':
            enemydebuffapply.push('<img src="assets/buffs/defense_down_5.png" width="18" height="18"> ');
            break;
         case 'shelldown6':
            enemydebuffapply.push('<img src="assets/buffs/defense_down_6.png" width="18" height="18"> ');
            break;
         case 'onslime':
            enemydebuffapply.push('<img src="assets/buffs/onslime.png" width="18" height="18"> ');
            break;
      }
   });
   document.getElementById('EnemyDebuff').innerHTML = enemydebuffapply.join('');

   playerpower = 1;
   if (playerbuff.includes('powerup6')) {playerpower = 4} else if (playerbuff.includes('powerup5')) {playerpower = 3} else if (playerbuff.includes('powerup4')) {playerpower = 2.5} else if (playerbuff.includes('powerup3')) {playerpower = 2} else if (playerbuff.includes('powerup2')) {playerpower = 1.5} else if (playerbuff.includes('powerup1')) {playerpower = 1.25}   
   if (playerdebuff.includes('powerdown6')) {playerpower -= 0.95} else if (playerdebuff.includes('powerdown5')) {playerpower -= 0.9} else if (playerdebuff.includes('powerdown4')) {playerpower -= 0.8} else if (playerdebuff.includes('powerdown3')) {playerpower -= 0.75} else if (playerdebuff.includes('powerdown2')) {playerpower -= 0.5} else if (playerdebuff.includes('powerdown1')) {playerpower -= 0.25} else 
   playershell = 1
   if (playerbuff.includes('shellup6')) {playershell = 4} else if (playerbuff.includes('shellup5')) {playershell = 3} else if (playerbuff.includes('shellup4')) {playershell = 2.5} else if (playerbuff.includes('shellup3')) {playershell = 2} else if (playerbuff.includes('shellup2')) {playershell = 1.5} else if (playerbuff.includes('shellup1')) {playershell = 1.25}
   if (playerdebuff.includes('shelldown6')) {playershell -= 0.95} else if (playerdebuff.includes('shelldown5')) {playershell -= 0.9} else if (playerdebuff.includes('shelldown4')) {playershell -= 0.8} else if (playerdebuff.includes('shelldown6')) {playershell -= 0.75} else if (playerdebuff.includes('shelldown6')) {playershell -= 0.5} else if (playerdebuff.includes('shelldown1')) {playershell -= 0.25} else 
   enemypower = 1
   if (enemybuff.includes('powerup6')) {enemypower = 4} else if (enemybuff.includes('powerup5')) {enemypower = 3} else if (enemybuff.includes('powerup4')) {enemypower = 2.5} else if (enemybuff.includes('powerup3')) {enemypower = 2} else if (enemybuff.includes('powerup2')) {enemypower = 1.5} else if (enemybuff.includes('powerup1')) {enemypower = 1.25}
   if (enemydebuff.includes('powerdown6')) {enemypower -= 0.95} else if (enemydebuff.includes('powerdown5')) {enemypower -= 0.9} else if (enemydebuff.includes('powerdown4')) {enemypower -= 0.8} else if (enemydebuff.includes('powerdown3')) {enemypower -= 0.75} else if (enemydebuff.includes('powerdown2')) {enemypower -= 0.5} else if (enemydebuff.includes('powerdown1')) {enemypower -= 0.25}
   enemyshell = 1
   if (enemybuff.includes('shellup6')) {enemyshell = 4} else if (enemybuff.includes('shellup5')) {enemyshell = 3} else if (enemybuff.includes('shellup4')) {enemyshell = 2.5} else if (enemybuff.includes('shellup3')) {enemyshell = 2} else if (enemybuff.includes('shellup2')) {enemyshell = 1.5} else if (enemybuff.includes('shellup1')) {enemyshell = 1.25}         
   if (enemydebuff.includes('shelldown6')) {enemyshell -= 0.95} else if (enemydebuff.includes('shelldown5')) {enemyshell -= 0.9} else if (enemydebuff.includes('shelldown4')) {enemyshell -= 0.8} else if (enemydebuff.includes('shelldown3')) {enemyshell -= 0.75} else if (enemydebuff.includes('shelldown2')) {enemyshell -= 0.5} else if (enemydebuff.includes('shelldown1')) {enemyshell -= 0.25}
};

function buffadd(array,buff,time){
   //誰のバフ/デバフか,バフ/デバフの名前,効果時間
   let bx = eval(array);
   let by = eval(array + 'time');
   if(bx.includes(buff) == false){
      bx.push(buff);
      by.push(time);
   }else{by[bx.indexOf(buff)] = time;}
   bufftekiou();
}
function buffremove(array,buff){
   //誰のバフ/デバフか,バフ/デバフの名前
   let bx = eval(array);
   let by = eval(array + 'time');
   let bz = bx.indexOf(buff);
   if(bx.includes(buff)){
      by.splice(bz,1);
      bx.splice(bz,1);
   }
   bufftekiou();
}
function buffclear(array){
   let bx = eval(array + 'time');
   bx = [];
   array = [];
   bufftekiou();
}
//#endregion

function delay(ms){return new Promise(resolve=>setTimeout(resolve,ms));}


//#region ゲーム開始時の動き
function GameStart(){
   document.getElementById('GameArea').style.display = 'block';
   
   AllowMove = 1;
   euro = 0;
   turn = 0; turncount = 0; phase = 'null';
   playerlevel = 1;
   playerexp = 0;
   clearedmainquest = 0;
   playerattack = 20;
   playerdefense = 0;
   playermattack = 10;
   playermdefense = 0;
   playermaxhealth = 100;
   playermaxmp = 50;
   playercritlate = 0.03;
   playercritdmg = 1.5;
   playercritresist = 0;
   magic1 = 0; magic2 = 0; magic3 = 0;
   Potion.num = 2; Bomb.num = 2; Redcard.num = 2;
   skillcooldown = 100;

   playerhealth = playermaxhealth;
   playermp = playermaxmp;

   document.getElementById('GameArea').style.display = 'block';
   document.getElementById('GameArea').innerHTML = `
   <button class="button" onclick="begin('greenslime');">greenslime</button><button class="button" onclick="begin('mechanic');">mechanic</button><button class="button" onclick="begin('clown');">clown</button><button class="button" onclick="begin('herta');">herta</button><br>
   <button class="button">something</button><br>
   <button class="button" onclick="begin('wretch');">wretch〜持たざる者〜</button>
   `;
}
function begin(name){
   document.getElementById('GameArea').style.display = 'none';
   playername = name;
   switch(playername){//これはキャラ固有のやつやね
      case 'wretch':
         playerEX.id = 'none';
         playerNS.id = 'none';
         playerPS.id = 'none';
         buttonsolid = '#000000';
         buttonback = '#999999';
      break;
      case 'greenslime':
         playerEX.id = 'none';
         playerNS.id = 'none';
         playerPS.id = 'none';
         buttonsolid = '#000000'
         buttonback = '#999999'
         playermaxmp = 0;
         playerdefense += 5;
      break;
      case 'mechanic':
         playerEX.id = 'placeturret';
         playerNS.id = 'throwwrench';
         playerPS.id = 'solplaceturret';
         buttonsolid = '#ff7373';
         buttonback = '#fcffc0';
         playermaxhealth -= 50;
         playerattack += 5;
         playermattack += 10;
         playermdefense += 20;
      break;
      case 'clown':
         playerEX.id = 'trickyvariables';
         playerNS.id = 'gambler';
         playerPS.id = 'highsol';
         buttonsolid = '#FFACF9';
         buttonback = '#ACF8FF';
         playercritlate += 0.06;
         playercritresist += 0.1;
      break;
      case 'herta':
         playerEX.id = 'bigdiamond';//こんな大きなダイアモンド見たことないでしょ、あげるね〜
         playerNS.id = 'improve';//パーツアップグレード。
         playerPS.id = 'enemy50%pursuit';//くるくる〜っと、くるりん〜っと
         buttonsolid = '#F1EA66';
         buttonback = '#A163CB';
         playerattack -= 5;
         playermaxmp -= 40;
         playercritlate += 0.04;
         enemy50pursuitenelgy = 1;
      break;
   }
   playerhealth = playermaxhealth;
   playermp = playermaxmp;

   enemylevel = 1;enemyhp = 100;
   enemyatk = 10;enemypower = 1; enemymatk = 10;
   enemydef = 0; enemyshell = 1; enemymdef = 0;
   enemycrla = 0.03;enemycrdm = 1.5;enemycrrs = 0;
   
   document.getElementById('NowMap').style.display = 'block';
   document.getElementById('HomeArea').style.display = 'none';
   document.getElementById('GameArea').innerHTML = '<span>turn:</span><span id="TurnCount">0</span><br><span id="EnemyFriendBack"></span><b id="EnemyName">enemy</b>   <i>Lv.</i><i id="EnemyLevel">1</i><br><span id="EnemyHealth">0</span>/<span id="EnemyMaxHealth">0</span><span id="EnemyFriendFront"></span><br><span id="EnemyBuff"></span> <span id="EnemyDebuff"></span><span id="PlayerFriendFront"></span><br><br><b id="PlayerName">player</b>   <i>Lv.</i><i id="PlayerLevel">1</i>  <span id="AdditionalPlayerPoint"></span><br><span id="PlayerHealth">0</span>/<span id="PlayerMaxHealth">0</span><br><span id="PlayerMP">0</span>/<span id="PlayerMaxMP">0</span><br><span id="PlayerBuff"></span> <span id="PlayerDebuff"></span><span id="PlayerFriendBack"></span><br><br><br><button class="button" id="select1" onclick="select1()">attack</button>  <button class="button" id="select2" onclick="select2()">magic</button>  <button class="button" id="select3" onclick="select3()">tools</button>  <button class="button" id="back" onclick="back()">pass</button><br><span id="Skillbutton"></span>'
   document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';
   document.getElementById('ButtonStyle').textContent = `.button{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};cursor: pointer;}input[type="text"]:focus{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};}`;
   
   stage = 1.1;
   switch(0){//Math.floor(Math.random()*3)
      case 0:stage = 1.1;break;
      case 1:stage = 1.2;break;  
      case 2:stage = 1.3;break;
   }
   floor = 0;step = 1;
   GoNextFloor();

   AllowMove = 0;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
}

//#endregion

//非ダメ時モーション(?)
//#region
async function playerdamaged(multiplier,code){
   if(code == 1){document.getElementById('log').textContent = enemyname+'の攻撃！'; await delay(1000)};
   w = 1;
   x = (enemyattack * enemypower * multiplier);
   x -= (playerdefense * playershell + armorshell);
   if(x < 0){x = 0};
   if((Math.floor(Math.random()+ enemycritlate)-playercritresist) >= 1){x += (playerdefense); x *= enemycritdmg; document.getElementById('log').textContent = '痛恨の一撃！'; await delay(1000);};
   x = Math.ceil(x);
   if(x > playermaxhealth){x = playermaxhealth};
   if(x < 0){x = 0;};
   if(enemydebuff.includes('onslime')){x = 0;};
   if(w == 0){x = 0;};//スタン用
   if(playerbuff.includes('spliting')){Splithealth -= x; if(Splithealth < 0){Splithealth = 0}; Splittekiou(); Splithealth = Math.floor(Splithealth); if(Splithealth == 0){Splitbreak(); await delay(1000)};}
   else{
      playerhealth -= x; tekiou();
      if(playerhealth <= 0){playerhealth = 1;turn = 0;defeat();return;}
   };
   if(w == 0){document.getElementById('log').textContent = enemyname + 'はスタンした!!';}
   else if(x == 0){document.getElementById('log').textContent = 'miss! ' + playername + 'にダメージを与えられない!';}
   else{document.getElementById('log').textContent = playername + 'に' + x + 'のダメージ!';};
   if(enemydebuff.includes('onslime')){await delay(1000);buffremove('enemydebuff','onslime');document.getElementById('log').textContent = enemyname + 'からスライムが剥がれた!';};
}

async function enemydamaged(multiplier,code){//倍率を引数にしたらぜんぶまとめられるのでは？ vたし蟹v
   //codeは基本0。sは1、dsは2、solは3、スキル系は4
   x = weaponpower;
   if(equipweapon == 8){x = Math.floor(Math.random() * 13)+1};
   if(equipweapon == 13){x = Math.floor(Math.random() * 1000)+1};//えぐ...
   x = (playerattack * playerpower * multiplier + x);
   if(code == 3 && playerPS.id == 'highsol'){x *= 3};
   if(code == 3 && playerPS.id == 'solx5but'){x *= 5};
   x -= (enemydefense * enemyshell);
   if(equipweapon == 7){playercritlate += 0.5}
   if(equipweapon == 14){t=playercritlate;playercritlate = 0.7;w=playercritdmg;playercritdmg = 0.05}//ん？なんか会心多くね？を言わせてやりたいぜ..ww(50%増やしてるからかなりぶっ壊れ)
   if((Math.floor(Math.random()+ playercritlate)-enemycritresist) >= 1){x += (enemydefense); x *= playercritdmg; document.getElementById('log').textContent = '会心の一撃！'; await delay(1000);};
   if(equipweapon == 14){playercritlate = t;playercritdmg = w;}
   if(equipweapon == 7){playercritlate -= 0.5}
   if(playerbuff.includes('improve')){x *= 1.4;};
   x = Math.ceil(x);
   if(playerbuff.includes('LetsThrow')){x *= 2; buffremove('playerbuff','LetsThrow');};
   if(playerbuff.includes('gambling')){z = clowngambling[Math.floor(Math.random() * clowngambling.length)]; x *= z; buffremove('playerbuff','gambling'); document.getElementById('log').textContent = 'ダメージは' + z + '倍になった!!'; await delay(1000);};
   if(x < 0){x = 0}; if(x > enemyhealth){x = enemyhealth};
   enemyhealth -= x;
   if(enemyhealth < 0){enemyhealth = 0};
   tekiou();
   document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ！';
   if(code == 3 && playerPS.id == 'solplaceturret'){PlayerTurret += 1;PlayerTurrettekiou();PlayerTurretattack = Math.round(playerattack * 0.5);}
   await delay(1000);
   
   x = 1;if(code == 3){x = 2};
   switch(playername){
      case 'Wretch': skillcooldown += 10*x; break;
      case 'greenslime': skillcooldown += 5*x; break;
      case 'mechanic': skillcooldown += 15*x; break;
      case 'clown': skillcooldown += 20*x; break;
      case 'herta': skillcooldown += 10*x; break;
   }
   if(skillcooldown > 100){skillcooldown = 100};
   if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}
   else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};//新！クールダウン！！

   //特殊武器ゾーン
   if(equipweapon == 11){//体力を吸収するやつ。(ジェン・ソルテ)
      document.getElementById('log').textContent = playername+'は'+enemyname+'の体力を吸収した！'
      await delay(500);
      y = Math.ceil(x * 0.25);
      playerhealth += y;
      if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
      tekiou();
      document.getElementById('log').textContent = y+'のHPを回復した！';
   }
   if(equipweapon == 12 && code == 1 && enemyhealth > 0){//防御力下げるやつ(time on target)
      t = Math.floor(Math.random()*3)+1;
      switch(t){case 1:t='トリニティの砲撃術は優秀ですから。';break; case 2:t='お客様のお見送りも、丁寧に。'; break; case 3:t='砲手、支援を。';break;}
      document.getElementById('log').textContent = t;
      await delay(1000);
      x = Math.ceil(playerattack * playerpower * 1.1 + weaponpower - enemydefense);
      if(x < 0){x = 0};if(x > enemyhealth){x = enemyhealth};
      enemyhealth -= x;
      tekiou();
      buffadd('enemydebuff','shelldown1',4);
      document.getElementById('log').textContent = 'お口に合うと良いのですが..';
   }

   //追撃ゾーン
   if(playerPS.id == 'enemy50%pursuit' && enemyhealth <= playermaxhealth / 2 && enemy50pursuitenelgy == 1 && enemyhealth > 0){
      enemy50pursuitenelgy = 0;
      z = Math.floor(Math.random() * 2);
      if(z == 0){document.getElementById('log').textContent = 'くるくる～――っと';}else{document.getElementById('log').textContent = 'くるりん～っと';}
      await delay(1000);
      x = (playerattack * playerpower * 0.7 + weaponpower); x -= (enemydefense);
      if((Math.floor(Math.random()+ playercritlate)) == 1){x += (enemydefense); x *= 3; document.getElementById('log').textContent = '会心の一撃！'; await delay(1000);};
      if(playerbuff.includes('improve')){x *= 1.4;};
      x = Math.ceil(x);
      if(playerbuff.includes('LetsThrow')){x *= 2; buffremove('playerbuff','LetsThrow');};
      if(x < 0){x = 0}; if(x > enemyhealth){x = enemyhealth};
      enemyhealth -= x;
      if(enemyhealth < 0){enemyhealth = 0};
      tekiou();
      document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ!';
      skillcooldown += 10;
      if(skillcooldown > 100){skillcooldown = 100};
      if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}
      else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
   }else if(playerPS.id == 'enemy50%pursuit' && enemyhealth <= playermaxhealth / 2 && playerlevel >= 10 && enemyhealth > 0){//1凸効果「弱みは付け込み」
      x = (playerattack * playerpower * 0.4 + weaponpower); x -= (enemydefense);
      if((Math.floor(Math.random()+ playercritlate - 0.05)) == 1){x += (enemydefense); x *= playercritdmg; document.getElementById('log').textContent = '会心の一撃！'; await delay(1000);};
      if(playerbuff.includes('improve')){x *= 1.4;};
      x = Math.ceil(x);
      if(playerbuff.includes('LetsThrow')){x *= 2; buffremove('playerbuff','LetsThrow');};
      if(x < 0){x = 0}; if(x > enemyhealth){x = enemyhealth};
      enemyhealth -= x;
      if(enemyhealth < 0){enemyhealth = 0};
      tekiou();
      document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ!';
      skillcooldown += 5;
      if(skillcooldown > 100){skillcooldown = 100};
      if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}
      else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
   }
};
//#endregion

function DesideEnemyName(){
   enemyprefixe = 0;
   enemyname = enemynames[stage][Math.floor(Math.random() * enemynames[stage].length)];
   if(Math.floor(Math.random() * 3) == 0){enemyprefixe = enemyprefixes[Math.floor(Math.random() * enemyprefixes.length)]};
   if(enemyprefixe !== 0){enemyname = enemyprefixe + ' ' + enemyname}
   else{enemyname = enemyname}; //敵に接頭辞を確率で付与します
   
   enemyattack = enemyatk;//敵の能力を決めます
   enemydefense = enemydef;
   enemymaxhealth = enemyhp; enemyhealth = enemymaxhealth;
   enemycritlate = enemycrla;
   enemycritdmg = enemycrdm;
   enemycritresist = enemycrrs;
   tekiou();
   switch(enemyprefixe){//接頭辞ごとの能力
      case '激昂':
         enemyattack  = Math.floor(enemyatk*1.5);
         enemydefense = Math.floor(enemydef*0.75);
         break;
      case '冷静沈着な':
         enemydefense = Math.floor(enemydef*2);
         enemyattack  = Math.floor(enemyattack*0.75);
         break;
      case 'ギャンブラーな':
         enemycritlate = enemycrla + 0.3;
         enemymaxhealth = Math.floor(enemyhp*0.5);
      break;
      case '守りが固い':
         enemycritresist += 0.5;//会心半減ね
         enemymaxhealth = Math.floor(enemyhp*1.25);
         enemydefense = 0;
         enemyattack = Math.floor(enemyatk*0.3);
      break;
      case '心眼持ちの':
         enemycritlate = 1;//確定会心人間(抵抗無視の場合)
         enemyattack = Math.floor(enemyatk*0.5);
         enemymaxhealth = Math.floor(enemyhp*0.5);
      break;
   }
   enemyhealth = enemymaxhealth;
   return enemyname;
}
async function errorcheck(){if(playerattack==Infinity||playerdefense==Infinity||playerhealth==Infinity||playermaxhealth==Infinity||playerlevel==Infinity||playerpower==Infinity||playermaxmp==Infinity||playershell==Infinity||isNaN(playerhealth)||isNaN(playermaxhealth)||isNaN(playerattack)||isNaN(playerdefense)||isNaN(playermaxmp)||isNaN(playerpower)||isNaN(playershell)||isNaN(playerlevel)||Potion.num==Infinity||euro==Infinity||Bomb.num==Infinity||Redcard.num==Infinity||isNaN(Potion.num)||isNaN(euro)||isNaN(Bomb.num)||isNaN(Redcard.num)){document.getElementById('log').textContent='error100が発生しました。';awaitdelay(1000);document.getElementById('log').textContent='リブートを開始します。';await delay(1000);open('about:blank','_self').close();}}//おっとこれは...?}

function backtoplayerturn(){
   if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
   if(playerEX.id == 'placeturret'){PlayerTurretattack = Math.round(playerattack * 0.5);};if (turn !== 3){turn = 1;};
   phase = 1;
   document.getElementById('log').textContent = 'あなたのターンです！';
   document.getElementById('select1').textContent = 'attack';
   document.getElementById('select2').textContent = 'magic';
   document.getElementById('select3').textContent = 'tools';
   document.getElementById('back').textContent = 'pass';
   errorcheck();
}
async function playerturn() {
   turncount += 1; document.getElementById('TurnCount').textContent = turncount;
   
   if(turn >= 2){
   NStimeout = 0;
   for (let i = 0; i < playerbufftime.length; i++) {
      playerbufftime[i] -= 1;
      if (playerbufftime[i] === 0) {
         playerbuff.splice(i, 1);
         playerbufftime.splice(i, 1);
         i--;
      }
   }
   for (let i = 0; i < playerdebufftime.length; i++) {
      playerdebufftime[i] -= 1;
      if (playerdebufftime[i] === 0) {
         playerdebuff.splice(i, 1);
         playerdebufftime.splice(i, 1);
         i--;
      }
   }
   for (let i = 0; i < enemybufftime.length; i++) {
      enemybufftime[i] -= 1;
      if (enemybufftime[i] === 0) {
         enemybuff.splice(i, 1);
         enemybufftime.splice(i, 1);
         i--;
      }
   }
   for (let i = 0; i < enemydebufftime.length; i++) {
      enemydebufftime[i] -= 1;
      if (enemydebufftime[i] === 0) {
         enemydebuff.splice(i, 1);
         enemydebufftime.splice(i, 1);
         i--;
      }
   }
   }
   bufftekiou();
   
   NStimeout = 0;
   if ((turncount % 3) == 0 && playerNS.id == 'throwslime'){
      buffadd('enemydebuff','onslime','3');
      document.getElementById('log').textContent = enemyname + 'にスライムが覆い被さった!';
      NStimeout = 1;
   } else if ((turncount % 4) == 0 && playerNS.id == 'throwwrench'){
      buffadd('playerbuff','LetsThrow','3');
      document.getElementById('log').textContent = 'wrenchを投げる準備ができた!';
      NStimeout = 1;
   } else if ((turncount % 3) == 0 && playerNS.id == 'gambler'){
      buffadd('playerbuff','gambling','3');
      document.getElementById('log').textContent = 'さあ、ギャンブルの時間だ!!';
      NStimeout = 1;
   }else if(turncount == 6 && playerNS.id == 'improve'){
      if(playerbuff.includes('improve') == false){
         buffadd('playerbuff','improve','3');
         document.getElementById('log').textContent = 'パーツアップグレード。';
         NStimeout = 1;
      }else if(playerbuff.includes('improve')){
         buffremove('playerbuff','improve');
      }
   }else if((turncount % 3) == 0 && playerNS.id == '5%heal'){
      x = playerhealth;
      playerhealth += Math.ceil(playermaxhealth * 0.2);
      if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
      x = playerhealth - x;
      tekiou();
      if(x > 0){document.getElementById('log').textContent = '5%のHPを回復した!!'; NStimeout = 1;}
   }else if((turncount % 4) == 0 && playerNS.id == 'hitelec'){
      disappear();
      buffadd('playerbuff','powerup2','2');
      await enemydamaged(2,4);
      tekiou();
      if(enemyhealth <= 0){enemyhealth = 0; tekiou();};
      if(enemyhealth == 0){window.setTimeout(killedenemy,1000);}
      else{window.setTimeout(enemyorplayer,1000);}
      return;
   }
   if(NStimeout == 1){await delay(1000);};


   if(playerdebuff.includes('onslime')){
      x = Math.floor(Math.random() * 3);
      if(x !== 0){buffremove('playerdebuff','onslime'); document.getElementById('log').textContent = 'なんとかスライムを取り払った!!'}
      else {document.getElementById('log').textContent = 'スライムが邪魔して動けない!!'; await delay(1000); enemyorplayer(); return;}; 
   }

   if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
   if(playerEX.id == 'placeturret'){PlayerTurretattack = Math.round(playerattack * 0.5);};if (turn !== 3){turn = 1;};
   phase = 1;
   document.getElementById('log').textContent = 'あなたのターンです！';
   document.getElementById('select1').textContent = 'attack';
   document.getElementById('select2').textContent = 'magic';
   document.getElementById('select3').textContent = 'tools';
   document.getElementById('back').textContent = 'runaway';
   errorcheck();
};

// 選択ボタン
//#region
async function select1(){
   if (phase == 1) {
      document.getElementById('log').textContent = 'どうやって攻撃する？';
      document.getElementById('select1').textContent = 'slash';
      document.getElementById('select2').textContent = 'double slash';
      document.getElementById('select3').textContent = 'slash of light';
      document.getElementById('back').textContent = 'back';
      phase = 2;
   } else if (phase == 2) {
      disappear()
      document.getElementById('log').textContent = playername + 'の斬撃!';
      window.setTimeout(slash, 1000)
   } else if (phase == 3) {
      disappear()
      if(magic1 !== 0){
         magic(1)
      }else{
         document.getElementById('log').textContent = 'you dont have magic...';
         window.setTimeout(playerturn, 1000)
      }
   } else if (phase == 4) {
      disappear()
      if (equiptool1.num > 0){
         document.getElementById('log').textContent = playername + 'は'+equiptool1.name+'を使用した!';
         window.setTimeout(eval(equiptool1.id+'act'), 1000)
      } else {
         document.getElementById('log').textContent = 'not enough item ...';
         window.setTimeout(playerturn, 1000)
      }
   }
}
async function select2(){
   if (phase == 1) {
      document.getElementById('log').textContent = 'どうする？';
      document.getElementById('select1').textContent = magic1;
      document.getElementById('select2').textContent = magic2;
      document.getElementById('select3').textContent = magic3;
      document.getElementById('back').textContent = 'back';
      phase = 3;
   } else if (phase == 2) {
      disappear()
      document.getElementById('log').textContent = playername + 'の回転斬り!!';
      window.setTimeout(doubleslash, 1000)
   } else if (phase == 3) {
      disappear()
      if(magic2 !== 0){
         magic(2)
      }else{
         document.getElementById('log').textContent = 'you dont have magic...';
         window.setTimeout(playerturn, 1000)
      }
   } else if (phase == 4) {
      disappear()
      if (equiptool2.num > 0){
         document.getElementById('log').textContent = playername + 'は'+equiptool2.name+'を使用した!';
         window.setTimeout(eval(equiptool2.id+'act'), 1000)
      } else {
         document.getElementById('log').textContent = 'not enough item ...';
         window.setTimeout(playerturn, 1000)
      }
      
   }
}
function select3(){
   if (phase == 1) {
      document.getElementById('log').textContent = 'どうやって攻撃する？';
      document.getElementById('select1').textContent = equiptool1.name+' x'+equiptool1.num;
      document.getElementById('select2').textContent = equiptool2.name+' x'+equiptool2.num;
      document.getElementById('select3').textContent = equiptool3.name+' x'+equiptool3.num;
      document.getElementById('back').textContent = 'back';
      phase = 4;
   } else if (phase == 2) {
      disappear()
      document.getElementById('log').textContent = playername + 'の一閃!!';
      window.setTimeout(slashoflight, 1000)
   } else if (phase == 3) {
      disappear()
      if(magic3 !== 0){
         magic(3)
      }else{
         document.getElementById('log').textContent = 'you dont have magic...';
         window.setTimeout(playerturn, 1000)
      }
   } else if (phase == 4) {
      disappear()
      if (equiptool3.num > 0){
         document.getElementById('log').textContent = playername + 'は'+equiptool3.name+'を使用した!';
         window.setTimeout(eval(equiptool3.id+'act'), 1000)
      } else {
         document.getElementById('log').textContent = 'not enough item ...';
         window.setTimeout(playerturn, 1000)
      }
   }
}

//一個選択肢を戻るやつ
async function back(){
   if(phase == 1){
      disappear();
      document.getElementById('GameArea').style.display = 'none';
      document.getElementById('NowMap').style.display = 'block';
      
      ctx.clearRect(0, 0, 600, 600); 
      DrawBackground();
      ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
      AllowMove = 0;
      document.getElementById('log').textContent = 'うまく逃げ切れた！';
      await delay(1000);
      document.getElementById('log').textContent = '';
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
  //document.getElementById('BackButtonDesu').innerHTML = '';
   phase = 'null';
}
//#endregion

//playerの攻撃たち
//playerの斬撃攻撃
//#region
async function slash() {
   await enemydamaged(1,1);
   if(enemyhealth == 0){killedenemy();return;}
   if(playerPS.id == 'sthree' && Math.floor(Math.random() * 4) == 0){//1/4
      document.getElementById('log').textContent = playername+'は頑張った!';
      await delay(500)
      await enemydamaged(1,1);
      if(enemyhealth == 0){killedenemy();return;}   
      await enemydamaged(1,1);
      if(enemyhealth == 0){killedenemy();return;}
   }
   enemyorplayer();
}
async function doubleslash() {
   if(Math.floor(Math.random() * 3) == 0){
      document.getElementById('log').textContent = 'miss! ダメージを与えられない!';await delay(1000);
   }else{
      await enemydamaged(1,2);
      if(enemyhealth == 0){killedenemy();return;}
   }
   if(Math.floor(Math.random() * 3) == 0){
      document.getElementById('log').textContent = 'miss! ダメージを与えられない!';await delay(1000);
   }else{
      await enemydamaged(1,2);
      if(enemyhealth == 0){killedenemy();return;}
   }
   enemyorplayer()
}
async function slashoflight() {
   x = Math.floor(Math.random() * 3); // 1/3です
   if(playerPS.id == 'highsol'){x = Math.floor(Math.random() * 5);}; // 1/5です。
   if(x !== 0){
      if(playerPS.id == 'solx5but'){
         playerhealth -= (playerattack+weaponpower);
         if(playerhealth <= 0){playerhealth = 1;};//これで死んだらなんか言ってきそうだからね
         tekiou();
         document.getElementById('log').textContent = playername+'は混乱して自分を殴った！';
         await delay(1000);
      }else{
         document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
         await delay(1000);
      }
   }else{
      await enemydamaged(3,3);
      if(enemyhealth == 0){killedenemy();return;}
   }
   enemyorplayer();
}
//#endregion

//playerの魔法
function magic(num) {
   let UseMagic
   switch(num){
      case 1:UseMagic = magic1;break;
      case 2:UseMagic = magic2;break;
      case 3:UseMagic = magic3;break;
   }
   let UseMagicnum = Magics.indexOf(UseMagic);
   
   if(playermp >= MagicInfo.mp[UseMagicnum]){
      MagicInfo.onclick[UseMagicnum]();
      playermp -= MagicInfo.mp[UseMagicnum]
      tekiou();
   }else{
      document.getElementById('log').textContent = 'not enough mp...';
      window.setTimeout(backtoplayerturn, 1000)
   }
}

//魔法s
//#region
function Heal() {
   x = playerhealth
   playerhealth += Math.round(playermaxhealth * 0.2)
   y = playerhealth - x;
   document.getElementById('log').textContent = playername + 'はhealを唱え、' + y + '回復した!';
   if (playerhealth > playermaxhealth) {playerhealth = playermaxhealth;}
   tekiou();
   window.setTimeout(enemyorplayer, 1000)
}
function Power() {
   buffadd('playerbuff','powerup1',3);
   document.getElementById('log').textContent = playername + 'はpowerを唱えた!';
   window.setTimeout(enemyorplayer, 1000)
}
function Shell() {
   buffadd('playerbuff','shellup1',3);
   document.getElementById('log').textContent = playername + 'はshellを唱えた!';
   window.setTimeout(enemyorplayer, 1000)
}
function Poison(){
   buffadd('enemydebuff','poison',5);
   document.getElementById('log').textContent = playername + 'はpoisonを唱えた!';
   window.setTimeout(enemyorplayer, 1000)
}
async function Thunder(){
   document.getElementById('log').textContent = 'サンダー！';
   await delay(1000);
   x = (playermattack*0.9);
   x -= enemymdefense;
   if(x < 0){x = 0;};if(x > playerhealth){x = playerhealth;};
   enemyhealth -= x;tekiou();
   document.getElementById('log').textContent = enemyname+'に'+x+'のダメージ!!';
   window.setTimeout(enemyorplayer, 1000)
}
async function Fire(){
   document.getElementById('log').textContent = 'ファイア！';
   await delay(1000);
   x = (playermattack*1.1);
   x -= enemymdefense;
   if(x < 0){x = 0;};if(x > playerhealth){x = playerhealth;};
   enemyhealth -= x;tekiou();
   document.getElementById('log').textContent = enemyname+'に'+x+'のダメージ!!';
   buffadd('enemydebuff','burn1','2');
   window.setTimeout(enemyorplayer, 1000)
}
function Healerthan(){
   x = playerhealth
   playerhealth += Math.round(playermaxhealth * 0.4)
   y = playerhealth - x;
   document.getElementById('log').textContent = playername + 'はhealer thanを唱え、' + y + '回復した!!';
   if (playerhealth > playermaxhealth) {playerhealth = playermaxhealth;}
   tekiou();
   window.setTimeout(enemyorplayer, 1000)
}
function Luck() {
   buffadd('playerbuff','luck',4);
   document.getElementById('log').textContent = playername + 'はluckを唱えた!';
   window.setTimeout(enemyorplayer, 1000)
}
async function Ellthunder(){
   document.getElementById('log').textContent = 'エルサンダー！！';
   await delay(1000);
   x = (playermattack*1.8);
   x -= enemymdefense;
   if(x < 0){x = 0;}if(x > playerhealth){x = playerhealth;}
   enemyhealth -= x;tekiou();
   document.getElementById('log').textContent = enemyname+'に'+x+'のダメージ!!';
   window.setTimeout(enemyorplayer, 1000)
}
function Morepower() {
   if(playerbuff.includes('powerup1')){buffremove('playerbuff','powerup1');}
   buffadd('playerbuff','powerup2',3)
   document.getElementById('log').textContent = playername + 'はmore powerを唱えた!';
   window.setTimeout(enemyorplayer, 1000)
}
function Moreshell() {
   if(playerbuff.includes('shellup1')){buffremove('playerbuff','shellup1');}
   buffadd('playerbuff','shellup2',3)
   document.getElementById('log').textContent = playername + 'はmore shellを唱えた!';
   window.setTimeout(enemyorplayer, 1000)
}
function Deadlypoison() {
   buffadd('enemydebuff','deadlypoison',5);
   document.getElementById('log').textContent = playername + 'はdeadly poisonを唱えた!';
   window.setTimeout(enemyorplayer, 1000)
}
async function Gigafire(){
   document.getElementById('log').textContent = 'ギガファイアー！！';
   await delay(1000);
   x = (playermattack*2.3);
   x -= enemymdefense;
   if(x < 0){x = 0;}if(x > playerhealth){x = playerhealth;}
   enemyhealth -= x;tekiou();
   document.getElementById('log').textContent = enemyname+'に'+x+'のダメージ!!';
   buffadd('enemydebuff','burn2','2');
   window.setTimeout(enemyorplayer, 1000)
}
function Thehealest() {
   x = playerhealth
   playerhealth += Math.round(playermaxhealth * 0.6)
   y = playerhealth - x;
   document.getElementById('log').textContent = playername + 'はthe healestを唱え、' + y + '回復した!!!';
   if (playerhealth > playermaxhealth) {playerhealth = playermaxhealth;}
   tekiou();
   window.setTimeout(enemyorplayer, 1000)
}
function Greatluck() {
   buffadd('playerbuff','greatluck',5);
   document.getElementById('log').textContent = playername + 'はgreatluckを唱えた!';
   window.setTimeout(enemyorplayer, 1000)
}
async function Thoron(){
   document.getElementById('log').textContent = 'トロン！！！';
   await delay(1000);
   x = (playermattack*3.6);
   x -= enemymdefense;
   if(x < 0){x = 0;}if(x > playerhealth){x = playerhealth;}
   enemyhealth -= x;tekiou();
   document.getElementById('log').textContent = enemyname+'に'+x+'のダメージ!!';
   window.setTimeout(enemyorplayer, 1000)
}
async function Random(){
   document.getElementById('log').textContent = '.........';
   await delay(1000);
   x = Magics.length - 1
   x = Math.floor(Math.random() * x);
   document.getElementById('log').textContent = Magics[x]+'が出た！';
   await delay(1000);
   MagicInfo.onclick[x]();
}
//#endregion

// playerの道具
//#region
function Aspirinact(){
   playerhealth += Math.round(playermaxhealth * 0.2);
   if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
   tekiou();
   document.getElementById('log').textContent = 'おや？頭が痛いって？痛みに効くのはアスピリン！！';
   Aspirin.num -= 1;
   window.setTimeout(backtoplayerturn, 1000)
}
function Pablonact(){
   playerhealth += Math.round(playermaxhealth * 0.4)
   if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
   tekiou();
   document.getElementById('log').textContent = '早めのパブロン♪';
   Pablon.num -= 1;
   window.setTimeout(backtoplayerturn, 1000)
}
function Trypsinact(){
   playerhealth += Math.round(playermaxhealth * 0.6)
   if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
   tekiou();
   document.getElementById('log').textContent = 'トリプシンを飲んだ！！え？これは薬じゃないって？';
   Trypsin.num -= 1;
   window.setTimeout(backtoplayerturn, 1000)
}
function Luluact(){
   playerhealth += Math.round(playermaxhealth * 0.8)
   if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
   tekiou();
   document.getElementById('log').textContent = '熱・のど・鼻にルルが効く〜♪';//名前かわいいかよ(???)
   Lulu.num -= 1;
   window.setTimeout(backtoplayerturn, 1000)
}
function Potionact(){
   playerhealth = playermaxhealth
   tekiou();
   document.getElementById('log').textContent = 'なんか一番しょうもないよね、これ あ、全回復です';
   Potion.num -= 1;
   window.setTimeout(backtoplayerturn, 1000)
}
async function ThrowKnifeact(){
   document.getElementById('log').textContent = 'では、ナイフの錆にしてあげましょう';
   ThrowKnife.num -= 1;
   await delay(1000);
   x = Math.ceil(enemymaxhealth*0.20);
   if(enemyhealth < x){x = enemyhealth};
   enemyhealth -= x
   tekiou();
   document.getElementById('log').textContent = enemyname+'に'+x+'のダメージ！';
   await delay(1000);
   if(enemyhealth <= 0){
      killedenemy();
   }else{
      enemyorplayer();
   }
}
async function TrickyVariableact(){//ここの作り込みよ
   x = Math.floor(Math.random() * 3) + 1;
   switch(x){
      case 1:
         document.getElementById('log').textContent = 'ま、これでいいですよね？';
         x = Math.ceil(enemymaxhealth*0.10);
         break;
      case 2:
         document.getElementById('log').textContent = '結果良ければすべてオッケー！ってね？';
         x = Math.ceil(enemymaxhealth*0.25);
         break;
      case 3:
         document.getElementById('log').textContent = 'これぞ醍醐味、ってやつ？';
         x = Math.ceil(enemymaxhealth*0.40);
         break;
   }
   TrickyVariable.num -= 1;
   await delay(1000);
   if(enemyhealth < x){x = enemyhealth};
   enemyhealth -= x
   tekiou();
   document.getElementById('log').textContent = enemyname+'に'+x+'のダメージ！';
   await delay(1000);
   if(enemyhealth <= 0){
      document.getElementById('log').textContent = 'ちょろい、ちょろい。BANG！';
      window.setTimeout(killedenemy, 1000)
   }else{enemyorplayer();}
}//ここの作り込みやば...ww まあ好きなキャラTop3の1人だからしゃーない にはははは〜！
async function BottleGrenadeact(){
   document.getElementById('log').textContent = 'これはちょっと、スパイシーなやつだよ';
   BottleGrenade.num -= 1;
   await delay(1000);
   x = Math.ceil(enemymaxhealth*0.45);
   if(enemyhealth < x){x = enemyhealth};
   enemyhealth -= x;
   tekiou();
   buffadd('enemydebuff','burn1',3);
   document.getElementById('log').textContent = enemyname+'に'+x+'のダメージ！';
   await delay(1000);
   if(enemyhealth <= 0){
      document.getElementById('log').textContent = 'レッドウィンターの問題児にしては上出来じゃない？';
      window.setTimeout(killedenemy, 1000)
   }
   enemyorplayer();
}
async function CoveringFireact(){//これはノーマルスキル扱いってことで... 弱点把握状態もやりたいけど枠がねぇ....あ、スキルを獲得制にすれば......!?
   document.getElementById('log').textContent = 'え、援護します...'
   CoveringFire.num -= 1;
   await delay(1000);
   x = Math.ceil(enemymaxhealth*0.60);
   if(enemyhealth < x){x = enemyhealth};
   enemyhealth -= x
   tekiou();
   document.getElementById('log').textContent = enemyname+'に'+x+'のダメージ！';
   await delay(1000);
   if(enemyhealth <= 0){
      document.getElementById('log').textContent = 'わ、私のことはお気になさらずに...';
      window.setTimeout(killedenemy, 1000)
   }else{enemyorplayer();}
}
function Bombact(){
   enemyhealth = 0;
   tekiou();
   document.getElementById('log').textContent = '爆発オチなんてサイテー！！';
   Bomb.num -= 1;
   window.setTimeout(killedenemy, 1000)
}
function Redcardact(){
   buffadd('playerbuff','skip1',5);
   document.getElementById('log').textContent = 'カードを仕込みました!';
   Redcard.num -= 1;
   window.setTimeout(backtoplayerturn, 1000)
}
function Bluecardact() {
   x = playerhealth;y = enemyhealth;
   enemyhealth = x;if(enemymaxhealth < enemyhealth){enemyhealth = enemymaxhealth;}
   playerhealth = y;if(playermaxhealth < playerhealth){playerhealth = playermaxhealth;}
   tekiou();
   document.getElementById('log').textContent = '体力を交換しました！';
   Bluecard.num -= 1;
   window.setTimeout(backtoplayerturn, 1000)
}
function Greencardact() {
   const Greenrandombuffs = ['poison','burn1','powerdown1','shelldown1']
   x = Greenrandombuffs[Math.floor(Math.random() * Greenrandombuffs.length)];
   y = Greenrandombuffs[Math.floor(Math.random() * Greenrandombuffs.length)];
   while (y == x) {y = Greenrandombuffs[Math.floor(Math.random() * Greenrandombuffs.length)];}
   buffadd('enemydebuff',x,3);buffadd('enemydebuff',y,3);
   Greencard.num -= 1;
   document.getElementById('log').textContent = enemyname+'にバフを二個つけました！！';
   window.setTimeout(backtoplayerturn, 1000)
}
function Blackcardact() {
   buffadd('enemydebuff','poison',3);
   buffadd('enemydebuff','burn1',3);
   buffadd('enemydebuff','powerdown1',3);
   buffadd('enemydebuff','shelldown1',3);
   Blackcard.num -= 1;
   document.getElementById('log').textContent = 'バフを四個つけました！';
   window.setTimeout(backtoplayerturn, 1000)
}
//#endregion



// skillの手続き
//#region
let Splithealth = 0;
let Splitmaxhealth = 0;
let PlayerTurret = 0;
let PlayerTurretattack = 0;
let clowngambling = ['0','0','2','2','2','4'];
let hertaEXvoice = ['こんな大きなダイアモンド見たことないでしょ？あげるね～','あなた…それじゃあダメだよ','ちょっとは静かになさい！','私が誰だか知ってるの？']
async function skillact() {
   let serif = 'errored';
   if(phase == 1){
   if(skillcooldown == 100){
      if(playerEX.id == '50%split'){
         if(playerbuff.includes('spliting') == false){
            if(playerhealth > Math.floor(playermaxhealth * 0.5)){
            buffadd('playerbuff','spliting',7);
            x = Math.floor(playermaxhealth * 0.5);
            playerhealth -= x;
            document.getElementById('PlayerFriendFront').innerHTML = '<br><br><b><font color="#2EFE2E">'+playername+'のコピー</font></b>  <br><span id="SplitHealth">0</span>/<span id="SplitMaxHealth">0</span>';
            Splitmaxhealth = x;
            Splithealth = x;
            Splittekiou()
            document.getElementById('log').textContent = playername+'は分裂した!!';
            tekiou()
            } else {document.getElementById('log').textContent = 'tairyoku ga sukunai desu...';}
         }
      }else if(playerEX.id == 'placeturret'){
         document.getElementById('PlayerFriendBack').innerHTML = '<br><br><b><font color="#DF0101">turret</font><span id="PlayerTurret"></span></b>';
         PlayerTurret += 1;
         PlayerTurrettekiou()
         PlayerTurretattack = Math.round(playerattack * 0.5);
         document.getElementById('Skillbutton').innerHTML = '';
         document.getElementById('log').textContent = playername+'はturretを設置した!';
         skillcooldown = 0;
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
      }else if(playerEX.id == 'trickyvariables'){
         phase = 0; disappear();
         document.getElementById('log').textContent = playername+'は爆弾を投げた...';
         document.getElementById('Skillbutton').innerHTML = '';
         window.setTimeout(Trickybomb, 1000)
         skillcooldown = 0;
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
      }else if(playerEX.id == 'bigdiamond'){
         phase = 0; disappear(); skillcooldown = 0;
         document.getElementById('log').textContent = hertaEXvoice[Math.floor(Math.random() * hertaEXvoice.length)];//そのうち消える
         await delay(1000);
         x = (playerattack * playerpower * 2 + weaponpower); x -= (enemydefense);   
         y = (x * [Math.random() *0.1]); y *= [Math.random() < 0.5 ? -1 : 1]; x += y;
         x = Math.ceil(x);
         if(x < 0){x = 0}; if(x > enemyhealth){x = enemyhealth};
         enemyhealth -= x;
         document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ!';
         tekiou();   
         buffadd('enemydebuff','freeze',4);
         skillcooldown = 0;
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
         window.setTimeout(enemyorplayer, 1000)
      }else if(playerEX.id == '50%heal'){
         x = playerhealth;
         playerhealth += Math.floor(playermaxhealth * 0.5);
         if (playerhealth > playermaxhealth){playerhealth = playermaxhealth;}
         x = playerhealth - x;
         if(x > 0){
            document.getElementById('log').textContent = '体力が' + x + '回復した!';
            skillcooldown = 0;
            document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
            document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
         } else {
            document.getElementById('log').textContent = 'health is already full...';
         }
      }else if(playerEX.id == 'kyrieeleison'){
         phase = 0; disappear();
         switch(Math.floor(Math.random()*3)+1){
            case 1:
               serif = 'あなたたちは通れないよ'
               break;
            case 2:
               serif = 'ここから先は進ませないよ'
               break;
            case 3:
               serif = 'ここは私が守るから'
               break;
         }
         document.getElementById('log').textContent = serif;
         await delay(1000);
         x = 2;
         if(enemyhealth >= enemymaxhealth * 0.7){x = 4};
         await enemydamaged(x,4);
         skillcooldown = 0;
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
      }else if(playerEX.id == 'standrone'){
         switch(Math.floor(Math.random()*3)+1){
            case 1:
               serif = '';
               break;
            case 2:
               serif = '';
               break;
            case 3:
               serif = '';
               break;
         }//ミヤコさん
         phase = 0; disappear();
         document.getElementById('log').textContent = serif;
         await delay(1000);
         await enemydamaged(0.75,4);
         buffadd('enemydebuff','stan1',4);
         skillcooldown = 0;
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
         phase = 1;document.getElementById('select1').textContent = 'attack';document.getElementById('select2').textContent = 'magic';document.getElementById('select3').textContent = 'tools';document.getElementById('back').textContent = 'pass';errorcheck();
      }else if(playerEX.id == 'recievechallenge'){
         switch(Math.floor(Math.random()*3)+1){
            case 1:
               serif = '';
               break;
            case 2:
               serif = '';
               break;
            case 3:
               serif = '';
               break;
         }//宇沢レイサ
         document.getElementById('log'),textContent = serif;
         await delay(1000);
         await enemydamaged(0.5,1)
         buffadd('enemydamaged','recievedchallenge',3);
         skillcooldown = 0;
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
         phase = 1;document.getElementById('select1').textContent = 'attack';document.getElementById('select2').textContent = 'magic';document.getElementById('select3').textContent = 'tools';document.getElementById('back').textContent = 'pass';errorcheck();
      }else if(playerEX.id == 'timidpursuit'){
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
         document.getElementById('log').textContent = serif;
         buffadd('enemydebuff','weaknessgrasp',2);//弱点把握状態
         skillcooldown = 0;
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
      }else if(playerEX.id == 'bombe'){
         phase = 0; disappear();
         document.getElementById('log').textContent = playername+'は爆弾を投げた...';
         document.getElementById('Skillbutton').innerHTML = '';
         await delay(1000);//普通　水　マグマ　閃光弾
         const bombetype = [3,1,6,0];
         x = bombetype[Math.floor(Math.random()*4)]
         switch(x){
            case 3:document.getElementById('log').textContent = '普通の爆弾だった..!';break;
            case 1:document.getElementById('log').textContent = '水爆弾だった！！';break;//強制終了です
            case 6:document.getElementById('log').textContent = 'Lucky♪マグマ爆弾だった!!';break;
            case 0:document.getElementById('log').textContent = 'いけっ！ピカピカの実！';buffadd('enemydebuff','stan2',3);break;
         }
         await delay(1000);
         await enemydamaged(x,4);
         if (enemyhealth == 0){killedenemy();}
         else {phase = 1; enemyorplayer()};
         skillcooldown = 0;
         document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
         document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
         if(x == 1){nextenemy();}
      }
   }else {document.getElementById('log').textContent = 'skill is not ready...';}

   }else if(phase == 5){//これはすきるじゃないです
      disappear()
      Math.floor(playermaxhealth *= 1.20);
      playerhealth = playermaxhealth;
      document.getElementById('PlayerHealth').textContent = playerhealth;
      document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;
      document.getElementById('log').textContent = '体力が増えた!';
      window.setTimeout(nextenemy, 1000)
   }
}
function Splittekiou(){
   document.getElementById('SplitHealth').textContent = Splithealth;
   document.getElementById('SplitMaxHealth').textContent = Splitmaxhealth;
   }
function Splitbreak(){
   buffremove('playerdebuff','spliting')
   x = Math.floor(Splitmaxhealth * 0.7);
   playerhealth += x;
   if (playerhealth > playermaxhealth){playerhealth = playermaxhealth;}
   document.getElementById('PlayerFriendFront').innerHTML = '';
   Splitmaxhealth = 0;
   Splithealth = 0;
   document.getElementById('log').textContent = playername+'のコピーは倒された...';
   skillcooldown = 0;
   document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
   document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
}
function PlayerTurrettekiou(){
   document.getElementById('PlayerFriendBack').innerHTML = '<br><br><b><font color="#DF0101">turret</font><span id="PlayerTurret"></span></b>';
   document.getElementById('PlayerTurret').textContent = 'x' + PlayerTurret;
}
function PlayerTurretbreak(){
   document.getElementById('PlayerFriendBack').innerHTML = '';
   PlayerTurret = 0;
   PlayerTurretattack = 0;
}
async function Trickybomb(){
   switch(Math.floor(Math.random() * 6)){
      case 0:x=0;document.getElementById('log').textContent = 'しかし不発弾だった!!';break;//これによる効果とかもあっていいかも
      case 5:x=5;document.getElementById('log').textContent = 'Lucky! 爆弾は焼夷弾だった!!!';break;
      case 4:x=4;document.getElementById('log').textContent = '爆弾は花火だった!';break;
      case 3:x=3;document.getElementById('log').textContent = '爆弾は毒ガス入りだった!!';buffadd('enemydebuff','poison',3);break; //毒ガス入りだった場合
      case 2:x=2;document.getElementById('log').textContent = '爆弾はスライム入りだった!!';buffadd('enemydebuff','onslime',2);break;//スライム入りだった場合
      case 1:x=1;document.getElementById('log').textContent = '爆発した..だがただの特殊な薬品だった!!';break;
   }
   await delay(1000);
   await enemydamaged(x,4);
   if(enemyhealth == 0){killedenemy();}
   else{phase = 1; enemyorplayer()};
}
//#endregion


// enemyturnまでの道のり
async function enemyorplayer(){
   if(PlayerTurret > 0){
      document.getElementById('log').textContent = 'turretの攻撃!';
      await delay(1000);
      x = Math.ceil(PlayerTurretattack * PlayerTurret) - Math.ceil(enemydefense*enemyshell);
      if(x < 0){x = 0};if(x > enemyhealth){x = enemyhealth};
      enemyhealth -= x;tekiou();
      document.getElementById('log').textContent = enemyname+'に'+x+'のダメージ！';
      await delay(1000);
      }
   if(enemyhealth == 0){killedenemy();return;}

   //こっからプレイヤーの毒とかの動き
   if (playerdebuff.includes('poison')||playerdebuff.includes('deadlypoison')){
      if(playerdebuff.includes('deadlypoison')){
         x = playerhealth;
         playerhealth -= Math.floor(playermaxhealth * 0.1);
         if(playerhealth < 0){playerhealth = 0};
         y = x - playerhealth;
      }else if(playerdebuff.includes('poison')){
         x = playerhealth;
         playerhealth -= Math.floor(playermaxhealth * 0.05)
         if (playerhealth < 0){playerhealth = 0}
         y = x - playerhealth;
      }
      await delay(1000);
      document.getElementById('log').textContent = playername + 'は毒で' + y + 'のダメージ!';
   };
   if(playerdebuff.includes('burn1')||playerdebuff.includes('burn2')||playerdebuff.includes('burn3')){
      if(playerdebuff.includes('burn3')){
         x = playerhealth;
         playerhealth -= 40
         if (playerhealth < 0){playerhealth = 0}
         y = x - playerhealth;
      }else if(playerdebuff.includes('burn2')){
         x = playerhealth;
         playerhealth -= 25
         if (playerhealth < 0){playerhealth = 0}
         y = x - playerhealth;
      }else if(playerdebuff.includes('burn1')){
         x = playerhealth;
         playerhealth -= 10
         if (playerhealth < 0){playerhealth = 0}
         y = x - playerhealth;
      }
      await delay(1000);
      document.getElementById('log').textContent = playername + 'は燃えて' + y + 'のダメージ!';
   };
   tekiou();
   if(playerhealth <= 0){defeat();return;}

   //こっから敵が動けるかどうかの動き
   if(turn == 1){
      y = 1;
      if(playerbuff.includes('skip1')){y = 0;buffremove('playerbuff','skip1');}//skip1
      if(playerbuff.includes('skip2')){y = 0;buffremove('playerbuff','skip2');buffadd('playerbuff','skip1',5)}//skip2
      if(playerbuff.includes('skip3')){y = 0;buffremove('playerbuff','skip3');buffadd('playerbuff','skip2',5)}//skip3
      //luck or greatluck
      y = 1;
      if(playerbuff.includes('luck')){y = Math.floor(Math.random() * 5);}//luck
      if(playerbuff.includes('greakluck')){y = Math.floor(Math.random() * 3);}//greatluck
      if(y == 0){
         document.getElementById('log').textContent = 'Lucky♪';
         await delay(1000); playerturn(); return;
      }
      //stan
      y = 1;
      if(enemydebuff.includes('stan1')){y = 0;buffremove('enemydebuff','stan1')}//stan1
      if(enemydebuff.includes('stan2')){y = 0;buffremove('enemydebuff','stan2');buffadd('enemydebuff','stan1',5)}//stan2
      if(enemydebuff.includes('stan3')){y = 0;buffremove('enemydebuff','stan3');buffadd('enemydebuff','stan2',5);}//stan3
      if(y == 0){
         document.getElementById('log').textContent = enemyname+'はスタンした！';
         await delay(1000); playerturn(); return;
      }
      //freeze
      if(enemydebuff.includes('freeze')){
         if(!Math.floor(Math.random() * 3) !== 0){
            document.getElementById('log').textContent = '氷が溶けた!'; buffremove('enemydebuff','freeze');
         }else{
            document.getElementById('log').textContent = enemyname + 'は凍っている...';
            await delay(1000); playerturn(); return;
         }   
      }
      if(bossbattlenow == 0){enemyturn();}else{bossenemyturn();}
   }
}


// enemyの手続き
//#region
async function enemyturn(){
   turn = 2;
   await playerdamaged(1,1)
   if(turn == 2){
   await enemycontidmg();
   if (enemyhealth < 0){enemyhealth = 0}
   if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
   else {
      await delay(1000);
      playerturn();
   }
   }
}
async function enemycontidmg(){
   if (enemydebuff.includes('poison')||enemydebuff.includes('deadlypoison')){
      if(enemydebuff.includes('deadlypoison')){
         x = enemyhealth;
         enemyhealth -= Math.floor(enemymaxhealth * 0.1);
         if(enemyhealth < 0){enemyhealth = 0};
         y = x - enemyhealth;
      }else if(enemydebuff.includes('poison')){
         x = enemyhealth;
         enemyhealth -= Math.floor(enemymaxhealth * 0.05)
         if (enemyhealth < 0){enemyhealth = 0}
         y = x - enemyhealth;
      }
      await delay(1000);
      document.getElementById('log').textContent = enemyname + 'は毒で' + y + 'のダメージ!';
   };
   if(enemydebuff.includes('burn1')||enemydebuff.includes('burn2')||enemydebuff.includes('burn3')){
      if(enemydebuff.includes('burn3')){
         x = enemyhealth;
         enemyhealth -= 40
         if (enemyhealth < 0){enemyhealth = 0}
         y = x - enemyhealth;
      }else if(enemydebuff.includes('burn2')){
         x = enemyhealth;
         enemyhealth -= 25
         if (enemyhealth < 0){enemyhealth = 0}
         y = x - enemyhealth;
      }else if(enemydebuff.includes('burn1')){
         x = enemyhealth;
         enemyhealth -= 10
         if (enemyhealth < 0){enemyhealth = 0}
         y = x - enemyhealth;
      }
      await delay(1000);
      document.getElementById('log').textContent = enemyname + 'は燃えて' + y + 'のダメージ!';
   };
   tekiou();
}
//#endregion

//勝利/負けの動き
//#region
async function killedenemy() {
   turn = 0;
   document.getElementById('log').textContent = enemyname + 'を倒した!';
   
   await delay(1000);
   z = Math.floor(Math.random() * 21) + 10;
   euro += z;document.getElementById('log').textContent =  z + '€を獲得した!';tekiou();
   await delay(1000);
   playerexp += enemylevel;
   x = enemylevel;
   if(bossbattlenow = 1){
      playerexp += enemylevel;
      x = enemylevel*2;
      bossbattlenow = 0;
   }
   document.getElementById('log').textContent = x+'の経験値を奪った!';
   while(playerexp >= playerlevel){
      playerexp -= playerlevel;
      playerlevel += 1;
      sp += 1;
      document.getElementById('PlayerLevel').textContent = playerlevel;
   }
   window.setTimeout(nextenemy, 1000)
   
}
async function nextenemy() {
   buffclear('enemybuff');buffclear('enemydebuff');
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
   document.getElementById('log').textContent = '';
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
function EnemyAppear(){
   turn = 0;
   document.getElementById('PlayerName').textContent = playername;
   document.getElementById('select1').textContent = ' ';
   document.getElementById('select2').textContent = ' ';
   document.getElementById('select3').textContent = ' ';
   document.getElementById('back').textContent = ' ';
   document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown"  class="button" onclick="skillact()"></button>'
   document.getElementById('NowMap').style.display = 'none';
   document.getElementById('GameArea').style.display = 'block';
   AllowMove = 1;
   turncount = 0;
   document.getElementById('TurnCount').textContent = turncount;
   playermp = playermaxmp;playerpower = 1;playershell = 1;
   if(playerPS.id == 'enemy50%pursuit'){enemy50pursuitenelgy = 1;};
   DesideEnemyName();
   document.getElementById("EnemyName").textContent = enemyname;
   document.getElementById('log').textContent = enemyname + 'が現れた!';
   document.getElementById('EnemyLevel').textContent = enemylevel;
   tekiou();
   window.setTimeout(playerturn, 750);
   
}

async function defeat() {
   if(playerlevel < 3){saydefeats = ['あはは..負けちゃいましたね....防御力を上げると良いですよ!', 'あはは..負けちゃいましたね....double slashは運要素も少ないので強いですよ!', 'あはは..負けちゃいましたね....魔法にターン数制限はありません!いっぱい使っちゃいましょう!','あはは..負けちゃいましたね....mechanicは防御全振りで戦うと良いですよ!','あれ〜？負けちゃったんですか〜？？おにいさんよわいね〜？？'];}
   else{saydefeats = [playername + 'は力尽きた...残念でしたね！にはははは〜！','残念だったね!すごい惜しかったね!!', 'まけちゃったか..ねぇ、まだいけるよね?','あ、あれ..？もう負けちゃったんですか....？','ほら、負けを認めてください？'];}
   document.getElementById('log').textContent = saydefeats[Math.floor(Math.random() * saydefeats.length)];
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
   document.getElementById('log').textContent = '';
}
//#endregion

//bossの動き
//#region
function BossEnemyAppear(){
   bossbattlenow = 1;
   turn = 0;
   document.getElementById('PlayerName').textContent = playername;
   document.getElementById('select1').textContent = ' ';
   document.getElementById('select2').textContent = ' ';
   document.getElementById('select3').textContent = ' ';
   document.getElementById('back').textContent = ' ';
   document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown"  class="button" onclick="skillact()"></button>'
   document.getElementById('NowMap').style.display = 'none';
   document.getElementById('GameArea').style.display = 'block';
   AllowMove = 1;
   turncount = 0;
   document.getElementById('TurnCount').textContent = turncount;
   playermp = playermaxmp;
   playerpower = 1;playershell = 1;
   if(playerPS.id == 'enemy50%pursuit'){enemy50pursuitenelgy = 1;};
   enemyhealth = enemymaxhealth; document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth; tekiou();
   if (enemylevel < 1){enemylevel = 1}
   enemyname = bossenemynames[stage-1]; //敵の名前を決めます
   switch(enemyname){//ボスごとのステータスを決めます
      case 'purpleslime':
         enemymaxhealth = 300;
         enemyhealth = enemymaxhealth;
         enemyattack = 30;
         enemydefense = 10;
         enemymdefense = 0;
         enemycritlate = 0.01;
         enemycritdmg = 2;
         enemycritresist = 0.5;
      break;
      case 'steampumker':
         enemymaxhealth = 250;
         enemyhealth = enemymaxhealth;
         enemyattack = 25;
         enemydefense = 10;
         enemymdefense = 20;
         enemycritlate = 0.05;
         enemycritdmg = 2;
         enemycritresist = 0;
      break;
      case 'RailwayGun "Shemata"':
         enemymaxhealth = 400;
         enemyhealth = enemymaxhealth;
         enemyattack = 35;
         enemydefense = 20;
         enemymdefense = 0;
         enemycritlate = 0;
         enemycritdmg = 0;
         enemycritresist = 0;
      break;

   }
   document.getElementById("EnemyName").textContent = enemyname;
   document.getElementById('log').textContent = enemyname + 'が現れた!';
   document.getElementById('EnemyLevel').textContent = enemylevel;
   tekiou();
   window.setTimeout(playerturn, 750);
   
}
async function bossenemyturn(){
   turn = 2;
   if(enemyname == 'purpleslime'){
      //1: 攻撃(シンプル)
      //2:攻撃(シンプル)
      //3:相手を毒に(2ターン)
      //if(max0.3>)[確定]防御力down1(討伐まで有効)
      if(enemyhealth <= enemymaxhealth * 0.3){buffadd('playerdebuff','shelldown1',1);}
      switch(Math.floor(Math.random()*4)+1){
         case 1:
         case 2:
            document.getElementById('log').textContent = enemyname + 'の攻撃';
            playerdamaged(1,1);
            break;
         case 3:
            document.getElementById('log').textContent = enemyname + 'は大きく息を吐いた！';
            buffadd('playerdebuff','poison',2);
            break;
      }
   }else if(enemyname == 'steampumker'){
      //ターン数が奇数: 攻撃
      //ターン数が偶数: タレットの設置
      //タレットが3つ以上: 攻撃力の3倍のダメージで攻撃、タレットを破壊
      if(enemyturret >= 3){
         playerdamaged(enemyturret,1);
         document.getElementById('EnemyFriendBack').innerHTML = '';
         enemyturret = 0;
         EnemyTurrettekiou();
      }
      if((turncount % 2) == 0){
         document.getElementById('EnemyFriendBack').innerHTML = '<br><b><font color="#DF0101">turret</font><span id="EnemyTurret"></span></b><br><br>';
         enemyturret += 1;
         EnemyTurrettekiou();
         document.getElementById('log').textContent = enemyname+'はturretを設置した!';
      }else{
         await playerdamaged(1,1);
      }
      if(enemyturret > 0){await playerdamaged(enemyturret*0.5,1);}
   }else if(enemyname == 'RailwayGun "Shemata"'){
      //
      //
      //
      playerhealth = 0;
      document.getElementById('log').textContent = 'しーんだしんだ、シリウスブラ〜ック!';
      defeat();//いや雑にもほどがあるやろ
   }else if(enemyname == 'joker'){
      //1:爆弾を投げる。普通(x1),雷(x2),炎(x3),閃光弾(x0.5,スタン1)
      //if(max0.25>):勝ち気(攻撃が0倍か4倍になる)を付与(毎ターン)
      x = 1;
      if(enemyhealth <= enemymaxhealth * 0.25){x = [0,4];x = x[Math.floor(Math.random()*2)]};
      y = Math.floor(Math.random() * 4);
      switch(y){
         case 1:document.getElementById('log').textContent = '普通の爆弾だった!!';break;//これによる効果とかもあっていいかも
         case 2:document.getElementById('log').textContent = '爆弾は雷光弾だった!!!';break;
         case 3:document.getElementById('log').textContent = '爆弾は焼夷弾だった!';break;
         case 0:document.getElementById('log').textContent = '爆弾は閃光弾だった!!';buffadd('playerdebuff','stan1',3);y = 0.5;break;
      }
      await delay(1000);
      await playerdamaged(x*y,0);
   }
   if(turn == 2){
   await enemycontidmg();
   if(enemyhealth < 0){enemyhealth = 0};
   if(enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
   else {
      await delay(1000);
      playerturn();
   }
   }
}
//こっから変数とか関数とか
let enemyturret = 0;
function EnemyTurrettekiou(){
   document.getElementById('EnemyTurret').textContent = 'x' + enemyturret;
}
//#endregion

//休憩所の動き
//#region
let Camprestper
  async function Camprest(){
   playerhealth += playermaxhealth * Camprestper;
   playerhealth = Math.floor(playerhealth);
   if(playerhealth > playermaxhealth){playerhealth = playermaxhealth;};
   document.getElementById('log').textContent = '寝ることにした....';//睡眠阻害イベント...はさすがにやめようか..wちょっと隠しイベント多すぎる
   await delay(2000);
   document.getElementById('log').textContent = '起きた！！！！！！！';
   await delay(1000);
   document.getElementById('EventArea').innerHTML = '';
   document.getElementById('log').textContent = '';
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
      
   if(y == 1){
         document.getElementById('log').textContent = '武器屋に話しかけた！';
         await delay(1000);
         nowshop = 1;
         document.getElementById('log').textContent = 'ここにはこんなものがあるけど、どうする？';
         document.getElementById('EventArea').innerHTML = '<iframe height="230" width="200" src="assets/shops/weapons.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
      }else if(y == 2){
         document.getElementById('log').textContent = '防具屋に話しかけた！';
         await delay(1000);
         nowshop = 2;
         document.getElementById('log').textContent = 'うちの店ではこんなものが売ってるよ';
         document.getElementById('EventArea').innerHTML = '<iframe height="400" width="300" src="assets/shops/armors.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
      }else if(y == 3){
         document.getElementById('log').textContent = '道具屋に話しかけた！';
         await delay(1000);
         nowshop = 3;
         document.getElementById('log').textContent = 'いらっしゃいませぇぇぇぇぇ？？ご注文をどうぞ！！！！';
         document.getElementById('EventArea').innerHTML = '<iframe height="400" width="300" src="assets/shops/tools.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
      }else if(y == 10){
         document.getElementById('log').textContent = '武器屋に話しかけた！';
         await delay(1000);
         nowshop = 10;
         document.getElementById('log').textContent = 'ほう..よく来たな。好きに見ていってくれ';
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
         document.getElementById('log').textContent = 'you already have a it!';
      }else{
         if(euro >= weapons.price[num]){
            euro -= weapons.price[num];
            haveweapons.push(weapons.name[num]);
            document.getElementById('log').textContent = weapons.name[num]+'を購入しました!';
         }else{
            document.getElementById('log').textContent = 'not enough euro..';
         };
      }
      break;
      case 10:
      if(haveweapons.includes(rareweapons.name[num])){
         document.getElementById('log').textContent = 'you already have a it!';
      }else{
         if(euro >= rareweapons.price[num]){
            euro -= rareweapons.price[num];
            haveweapons.push(rareweapons.name[num]);
            document.getElementById('log').textContent = rareweapons.name[num]+'を購入しました!';
         }else{
            document.getElementById('log').textContent = 'not enough euro..';
         };
      }
      break;
      case 2:
      if(havearmors.includes(armors.name[num])){
         document.getElementById('log').textContent = 'you already have a it!';
      }else{
         if(euro >= armors.price[num]){
            euro -= armors.price[num];
            havearmors.push(armors.name[num]);
            document.getElementById('log').textContent = armors.name[num]+'を購入しました!';
         }else{
            document.getElementById('log').textContent = 'not enough euro..';
         };
      }
      break;
      case 3:
      if(havearmors.includes(tools.name[num])){
         document.getElementById('log').textContent = 'you already have a it!';
      }else{
         if(euro >= tools.price[num]){
            euro -= tools.price[num];
            havearmors.push(tools.name[num]);
            document.getElementById('log').textContent = tools.name[num]+'を購入しました!';
         }else{
            document.getElementById('log').textContent = 'not enough euro..';
         };
      }
      break;
   }



   
   document.getElementById('ShopInputText').value = '';
}
function CampBye(){
   document.getElementById('log').textContent = 'ついでに装備を変えていこうかな？';
   document.getElementById('EventArea').innerHTML = '<button class="button"onclick="GoToEquip()">そうしよう！</button><br><button class="button"onclick="Campback()">いや、やめとこう</button>';
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
   if(haveweapons.includes("木の棒")){x += 1;}
   if(haveweapons.includes("木刀")){x += 10;}
   if(haveweapons.includes("竹刀")){x += 100;}
   if(haveweapons.includes("石ころ")){x += 1000;}
   if(haveweapons.includes("大きな石")){x += 10000;}
   if(haveweapons.includes("レンガ")){x += 100000;}
   if(haveweapons.includes("薄めの紙")){x += 1000000;}
   if(haveweapons.includes("カード")){x += 10000000;}
   if(haveweapons.includes("はさみ")){x += 100000000;}
   if(haveweapons.includes("ほんもののナイフ")){x += 1000000000;}
   if(haveweapons.includes("ジェン・ソルテ")){x += 10000000000;}
   if(haveweapons.includes("time on target")){x += 100000000000;}
   if(haveweapons.includes("大博打")){x += 1000000000000;}
   if(haveweapons.includes("天邪鬼")){x += 10000000000000;}
   if(x >= 10000000000000){x -= 10000000000000; appearweapons = '14 天邪鬼'}
   if(x >= 1000000000000){x -= 1000000000000; appearweapons = '13 大博打'+ '<br>' + appearweapons;}
   if(x >= 100000000000){x -= 100000000000; appearweapons = '12 time on target'+ '<br>' + appearweapons;}
   if(x >= 10000000000){x -= 10000000000; appearweapons = '11 ジェン・ソルテ'+ '<br>' + appearweapons;}
   if(x >= 1000000000){x -= 1000000000; appearweapons = '10 ほんもののナイフ'+ '<br>' + appearweapons;}
   if(x >= 100000000){x -= 100000000; appearweapons = '09 はさみ'+ '<br>' + appearweapons;}
   if(x >= 10000000){x -= 10000000; appearweapons = '08 カード'+ '<br>' + appearweapons;}
   if(x >= 1000000){x -= 1000000; appearweapons = '07 薄めの紙'+ '<br>' + appearweapons;}
   if(x >= 100000){x -= 100000; appearweapons = '06 レンガ' + '<br>' + appearweapons;}
   if(x >= 10000){x -= 10000; appearweapons = '05 大きな石' + '<br>' + appearweapons;}
   if(x >= 1000){x -= 1000; appearweapons = '04 石ころ' + '<br>' + appearweapons;}
   if(x >= 100){x -= 100; appearweapons = '03 竹刀' + '<br>' + appearweapons;}
   if(x >= 10){x -= 10; appearweapons = '02 木刀' + '<br>' + appearweapons;}
   if(x >= 1){x -= 1; appearweapons = '01 木の棒' + '<br>' + appearweapons;}
   document.getElementById('AppearShops').innerHTML = appearweapons;
   }
function GoToEquipArmor(){
   nowshop = 5;
   document.getElementById('EventArea').innerHTML = '<span id="AppearShops"></span><br><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopEquipButton()">Equip</button><br><br><button class="button" onclick="GoToEquip()">Back</button>';
   appeararmors = '';
   x = 0;
   if(havearmors.includes("マスク")){x += 1;}
   if(havearmors.includes("薄い本")){x += 10;}
   if(havearmors.includes("木の板")){x += 100;}
   if(havearmors.includes("テッパン")){x += 1000;}
   if(havearmors.includes("鍋の蓋")){x += 10000;}
   if(havearmors.includes("厚めの本")){x += 100000;}
   if(havearmors.includes("ドア")){x += 1000000;}
   if(havearmors.includes("扇風機")){x += 10000000;}
   if(havearmors.includes("ペロロ様人形")){x += 100000000;}
   if(x >= 100000000){x -= 100000000; appeararmors = '11 ペロロ様人形';}
   if(x >= 10000000){x -= 10000000; appeararmors = '10 扇風機'+ '<br>' + appeararmors;}
   if(x >= 1000000){x -= 1000000; appeararmors = '07 ドア'+ '<br>' + appeararmors;}
   if(x >= 100000){x -= 100000; appeararmors = '06 厚めの本'+ '<br>' + appeararmors;}
   if(x >= 10000){x -= 10000; appeararmors = '05 鍋の蓋'+ '<br>' + appeararmors;}
   if(x >= 1000){x -= 1000; appeararmors = '04 テッパン'+ '<br>' + appeararmors;}
   if(x >= 100){x -= 100; appeararmors = '03 木の板'+ '<br>' + appeararmors;}
   if(x >= 10){x -= 10; appeararmors = '02 薄い本'+ '<br>' + appeararmors;}
   if(x >= 1){x -= 1; appeararmors = '01 マスク'+ '<br>' + appeararmors;}
   document.getElementById('AppearShops').innerHTML = appeararmors;
   }
function ShopEquipButton(){
   const Num = +document.getElementById('ShopInputText').value;
   switch(nowshop){
      case 4:
         if(haveweapons.includes(weapons.name[Num])){
            document.getElementById('log').textContent = 'あなたは'+weapons.name[Num]+'を装備しました！';
            equipweapon = Num;
            weaponpower = weapons.power[Num];
         }else{document.getElementById('log').textContent = 'you dont have it!'};
      break;
      case 5:
         if(havearmors.includes(armors.name[Num])){
            document.getElementById('log').textContent = 'あなたは'+armors.name[Num]+'を装備しました！';
            equiparmor = Num;
            armorshell = armors.shell[Num];
         }else{document.getElementById('log').textContent = 'you dont have it!'};
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
   document.getElementById('log').textContent = 'どうしようかな...?';
   }
function Campequiptool(code){
   x = code;
   document.getElementById('log').textContent = '何を持とう？';
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
   document.getElementById('log').textContent = equiptoolVar+'を持つことにした！';
}
// #endregion

//skillshopですね
//#region
const SHOPEXrandom = {
   name: ['GO!SPLIT!!', '雷ちゃん、召喚', 'トリッキーな変数', '私がかけた魔法だよ', 'Kyrie Eleison', '自走式閃光ドローン', '挑戦状を受け取ってください!!', '小心者の観測'],
   price: [95, 95, 95, 95, 110, 60, 90, 50],
   id: ['50%split', 'placeturret', 'trickyvariables', 'bigdiamond', 'kyrieeleison', 'standrone', 'recievechallenge', 'timidpursuit'],
   explain:['体力が半分以上ならば分身を召喚し、<br>ダメージを代わりに受けさせます。','タレットを配置する。<br>タレットは攻撃力の50%の攻撃力を持ちます。','爆弾を投擲し、<br>敵にランダムな効果を与える。','敵に攻撃力の150%のダメージを与え、<br>50%の確率で凍らせる。','敵に攻撃力の200%のダメージを与える。<br>対象の体力が70%以上の場合、400%のダメージ。','敵に攻撃力の75%のダメージを与え、<br>スタンさせる。','敵の防御力を下げ、自身の攻撃力を上げる。<br>','敵に攻撃力の60%のダメージを与え、<br>弱点把握状態を付与する。(2ターン)'],
  };
  const SHOPNSrandom = {
   name: ['Attach!slime!!', '匙を投げる？これはレンチだよ', 'かけ上手', '改善が必要だよ'],
   price: [70, 70, 70, 70],
   id: ['throwslime', 'throwwrench', 'gambler', 'improve'],
   explain:['敵にスライムをくっつけ、<br>攻撃を無効化する。','レンチを投げる準備をする。<br>レンチは攻撃力の200%の攻撃力を持つ。','ギャンブル熱状態に入り、<br>攻撃時0,2,4倍のいずれかの倍率がかかる。','攻撃力を上昇させる。バフをかける。<br>すでにある場合は解除する。',]
  };
  const SHOPPSrandom = {
   name: ['DoYourBest!!', '雷ちゃん、もうちょっと', '生粋の勝負師', '一度限りの取引'],
   price: [90, 90, 90, 90],
   id: ['sthree', 'solplaceturret', 'highsol', 'enemy50%pursuit'],
   explain:['slash時、たまに3回攻撃する。<br>','slashoflightが当たった時、<br>タレットを配置する。','slashoflightの当たる確率が下がるが、<br>倍率が9倍になる。','攻撃によって敵の体力が50%を下回った時、<br>攻撃力の70%で追撃する。',]
  };

  const allItems = [...SHOPEXrandom.name.map((name, index) => ({name, price: SHOPEXrandom.price[index], explain: SHOPEXrandom.explain[index], id: SHOPEXrandom.id[index], type: 'EX'})),
               ...SHOPNSrandom.name.map((name, index) => ({name, price: SHOPNSrandom.price[index], explain: SHOPNSrandom.explain[index], id: SHOPNSrandom.id[index], type: 'NS'})),
               ...SHOPPSrandom.name.map((name, index) => ({name, price: SHOPPSrandom.price[index], explain: SHOPPSrandom.explain[index], id: SHOPPSrandom.id[index], type: 'PS'}))];

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
   document.getElementById('log').textContent = '';
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
     if(type === 'EX') playerEX.id = id;
 else if(type === 'NS') playerNS.id = id;
 else if(type === 'PS') playerPS.id = id;
     document.getElementById('log').textContent = name + 'を購入しました！';
     
   } else {
     document.getElementById('log').textContent = 'not enough euro...';
   }
   
  }

// #endregion

//こっからイベントとかそのへん
//candystand
//#region
let candybar = [];
async function Candytake(){
   //デバフによって初期からたくさんあるってのもありかも
   //document.getElementById('log').textContent = 'あめを食べた..';
   //await delay(1000);
   let candynum = Math.floor(Math.random() * 20) + 1;
   if (!candybar.includes(candynum)){
   candybar.push(candynum);
   switch(Math.floor(Math.random()*3)+1){
      case 1:
         playerattack += Math.floor(Math.random() * 3) + 2;if(playerattack < 1){playerattack = 1};
         document.getElementById('log').textContent = '攻撃力が上がった！';
         break;
      case 2:
         playerdefense += Math.floor(Math.random() * 3) + 1;if(playerdefense < 0){playerdefense = 0};
         document.getElementById('log').textContent = '防御力が上がった！';
         break;
      case 3:
         playermaxhealth += Math.floor(Math.random() * 5) + 5;if(playermaxhealth < 1){playermaxhealth = 1};
         document.getElementById('log').textContent = '体力が増えた！';
         break;
   };
   }else{
      switch(Math.floor(Math.random()*3)+1){
         case 1:
            playerattack -= Math.floor(Math.random() * 13) + 5;if(playerattack < 1){playerattack = 1};
            document.getElementById('log').textContent = '攻撃力が下がった！';
            break;
         case 2:
            playerdefense -= Math.floor(Math.random() * 10) + 3;if(playerdefense < 0){playerdefense = 0};
            document.getElementById('log').textContent = '防御力が下がった！';
            break;
         case 3:
            playermaxhealth -= Math.floor(Math.random() * 21) + 10;if(playermaxhealth < 1){playermaxhealth = 1};
            if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
            document.getElementById('log').textContent = '体力が減った！';
            break;
      };
   }
}
// #endregion

//hopeful button
//#region
async function HopeButtonact(){
   AllowMove = 1;
   document.getElementById('log').textContent = 'ボタンを押した....';
   await delay(1000);
   if(Math.floor(Math.random() * 2) == 0){
      document.getElementById('log').textContent = 'な、中から四葉のクローバーが...!!';
      buffclear('playerdebuff');
      buffadd('playerbuff','luck',2);
   } else {
      document.getElementById('log').textContent = 'ボタンが溶けて手がやられた！';
      buffadd('playerdebuff','shelldown1',3);
      if(playerdebuff.includes('powerdown1')){buffremove('playerdebuff','powerdown1');}
      buffadd('playerdebuff','powerdown2',3);
   }
   await delay(1000);
   document.getElementById('log').textContent = '';
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

//chest
//#region
async function OpenChest(code){
   AllowMove = 1;
   switch(code){
   case 1:
      document.getElementById('log').textContent = 'チェストを開けた...';
      await delay(1000);
      x = Camprandomtool[Math.floor(Math.random() * Camprandomtool.length)];
      w = eval(x); w.num += 1;
      document.getElementById('log').textContent = w.name+'を手に入れた！';
      await delay(750);
      x = Camprandomtool[Math.floor(Math.random() * Camprandomtool.length)];
      w = eval(x); w.num += 1;
      document.getElementById('log').textContent = w.name+'を手に入れた！';
      await delay(750);
      x = Camprandomtool[Math.floor(Math.random() * Camprandomtool.length)];
      w = eval(x); w.num += 1;
      document.getElementById('log').textContent = w.name+'を手に入れた！';
      await delay(1000);
   break;
   case 2:
      document.getElementById('log').textContent = 'チェストを開けた...';
      await delay(1000);
      x = RareCamprandomtool[Math.floor(Math.random() * RareCamprandomtool.length)];
      w = eval(x); w.num += 1;
      document.getElementById('log').textContent = w.name+'を手に入れた！';
      await delay(750);
      x = RareCamprandomtool[Math.floor(Math.random() * RareCamprandomtool.length)];
      w = eval(x); w.num += 1;
      document.getElementById('log').textContent = w.name+'を手に入れた！';
      await delay(750);
      x = RareCamprandomtool[Math.floor(Math.random() * RareCamprandomtool.length)];
      w = eval(x); w.num += 1;
      document.getElementById('log').textContent = w.name+'を手に入れた！';
      await delay(1000);
   break;
   }
   document.getElementById('EventArea').innerHTML = '';
   document.getElementById('log').textContent = '';
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

//Cookietake
//#region
async function Cookietake(){
   AllowMove = 1;
   document.getElementById('log').textContent = 'クッキーを食べてみた...';//これはお助け的イベントだから上昇量は少なめ
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
   document.getElementById('log').textContent = x;
   await delay(1000);
   document.getElementById('EventArea').innerHTML = '';
   document.getElementById('log').textContent = '';
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

//placebomb
//#region
async function placebomb(){
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 15;
   bombtimer = 5;
   PlacedBombx = MAPx;
   PlacedBomby = MAPy;
   document.getElementById('log').textContent = '爆弾を設置しました！';
}//出口を消した時どうする論争
//#endregion

//catus
//#region
async function CatusAct(){
   if(playerhealth > 10){
      document.getElementById('log').textContent = 'いてっ';
      playerhealth -= 10;playerattack += 5;if(stage == 3){playerhealth -= 10;playerattack += 5;}
      MAPx = Math.floor(SELECTx / 75);
      MAPy = Math.floor(SELECTy / 75);
      objectMap[MAPy][MAPx] = 0;
   }else{
      document.getElementById('log').textContent = 'なんか..今触ったら死にそう....'
   }
   await delay(500);
   document.getElementById('log').textContent = '';
}
//#endregion

//scorpion
//#region
async function ScorpionAct(code){
   document.getElementById('log').textContent = '刺された...';
   switch(code){
      case 1:buffadd('playerbuff','poison',3);break;
      case 2:buffadd('playerbuff','deadlypoison',3);break;
   }
   playerattack += 10*code;
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 0;
   await delay(500);
   document.getElementById('log').textContent = '';
}
//#endregion

//wrwrdイベント(fun値50以下の際1/23の確率で出現)
//#region
function ZomuEvent(){//創生黎明の原野
   document.getElementById('log').textContent = 'かまってぇや、マジで';
   playername = 'zomusan'
   playerEX.id = 'bombe';//clownみたいな感じで爆弾投げ。普通、水、マグマ、閃光弾。EX使用後は攻撃力が1.5倍になる(1ターン)
   playerNS.id = 'hitelec';//4の倍数のターンの時、強制的にエレキギターで殴る。攻撃力の3倍のダメージを与える。
   playerPS.id = 'solx5but'//slashoflightを使った際、当たれば5倍だが、外れれば自分にダメージを与える。
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
   document.getElementById('log').textContent = 'はいどうも〜、僕です';
   playername = 'utusen'
   playerEX.id = '50%appease';//相手の体力が半分以下なら仲間にする｡でなければ､攻撃力の1.5倍のダメージ
   playerNS.id = 'ehp50%but';//3の倍数のターンの時、相手か自分の体力を半分にする。運ゲー
   playerPS.id = 'reverseta';//逆TA(相手より体力がめちゃ低いとダメージを喰らわない)
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

