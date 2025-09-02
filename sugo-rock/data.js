
let Maps = {
    'simple':{
        name:'simple',
        desc:'何も要素がなく、ただ20マス進むだけ。\nもはやデバッグ用',
        map:[
            {num: 0, kind: 'start', desc:''},
            {num: 1, kind: '', desc:''},
            {num: 2, kind: '', desc:''},
            {num: 3, kind: '', desc:''},
            {num: 4, kind: '', desc:''},
            {num: 5, kind: '', desc:''},
            {num: 6, kind: '', desc:''},
            {num: 7, kind: '', desc:''},
            {num: 8, kind: '', desc:''},
            {num: 9, kind: '', desc:''},
            {num: 10, kind: '', desc:''},
            {num: 11, kind: '', desc:''},
            {num: 12, kind: '', desc:''},
            {num: 13, kind: '', desc:''},
            {num: 14, kind: '', desc:''},
            {num: 15, kind: '', desc:''},
            {num: 16, kind: '', desc:''},
            {num: 17, kind: '', desc:''},
            {num: 18, kind: '', desc:''},
            {num: 19, kind: '', desc:''},
            {num: 20, kind: 'goal', desc:''}
        ]
    }
}

let Dices = {
    'normal':{
        eye: [1,2,3,4,5,6],
        desc: '普通のサイコロ。平凡で普遍的',
        col: '#ffffff',
        freely: 1,
    },
    'one':{
        eye: [1,1,1,1,1,1],
        desc: '1しか出ない。これぞデバフ',
        col: '#f4f4f4',
        freely: 1,
    },
    'low':{
        eye: [1,1,2,2,3,3],
        desc: '低い数字しか出ない。マリパで言う"のろい"',
        col: '#5d00ae',
        freely: 0,
    },
    'high':{
        eye: [4,4,5,5,6,6],
        desc: '高い数字しか出ない。溢れ出る豪族感',
        col: '#fff06c',
        freely: 0,
    },
    'skull':{
        eye: [-1,-1,-1,-1,-1,10],
        desc: 'ほぼ-1だが、運が良ければ10も出る\nこれぞエンターテイメント、じゃんね？',
        col: '#cecece',
        freely: 1,
    },
    'dark-skull':{
        eye: [-2,-2,-5,-2,-2,20],
        desc: 'skullよりもマイナス効果が増加\nもはやバカだろ',
        col: '#363636',
        freely: 1,
    },
}

let Buffs = {
    'demeadd':{
        name:'demeadd',
        desc:'次以降の出目にこの値を加える。\nバフかデバフかは値次第',
        kaijo: 'end'//rpgだったら「戦闘終了時」
    },
    'demeSet':{
        name:'demeSet',
        desc:'次以降の出目をこの値にする。\nバフかデバフかは値次第',
        kaijo: 'end'
    }
}