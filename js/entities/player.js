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
    this.ammo = 2;
    this.max_ammo = 2;
    this.coins = 9999;
    this.teleports = 99999;
    this.dm //debug mode
  }//end constructor
  
  update()
  {
	var t = this;
  super.update();
  t.move()
  t.hit()
  t.shoot()
  t.teleport()
  t.boundaries()
  t.debug_entities()
  }//end update

  hit() {
    var t = this;
    t.collide("wall" + gaw.level)
    //t.collide("enemy")
  }

  boundaries() {
    var c = camera.position,
        t = this,
       msw = gaw.map_size*t.tw+t.tw, // map size width 
       msh = gaw.map_size*t.th+t.th; // map size height
    if(c.x <= 0) t.sx(.1)
    if(c.x >= msw) t.sx(msw-1)
    if(c.y <= 0) t.sy(.1)
    if(c.y >= msh) t.sy(msh-1)
  }

  debug_entities() {
    var entities = gaw.entitys
    if(!this.dm) return
    for (var e of entities) {
      if(e.is_clicked) {
        console.log(e);
        e.is_clicked = false;
      }
    }
  }

  shoot() {
    var t = this;
    if(t.ammo <= 0)return;
    //mouseIsPressed: drawing
    if(mouseWentUp()) {
      t.moving = true
      var b = new bullet(t.x,t.y,camera.mouseX,camera.mouseY)
      t.world.add(b)
      t.ammo--
    }
  }

  teleport() {
    var t = this;
    if(t.teleports > 0 && keyDown("t")) {
      var pos = t.get_by_type("map_genrator")[0].find_pos()
      var ncx = pos[1]*t.tw
      var ncy = pos[0]*t.th
      // while (map)
      t.setxy(ncx, ncy) //new coin
      t.teleports--
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
        // return
    }
    if (keyDown('d')) {
        t.move_by(t.speed, 0);
        t.moving = true;
        // return
    }
    if (keyDown('s')) {
        t.move_by(0, t.speed);
        t.moving = true;
        // return
    }
    if (keyDown('w')) {
        t.move_by(0, -t.speed);
        t.moving = true;
    }
    
    if (keyDown('0')) {
        t.dm = true;
    }
  }

  game_over() {
    var t = this
    //t.world.init()
  }
  
  
}//end class
///////////////end player///////////////////
/*

*/