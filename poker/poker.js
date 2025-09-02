let cardsmarks = ['♠', '♣', '♦', '♥'];
let cardsnumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let cards = [];
let card = 0;
let playercard = [];
let turn = 0;
let x = 0;
let y = 0;
let z = 0;
let card1 = 0;
let card2 = 0;
let card3 = 0;
let card4 = 0;
let card5 = 0;



// 遅延です。恒例行事
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// カード作ったりするリセットムーブ
function resetcard(){
    turn = 1;
    playercard = [];
    cards = [];
    for (let markmade = 0; markmade < cardsmarks.length; markmade++) {
        for (let numbmade = 0; numbmade < cardsnumbers.length; numbmade++) {
            cards.push(cardsmarks[markmade] + cardsnumbers[numbmade]);
        }
    }
}
// カード引く動き
function drawcard() {
    if(turn == 1){
        if (cards.length == 0) {document.getElementById('log').textContent = 'カードはありません'}
        else{
        x = cards[Math.floor(Math.random() * cards.length)];
        cards.splice(cards.indexOf(x), 1);
        playercard.push(x);
        switch(playercard.length){
            case 1:
                card1 = x;
                break;
            case 2:
                card2 = x;
                break;
            case 3:
                card3 = x;
                break;
            case 4:
                card4 = x;
                break;
            case 5:
                card5 = x;
                break;
        }
        if(playercard.length < 5){drawcard()}
        else{document.getElementById('card').textContent = playercard.join(' '); document.getElementById('log').textContent = 'カードを引きました';
             turn = 2;
            }
        }
    } else if(turn == 2){ // From here, I want to create a movement where I discard the selected card and draw it again.
        y = playercard[Math.floor(Math.random() * playercard.length)];
        playercard.splice(playercard.indexOf(y), 1);
        cards.push(y);
        if(playercard.length < 5){drawcard()}else{document.getElementById('card').textContent = playercard.join(' '); document.getElementById('log').textContent = 'カードを引きました';}
        }
}





resetcard();