///////////////enemy///////////////////
class enemy extends yentity
{
  constructor(x2,y2,g) 
  {
	  super(x2,y2,g);
	  this.speed = 1;
	  this.type = "enemy";
      this.tx = this.x/this.tw
      this.ty = this.y/this.th
      this.grafic_type = "none"
      this.c = camera.position
      this.tp_timer = new ytimer(300) //timer for them to teleport
  }//end constructor
  
  update()
  {
	var t = this;
  super.update();
    // tilemap x and y
    this.tx = Math.floor(this.x/this.tw)
    this.ty = Math.floor(this.y/this.th)
    t.move()
    t.hit()
    t.teleport();
  }//end update
  move()
  {
    var t = this;
    if (t.get_by_type("player")[0].moving) {
      t.move_to(t.c.x, t.c.y)
    }
  }//end move
  hit() {
    var t = this;
    t.collide("enemy")
    var pl = t.collide("player")

    if(pl) pl.game_over()
  }//end hit

  teleport() {
    var t = this
    var rx = Math.floor(Math.random() * yscreen.w);
    var ry = Math.floor(Math.random() * yscreen.h);
    var pl = t.get_by_type("player");
    while(rx > pl.x - 50 && rx < pl.x + 50) rx = Math.floor(Math.random() * yscreen.w);
    while(ry > pl.y - 50 && ry < pl.y + 50) ry = Math.floor(Math.random() * yscreen.h);
    if(dist(t.x, t.y, t.c.x, t.c.y) > 500 && this.tp_timer.finished()) {
      console.log("df")
      t.setxy(rx, ry)
    }
  }
  
  
}//end class
///////////////end enemy///////////////////