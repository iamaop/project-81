canvas =document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(300,220,40,0,2 * Math.PI);
ctx.stroke();
 
ctx=canvas.getContext("2d");
color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(400,220,40,0,2 * Math.PI);
ctx.stroke();
 
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(500,220,40,0,2 * Math.PI);
ctx.stroke();

ctx=canvas.getContext("2d");
color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(350,260,40,0,2 * Math.PI);
ctx.stroke();
 
ctx=canvas.getContext("2d");
color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(450,260,40,0,2 * Math.PI);
ctx.stroke();