class Box{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.01, 
          isStatic: false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = rgb(random(0, 255), random(0, 255), random(0, 255));
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.color);
      
      if (this.body.velocity >= 3) {
        push();
        World.remove(world, this.body);
        this.visibility = this.visibility - 5;
        tint(255, this.visibility);
        pop();
      }

      rect(0,0,this.width, this.height);
      pop();
    }

    score() {
      if (this.visibility < 0 && this.visibility >= 105) {
        score++;
      }
    }
}