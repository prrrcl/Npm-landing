var roverOne = {
  direction: 'N',
  travelLog: [],
  nombre: 'roverOne'
}
var roverTwo = {
  direction: 'N',
  travelLog:[],
  nombre: 'roverTwo'
}
var roverThree = {
  direction: 'N',
  travelLog:[],
  nombre: 'roverThree'
}
var roverFour = {
  direction: 'N',
  travelLog: [],
  nombre: 'roverFour'
}

var rovers = [roverOne, roverTwo, roverThree, roverFour];
var actualRover = 0;

function changeRover(){
  actualRover++;
  if(actualRover > rovers.length - 1){
    actualRover = 0;
  }
}
var grid = [
  [null, null , null , null, null, null, null, null, null, null],
  [null, null , null , null, null, null, null, null, null, null],
  [null, null , null , null, null, null, null, null, null, null],
  [null, null , null , null, null, null, null, null, null, null],
  [null, null , null , null, null, null, null, null, null, null],
  [null, null , null , null, null, null, null, null, null, null],
  [null, null , null , null, null, null, null, null, null, null],
  [null, null , null , null, null, null, null, null, null, null],
  [null, null , null , null, null, null, null, null, null, null],
  [null, null , null , null, null, null, null, null, null, null],
];
function getRandomNum(){
  return Math.floor(Math.random() * 10);
}

function initGame(){
  for(var i = 0; i < getRandomNum(); i++){
    grid[getRandomNum()][getRandomNum()] = 'obstacle';
  }
  for(var i = 0; i < rovers.length; i++){ 
    var x = getRandomNum();
    var y = getRandomNum();
    grid[x][y] = rovers[i].nombre; 
    rovers[i].x = x; 
    rovers[i].y = y; 
  }
}
initGame(); 

function turnLeft(roverDirection){
  switch(roverDirection){
    case 'N':
    rovers[actualRover].direction = 'W';
    break;

    case 'W':
    rovers[actualRover].direction = 'S';
    break;
  
    case 'S':
    rovers[actualRover].direction = 'E';
    break;

    case 'E':
    rovers[actualRover].direction = 'N'
  }
}

function turnRight(roverDirection){
  switch(roverDirection){
    case 'N':
    rovers[actualRover].direction = 'E';
    break;

    case 'E':
    rovers[actualRover].direction = 'S';
    break;

    case 'S':
    rovers[actualRover].direction = 'W';
    break;

    case 'W':
    rovers[actualRover].direction = 'N';
    break;
  }
}

function canMove(x,y){
  var direction = rovers[actualRover].direction;

  switch(direction){
    case 'N':
    if(x - 1 < 0){
      console.log('Ups! You can\'t exit outside of area!'); 
      return false;
    } else if(grid[x - 1][y] === null){ 
      return true;
    }else if(grid[x - 1][y] === 'obstacle'){
      console.log('Ups! You can\'t forward in this direction, there is a obstacle.'); 
      return false;
    }else if(grid[x - 1][y].includes('rover')){
      console.log('Ups! You can\'t forward in this direction, there is an another Rover.'); 
      return false;
    } 
    break;

    case 'W':
    if(y - 1 < 0){
      console.log('Ups! You can\'t exit outside of area!');
      return false;
    } else if(grid[x][y - 1] === null){
      return true;
    }else if(grid[x][y - 1] === 'obstacle'){
      console.log('Ups! You can\'t forward in this direction, there is a obstacle.');
      return false;
    }else if(grid[x][y - 1].includes('rover')){
      console.log('Ups! You can\'t forward in this direction, there is an another Rover.');
      return false;
    } 
    break;

    case 'S':
    if(x + 1 > 9){
      console.log('Ups! You can\'t exit outside of area!');
      return false;
    } else if(grid[x + 1][y] === null){
      return true;
    }else if(grid[x + 1][y] === 'obstacle'){
      console.log('Ups! You can\'t forward in this direction, there is a obstacle.');
      return false;
    }else if(grid[x + 1][y].includes('rover')){
      console.log('Ups! You can\'t forward in this direction, there is an another Rover.');
      return false;
    } 
    break;

    case 'E':
    if(y + 1 > 9){
      console.log('Ups! You can\'t exit outside of area!');
      return false;
    } else if(grid[x][y + 1] === null){
      return true;
    }else if(grid[x][y + 1] === 'obstacle'){
      console.log('Ups! You can\'t forward in this direction, there is a obstacle.');
      return false;
    }else if(grid[x][y + 1].includes('rover')){
      console.log('Ups! You can\'t forward in this direction, there is an another Rover.');
      return false;
    } 
    break;

  }
}


