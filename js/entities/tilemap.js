///////////////tilemap///////////////////
class tilemap extends yentity
{
  constructor(map2) 
  {
    super(-10, 0);
    this.speed = 4;
    this.type = "tilemap";
    this.grafic_type = "none";
    this.map = map2;
    this.tiles = [];
    this.tilew = 50;
    this.tileh = 50;
    this.tile_space = 20; //tob bottom space around tilmap (padding)
    this.w = 0;
    this.h = 0;
  }//end constructor
  
  update()
  {
	var t = this;
	super.update();
  }//end update
  
  
  draw_map() {
    var t = this;
    var cur_tile; //current tile val
    var ctx; //current tile x
    var cty; //current tile y
    var map = t.map;
    for (var rows = 0; rows <= map.length - 1; rows++) {
      for (var cols = 0; cols <= map[rows].length - 1; cols++) {
        cur_tile = map[rows][cols];
        ctx = cols * t.tilew + t.tile_space;
        cty = rows * t.tileh + t.tile_space;
        t.gen_tile(ctx, cty, cur_tile);
        if(map[rows][cols] !=1) map[rows][cols]=0;
      }
    }
  } //end draw_map

  gen_tile(x, y, id) {
    var t = this;
    if (id == 0) {
      return;
    }
    
    if (id == 1) {
      var ytile = new tile(x, y, id);
      ytile.type = "wall";
      t.world.add(ytile);
    }
    if (id == 3) {
      var p = new player(x, y)
      // p.tw = t.tilew
      // p.th = t.tileh
      t.world.add(p)
    }
    if (id == 2) {
      var e = new enemy(x, y)
      // e.tw = t.tilew
      // e.th = t.tileh
      t.world.add(e)
    }
  }//end gen tile
  
}//end class
///////////////end tilemap///////////////////