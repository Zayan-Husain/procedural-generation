class game_world extends world {
  constructor(name2, wh2) {
    super(name2);
    this.score = 0;
    this.level = 1;
    this.map_size = 50
    this.map_gen;
    this.tmap;
  }

  init() {
    var t = this;
    t.resetw(); //reset world
    //remove all p5 sprites

    var testmap = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 3, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 5, 5, 0, 0, 0, 1],
      [1, 0, 0, 0, 5, 5, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]

   // if(t.level % 3 === 0) t.map_size -= t.level / 3 * 5

    t.map_gen = new map_generator(t.map_size)
    t.add(t.map_gen)
    var map1 = t.map_gen.create_map()
    
    
    //testmap: drawing
    t.tmap = new tilemap(map1)
    t.add(t.tmap)
    t.tmap.draw_map()
   // console.log(map1, t.map_size)

    // tmap.get_by_type("enemy")[0].mtype = 1

    for(var i of t.entitys) {
      i.tw = t.tmap.tilew
      i.th = t.tmap.tileh
    }
  }
  
  nextLevel() {
    var t = this;
    t.level++
    //allSprites.clear();
    var walls = pla.get_by_type(`wall${t.level-1}`)
    //console.log(walls, t.level-1)
    for (var i of walls) t.remove(i)
    t.remove(pla)
    t.resetw(); //reset world
    t.init()
    if(pla.get_by_type("player").length > 1) t.remove(pla.get_by_type("player")[0])
    console.log(pla.get_by_type("player"))
  }
  

}