function moveForward(roverDirection){

  var lastPosX = rovers[actualRover].x;
  var lastPosY = rovers[actualRover].y;

  switch(roverDirection){
    case 'N':
    if(canMove(rovers[actualRover].x, rovers[actualRover].y)){
      console.log('The rover: ' + rovers[actualRover].nombre + ' moved to North.');
      rovers[actualRover].x = rovers[actualRover].x - 1;
      grid[rovers[actualRover].x][rovers[actualRover].y] = rovers[actualRover].nombre;
      grid[lastPosX][lastPosY] = null;
    }
    break;

    case 'W':
    if(canMove(rovers[actualRover].x, rovers[actualRover].y)){
      console.log('The rover: ' + rovers[actualRover].nombre + ' moved to West.');
      rovers[actualRover].y = rovers[actualRover].y - 1;
      
      grid[rovers[actualRover].x][rovers[actualRover].y] = rovers[actualRover].nombre;
      grid[lastPosX][lastPosY] = null;
    }
    break;

    case 'S':
    if(canMove(rovers[actualRover].x, rovers[actualRover].y)){
      console.log('The rover: ' + rovers[actualRover].nombre + ' moved to South.');
      rovers[actualRover].x = rovers[actualRover].x + 1;
      grid[rovers[actualRover].x][rovers[actualRover].y] = rovers[actualRover].nombre;
      grid[lastPosX][lastPosY] = null;
    }
    break;

    case 'E':
    if(canMove(rovers[actualRover].x, rovers[actualRover].y)){
      console.log('The rover: ' + rovers[actualRover].nombre + ' moved to East.');
      rovers[actualRover].y =rovers[actualRover].y + 1;

      grid[rovers[actualRover].x][rovers[actualRover].y] = rovers[actualRover].nombre;
      grid[lastPosX][lastPosY] = null;
    }
    break;
  }

  changeRover();

}

function moveBackward(){
  var lastItemLog = rovers[actualRover].travelLog.length - 1;
  var actualX = rovers[actualRover].x;
  var actualY = rovers[actualRover].y;
 if(rovers[actualRover].travelLog.length === 0){
    console.log('You can\'t do "back" command.');
  }else{
    rovers[actualRover].x = rovers[actualRover].travelLog[lastItemLog][0];
    rovers[actualRover].y = rovers[actualRover].travelLog[lastItemLog][1];
    grid[rovers[actualRover].x][rovers[actualRover].y] = rovers[actualRover].nombre;
    grid[actualX][actualY] = null;
    console.log('The rover: ##' + rovers[actualRover].nombre + ' has stepped back one step.' )
    changeRover();
  }
}

function commands(commands){
  for(var i = 0; i < commands.length; i++){
      if(commands[i] !== 'l' && commands[i] !== 'r' && commands[i] !== 'b' && commands[i] !== 'f'){
        console.log('Command not valid. Please enter l to Left, r to Right, f to Forward and b to Backward.');
      } else{
      switch(commands[i]){
      case 'l':
      turnLeft(rovers[actualRover].direction);
      break;

      case 'r':
      turnRight(rovers[actualRover].direction);
      break;

      case 'f':
      rovers[actualRover].travelLog.push([rovers[actualRover].x , rovers[actualRover].y]);
      moveForward(rovers[actualRover].direction);
      break;

      case 'b':
      moveBackward();
      rovers[actualRover].travelLog.splice((rovers[actualRover].travelLog.length) ,1);
      break;
    }   
    }
  }
 /*if(rovers[actualRover].travelLog.length > 0){
   console.log(rovers[actualRover].travelLog)
 }*/
}