var grid;
var score = 0;
var best = 0;
var flag = false;
var status = true; 
var oneTime = false;

function main()
{ 
	begin();
	document.addEventListener('keydown', move);
	$(".left").click(function(){
		var object = {
			keyCode : 37
		};
		move(object);
	});
	$(".right").click(function(){
		var object = {
			keyCode : 39
		};
		move(object);
	});
	$(".up").click(function(){
		var object = {
			keyCode : 38
		};
		move(object);
	});
	$(".down").click(function(){
		var object = {
			keyCode : 40
		};
		move(object);
	});
	$(".right").click(moveRight);
	$(".up").click(moveUp);
	$(".down").click(moveDown);
	$(".newGame").click(begin);
	$(".reset").click(begin);
	$(".continue").click(function(){
		flag = true;
    	document.getElementById("gameWon").style.display = "none";
	});
}

window.addEventListener('load', function(){
	main();
});

function begin()
{
	flag = true;
	count = 0;
	score = 0;
	grid = [[' ', ' ', ' ', ' '], [ ' ', ' ', ' ', ' '], [ ' ', ' ', ' ', ' '], [ ' ', ' ', ' ', ' ']];
    
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("gameWon").style.display = "none";
	
	insert();	
	insert();
	display();
}

function move(event)
{
	if(flag)
	{	if(event.keyCode == 39)
		{ moveRight();
		  insert()
	      display();
		}
		else if(event.keyCode == 37)
		{ moveLeft();
	      insert()
	      display();
		}
		else if(event.keyCode == 38)
		{ moveUp();
	      insert()
	      display();
		}
		else if(event.keyCode == 40)
		{ moveDown();
	      insert()
	      display();
		} 

		if (isGameOver()) 
		{ status = false;
	      flag = false;
	      document.getElementById("gameOver").style.display = "block";
	    }
	}
}	



// function shift(row, type)
// {	var status = false;
// 	if(type == 'right')
// 	{ for(var times=1; times<=3; times++)
// 	  { var j = 3;
// 	    while(j>0)
// 	    { if(grid[row][j] == ' ' && grid[row][j-1] != ' ')
// 		  { grid[row][j] = grid[row][j-1];
// 		  	grid[row][j-1] = ' ';
// 		  	status = true
// 		  }
// 		  j--;
// 	    }
// 	  }
// 	}
// 	else if(type == 'down')
// 	{ for(var times=1; times<=3; times++)
// 	  { var j = 3;
// 	    while(j>0)
// 	    { if(grid[j][row] == ' ' && grid[j-1][row] != ' ')
// 		  { grid[j][row] = grid[j-1][row];
// 		  	grid[j-1][row] = ' ';
// 		  	status = true
// 		  }
// 		  j--;
// 	    }
// 	  }
// 	}
// 	else if(type == 'up')
// 	{ for(var times=1; times<=3; times++)
// 	  { var j = 0;
// 	    while(j<3)
// 	    { if(grid[j][row] == ' ' && grid[j+1][row] != ' ')
// 	 	  { grid[j][row] = grid[j+1][row];
// 	  	  	grid[j+1][row] = ' ';
// 			status = true
// 		  }
// 		  j++;
// 		}
// 	  } 
// 	}
// 	else if(type == 'left')
// 	{ for(var times=1; times<=3; times++)
// 	  { var j = 0;
// 	    while(j<3)
// 	    { if(grid[row][j] == ' ' && grid[row][j+1] != ' ')
// 		  { grid[row][j] = grid[row][j+1];
// 		  	grid[row][j+1] = ' ';
// 		  	status = true
// 		  }
// 		  j++;
// 	    }
// 	  }
// 	}
// 	return status
// }

// function moveRight()
// { 
// 	var status = false;
// 	for(var i=0; i<4; i++)
// 	{ if(status == false)
// 	  status = shift(i, 'right');
// 	  else
// 	  shift(i, 'right');

// 	  var j=3;
// 	  while(j>0)
// 	  { if(grid[i][j] == grid[i][j-1] && grid[i][j] != ' ')
//  		{ grid[i][j] *= 2;
//  		  grid[i][j-1] = ' ';
//  		  score = score + grid[i][j];
//  		  status = shift(i, 'right');
//  		  status = true;
//  		}
//  		j--;
// 	  }
// 	}
// 	flag = flag || status;
// 	if(status)
// 	insert()
	
// 	display();
// }

// function moveLeft()
// {
// 	var status = false
// 	for(var i=0; i<4; i++)
// 	{ if(status == false)
// 	  status = shift(i, 'left');
// 	  else
// 	  shift(i, 'left');

