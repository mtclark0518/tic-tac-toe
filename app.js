// document.addEventListener('DOMContentLoaded', function(){
// console.log('hello');

// var allSpots = document.getElementsByTagName('td');
// var square = document.getElementsByClassName('square');
// // var topLeft = document.getElementById('tl');
// // var topMid = document.getElementById('tm');
// // var topRight = document.getElementById('tr');
// // var midLeft = document.getElementById('ml');
// // var midMid = document.getElementById('mm');
// // var midRight = document.getElementById('mr');
// // var botLeft = document.getElementById('bl');
// // var botMid = document.getElementById('bm');
// // var botRight = document.getElementById('br');
// var lebron = document.querySelectorAll('img.X');
// var total = 0;
// var steph = document.querySelector('div#steph1');
// console.log(steph);
// steph.classList.add('active');


// //var clickCounter - hidden but impacting scoreboard next moves img render
// // for (var i = 0; i < allSpots.length; i++){
// // 	allSpots[i].classList.addClass('');
// // }
// //was there a click on a square
// 	//has the square been clicked already?
// var somebodyMoved = function(){
// 	var lebron = this.nextSibling;
// 	console.log(lebron);
// 	if(total % 2 === 0) {
			
// 		console.log(lebron);	
// 	}
// };


// function addToTotal(){
// 	alert("Sorry. That's as far as I got last night");
// 	total += 1;
// 	console.log(this);
// 	somebodyMoved();
// }
// //add click event listener to the game squares
// var clickCounter = function(square){
// 	square.addEventListener('click', addToTotal);
// };
// clickCounter(topLeft);
// clickCounter(topMid);
// clickCounter(topRight);
// clickCounter(midLeft);
// clickCounter(midMid);
// clickCounter(midRight);
// clickCounter(botLeft);
// clickCounter(botMid);
// clickCounter(botRight);










// 		//if yes do nothing
// 		//else add 1 to the click counter &
// 		//trigger the whoseTurn function

// //is click even or odd
// });





var gameBoard = [];


var Squares = function(id, index, inPlay) {
	this.id = id;
	this.index = index;
	this.inPlay =  inPlay;
	gameBoard.push(this);
};


var Player = function(index, team, myTurn, myMoves){
	this.index = index;
	this.team = team;
	this.myMoves = [];
	
};
Player.prototype = {
	whoseTurn : function(){
		if(this.index === 0)
			{console.log('its myturn');}
	}
};
var p1 = new Player(0, "X");
console.log(p1);

var tl = new Squares('tl', 0, false);
var tm = new Squares('tm', 1, false);
var tr = new Squares('tr', 2, false);









