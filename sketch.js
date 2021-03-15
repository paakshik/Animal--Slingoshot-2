const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let chances = 0;
let chancesl = 3;
function preload() {
bgI = loadImage('download.jfif');
aniI = loadImage('download (3).png')
ani2I = loadImage('download.png');
ani3I =loadImage('download (1).png')
ani4I =loadImage('download (2).png')
ani5I =loadImage('download (4).png')
ani6I =loadImage('download (5).png')
ani7I =loadImage('download (6).png')
ani8I =loadImage('download (7).png')
ani9I =loadImage('download (8).png')
ani10I =loadImage('download (9).png')
ani11I =loadImage('download (10).png')
ani12I =loadImage('download (11).png')
ani13I =loadImage('download (12).png')
ani14I =loadImage('download (13).png')
ani15I =loadImage('download (14).png')
ani16I =loadImage('download (15).png')
ani17I =loadImage('download (16).png')
man =loadImage('download (17).png')
sound1 = loadSound('music_zapsplat_game_music_action_uplifting_electro_house_anthem_retro_melody_026.mp3')
sound2 = loadSound('Metal-Impact-Hit-A1-www.fesliyanstudios.com (1).mp3')
sound3 = loadSound('  zapsplat_multimedia_cell_phone_smart_screen_button_press_click_feedback_003_60932.mp3')
}

function setup() {
  createCanvas(1200, 700);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.

  ground = new Ground(600, 690, 1200, 50);
  ground2 = new Ground(500, 500, 300, 20);
  ground3 = new Ground(900, 300, 200, 20);
  ground4 = new Ground(1190,400,25,900)
  ground5 = new Ground(10,400,25,900)
  ground6 = new Ground(900,10,3000,25)
  block1 = new Ground2(430, 300, 50, 50,aniI);
  block2 = new Ground2(480, 300, 50, 50,ani2I);
  block3 = new Ground2(530, 300, 50, 50,ani3I);
  block4 = new Ground2(580, 300, 50, 50,ani4I);
  block5 = new Ground2(456, 250, 50, 50,ani5I);
  block6 = new Ground2(506, 250, 50, 50,ani6I);
  block7 = new Ground2(556, 250, 50, 50,ani7I);
  block8 = new Ground2(526, 200, 50, 50,ani8I);
  block9 = new Ground2(477, 150, 50, 50,ani9I);
  block10 = new Ground2(500 , 70, 50, 50,ani10I);
  block11 =  new Ground3(29, 50, 50, 50,man);
  block12 = new Ground2(850, 250, 50, 50,ani12I);
  block13= new Ground2(900, 250, 50, 50,ani13I);
  block14 = new Ground2(950, 250, 50, 50,ani14I);
  block15 = new Ground2(870, 150, 50, 50,ani15I);
  block16 =  new Ground2(920, 150, 50, 50,ani16I);
  block17 =  new Ground2(900, 50, 50, 50,ani17I);
  singshot = new Sling(200,200,block11.body);
  Engine.run(engine);
sound1.play();

}
 

function draw() {
  background(bgI);
  block1.show();

  ground.show();
  ground2.show();
  ground3.show();
  
  ground4.show();
  ground5.show();
  ground6.show();
 
  block2.show();
  block3.show();
  block4.show();
  block5.show();
  block6.show();
  block7.show();
  block8.show();
  block9.show();
  block10.show();
  block11.show();
  block13.show();
   block12.show();
   block14.show();
   block15.show();
   block16.show();
   block17.show();
   singshot.show()
  drawSprites();
  textSize(20);
  stroke('white');
  fill('brown')
text('Number of chances: ' + chancesl,100,50)
}
function mouseDragged(){
Body.setPosition(block11.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
sound2.play();
    singshot.move();
    
   
      
    }
    function keyPressed(){
      if (keyCode === 32){
        if (chances < 3){
        Body.setPosition(block11.body,{x:29,y:50})
        singshot.attack(block11.body);
        block11.body.velocity.x = 0;
        block11.Trajectory = [];
        singshot.sling.stiffness= 0.5;
        console.log(block11.body.velocity.x);
       sound3.play();
      }
      chances = chances + 1;
      chancesl  = chancesl - 1;
      if (chances > 3){
        console.log('Sorry No more chances allowed')
        chances = 3
        chancesl = 0;
      }
    }
    }