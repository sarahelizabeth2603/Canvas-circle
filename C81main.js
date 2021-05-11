var canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var colour="aqua";

ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    colour=document.getElementById("colour").value;
    console.log(colour);

    mouse_X=e.clientX-canvas.offsetLeft;
    mouse_Y=e.clientY-canvas.offsetTop;
    console.log("mouse_X = "+mouse_X+"mouse_Y = "+mouse_Y);
    circle(mouse_X,mouse_Y);

}

function circle(mouse_X,mouse_Y){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=2;
    ctx.arc(mouse_X,mouse_Y,40,0,2*Math.PI);
    ctx.stroke();
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
}