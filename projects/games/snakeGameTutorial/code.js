 const playBoard = document.querySelector(".playBoard");
 const scoreElement = document.querySelector(".score");
 const highScoreElement = document.querySelector(".highScore");

 let gameOver = false;
 let foodX,foodY;
 let snakeX = 5, snakeY = 10;
 let snakeBody = [];
 let velocityX = 0, velocityY =0;
 let setIntervalId;
 let score = 0;

 // Getting high score from the local storage
 let highScore = localStorage.getItem("highScore") || 0;
 highScoreElement.innerText = `High Score: ${highScore}`;


 const changeFoodPosition = () => {
    // Passing a random 0 - 30 value as food position
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
 }

 const handleGameOver = () => {
    // Clearing the timer and reloading the page on game over
    clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay...");
    location.reload();
 }

 const changeDirection = (e) => {
    // Changing velocity value based on key press
    if(e.key === "ArrowUp" && velocityY !=1){
        velocityX = 0;
        velocityY = -1;
    }
    else if(e.key === "ArrowDown" && velocityY !=-1){
        velocityX = 0;
        velocityY = 1;
    }
    else if(e.key === "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }
    else if(e.key === "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    }
 }
 
 const initGame=()=>{
    if(gameOver) return handleGameOver();
    let htmlMarkup=`<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    // cheking if the snake hit the foodX
    if(snakeX === foodX && snakeY === foodY){
        changeFoodPosition();
        snakeBody.push([0,0]); // Puching food position to snake body array
        score++;// increase food by one

        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("highScore", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `Score: ${highScore}`;
    }

    for(let i = snakeBody.length - 1; i > 0; i--){
        // Shifting forward the values of the elements in the snake body by one
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY];// Setting first and second element of snake body to current snake position

    // Updating the snake's head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;

    // Checking if the snake's head is out of wall, if so setting gameOver to true
    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30){
        gameOver = true;
    }
    
    for(let i = 0; i < snakeBody.length; i++){
        // Adding a div for each part of the snake's body
        htmlMarkup +=`<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        
        if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
            gameOver = true;
        }
    }
    playBoard.innerHTML = htmlMarkup;

 }

 
changeFoodPosition();
setIntervalId = setInterval(initGame, 125);
document.addEventListener("keydown",changeDirection);