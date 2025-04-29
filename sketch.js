function setup() {
  createCanvas(1000, 1000);
}
let olhoX;
let olhoY;

function draw() {
  background("#003C59");
    fill("#FCDDE8")
circle (200,200,300);//rosto
    fill("#FFFFFF")
circle (150,150,60);//olho esquerdo
circle(250,150,60);//olhodireito
line(150,270,250,235);//nariz
  fill("#B0D1E0")
 triangle(200,180,170,220,220,220);
   line(123,115,178,113);// sobrancelha esquerda
   line(225,116,279,106);// sobrancelha direita
 
  olhoX = map(mouseX, 0, 400, 132, 166);
  olhoY = map(mouseY, 0, 400, 130, 170);
  circle(olhoX, olhoY, 30);// nova pupila esquerda
  circle(olhoX + 100, olhoY, 30);// nova pupila direita
  
   if (mouseIsPressed) {
     console.log(mouseX, mouseY);}

}
