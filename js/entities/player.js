///////////////player///////////////////
class player extends yentity
{
  constructor(x2,y2,g) 
  {
	  super(x2,y2,g);
	  this.speed = 10;
    this.type = "player";
    this.grafic_type = "none";
    this.moving;
  }//end constructor
  
  update()
  {
	var t = this;
  super.update();
  t.move()
  t.hit()
  t.shoot()
  }//end update

  hit() {
    var t = this;
    t.collide("wall")
    //t.collide("enemy")
  }

  shoot() {
    var t = this;
    if(mouseWentUp()) {
      t.moving = true
    }
  }

  move() {
    var t = this;
    t.moving = false;
    camera.position.x = t.x;
    camera.position.y = t.y;
    if (keyDown('a')) {
        t.move_by(-t.speed, 0);
        t.moving = true;
        return
    }
    if (keyDown('d')) {
        t.move_by(t.speed, 0);
        t.moving = true;
        return
    }
    if (keyDown('s')) {
        t.move_by(0, t.speed);
        t.moving = true;
        return
    }
    if (keyDown('w')) {
        t.move_by(0, -t.speed);
        t.moving = true;
    }
  }

  game_over() {
    var t = this
    t.world.init()
  }
  
  
}//end class
///////////////end player///////////////////