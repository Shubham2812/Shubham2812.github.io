var id;
var x;
var y;
var speed = 120;
var lengthBar = 120;
var upperLimit = 420;
var lowerLimit = 80;
var score = 0;

$(document).ready(function(){
	console.log("Begin");
	document.getElementById("scoreValue").innerHTML = score;

	$(window).keydown(function(event){
		// console.log(event);
		if(event.keyCode == 40)
		{ moveRightDown();

		}
		else if(event.keyCode == 38)
		{ moveRightUp();

		}

		if(event.keyCode == 83)
		{ moveLeftDown();

		}
		else if(event.keyCode == 87)
		{ moveLeftUp();

		}
	})

	$("#slow").click(function(){
		console.log("slow");
		speed = 120;
		clearInterval(id);
		id = setInterval(move, speed)
	})

	$("#medium").click(function(){
		console.log("medium");
		speed = 90;
		clearInterval(id);
		id = setInterval(move, speed)
	})

	$("#fast").click(function(){
		console.log("fast");
		speed = 20;
		clearInterval(id);
		id = setInterval(move, speed)
	})

	$("#amatuer").click(function(){
		console.log("ama");
		lengthBar = 120;
		upperLimit = 420;
		$("#leftHockey").height(120);
		$("#rightHockey").height(120);
		clearInterval(id);
		id = setInterval(move, speed)
	})

	$("#pro").click(function(){
		console.log("pro");
		lengthBar = 80;
		upperLimit = 460;		
		$("#leftHockey").height(80);
		$("#rightHockey").height(80);
		clearInterval(id);
		id = setInterval(move, speed)
	})

	$("#ninja").click(function(){
		console.log("ninja");
		lengthBar = 50;
		upperLimit = 490;
		$("#leftHockey").height(50);
		$("#rightHockey").height(50);
		clearInterval(id);
		id = setInterval(move, speed)
	})

	console.log("End");


	$("#begin").click(start);
	$("#stop").click(reset);


})

function moveRightDown()
{
	var righttHockey = document.getElementById("rightHockey")
	var distance = getOffset(righttHockey).top;
	if(distance < upperLimit)
	distance += 10;
	righttHockey.style.top = distance + "px";
}

function moveRightUp()
{
	var righttHockey = document.getElementById("rightHockey")
	var distance = getOffset(righttHockey).top;
	if(distance > lowerLimit)
	distance -= 10;
	righttHockey.style.top = distance + "px";
}

function moveLeftDown()
{
	var leftHockey = document.getElementById("leftHockey")
	var distance = getOffset(leftHockey).top;
	if(distance < upperLimit)
	distance += 10;
	//console.log(leftHockey.style);
	leftHockey.style.top = distance + "px";
}

function moveLeftUp()
{
	
	var leftHockey = document.getElementById("leftHockey")
	var distance = getOffset(leftHockey).top;
	if(distance > lowerLimit)
	distance -= 10;
	//console.log(leftHockey.style);
	leftHockey.style.top = distance + "px";
}

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

function start()
{
	//console.log($("#ball"));
	document.getElementById("scoreValue").innerHTML = score;
	var random = Math.floor(Math.random() * 4)
	if(random == 0)
	{ y = 10;
	  x = 10;
	}
	else if(random == 1)
	{ y = -10;
	  x = 10;
	}
	else if(random == 2)
	{ y = 10;
	  x = -10;
	}
	else if(random == 3)
	{ y = -10;
	  x = -10;
	}

	id = setInterval(move, speed);
}

var topLimit = 60;
var bottomLimit = 500;
var leftLimit = 160;
var rightLimit = 1080;

function stop(){
	clearInterval(id);
	ball.style.top = '280px';
	ball.style.left = '625px';
}

function move()
{
	var ball = document.getElementById("ball")
	var topOffset = getOffset(ball).top;
	var leftOffset = getOffset(ball).left;
	
	// console.log(getOffset(ball).top);
	// console.log(getOffset(ball).left);

	if(collisionLeft() == true)
	{	x = -10;
		score += 10;
		document.getElementById("scoreValue").innerHTML = score;
		
	}
	if(collisionRight() == true)
	{	x = 10;
		score += 10;
		document.getElementById("scoreValue").innerHTML = score;
	}
	
	if(getOffset(ball).top < topLimit)
		y = -10;
	else if(getOffset(ball).top > bottomLimit)
		y = 10;
	else if(getOffset(ball).left < leftLimit)
	{	x = -10;
		reset();
		topOffset = 280;
		leftOffset = 615;
	}
	else if(getOffset(ball).left > rightLimit)
	{	x = 10;
		reset();
		topOffset = 280;
		leftOffset = 615;
	}

	topOffset -= y;
	leftOffset -= x;
	
	ball.style.top = topOffset + "px"
	ball.style.left = leftOffset + "px"
}

function collisionLeft()
{
	// console.log(getOffset(ball).top);
	// console.log(getOffset(leftHockey).top);
	// console.log(getOffset(ball).left);
	// console.log(getOffset(leftHockey).left);
	if((getOffset(ball).left < (getOffset(leftHockey).left + 40))  && (getOffset(ball).top - getOffset(leftHockey).top) < lengthBar-30 && (getOffset(ball).top - getOffset(leftHockey).top) > 0 )
		return true
	else
		return false
}

function collisionRight()
{
	// console.log(getOffset(ball).top);
	// console.log(getOffset(leftHockey).top);
	// console.log(getOffset(ball).left);
	// console.log(getOffset(leftHockey).left);
	if((getOffset(ball).left > (getOffset(rightHockey).left - 60))  && (getOffset(ball).top - getOffset(rightHockey).top) < lengthBar-30 && (getOffset(ball).top - getOffset(rightHockey).top) > 0 )
		return true
	else
		return false
}

function reset()
{
	clearInterval(id);
	ball.style.top = '280px';
	ball.style.left = '630px';
	document.getElementById("rightHockey").style.top = '240px'
	document.getElementById("leftHockey").style.top = '240px'
	score = 0;
	x = 0;
	y = 0;
	document.getElementById("scoreValue").innerHTML = score;
	console.log("end");
}

