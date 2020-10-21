///////////////player///////////////////
class player extends yentity
{
  constructor(x2,y2,g) 
  {
	  super(x2,y2,g);
	  this.speed = 4;
    this.type = "player";
    this.grafic_type = "none";
  }//end constructor
  
  update()
  {
	var t = this;
  super.update();
  t.move()
  t.hit()
  }//end update

  hit() {
    var t = this;
    t.collide("wall")
    t.collide("enemy")
  }

  move() {
    var t = this;
    
    camera.position.x = t.x;
    camera.position.y = t.y;
    if (keyDown('a')) {
        t.move_by(-t.speed, 0);
        return
    }
    if (keyDown('d')) {
        t.move_by(t.speed, 0);
        return
    }
    if (keyDown('s')) {
        t.move_by(0, t.speed);
        return
    }
    if (keyDown('w')) {
        t.move_by(0, -t.speed);
    }
  }
  
  
}//end class
///////////////end player///////////////////