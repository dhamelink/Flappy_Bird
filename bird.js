class Bird {
    constructor(){
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.width = 30;
        this.height = 30;
        this.weight = 1;

    }
    update(){
        let curve =Math.sin(angle) * 20;
        if(this.y > canvas.height - (this.height*1.5)+ curve){
            this.y = canvas.height - (this.height*1.5) + curve;
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;
        }
        if (this.y < 0 + this.height / 2){
            this.y = 0 + this.height / 2;
            this.vy = 0;
        }
        if(spacePressed && this.y > this.height * 1.5) this.flap();
    }
    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }
    flap(){
        this.vy -= gamespeed;
        console.log
    }
}
const bird = new Bird();
