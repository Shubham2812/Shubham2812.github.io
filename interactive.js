function main(){
	 var distance = 600;
	 
	 var upper = document.getElementById("upper");
	 var bottomL = document.getElementById("bottomL");
	 var bottomR = document.getElementById("bottomR");
	 var bullet = document.getElementById("bullet");
	 var fire = document.getElementById("fire");

	 var feild1 = document.getElementById("feild1");
	 var feild2 = document.getElementById("feild2");
	 var feild3 = document.getElementById("feild3");
	 var feild4 = document.getElementById("feild4");
	 var feild5 = document.getElementById("feild5");

	 var rocket1 = document.getElementById("rocket1");
	 var rocket2 = document.getElementById("rocket2");
	 var rocket3 = document.getElementById("rocket3");
	 var rocket4 = document.getElementById("rocket4");
	 var rocket5 = document.getElementById("rocket5");

	 var rocket1_src = "images/rocket1.png";
	 var rocket2_src = "images/rocket2.png";
	 var rocket3_src = "images/rocket3.png";
	 var rocket4_src = "images/rocket4.png";
	 var rocket5_src = "images/rocket5.png";

	 var bullet1 = document.getElementById("bullet1");
	 var bullet2 = document.getElementById("bullet2");
	 var bullet3 = document.getElementById("bullet3");
	 var bullet4 = document.getElementById("bullet4");
	 var bullet5 = document.getElementById("bullet5");

	 var bullet1_src = "images/bullet1.png";
	 var bullet2_src = "images/bullet2.png";
	 var bullet3_src = "images/bullet3.png";
	 var bullet4_src = "images/bullet4.png";
	 var bullet5_src = "images/bullet5.png";

	 rocket1.addEventListener("click", changeRocket);
	 rocket2.addEventListener("click", changeRocket);
	 rocket3.addEventListener("click", changeRocket);
	 rocket4.addEventListener("click", changeRocket);
	 rocket5.addEventListener("click", changeRocket);

	 bullet1.addEventListener("click", changeBullet);
	 bullet2.addEventListener("click", changeBullet);
	 bullet3.addEventListener("click", changeBullet);
	 bullet4.addEventListener("click", changeBullet);
	 bullet5.addEventListener("click", changeBullet);
	 
	 var bulletCount = null;
	 if(!sessionStorage.count)
	 	sessionStorage.count = 5;
	 
	 switch(Number(sessionStorage.count) + 1)
	  	  { case 1 : inventory1.style.display = "none";
	  	    case 2 : inventory2.style.display = "none";
	  	    case 3 : inventory3.style.display = "none";
	  	    case 4 : inventory4.style.display = "none";
	  	    case 5 : inventory5.style.display = "none";
	  	  }

	 var currentBullet;
	 var inventory = document.getElementById("inventory");
	 reload.addEventListener("click", refill);
	 
	 document.addEventListener('keydown', function(event){
	 	//console.log(event);
	 	if(event.keyCode == 37)
			moveL();
		else if(event.keyCode == 39)
			moveR();
		else if(event.keyCode == 38)
			fireBullet();
		else if(event.keyCode == 82)
			refill();
	 });

	 function refill()
	 { sessionStorage.count = '5';
	   // sessionStorage.removeItem('count');
	   inventory1.style.display = "block";
	   inventory2.style.display = "block";
	   inventory3.style.display = "block";
	   inventory4.style.display = "block";
	   inventory5.style.display = "block";
	 }

	 function changeRocket(event)
	 { 	upper.src = event.target.currentSrc;
	 }

	 function changeBullet(event)
	 { var src = event.target.currentSrc;
	   bullet.src = src;
	   inventory1.src = src;
	   inventory2.src = src;
	   inventory3.src = src;
	   inventory4.src = src;
	   inventory5.src = src;
	 }

	bottomR.addEventListener("click", moveR);
	bottomL.addEventListener("click", moveL);
	//bottomL.addEventListener("click", write);
	//bottomR.addEventListener("click", write);
	fire.addEventListener("click", fireBullet);

	function go(event){
		document.getElementById("missed").style.display = "none";
	}

	function moveL(){
		document.getElementById("missed").style.display = "none";
		console.log(sessionStorage.count);
		if(distance >= 20)
		distance -= 20;
	    upper.style.left = distance + "px";
	    bullet.style.left = distance + "px";
	    bullet.style.top = "220px";
	    bullet.style.display = "none";
	}

	function moveR(){
		document.getElementById("missed").style.display = "none";
		console.log(sessionStorage.count);

		if(distance < $(window).width() - 80)
		distance += 20;

	    upper.style.left = distance + "px";
	    bullet.style.left = distance + "px";
	    bullet.style.top = "220px";
	    bullet.style.display = "none";
	}

	function getOffset(upper) {
		var _x = 0;
		var _y = 0;
		while( upper && !isNaN( upper.offsetLeft ) && !isNaN( upper.offsetTop ) ) {
		    _x += upper.offsetLeft - upper.scrollLeft;
		    _y += upper.offsetTop - upper.scrollTop;
		    upper = upper.offsetParent;
		}
		return { top: _y, left: _x };
	}
		
	// function write(){ 
	//   var x = getOffset(upper).left;
	//   para.innerHTML = distance;
	// }

	function fireBullet() {
	  if(Number(sessionStorage.count) > 0)
	  {   sessionStorage.count = Number(sessionStorage.count) - 1;
	  	  switch(Number(sessionStorage.count) + 1)
	  	  { case 1 : inventory1.style.display = "none";
	  	    case 2 : inventory2.style.display = "none";
	  	    case 3 : inventory3.style.display = "none";
	  	    case 4 : inventory4.style.display = "none";
	  	    case 5 : inventory5.style.display = "none";
	  	  }

	  	  bullet.style.display = "block";
		  var elem = bullet;
		  var pos = 360;
		  var limit = 80;
		  
		  var id = setInterval(frame, 3);
		  var bullet_coordinates = null;
		  var bullet_left = null;
		  var bullet_top = null;

		  function frame() 
		  {
		    if(pos == 0) {
		      clearInterval(id);
		    } else {
		      pos--; 
		      elem.style.top = pos + 'px';
		      bullet_coordinates = getOffset(elem); 
		      bullet_left = bullet_coordinates.left;
		      bullet_top = bullet_coordinates.top;  
		    }
		  
		  	var f1_left = getOffset(feild1).left;
		  	var f1_right = f1_left + feild1.offsetWidth;

		  	var f2_left = getOffset(feild2).left;
		  	var f2_right = f2_left + feild2.offsetWidth;
			
			var f3_left = getOffset(feild3).left;
		  	var f3_right = f3_left + feild3.offsetWidth;

			var f4_left = getOffset(feild4).left;
		  	var f4_right = f4_left + feild4.offsetWidth;

			var f5_left = getOffset(feild5).left;
		  	var f5_right = f5_left + feild5.offsetWidth;

		  	if(bullet_left > f1_left && bullet_left < f1_right && bullet_top == limit)
		  	{ clearInterval(id);
		  	  window.open("About.html", "_self");
		  	}
		  	else if(bullet_left > f2_left && bullet_left < f2_right && bullet_top == limit)
		  	{ clearInterval(id);
		  	  window.open("Experience.html", "_self");	
		  	}
		  	else if(bullet_left > f3_left && bullet_left < f3_right && bullet_top == limit)
		  	{ clearInterval(id);
		  	  window.open("Education.html", "_self");
		  	}
		  	else if(bullet_left > f4_left && bullet_left < f4_right && bullet_top == limit)
		  	{ clearInterval(id);
		  	  window.open("Skills.html", "_self");
		  	}
		  	else if(bullet_left > f5_left && bullet_left < f5_right && bullet_top == limit)
		  	{ clearInterval(id);;
		  	  window.open("Contact.html", "_self");
		  	}
		  	else if(bullet_top == 0)
		  	{ document.getElementById("missed").style.display = "inline-block";

		  	}
		  	// if(coordinates.left > start && coordinates.left < start+width && coordinates.top == limit)
		  	// { clearInterval(id);
		  	//   window.open("About.html", "_self");
		  	// }
		  	// else if(coordinates.left > 3*start + width + 20 && coordinates.left < 3*start + 2*width + 20 && coordinates.top == limit)
		  	// { clearInterval(id);
		  	//   window.open("Experience.html", "_self");	
		  	// }
		  	// else if(coordinates.left > 5*start + 2*width + 40 && coordinates.left < 5*start + 3*width + 40 && coordinates.top == limit)
		  	// { clearInterval(id);
		  	//   window.open("Education.html", "_self");
		  	// }
		  	// else if(coordinates.left > 7*start + 3*width + 65  && coordinates.left < 7*start + 4*width + 70 && coordinates.top == limit)
		  	// { clearInterval(id);
		  	//   window.open("Skills.html", "_self");
		  	// }
		  	// else if(coordinates.left > 9*start + 4*width + 85 && coordinates.left < 9*start + 5*width + 85 && coordinates.top == limit)
		  	// { clearInterval(id);;
		  	//   window.open("Contact.html", "_self");
		  	// }
		  	// else if(coordinates.top == 0)
		  	// { document.getElementById("missed").style.display = "inline-block";

		  	// }
		  }
	  }
	  else
	  { alert("Out of Bullets! Please Reload!");
	  }

	  // insertBullet()
	  // {
	  // }
	}
}

window.addEventListener('load', function(){
	main();
})