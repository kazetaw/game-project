
import Phaser from '../lib/phaser.js'

export default class GameOver extends Phaser.Scene {
  constructor() {
    super("game-over");      
  }
  
  preload(){
    this.load.image("gameover","assets/gameover.png");
    const width  = this.scale.width;
    const height = this.scale.height;    
    this.center = {x: width/2, y: height/2};
  }
  create() {
    //const bShader = new Phaser.Display.BaseShader('star', this.star);
    //const shader = this.add.shader(bShader, this.center.x, this.center.y, 16*60, 8*60);

    this.add.image(this.center.x, this.center.y, "gameover");
    this.input.on('pointerdown',() => this.scene.start("menu") );
  }

}