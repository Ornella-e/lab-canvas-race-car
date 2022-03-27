//windowonload doesnt need to be necesarily here because javascript(index)is at the bottom

document.getElementById('start-button').addEventListener("click", startGame); 
  
const canvas =document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let background, 
car, 
obstacle = [], 
frameCounter = 0, 
moveSpeed = 5, 
intervalId,
score = 0;
  function startGame() {
    reset ();
//console.log('working'); to see it is working
const background = new Background (canvas, ctx, moveSpeed);
car = new Car (canvas, ctx);


createEventListeners ();
update ();
  }
  function update (){
    setInterval(()=> {
      
      frameCounter ++;
      if(frameCounter %10 === 0){
        score += 3;
      }
      if (frameCounter === 90){
        //push inside a new ostacle
        obstacle.push (new Obstacle(canvas, ctx, moveSpeed));
      frameCounter = 0;
      }
      background.draw();
    background.move ();
    car.draw();
    obstacle.forEach((obstacle) => {
    obstacle.draw();
    obstacle.move ();  
    });
    drawScore();
    if (collisionBetweenCarAndObstacle()){
      
      reset();
      return;
    };
    },1000/30);
  }
  
  function createEventListeners (){
    document.addEventListener("keydown", (e) => {
      //e.key === 'ArrowRight' && car.moveRight ();
     switch(e.key){
       case "ArrowRight":
         car.moveRight();
         break;
         case "ArrowLeft":
           car.moveLeft();
           break;
           default:
             break;
     }
    });
  
}
function collisionBetweenCarAndObstacle (){
  let hasCollided = false;
for (let i = 0; i< obstacle.length; i ++){
  const obstacles = obstacle [i];
  const withinX = car.x + car.size.width > obstacle.x && car.x < obstacle.x + obstacle.width;
  const withinY = obstacle.y + obstacle.height > car.y && obstacle.y < car.y + car.size.height;
hasCollided = withinX && withinY;
if (hasCollided){
  break;
}

}
return hasCollided;
}

function drawScore (){
  ctx.fillStyle = "black";
  ctx.font = " 32px sans-serif";
  ctx.fillText ( `Score: ${score}`,20,30);
}
function reset(){
  clearInterval (intervalId);
  background = null;
  car = null;
  obstacle = [];
  score = 0;
  frameCounter = 0;
}