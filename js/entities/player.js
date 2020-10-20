///////////////player///////////////////
class player extends yentity
{
  constructor(x2,y2,g) 
  {
	  super(x2,y2,g);
	  this.speed = 4;
    this.type = "player";
    this.grafic_type = "none";
  }//end constructor
  
  update()
  {
	var t = this;
  super.update();
  t.move()
  }//end update

  move() {
    //
  }
  
  
}//end class
///////////////end player///////////////////