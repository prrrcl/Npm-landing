var roverOne = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
  nombre: 'roverOne'
}
var roverTwo = {
  direction: 'N',
  x: 9,
  y: 9,
  travelLog:[],
  nombre: 'roverTwo'
}
var roverThree = {
  direction: 'N',
  x: 0,
  y:9,
  travelLog:[],
  nombre: 'roverThree'
}
var roverFour = {
  direction: 'N',
  x: 9,
  y: 0,
  travelLog: [],
  nombre: 'roverFour'
}

var rovers = [roverOne, roverTwo, roverThree, roverFour];
var actualRover = 0;

function changeRover(){
  actualRover++;
  if(actualRover > rovers.length){
    actualRover = 0;
  }
}

var grid = [
  ['roverOne', 'obstacle' , null , null, null, 'obstacle', null, null, null, 'roverFour'],
  ['roverThree', null , null , null, null, null, 'obstacle', null, null, null],
  [null, null , 'obstacle' , null, null, null, null, null, null, 'obstacle'],
  [null, null , null , null, null, null, null, null, null, null],
  ['obstacle', null , null , null, null, null, null, null, null, null],
  [null, null , null , null, null, null, null, null, null, null],
  [null, null , null , null, 'obstacle', null, null, null, null, null],
  [null, null , null , null, null, null, null, null, null, null],
  [null, null , null , null, null, null, null, null, null, 'obstacle'],
  [null, null , null , null, null, null, null, null, null, 'roverTwo'],
];

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


function esPosible([x, y]){
  var direction = rovers[actualRover].direction;
  
  if(direction === 'N'){
    if(grid[x - 1][y] === 'obstacle'){
      console.log('Ups! You can\'t forward, there is obstacle there!');
      return false;
    }else{
      if(grid[x - 1][y] === null){
        return true;
      }else if(grid[x - 1][y].includes('rover')){
        console.log('Ups! You can\'t forward, there is Rover there!');
        return false;
      }
    }
  }
  if(direction === 'W'){
    if(grid[x][y - 1] === 'obstacle'){
      console.log('Ups! You can\'t forward, there is obstacle there!');
      return false
    }else{
      if(grid[x][y - 1] === null){
        return true;
      }else if(grid[x][y - 1].includes('rover')){
        console.log('Ups! You can\'t forward, there is Rover there!');
        return false;
      }
    }
  }
  if(direction === 'S'){
    if(grid[x + 1][y] === 'obstacle'){
      console.log('Ups! You can\'t forward, there is obstacle there!');
      return false;
    }else{
      if(grid[x + 1][y] === null){
        return true;
      }else if(grid[x + 1][y].includes('rover')){
        console.log('Ups! You can\'t forward, there is Rover there!');
        return false;
      }
    }
  }
  if(direction === 'E'){
    if(grid[x][y + 1] === 'obstacle'){
      console.log('Ups! You can\'t forward, there is obstacle there!');
      return false
    }else{
      if(grid[x][y + 1] === null){
        return true;
      }else if(grid[x][y + 1].includes('rover')){
        console.log('Ups! You can\'t forward, there is Rover there!');
        return false;
      }
    }
  }
}

function moveForward(roverDirection){

  var lastPosX = rovers[actualRover].x;
  var lastPosY = rovers[actualRover].y;
  
  //Comprobamos hacia donde mira el Rover, y movemos en esa dirección

  switch(roverDirection){
    case 'N':
    if(esPosible([rovers[actualRover].x, rovers[actualRover].y])){
      rovers[actualRover].y = rovers[actualRover].y - 1;

      grid[rovers[actualRover].y][rovers[actualRover].x] = rovers[actualRover].nombre;
      grid[lastPosY][lastPosX] = null;
    }
    break;

    case 'W':
    if(esPosible([rovers[actualRover].x, rovers[actualRover].y])){
      rovers[actualRover].x = rovers[actualRover].x - 1;
      
      grid[rovers[actualRover].y][rovers[actualRover].x] = rovers[actualRover].nombre;
      grid[lastPosY][lastPosX] = null;
    }
    break;

    case 'S':
    if(esPosible([rovers[actualRover].x, rovers[actualRover].y])){
      rovers[actualRover].y = rovers[actualRover].y + 1;

      grid[rovers[actualRover].y][rovers[actualRover].x] = rovers[actualRover].nombre;
      grid[lastPosY][lastPosX] = null;
    }
    break;

    case 'E':
    if(esPosible([rovers[actualRover].x, rovers[actualRover].y])){
      rovers[actualRover].x =rovers[actualRover].x + 1;

      grid[rovers[actualRover].y][rovers[actualRover].x] = rovers[actualRover].nombre;
      grid[lastPosY][lastPosX] = null;
    }
    break;
  }
  
  //Comprobamos que el rover no se salga de nuestra cuadrícula de 10x10

  if(rovers[actualRover].y < 0){
    rovers[actualRover].y = 0;
    console.log('You can\'t exit outside of area!')
  }
  if(rovers[actualRover].x < 0){
    rovers[actualRover].x = 0;
    console.log('You can\'t exit outside of area!')
  }
  if(rovers[actualRover].x > 9){
    rovers[actualRover].x = 9;
    console.log('You can\'t exit outside of area!')
  }
  if(rovers[actualRover].y > 9){
    rovers[actualRover].y = 9;
    console.log('You can\'t exit outside of area!')
  }
  
  
  // Cambiamos de rover

  changeRover();

}
function moveBackward(){
  var lastItemLog = rovers[actualRover].travelLog.length - 1;
  if(rovers[actualRover].travelLog.length === 0){
    console.log('You can\'t do "back" command.');
  }else{
    rovers[actualRover].x = rovers[actualRover].travelLog[lastItemLog][0];
    rovers[actualRover].y = rovers[actualRover].travelLog[lastItemLog][1];
  }
}

function comandos(commands){
  for(var i = 0; i < commands.length; i++){
      if(commands[i] !== 'l' && commands[i] !== 'r' && commands[i] !== 'b' && commands[i] !== 'f'){
        console.log('Command not valid');
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
      rovers[actualRover].travelLog.splice((rovers[actualRover].travelLog.length - 1) ,1);
      break;
    }   
    }
  }
 if(rovers[actualRover].travelLog.length > 0){
   console.log(rovers[actualRover].travelLog)
 }
}