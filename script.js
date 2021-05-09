var canvas = new fabric.Canvas("myCanvas");
var height = 20;
var width = 20;
var xCoordinate = 20;
var yCoordinate = 20;
var playerObject = "";
var blockObject = "";

function updatePosition() {
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(140);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top: yCoordinate, left: xCoordinate
        });
        canvas.add(playerObject);
    });
}

function  newImage(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        blockObject = Img;
        blockObject.scaleToWidth(width);
        blockObject.scaleToHeight(height);
        blockObject.set({
            top: yCoordinate, left: xCoordinate
        });
        canvas.add(blockObject);
    });
}

window.addEventListener("keydown", keyDown);

function keyDown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80") {
        console.log("p and shift pressed together");
        width = width + 14;
        height = height + 14;
        document.getElementById("currentWidth").innerHTML=width;
        document.getElementById("currentHeight").innerHTML=height;

    }
    if(e.shiftKey == true && keyPressed == "77") {
        console.log("m and shift pressed together");
        width = width - 14;
        height = height - 14;
        document.getElementById("currentWidth").innerHTML=width;
        document.getElementById("currentHeight").innerHTML=height;
        
    }
    if(keyPressed == "37") {
        leftKey();
        console.log("left key");
    }
    if(keyPressed == "38") {
        upKey();
        console.log("up key");
    }
    if(keyPressed == "39") {
        rightKey();
        console.log("right key");
    }
    if(keyPressed == "40") {
        downKey();
        console.log("down key");
    }
    if(keyPressed == "87") {
        newImage("wall.jpg");
        console.log("w");
    }
    if(keyPressed == "71") {
        newImage("ground.png");
        console.log("g");
    }
    if(keyPressed == "76") {
        newImage("light_green.png");
        console.log("l");
    }
    if(keyPressed == "84") {
        newImage("trunk.jpg");
        console.log("t");
    }
    if(keyPressed == "82") {
        newImage("roof.jpg");
        console.log("r");
    }
    if(keyPressed == "89") {
        newImage("yellow_wall.png");
        console.log("y");
    }
    if(keyPressed == "68") {
        newImage("dark_green.png");
        console.log("d");
    }
    if(keyPressed == "85") {
        newImage("unique.png");
        console.log("u");
    }
    if(keyPressed == "67") {
        newImage("cloud.jpg");
        console.log("c");
    }
}

function upKey() {
    if(yCoorinate > 0) {
        yCoordinate = yCoordinate - height;
        console.log(xCoordinate+", "+yCoordinate);
        canvas.remove(playerObject);
        updatePosition();
    }
}

function downKey() {
    if(yCoordinate < 700) {
        yCoordinate = yCoordinate + height;
        console.log(xCoordinate+", "+yCoordinate);
        canvas.remove(playerObject);
        updatePosition();
    }
}

function rightKey() {
    if(xCoordinate < 700) {
        xCoordinate = xCoordinate + width;
        console.log(xCoordinate+", "+yCoordinate);
        canvas.remove(playerObject);
        updatePosition();
    }
}

function leftKey() {
    if(xCoordinate > 0) {
        xCoordinate = xCoordinate - width;
        console.log(xCoordinate+", "+yCoordinate);
        canvas.remove(playerObject);
        updatePosition();
    }
}