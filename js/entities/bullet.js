///////////////bullet///////////////////
class bullet extends yentity
{
  constructor(x2,y2, tx2, ty2) 
  {
	  super(x2,y2);
	  this.speed = 10;
    this.type = "bullet";
    this.grafic_type = "none";
    this.moving;
    this.tx = tx2;
    this.ty = ty2;
    this.life_timer = new ytimer(20)
    this.set_wh(10,10)
    var dx = (this.x - this.tx);
	var dy = (this.y - this.ty);
    this.a = Math.atan2(dy, dx);//radians
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
    //comment out: drawing
    if(t.collide("wall")) {
        t.world.remove(this)
    }
    var e = t.collide("enemy")
    if(e) {
        e.teleport(true)
        t.world.remove(this)
    }
  }

  move() {
    var t = this;
    //comment out: drawing
    if(t.life_timer.finished())t.world.remove(this)
    //t.move_to(t.tx,t.ty): drawing
    var dx = Math.cos(t.a);
	var dy = Math.sin(t.a);
	t.move_by(-t.speed * dx, -t.speed * dy);
  }
  
  
}//end class
///////////////end bullet///////////////////