// 	  var j=0;
// 	  while(j<3)
// 	  { if(grid[i][j] == grid[i][j+1] && grid[i][j] != ' ')
//  		{ grid[i][j] *= 2;
//  		  grid[i][j+1] = ' ';
//  		  score = score + grid[i][j];
//  		  status = shift(i, 'left');
//  		  status = true;
//  		}
//  		j++;
// 	  }
// 	}
// 	flag = flag || status;
// 	if(status)
// 	insert()
	
// 	display();
// }

// function moveUp()
// {
// 	var status = false
// 	for(var i=0; i<4; i++)
// 	{ if(status == false)
// 	  status = shift(i, 'up');
// 	  else
// 	  shift(i, 'up');

// 	  var j=0;
// 	  while(j<3)
// 	  { if(grid[j][i] == grid[j+1][i] && grid[j][i] != ' ')
//  		{ grid[j][i] *= 2;
//  		  grid[j+1][i] = ' ';
//  		  score = score + grid[j][i];
//  		  status = shift(i, 'up');
//  		  status = true;
//  		}
//  		j++;
// 	  }
// 	}
// 	flag = flag || status;
// 	if(status)
// 	insert();
	
// 	display();
// }

// function moveDown()
// {	
// 	var status = false
// 	for(var i=0; i<4; i++)
// 	{ if(status == false)
// 	  status = shift(i, 'down');
// 	  else
// 	  shift(i, 'down');

// 	  var j=3;
// 	  while(j>0)
// 	  { if(grid[j][i] == grid[j-1][i] && grid[j][i] != ' ')
//  		{ grid[j][i] *= 2;
//  		  grid[j-1][i] = ' ';
//  		  score = score + grid[j][i];
//  		  status = shift(i, 'down');
//  		  status = true;
//  		}
//  		j--;
// 	  }
// 	}
// 	flag = flag || status;
// 	if(status)
// 	insert()
	
// 	display();	
// }

function moveLeft() {
        
        for (var i = 0; i < 4; i++) {
            var k = 0;
            for (var j = 1; j < 4; j++) {
                if(grid[i][k] === ' ' && grid[i][j] !== ' '){
                    grid[i][k] = grid[i][j];
                    grid[i][j] = ' ';
                    status = true;
                    continue;
                }
                else if(grid[i][k] === grid[i][j] && grid[i][k] !== ' '){
                    grid[i][k] = 2*grid[i][k];
                    score += grid[i][k];
                    grid[i][j] = ' ';
                    ++k;
                    status = true;
                    continue;
                }
                else if(grid[i][k] !== grid[i][j] && grid[i][k] !== ' ' && grid[i][j] !== ' '){
                    if(k == j-1){
                        ++k;
                        continue;
                    }
                    else
                    {
                        ++k;
                        grid[i][k] = grid[i][j];
                        grid[i][j] = ' ';
                        status = true;
                        continue;
                    }
                }
            }
        }  
    }

    function moveRight() {

        for (var i = 0; i < 4; i++) {
            var k = 3;
            for (var j = 2; j >= 0; j--) {
                if(grid[i][k] === ' ' && grid[i][j]!== ' '){
                    grid[i][k] = grid[i][j];
                    grid[i][j] = ' ';
                    status = true;
                    continue;
                }
                else if(grid[i][k] === grid[i][j] && grid[i][k] !== ' '){
                    grid[i][k] = 2*grid[i][k];
                    score += grid[i][k];
                    grid[i][j] = ' ';
                    --k;
                    status = true;
                    continue;
                }
                else if(grid[i][k] !== grid[i][j] && grid[i][k] !== ' ' && grid[i][j] !== ' '){
                    if(k == j+1){
                        --k;
                        continue;
                    }
                    else
                    {
                        --k;
                        grid[i][k] = grid[i][j];
                        grid[i][j] = ' ';
                        status = true;
                        continue;
                    }
                }
            }
        }
    }

    function moveUp() {

        for (var i = 0; i < 4; i++) {
            var k = 0;
            for (var j = 1; j < 4; j++) {
                if(grid[k][i] === ' ' && grid[j][i]!== ' '){
                    grid[k][i] = grid[j][i];
                    grid[j][i] = ' ';
                    status = true;
                    continue;
                }
                else if(grid[k][i] === grid[j][i] && grid[k][i] !== ' '){
                    grid[k][i] = 2*grid[k][i];
                    score += grid[k][i];
                    grid[j][i] = ' ';
                    ++k;
                    status = true;
                    continue;
                }
                else if(grid[k][i] !== grid[j][i] && grid[k][i] !== ' ' && grid[j][i] !== ' '){
                    if(k == j-1){
                        ++k;
                        continue;
                    } else {
                        ++k;
                        grid[k][i] = grid[j][i];
                        grid[j][i] = ' ';
                        status = true;
                        continue;
                    }
                }
            }
        }
    }

    function moveDown() {
        
        for (var i = 0; i < 4; i++) {
            var k =3;
            for (var j = 2; j >= 0; j--) {
                if(grid[k][i] === ' ' && grid[j][i]!== ' '){
                    grid[k][i] =grid[j][i];
                    grid[j][i] = ' ';
                    status = true;
                    continue;
                }
                else if(grid[k][i] === grid[j][i] && grid[k][i] !== ' '){
                    grid[k][i] = 2* grid[k][i];
                    score += grid[k][i];
                    grid[j][i] = ' ';
                    --k;
                    status = true;
                    continue;
                }
                else if(grid[k][i] !== grid[j][i] && grid[k][i] !== ' ' && grid[j][i] !== ' '){
                    if(k == j+1){
                        --k;
                        continue;
                    } else {
                        --k;
                        grid[k][i] = grid[j][i];
                        grid[j][i] = ' ';
                        status = true;
                        continue;
                    }
                }
            }
        }
    }

    function isGameOver() {
        return isGridFull() && !isMovePossible();
    }

    function isGridFull() {
      for (var x = 0; x < 4; x++) {
            for (var y = 0; y < 4; y++) {
                if (grid[x][y] === ' ') {
                    return false;
                }
            }
        }
        return true;
    }

    function isMovePossible() {
      var y, x;
      for (x = 0; x < 4; x++) {
            for (y = 0; y < 3; y++) {
                if (grid[x][y] === grid[x][y+1]) {
                    return true;
                }
            }
        }
        for (y = 0; y < 4; y++) {
            for (x = 0; x < 3; x++) {
                if (grid[x][y] === grid[x+1][y]) {
                    return true;
                }
            }
        }
        return false;
    }

