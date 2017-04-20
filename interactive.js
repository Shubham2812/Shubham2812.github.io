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

	 rocket1.addEventListener("click", changeRocket1);
	 rocket2.addEventListener("click", changeRocket2);
	 rocket3.addEventListener("click", changeRocket3);
	 rocket4.addEventListener("click", changeRocket4);
	 rocket5.addEventListener("click", changeRocket5);

	 var bullet1 = document.getElementById("bullet1");
	 var bullet2 = document.getElementById("bullet2");
	 var bullet3 = document.getElementById("bullet3");
	 var bullet4 = document.getElementById("bullet4");
	 var bullet5 = document.getElementById("bullet5");

	 bullet1.addEventListener("click", changeBullet1);
	 bullet2.addEventListener("click", changeBullet2);
	 bullet3.addEventListener("click", changeBullet3);
	 bullet4.addEventListener("click", changeBullet4);
	 bullet5.addEventListener("click", changeBullet5);

	 var bulletCount = 5;
	 var currentBullet;
	 var inventory = document.getElementById("inventory");
	 reload.addEventListener("click", refill);
	 document.addEventListener('keydown', go);

	 function refill()
	 { bulletCount = 5;
	   inventory1.style.display = "block";
	   inventory2.style.display = "block";
	   inventory3.style.display = "block";
	   inventory4.style.display = "block";
	   inventory5.style.display = "block";
	 }

	 var rocket1_src = "images/rocket1.png";
	 var rocket2_src = "images/rocket2.png";
	 var rocket3_src = "images/rocket3.png";
	 var rocket4_src = "images/rocket4.jpg";
	 var rocket5_src = "images/rocket5.jpg";

	 var bullet1_src = "images/bullet1.jpg";
	 var bullet2_src = "images/bullet2.jpg";
	 var bullet3_src = "images/bullet3.png";
	 var bullet4_src = "images/bullet4.png";
	 var bullet5_src = "images/bullet5.jpg";

	 function changeRocket1()
	 { 	upper.src = rocket1_src;
	 }

	 function changeRocket2()
	 { upper.src = rocket2_src;
	 }

	 function changeRocket3()
	 { upper.src = rocket3_src;
	 }
	 
	 function changeRocket4()
	 { upper.src = rocket4_src;
	 }

	 function changeRocket5()
	 { upper.src = rocket5_src;
	 }

	 function changeBullet1()
	 { bullet.src = "images/bullet1.jpg"
	   inventory1.src = bullet1_src;
	   inventory2.src = bullet1_src;
	   inventory3.src = bullet1_src;
	   inventory4.src = bullet1_src;
	   inventory5.src = bullet1_src;
	 }

	 function changeBullet2()
	 { bullet.src = "images/bullet2.jpg";
	   inventory1.src = bullet2_src;
	   inventory2.src = bullet2_src;
	   inventory3.src = bullet2_src;
	   inventory4.src = bullet2_src;
	   inventory5.src = bullet2_src;
	 }

	 function changeBullet3()
	 { bullet.src = "images/bullet3.png";
	   inventory1.src = bullet3_src;
	   inventory2.src = bullet3_src;
	   inventory3.src = bullet3_src;
	   inventory4.src = bullet3_src;
	   inventory5.src = bullet3_src;
	 }

	 function changeBullet4()
	 { bullet.src = "images/bullet4.png";
	   inventory1.src = bullet4_src;
	   inventory2.src = bullet4_src;
	   inventory3.src = bullet4_src;
	   inventory4.src = bullet4_src;
	   inventory5.src = bullet4_src;
	 }

	 function changeBullet5()
	 { bullet.src = "images/bullet5.jpg";
	   inventory1.src = bullet5_src;
	   inventory2.src = bullet5_src;
	   inventory3.src = bullet5_src;
	   inventory4.src = bullet5_src;
	   inventory5.src = bullet5_src;
	 }

	bottomR.addEventListener("click", moveR);
	bottomL.addEventListener("click", moveL);
	bottomL.addEventListener("click", write);
	bottomR.addEventListener("click", write);
	fire.addEventListener("click", fireBullet);

	function moveR(){
		document.getElementById("missed").style.display = "none";
		if(distance < 1240)
		distance += 20;

	    upper.style.left = distance + "px";
	    bullet.style.left = distance + "px";
	    bullet.style.top = "220px";
	    bullet.style.display = "none";
	}

	function go(event){
		document.getElementById("missed").style.display = "none";
		if(event.key == "ArrowRight")
		{ if(distance < 1220)
		  distance += 20;
		}
		else if(event.key == "ArrowLeft")
		{ if(distance > 0)
		  distance -= 20;
		} 
		else if(event.key == "ArrowUp")
		{
			console.log("hello");
			fireBullet();
		}	

	    upper.style.left = distance + "px";
	    bullet.style.left = distance + "px";
	    bullet.style.top = "220px";
	    bullet.style.display = "none";
	}

	function moveL(){
		document.getElementById("missed").style.display = "none";
		if(distance > 0)
		distance -= 20;
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
		
	function write(){ 
	  var x = getOffset(upper).left;
	  para.innerHTML = distance;
	}

	function fireBullet() {
	  if(bulletCount > 0)
	  {   bulletCount--;
	  	  switch(bulletCount+1)
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
		  var start = 58;
		  var width = 122;
		  var id = setInterval(frame, 3);
		  function frame() 
		  {
		    if(pos == 0) {
		      clearInterval(id);
		    } else {
		      pos--; 
		      elem.style.top = pos + 'px';
		      coordinates = getOffset(elem);  
		    }
		  
		  	console.log(getOffset(feild5).left);
		  	console.log(9*start + 4*width + 85);
		  	console.log(coordinates.left);
		  	
		  	if(coordinates.left > start && coordinates.left < start+width && coordinates.top == limit)
		  	{ clearInterval(id);
		  	  window.open("About.html", "_self");
		  	}
		  	else if(coordinates.left > 3*start + width + 20 && coordinates.left < 3*start + 2*width + 20 && coordinates.top == limit)
		  	{ clearInterval(id);
		  	  window.open("Experience.html", "_self");	
		  	}
		  	else if(coordinates.left > 5*start + 2*width + 40 && coordinates.left < 5*start + 3*width + 40 && coordinates.top == limit)
		  	{ clearInterval(id);
		  	  window.open("Education.html", "_self");
		  	}
		  	else if(coordinates.left > 7*start + 3*width + 65  && coordinates.left < 7*start + 4*width + 70 && coordinates.top == limit)
		  	{ clearInterval(id);
		  	  window.open("Skills.html", "_self");
		  	}
		  	else if(coordinates.left > 9*start + 4*width + 85 && coordinates.left < 9*start + 5*width + 85 && coordinates.top == limit)
		  	{ clearInterval(id);;
		  	  window.open("Contact.html", "_self");
		  	}
		  	else if(coordinates.top == 0)
		  	{ document.getElementById("missed").style.display = "inline-block";

		  	}
		  }
	  }
	  else
	  { alert("Out of Bullets! Please Reload!");
	  }

	  insertBullet()
	  {
	  }
	}
}

window.addEventListener('load', function(){
	main();
})