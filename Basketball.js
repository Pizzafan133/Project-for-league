class Basketball{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Matter.Bodies.circle(x,y,15,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        fill("white");
        circle(pos.x,pos.y,30);
    }
}
    
