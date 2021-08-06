// game constant & Variable
let inputDir = { x: 0, y: 0 };
let speed = 5;
let lastPaneTime = 0;
let score = 0;
let snakeArr = [
    { x: 13, y: 15 }
]
let food = { x: 6, y: 8 };
const foodSound = new Audio('../assets/food.mp3');
const gameOverSound = new Audio('../assets/gameover.mp3');
const moveSound = new Audio('../assets/move.mp3');
const musicSound = new Audio('../assets/music.mp3');

// game function
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if ((ctime - lastPaneTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaneTime = ctime;
    gameEngine();
}

function isCollide(snake){

    // contacting the snake tail
    for(let i = 1; i<snake.length ; i++){
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }

    }
    if((snake[0].x >= 18 || snake[0].x <=0) || (snake[0].y >= 18 || snake[0].y <= 0)){
            return true;
        }
    
}

function gameEngine() {
    // part 1 : updating the snake variable & food

    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x: 0,y:0};
        alert("game Over!");
        snakeArr = [{x:13, y: 15}];
        musicSound.play();
        score = 0;
    }
    
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: 2 + Math.round(a + (b-a) * Math.random()), y: 2 + Math.round(a + (b-a) * Math.random())}
        foodSound.play();
        score +=1;
        console.log(score);
        scoreCont = document.querySelector('.scoreCont');
        scoreCont.innerHTML = "Your Score : " + score;
    }

    // moving the snake
    for (let i = snakeArr.length-2; i>= 0; i--) {
        snakeArr[i+1] = {...snakeArr[i]};

    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // part 2 : render the snake and food
    // snake display
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            
            snakeElement.classList.add('head');
        } 
        else {
            
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });

    // Food Display
    
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);
    

}
// main logic

window.requestAnimationFrame(main);
window.addEventListener('keydown', e=>{
    inputDir = {x: 0, y: 1};// Start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log(snakeArr[0].x + " " + snakeArr[0].y);
            inputDir.x = 0;
            inputDir.y = -1; 
            break;
            
            case "ArrowDown":
                // console.log("Down");
                console.log(snakeArr[0].x + " " + snakeArr[0].y);
                
                inputDir.x = 0;
                inputDir.y = 1; 
                break;
                
                case "ArrowLeft":
                    // console.log("Left");
                    console.log(snakeArr[0].x + " " + snakeArr[0].y);
                    
                    inputDir.x = -1;
                    inputDir.y = 0; 
                    break;
                    
                    case "ArrowRight":
                        console.log(snakeArr[0].x + " " + snakeArr[0].y);
                        
                        inputDir.x = 1;
            inputDir.y = 0; 
            // console.log("Right");
            break;
            
        default:
            break;
    
    }
});