function insert()
{
	$("#points").html(score);
	if(score > best)
	{	best = score;
		$("#maximum").html(best);
	}

	if(status)
	{ while(true)
	  { if(isGridFull())
	  	break;
	  	var row = Math.floor(Math.random() * 4);
	    var col = Math.floor(Math.random() * 4);
	    if(grid[row][col] == ' ')
	    { var newElement = Math.floor(Math.random() * 10);
	      grid[row][col] = newElement > 7 ? 4 : 2;
	   	  break;
	    } 
	  }
	}
	else
		console.log("Game Over");
	// else if(flag == false && count > 0)
	// alert("Game Over");
}

function display()
{
	for(var i=0; i<=3; i++)
	{ for(var j=0; j<=3; j++)
		$("#pos" + i + j).html(grid[i][j]);
	}
	// console.log(flag);

	for(var i=0; i<=3; i++)
	{ for(var j=0; j<=3; j++)
	  { if(grid[i][j] == 2)
	  	{ $("#pos" + i + j).css("background-color", "#eee4da");
	  	  $("#pos" + i + j).css("color", "#776e65");
	  	}
	  	else if(grid[i][j] == 4)
	  	{ $("#pos" + i + j).css("background-color", "#eee1c9");
	      $("#pos" + i + j).css("color", "#776e65");
	  	}
	  	else if(grid[i][j] == 8)
	  	{ $("#pos" + i + j).css("background-color", "#f3b27a");
	      $("#pos" + i + j).css("color", "#f9f6f2");
	  	}
	  	else if(grid[i][j] == 16)
	  	{ $("#pos" + i + j).css("background-color", "#f69664");
	      $("#pos" + i + j).css("color", "#f9f6f2");
	  	}
	  	else if(grid[i][j] == 32)
	  	{ $("#pos" + i + j).css("background-color", "#f77c5f");
	  	  $("#pos" + i + j).css("color", "#f9f6f2");
	  	}
	  	else if(grid[i][j] == 64)
	  	{ $("#pos" + i + j).css("background-color", "#f75f3b");
	  	  $("#pos" + i + j).css("color", "#f9f6f2");
	  	}
	  	else if(grid[i][j] == 128)
	  	{ $("#pos" + i + j).css("background-color", "#edd073");
	  	  $("#pos" + i + j).css("color", "#f9f6f2");
	  	  $("#pos" + i + j).css("font-size", "50px");
	  	}
	  	else if(grid[i][j] == 256)
	  	{ $("#pos" + i + j).css("background-color", "#edcc62");
	  	  $("#pos" + i + j).css("color", "#f9f6f2");
	  	  $("#pos" + i + j).css("font-size", "50px");
	  	}
	  	else if(grid[i][j] == 2048)
	  	{ $("#pos" + i + j).css("background-color", "#cdc1b4");
	  	  if(!oneTime)
	  	  { console.log("Game Won!");
            document.getElementById("gameWon").style.display = "block";
            oneTime = true;
            flag = false
          }
	  	}
	  	else
	  	{ $("#pos" + i + j).css("background-color", "#cdc1b4");
	  	}
	  }

	}

}
