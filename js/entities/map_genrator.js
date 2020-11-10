///////////////map_genrator///////////////////
class map_generator extends yentity
{
  constructor(size2) 
  {
	  super(0, 0);
	  this.speed = 4;
    this.type = "map_genrator";
    
    this.w = 0
    this.h = 0

    this.grafic_type = "none"

    this.empty_space_ratio = 0.8
    this.map_size = size2
    this.map = []
    this.max_enemies = 10
    this.max_collectables = 20
  }//end constructor
  
  update()
  {
	var t = this;
	super.update();
  }//end update

  create_map() {
    //creates map
    var t = this;

    for (var i = 0; i <= t.map_size; i++) {
      for (var j = 0; j <= t.map_size; j++) {
        if (j === 0) t.map[i] = []
        if (this.empty_space_ratio < Math.random()) t.map[i][j] = 1
        else t.map[i][j] = 0
      }
    }
    var l = gaw.level;

    t.generate_(2, 5)

    if(l>=2) t.generate_(7,5)//teleporters
    if(l>=3) {
      t.generate_(4, 2)//guard enemies
    }
    if(l>=4) t.generate_(4, 1)//guard enemies
    if(l>=5) t.generate_(2, 5)//guard enemies


    t.generate_player()
    t.generate_ammo()
    t.generate_coin()
    t.generate_(8, 13) // end coin
    return t.map;
  } //end create map

  find_empty() {
    var t =  this;
      var map = t.map;
      var cur_tile;

      var rnd_tilex = Math.floor(Math.random()* map.length - 1);
      var rnd_tiley = Math.floor(Math.random()*map[0].length - 1);
      //loop map
      for (var rows = 0; rows <= map.length - 1; rows++) {
        for (var cols = 0; cols <= map[rows].length - 1; cols++) {
            cur_tile = map[rows][cols];
            //if its the random tle and floor teturn cordenates as array
            if(rnd_tilex == rows && rnd_tiley == cols && cur_tile==0){return[rows,cols];}
          
        }
       }
      //if faield return 0
      return 0;
  } // end find empty
  generate_(tn,n) {
    var t = this;
    for(var i = 0; i < n; i++) {
      var pos = t.find_pos()
      t.map[pos[0]][pos[1]] = tn
    }
  }
  generate_player() {
    var t = this;
    var player_pos = t.find_pos()
    t.map[player_pos[0]][player_pos[1]] = 3
  } // end generate player
  generate_ammo() {
    var t = this;
    for(var i = 0; i < Math.round(t.max_collectables * Math.random()) + 7; i++) {
      var collectable_pos = t.find_pos()
      t.map[collectable_pos[0]][collectable_pos[1]] = 5
    }
  }
  generate_coin() {
    var t = this;
    var collectable_pos = t.find_pos()
    t.map[collectable_pos[0]][collectable_pos[1]] = 6
  }
  find_pos() {
    var t = this
    var pos = t.find_empty()
    while (pos === 0) {
      pos = t.find_empty()
    }
    
    return pos
  }
  
  
}//end class
///////////////end map_genrator///////////////////