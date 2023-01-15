
var canvas= new fabric.Canvas("mycanvas")
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
     block_image_object= Img;

	 block_image_object.scaleToWidth(block_image_width);
	 block_image_object.scaleToHeight(block_image_height);
	 block_image_object.set({
	 top:block_y,
	 left:block_x
	 });
	 canvas.add(block_image_object);
	});
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image("rr1.png");
		console.log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image("gr.png");
		console.log("g")
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image("yr.png");
		console.log("y")
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image("pr.png");
		console.log("p")
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image("br.png");
		console.log("b")
	
	}
	
}

function up(){
	if(player_y>=0){
	player_y = player_y - block_image_height;
	console.log("block image height =" + block_image_height);
	console.log("When Up arrow key is pressed, X =" + player_x +" , Y =" + player_y);
	canvas.remove(player_object);
	player_update();
	}
}

function down(){
	if(player_y>=500){
	player_y = player_y + block_image_height;
	console.log("block image height =" + block_image_height);
	console.log("When Down arrow key is pressed, X =" + player_x +" , Y =" + player_y);
	canvas.remove(player_object);
	player_update();
	}
}

function left(){
	if(player_x>0){
	player_x = player_x - block_image_width;
	console.log("block image width =" + block_image_width);
	console.log("When Left arrow key is pressed, X =" + player_x +" , Y =" + player_y);
	canvas.remove(player_object);
	player_update();
	}
}

function right(){
	if(player_x <=850){
	player_x = player_x + block_image_width;
	console.log("block image width =" + block_image_width);
	console.log("When Right arrow key is pressed, X =" + player_x +" , Y =" + player_y);
	canvas.remove(player_object);
	player_update();
	}
}