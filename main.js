canvas=document.getElementById('mycanvas');
ctx=cavas.getContext("2d");

var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
color="black";
width_of_line=1;

canvas.addEventListner("mousedown",my_mousedown);

function my_mousedown(e)
{
    mouseEvent="mouseDown";
}

canvas.addEventListner("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseUP";
}

canvas.addEventListner("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}