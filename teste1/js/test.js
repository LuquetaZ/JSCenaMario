var canvas = document.getElementById('exemplo');
var ctx = canvas.getContext("2d");
var grdlinear = ctx.createLinearGradient(185, 45, 185, 75);

ctx.fillStyle = '#e7631a';
ctx.beginPath();
ctx.fillRect(0,340,1000,160);
ctx.fill();
 
ctx.beginPath();
    for(var x = 80 ; x<= 1000; x=x+80){
        ctx.moveTo(x,340);
        ctx.lineTo(x,500);
        ctx.lineWidth = 4;
        ctx.stroke();
    }

//Parte de cima
ctx.fillStyle = '#01ad01';
ctx.beginPath();
ctx.fillRect(695,170,200,80);
ctx.fill();
//Parte de cima - Contorno
ctx.fillStroke = 'black';
ctx.lineWidth = 4;
ctx.beginPath();
ctx.strokeRect(695,170,200,80);
ctx.stroke();

//Parte de baixo
ctx.fillStyle = '#01ad01';
ctx.beginPath();
ctx.fillRect(725,240,140,100);
ctx.fill();
//Parte de baixo - Contorno
ctx.fillStroke = 'black';
ctx.lineWidth = 4;
ctx.beginPath();
ctx.strokeRect(725,250,140,90);
ctx.stroke();

ctx.beginPath();
    for(var x = 84; x<= 1000; x=x+80){
        ctx.strokeStyle = "#f7d3bd";
        ctx.moveTo(x,342);
        ctx.lineTo(x,500);
        ctx.lineWidth = 3;
        ctx.stroke();
    }

ctx.beginPath();
    for(var y = 344; y<= 34400; y=y+50){
        ctx.strokeStyle = "#f7d3bd";
        ctx.moveTo(345,y);
        ctx.lineTo(15,y);
        ctx.lineWidth = 3;
        ctx.stroke();
    }

//Linha do Chao - 1
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(0,340);
ctx.lineTo(1000,340);
ctx.moveTo(0,420);
ctx.lineTo(1000,420);
ctx.stroke();
        
ctx.strokeStyle = "black";
ctx.lineWidth = 6;
ctx.beginPath();
ctx.strokeRect(3,3,994,494)
ctx.stroke();

ctx.fillStyle = '#663300';
ctx.beginPath();
ctx.fillRect(130,90,350,70);
ctx.fill();


//ctx.fillStyle='#FFB81C';
//ctx.beginPath();
//ctx.arc(500,250,50,0,2*3.14);
//ctx.stroke();
//ctx.fill();

//grdlinear.addColorStop(0, "blue");
//grdlinear.addColorStop(1, "yellow");
//ctx.fillStyle = grdlinear;
//ctx.fillRect(250, 13, 180, 100);
