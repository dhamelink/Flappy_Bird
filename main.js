const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 3;

const gradient = ctx.createLinearGradient(0,0,0,90 );
    gradient.addColorStop("0.2", "#fff");
    gradient.addColorStop("0.4", "#000");
    gradient.addColorStop("0.6", "#fff");
    gradient.addColorStop("0.8", "#000");
    gradient.addColorStop("1", "#fff");

const background = new Image();
background.src = "BG.png"
const BG = {
    //repeating background possible with using 2 images following eachother
    x1: 0,
    x2: canvas.width,
    //x1 and x2 = horizontal position for  each bg image respectively
    y: 0,
    width: canvas.width,
    height: canvas.height
}
function handleBackground(){
    if (BG.x1 <= -BG.width + gamespeed) BG.x1 = BG.width;
    else BG.x1 -= gamespeed;
    if (BG.x2 <= -BG.width + gamespeed) BG.x2 = BG.width;
    else BG.x2 -= gamespeed;
    ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
    ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);
}
    
function animate(){;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(10, canvas.height - 90, 50, 50); test from beginning
    handleBackground();
    handleObstacles();
    bird.update();
    handleParticles();
    bird.draw();
    ctx.fillStyle = gradient;
    ctx.font = "90px Comic Sans MS";
    ctx.strokeText(score, 450, 90);
    ctx.fillText(score, 450 ,90),
    handleCollision();
    if (handleCollision()) return;
    requestAnimationFrame(animate);
    angle+=0.15;
    hue += 2; 
    frame++;
}
animate();

window.addEventListener("keydown", function(e){
    if (e.code === "Space") spacePressed = true;
});
window.addEventListener("keyup", function(e){
    if (e.code === "Space") spacePressed = false;
    bird.frameX = 0;
});

const bang = new Image();
bang.src = "bang.png";
function handleCollision(){
    for (let i = 0; i < obstaclesArray.length; i++){
        if (bird.x < obstaclesArray[i].x + obstaclesArray[i].width && bird.x + bird.width > obstaclesArray[i].x && ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) || (bird.y > canvas.height - obstaclesArray[i].bottom && bird.y + bird.height < canvas.height))){
            // detection de collision pour obstacle haut et bas
            ctx.drawImage(bang, bird.x - 22.5, bird.y - 22.5, 75, 75);
            ctx.font = "25px Comic Sans MS";
            ctx.fillStyle = "white";
            ctx.fillText("Perdu, ton score était " + score, 160, canvas.height/2 - 10)
            return true
        }
    }
}


