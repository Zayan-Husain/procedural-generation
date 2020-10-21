///////////////enemy///////////////////
class enemy extends yentity
{
  constructor(x2,y2,g) 
  {
	  super(x2,y2,g);
	  this.speed = 1;
	  this.type = "enemy";
      this.tx = this.x/this.tw
      this.ty = this.y/this.th
      this.grafic_type = "none"
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
  }//end update
  move()
  {
      
    var t = this;
    
  }//end move
  hit() {
    var t = this;
    t.collide("enemy",0,0)
  }//end hit
  
  
}//end class
///////////////end enemy///////////////////