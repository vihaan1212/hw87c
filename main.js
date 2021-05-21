var canvas = new fabric.Canvas("myCanvas");
man_image_width = 30;
man_image_height = 30;
man_y = 10;
man_x = 10;
var player_object = "";
block_image_object="";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_update = Img;
        player_update.scaleToWidth(150);
        player_update.scaleToHeight(140);
        player_update.set({
            top: man_y,
            left: man_x
        });
        canvas.add(player_update);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image,function (Img) {
        new_image_object = Img;
        new_image_object.scaleToWidth(block_image_width);
        new_image_object.scaleToHeight(block_image_height);
       new_image_object.set({
            top: man_y,
            left: man_x
        });
        canvas.add(new_image_object);
    });

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed=='80'){
         console.log("p and shift pressed together");
         block_image_width=block_image_width+10;
         block_image_height=block_image_height+10;
         document.getElementById("current_width").innerHTML=block_image_width;
         document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (e.shiftKey == true && keypressed=='77'){
        console.log("m and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
   }
   if(keypressed == '70'){
new_image('iron man.png');
console.log("f");
   }
   if(keypressed =='66'){
       new_image('spider man.png');
       console.log("b");
   }
   if(keypressed =='76'){
       new_image('hulk.png');
       console.log("l");
   }
   if(keypressed =='82'){
       new_image('thor.png');
       console.log("l");
   }
   if(keypressed =='38'){
       Up();
       console.log("up");
   }