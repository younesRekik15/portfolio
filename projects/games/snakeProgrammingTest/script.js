const gameBoard = document.querySelector(".gameBoard");

let gameOver = false;
let headX = 5, headY = 5;
let mooveX = 0, mooveY = 0;
let foodX , foodY;
let snakeBody = [[]];
let yummy;


function changeFoodPosition(){
    foodX = Math.floor(Math.random()*30);
    foodY = Math.floor(Math.random()*30);
}

function changeDirection(e){
    if(e.key === 'ArrowDown' && mooveY != -1){
        mooveX = 0;
        mooveY = 1;
    }
    if(e.key === 'ArrowUp' && mooveY != 1){
        mooveX = 0;
        mooveY = -1;
    }
    if(e.key === 'ArrowRight' && mooveX != -1){
        mooveX = 1;
        mooveY = 0;
    }
    if(e.key === 'ArrowLeft' && mooveX != 1){
        mooveX = -1;
        mooveY = 0;
    }
}

function theGame(){
    yummy = false;
    // Checking if the game ended or not
    if(gameOver){
        location.reload();
    }

    // Building the Snake Body
    let insideTheBoard = `<div class="food" style="top: ${foodY * 20}px;left: ${foodX * 20}px;"></div>`;

    if(headX === foodX && headY === foodY){
        changeFoodPosition();
        yummy = true;
        
    }
    snakeBody[snakeBody.length-1] = [headX , headY];
    for(let i=0; i<snakeBody.length;i++){
        insideTheBoard += `<div class="body" style="top: ${snakeBody[i][1] * 20}px;left: ${snakeBody[i][0] * 20}px;"></div>`;
    }
    gameBoard.innerHTML = insideTheBoard;

    // Adding new snake body segment
    snakeBody.push([headX += mooveX , headY += mooveY]);
    if(!(yummy)){
        snakeBody.shift();
    }
    // Checks if the snake head tuches its body
    for(let i = 0 ;i < snakeBody.length - 1 ; i++){
        if(headX === snakeBody[i][0] && headY === snakeBody[i][1]){
            gameOver = true;
        }
    }

    // Teleport when the snake head tuch the wall
    switch(headX){
        case -1:headX=29;break;
        case 30:headX=0;break;
    }
    switch(headY){
        case -1:headY=29;break;
        case 30:headY=0;break;
    }
}

changeFoodPosition();
setInterval(theGame,125);
addEventListener('keydown',changeDirection);