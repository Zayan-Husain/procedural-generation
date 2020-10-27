class game_world extends world {
  constructor(name2, wh2) {
    super(name2);
    this.score = 0;
    this.level = 1;
  }

  init() {
    var t = this;
    t.resetw(); //reset world
    //remove all p5 sprites
    allSprites.clear();

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

    var map_gen = new map_generator(50)
    t.add(map_gen)
    var map1 = map_gen.create_map()
    
    
    //testmap: drawing
    var tmap = new tilemap(map1)
    t.add(tmap)
    tmap.draw_map()

    for(var i of t.entitys) {
      i.tw = tmap.tilew
      i.th = tmap.tileh
    }

  }


}
