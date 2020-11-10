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
      this.hue = 0
      this.i = 0
      this.w = 20
      this.h = 20
      this.grow_timer = new ytimer(20)
      this.expand_state = true
      this.expand_rate = 1
  }//end constructor
  
  init() {
    super.init();
    var t = this;
    var thus = this;
    if(t.type === "coin") {
      this.sprite.draw = function() {
        fill(color(255, 255, 0))
        ellipse(0, 0, thus.w, thus.h)
      }
    }
    if(t.type === "teleport") {
      this.sprite.draw = function() {
        fill(color(0, 0, 255))
        ellipse(0, 0, thus.w, thus.h)
      }
    }
    if(t.type === "end") {
      this.sprite.draw = function() {
        colorMode(HSB, 360)
        fill(color(t.hue, 180, 180))
        ellipse(0, 0, thus.w, thus.h)
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
    t.end_coin_effects()
  }//end update
  end_coin_effects() {
    var t = this;
    if(t.type !== "end") return;
    t.hue += 4
    if(t.hue >= 360) t.hue = 0
    //t.w+=5, t.h+=5
    // console.log(t.w,t.h)
    // var swave = (Math.sin(t.hue)*30+20)
    if(t.grow_timer.finished()) t.expand_state = !t.expand_state
    if(t.expand_state) t.set_wh(t.w+t.expand_rate,t.h+t.expand_rate)
    else t.set_wh(t.w-t.expand_rate,t.h-t.expand_rate)
    if (pla.coins < 5+gaw.level) t.sprite.visible = false
    else t.sprite.visible = true
  }
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
        if(t.type === "teleport" && pl.teleports === 0) pl.teleports++;
        if(t.type === "end" && pla.coins >= 5+gaw.level) gaw.nextLevel()
        t.world.remove(t)
    }
  }//end hit
  
  
}//end class
///////////////end collectable///////////////////