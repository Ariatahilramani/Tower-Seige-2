class Box {
    constructor(x, y, width, height) {
      var options = {
      isStatic:false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
     fill("pink");

      if(this.body.speed < 1.5){
        rect(this.body.position.x,this.body.position.y,this.width, this.height);
      }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         pop();
       }
      
      
    }
  }
  
    