var canvas = document.getElementById("backgroundCanvas");
function draw()
{
    var ctx = canvas.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
}