document.body.onload = game;
var can1,can2,ctx1,ctx2,canWidth,canHeight;

var lastTime ,deltaTime;

var bgPic = new Image();

var ane;
function game(){
    init()
    lastTime = Date.now()
    declare = 0;

    gameloop()
}

function init(){
    //
    can1 = document.getElementById('canvas1');//前面的一层
    can2 = document.getElementById('canvas2');//后面一层
    ctx1 = can1.getContext('2d');
    ctx2 = can2.getContext('2d');
    bgPic.src = './src/background.jpg';
    canWidth =can1.width;
    canHeight = can1.height;
    ane = new aneObj()
    ane.init()
    
}


function gameloop(){
    requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now -lastTime;
    lastTime = now;
    drawBackground();
    ane.draw()
}

