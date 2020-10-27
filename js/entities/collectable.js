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
  
  init() {
    super.init();
    var t = this;
    if(t.type === "coin") {
      this.sprite.draw = function() {
        fill(color(255, 255, 0))
        ellipse(0, 0, 20, 20)
      }
    }
  }

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
        if(t.type === "coin") {
          t.world.score += t.coin_inc;
          pl.coins++;
          var pos = t.get_by_type("map_genrator")[0].find_pos()
          var ncx = pos[1]*t.tw
          var ncy = pos[0]*t.th
          console.log(t.tw,t.th)
          var nc = new collectable(ncx, ncy)//new coin
          nc.type = "coin"
          nc.tw = t.tw
          nc.th = t.th
          t.world.add(nc)
        }
        if(t.type === "exit") {
          t.world.level++;
          t.world.init()
        }
        if(t.type === "ammo" && pl.ammo === 0) pl.ammo += 2
        t.world.remove(t)
    }
  }//end hit
  
  
}//end class
///////////////end collectable///////////////////