var yscreen = { w: document.documentElement.clientWidth, h: document.documentElement.clientHeight };
//init engine
var yeng = new yengine();

var tste, tste2;
var current_world;
var gaw;
var pla;

var ghosts_s;
var wall_img

function setup() {
	createCanvas(yscreen.w, yscreen.h);
	frameRate(60);

    //load ghosts sprite
    var tframes = yeng.create_sprite_frames("normal", 62, 62,
    [0, 0
      , 1, 0
      , 2, 0
      , 3, 0
      ]);
    ghosts_s = loadSpriteSheet("img/ghosts.png", tframes);
    wall_img = loadImage("img/wall texture.png");
    

	//create worlds
	var ygame_world = new game_world('game_world');
	yeng.add_world(ygame_world);
	
	gaw = ygame_world
	
	//set current world
	yeng.set_c_world('game_world');
	
	pla = gaw.p
	
}

function draw() {
	//clear screen
	background(0); //blak bg
	drawSprites(); //p5.play render

	//update render current world
	current_world = yeng.get_c_world();
	current_world.update();
	current_world.render();


}
function windowResized() {
	resizeCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
}