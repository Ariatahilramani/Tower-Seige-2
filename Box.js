class Box {
    constructor(x, y, width, height) {
      var options = {
        'restitution':0,
            'friction':0.2,
            'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility=255;
     this.image=loadImage("enemy.png")
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 10){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
         pop();
       }
      }
  }
  
    