///////////////collectable///////////////////
class collectable extends yentity
{
  constructor(x2,y2,g) 
  {
	  super(x2,y2,g);
	  this.speed = 1;
	  this.type = "collectable";
      this.tx = this.x/this.tw
      this.ty = this.y/this.th
      this.grafic_type = "none"
      this.c = camera.position
      this.coin_inc = 50 //coin increment value
  }//end constructor
  
  update()
  {
	var t = this;
  super.update();
    // tilemap x and y
    this.tx = Math.floor(this.x/this.tw)
    this.ty = Math.floor(this.y/this.th)
    t.hit()
  }//end update
  hit() {
    var t = this;
    var pl = t.collide("player")

    if(pl) {
        if(t.type === "coin") pl.score += t.coin_inc
        if(t.type === "ammo" && pl.ammo === 0) pl.ammo += 2
        t.world.remove(t)
    }
  }//end hit
  
  
}//end class
///////////////end collectable///////////////////