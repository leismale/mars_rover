var rover = {
  direction : "N",
  oldx: 0,
  newx: 0,
  oldy: 0,
  newy: 0,
  travelLog: [0,0]
}

var rover2 = {
  direction : "N",
  oldx: 9,
  newx: 9,
  oldy: 9,
  newy: 9,
  travelLog: [9,9]
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


function turnLeft(roverToMove) {
  switch (roverToMove.direction) {
    case "N":
    roverToMove.direction = "W";
    break;
    
    case "W":
    roverToMove.direction = "S";
    break;
        
    case "S":
    roverToMove.direction = "E";
    break;
        
    case "E":
    roverToMove.direction = "N";
    break;
  }
  console.log("turnLeft was called!");
}


function turnRight(roverToMove) {
  switch (roverToMove.direction) {
    case "N":
    roverToMove.direction = "E";
    break;
    
    case "W":
    roverToMove.direction = "N";
    break;
        
    case "S":
    roverToMove.direction = "W";
    break;
        
    case "E":
    roverToMove.direction = "S";
    break;
  }
  console.log("turnRight was called!");
}


function moveForward(roverToMove) {
  switch (roverToMove.direction) {
    case "N":
    roverToMove.oldy = roverToMove.newy;
    roverToMove.newy = roverToMove.newy-1;
    checkGrid(roverToMove);
    checkObstacles(roverToMove);
    checkRover();
    log(roverToMove);
    break;
    
    case "W":
    roverToMove.oldx = roverToMove.newx;
    roverToMove.newx = roverToMove.newx-1;
    checkGrid(roverToMove);
    checkObstacles(roverToMove);
    checkRover();
    log(roverToMove);
    break;
        
    case "S":
    roverToMove.oldy = roverToMove.newy;
    roverToMove.newy = roverToMove.newy+1;
    checkGrid(roverToMove);
    checkObstacles(roverToMove);
    checkRover();
    log(roverToMove);
    break;
        
    case "E":
    roverToMove.oldx = roverToMove.newx;
    roverToMove.newx = roverToMove.newx+1;
    checkGrid(roverToMove);
    checkObstacles(roverToMove);
    checkRover();
    log(roverToMove);
    break;
  }
  console.log("moveForward was called");
}


function moveBackward(roverToMove) {
  switch (roverToMove.direction) {
    case "N":
    roverToMove.oldy = roverToMove.newy;
    roverToMove.newy = roverToMove.newy+1;
    checkGrid(roverToMove);
    checkObstacles(roverToMove);
    checkRover();
    log(roverToMove);
    break;
    
    case "W":
    roverToMove.oldx = roverToMove.newx;
    roverToMove.newx = roverToMove.newx+1;
    checkGrid(roverToMove);
    checkObstacles(roverToMove);
    checkRover();
    log(roverToMove);
    break;
        
    case "S":
    roverToMove.oldy = roverToMove.newy;
    roverToMove.newy = roverToMove.newy-1;
    checkGrid(roverToMove);
    checkObstacles(roverToMove);
    checkRover();
    log(roverToMove);
    break;
        
    case "E":
    roverToMove.oldx = roverToMove.newx;
    roverToMove.newx = roverToMove.newx-1;
    checkGrid(roverToMove);
    checkObstacles(roverToMove);
    checkRover();
    log(roverToMove);
    break;
  }
  console.log("moveBackward was called");
}


function commandInput(roverToMove, commands) {
  var commands;
  for (i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case "r":
      turnRight(roverToMove);
      break;

      case "l":
      turnLeft(roverToMove);
      break;

      case "f":
      moveForward(roverToMove);
      break;

      case "b":
      moveBackward(roverToMove);
      break;

      default:
      break;
    }
  }
}


function checkGrid(roverToMove) {
  if (roverToMove.newy < 0) {
    console.log ("You can't go off the grid");
    roverToMove.newy = roverToMove.oldy;
  }
  if (roverToMove.newx < 0) {
    console.log ("You can't go off the grid");
    roverToMove.newx = roverToMove.oldx;
  }
  if(roverToMove.newy > 9) {
    console.log ("You can't go off the grid");
    roverToMove.newy = roverToMove.oldy;
  }
  if(roverToMove.newx > 9) {
    console.log ("You can't go off the grid");
    roverToMove.newx = roverToMove.oldx;
  }
}


function checkObstacles(roverToMove) {
  var obstaclesPos = obstacles[roverToMove.newy][roverToMove.newx];
  if (obstaclesPos === "x") {
    console.log ("Obstacle, going back");
    roverToMove.newy = roverToMove.oldy;
    roverToMove.newx = roverToMove.oldx;
  }
}


function checkRover() {
  if (rover.newx === rover2.newx || rover.newy === rover2.newy) {
    console.log ("You are going to crash, going back");
    rover.newx = rover.oldx;
    rover.newy = rover.oldy;
    rover2.newx = rover2.oldx;
    rover2.newy = rover2.oldy;
  }
}


function log(roverToMove) {
  roverToMove.travelLog.push(["X" + roverToMove.newx, "Y" + roverToMove.newy]);
}

function turns() {
  commandInput(rover, "rf");
  commandInput(rover2, "f");
  commandInput(rover, "fr");
  commandInput(rover2, "f");  
  commandInput(rover, "fl");
  commandInput(rover2, "f");  
  commandInput(rover, "ff");
  commandInput(rover2, "l");
  commandInput(rover, "rf");
  commandInput(rover2, "ff");
  commandInput(rover, "ff");
  commandInput(rover2, "ff");
  commandInput(rover, "ff");
}