//document.addEventListener('DOMContentLoaded', fn, false);
var total = 0;
var wincount = 0;
var winner = [["012"],["345"],["678"],["036"],["147"],["258"],["048"],["246"]];
var runItBack = document.getElementById('reset');
	runItBack.addEventListener('click', alert);
var claimSquare = function(location, myTurn){
			var here = document.getElementById(location);
			here.setAttribute('inuse', 'true');
			var stamp = here.firstChild;
			stamp.classList.add(myTurn);
		};
	
var game = {		

	moveStamp : function(){
		var inuse = this.getAttribute('inuse');
		var location = this.getAttribute('id');
		var myTurn = '';
		if(inuse !== 'true'){
			total += 1;
			inuse = true;
			if(total === 10){
				alert("It's a draw");
				newGame();
			}else if(total % 2 === 0){
				myTurn = lebron.name;
				lebron.moveList.push(location);
			}else if (total % 2 === 1){
				myTurn = steph.name;
				steph.moveList.push(location);
				checkForWinner(steph.moveList);
				}
			claimSquare(location, myTurn);
			
		}else{alert("That square is already in play dumb dumb");}
	}
	
};
	
function Players(name) {
	this.name = name;
	this.moveList = [];
	}

function checkForWinner(array){
	array.sort();
	array.join();
	console.log(array);}

function NewSquare(id, inUse) {
	this.id = id;
	this.inUse = inUse;
	}
var newGame = function(){
	total = 0;
	var oldGame = document.getElementById('board');
	if(oldGame !== null)
		{oldGame.remove();}
	var table = document.createElement('table');
	table.setAttribute('id', 'board');
	document.body.appendChild(table);
		var row1 = document.createElement('tr');
		table.appendChild(row1);
			var square1 = document.createElement('td');
			row1.appendChild(square1);
			s1 = new NewSquare(1, false);
			var square2 = document.createElement('td');
			row1.appendChild(square2);
			s2 = new NewSquare(2, false);
			var square3 = document.createElement('td');
			row1.appendChild(square3);
			s3 = new NewSquare(3, false);
		var row2 = document.createElement('tr');
		table.appendChild(row2);
			var square4 = document.createElement('td');
			row2.appendChild(square4);
			s4 = new NewSquare(4, false);
			var square5 = document.createElement('td');
			row2.appendChild(square5);
			s5 = new NewSquare(5, false);
			var square6 = document.createElement('td');
			row2.appendChild(square6);
			s6 = new NewSquare(6, false);
		var row3 = document.createElement('tr');
		table.appendChild(row3);
			var square7 = document.createElement('td');
			row3.appendChild(square7);
			s1 = new NewSquare(7, false);
			var square8 = document.createElement('td');
			row3.appendChild(square8);
			s2 = new NewSquare(8, false);
			var square9 = document.createElement('td');
			row3.appendChild(square9);
			s3 = new NewSquare(9, false);
	runItBack.addEventListener('click', newGame);
	var gamepieces = document.querySelectorAll("td");
	for(var i = 0 ; i < gamepieces.length; i++ ){
		var imageDiv = document.createElement('div');
		imageDiv.classList.add("imgDiv");
		gamepieces[i].appendChild(imageDiv);
		gamepieces[i].setAttribute('id', i);
		gamepieces[i].setAttribute('inuse', false);
		gamepieces[i].addEventListener('click', game.moveStamp);
	}
};	

var lebron = new Players('lebron');
var steph = new Players('steph');	
	
newGame();
