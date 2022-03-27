class Background{
constructor(canvas, ctx, moveSpeed){
this.canvas = canvas;
this.ctx = ctx;
this.image = null;
this.moveSpeed = moveSpeed;
this.y=0;
this.init ()
}
init(){
    this.image = new Image ();
    this.image.src = "./images/road.png";
}
draw(){
    // 0 is x position 
if(this.image){
    this.ctx.drawImage(this.image, 0, this.y, this.canvas.width, this.canvas.height);
this.ctx.drawImage (this.image, this.x, this.y-this.canvas.height, )
}
}

move (){
this.y += this.moveSpeed;
// if y is bigger it will reset 
if (this.y > this.canvas.height){
    this.y =0;
}
}

}