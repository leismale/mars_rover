var rover = {
  direction : "N",
  oldx: 0,
  newx: 0,
  oldy: 0,
  newy: 0,
  travelLog: [0,0]
}


var obstacles = [
[ , , , , , , , , , "x"],
[ , , , , , , , , , ],
[ , , "x" , , , , , , , ],
[ , , , , , , , , , ],
[ , , , , , , , , , ],
[ "x", , , , , , , , , ],
[ , , , , , , , , , ],
[ , , , , , , "x", , , ],
[ , , , , , , , , , ],
[ , , , , , , , , , ],
];


function turnLeft(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;
    
    case "W":
    rover.direction = "S";
    break;
        
    case "S":
    rover.direction = "E";
    break;
        
    case "E":
    rover.direction = "N";
    break;
  }
  console.log("turnLeft was called!");
}


function turnRight(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    
    case "W":
    rover.direction = "N";
    break;
        
    case "S":
    rover.direction = "W";
    break;
        
    case "E":
    rover.direction = "S";
    break;
  }
  console.log("turnRight was called!");
}


function moveForward(rover){
  switch (rover.direction) {
    case "N":
    rover.oldy = rover.newy;
    rover.newy = rover.newy-1;
    checkGrid();
    checkobstacles();
    log();
    break;
    
    case "W":
    rover.oldx = rover.newx;
    rover.newx = rover.newx-1;
    checkGrid();
    checkobstacles();
    log();
    break;
        
    case "S":
    rover.oldy = rover.newy;
    rover.newy = rover.newy+1;
    checkGrid();
    checkobstacles();
    log();
    break;
        
    case "E":
    rover.oldx = rover.newx;
    rover.newx = rover.newx+1;
    checkGrid();
    checkobstacles();
    log();
    break;
  }
  console.log("moveForward was called");
}


function moveBackward(rover){
  switch (rover.direction) {
    case "N":
    rover.oldy = rover.newy;
    rover.newy = rover.newy+1;
    checkGrid();
    checkobstacles();
    log();
    break;
    
    case "W":
    rover.oldx = rover.newx;
    rover.newx = rover.newx+1;
    checkGrid();
    checkobstacles();
    log();
    break;
        
    case "S":
    rover.oldy = rover.newy;
    rover.newy = rover.newy-1;
    checkGrid();
    checkobstacles();
    log();
    break;
        
    case "E":
    rover.oldx = rover.newx;
    rover.newx = rover.newx-1;
    checkGrid();
    checkobstacles();
    log();
    break;
  }
  console.log("moveForward was called");
}


function commandinput() {
  var commandos = "rrfflfrfrbbb";
  for (i = 0; i < commandos.length; i++) {
    switch (commandos[i]) {
      case "r":
      turnRight(rover);
      break;

      case "l":
      turnLeft(rover);
      break;

      case "f":
      moveForward(rover);
      log();
      break;

      case "b":
      moveBackward(rover);
      log();
      break;

      default:
      break;
    }
  }
}


function checkGrid() {
  if (rover.newy < 0) {
    console.log ("You can't go off the grid");
    rover.newy = rover.oldy;
  }
  if (rover.newx < 0) {
    console.log ("You can't go off the grid");
    rover.newx = rover.oldx;
  }
  if(rover.newy > 9) {
    console.log ("You can't go off the grid");
    rover.newy = rover.oldy;
  }
  if(rover.newx > 9) {
    console.log ("You can't go off the grid");
    rover.newx = rover.oldx;
  }
}


function checkobstacles() {
  var obstaclesPos = obstacles[rover.newy][rover.newx];
  if (obstaclesPos === "x") {
    console.log ("Obstacle, going back");
    rover.newy = rover.oldy;
    rover.newx = rover.oldx;
  }
}


function log() {
  rover.travelLog.push(["X" + rover.newx, "Y" + rover.newy]);
}