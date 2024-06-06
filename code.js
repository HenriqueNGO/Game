var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4455aacc-da2b-4a83-8889-4a42b59b0066"],"propsByKey":{"4455aacc-da2b-4a83-8889-4a42b59b0066":{"name":"trofeu","sourceUrl":"assets/api/v1/animation-library/gamelab/qYuvwscvicUp26fkvQOaDTrPjKxv1BlU/category_video_games/award_trophy1.png","frameSize":{"x":312,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qYuvwscvicUp26fkvQOaDTrPjKxv1BlU","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":312,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qYuvwscvicUp26fkvQOaDTrPjKxv1BlU/category_video_games/award_trophy1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var life=0;
var car1,car2,car3,car4
var p1, p2
var Sam

p1 = createSprite(190,120,420,3);
p2 = createSprite(190,260,420,3);
Sam = createSprite(20,190,10,10)
Sam.shapeColor="gray";
car1 = createSprite(100,130,10,10);
car1.shapeColor="red";
car2 = createSprite(215,130,10,10);
car2.shapeColor="blue";
car3 = createSprite(165,250,10,10);
car3.shapeColor="green";
car4 = createSprite(270,250,10,10);
car4.shapeColor="violet";
car1.velocityY= 8
car2.velocityY= -8
car3.velocityY= 8
car4.velocityY = -8
function draw() {
 background("black");
 stroke("white");
 textSize(20);
 text("vidas: "+life,150,100);
 strokeWeight(0);
 fill("lightblue");
 rect(0,120,52,140);
 fill("yellow");
 rect(345,120,52,140)
 car1.bounceOff(p1);
 car1.bounceOff(p2);
 car2.bounceOff(p1);
 car2.bounceOff(p2);
 car3.bounceOff(p1);
 car3.bounceOff(p2);
 car4.bounceOff(p1);
 car4.bounceOff(p2);
 
if (keyDown(LEFT_ARROW)) {
Sam.x = Sam.x - 2
}
 if(keyDown(RIGHT_ARROW)) {
   Sam.x = Sam.x + 2
 }
 
 if (Sam.isTouching(car1) || Sam.isTouching(car2) || Sam.isTouching(car3) || Sam.isTouching(car4)) {
 Sam.x = 20;
 Sam.y = 190;
 life = life+1
 }
 if (Sam.x>345) {
   var trofeu = createSprite(200,200);
   trofeu.setAnimation("trofeu");
   trofeu.scale=0.20
   car1.destroy();
   car2.destroy();
   car3.destroy();
   car4.destroy();
stroke("White");
text("you win!",200,300);
 
   
 }
 
 
 
 
 drawSprites();
}



























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
