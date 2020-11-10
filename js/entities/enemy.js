///////////////enemy///////////////////
class enemy extends yentity
{
  constructor(x2,y2,g) 
  {
	  super(x2,y2,ghosts_s);
	  this.speed = 2;
	  this.type = "enemy";
      this.tx = this.x/this.tw
      this.ty = this.y/this.th
      this.grafic_type = "sprite"
      this.c = camera.position
      this.tp_timer = new ytimer(300) //timer for them to teleport
      this.mtype = 0; //movement type
      this.gstate = "go_to_coin"; //guard state
      this.tframe = Math.floor(Math.random()* 4 - 1);
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
  
  
  render() {
    super.render();
    var t = this;

    //change turret img
    t.sprite.animation.changeFrame(t.tframe);
    t.sprite.animation.stop();
  }//ene render
  
  
  move()
  {
    var t = this;
    if (!t.get_by_type("player")[0].moving) return
    if(t.mtype === 0) t.move_to(t.c.x, t.c.y)
    if(t.mtype === 1) {
      //guard behavior
      var coin = t.get_by_type("coin")[0]
      var coin_dist = dist(t.x, t.y, coin.x, coin.y)
      if(coin_dist >= 500) this.gstate = "go_to_coin"
      if(coin_dist <= 30 && this.gstate !== "chase_player") this.gstate = "idle";
      t.do_state()
    }
  }//end move
  do_state() {
    var t = this;
    var coin = t.get_by_type("coin")[0];
    if(this.gstate === "go_to_coin") t.move_to(coin.x,coin.y);
    if(this.gstate === "idle") {
      var player_dist = Math.sqrt((t.x - pla.x)^2 + (t.y - pla.y)^2)
      if(player_dist <= 400) this.gstate = "chase_player"
      //pla: see line 8 and 23 in script.js
    }
    if(this.gstate === "chase_player") t.move_to(pla.x,pla.y);
  }
  hit() {
    var t = this;
    t.collide("enemy")
    var pl = t.collide("player")

    if(pl) pl.game_over()
  }//end hit

  teleport(b = false) {
    var t = this;
    if(t.mtype === 1) return;
    var rx = Math.floor(Math.random() * yscreen.w);
    var ry = Math.floor(Math.random() * yscreen.h);
    var pl = t.get_by_type("player");
    while(rx > pl.x - 50 && rx < pl.x + 150) rx = Math.floor(Math.random() * yscreen.w);
    while(ry > pl.y - 50 && ry < pl.y + 150) ry = Math.floor(Math.random() * yscreen.h);
    if(dist(t.x, t.y, t.c.x, t.c.y) > 500 && this.tp_timer.finished() || b) {
      t.setxy(rx, ry)
    }
  }
  
  
}//end class
///////////////end enemy///////////////////