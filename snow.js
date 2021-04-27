class snow{
    constructor(x,y,r){
        var options={
            isStatic:false
        }
        
        this.image = loadImage("snow4.webp")
        this.body=Bodies.circle(x,y,r,options);
        this.radius=r
        World.add(world,this.body)
        
        
    }
    display(){
        var pos= this.body.position;
        
        if(pos.y>350){
            World.remove(world,this.body)
           }
       else{
        push();
        fill("white")
        //ellipseMode(RADIUS);
        //ellipse(pos.x,pos.y,this.radius,this.radius);
        imageMode(CENTER)
        this.image.resize(80,80)
        image(this.image,pos.x,pos.y,this.r,this.r)
        pop();
  }
   
    }
}