const theBoard = document.querySelector('.theBoard');

let x = 240 , y = 439;
let a = 0 , b = 0;
let p1 = 210; 
let p2 = 210; 
let a1 = 0 , a2 = 0;
let a11 = 0, a22 = 0;
let st = false;


function theGame(){
    if(!(st)){
        x = p1 + 30;
    }
    // ball
    if(x >= 480 || x <= 0){
        a = -a;
    }
    if(y <= 0 || y >= 480){
        a = 0;
        b = 0;
        location.reload();
    }
    if((y == 39 && p2 <= x && x <= p2 + 80 )||(y == 441 && p1 <= x && x <= p1 + 80 )){
        b = -b;
    }
    // player 1
    if(( p1 >= 420 && a1>0) || (p1 <= 0 && a1<0)){
        a11 = 0;
    }else{
        a11 = a1;
    }
    // player 2
    if(( p2 >= 420 && a2>0) || (p2 <= 0 && a2<0)){
        a22 = 0;
    }else{
        a22 = a2;
    }
    let inTheBoard = `<div class="ball" style="top:${y += b}px;left:${x += a}px;"></div>`;
    inTheBoard += `<div class="player1" style="top: 460px;left:${p1 += a11}px;"></div>`;
    inTheBoard += `<div class="player2" style="top: 20px;left:${p2 += a22}px;"></div>`;
    theBoard.innerHTML = inTheBoard;
}

function start(e){
    if(e.key === ' ' && a == 0 && b == 0){
        a = 1;
        b = -1;
        st = true;
    }
}

function moove(e){
    // player 1
    if(e.key === 'ArrowRight' ){
        a1 = 2;
    }
    if(e.key === 'ArrowLeft'){
        a1 = -2;
    }
    // player 2
    if(e.key === 's' ){
        a2 = 2;
    }
    if(e.key === 'a'){
        a2 = -2;
    }
}
function stop_(e){
    // player 1
    if(e.key === 'ArrowRight'){
        a1 = 0;
    }else
    if(e.key === 'ArrowLeft'){
        a1 = 0;
    }
    // player 2
    if(e.key === 's'){
        a2 = 0;
    }else
    if(e.key === 'a'){
        a2 = 0;
    }
}


setInterval(theGame , 0.05);
addEventListener('keydown',start);
addEventListener('keydown',moove);
addEventListener('keyup',stop_);